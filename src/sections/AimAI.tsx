import { motion } from 'framer-motion';

interface AimAIProps {
  reducedMotion: boolean;
  hfUrl: string;
}

export function AimAI({ reducedMotion, hfUrl }: AimAIProps) {
  const motionProps = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.7 },
        viewport: { once: true, amount: 0.4 }
      };

  return (
    <section id="ais" data-world="space" className="section-pad">
      <div className="max-container grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div {...motionProps}>
          <h2 className="section-title mb-4">AIS AI</h2>
          <p className="section-lead">
            AIS AI is our compact, highly efficient multilingual LLM runtime. We focus on reasoning + verification
            workflows, bringing fast evaluation, guardrails, and scalable ecosystem design from research into
            production.
          </p>
        </motion.div>
        <motion.div {...motionProps} className="card p-6">
          <h3 className="mb-3 text-sm uppercase tracking-[0.3em] text-[var(--muted)]">Capabilities</h3>
          <ul className="space-y-3 text-sm text-[var(--muted)]">
            <li>Runtime-first model optimization, latency budgets, and memory discipline.</li>
            <li>Reasoning + verification pipelines with traceable outputs.</li>
            <li>Scalable multilingual deployments for research and enterprise teams.</li>
          </ul>
          <a href={hfUrl} className="mt-6 inline-flex text-sm font-medium text-[var(--text)] link-underline">
            Hugging Face
          </a>
        </motion.div>
      </div>
    </section>
  );
}
