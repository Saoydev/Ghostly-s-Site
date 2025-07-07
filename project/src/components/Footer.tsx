import React from 'react';
import { Shield, Mail, Twitter, Github, MessageCircle, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Account Recovery', href: '#services' }, // Assuming these link to sections within the same page
    { name: 'Server Protection', href: '#services' },
    { name: 'Security Audit', href: '#services' },
    { name: 'Emergency Support', href: '#services' }
  ];

  const legalLinks = [ // Renamed from 'legal' to avoid confusion with the object structure
    { name: 'Privacy Policy', href: '/privacy', target: '_blank', rel: 'noopener noreferrer' },
    { name: 'Terms of Service', href: '/terms' }, // Example: link to /terms
    { name: 'Refund Policy', href: '/refund-policy' }, // Example: link to /refund-policy
    { name: 'Status Page', href: 'https://status.securely.one', target: '_blank', rel: 'noopener noreferrer' } // Example: external link
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
              Professional Discord security services trusted by over 500+ users worldwide. 
              We protect, recover, and secure your Discord presence.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-[#fa1f5a]" />
                <span className="text-slate-300">contact@securely.one</span>
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
              <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-[#fa1f5a] transition-all duration-300 hover:scale-110">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://github.com/yourorg" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-[#fa1f5a] transition-all duration-300 hover:scale-110">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://discord.gg/yourinvite" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-[#fa1f5a] transition-all duration-300 hover:scale-110">
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
                  <a href={link.href} className="text-slate-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    target={item.target || '_self'} // Default to _self if target is not specified
                    rel={item.rel || ''}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {item.name}
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
              © 2024 Securely. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400">All Systems Operational</span>
              </div>
              <span className="text-slate-400">TBD% Success Rate</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;