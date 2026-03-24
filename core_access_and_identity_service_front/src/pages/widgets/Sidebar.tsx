import React, { ReactNode } from 'react';

interface SidebarProps {
  children?: ReactNode;
}

// Widget Sidebar réutilisable
export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <aside className="w-64 bg-[#002855] text-white min-h-screen p-4">
      <nav className="space-y-2">
        {children || (
          <>
            <a href="#" className="block p-2 hover:bg-[#003366] rounded">Tableau de bord</a>
            <a href="#" className="block p-2 hover:bg-[#003366] rounded">Profil</a>
            <a href="#" className="block p-2 hover:bg-[#003366] rounded">Paramètres</a>
          </>
        )}
      </nav>
    </aside>
  );
};