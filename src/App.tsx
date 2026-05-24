import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { getProjectBySlug, layers, projects, type Project } from './data/projects';

const viewport = {
  once: true,
  amount: 0.25
};

function getProjectRoute() {
  const match = window.location.hash.match(/^#\/projects\/([a-z0-9-]+)$/);
  return match?.[1] ?? null;
}

function App() {
  const [projectSlug, setProjectSlug] = useState(() => getProjectRoute());
  const activeProject = useMemo(
    () => (projectSlug ? getProjectBySlug(projectSlug) : undefined),
    [projectSlug]
  );

  useEffect(() => {
    const handleHashChange = () => {
      setProjectSlug(getProjectRoute());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderProjectBanner = (project: Project, index: number) => {
    return (
      <motion.a
        key={project.name}
        className="project-tile"
        href={project.siteUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${project.name}`}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.28, delay: index * 0.025 }}
      >
        <span>{project.name}</span>
      </motion.a>
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

      {activeProject ? (
        <ProjectDetail project={activeProject} />
      ) : (
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
                <span className="title-desktop">One concern. Twelve focused project surfaces.</span>
                <span className="title-mobile">
                  One concern.
                  <br />
                  Twelve project surfaces.
                  <br />
                  ERA1 portfolio.
                </span>
              </h2>
            </div>
            <p>
              A minimal project grid for the ERA1 ecosystem. Each tile opens the dedicated project domain.
            </p>
          </motion.div>
          <div className="project-tile-grid" role="list" aria-label="ERA1 project sites">
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
      )}
    </div>
  );
}

function ProjectDetail({ project }: { project: Project }) {
  return (
    <main className="project-detail-page">
      <section className="project-detail-hero">
        <div className="project-detail-kicker">
          <a href="#projects">Back to portfolio</a>
          <span>{project.siteStatus === 'live' ? 'Site live' : 'Information page'}</span>
        </div>
        <div className="project-detail-grid">
          <div>
            <p className="eyebrow">{project.layer}</p>
            <h1>{project.name}</h1>
            <p className="project-detail-category">{project.category}</p>
            <p className="project-detail-thesis">{project.thesis}</p>
            <div className="project-detail-actions">
              {project.siteStatus === 'live' ? (
                <a className="btn btn-primary" href={project.siteUrl} target="_blank" rel="noreferrer">
                  Open project site
                </a>
              ) : (
                <span className="btn btn-ghost project-detail-disabled">Dedicated site pending</span>
              )}
              <a className="btn btn-ghost" href="mailto:hello@grencape.xyz">
                Contact Grencape
              </a>
            </div>
          </div>
          <aside className="project-detail-card">
            <span>{project.stage}</span>
            <strong>{project.signal}</strong>
            <p>{project.role}</p>
            <dl>
              <div>
                <dt>Reserved domain</dt>
                <dd>{project.siteUrl.replace('https://', '')}</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>{project.siteStatus === 'live' ? 'Live site' : 'Information only'}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="section project-detail-section">
        <div className="section-head">
          <p className="eyebrow">PRODUCT FOCUS</p>
          <h2>What this project organizes inside ERA1.</h2>
        </div>
        <div className="project-focus-grid">
          {project.focus.map((item, index) => (
            <article key={item}>
              <span>0{index + 1}</span>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;

