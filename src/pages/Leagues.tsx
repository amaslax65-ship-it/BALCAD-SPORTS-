import React, { useState } from 'react';
import { MOCK_STANDINGS, MOCK_SCORERS } from '../data';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

export const Leagues: React.FC = () => {
  const { t } = useLanguage();
  const [activeSubTab, setActiveSubTab] = useState<'standings' | 'scorers'>('standings');

  const leagues = [
    'Premier League',
    'La Liga',
    'Serie A',
    'Champions League'
  ];
  const [selectedLeague, setSelectedLeague] = useState(leagues[0]);

  return (
    <div className="space-y-6">
      {/* League Selector */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
        {leagues.map(league => (
          <button
            key={league}
            onClick={() => setSelectedLeague(league)}
            className={cn(
              "px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all",
              selectedLeague === league
                ? "bg-blue-600 text-white"
                : "bg-white dark:bg-slate-900 text-slate-500 border border-slate-100 dark:border-slate-800"
            )}
          >
            {league}
          </button>
        ))}
      </div>

      {/* Sub Tabs */}
      <div className="flex bg-slate-200 dark:bg-slate-800 p-1 rounded-xl">
        <button
          onClick={() => setActiveSubTab('standings')}
          className={cn(
            "flex-1 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all",
            activeSubTab === 'standings' ? "bg-white dark:bg-slate-700 shadow-sm" : "text-slate-500"
          )}
        >
          {t('standings')}
        </button>
        <button
          onClick={() => setActiveSubTab('scorers')}
          className={cn(
            "flex-1 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all",
            activeSubTab === 'scorers' ? "bg-white dark:bg-slate-700 shadow-sm" : "text-slate-500"
          )}
        >
          {t('topScorers')}
        </button>
      </div>

      {activeSubTab === 'standings' ? (
        <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-400 font-bold uppercase tracking-tighter">
              <tr>
                <th className="px-4 py-3 w-10">#</th>
                <th className="py-3">Team</th>
                <th className="py-3 text-center">P</th>
                <th className="py-3 text-center">GD</th>
                <th className="px-4 py-3 text-center">Pts</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {MOCK_STANDINGS.map((row) => (
                <tr key={row.team.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-4 py-4 font-bold text-slate-400">{row.position}</td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <img src={row.team.logo} alt="" className="w-5 h-5 object-contain" referrerPolicy="no-referrer" />
                      <span className="font-bold">{row.team.shortName}</span>
                    </div>
                  </td>
                  <td className="py-4 text-center font-medium text-slate-500">{row.played}</td>
                  <td className="py-4 text-center font-medium text-slate-500">{row.gd}</td>
                  <td className="px-4 py-4 text-center font-black text-blue-600 dark:text-blue-400">{row.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="space-y-3">
          {MOCK_SCORERS.map((player, idx) => (
            <div key={player.id} className="bg-white dark:bg-slate-900 p-4 rounded-2xl flex items-center justify-between shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-4">
                <span className="text-xl font-black text-slate-200 dark:text-slate-800">{idx + 1}</span>
                <div>
                  <h4 className="font-bold text-sm">{player.name}</h4>
                  <div className="flex items-center gap-1 mt-0.5">
                    <img src={player.team.logo} alt="" className="w-3 h-3 object-contain" referrerPolicy="no-referrer" />
                    <span className="text-[10px] font-medium text-slate-400">{player.team.name}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-black text-blue-600 dark:text-blue-400">{player.goals}</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Goals</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
