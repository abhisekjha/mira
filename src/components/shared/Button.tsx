import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import clsx from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  to?: string;
  onClick?: () => void;
  icon?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({ 
  children, 
  variant = 'primary', 
  to, 
  onClick,
  icon = false,
  className,
  type = 'button'
}: ButtonProps) {
  const baseStyles = clsx(
    'btn',
    {
      'btn-primary': variant === 'primary',
      'btn-secondary': variant === 'secondary'
    },
    className
  );

  if (to) {
    return (
      <Link to={to} className={baseStyles}>
        {children}
        {icon && <ArrowRight className="w-5 h-5 ml-2" />}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseStyles}>
      {children}
      {icon && <ArrowRight className="w-5 h-5 ml-2" />}
    </button>
  );
}