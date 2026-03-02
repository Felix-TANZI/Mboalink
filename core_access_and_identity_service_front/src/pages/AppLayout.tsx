import React, { ReactNode } from 'react';

interface AppLayoutProps {
  children: ReactNode;
}

// Layout principal de l'application
export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-[#003366] text-white p-4">
        {/* Contenu du header */}
      </header>

      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#003366] text-white p-4 text-center">
        <p className="text-sm">© 2024 MboaLink. Tous droits réservés.</p>
      </footer>
    </div>
  );
};