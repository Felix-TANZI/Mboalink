// Types communs de l'application

export interface User {
  id: string;
  email: string;
  name?: string;
  fullName?: string;
  role?: string;
  hotelId?: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
}
