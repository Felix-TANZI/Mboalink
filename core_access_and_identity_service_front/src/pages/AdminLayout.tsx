import React, { ReactNode } from 'react';
import { Header } from './widgets/Header';
import { Sidebar } from './widgets/Sidebar';

interface AdminLayoutProps {
  children: ReactNode;
}

// Layout pour les pages administrateur
export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1">
        <Header title="MboaLink - Administration" />
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
};