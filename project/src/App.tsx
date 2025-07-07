import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, Route

import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import SecuritySimulator from './components/SecuritySimulator';
import ThreatIntelligence from './components/ThreatIntelligence';
import Footer from './components/Footer';
import HowWeWork from './components/HowWeWork'; // Assuming you have this component based on previous contexts
import ThreatCounter from './components/ThreatCounter'; // Assuming you have this component based on previous contexts
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'; // Assuming you have this component based on previous contexts

import LoadingScreen from './components/LoadingScreen'; // Import the LoadingScreen component

function App() {
  const [isLoading, setIsLoading] = useState(true); // State to control loading screen visibility

  useEffect(() => {
    // Set a timeout to hide the loading screen after 2-3 seconds (e.g., 2500ms)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Adjust duration as needed (2500ms = 2.5 seconds)

    // Prevent scrolling on the body while loading
    if (isLoading) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup function to clear the timer and reset body overflow when component unmounts
    return () => {
      clearTimeout(timer);
      document.body.classList.remove('no-scroll');
    };
  }, [isLoading]); // Re-run effect if isLoading state changes

  return (
    <ThemeProvider>
      {/* Render the LoadingScreen conditionally at the very top */}
      <LoadingScreen isLoading={isLoading} />

      <Router>
        {/* Main content wrapper, hidden or adjusted while loading */}
        {/* Add transition for a smoother fade-in of the main content */}
        <div className={`min-h-screen ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Services />
                  <SecuritySimulator />
                  <HowWeWork />
                  <ThreatCounter />
                  <ThreatIntelligence />
                </>
              }
            />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;