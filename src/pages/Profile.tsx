import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Settings, Bell, Heart, Globe, Moon, Sun, LogOut, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

export const Profile: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const { isDarkMode, toggleTheme } = useTheme();

  const menuItems = [
    { id: 'fav', label: t('favoriteTeams'), icon: Heart, color: 'text-red-500' },
    { id: 'notif', label: t('notifications'), icon: Bell, color: 'text-yellow-500' },
  ];

  return (
    <div className="space-y-8">
      {/* User Header */}
      <div className="flex flex-col items-center text-center pt-4">
        <div className="w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 border-4 border-white dark:border-slate-900 shadow-xl">
          <span className="text-3xl font-black text-blue-600">AS</span>
        </div>
        <h3 className="text-xl font-black">Amas Lax</h3>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Premium Member</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Follows', value: '12' },
          { label: 'Badges', value: '5' },
          { label: 'Points', value: '1.2k' },
        ].map(stat => (
          <div key={stat.label} className="bg-white dark:bg-slate-900 p-3 rounded-2xl text-center shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="text-lg font-black text-blue-600">{stat.value}</div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Menu */}
      <div className="space-y-2">
        {menuItems.map(item => (
          <button key={item.id} className="w-full bg-white dark:bg-slate-900 p-4 rounded-2xl flex items-center justify-between shadow-sm border border-slate-100 dark:border-slate-800 group">
            <div className="flex items-center gap-4">
              <div className={cn("p-2 rounded-xl bg-slate-50 dark:bg-slate-800", item.color)}>
                <item.icon size={20} />
              </div>
              <span className="font-bold text-sm">{item.label}</span>
            </div>
            <ChevronRight size={16} className="text-slate-300 group-hover:translate-x-1 transition-transform" />
          </button>
        ))}
      </div>

      {/* Settings */}
      <div className="space-y-2">
        <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-2">App Settings</h4>
        
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800">
          {/* Language Toggle */}
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-blue-500">
                <Globe size={20} />
              </div>
              <span className="font-bold text-sm">{t('language')}</span>
            </div>
            <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
              <button
                onClick={() => setLanguage('en')}
                className={cn("px-3 py-1 text-[10px] font-bold rounded-md transition-all", language === 'en' ? "bg-white dark:bg-slate-700 shadow-sm" : "text-slate-400")}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('so')}
                className={cn("px-3 py-1 text-[10px] font-bold rounded-md transition-all", language === 'so' ? "bg-white dark:bg-slate-700 shadow-sm" : "text-slate-400")}
              >
                SO
              </button>
            </div>
          </div>

          {/* Theme Toggle */}
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-purple-500">
                {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
              </div>
              <span className="font-bold text-sm">{t('darkMode')}</span>
            </div>
            <button
              onClick={toggleTheme}
              className={cn(
                "w-12 h-6 rounded-full relative transition-colors duration-300",
                isDarkMode ? "bg-blue-600" : "bg-slate-200"
              )}
            >
              <div className={cn(
                "absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300",
                isDarkMode ? "left-7" : "left-1"
              )} />
            </button>
          </div>
        </div>
      </div>

      {/* Logout */}
      <button className="w-full p-4 flex items-center justify-center gap-2 text-red-500 font-bold text-sm">
        <LogOut size={18} />
        <span>Log Out</span>
      </button>
    </div>
  );
};
