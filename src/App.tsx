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
    note: 'Model intelligence, data engineering and autonomous capital logic.'
  },
  {
    title: 'Core Infrastructure',
    projects: ['ERA Cloud', 'ERA DB'],
    note: 'Compute routing, data control plane and unified storage backbone.'
  },
  {
    title: 'Data / Analytics',
    projects: ['ERA Prism Data'],
    note: 'Operational analytics layer with decision-grade observability.'
  },
  {
    title: 'Consumer / Platform',
    projects: ['SomeBox', 'One Browser', 'Quantum Messenger', 'Mind Music'],
    note: 'Mass products where ERA1 intelligence becomes daily experience.'
  },
  {
    title: 'Fintech',
    projects: ['ERA Pay', 'MoneyOne'],
    note: 'Payments and transfers stack for cross-border and everyday rails.'
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
    name: 'ERA Prism Data',
    category: 'Analytics',
    role: 'Data and analytics layer for strategic and operational intelligence.',
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
    role: 'P2P and C2C transfer product (previously SendMe).',
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
          <a className="brand" href="#top">
            <span className="brand-mark" aria-hidden="true" />
            <span className="brand-text">Grencape</span>
          </a>
          <nav className="topnav" aria-label="Primary">
            <a href="#layers">Layers</a>
            <a href="#projects">Projects</a>
            <a href="#manifesto">Manifesto</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">GRENCAPE PRESENTS</p>
            <h1>
              ERA1
              <span>Technology Concern Architecture</span>
            </h1>
            <p className="hero-lead">
              Grencape is building ERA1 as a structured ecosystem where intelligence, infrastructure and
              financial rails operate as one integrated system.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                Explore Projects
              </a>
              <a href="#contact" className="btn btn-ghost">
                Partner With Grencape
              </a>
            </div>
          </motion.div>

          <div className="hero-executive">
            <div className="exec-item">
              <p>Active initiatives</p>
              <strong>12</strong>
            </div>
            <div className="exec-item">
              <p>Strategic layers</p>
              <strong>5</strong>
            </div>
            <div className="exec-item">
              <p>Focus domains</p>
              <strong>AI, Infrastructure, Fintech</strong>
            </div>
          </div>
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
            <h2>One concern, five layers, one operating logic.</h2>
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
            <h2>Selected ERA1 companies presented on grencape.xyz</h2>
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
              <p className="eyebrow">MANIFESTO</p>
              <h2>We design systems that scale from model intelligence to real-world transactions.</h2>
            </div>
            <ul>
              <li>Intelligence is native: every product receives AI at core level.</li>
              <li>Infrastructure is sovereign: data, compute and control stay unified.</li>
              <li>Execution is global: fintech rails connect people, businesses and capital.</li>
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
              <h3>Build the model + data nucleus</h3>
              <span>AIS AI · Semanta AI · Gamma AI Hedge Fund</span>
            </article>
            <article>
              <p>Phase 02</p>
              <h3>Scale infrastructure and analytics fabric</h3>
              <span>ERA Cloud · ERA DB · ERA Prism Data</span>
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
            <a className="btn btn-primary" href="mailto:hello@grencape.xyz">
              hello@grencape.xyz
            </a>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

export default App;
