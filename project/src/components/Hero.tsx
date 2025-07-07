import React, { useEffect, useState } from 'react';
import { Shield, Users, CheckCircle, ArrowRight, AlertTriangle, Zap, Star } from 'lucide-react';
import ThreatCounter from './ThreatCounter';

const Hero: React.FC = () => {
  const [animatedStats, setAnimatedStats] = useState({
    users: 0,
    accounts: 0,
    success: 0
  });

  useEffect(() => {
    const animateStats = () => {
      const targets = { users: 500, accounts: 0, success: `TBD` };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setAnimatedStats({
          users: Math.floor(targets.users * progress),
          accounts: Math.floor(targets.accounts * progress),
          success: Math.floor(targets.success * progress * 10) / 10
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setAnimatedStats(targets);
        }
      }, stepDuration);
    };

    const timer = setTimeout(animateStats, 500);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { 
      icon: Users, 
      label: 'Users Protected', 
      value: `${animatedStats.users}+`,
      color: 'bg-[#fa1f5a]'
    },
    { 
      icon: Shield, 
      label: 'Accounts Recovered', 
      value: `${animatedStats.accounts}`,
      color: 'bg-[#fa1f5a]'
    },
    { 
      icon: CheckCircle, 
      label: 'Success Rate', 
      value: `${animatedStats.success}`,
      color: 'bg-[#fa1f5a]'
    },
  ];

  return (
    <section id="home" className="min-h-screen pt-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#fa1f5a]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        {/* Trust Badge */}
        <div className="text-center mb-8 animate-in fade-in slide-in-from-top duration-1000">
          <div className="inline-flex items-center px-6 py-3 bg-[#fa1f5a]/20 border border-[#fa1f5a]/30 text-white rounded-full text-sm font-semibold backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer group">
            <div className="flex items-center space-x-2 mr-3">
              <Star className="h-4 w-4 text-[#fa1f5a] animate-pulse" />
              <span className="text-[#fa1f5a]">Trusted by 500+ Discord users</span>
            </div>
            <div className="w-px h-4 bg-white/30 mr-3"></div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-[#fa1f5a] rounded-full animate-pulse"></div>
              <span className="text-[#fa1f5a] text-xs">Live Protection</span>
            </div>
          </div>
        </div>
        
        {/* Hero Content */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            Discord Security
            <br />
            <span className="bg-gradient-to-r from-[#fa1f5a] to-[#e11d48] bg-clip-text text-transparent animate-gradient bg-300% animate-pulse">
              Made Simple
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
            Professional Discord security services. We recover compromised accounts, 
            secure servers, and protect your community from cyber threats with industry-leading expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-in fade-in slide-in-from-bottom duration-1000 delay-600">
            <button className="group px-8 py-4 bg-[#fa1f5a] text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-pink/25 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center">
                <Zap className="mr-2 h-5 w-5" />
                Get Protection
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
            <button className="group px-8 py-4 border-2 border-[#fa1f5a] text-[#fa1f5a] rounded-xl font-semibold hover:bg-[#fa1f5a] hover:text-white transition-all duration-300 hover:scale-105 transform backdrop-blur-sm">
              <div className="flex items-center">
                <AlertTriangle className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Report Threat
              </div>
            </button>
          </div>
        </div>

        {/* Animated Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 text-center p-8 rounded-2xl hover:scale-105 transition-all duration-500 hover:border-[#fa1f5a]/50 hover:shadow-2xl hover:shadow-[#fa1f5a]/10 animate-in fade-in slide-in-from-bottom duration-1000"
              style={{ animationDelay: `${800 + index * 200}ms` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-[#fa1f5a] transition-colors">
                {stat.value}
              </div>
              <div className="text-slate-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Interactive Threat Monitor */}
        <div className="animate-in fade-in slide-in-from-bottom duration-1000 delay-1000">
          <ThreatCounter />
        </div>
      </div>
    </section>
  );
};

export default Hero;