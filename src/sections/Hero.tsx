import { motion } from 'framer-motion';
import { Button } from '../components/Button';

interface HeroProps {
  reducedMotion: boolean;
  hfUrl: string;
  linkedInUrl: string;
}

export function Hero({ reducedMotion, hfUrl, linkedInUrl }: HeroProps) {
  const motionProps = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.9 },
        viewport: { once: true }
      };

  return (
    <section id="home" data-world="space" className="section-pad">
      <div className="max-container">
        <motion.div {...motionProps}>
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[var(--muted)]">Quiet tech. Premium craft.</p>
          <h1 className="hero-title mb-6">GRENCAPE</h1>
          <p className="hero-subtitle max-w-2xl">
            Building an AI ecosystem: efficient models, applied data science, and production systems.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#aim">Explore AIM AI</Button>
            <Button href="#outsourcing" variant="ghost">
              Outsourcing / Subcontracting
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-[var(--muted)]">
            <a href={hfUrl} className="flex items-center gap-2 link-underline" aria-label="Hugging Face">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)]">HF</span>
              Hugging Face
            </a>
            <a href={linkedInUrl} className="flex items-center gap-2 link-underline" aria-label="LinkedIn">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)]">
                in
              </span>
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
