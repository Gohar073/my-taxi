import { Container } from '@/components/ui/Container';

export function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-taxi-gray/30 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-taxi-secondary/15 via-transparent to-taxi-accent/15" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,215,0,0.1)_0%,_transparent_70%)]" />
      <Container className="py-20 md:py-28 relative">
        <div className="max-w-4xl animate-fade-in">
          <h1 className="text-4xl font-black tracking-tight text-taxi-surface-bright md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1]">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-6 text-base text-taxi-gray-light md:text-lg lg:text-xl leading-relaxed max-w-3xl">{subtitle}</p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

