'use client';

import { forwardRef, useId } from 'react';
import { cn } from '@/lib/cn';

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const generatedId = useId();
    const radioId = id || generatedId;

    return (
      <div className="w-full">
        <label
          htmlFor={radioId}
          className={cn(
            'flex items-center gap-3 cursor-pointer group',
            props.disabled && 'cursor-not-allowed opacity-50'
          )}
        >
          <div className="relative flex-shrink-0">
            <input
              type="radio"
              ref={ref}
              className={cn(
                'peer sr-only',
                className
              )}
              {...props}
              id={radioId}
            />
            <div
              className={cn(
                'h-5 w-5 rounded-full border-2 transition-all duration-200',
                'border-taxi-gray/50 bg-taxi-surface-light/50',
                'group-hover:border-taxi-secondary/60',
                'peer-checked:border-taxi-secondary',
                'peer-focus:ring-2 peer-focus:ring-taxi-secondary/30 peer-focus:ring-offset-2 peer-focus:ring-offset-taxi-surface',
                'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
                error && 'border-taxi-error peer-checked:border-taxi-error'
              )}
            >
              <div className="h-full w-full rounded-full bg-taxi-secondary scale-0 peer-checked:scale-[0.5] transition-transform duration-200 origin-center" />
            </div>
          </div>
          {label && (
            <span className="text-sm font-medium text-taxi-gray-light group-hover:text-taxi-gray-lightest transition-colors">
              {label}
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

Radio.displayName = 'Radio';

