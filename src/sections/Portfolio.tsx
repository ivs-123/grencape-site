import { motion } from 'framer-motion';

const items = [
  {
    title: 'AIS AI',
    description: 'Efficient LLM runtime with reasoning + verification workflows.'
  },
  {
    title: 'Finance DS Stack',
    description: 'Market intelligence, forecasting, and trading decision support.'
  },
  {
    title: 'Data Products',
    description: 'Dashboards, APIs, and internal intelligence systems.'
  },
  {
    title: 'Upcoming Initiatives',
    description: 'Private R&D combining multi-modal pipelines and operational tooling.'
  }
];

export function Portfolio({ reducedMotion }: { reducedMotion: boolean }) {
  const motionProps = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.7 },
        viewport: { once: true, amount: 0.4 }
      };

  return (
    <section id="portfolio" data-world="ocean" className="section-pad">
      <div className="max-container">
        <motion.div {...motionProps}>
          <h2 className="section-title mb-4">Portfolio</h2>
          <p className="section-lead max-w-2xl">
            A focused selection of platforms and research tracks powering the GRENCAPE ecosystem.
          </p>
        </motion.div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <motion.div key={item.title} {...motionProps} className="card p-6">
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-[var(--muted)]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
