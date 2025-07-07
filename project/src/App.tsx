import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components

import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import SecuritySimulator from './components/SecuritySimulator';
import ThreatIntelligence from './components/ThreatIntelligence';
import Footer from './components/Footer';

// Assuming you also have a HowWeWork component based on your file structure
import HowWeWork from './components/HowWeWork'; 
import ThreatCounter from './components/ThreatCounter'; // Assuming this also exists

// Import the new PrivacyPolicyPage component
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

function App() {
  return (
    <ThemeProvider>
      <Router> {/* Wrap your entire application with BrowserRouter */}
        <div className="min-h-screen">
          {/* Navbar stays outside Routes to be visible on all pages */}
          <Navbar /> 

          <Routes> {/* Define your routes here */}
            {/* Route for the homepage. All existing main sections go here. */}
            <Route
              path="/" // This path matches the root URL (your homepage)
              element={
                <>
                  <Hero />
                  <About />
                  <Services />
                  <SecuritySimulator />
                  <HowWeWork /> {/* Added based on file structure */}
                  <ThreatCounter /> {/* Added based on file structure */}
                  <ThreatIntelligence />
                  {/* Add any other components that form your main homepage */}
                </>
              }
            />

            {/* Route for the Privacy Policy page */}
            <Route path="/privacy" element={<PrivacyPolicyPage />} />

            {/* Add more <Route> components here for any other distinct pages you might have
                For example:
                <Route path="/terms" element={<TermsOfServicePage />} />
                <Route path="/contact" element={<ContactPage />} />
            */}
          </Routes>

          {/* Footer also stays outside Routes to be visible on all pages */}
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;