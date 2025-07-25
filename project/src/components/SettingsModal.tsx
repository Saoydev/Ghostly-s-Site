import React, { useState } from 'react';
import { X, Globe, Shield, Bell, Eye, Lock, Palette, Volume2, Zap, User, HelpCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const { language, setLanguage } = useTheme();
  const [activeTab, setActiveTab] = useState('general');
  const [notifications, setNotifications] = useState(true);
  const [autoScan, setAutoScan] = useState(true);
  const [soundEffects, setSoundEffects] = useState(true);
  const [animations, setAnimations] = useState(true);

  if (!isOpen) return null;

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
  ];

  const tabs = [
    { id: 'general', name: 'General', icon: User },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'appearance', name: 'Appearance', icon: Palette },
    { id: 'advanced', name: 'Advanced', icon: Zap },
  ];

  const ToggleSwitch = ({ enabled, onChange, label }: { enabled: boolean; onChange: () => void; label: string }) => (
    <div className="flex items-center justify-between py-3">
      <span className="text-slate-200">{label}</span>
      <button
        onClick={onChange}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          enabled ? 'bg-[#fa1f5a]' : 'bg-slate-600'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            enabled ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-black/60 backdrop-blur-sm" onClick={onClose} />
        
        <div className="inline-block align-bottom bg-slate-800 rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full border border-slate-700">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-700">
            <div className="flex items-center">
              <div className="p-2 bg-[#fa1f5a] rounded-lg mr-3">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Settings</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex">
            {/* Sidebar */}
            <div className="w-64 bg-slate-900/50 p-4 border-r border-slate-700">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-[#fa1f5a] text-white'
                        : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    <span>{tab.name}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Content */}
            <div className="flex-1 p-6">
              {activeTab === 'general' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <Globe className="h-5 w-5 mr-2 text-[#fa1f5a]" />
                      Language & Region
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => setLanguage(lang.code as 'en' | 'es' | 'fr')}
                          className={`flex items-center space-x-3 p-3 rounded-lg border transition-colors ${
                            language === lang.code
                              ? 'border-[#fa1f5a] bg-[#fa1f5a]/10'
                              : 'border-slate-600 hover:border-[#fa1f5a]/50'
                          }`}
                        >
                          <span className="text-xl">{lang.flag}</span>
                          <span className="text-slate-200">{lang.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Account</h4>
                    <div className="space-y-3">
                      <div className="p-4 bg-slate-700/50 rounded-lg">
                        <div className="text-slate-200 font-medium">Account Status</div>
                        <div className="text-green-400 text-sm">Premium Active</div>
                      </div>
                      <div className="p-4 bg-slate-700/50 rounded-lg">
                        <div className="text-slate-200 font-medium">Protection Level</div>
                        <div className="text-[#fa1f5a] text-sm">Maximum Security</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <Lock className="h-5 w-5 mr-2 text-[#fa1f5a]" />
                      Security Settings
                    </h4>
                    <div className="space-y-4">
                      <ToggleSwitch
                        enabled={autoScan}
                        onChange={() => setAutoScan(!autoScan)}
                        label="Automatic Security Scanning"
                      />
                      <ToggleSwitch
                        enabled={true}
                        onChange={() => {}}
                        label="Real-time Threat Detection"
                      />
                      <ToggleSwitch
                        enabled={true}
                        onChange={() => {}}
                        label="Advanced Malware Protection"
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Privacy</h4>
                    <div className="space-y-4">
                      <ToggleSwitch
                        enabled={false}
                        onChange={() => {}}
                        label="Share Anonymous Usage Data"
                      />
                      <ToggleSwitch
                        enabled={true}
                        onChange={() => {}}
                        label="Encrypted Data Storage"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <Bell className="h-5 w-5 mr-2 text-[#fa1f5a]" />
                      Notification Preferences
                    </h4>
                    <div className="space-y-4">
                      <ToggleSwitch
                        enabled={notifications}
                        onChange={() => setNotifications(!notifications)}
                        label="Security Alerts"
                      />
                      <ToggleSwitch
                        enabled={true}
                        onChange={() => {}}
                        label="Threat Notifications"
                      />
                      <ToggleSwitch
                        enabled={false}
                        onChange={() => {}}
                        label="Marketing Updates"
                      />
                      <ToggleSwitch
                        enabled={true}
                        onChange={() => {}}
                        label="Emergency Alerts"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'appearance' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <Palette className="h-5 w-5 mr-2 text-[#fa1f5a]" />
                      Visual Settings
                    </h4>
                    <div className="space-y-4">
                      <ToggleSwitch
                        enabled={animations}
                        onChange={() => setAnimations(!animations)}
                        label="Enable Animations"
                      />
                      <ToggleSwitch
                        enabled={soundEffects}
                        onChange={() => setSoundEffects(!soundEffects)}
                        label="Sound Effects"
                      />
                      <ToggleSwitch
                        enabled={true}
                        onChange={() => {}}
                        label="High Contrast Mode"
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Theme</h4>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-4 bg-slate-900 rounded-lg border-2 border-[#fa1f5a] text-center">
                        <div className="w-full h-8 bg-slate-800 rounded mb-2"></div>
                        <span className="text-white text-sm">Dark (Active)</span>
                      </div>
                      <div className="p-4 bg-slate-700 rounded-lg border border-slate-600 text-center opacity-50">
                        <div className="w-full h-8 bg-slate-200 rounded mb-2"></div>
                        <span className="text-slate-300 text-sm">Light (Soon)</span>
                      </div>
                      <div className="p-4 bg-slate-700 rounded-lg border border-slate-600 text-center opacity-50">
                        <div className="w-full h-8 bg-blue-800 rounded mb-2"></div>
                        <span className="text-slate-300 text-sm">Auto (Soon)</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'advanced' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <Zap className="h-5 w-5 mr-2 text-[#fa1f5a]" />
                      Advanced Options
                    </h4>
                    <div className="space-y-4">
                      <ToggleSwitch
                        enabled={false}
                        onChange={() => {}}
                        label="Developer Mode"
                      />
                      <ToggleSwitch
                        enabled={true}
                        onChange={() => {}}
                        label="Beta Features"
                      />
                      <ToggleSwitch
                        enabled={false}
                        onChange={() => {}}
                        label="Debug Logging"
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Data Management</h4>
                    <div className="space-y-3">
                      <button className="w-full p-3 bg-slate-700 rounded-lg text-left text-slate-200 hover:bg-slate-600 transition-colors">
                        Export Security Logs
                      </button>
                      <button className="w-full p-3 bg-slate-700 rounded-lg text-left text-slate-200 hover:bg-slate-600 transition-colors">
                        Clear Cache
                      </button>
                      <button className="w-full p-3 bg-red-600/20 border border-red-500/30 rounded-lg text-left text-red-400 hover:bg-red-600/30 transition-colors">
                        Reset All Settings
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center p-6 border-t border-slate-700 bg-slate-900/30">
            <div className="flex items-center space-x-2 text-sm text-slate-400">
              <HelpCircle className="h-4 w-4" />
              <span>Need help? Check our documentation</span>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={onClose}
                className="px-6 py-2 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={onClose}
                className="px-6 py-2 bg-[#fa1f5a] text-white rounded-lg hover:bg-[#e11d48] transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;