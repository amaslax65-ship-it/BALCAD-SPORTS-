import React from 'react';
import { MatchCard } from '../components/MatchCard';
import { MOCK_MATCHES, MOCK_NEWS } from '../data';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      {/* Featured Slider */}
      <section>
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-sm font-black uppercase tracking-widest text-slate-400">{t('featuredMatches')}</h2>
          <button className="text-blue-600 text-[10px] font-bold uppercase flex items-center">
            View All <ChevronRight size={12} />
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 snap-x no-scrollbar">
          {MOCK_MATCHES.filter(m => m.status === 'LIVE').map(match => (
            <div key={match.id} className="min-w-[280px] snap-center">
              <MatchCard match={match} />
            </div>
          ))}
        </div>
      </section>

      {/* Trending News */}
      <section>
        <h2 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-3">{t('trendingNews')}</h2>
        <div className="space-y-4">
          {MOCK_NEWS.map(article => (
            <motion.div
              key={article.id}
              whileTap={{ scale: 0.98 }}
              className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800"
            >
              <img src={article.image} alt={article.title} className="w-full h-40 object-cover" referrerPolicy="no-referrer" />
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">{article.category}</span>
                  <span className="text-[10px] font-medium text-slate-400">{article.date}</span>
                </div>
                <h3 className="font-bold text-sm leading-snug">{article.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Top Matches Today */}
      <section>
        <h2 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-3">{t('topMatches')}</h2>
        <div className="space-y-1">
          {MOCK_MATCHES.map(match => (
            <MatchCard key={match.id} match={match} compact />
          ))}
        </div>
      </section>
    </div>
  );
};
