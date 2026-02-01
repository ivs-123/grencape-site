import { Nav } from './components/Nav';
import { useTheme } from './hooks/useTheme';
import { Hero } from './sections/Hero';
import { AimAI } from './sections/AimAI';
import { DataScience } from './sections/DataScience';
import { Portfolio } from './sections/Portfolio';
import { Outsourcing } from './sections/Outsourcing';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

const hfUrl = import.meta.env.VITE_HF_URL || 'https://huggingface.co/organizations/grencape';
const linkedInUrl = import.meta.env.VITE_LINKEDIN_URL || '#';
const formspreeUrl = import.meta.env.VITE_FORMSPREE_URL || '';
const corpEmail = import.meta.env.VITE_CORP_EMAIL || 'hello@grencape.xyz';

function App() {
  const reducedMotion = true;
  const { theme, toggle } = useTheme();

  return (
    <div className="relative">
      <Nav theme={theme} onToggleTheme={toggle} />
      <main className="relative z-10">
        <Hero reducedMotion={reducedMotion} hfUrl={hfUrl} linkedInUrl={linkedInUrl} />
        <AimAI reducedMotion={reducedMotion} hfUrl={hfUrl} />
        <DataScience reducedMotion={reducedMotion} />
        <Portfolio reducedMotion={reducedMotion} />
        <Outsourcing reducedMotion={reducedMotion} />
        <Contact
          reducedMotion={reducedMotion}
          linkedInUrl={linkedInUrl}
          formspreeUrl={formspreeUrl}
          corpEmail={corpEmail}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
