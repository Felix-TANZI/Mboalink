import React, { ButtonHTMLAttributes } from 'react';
import { cn } from '@/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  loading = false,
  className,
  disabled,
  ...props
}) => {
  const baseStyles = 'px-6 py-3 rounded-lg transition-all duration-200 font-medium';
  
  const variants = {
    primary: 'bg-[#FFD700] text-[#003366] hover:bg-[#FFC700]',
    secondary: 'bg-[#003366] text-white hover:bg-[#004488]',
    outline: 'border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-[#003366]',
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        fullWidth && 'w-full',
        (disabled || loading) && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? 'Chargement...' : children}
    </button>
  );
};
