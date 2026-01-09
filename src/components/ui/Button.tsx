import Link from 'next/link';

import { cn } from '@/lib/cn';

type CommonProps = {
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
};

function styles({
  variant = 'primary',
  size = 'md',
}: Pick<CommonProps, 'variant' | 'size'>) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-taxi-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-taxi-surface disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden shadow-lg backdrop-blur-sm';

  const sizes: Record<NonNullable<CommonProps['size']>, string> = {
    sm: 'h-10 px-4 text-sm',
    md: 'h-12 px-6 text-base',
    lg: 'h-14 px-8 text-lg',
  };

  const variants: Record<NonNullable<CommonProps['variant']>, string> = {
    primary:
      'bg-gradient-gold text-taxi-primary shadow-glow-gold hover:shadow-glow-gold-strong hover:scale-[1.02] hover:brightness-110 active:scale-[0.98] active:brightness-95 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700',
    secondary:
      'bg-gradient-primary text-taxi-surface-bright border border-taxi-gray/30 shadow-large hover:shadow-glow-primary hover:scale-[1.01] hover:border-taxi-secondary/40 active:scale-[0.99]',
    ghost:
      'bg-transparent/10 text-taxi-gray-light border border-taxi-gray/40 backdrop-blur-md hover:bg-taxi-secondary/15 hover:text-taxi-secondary hover:border-taxi-secondary/50 active:bg-taxi-secondary/20',
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

