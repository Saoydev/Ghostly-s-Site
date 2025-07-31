import React from 'react';
import { Shield, Users, Award, Star, Zap } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    { value: '500+', label: 'Users Protected', icon: Users },
    { value: 'TBD', label: 'Accounts Recovered', icon: Shield },
    { value: 'TBD', label: 'Servers Secured', icon: Award },
    { value: 'TBD', label: 'Success Rate', icon: Star }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#fa1f5a]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/30 rounded-3xl p-12 hover:border-[#fa1f5a]/30 transition-all duration-500">
          {/* Trust Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-[#fa1f5a]/20 border border-[#fa1f5a]/30 text-white rounded-full text-sm font-semibold backdrop-blur-sm">
              <Star className="h-4 w-4 text-red-400 mr-2 animate-pulse" />
              <span className="text-[#fa1f5a]">Trusted by 500+ Discord users worldwide</span>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              About <span className="text-[#fa1f5a]">Securely</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Founded by digital safety specialists to safeguard Discord communities from growing online threats. We are the trusted guardians, fostering an environment where hundreds of thousands of Discord users worldwide can interact reliably and with confidence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Zap className="h-8 w-8 text-[#fa1f5a] mr-3" />
                Our Mission
              </h3>
              <p className="text-lg text-slate-300 mb-6">
                To create the most secure Discord ecosystem by providing comprehensive
                security services, education, and rapid response to threats.
              </p>
              <p className="text-lg text-slate-300">
                Our team of Discord security specialists
                work around the clock to identify threats and help victims recover.
              </p>

              {/* Trust Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 text-green-400 rounded-full text-sm font-semibold backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                Industry Leading Security Standards
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="group bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 text-center p-6 rounded-2xl hover:scale-105 transition-all duration-300 hover:border-[#fa1f5a]/50 hover:shadow-2xl hover:shadow-[#fa1f5a]/10"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#fa1f5a] rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 group-hover:text-[#fa1f5a] transition-colors">
                    {achievement.value}
                  </div>
                  <div className="text-slate-300 font-medium">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
