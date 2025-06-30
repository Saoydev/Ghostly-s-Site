import React from 'react';
import { Search, Shield, Code2, Users, CheckCircle, Lock, Eye, ArrowRight, Zap, Star } from 'lucide-react';

const OurProcess: React.FC = () => {
  const process = [
    {
      icon: Search,
      title: 'Assessment',
      description: 'Rapid analysis of your Discord security incident using advanced scanning technology.',
      duration: '15-30 min',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Protection',
      description: 'Immediate deployment of protective measures to prevent further damage and secure your assets.',
      duration: '30-60 min',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Code2,
      title: 'Recovery',
      description: 'Systematic recovery using specialized Discord security tools and proven methodologies.',
      duration: '2-24 hours',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Users,
      title: 'Training',
      description: 'Training for you and your community on Discord security protocols and threat recognition.',
      duration: '30-60 min',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: CheckCircle,
      title: 'Monitoring',
      description: 'Continuous monitoring and support to ensure long-term security and early threat detection.',
      duration: 'Ongoing',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const principles = [
    {
      icon: Lock,
      title: 'Privacy First',
      description: 'We access only what\'s necessary with strict confidentiality protocols.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Eye,
      title: 'Full Transparency',
      description: 'Complete visibility into our process with regular updates and clear explanations.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Safe Methods',
      description: 'Discord ToS compliant methods with no risk to your account or server status.',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Zap,
      title: 'Fast Response',
      description: 'Emergency response within minutes, available 24/7 across all time zones.',
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <section id="our-process" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#fa1f5a]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/30 rounded-3xl p-12 hover:border-[#fa1f5a]/30 transition-all duration-500">
          {/* Trust Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-[#fa1f5a]/20 border border-[#fa1f5a]/30 text-white rounded-full text-sm font-semibold backdrop-blur-sm">
              <Star className="h-4 w-4 text-yellow-400 mr-2 animate-pulse" />
              <span className="text-[#fa1f5a]">Trusted by 500K+ Discord users</span>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="text-[#fa1f5a]">Process</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our proven methodology ensures comprehensive Discord security through rapid assessment, 
              professional recovery, and ongoing protection against future threats.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {process.map((step, index) => (
              <div 
                key={index} 
                className="group bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:scale-105 transition-all duration-500 hover:border-[#fa1f5a]/50 hover:shadow-2xl hover:shadow-[#fa1f5a]/10"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#fa1f5a] transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-300 mb-6">{step.description}</p>
                <span className="inline-block px-4 py-2 bg-[#fa1f5a]/20 text-[#fa1f5a] rounded-full text-sm font-semibold border border-[#fa1f5a]/30 backdrop-blur-sm">
                  {step.duration}
                </span>
              </div>
            ))}
          </div>

          {/* Security Principles */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
              <Shield className="h-8 w-8 text-[#fa1f5a] mr-3" />
              Our Principles
            </h3>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Core principles that guide our approach to Discord security and ensure 
              the highest level of protection and trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="text-center group">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${principle.color} rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <principle.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-[#fa1f5a] transition-colors">
                  {principle.title}
                </h4>
                <p className="text-slate-300">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;