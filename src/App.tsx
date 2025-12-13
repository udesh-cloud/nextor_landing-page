import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { PartneredWith } from './components/PartneredWith';
import { Verticals } from './components/Verticals';
import { OurIPs } from './components/OurIPs';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      // Responsive offset: 64px (mobile) or 80px (desktop)
      const offset = window.innerWidth < 640 ? 64 : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'verticals', 'ips', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main>
        <div id="home">
          <Hero onNavigate={handleNavigate} />
          <PartneredWith title="Partnered With" />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="verticals">
          <Verticals onNavigate={handleNavigate} />
          <PartneredWith title="Our Brands" />
        </div>

        <div id="ips">
          <OurIPs />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}