import React, { ReactNode } from 'react';

interface AuthGuardProps {
  children: ReactNode;
}

// Garde d'authentification pour protéger les routes
export const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  // Vérifier si l'utilisateur est authentifié
  const isAuthenticated = false; // À remplacer par la vraie logique

  if (!isAuthenticated) {
    // Rediriger vers la page de connexion
    return null;
  }

  return <>{children}</>;
};