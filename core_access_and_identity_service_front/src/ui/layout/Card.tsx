import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-[#002855]/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl ${className}`}>
      {children}
    </div>
  );
};
