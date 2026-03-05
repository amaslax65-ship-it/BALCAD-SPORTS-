import React, { useState } from 'react';
import { MatchCard } from '../components/MatchCard';
import { MOCK_MATCHES } from '../data';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { X, Info, Users, Shield } from 'lucide-react';

export const Live: React.FC = () => {
  const { t } = useLanguage();
  const [selectedMatch, setSelectedMatch] = useState<string | null>(null);
  const liveMatches = MOCK_MATCHES.filter(m => m.status === 'LIVE');

  const activeMatch = MOCK_MATCHES.find(m => m.id === selectedMatch);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-black uppercase tracking-tighter">{t('live')}</h2>
        <div className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-[10px] font-bold uppercase tracking-widest">
          {liveMatches.length} Matches
        </div>
      </div>

      {liveMatches.length > 0 ? (
        liveMatches.map(match => (
          <div key={match.id} onClick={() => setSelectedMatch(match.id)} className="cursor-pointer">
            <MatchCard match={match} />
          </div>
        ))
      ) : (
        <div className="text-center py-20 text-slate-400">
          <p className="text-sm font-medium">No matches currently live</p>
        </div>
      )}

      {/* Match Details Modal */}
      <AnimatePresence>
        {selectedMatch && activeMatch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4"
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              className="bg-white dark:bg-slate-900 w-full max-w-md rounded-t-[32px] sm:rounded-[32px] overflow-hidden shadow-2xl"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{activeMatch.league}</span>
                  <button onClick={() => setSelectedMatch(null)} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full">
                    <X size={20} />
                  </button>
                </div>

                <div className="flex items-center justify-between mb-8">
                  <div className="flex flex-col items-center gap-2 flex-1">
                    <img src={activeMatch.homeTeam.logo} alt="" className="w-16 h-16 object-contain" referrerPolicy="no-referrer" />
                    <span className="font-black text-center">{activeMatch.homeTeam.name}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-4xl font-black tracking-tighter">{activeMatch.homeScore} - {activeMatch.awayScore}</span>
                    <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest animate-pulse">{activeMatch.minute}'</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 flex-1">
                    <img src={activeMatch.awayTeam.logo} alt="" className="w-16 h-16 object-contain" referrerPolicy="no-referrer" />
                    <span className="font-black text-center">{activeMatch.awayTeam.name}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                      <Info size={12} /> Match Events
                    </h4>
                    <div className="space-y-3">
                      {activeMatch.events.map(event => (
                        <div key={event.id} className="flex items-center gap-4 text-sm">
                          <span className="font-bold text-slate-400 w-8">{event.minute}'</span>
                          <div className="flex-1 flex items-center gap-3">
                            <div className={cn(
                              "w-2 h-2 rounded-full",
                              event.type === 'GOAL' ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" :
                              event.type === 'YELLOW_CARD' ? "bg-yellow-500" : "bg-red-500"
                            )} />
                            <div className="flex flex-col">
                              <span className="font-bold">{event.player}</span>
                              {event.type === 'GOAL' && <span className="text-[10px] text-slate-400">Assist: {event.assist || 'None'}</span>}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center gap-2 py-3 bg-slate-50 dark:bg-slate-800 rounded-2xl text-xs font-bold">
                      <Users size={16} /> Lineups
                    </button>
                    <button className="flex items-center justify-center gap-2 py-3 bg-slate-50 dark:bg-slate-800 rounded-2xl text-xs font-bold">
                      <Shield size={16} /> Stats
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
