import { motion } from 'framer-motion';

export function Outsourcing({ reducedMotion }: { reducedMotion: boolean }) {
  const motionProps = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.7 },
        viewport: { once: true, amount: 0.4 }
      };

  return (
    <section id="outsourcing" data-world="desert" className="section-pad">
      <div className="max-container grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div {...motionProps}>
          <h2 className="section-title mb-4">Outsourcing / Subcontracting</h2>
          <p className="section-lead">
            We assemble a dedicated delivery pod for your roadmap: milestone-driven execution, clean handover, and
            full recovery audits if a project needs rescue. Expect proactive communication and measurable progress.
          </p>
          <p className="section-lead mt-4">
            Our team operates under your security posture and can align with enterprise compliance requirements.
          </p>
        </motion.div>
        <motion.div {...motionProps} className="card p-6">
          <h3 className="mb-3 text-sm uppercase tracking-[0.3em] text-[var(--muted)]">Typical deliverables</h3>
          <ul className="space-y-3 text-sm text-[var(--muted)]">
            <li>Production-ready repo with CI/tests.</li>
            <li>Documentation, runbooks, and architecture notes.</li>
            <li>Reproducible evaluation or training pipelines.</li>
            <li>Deployment notes, observability, and KPI tracking.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
