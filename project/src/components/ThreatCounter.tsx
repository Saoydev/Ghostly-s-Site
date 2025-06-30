import React, { useState, useEffect } from 'react';
import { AlertTriangle, Shield, Eye } from 'lucide-react';

const ThreatCounter: React.FC = () => {
  const [counts, setCounts] = useState({
    tokensBlocked: 1247,
    phishingDetected: 892,
    raidsPrevent: 156
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => ({
        tokensBlocked: prev.tokensBlocked + Math.floor(Math.random() * 3),
        phishingDetected: prev.phishingDetected + Math.floor(Math.random() * 2),
        raidsPrevent: prev.raidsPrevent + (Math.random() > 0.8 ? 1 : 0)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const threats = [
    {
      icon: AlertTriangle,
      label: 'Token Grabbers',
      count: counts.tokensBlocked,
      color: 'text-red-400',
      bgColor: 'bg-red-400/10',
      status: 'Blocked Today'
    },
    {
      icon: Eye,
      label: 'Phishing Sites',
      count: counts.phishingDetected,
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
      status: 'Detected'
    },
    {
      icon: Shield,
      label: 'Server Raids',
      count: counts.raidsPrevent,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      status: 'Prevented'
    }
  ];

  return (
    <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/30 rounded-xl p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">Live Threat Monitor</h3>
        <div className="flex items-center justify-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-slate-300 text-sm">Real-time Protection Active</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {threats.map((threat, index) => (
          <div key={index} className={`${threat.bgColor} backdrop-blur-sm border border-slate-700/50 p-6 rounded-lg hover:scale-105 transition-all duration-300`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <threat.icon className={`h-5 w-5 ${threat.color}`} />
                <span className="text-slate-200 font-medium">{threat.label}</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1 transition-all duration-500">
                {threat.count.toLocaleString()}
              </div>
              <div className={`text-sm font-medium ${threat.color}`}>{threat.status}</div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-6">
        <span className="text-slate-500 text-sm">
          Last updated: {new Date().toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
};

export default ThreatCounter;