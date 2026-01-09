import { cn } from '@/lib/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'elevated' | 'hover';
  children: React.ReactNode;
}

export function Card({ 
  className, 
  variant = 'default', 
  children, 
  ...props 
}: CardProps) {
  const variants = {
    default: 'bg-gradient-card border-taxi-gray/30 shadow-glass',
    glass: 'bg-gradient-glass border-taxi-gray/40 shadow-glass backdrop-blur-xl',
    elevated: 'bg-gradient-card border-taxi-gray/40 shadow-xl backdrop-blur-sm',
    hover: 'bg-gradient-card border-taxi-gray/40 shadow-glass backdrop-blur-sm hover:shadow-xl hover:border-taxi-secondary/50 hover:-translate-y-1 transition-all duration-300',
  };

  return (
    <div
      className={cn(
        'rounded-3xl border p-6',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

