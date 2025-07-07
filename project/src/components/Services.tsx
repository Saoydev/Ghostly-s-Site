import React from 'react';
import { Shield, MessageSquare, Eye, ArrowRight, CheckCircle, Zap, Lock, Users } from 'lucide-react';

const Services: React.FC = () => {
  const mainServices = [
    {
      icon: Lock,
      title: 'Server Recovery',
      description: `We'll help recover raided or nuked servers`,
      features: [
        'Server restoration',
        'Member recovery',
        'Private discoverying from our team',
        'Server security hardening',
        'Backup system',
        'Custom security protocols',
      ],
      price: '$3-20'
    },
    {
      icon: Shield,
      title: 'Priority Support',
      description: 'Professional Discord account recovery for compromised or stolen accounts.',
      features: [
        'One-one discussion',
        'Priority forum viewing',
        'Priority suggestions viewing',
        'Priority reports viewing',
        'priority only News and Security Alerts',
        'Special priority only giveaways',
        'Priority only Q&A events',
        'Colorful Discord Server Role',
        // Add more features here to test scrolling:
        'Exclusive Discord channel access',
        'Dedicated support manager',
        'Early access to new features',
        'Monthly security reports',
        'Custom bot integrations',
        'Priority incident resolution',
        'Enhanced community moderation tools'
      ],
      price: '$5/mo',
      popular: true
    },
    {
      icon: Eye,
      title: 'Account Recovery',
      description: 'We will help recover account that have been falsely banned, reported, scammed, etc. THIS RECOVERY SERVICE IS NOT 100%, WE\'RE JUST GOING TO HELP',
      features: [
        'Assistance with falsely banned accounts',
        'Help with account recovery process',
        'Explanation of why you were banned',
        'Tips to avoid getting banned again',
        'Convery for second-time falsely banned accounts'
      ],
      price: '$3-6'
    }
  ];

  const additionalServices = [
    { icon: Zap, title: 'Emergency Response', price: '$149', description: '24/7 emergency response for active incidents' },
    { icon: MessageSquare, title: 'Security Setup', price: '$39', description: 'Complete security hardening and 2FA setup' },
    { icon: Users, title: 'Team Training', price: '$79', description: 'Security training for your team' },
    { icon: Eye, title: 'Monitoring', price: '$19/mo', description: 'Ongoing security monitoring' }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/30 rounded-xl p-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="text-[#fa1f5a]">Services</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Professional Discord security services designed to protect, recover, and secure
              your Discord presence against all types of threats.
            </p>
          </div>

          {/* Main Services */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`bg-slate-800/80 backdrop-blur-sm border rounded-xl p-8 relative flex flex-col ${ // Added flex flex-col
                  service.popular ? 'border-[#fa1f5a]' : 'border-slate-700/50'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#fa1f5a] text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#fa1f5a] rounded-lg">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-white">{service.price}</div>
                    <div className="text-slate-400 text-sm">per service</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 mb-6">{service.description}</p>

                {/* SCROLLABLE FEATURES LIST */}
                <ul className="space-y-3 mb-8 flex-grow overflow-y-auto max-h-48 pr-2"> {/* Added flex-grow, overflow-y-auto, max-h-48, pr-2 */}
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full px-6 py-3 bg-[#fa1f5a] text-white rounded-lg font-semibold hover:bg-[#e11d48] transition-colors mt-auto"> {/* Added mt-auto */}
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 inline" />
                </button>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Additional Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-[#fa1f5a] rounded-lg mb-4">
                    <service.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-white">{service.title}</h4>
                    <span className="font-bold text-[#fa1f5a]">{service.price}</span>
                  </div>
                  <p className="text-slate-300 text-sm mb-4">{service.description}</p>
                  <button className="text-[#fa1f5a] font-semibold hover:text-[#e11d48] transition-colors">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 inline" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency CTA */}
          <div className="bg-[#fa1f5a] rounded-xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Under Attack?</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              If your Discord account or server is currently under attack,
              our emergency response team is standing by 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-[#fa1f5a] rounded-lg font-semibold hover:bg-slate-100 transition-colors">
                Emergency Support
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#fa1f5a] transition-all">
                Report Threat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;