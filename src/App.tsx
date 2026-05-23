import { motion } from 'framer-motion';

type Project = {
  name: string;
  category: string;
  role: string;
  stage: string;
  layer: string;
  siteUrl: string;
  siteStatus: 'live' | 'pending';
  signal: string;
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
    projects: ['ERA Prism Studio - Data Science Studio'],
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
    stage: 'Core',
    layer: 'Core Intelligence',
    siteUrl: 'https://ais-ai.grencape.xyz',
    siteStatus: 'pending',
    signal: 'Model nucleus'
  },
  {
    name: 'Semanta AI',
    category: 'AI / Data Factory',
    role: 'Synthetic data, fine-tuning workflows, standards and world simulation.',
    stage: 'Build',
    layer: 'Core Intelligence',
    siteUrl: 'https://semanta.grencape.xyz',
    siteStatus: 'pending',
    signal: 'Data factory'
  },
  {
    name: 'Gamma AI Hedge Fund',
    category: 'AI / Finance',
    role: 'Forecasting, signals and autonomous execution with strict risk logic.',
    stage: 'Capital',
    layer: 'Core Intelligence',
    siteUrl: 'https://gamma.grencape.xyz',
    siteStatus: 'pending',
    signal: 'Autonomous markets'
  },
  {
    name: 'ERA Cloud',
    category: 'Infrastructure',
    role: 'Control plane for compute, inference, storage and server capacity.',
    stage: 'Infra',
    layer: 'Core Infrastructure',
    siteUrl: 'https://cloud.grencape.xyz',
    siteStatus: 'pending',
    signal: 'Capacity router'
  },
  {
    name: 'ERA DB',
    category: 'Infrastructure / Data',
    role: 'Unified PostgreSQL + ClickHouse platform with bridge and AI gateway.',
    stage: 'Infra',
    layer: 'Core Infrastructure',
    siteUrl: 'https://db.grencape.xyz',
    siteStatus: 'pending',
    signal: 'Unified data plane'
  },
  {
    name: 'ERA Prism Studio',
    category: 'Analytics',
    role: 'Data Science Studio for strategic analytics, observability and decision workflows.',
    stage: 'Data',
    layer: 'Data / Analytics',
    siteUrl: 'https://prism.grencape.xyz',
    siteStatus: 'pending',
    signal: 'Decision studio'
  },
  {
    name: 'SomeBox',
    category: 'Consumer / Platform',
    role: 'Cloud sharing system for frictionless file distribution.',
    stage: 'Product',
    layer: 'Consumer / Platform',
    siteUrl: 'https://somebox.grencape.xyz',
    siteStatus: 'pending',
    signal: 'Sharing surface'
  },
  {
    name: 'One Browser',
    category: 'Consumer / Platform',
    role: 'AI-native browser with permanent free VPN experience.',
    stage: 'Product',
    layer: 'Consumer / Platform',
    siteUrl: 'https://onebrowser.grencape.xyz',
    siteStatus: 'pending',
    signal: 'AI web gateway'
  },
  {
    name: 'Quantum Messenger',
    category: 'Consumer / Security',
    role: 'Protected messenger for next-generation private communication.',
    stage: 'Product',
    layer: 'Consumer / Platform',
    siteUrl: 'https://quantum.grencape.xyz',
    siteStatus: 'pending',
    signal: 'Private network'
  },
  {
    name: 'Mind Music',
    category: 'Consumer / Experimental',
    role: 'Playlist generation by mood and voice intent description.',
    stage: 'Lab',
    layer: 'Consumer / Platform',
    siteUrl: 'https://mindmusic.grencape.xyz',
    siteStatus: 'pending',
    signal: 'Mood interface'
  },
  {
    name: 'ERA Pay',
    category: 'Fintech / Payments',
    role: 'Payment gateway and financial infrastructure layer.',
    stage: 'Fintech',
    layer: 'Fintech',
    siteUrl: 'https://pay.grencape.xyz',
    siteStatus: 'pending',
    signal: 'Payment rails'
  },
  {
    name: 'MoneyOne',
    category: 'Fintech / Transfers',
    role: 'P2P and C2C transfer product.',
    stage: 'Fintech',
    layer: 'Fintech',
    siteUrl: 'https://moneyone.grencape.xyz',
    siteStatus: 'pending',
    signal: 'Transfer product'
  }
];

const viewport = {
  once: true,
  amount: 0.25
};

function App() {
  const renderProjectBanner = (project: Project, index: number) => {
    const bannerClass = [
      'project-banner',
      `project-banner-${project.layer.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
      project.siteStatus === 'pending' ? 'project-banner-disabled' : ''
    ].filter(Boolean).join(' ');

    const bannerContent = (
      <>
        <span className="project-banner-orbit" aria-hidden="true" />
        <span className="project-banner-topline">
          <span>{project.stage}</span>
          <span>{project.layer}</span>
          <span className={`project-banner-status project-banner-status-${project.siteStatus}`}>
            {project.siteStatus === 'live' ? 'Site live' : 'Info only'}
          </span>
        </span>
        <span className="project-banner-main">
          <span>
            <strong>{project.name}</strong>
            <em>{project.category}</em>
          </span>
          <span className={`project-banner-link ${project.siteStatus === 'pending' ? 'project-banner-link-disabled' : ''}`}>
            {project.siteStatus === 'live' ? 'Open site' : 'Information'}
          </span>
        </span>
        <span className="project-banner-role">{project.role}</span>
        <span className="project-banner-footer">
          <span>{project.signal}</span>
          <span>{project.siteUrl.replace('https://', '')}</span>
        </span>
      </>
    );

    if (project.siteStatus === 'live') {
      return (
        <motion.a
          key={project.name}
          className={bannerClass}
          href={project.siteUrl}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.28, delay: index * 0.025 }}
        >
          {bannerContent}
        </motion.a>
      );
    }

    return (
      <motion.article
        key={project.name}
        className={bannerClass}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.28, delay: index * 0.025 }}
      >
        {bannerContent}
      </motion.article>
    );
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <a className="brand" href="#top" aria-label="Grencape home">
            <img className="brand-logo" src="/brand/grencape-wordmark-light.png" alt="Grencape" />
          </a>
          <nav className="topnav" aria-label="Primary">
            <a href="#manifesto">About</a>
            <a href="#layers">Platform</a>
            <a href="#projects">Ecosystem</a>
            <a href="#contact">Investors</a>
            <a href="#contact">Careers</a>
            <a href="#manifesto">Insights</a>
            <a className="nav-contact" href="#contact">Contact</a>
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
            <p className="hero-kicker">AI. Infrastructure. Fintech.</p>
            <p className="hero-lead">
              ERA1 is the operating architecture of Grencape - uniting artificial intelligence,
              infrastructure, and financial technology to build enduring value across the digital economy.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">Explore the portfolio</a>
              <a href="mailto:hello@grencape.xyz" className="btn btn-ghost">Start a conversation</a>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={false}
            aria-label="ERA1 glass architecture visual"
          >
            <img src="/brand/era1-architecture-visual.png" alt="" />
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
            className="section-head project-showcase-head"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.45 }}
          >
            <div>
              <p className="eyebrow">ERA1 PORTFOLIO</p>
              <h2>
                <span className="title-desktop">One concern. Twelve project banners ready to become standalone sites.</span>
                <span className="title-mobile">
                  One concern.
                  <br />
                  Twelve project banners.
                  <br />
                  Standalone sites.
                </span>
              </h2>
            </div>
            <p>
              Each banner is structured as a brand entry point: clear role, strategic layer and a live
              website transition only when the dedicated product site is ready.
            </p>
          </motion.div>
          <motion.div
            className="portfolio-meta"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.35 }}
          >
            <span>
              <strong>12</strong>
              active initiatives
            </span>
            <span>
              <strong>5</strong>
              strategic layers
            </span>
            <span>
              <strong>1</strong>
              operating architecture
            </span>
            <a href="mailto:hello@grencape.xyz">Request portfolio access</a>
          </motion.div>
          <div className="project-banner-grid">
            {projects.map(renderProjectBanner)}
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
              <span>AIS AI / Semanta AI / Gamma AI Hedge Fund</span>
            </article>
            <article>
              <p>Phase 02</p>
              <h3>Scale infrastructure and analytics fabric</h3>
              <span>ERA Cloud / ERA DB / ERA Prism Studio - Data Science Studio</span>
            </article>
            <article>
              <p>Phase 03</p>
              <h3>Ship consumer and fintech surfaces</h3>
              <span>SomeBox / One Browser / Quantum Messenger / Mind Music / ERA Pay / MoneyOne</span>
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

