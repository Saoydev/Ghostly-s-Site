import React, { useState, useEffect, useRef } from 'react';
import { Settings, Menu, X, Shield, Zap, Bell, ChevronDown } from 'lucide-react';
import SettingsModal from './SettingsModal';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Ref for the main navbar container (useful for outside clicks)
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Close menu if clicked outside the entire navbar (including logo, desktop controls, and the mobile menu content itself)
      if (navbarRef.current && !navbarRef.current.contains(target)) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    // Add/remove event listener based on menu state
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Optional: Prevent body scrolling when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      // Restore body scrolling
      document.body.style.overflow = 'unset';
    }

    // Cleanup: remove event listener and reset body overflow when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClick.bind(null)); // Re-bind to ensure it works after cleanup
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]); // Only re-run when isMenuOpen changes


  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    {
      name: 'Services',
      href: '#services',
      dropdown: [
        { name: 'Account Recovery', href: '#services' },
        { name: 'Server Protection', href: '#services' },
        { name: 'Security Audit', href: '#services' },
        { name: 'Emergency Response', href: '#services' }
      ]
    },
    { name: 'Security Scanner', href: '#security-scanner' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false); // Close mobile menu on nav item click
    setActiveDropdown(null); // Close any open dropdowns
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const discordInviteLink = "https://discord.gg/V9wJ5jGPWj"; // Define the link here

  return (
    <>
      {/* Overlay for mobile menu background */}
      <div
        className={`
          fixed inset-0 bg-black/70 backdrop-blur-md z-40
          transition-opacity duration-300
          ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
          lg:hidden {/* Ensure it's only active on mobile */}
        `}
        onClick={() => setIsMenuOpen(false)} // Click on overlay closes the menu
      />

      <nav
        ref={navbarRef} // Attach ref to the main nav container
        className={`navbar-container fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl'
            : 'bg-slate-900/80 backdrop-blur-sm'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => handleNavClick('#home')}>
              <div className="p-3 bg-[#fa1f5a] rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white group-hover:text-[#fa1f5a] transition-colors">Securely</span>
                <div className="text-xs text-slate-400 font-medium tracking-wide">DISCORD SECURITY</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    onClick={() => !item.dropdown && handleNavClick(item.href)}
                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                    onMouseLeave={() => !item.dropdown && setActiveDropdown(null)}
                    className="flex items-center space-x-1 text-slate-200 hover:text-white font-medium transition-colors px-4 py-3 rounded-lg hover:bg-slate-800/60"
                  >
                    <span>{item.name}</span>
                    {item.dropdown && <ChevronDown className="h-4 w-4 transition-transform duration-200" />}
                  </button>

                  {/* Desktop Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div
                      className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl py-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <button
                          key={dropdownItem.name}
                          onClick={() => handleNavClick(dropdownItem.href)}
                          className="w-full text-left block px-6 py-3 text-slate-300 hover:text-white hover:bg-[#fa1f5a]/10 transition-colors"
                        >
                          {dropdownItem.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Controls */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Trust Badge */}
              <div className="flex items-center space-x-2 px-4 py-2 bg-slate-800/60 border border-slate-700/50 rounded-full backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-slate-300 font-medium">500+ Protected</span>
              </div>

              {/* Notification Bell */}
              <button className="relative p-3 rounded-lg text-slate-200 hover:text-white hover:bg-slate-800/60 transition-all group">
                <Bell className="h-5 w-5" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#fa1f5a] rounded-full animate-pulse"></div>
                <div className="absolute top-full right-0 mt-2 px-3 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  Notifications
                </div>
              </button>

              {/* Settings */}
              <button
                onClick={() => setIsSettingsOpen(true)}
                className="relative p-3 rounded-lg text-slate-200 hover:text-white hover:bg-slate-800/60 transition-all group"
              >
                <Settings className="h-5 w-5" />
                <div className="absolute top-full right-0 mt-2 px-3 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  Settings
                </div>
              </button>

              {/* CTA Button (Desktop) */}
              <button className="px-6 py-3 bg-[#fa1f5a] text-white rounded-lg font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2">
                {/* Changed the href here */}
                <a href={discordInviteLink} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 w-full h-full justify-center">
                  <Zap className="h-4 w-4" />
                  <span>Get Protection</span>
                </a>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-3">
              <button
                onClick={() => setIsSettingsOpen(true)}
                className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-slate-800/60 transition-all"
              >
                <Settings className="h-5 w-5" />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-slate-800/60 transition-all"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Content */}
        <div
          className={`
            lg:hidden
            absolute inset-x-0 top-20 z-50
            bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl
            transform transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}
          `}
        >
          <div className="py-4 px-4 sm:px-6 lg:px-8 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                <button
                  onClick={() => !item.dropdown ? handleNavClick(item.href) : setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                  className="w-full text-left flex items-center justify-between px-4 py-3 text-slate-200 hover:text-white hover:bg-slate-800/60 rounded-lg font-medium transition-colors"
                >
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                  )}
                </button>
                {item.dropdown && activeDropdown === item.name && (
                  <div className="ml-4 mt-2 space-y-1 animate-in slide-in-from-top duration-200">
                    {item.dropdown.map((dropdownItem) => (
                      <button
                        key={dropdownItem.name}
                        onClick={() => handleNavClick(dropdownItem.href)}
                        className="w-full text-left block px-4 py-2 text-slate-400 hover:text-slate-200 text-sm transition-colors rounded-lg hover:bg-slate-800/40"
                      >
                        {dropdownItem.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile CTA Button */}
            <div className="pt-4 border-t border-slate-700/50 mt-4">
              <button className="w-full px-6 py-3 bg-[#fa1f5a] text-white rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-[#e11d48] transition-colors">
                {/* Changed the href here */}
                <a href={discordInviteLink} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 w-full h-full justify-center">
                  <Zap className="h-4 w-4" />
                  <span>Get Protection</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </>
  );
};

export default Navbar;