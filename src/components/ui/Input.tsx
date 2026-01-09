'use client';

import { forwardRef, useId } from 'react';
import { cn } from '@/lib/cn';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  hint?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, label, hint, type = 'text', id, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-2 block text-sm font-semibold text-taxi-gray-light"
          >
            {label}
            {props.required && <span className="ml-1 text-taxi-error">*</span>}
          </label>
        )}
        <input
          type={type}
          ref={ref}
          className={cn(
            'h-12 w-full rounded-xl border bg-taxi-surface-light/80 px-4 text-sm font-medium',
            'text-taxi-gray-lightest placeholder:text-taxi-gray/60',
            'transition-all duration-200',
            'backdrop-blur-sm',
            'border-taxi-gray/40',
            'hover:border-taxi-secondary/40 hover:bg-taxi-surface-light',
            'focus:border-taxi-secondary focus:bg-taxi-surface-light focus:outline-none focus:ring-2 focus:ring-taxi-secondary/30',
            'disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-taxi-gray/40',
            error && 'border-taxi-error focus:border-taxi-error focus:ring-taxi-error/30',
            className
          )}
          {...props}
          id={inputId}
        />
        {hint && !error && (
          <p className="mt-1.5 text-xs text-taxi-gray/80">{hint}</p>
        )}
        {error && (
          <p className="mt-1.5 text-xs font-semibold text-taxi-error">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

