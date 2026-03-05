import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Live } from './pages/Live';
import { Leagues } from './pages/Leagues';
import { News } from './pages/News';
import { Profile } from './pages/Profile';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'live':
        return <Live />;
      case 'leagues':
        return <Leagues />;
      case 'news':
        return <News />;
      case 'profile':
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
          {renderContent()}
        </Layout>
      </LanguageProvider>
    </ThemeProvider>
  );
}
