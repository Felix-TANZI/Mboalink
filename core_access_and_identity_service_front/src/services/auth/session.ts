import type { User } from '@/types';

export interface AuthSession {
  accessToken: string;
  refreshToken: string;
  user: User;
}

const ACCESS_TOKEN_KEY = 'mboalink.accessToken';
const REFRESH_TOKEN_KEY = 'mboalink.refreshToken';
const USER_KEY = 'mboalink.user';

function canUseStorage() {
  return typeof window !== 'undefined' && !!window.localStorage;
}

function decodeBase64Url(value: string): string {
  const base64 = value.replace(/-/g, '+').replace(/_/g, '/');
  const padded = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), '=');
  return atob(padded);
}

function getUserFromAccessToken(): User | null {
  const token = getAccessToken();
  if (!token) return null;

  try {
    const payload = JSON.parse(decodeBase64Url(token.split('.')[1] || '')) as {
      sub?: string;
      email?: string;
      fullName?: string;
      role?: string;
      hotelId?: string | null;
      exp?: number;
    };

    if (payload.exp && payload.exp * 1000 < Date.now()) return null;
    if (!payload.sub || !payload.email) return null;

    const user: User = {
      id: payload.sub,
      email: payload.email,
      name: payload.fullName,
      fullName: payload.fullName,
      role: payload.role,
      hotelId: payload.hotelId || null,
    };

    localStorage.setItem(USER_KEY, JSON.stringify(user));
    return user;
  } catch (_error) {
    return null;
  }
}

export function saveSession(session: AuthSession): void {
  if (!canUseStorage()) return;
  localStorage.setItem(ACCESS_TOKEN_KEY, session.accessToken);
  localStorage.setItem(REFRESH_TOKEN_KEY, session.refreshToken);
  localStorage.setItem(USER_KEY, JSON.stringify(session.user));
}

export function clearSession(): void {
  if (!canUseStorage()) return;
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export function getAccessToken(): string | null {
  if (!canUseStorage()) return null;
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function getRefreshToken(): string | null {
  if (!canUseStorage()) return null;
  return localStorage.getItem(REFRESH_TOKEN_KEY);
}

export function getStoredUser(): User | null {
  if (!canUseStorage()) return null;
  const raw = localStorage.getItem(USER_KEY);
  if (!raw) return getUserFromAccessToken();

  try {
    return JSON.parse(raw) as User;
  } catch (_error) {
    localStorage.removeItem(USER_KEY);
    return getUserFromAccessToken();
  }
}
