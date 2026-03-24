import { useState } from 'react';
import type { User } from '@/types';

interface UseAuthReturn {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Hook personnalisé pour gérer l'état d'authentification
export const useAuth = (): UseAuthReturn => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Logique de connexion
    console.log('Login:', email, password);
  };

  const logout = () => {
    setUser(null);
  };

  return {
    user,
    isAuthenticated: !!user,
    login,
    logout,
  };
};
