import React from 'react';
import { Check } from 'lucide-react';

interface FeatureItemProps {
  text: string;
  variant: 'green' | 'yellow';
}

export const FeatureItem: React.FC<FeatureItemProps> = ({ text, variant }) => {
  const bgColor = variant === 'green' ? 'bg-green-500' : 'bg-[#FFD700]';
  const textColor = variant === 'green' ? 'text-green-500' : 'text-[#FFD700]';

  return (
    <div className="flex items-center gap-2">
      <div className={`${bgColor} rounded-full p-1`}>
        <Check className="w-3 h-3 text-[#003366]" />
      </div>
      <span className={`text-sm ${textColor}`}>{text}</span>
    </div>
  );
};
