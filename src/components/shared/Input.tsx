import React from 'react';
import clsx from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className, ...props }: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-zinc-400">
          {label}
        </label>
      )}
      <input
        className={clsx('input', className)}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}