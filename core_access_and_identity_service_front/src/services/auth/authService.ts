import type { LoginCredentials, User } from '@/types';
import { apiRequest } from '@/services/http/client';
import { clearSession, getAccessToken, getRefreshToken, getStoredUser, saveSession } from './session';

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    email: string;
    fullName?: string;
    role?: string;
  };
}

interface MeResponse {
  sub: string;
  email: string;
  fullName?: string;
  role?: string;
}

function toUser(input: { id?: string; sub?: string; email: string; fullName?: string; role?: string }): User {
  return {
    id: input.id || input.sub || '',
    email: input.email,
    name: input.fullName,
    role: input.role,
  };
}

export const authService = {
  async login(credentials: LoginCredentials): Promise<{ mfaRequired: boolean; email: string }> {
    const data = await apiRequest<{ mfaRequired: boolean; email: string }>('/auth/login', {
      method: 'POST',
      body: credentials,
    });
    return data;
  },

  async verifyMfa(email: string, code: string): Promise<User> {
    const data = await apiRequest<{ accessToken: string; refreshToken: string; user: { id: string; email: string; fullName?: string; role?: string } }>('/auth/mfa/verify', {
      method: 'POST',
      body: { email, code },
    });

    const user = toUser(data.user);
    saveSession({
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
      user,
    });

    return user;
  },

  async me(): Promise<User> {
    const token = getAccessToken();
    if (!token) {
      throw new Error('Not authenticated');
    }

    const data = await apiRequest<MeResponse>('/auth/me', {
      authToken: token,
    });

    const user = toUser(data);
    saveSession({
      accessToken: token,
      refreshToken: getRefreshToken() || '',
      user,
    });

    return user;
  },

  getAccessToken,
  getRefreshToken,
  getStoredUser,

  async logout(): Promise<void> {
    clearSession();
  },
};
