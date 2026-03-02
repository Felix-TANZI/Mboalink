import React from 'react';

interface StatsItemProps {
  value: string;
  label: string;
}

export const StatsItem: React.FC<StatsItemProps> = ({ value, label }) => {
  return (
    <div className="text-center">
      <div className="text-white text-2xl font-bold">{value}</div>
      <div className="text-gray-400 text-xs uppercase tracking-wider">{label}</div>
    </div>
  );
};
