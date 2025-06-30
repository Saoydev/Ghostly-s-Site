import React from 'react';
import { Shield, Mail, Twitter, Github, MessageCircle, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    'Account Recovery',
    'Server Protection', 
    'Security Audit',
    'Emergency Support'
  ];

  const legal = [
    'Privacy Policy',
    'Terms of Service',
    'Refund Policy',
    'Status Page'
  ];

  return (
    <footer id="contact" className="relative bg-slate-900/95 backdrop-blur-sm border-t border-slate-700/30 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-[#fa1f5a] to-[#e11d48] rounded-xl">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">Securely</span>
                <div className="text-xs text-slate-400 font-semibold">DISCORD SECURITY EXPERTS</div>
              </div>
            </div>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              Professional Discord security services trusted by over 500,000 users worldwide. 
              We protect, recover, and secure your Discord presence.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-[#fa1f5a]" />
                <span className="text-slate-300">support@securely.gg</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-green-400" />
                <span className="text-slate-300">24/7 Emergency Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-slate-300">Global Operations</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-[#fa1f5a] transition-all duration-300 hover:scale-110">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-[#fa1f5a] transition-all duration-300 hover:scale-110">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-[#fa1f5a] transition-all duration-300 hover:scale-110">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-300 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {legal.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-300 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm text-center md:text-left">
              © 2024 Securely. All rights reserved. Discord is a trademark of Discord Inc.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400">All Systems Operational</span>
              </div>
              <span className="text-slate-400">98.5% Success Rate</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;