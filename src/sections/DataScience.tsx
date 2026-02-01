import { motion } from 'framer-motion';

export function DataScience({ reducedMotion }: { reducedMotion: boolean }) {
  const motionProps = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.7 },
        viewport: { once: true, amount: 0.4 }
      };

  return (
    <section id="data" data-world="lensing" className="section-pad">
      <div className="max-container grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div {...motionProps}>
          <h2 className="section-title mb-4">Data Science</h2>
          <p className="section-lead">
            Finance + real economy. We build in-house products while delivering outsourcing and subcontracting
            analytics that keep decision-makers ahead of market shifts.
          </p>
        </motion.div>
        <motion.div {...motionProps} className="card p-6">
          <h3 className="mb-3 text-sm uppercase tracking-[0.3em] text-[var(--muted)]">Services</h3>
          <ul className="space-y-3 text-sm text-[var(--muted)]">
            <li>Market analytics and signal discovery.</li>
            <li>Forecasting systems with robust backtesting.</li>
            <li>ML engineering for pipelines and observability.</li>
            <li>Decision systems for finance and real economy operations.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
