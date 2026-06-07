import { layers } from './data/projects';

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
          <div className="hero-copy">
            <p className="eyebrow">INTERNATIONAL COMMODITY TRADING</p>
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
          </div>

          <aside className="hero-panel" aria-label="Grencape trading focus">
            <p>Trading Focus</p>
            <dl>
              <div>
                <dt>Markets</dt>
                <dd>Agricultural, energy and industrial commodity flows</dd>
              </div>
              <div>
                <dt>Execution</dt>
                <dd>Sourcing, logistics, documentation and settlement coordination</dd>
              </div>
              <div>
                <dt>Counterparties</dt>
                <dd>Suppliers, buyers, logistics partners and strategic investors</dd>
              </div>
            </dl>
          </aside>
        </section>

        <section className="section section-layers" id="layers">
          <div className="section-head">
            <p className="eyebrow">GRENCAPE TRADING</p>
            <h2>Commodity flows structured for international markets.</h2>
          </div>
          <div className="layer-list">
            {layers.map((layer, index) => (
              <article
                key={layer.title}
                className="layer-row"
              >
                <p className="layer-index">0{index + 1}</p>
                <div>
                  <h3>{layer.title}</h3>
                  <p>{layer.note}</p>
                </div>
                <p className="layer-projects">{layer.projects.join(' / ')}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-manifesto" id="manifesto">
          <div className="manifesto-grid">
            <div>
              <p className="eyebrow">STRUCTURE</p>
              <h2>Grencape is focused on physical commodity trading across international markets.</h2>
            </div>
            <ul>
              <li>Sourcing and supply are coordinated through verified counterparties and market routes.</li>
              <li>Execution covers logistics, documentation, pricing discipline and settlement coordination.</li>
              <li>The company is built for reliable cross-border commodity flows and long-term trade relationships.</li>
            </ul>
          </div>
        </section>

        <section className="section section-contact" id="contact">
          <div className="contact-box">
            <p className="eyebrow">CONTACT</p>
            <h2>Trade with Grencape.</h2>
            <p>We are open to commodity suppliers, buyers, trading counterparties, logistics partners and strategic investors.</p>
            <a className="btn btn-primary" href="mailto:hello@grencape.xyz">hello@grencape.xyz</a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

