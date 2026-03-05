import { Match, LeagueStanding, NewsArticle, TopScorer } from './types';

export const MOCK_TEAMS = {
  ARSENAL: { id: '1', name: 'Arsenal', shortName: 'ARS', logo: 'https://crests.football-data.org/57.png' },
  MAN_CITY: { id: '2', name: 'Manchester City', shortName: 'MCI', logo: 'https://crests.football-data.org/65.png' },
  LIVERPOOL: { id: '3', name: 'Liverpool', shortName: 'LIV', logo: 'https://crests.football-data.org/64.png' },
  REAL_MADRID: { id: '4', name: 'Real Madrid', shortName: 'RMA', logo: 'https://crests.football-data.org/86.png' },
  BARCELONA: { id: '5', name: 'Barcelona', shortName: 'BAR', logo: 'https://crests.football-data.org/81.png' },
  BAYERN: { id: '6', name: 'Bayern Munich', shortName: 'FCB', logo: 'https://crests.football-data.org/5.png' },
};

export const MOCK_MATCHES: Match[] = [
  {
    id: 'm1',
    homeTeam: MOCK_TEAMS.ARSENAL,
    awayTeam: MOCK_TEAMS.MAN_CITY,
    homeScore: 2,
    awayScore: 1,
    status: 'LIVE',
    minute: 72,
    startTime: '2024-03-04T19:00:00Z',
    league: 'Premier League',
    events: [
      { id: 'e1', type: 'GOAL', minute: 12, player: 'Bukayo Saka', teamId: '1' },
      { id: 'e2', type: 'GOAL', minute: 45, player: 'Erling Haaland', teamId: '2' },
      { id: 'e3', type: 'GOAL', minute: 68, player: 'Martin Odegaard', teamId: '1' },
    ]
  },
  {
    id: 'm2',
    homeTeam: MOCK_TEAMS.LIVERPOOL,
    awayTeam: MOCK_TEAMS.REAL_MADRID,
    homeScore: 0,
    awayScore: 0,
    status: 'LIVE',
    minute: 15,
    startTime: '2024-03-04T20:00:00Z',
    league: 'Champions League',
    events: []
  },
  {
    id: 'm3',
    homeTeam: MOCK_TEAMS.BARCELONA,
    awayTeam: MOCK_TEAMS.BAYERN,
    homeScore: 0,
    awayScore: 0,
    status: 'SCHEDULED',
    startTime: '2024-03-05T20:00:00Z',
    league: 'Champions League',
    events: []
  }
];

export const MOCK_STANDINGS: LeagueStanding[] = [
  { position: 1, team: MOCK_TEAMS.LIVERPOOL, played: 26, won: 18, draw: 6, lost: 2, gf: 63, ga: 25, gd: 38, points: 60 },
  { position: 2, team: MOCK_TEAMS.MAN_CITY, played: 26, won: 18, draw: 5, lost: 3, gf: 59, ga: 26, gd: 33, points: 59 },
  { position: 3, team: MOCK_TEAMS.ARSENAL, played: 26, won: 18, draw: 4, lost: 4, gf: 62, ga: 23, gd: 39, points: 58 },
];

export const MOCK_NEWS: NewsArticle[] = [
  {
    id: 'n1',
    title: 'Mbappe set to join Real Madrid this summer',
    excerpt: 'The French superstar has reportedly informed PSG of his decision to leave...',
    image: 'https://picsum.photos/seed/football1/800/400',
    date: '2 hours ago',
    category: 'Transfer News'
  },
  {
    id: 'n2',
    title: 'Klopp reflects on his time at Liverpool',
    excerpt: 'As the season nears its end, Jurgen Klopp shares emotional message with fans...',
    image: 'https://picsum.photos/seed/football2/800/400',
    date: '5 hours ago',
    category: 'Premier League'
  }
];

export const MOCK_SCORERS: TopScorer[] = [
  { id: 'p1', name: 'Erling Haaland', team: MOCK_TEAMS.MAN_CITY, goals: 18, assists: 5 },
  { id: 'p2', name: 'Mohamed Salah', team: MOCK_TEAMS.LIVERPOOL, goals: 15, assists: 9 },
  { id: 'p3', name: 'Ollie Watkins', team: MOCK_TEAMS.ARSENAL, goals: 14, assists: 10 },
];
