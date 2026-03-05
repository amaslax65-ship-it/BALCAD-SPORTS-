export type MatchStatus = 'LIVE' | 'FINISHED' | 'SCHEDULED';

export interface Team {
  id: string;
  name: string;
  logo: string;
  shortName: string;
}

export interface Match {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  status: MatchStatus;
  minute?: number;
  startTime: string;
  league: string;
  events: MatchEvent[];
}

export interface MatchEvent {
  id: string;
  type: 'GOAL' | 'YELLOW_CARD' | 'RED_CARD' | 'SUBSTITUTION';
  minute: number;
  player: string;
  assist?: string;
  teamId: string;
}

export interface LeagueStanding {
  position: number;
  team: Team;
  played: number;
  won: number;
  draw: number;
  lost: number;
  gf: number;
  ga: number;
  gd: number;
  points: number;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}

export interface TopScorer {
  id: string;
  name: string;
  team: Team;
  goals: number;
  assists: number;
}
