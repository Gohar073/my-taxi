import Link from 'next/link';

import { cn } from '@/lib/cn';

type CommonProps = {
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
};

function styles({
  variant = 'primary',
  size = 'md',
}: Pick<CommonProps, 'variant' | 'size'>) {
  const base =
    'inline-flex items-center justify-center gap-2.5 rounded-2xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden';

  const sizes: Record<NonNullable<CommonProps['size']>, string> = {
    sm: 'h-11 px-5 text-sm',
    md: 'h-12 px-6 text-base',
    lg: 'h-14 px-8 text-lg',
  };

  const variants: Record<NonNullable<CommonProps['variant']>, string> = {
    primary:
      'bg-gradient-amber text-espresso-900 shadow-button hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700 before:ease-out',
    secondary:
      'bg-espresso-900 text-white shadow-medium hover:bg-espresso-800 hover:shadow-large hover:scale-[1.01] active:scale-[0.99]',
    ghost:
      'bg-transparent text-espresso-700 hover:bg-brand-50 hover:text-brand-700 active:bg-brand-100',
    outline:
      'border-2 border-espresso-200 bg-white text-espresso-700 shadow-soft hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 active:bg-brand-100',
  };

  return cn(base, sizes[size], variants[variant]);
}

export function Button({
  className,
  variant,
  size,
  ...props
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(styles({ variant, size }), className)} {...props} />
  );
}

export function ButtonLink({
  className,
  variant,
  size,
  href,
  ...props
}: CommonProps &
  Omit<React.ComponentProps<typeof Link>, 'href'> & { href: string }) {
  return (
    <Link
      href={href}
      className={cn(styles({ variant, size }), className)}
      {...props}
    />
  );
}
