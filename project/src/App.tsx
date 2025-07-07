import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import SecuritySimulator from './components/SecuritySimulator';
import ThreatIntelligence from './components/ThreatIntelligence';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <SecuritySimulator />
        <ThreatIntelligence />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;