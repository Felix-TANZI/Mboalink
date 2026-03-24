import { httpConfig } from './config';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface ApiEnvelope<T> {
  ok: boolean;
  data: T;
  meta?: Record<string, unknown> | null;
  error?: {
    message: string;
    details?: unknown;
  };
}

export class ApiError extends Error {
  status: number;
  details?: unknown;

  constructor(message: string, status: number, details?: unknown) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.details = details;
  }
}

interface RequestOptions {
  method?: HttpMethod;
  body?: unknown;
  query?: Record<string, string | number | boolean | undefined | null>;
  headers?: Record<string, string>;
  authToken?: string | null;
}

function withQueryParams(path: string, query?: RequestOptions['query']) {
  if (!query) return path;

  const params = new URLSearchParams();
  Object.entries(query).forEach(([key, value]) => {
    if (value === undefined || value === null || value === '') return;
    params.append(key, String(value));
  });

  const qs = params.toString();
  return qs ? `${path}?${qs}` : path;
}

function resolveUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  const cleanBase = httpConfig.baseURL.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
}

export async function apiRequest<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), httpConfig.timeout);

  try {
    const url = resolveUrl(withQueryParams(path, options.query));

    const response = await fetch(url, {
      method: options.method || 'GET',
      headers: {
        ...httpConfig.headers,
        ...(options.authToken ? { Authorization: `Bearer ${options.authToken}` } : {}),
        ...options.headers,
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
      signal: controller.signal,
    });

    const contentType = response.headers.get('content-type') || '';
    const isJson = contentType.includes('application/json');
    const payload = isJson ? (await response.json()) as ApiEnvelope<T> : null;

    if (!response.ok) {
      const message = payload?.error?.message || `HTTP ${response.status}`;
      throw new ApiError(message, response.status, payload?.error?.details);
    }

    if (!payload || !payload.ok) {
      throw new ApiError('Invalid API response format', response.status);
    }

    return payload.data;
  } catch (error) {
    if (error instanceof ApiError) throw error;
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new ApiError('Request timeout', 408);
    }
    throw new ApiError((error as Error).message || 'Network error', 500);
  } finally {
    clearTimeout(timeout);
  }
}
