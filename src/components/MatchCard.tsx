import React from 'react';
import { Match } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

interface MatchCardProps {
  match: Match;
  compact?: boolean;
}

export const MatchCard: React.FC<MatchCardProps> = ({ match, compact = false }) => {
  const { t } = useLanguage();

  return (
    <div className={cn(
      "bg-white dark:bg-slate-900 rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-800 mb-3",
      compact ? "p-3" : "p-4"
    )}>
      <div className="flex justify-between items-center mb-3">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{match.league}</span>
        {match.status === 'LIVE' ? (
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-bold text-red-500 uppercase">{match.minute}'</span>
          </div>
        ) : (
          <span className="text-[10px] font-bold text-slate-400 uppercase">
            {match.status === 'FINISHED' ? t('fullTime') : t('upcoming')}
          </span>
        )}
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col items-center gap-2 flex-1">
          <img src={match.homeTeam.logo} alt={match.homeTeam.name} className="w-10 h-10 object-contain" referrerPolicy="no-referrer" />
          <span className="text-xs font-bold text-center leading-tight">{match.homeTeam.name}</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="text-2xl font-black tracking-tighter flex items-center gap-3">
            <span>{match.homeScore}</span>
            <span className="text-slate-300 dark:text-slate-700">-</span>
            <span>{match.awayScore}</span>
          </div>
          {match.status === 'SCHEDULED' && (
            <span className="text-[10px] font-bold text-slate-500">
              {new Date(match.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          )}
        </div>

        <div className="flex flex-col items-center gap-2 flex-1">
          <img src={match.awayTeam.logo} alt={match.awayTeam.name} className="w-10 h-10 object-contain" referrerPolicy="no-referrer" />
          <span className="text-xs font-bold text-center leading-tight">{match.awayTeam.name}</span>
        </div>
      </div>
    </div>
  );
};
