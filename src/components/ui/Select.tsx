'use client';

import { forwardRef, useId } from 'react';
import { cn } from '@/lib/cn';

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
  label?: string;
  hint?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, label, hint, children, id, ...props }, ref) => {
    const generatedId = useId();
    const selectId = id || generatedId;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="mb-2 block text-sm font-semibold text-taxi-gray-light"
          >
            {label}
            {props.required && <span className="ml-1 text-taxi-error">*</span>}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            className={cn(
              'h-12 w-full appearance-none rounded-xl border bg-taxi-surface-light/80 px-4 pr-10 text-sm font-medium',
              'text-taxi-gray-lightest',
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
            id={selectId}
          >
            {children}
          </select>
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-taxi-gray">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
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

Select.displayName = 'Select';

