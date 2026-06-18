/**
 * Football-Data.org API 服务
 * 真实足球数据 API
 * 官网: https://www.football-data.org/
 *
 * 使用说明:
 * 1. 访问 https://www.football-data.org/client/forgotPassword
 * 2. 注册账号获取免费 API Key
 * 3. 将 API Key 填入下方 API_KEY 常量
 */

const API_KEY = 'YOUR_API_KEY_HERE'; // 替换为你的 API Key
const BASE_URL = 'https://api.football-data.org/v4';

// 联赛 ID 映射 (football-data.org)
const COMPETITIONS = {
  PL: 2021,   // 英超 Premier League
  CL: 2001,   // 欧冠 Champions League
  BL1: 2002,  // 德甲 Bundesliga
  Liga: 2014, // 西甲 La Liga
  SA: 2019,   // 意甲 Serie A
  FL1: 2015,  // 法甲 Ligue 1
  WC: null,   // 世界杯 (免费版不支持)
};

const TEAM_FLAGS = {
  'Manchester United': '🏴',
  'Manchester City': '🏴',
  'Liverpool': '🔴',
  'Arsenal': '🔴',
  'Chelsea': '🔵',
  'Tottenham': '⚪',
  'Real Madrid': '🇪🇸',
  'Barcelona': '🇪🇸',
  'Atlético Madrid': '🔴',
  'Bayern München': '🇩🇪',
  'Borussia Dortmund': '🟡',
  'RB Leipzig': '⚪',
  'Inter Milan': '🔵',
  'AC Milan': '🔴',
  'Juventus': '⚫',
  'Paris Saint-Germain': '🔵',
  'OM': '⚪',
  'AS Roma': '🔴',
  'Lazio': '⚪',
  ' Napoli': '🔵',
};

// 获取球队国旗
function getTeamFlag(teamName) {
  return TEAM_FLAGS[teamName] || '⚽';
}

// API 请求封装
async function fetchAPI(endpoint, options = {}) {
  const url = `${BASE_URL}${endpoint}`;

  const defaultHeaders = {
    'X-Auth-Token': API_KEY,
    'Content-Type': 'application/json',
  };

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`API 请求失败 [${endpoint}]:`, error);
    throw error;
  }
}

// 获取联赛赛程
export async function getMatches(competitionCode = 'PL') {
  const competitionId = COMPETITIONS[competitionCode] || COMPETITIONS.PL;

  const data = await fetchAPI(`/competitions/${competitionId}/matches`);

  return data.matches.map((match) => ({
    id: String(match.id),
    homeTeam: match.homeTeam.shortName || match.homeTeam.name,
    awayTeam: match.awayTeam.shortName || match.awayTeam.name,
    homeScore: match.score?.fullTime?.home ?? null,
    awayScore: match.score?.fullTime?.away ?? null,
    stage: match.stage,
    venue: match.venue || '',
    city: '',
    dateTime: match.utcDate,
    status: match.status,
    isHot: match.matchday > 25,
    attendance: match.attendance || null,
    weather: null,
    referee: null,
    odds: null,
    matchPreview: null,
  }));
}

// 获取球队列表
export async function getTeams(competitionCode = 'PL') {
  const competitionId = COMPETITIONS[competitionCode] || COMPETITIONS.PL;

  const data = await fetchAPI(`/competitions/${competitionId}/teams`);

  return data.teams.map((team) => ({
    id: String(team.id),
    name: team.shortName || team.name,
    shortName: team.tla || team.shortName || team.name.substring(0, 3),
    flag: getTeamFlag(team.name),
    country: team.country || '',
    confederation: '',
    rank: null,
    previousRank: null,
    points: null,
    worldCupsWon: 0,
    yearFounded: team.founded || null,
    stadium: team.venue || '',
    city: team.address || '',
    coach: '',
    captain: '',
    starPlayer: '',
    nickname: team.name,
    formation: '',
    bestWorldCupFinish: null,
    bestPlayer: null,
    topScorer: null,
    keyPlayer: null,
    dangerMan: null,
    didYouKnow: null,
    squadSize: null,
    avgAge: null,
    avgMarketValue: null,
    crest: team.crest,
  }));
}

// 获取射手榜
export async function getTopScorers(competitionCode = 'PL') {
  const competitionId = COMPETITIONS[competitionCode] || COMPETITIONS.PL;

  const data = await fetchAPI(`/competitions/${competitionId}/scorers`);

  return data.scorers.map((scorer, index) => ({
    rank: index + 1,
    player: scorer.player.name,
    team: scorer.team.shortName || scorer.team.name,
    teamFlag: getTeamFlag(scorer.team.name),
    goals: scorer.goals,
    assists: scorer.assists || 0,
    penalties: scorer.penalties || 0,
  }));
}

// 获取积分榜
export async function getStandings(competitionCode = 'PL') {
  const competitionId = COMPETITIONS[competitionCode] || COMPETITIONS.PL;

  const data = await fetchAPI(`/competitions/${competitionId}/standings`);

  const table = data.standings.find((s) => s.type === 'TOTAL');
  if (!table) return [];

  return table.table.map((standing) => ({
    position: standing.position,
    team: standing.team.shortName || standing.team.name,
    teamFlag: getTeamFlag(standing.team.name),
    playedGames: standing.playedGames,
    won: standing.won,
    draw: standing.draw,
    lost: standing.lost,
    points: standing.points,
    goalsFor: standing.goalsFor,
    goalsAgainst: standing.goalsAgainst,
    goalDifference: standing.goalDifference,
    crest: standing.team.crest,
  }));
}

// 获取单场比赛详情
export async function getMatchById(matchId) {
  const data = await fetchAPI(`/matches/${matchId}`);

  return {
    id: String(data.id),
    homeTeam: data.homeTeam.shortName || data.homeTeam.name,
    awayTeam: data.awayTeam.shortName || data.awayTeam.name,
    homeScore: data.score?.fullTime?.home ?? null,
    awayScore: data.score?.fullTime?.away ?? null,
    stage: data.stage,
    venue: data.venue || '',
    city: '',
    dateTime: data.utcDate,
    status: data.status,
    isHot: false,
    attendance: data.attendance || null,
    weather: null,
    referee: data.referees?.[0]?.name || null,
    odds: null,
    matchPreview: null,
    competition: data.competition?.name,
    season: data.season?.startDate,
  };
}

// 获取球队详情
export async function getTeamById(teamId) {
  const data = await fetchAPI(`/teams/${teamId}`);

  return {
    id: String(data.id),
    name: data.shortName || data.name,
    shortName: data.tla || data.shortName || data.name.substring(0, 3),
    flag: getTeamFlag(data.name),
    country: data.country || '',
    confederation: '',
    rank: null,
    yearFounded: data.founded || null,
    stadium: data.venue || '',
    city: data.address || '',
    coach: '',
    squadSize: null,
    crest: data.crest,
  };
}

// 获取可用联赛列表
export async function getAvailableCompetitions() {
  const data = await fetchAPI('/competitions');

  return data.competitions.map((comp) => ({
    id: comp.id,
    code: comp.code,
    name: comp.name,
    area: comp.area?.name || '',
    emblem: comp.emblem,
  }));
}

export default {
  getMatches,
  getTeams,
  getTopScorers,
  getStandings,
  getMatchById,
  getTeamById,
  getAvailableCompetitions,
  COMPETITIONS,
};
