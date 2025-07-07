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

// Import the new PrivacyPolicyPage component
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'; // Assuming you created this file in src/pages/

// You might also have a HowWeWork component based on your file structure,
// add it back to the home page content if it's part of the main landing.
// import HowWeWork from './components/HowWeWork';


function App() {
  return (
    <ThemeProvider>
      <Router> {/* Wrap your entire application with BrowserRouter */}
        <div className="min-h-screen">
          <Navbar /> {/* Navbar stays outside Routes to be visible on all pages */}

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
                  <ThreatIntelligence />
                  {/* If you have a HowWeWork component that belongs on the homepage, add it here */}
                  {/* <HowWeWork /> */}
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

          <Footer /> {/* Footer also stays outside Routes to be visible on all pages */}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;