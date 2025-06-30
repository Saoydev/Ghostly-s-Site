import React, { useState, useEffect } from 'react';
import { Shield, AlertTriangle, CheckCircle, X, Zap, Eye, Lock, MessageSquare, Users, Bot, ExternalLink, Play, RotateCcw } from 'lucide-react';

const SecuritySimulator: React.FC = () => {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationStep, setSimulationStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [detectedThreats, setDetectedThreats] = useState<string[]>([]);

  const scenarios = [
    {
      id: 'token-grabber',
      title: 'Token Grabber Attack',
      description: 'A malicious bot is attempting to steal Discord tokens from your server',
      icon: AlertTriangle,
      severity: 'critical',
      steps: [
        'Suspicious bot joins server',
        'Bot attempts to access user tokens',
        'Securely detects malicious activity',
        'Bot is immediately banned',
        'Users are notified and protected'
      ],
      threats: ['Malicious Bot Detected', 'Token Theft Attempt', 'Unauthorized Access'],
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'phishing-scam',
      title: 'Phishing Link Scam',
      description: 'Someone is sharing fake Discord Nitro links to steal credentials',
      icon: ExternalLink,
      severity: 'high',
      steps: [
        'Suspicious link detected in chat',
        'Link analysis in progress',
        'Phishing site identified',
        'Link automatically deleted',
        'Warning sent to all users'
      ],
      threats: ['Phishing Link Detected', 'Credential Theft Risk', 'Fake Nitro Scam'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'server-raid',
      title: 'Server Raid Prevention',
      description: 'Multiple bots are attempting to spam and disrupt your server',
      icon: Users,
      severity: 'high',
      steps: [
        'Mass bot joins detected',
        'Spam pattern identified',
        'Auto-moderation activated',
        'Raid bots mass banned',
        'Server lockdown initiated'
      ],
      threats: ['Raid Bot Army', 'Spam Attack', 'Server Disruption'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'account-takeover',
      title: 'Account Takeover',
      description: 'Unauthorized access detected on a user account',
      icon: Lock,
      severity: 'critical',
      steps: [
        'Unusual login activity detected',
        'Account security scan initiated',
        'Unauthorized access confirmed',
        'Account temporarily secured',
        'Recovery process started'
      ],
      threats: ['Unauthorized Login', 'Account Compromise', 'Data Breach Risk'],
      color: 'from-red-500 to-pink-500'
    }
  ];

  const startSimulation = () => {
    setIsSimulating(true);
    setSimulationStep(0);
    setShowResults(false);
    setDetectedThreats([]);

    const scenario = scenarios[currentScenario];
    let step = 0;

    const interval = setInterval(() => {
      if (step < scenario.steps.length) {
        setSimulationStep(step);
        
        // Add threats as we progress
        if (step < scenario.threats.length) {
          setDetectedThreats(prev => [...prev, scenario.threats[step]]);
        }
        
        step++;
      } else {
        clearInterval(interval);
        setIsSimulating(false);
        setShowResults(true);
      }
    }, 1500);
  };

  const resetSimulation = () => {
    setIsSimulating(false);
    setSimulationStep(0);
    setShowResults(false);
    setDetectedThreats([]);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'high': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'medium': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      default: return 'text-green-400 bg-green-400/20 border-green-400/30';
    }
  };

  const currentScenarioData = scenarios[currentScenario];

  return (
    <section id="security-scanner" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#fa1f5a]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/30 rounded-3xl p-12 hover:border-[#fa1f5a]/30 transition-all duration-500">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Try Our <span className="text-[#fa1f5a]">Security Scanner</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Experience real Discord security threats and see how our protection system responds in real-time. 
              Choose a scenario below to start the simulation.
            </p>
          </div>

          {/* Scenario Selection */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {scenarios.map((scenario, index) => (
              <button
                key={scenario.id}
                onClick={() => {
                  setCurrentScenario(index);
                  resetSimulation();
                }}
                className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                  currentScenario === index
                    ? 'border-[#fa1f5a] bg-[#fa1f5a]/10'
                    : 'border-slate-700/50 bg-slate-800/60 hover:border-[#fa1f5a]/50'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-[#fa1f5a] rounded-lg">
                    <scenario.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold border ${getSeverityColor(scenario.severity)}`}>
                    {scenario.severity.toUpperCase()}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{scenario.title}</h3>
                <p className="text-slate-300 text-sm">{scenario.description}</p>
              </button>
            ))}
          </div>

          {/* Simulation Interface */}
          <div className="bg-slate-900/80 rounded-xl p-8 border border-slate-700/50">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#fa1f5a] rounded-lg">
                  <currentScenarioData.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{currentScenarioData.title}</h3>
                  <p className="text-slate-400">{currentScenarioData.description}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${isSimulating ? 'bg-yellow-400 animate-pulse' : showResults ? 'bg-green-400' : 'bg-slate-500'}`}></div>
                  <span className="text-slate-300 text-sm">
                    {isSimulating ? 'Scanning...' : showResults ? 'Complete' : 'Ready'}
                  </span>
                </div>
                
                {!isSimulating && (
                  <button
                    onClick={showResults ? resetSimulation : startSimulation}
                    className="px-4 py-2 bg-[#fa1f5a] text-white rounded-lg font-semibold hover:bg-[#e11d48] transition-colors flex items-center space-x-2"
                  >
                    {showResults ? (
                      <>
                        <RotateCcw className="h-4 w-4" />
                        <span>Reset</span>
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4" />
                        <span>Scan</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>

            {/* Simulation Steps */}
            {(isSimulating || showResults) && (
              <div className="space-y-4 mb-8">
                <h4 className="text-lg font-bold text-white mb-4">Security Scan Results:</h4>
                {currentScenarioData.steps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-4 p-4 rounded-lg border transition-all duration-500 ${
                      index <= simulationStep
                        ? 'border-green-400/30 bg-green-400/10'
                        : 'border-slate-700/50 bg-slate-800/60'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      index <= simulationStep
                        ? 'bg-green-400 text-white'
                        : 'bg-slate-600 text-slate-400'
                    }`}>
                      {index <= simulationStep ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        <span className="text-sm font-bold">{index + 1}</span>
                      )}
                    </div>
                    <span className={`font-medium ${
                      index <= simulationStep ? 'text-white' : 'text-slate-400'
                    }`}>
                      {step}
                    </span>
                    {index === simulationStep && isSimulating && (
                      <div className="ml-auto">
                        <div className="w-4 h-4 border-2 border-[#fa1f5a] border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Detected Threats */}
            {detectedThreats.length > 0 && (
              <div className="bg-slate-800/80 rounded-lg p-6 mb-8 border border-slate-700/50">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-[#fa1f5a] mr-2" />
                  Threats Detected & Neutralized
                </h4>
                <div className="space-y-2">
                  {detectedThreats.map((threat, index) => (
                    <div key={index} className="flex items-center space-x-3 text-slate-300">
                      <X className="h-4 w-4 text-red-400" />
                      <span>{threat}</span>
                      <span className="ml-auto text-green-400 text-sm font-semibold">BLOCKED</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Results */}
            {showResults && (
              <div className="bg-green-400/10 border border-green-400/30 rounded-lg p-6 text-center">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Shield className="h-8 w-8 text-green-400" />
                  <h4 className="text-xl font-bold text-white">Scan Complete - All Clear!</h4>
                </div>
                <p className="text-slate-300 mb-6">
                  Our security scanner successfully detected and neutralized all threats in this scenario. 
                  Your Discord community remains safe and protected.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-slate-900/60 rounded-lg p-4">
                    <Eye className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{detectedThreats.length}</div>
                    <div className="text-slate-400 text-sm">Threats Scanned</div>
                  </div>
                  <div className="bg-slate-900/60 rounded-lg p-4">
                    <Lock className="h-6 w-6 text-green-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{detectedThreats.length}</div>
                    <div className="text-slate-400 text-sm">Threats Blocked</div>
                  </div>
                  <div className="bg-slate-900/60 rounded-lg p-4">
                    <Zap className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">1.2s</div>
                    <div className="text-slate-400 text-sm">Scan Time</div>
                  </div>
                </div>
              </div>
            )}

            {/* Start Button */}
            {!isSimulating && !showResults && (
              <div className="text-center">
                <button 
                  onClick={startSimulation}
                  className="px-12 py-4 bg-[#fa1f5a] text-white rounded-xl font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-3 mx-auto"
                >
                  <Shield className="h-6 w-6" />
                  <span>Start Security Scan</span>
                </button>
                <p className="text-slate-400 text-sm mt-4">
                  * This is a demonstration of our security scanning system
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySimulator;