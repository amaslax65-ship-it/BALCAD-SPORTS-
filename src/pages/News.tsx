import React from 'react';
import { MOCK_NEWS } from '../data';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';

export const News: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-black uppercase tracking-tighter">{t('news')}</h2>

      <div className="space-y-6">
        {MOCK_NEWS.map(article => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group cursor-pointer"
          >
            <div className="relative rounded-3xl overflow-hidden mb-3 aspect-[16/9]">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                  {article.category}
                </span>
              </div>
            </div>
            <div className="px-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{article.date}</span>
              <h3 className="text-lg font-bold leading-tight mt-1 group-hover:text-blue-600 transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 line-clamp-2">
                {article.excerpt}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
