import { motion } from 'framer-motion';
import { layers } from './data/projects';

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
            <a href="#manifesto">About</a>
            <a href="#layers">Trading</a>
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
              Grencape
              <span>International Commodity Trading Company</span>
            </h1>
            <p className="hero-kicker">Raw materials. Global markets. Trusted execution.</p>
            <p className="hero-lead">
              Grencape supplies raw commodity products into international markets, connecting
              counterparties, logistics, documents and settlement into reliable cross-border trade flows.
            </p>
            <div className="hero-actions">
              <a href="#layers" className="btn btn-primary">Explore trading scope</a>
              <a href="mailto:hello@grencape.xyz" className="btn btn-ghost">Start a conversation</a>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={false}
            aria-label="Grencape global trading architecture visual"
          >
            <div className="trade-visual" aria-hidden="true">
              <div className="trade-visual-head">
                <span>GRENCAPE TRADE CONTROL</span>
                <strong>International commodity routes</strong>
              </div>
              <div className="trade-visual-map">
                <span className="trade-node trade-node-source">Source</span>
                <span className="trade-node trade-node-port">Port</span>
                <span className="trade-node trade-node-market">Market</span>
              </div>
              <div className="trade-visual-rows">
                <span>Supply</span>
                <span>Logistics</span>
                <span>Documentation</span>
                <span>Settlement</span>
              </div>
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
            <p className="eyebrow">GRENCAPE TRADING</p>
            <h2>Commodity flows structured for international markets.</h2>
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

        <section className="section section-manifesto" id="manifesto">
          <motion.div
            className="manifesto-grid"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.45 }}
          >
            <div>
              <p className="eyebrow">STRUCTURE</p>
              <h2>Grencape is focused on physical commodity trading across international markets.</h2>
            </div>
            <ul>
              <li>Sourcing and supply are coordinated through verified counterparties and market routes.</li>
              <li>Execution covers logistics, documentation, pricing discipline and settlement coordination.</li>
              <li>The company is built for reliable cross-border commodity flows and long-term trade relationships.</li>
            </ul>
          </motion.div>
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
            <h2>Trade with Grencape.</h2>
            <p>We are open to commodity suppliers, buyers, trading counterparties, logistics partners and strategic investors.</p>
            <a className="btn btn-primary" href="mailto:hello@grencape.xyz">hello@grencape.xyz</a>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

export default App;

