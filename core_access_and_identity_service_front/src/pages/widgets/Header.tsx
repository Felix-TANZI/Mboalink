import React, { ReactNode } from 'react';

interface HeaderProps {
  title?: string;
  children?: ReactNode;
}

// Widget Header réutilisable
export const Header: React.FC<HeaderProps> = ({ title, children }) => {
  return (
    <header className="bg-[#003366] text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">{title || 'MboaLink'}</h1>
        {children}
      </div>
    </header>
  );
};