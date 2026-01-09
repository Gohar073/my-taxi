'use client';

import { forwardRef, useId } from 'react';
import { cn } from '@/lib/cn';

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const generatedId = useId();
    const checkboxId = id || generatedId;

    return (
      <div className="w-full">
        <label
          htmlFor={checkboxId}
          className={cn(
            'flex items-start gap-3 cursor-pointer group',
            props.disabled && 'cursor-not-allowed opacity-50'
          )}
        >
          <div className="relative flex-shrink-0 mt-0.5">
            <input
              type="checkbox"
              ref={ref}
              className={cn(
                'peer sr-only',
                className
              )}
              {...props}
              id={checkboxId}
            />
            <div
              className={cn(
                'h-5 w-5 rounded-md border-2 transition-all duration-200',
                'border-taxi-gray/50 bg-taxi-surface-light/50',
                'group-hover:border-taxi-secondary/60',
                'peer-checked:border-taxi-secondary peer-checked:bg-taxi-secondary',
                'peer-focus:ring-2 peer-focus:ring-taxi-secondary/30 peer-focus:ring-offset-2 peer-focus:ring-offset-taxi-surface',
                'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
                error && 'border-taxi-error peer-checked:border-taxi-error peer-checked:bg-taxi-error'
              )}
            >
              <svg
                className="h-full w-full text-taxi-primary opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          {label && (
            <span className="text-sm font-medium text-taxi-gray-light group-hover:text-taxi-gray-lightest transition-colors">
              {label}
              {props.required && <span className="ml-1 text-taxi-error">*</span>}
            </span>
          )}
        </label>
        {error && (
          <p className="mt-1.5 ml-8 text-xs font-semibold text-taxi-error">{error}</p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

