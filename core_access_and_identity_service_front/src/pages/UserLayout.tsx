import React, { ReactNode } from 'react';
import { Header } from './widgets/Header';

interface UserLayoutProps {
  children: ReactNode;
}

// Layout pour les pages utilisateur
export const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="MboaLink - Espace Utilisateur" />
      <main className="container mx-auto py-8">
        {children}
      </main>
    </div>
  );
};