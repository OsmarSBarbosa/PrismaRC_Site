import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Tagline from './components/Tagline/Tagline';
import About from './components/About/About';
import Features from './components/Features/Features';
import Location from './components/Location/Location';
import InteractivePlot from './components/InteractivePlot/InteractivePlot';
import Gallery from './components/Gallery/Gallery';
import WhatsAppCta from './components/WhatsAppCta/WhatsAppCta';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import PrivacyNotice from './components/PrivacyNotice/PrivacyNotice';
import { observeSections } from './utils/tracking';

export default function App() {
  useEffect(() => observeSections(), []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Tagline />
        <About />
        <Features />
        <Location />
        <InteractivePlot />
        <Gallery />
        <WhatsAppCta />
        <Contact />
      </main>
      <Footer />
      <PrivacyNotice />
    </>
  );
}
