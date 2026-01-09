'use client';

import { forwardRef, useId } from 'react';
import { cn } from '@/lib/cn';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  label?: string;
  hint?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, label, hint, id, ...props }, ref) => {
    const generatedId = useId();
    const textareaId = id || generatedId;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="mb-2 block text-sm font-semibold text-taxi-gray-light"
          >
            {label}
            {props.required && <span className="ml-1 text-taxi-error">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            'min-h-[120px] w-full rounded-xl border bg-taxi-surface-light/80 px-4 py-3 text-sm font-medium',
            'text-taxi-gray-lightest placeholder:text-taxi-gray/60',
            'transition-all duration-200',
            'backdrop-blur-sm',
            'border-taxi-gray/40',
            'resize-y',
            'hover:border-taxi-secondary/40 hover:bg-taxi-surface-light',
            'focus:border-taxi-secondary focus:bg-taxi-surface-light focus:outline-none focus:ring-2 focus:ring-taxi-secondary/30',
            'disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-taxi-gray/40',
            error && 'border-taxi-error focus:border-taxi-error focus:ring-taxi-error/30',
            className
          )}
          {...props}
          id={textareaId}
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

Textarea.displayName = 'Textarea';

