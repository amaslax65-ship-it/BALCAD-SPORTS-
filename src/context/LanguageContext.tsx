import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'so';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    home: 'Home',
    live: 'Live',
    leagues: 'Leagues',
    news: 'News',
    profile: 'Profile',
    featuredMatches: 'Featured Matches',
    trendingNews: 'Trending News',
    topMatches: 'Top Matches Today',
    standings: 'Standings',
    fixtures: 'Fixtures',
    results: 'Results',
    topScorers: 'Top Scorers',
    login: 'Login',
    signup: 'Sign Up',
    favoriteTeams: 'Favorite Teams',
    notifications: 'Notifications',
    language: 'Language',
    darkMode: 'Dark Mode',
    minute: 'min',
    fullTime: 'FT',
    upcoming: 'Upcoming',
  },
  so: {
    home: 'Hoyga',
    live: 'Toos',
    leagues: 'Horyaallada',
    news: 'Wararka',
    profile: 'Profile',
    featuredMatches: 'Ciyaaraha caanka ah',
    trendingNews: 'Wararka ugu dambeeyay',
    topMatches: 'Ciyaaraha maanta',
    standings: 'Kala sarreynta',
    fixtures: 'Jadwalka',
    results: 'Natiijooyinka',
    topScorers: 'Gool dhaliyaasha',
    login: 'Soo gal',
    signup: 'Is qor',
    favoriteTeams: 'Kooxaha aad jeceshahay',
    notifications: 'Ogeysiisyada',
    language: 'Luqadda',
    darkMode: 'Habka mugdiga',
    minute: 'daq',
    fullTime: 'DH',
    upcoming: 'Soo socda',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
