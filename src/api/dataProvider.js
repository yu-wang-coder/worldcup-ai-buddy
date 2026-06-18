/**
 * 统一的数据提供者 - 统一调度 API 和 Mock 数据
 */

import { getMatches, getMatchesByStage, getMatchById, getHotMatches, getUpcomingMatches, getTodayMatches, getNextMatch } from '../data/matches.js';
import { getTeams, getTeamById, getTeamByName, getTeamsByConfederation, getTopRankedTeams, searchTeams } from '../data/teams.js';
import { getPlayers, getPlayerById, getPlayersByTeam, getStarPlayers, getPlayersByPosition, getTopGoalscorers, getPlayersByTeamName, searchPlayers } from '../data/players.js';
import { getHighlights, getHighlightById, getHighlightsByType, getTopHighlights, getHighlightStats } from '../data/highlights.js';
import { getWorldCupWinnerOdds, getTopScorerOdds, getMatchOdds, getGroupWinnerOdds, getOddsHistory, getBookmakerComparison, getBestOdds } from '../data/odds.js';
import { getSmartResponse, getRandomGreeting, getRandomPrediction, getRandomTrivia, getRandomRule, getTeamInfo, getPlayerInsight, getRandomTournamentFact, getRandomFunFact, getRandomDefault, getResponseForMatch } from '../data/aiResponses.js';
import { getCartoonContent, getCartoonById, getCartoonByCategory, getCategories, getFeaturedCartoon, getRecommendedCartoons } from '../data/cartoon.js';

const DATA_SOURCE = 'mock';

function handleError(error, fallbackFn, ...args) {
  console.warn('API 调用失败，使用 Mock 数据:', error);
  return fallbackFn(...args);
}

async function asyncWrapper(syncFn, ...args) {
  return new Promise((resolve) => {
    setTimeout(() => {
      try {
        resolve(syncFn(...args));
      } catch (error) {
        console.error('数据获取失败:', error);
        resolve(null);
      }
    }, 100 + Math.random() * 300);
  });
}

export const matchData = {
  getAll: () => asyncWrapper(getMatches),
  getByStage: (stage) => asyncWrapper(getMatchesByStage, stage),
  getById: (id) => asyncWrapper(getMatchById, id),
  getHot: () => asyncWrapper(getHotMatches),
  getUpcoming: (days) => asyncWrapper(getUpcomingMatches, days),
  getToday: () => asyncWrapper(getTodayMatches),
  getNext: () => asyncWrapper(getNextMatch),
};

export const teamData = {
  getAll: () => asyncWrapper(getTeams),
  getById: (id) => asyncWrapper(getTeamById, id),
  getByName: (name) => asyncWrapper(getTeamByName, name),
  getByConfederation: (conf) => asyncWrapper(getTeamsByConfederation, conf),
  getTopRanked: (count) => asyncWrapper(getTopRankedTeams, count),
  search: (query) => asyncWrapper(searchTeams, query),
};

export const playerData = {
  getAll: () => asyncWrapper(getPlayers),
  getById: (id) => asyncWrapper(getPlayerById, id),
  getByTeam: (teamId) => asyncWrapper(getPlayersByTeam, teamId),
  getStars: () => asyncWrapper(getStarPlayers),
  getByPosition: (pos) => asyncWrapper(getPlayersByPosition, pos),
  getTopScorers: (count) => asyncWrapper(getTopGoalscorers, count),
  getByTeamName: (name) => asyncWrapper(getPlayersByTeamName, name),
  search: (query) => asyncWrapper(searchPlayers, query),
};

export const highlightData = {
  getAll: () => asyncWrapper(getHighlights),
  getById: (id) => asyncWrapper(getHighlightById, id),
  getByType: (type) => asyncWrapper(getHighlightsByType, type),
  getTop: (count) => asyncWrapper(getTopHighlights, count),
  getStats: () => asyncWrapper(getHighlightStats),
};

export const oddsData = {
  getWorldCupWinner: () => asyncWrapper(getWorldCupWinnerOdds),
  getTopScorer: () => asyncWrapper(getTopScorerOdds),
  getMatchOdds: () => asyncWrapper(getMatchOdds),
  getGroupWinner: () => asyncWrapper(getGroupWinnerOdds),
  getHistory: (match) => asyncWrapper(getOddsHistory, match),
  getComparison: (match) => asyncWrapper(getBookmakerComparison, match),
  getBest: (match, type) => asyncWrapper(getBestOdds, match, type),
};

export const aiChat = {
  getSmartResponse: (msg) => asyncWrapper(getSmartResponse, msg),
  getGreeting: () => asyncWrapper(getRandomGreeting),
  getPrediction: () => asyncWrapper(getRandomPrediction),
  getTrivia: () => asyncWrapper(getRandomTrivia),
  getRule: () => asyncWrapper(getRandomRule),
  getTeamInfo: (name) => asyncWrapper(getTeamInfo, name),
  getPlayerInsight: (name) => asyncWrapper(getPlayerInsight, name),
  getTournamentFact: () => asyncWrapper(getRandomTournamentFact),
  getFunFact: () => asyncWrapper(getRandomFunFact),
  getDefault: () => asyncWrapper(getRandomDefault),
  getMatchPreview: (home, away) => asyncWrapper(getResponseForMatch, home, away),
};

export const cartoonData = {
  getAll: () => asyncWrapper(getCartoonContent),
  getById: (id) => asyncWrapper(getCartoonById, id),
  getByCategory: (cat) => asyncWrapper(getCartoonByCategory, cat),
  getCategories: () => asyncWrapper(getCategories),
  getFeatured: () => asyncWrapper(getFeaturedCartoon),
  getRecommended: (count) => asyncWrapper(getRecommendedCartoons, count),
};

export function getDataSource() {
  return DATA_SOURCE;
}

export default {
  matchData,
  teamData,
  playerData,
  highlightData,
  oddsData,
  aiChat,
  cartoonData,
  getDataSource,
};
