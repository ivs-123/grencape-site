import { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactProps {
  reducedMotion: boolean;
  linkedInUrl: string;
  formspreeUrl: string;
  corpEmail: string;
}

export function Contact({ reducedMotion, linkedInUrl, formspreeUrl, corpEmail }: ContactProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const motionProps = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.7 },
        viewport: { once: true, amount: 0.4 }
      };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (!formspreeUrl) {
      const name = formData.get('name') || '';
      const company = formData.get('company') || '';
      const email = formData.get('email') || '';
      const interest = formData.get('interest') || '';
      const message = formData.get('message') || '';
      const body = `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nInterest: ${interest}\n\n${message}`;
      const mailto = `mailto:${corpEmail}?subject=GRENCAPE%20Inquiry&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
      form.reset();
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: formData
      });
      if (!response.ok) {
        throw new Error('Form submission failed');
      }
      setStatus('sent');
      form.reset();
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" data-world="deep" className="section-pad">
      <div className="max-container grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div {...motionProps}>
          <h2 className="section-title mb-4">Contact</h2>
          <p className="section-lead">
            We can sign NDA and work under your security requirements. Tell us about your product, timeline, and
            required outcomes.
          </p>
          <a href={linkedInUrl} className="mt-6 inline-flex text-sm font-medium text-[var(--text)] link-underline">
            LinkedIn
          </a>
        </motion.div>
        <motion.form {...motionProps} onSubmit={handleSubmit} className="card grid gap-4 p-6">
          <div className="grid gap-3 md:grid-cols-2">
            <label className="text-sm">
              Name
              <input
                name="name"
                required
                className="mt-2 w-full rounded-xl border border-[var(--border)] bg-transparent px-3 py-2 text-sm focus-ring"
                placeholder="Your name"
              />
            </label>
            <label className="text-sm">
              Company
              <input
                name="company"
                className="mt-2 w-full rounded-xl border border-[var(--border)] bg-transparent px-3 py-2 text-sm focus-ring"
                placeholder="Company"
              />
            </label>
          </div>
          <label className="text-sm">
            Email
            <input
              type="email"
              name="email"
              required
              className="mt-2 w-full rounded-xl border border-[var(--border)] bg-transparent px-3 py-2 text-sm focus-ring"
              placeholder="you@company.com"
            />
          </label>
          <label className="text-sm">
            Interest
            <select
              name="interest"
              className="mt-2 w-full rounded-xl border border-[var(--border)] bg-transparent px-3 py-2 text-sm focus-ring"
            >
              <option>AI runtime / AIS AI</option>
              <option>Data science / analytics</option>
              <option>Outsourcing / subcontracting</option>
              <option>Advisory or audit</option>
            </select>
          </label>
          <label className="text-sm">
            Message
            <textarea
              name="message"
              required
              rows={4}
              className="mt-2 w-full rounded-xl border border-[var(--border)] bg-transparent px-3 py-2 text-sm focus-ring"
              placeholder="Tell us about your project."
            />
          </label>
          <button
            type="submit"
            className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-[var(--bg)] shadow-soft transition hover:opacity-90 focus-ring"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </button>
          {status === 'sent' && <p className="text-xs text-[var(--muted)]">Message sent. We will reply shortly.</p>}
          {status === 'error' && (
            <p className="text-xs text-[var(--muted)]">Something went wrong. Please email us directly.</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
