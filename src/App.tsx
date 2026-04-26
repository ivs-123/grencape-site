import { motion } from 'framer-motion';

type Project = {
  name: string;
  category: string;
  role: string;
  stage: string;
};

const layers = [
  {
    title: 'Core Intelligence',
    projects: ['AIS AI', 'Semanta AI', 'Gamma AI Hedge Fund'],
    note: 'Foundation models, data generation and autonomous financial intelligence.'
  },
  {
    title: 'Core Infrastructure',
    projects: ['ERA Cloud', 'ERA DB'],
    note: 'Compute, inference, storage and unified data control plane.'
  },
  {
    title: 'Data / Analytics',
    projects: ['ERA Prism Studio - Data Scinece Studio'],
    note: 'Decision-grade observability and data science workflows in one studio.'
  },
  {
    title: 'Consumer / Platform',
    projects: ['SomeBox', 'One Browser', 'Quantum Messenger', 'Mind Music'],
    note: 'Daily products where ERA1 intelligence becomes practical user value.'
  },
  {
    title: 'Fintech',
    projects: ['ERA Pay', 'MoneyOne'],
    note: 'Payments and transfer rails for consumer and business transactions.'
  }
];

const projects: Project[] = [
  {
    name: 'AIS AI',
    category: 'AI / Intelligence',
    role: 'Own family of ERA1 foundation models and orchestration logic.',
    stage: 'Core'
  },
  {
    name: 'Semanta AI',
    category: 'AI / Data Factory',
    role: 'Synthetic data, fine-tuning workflows, standards and world simulation.',
    stage: 'Build'
  },
  {
    name: 'Gamma AI Hedge Fund',
    category: 'AI / Finance',
    role: 'Forecasting, signals and autonomous execution with strict risk logic.',
    stage: 'Capital'
  },
  {
    name: 'ERA Cloud',
    category: 'Infrastructure',
    role: 'Control plane for compute, inference, storage and server capacity.',
    stage: 'Infra'
  },
  {
    name: 'ERA DB',
    category: 'Infrastructure / Data',
    role: 'Unified PostgreSQL + ClickHouse platform with bridge and AI gateway.',
    stage: 'Infra'
  },
  {
    name: 'ERA Prism Studio - Data Scinece Studio',
    category: 'Analytics',
    role: 'Unified data and science studio for strategic and operational intelligence.',
    stage: 'Data'
  },
  {
    name: 'SomeBox',
    category: 'Consumer / Platform',
    role: 'Cloud sharing system for frictionless file distribution.',
    stage: 'Product'
  },
  {
    name: 'One Browser',
    category: 'Consumer / Platform',
    role: 'AI-native browser with permanent free VPN experience.',
    stage: 'Product'
  },
  {
    name: 'Quantum Messenger',
    category: 'Consumer / Security',
    role: 'Protected messenger for next-generation private communication.',
    stage: 'Product'
  },
  {
    name: 'Mind Music',
    category: 'Consumer / Experimental',
    role: 'Playlist generation by mood and voice intent description.',
    stage: 'Lab'
  },
  {
    name: 'ERA Pay',
    category: 'Fintech / Payments',
    role: 'Payment gateway and financial infrastructure layer.',
    stage: 'Fintech'
  },
  {
    name: 'MoneyOne',
    category: 'Fintech / Transfers',
    role: 'P2P and C2C transfer product.',
    stage: 'Fintech'
  }
];

const viewport = {
  once: true,
  amount: 0.25
};

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <a className="brand" href="#top" aria-label="Grencape home">
            <img className="brand-logo" src="/brand/grencape-wordmark-light.png" alt="Grencape" />
          </a>
          <nav className="topnav" aria-label="Primary">
            <a href="#layers">Architecture</a>
            <a href="#projects">Companies</a>
            <a href="#manifesto">Thesis</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <motion.div
            className="hero-copy"
            initial={false}
          >
            <p className="eyebrow">GRENCAPE PRESENTS</p>
            <h1>
              ERA1
              <span>Technology Concern Architecture</span>
            </h1>
            <p className="hero-lead">
              ERA1 is the operating architecture of Grencape: a focused system of AI, infrastructure,
              analytics, consumer platforms and financial rails built to compound into one concern.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">Explore the portfolio</a>
              <a href="mailto:hello@grencape.xyz" className="btn btn-ghost">Start a conversation</a>
            </div>
          </motion.div>

          <motion.div
            className="architecture-model"
            initial={false}
            aria-label="ERA1 architecture layers"
          >
            <div className="model-floor">
              <span>AI</span>
              <strong>Intelligence Layer</strong>
            </div>
            <div className="model-floor">
              <span>INFRA</span>
              <strong>Cloud, DB, Capacity</strong>
            </div>
            <div className="model-floor">
              <span>DATA</span>
              <strong>Prism Studio</strong>
            </div>
            <div className="model-floor">
              <span>FINTECH</span>
              <strong>Payments, Transfers</strong>
            </div>
            <div className="model-base">
              <p>AI. Infrastructure. Fintech.</p>
              <strong>12 active initiatives across 5 strategic layers</strong>
            </div>
          </motion.div>
        </section>

        <section className="section section-layers" id="layers">
          <motion.div
            className="section-head"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.45 }}
          >
            <p className="eyebrow">ERA1 ARCHITECTURE</p>
            <h2>Integrated layers. Compounding impact.</h2>
          </motion.div>
          <div className="layer-list">
            {layers.map((layer, index) => (
              <motion.article
                key={layer.title}
                className="layer-row"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.3, delay: index * 0.04 }}
              >
                <p className="layer-index">0{index + 1}</p>
                <div>
                  <h3>{layer.title}</h3>
                  <p>{layer.note}</p>
                </div>
                <p className="layer-projects">{layer.projects.join(' / ')}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section section-projects" id="projects">
          <motion.div
            className="section-head"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.45 }}
          >
            <p className="eyebrow">CURRENT SHOWCASE</p>
            <h2>Companies and products currently presented by Grencape.</h2>
          </motion.div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <motion.article
                key={project.name}
                className="project-item"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.25, delay: index * 0.02 }}
              >
                <p className="project-stage">{project.stage}</p>
                <h3>{project.name}</h3>
                <p className="project-category">{project.category}</p>
                <p className="project-role">{project.role}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section section-manifesto" id="manifesto">
          <motion.div
            className="manifesto-grid"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.45 }}
          >
            <div>
              <p className="eyebrow">THESIS</p>
              <h2>ERA1 is built as a concern, not a collection of disconnected startups.</h2>
            </div>
            <ul>
              <li>Intelligence is native: model systems and data factories sit at the core.</li>
              <li>Infrastructure is shared: compute, storage and data control compound across products.</li>
              <li>Execution is commercial: consumer and fintech layers turn capability into market surface.</li>
            </ul>
          </motion.div>
        </section>

        <section className="section section-roadmap">
          <motion.div
            className="section-head"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.45 }}
          >
            <p className="eyebrow">ROADMAP SIGNAL</p>
            <h2>From AI core to integrated concern execution.</h2>
          </motion.div>
          <div className="roadmap-grid">
            <article>
              <p>Phase 01</p>
              <h3>Build the model and data nucleus</h3>
              <span>AIS AI · Semanta AI · Gamma AI Hedge Fund</span>
            </article>
            <article>
              <p>Phase 02</p>
              <h3>Scale infrastructure and analytics fabric</h3>
              <span>ERA Cloud · ERA DB · ERA Prism Studio - Data Scinece Studio</span>
            </article>
            <article>
              <p>Phase 03</p>
              <h3>Ship consumer and fintech surfaces</h3>
              <span>SomeBox · One Browser · Quantum Messenger · Mind Music · ERA Pay · MoneyOne</span>
            </article>
          </div>
        </section>

        <section className="section section-contact" id="contact">
          <motion.div
            className="contact-box"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.4 }}
          >
            <p className="eyebrow">CONTACT</p>
            <h2>Build with Grencape and ERA1.</h2>
            <p>We are open to strategic partners, investors and enterprise collaborations.</p>
            <a className="btn btn-primary" href="mailto:hello@grencape.xyz">hello@grencape.xyz</a>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

export default App;
