import React, { useState } from 'react';
import { X, Globe, Shield, Bell, Eye, Lock, Palette, Volume2, Zap, User, HelpCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const { language, setLanguage } = useTheme();
  const [activeTab, setActiveTab] = useState('appearance');
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
    { id: 'appearance', name: 'Appearance', icon: Palette },
  ];

  const ToggleSwitch = ({ enabled, onChange, label }: { enabled: boolean; onChange: () => void; label: string }) => (
    <div className="flex items-center justify-between py-3">
      <span className="text-slate-200">{label}</span>
      <button
        onClick={onChange}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${enabled ? 'bg-[#fa1f5a]' : 'bg-slate-600'
          }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${enabled ? 'translate-x-6' : 'translate-x-1'
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
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${activeTab === tab.id
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
                        onChange={() => { }}
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