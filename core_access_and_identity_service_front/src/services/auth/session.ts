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
  if (!raw) return null;

  try {
    return JSON.parse(raw) as User;
  } catch (_error) {
    return null;
  }
}
