import React, { useState, useEffect } from 'react';
import { Shield, Globe, Activity, Zap, Eye, AlertTriangle, TrendingUp, Users, Server, Bot } from 'lucide-react';

const ThreatIntelligence: React.FC = () => {
  const [activeTab, setActiveTab] = useState('global');
  const [liveStats, setLiveStats] = useState({
    globalThreats: 1247,
    activeScans: 89,
    protectedServers: 12456,
    onlineAgents: 24
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        globalThreats: prev.globalThreats + Math.floor(Math.random() * 5),
        activeScans: Math.floor(Math.random() * 100) + 50,
        protectedServers: prev.protectedServers + Math.floor(Math.random() * 3),
        onlineAgents: Math.floor(Math.random() * 10) + 20
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const globalThreats = [
    { type: 'Token Grabbers', count: 342, trend: '+12%', severity: 'critical' },
    { type: 'Phishing Links', count: 189, trend: '+8%', severity: 'high' },
    { type: 'Fake Bots', count: 156, trend: '+15%', severity: 'medium' },
    { type: 'Server Raids', count: 67, trend: '-5%', severity: 'high' },
    { type: 'Scam Messages', count: 234, trend: '+22%', severity: 'medium' },
    { type: 'Account Takeovers', count: 45, trend: '+3%', severity: 'critical' }
  ];

  const recentActivity = [
    { action: 'Blocked token grabber', location: 'Gaming Server #1247', time: '2 min ago', severity: 'critical' },
    { action: 'Detected phishing link', location: 'Community Hub', time: '5 min ago', severity: 'high' },
    { action: 'Prevented server raid', location: 'Anime Discussion', time: '8 min ago', severity: 'high' },
    { action: 'Removed fake bot', location: 'Tech Support', time: '12 min ago', severity: 'medium' },
    { action: 'Blocked scam message', location: 'Trading Server', time: '15 min ago', severity: 'medium' }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-400 bg-red-400/20';
      case 'high': return 'text-orange-400 bg-orange-400/20';
      case 'medium': return 'text-yellow-400 bg-yellow-400/20';
      default: return 'text-green-400 bg-green-400/20';
    }
  };

  const getTrendColor = (trend: string) => {
    return trend.startsWith('+') ? 'text-red-400' : 'text-green-400';
  };

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/30 rounded-xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Live <span className="text-[#fa1f5a]">Threat Intelligence</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real-time monitoring of Discord security threats worldwide. Our AI-powered system 
              tracks and analyzes threats across thousands of servers every second.
            </p>
          </div>

          {/* Live Stats Dashboard */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-slate-900/80 rounded-xl p-6 border border-slate-700/50 text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-[#fa1f5a] rounded-lg mx-auto mb-4">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2 transition-all duration-500">
                {liveStats.globalThreats.toLocaleString()}
              </div>
              <div className="text-slate-300 text-sm">Global Threats Today</div>
              <div className="flex items-center justify-center mt-2">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse mr-2"></div>
                <span className="text-red-400 text-xs">Live</span>
              </div>
            </div>

            <div className="bg-slate-900/80 rounded-xl p-6 border border-slate-700/50 text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-[#fa1f5a] rounded-lg mx-auto mb-4">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2 transition-all duration-500">
                {liveStats.activeScans}
              </div>
              <div className="text-slate-300 text-sm">Active Scans</div>
              <div className="flex items-center justify-center mt-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                <span className="text-green-400 text-xs">Running</span>
              </div>
            </div>

            <div className="bg-slate-900/80 rounded-xl p-6 border border-slate-700/50 text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-[#fa1f5a] rounded-lg mx-auto mb-4">
                <Server className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2 transition-all duration-500">
                {liveStats.protectedServers.toLocaleString()}
              </div>
              <div className="text-slate-300 text-sm">Protected Servers</div>
              <div className="flex items-center justify-center mt-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse mr-2"></div>
                <span className="text-blue-400 text-xs">Secured</span>
              </div>
            </div>

            <div className="bg-slate-900/80 rounded-xl p-6 border border-slate-700/50 text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-[#fa1f5a] rounded-lg mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2 transition-all duration-500">
                {liveStats.onlineAgents}
              </div>
              <div className="text-slate-300 text-sm">Security Agents Online</div>
              <div className="flex items-center justify-center mt-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                <span className="text-green-400 text-xs">24/7</span>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-slate-900/60 rounded-xl p-2 border border-slate-700/50">
              <button
                onClick={() => setActiveTab('global')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'global'
                    ? 'bg-[#fa1f5a] text-white'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                Global Threats
              </button>
              <button
                onClick={() => setActiveTab('activity')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'activity'
                    ? 'bg-[#fa1f5a] text-white'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                Recent Activity
              </button>
            </div>
          </div>

          {/* Content Panels */}
          {activeTab === 'global' && (
            <div className="bg-slate-900/80 rounded-xl p-8 border border-slate-700/50">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <TrendingUp className="h-6 w-6 text-[#fa1f5a] mr-3" />
                  Global Threat Landscape
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-slate-300 text-sm">Updated every 30 seconds</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {globalThreats.map((threat, index) => (
                  <div key={index} className="bg-slate-800/60 rounded-lg p-6 border border-slate-700/50 hover:border-[#fa1f5a]/30 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-bold ${getSeverityColor(threat.severity)}`}>
                        {threat.severity.toUpperCase()}
                      </div>
                      <div className={`text-sm font-bold ${getTrendColor(threat.trend)}`}>
                        {threat.trend}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">{threat.count}</div>
                    <div className="text-slate-300 font-medium">{threat.type}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'activity' && (
            <div className="bg-slate-900/80 rounded-xl p-8 border border-slate-700/50">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <Activity className="h-6 w-6 text-[#fa1f5a] mr-3" />
                  Recent Security Activity
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-slate-300 text-sm">Live feed</span>
                </div>
              </div>

              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-slate-800/60 rounded-lg border border-slate-700/50 hover:border-[#fa1f5a]/30 transition-all duration-300">
                    <div className="flex items-center justify-center w-10 h-10 bg-[#fa1f5a] rounded-lg">
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-medium">{activity.action}</div>
                      <div className="text-slate-400 text-sm">{activity.location}</div>
                    </div>
                    <div className="text-right">
                      <div className={`px-3 py-1 rounded-full text-xs font-bold ${getSeverityColor(activity.severity)} mb-1`}>
                        {activity.severity.toUpperCase()}
                      </div>
                      <div className="text-slate-400 text-xs">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-[#fa1f5a]/10 border border-[#fa1f5a]/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Want Real-Time Protection?</h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Join thousands of Discord servers already protected by our advanced threat detection system. 
                Get instant alerts and automatic protection against all known threats.
              </p>
              <button className="px-8 py-4 bg-[#fa1f5a] text-white rounded-xl font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-3 mx-auto">
                <Zap className="h-6 w-6" />
                <span>Enable Protection</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreatIntelligence;