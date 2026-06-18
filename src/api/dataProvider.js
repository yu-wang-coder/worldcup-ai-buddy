/**
 * 统一的数据提供者
 * - 支持 Mock 数据（默认，用于世界杯数据）
 * - 支持真实 API（football-data.org，用于五大联赛）
 *
 * 使用真实 API:
 * 1. 在 footballApi.js 中设置 API_KEY
 * 2. 将 USE_REAL_API 改为 true
 */

import * as mockMatches from '../data/matches.js';
import * as mockTeams from '../data/teams.js';
import * as mockPlayers from '../data/players.js';
import * as mockHighlights from '../data/highlights.js';
import * as mockOdds from '../data/odds.js';
import * as mockAI from '../data/aiResponses.js';
import * as mockCartoon from '../data/cartoon.js';

// 切换配置
const USE_REAL_API = false; // 设为 true 启用真实 API
const API_COMPETITION = 'PL'; // PL=英超, BL1=德甲, Liga=西甲, SA=意甲, FL1=法甲

// 导入真实 API
import * as realApi from './footballApi.js';

// 真实 API 适配层 - 转换数据格式以匹配 Mock 数据接口
const apiAdapter = {
  async getMatches() {
    const data = await realApi.getMatches(API_COMPETITION);
    return data;
  },

  async getHotMatches() {
    const matches = await this.getMatches();
    return matches.filter((m) => m.isHot);
  },

  async getUpcomingMatches(days = 7) {
    const matches = await this.getMatches();
    const now = new Date();
    const limit = new Date();
    limit.setDate(limit.getDate() + days);

    return matches.filter((m) => {
      const matchDate = new Date(m.dateTime);
      return matchDate >= now && matchDate <= limit;
    });
  },

  async getMatchById(id) {
    return await realApi.getMatchById(id);
  },

  async getTeams() {
    return await realApi.getTeams(API_COMPETITION);
  },

  async getTeamById(id) {
    return await realApi.getTeamById(id);
  },

  async getStandings() {
    return await realApi.getStandings(API_COMPETITION);
  },

  async getTopScorers() {
    return await realApi.getTopScorers(API_COMPETITION);
  },

  async getAvailableCompetitions() {
    return await realApi.getAvailableCompetitions();
  },
};

// Mock 数据接口
const mockAdapter = {
  getMatches: () => Promise.resolve(mockMatches.getMatches()),
  getHotMatches: () => Promise.resolve(mockMatches.getHotMatches()),
  getUpcomingMatches: (days) => Promise.resolve(mockMatches.getUpcomingMatches(days)),
  getTodayMatches: () => Promise.resolve(mockMatches.getTodayMatches()),
  getNextMatch: () => Promise.resolve(mockMatches.getNextMatch()),
  getMatchById: (id) => Promise.resolve(mockMatches.getMatchById(id)),
  getTeams: () => Promise.resolve(mockTeams.getTeams()),
  getTeamById: (id) => Promise.resolve(mockTeams.getTeamById(id)),
  getTeamByName: (name) => Promise.resolve(mockTeams.getTeamByName(name)),
  getTopRankedTeams: (count) => Promise.resolve(mockTeams.getTopRankedTeams(count)),
  getPlayers: () => Promise.resolve(mockPlayers.getPlayers()),
  getPlayersByTeam: (teamId) => Promise.resolve(mockPlayers.getPlayersByTeam(teamId)),
  getStarPlayers: () => Promise.resolve(mockPlayers.getStarPlayers()),
  getTopGoalscorers: (count) => Promise.resolve(mockPlayers.getTopGoalscorers(count)),
  getHighlights: () => Promise.resolve(mockHighlights.getHighlights()),
  getTopHighlights: (count) => Promise.resolve(mockHighlights.getTopHighlights(count)),
  getWorldCupWinnerOdds: () => Promise.resolve(mockOdds.getWorldCupWinnerOdds()),
  getMatchOdds: () => Promise.resolve(mockOdds.getMatchOdds()),
  getSmartResponse: (msg) => Promise.resolve(mockAI.getSmartResponse(msg)),
  getGreeting: () => Promise.resolve(mockAI.getRandomGreeting()),
  getCartoonContent: () => Promise.resolve(mockCartoon.getCartoonContent()),
};

// 选择数据源
const dataSource = USE_REAL_API ? apiAdapter : mockAdapter;

// 比赛数据
export const matchData = {
  getAll: () => dataSource.getMatches(),
  getByStage: (stage) => dataSource.getMatches().then((matches) => matches.filter((m) => m.stage === stage)),
  getById: (id) => dataSource.getMatchById(id),
  getHot: () => dataSource.getHotMatches(),
  getUpcoming: (days) => dataSource.getUpcomingMatches(days),
  getToday: () => dataSource.getTodayMatches ? dataSource.getTodayMatches() : dataSource.getMatches().then((m) => m),
  getNext: () => dataSource.getNextMatch ? dataSource.getNextMatch() : dataSource.getMatches().then((m) => m[0]),
};

// 球队数据
export const teamData = {
  getAll: () => dataSource.getTeams(),
  getById: (id) => dataSource.getTeamById(id),
  getByName: (name) => dataSource.getTeamByName ? dataSource.getTeamByName(name) : dataSource.getTeams().then((t) => t.find((team) => team.name === name)),
  getTopRanked: (count) => dataSource.getTopRankedTeams ? dataSource.getTopRankedTeams(count) : dataSource.getTeams().then((t) => t.slice(0, count)),
};

// 球员数据
export const playerData = {
  getAll: () => dataSource.getPlayers ? dataSource.getPlayers() : Promise.resolve([]),
  getByTeam: (teamId) => dataSource.getPlayersByTeam ? dataSource.getPlayersByTeam(teamId) : Promise.resolve([]),
  getStars: () => dataSource.getStarPlayers ? dataSource.getStarPlayers() : Promise.resolve([]),
  getTopScorers: (count) => dataSource.getTopGoalscorers ? dataSource.getTopGoalscorers(count) : dataSource.getTopScorers ? dataSource.getTopScorers() : Promise.resolve([]),
};

// 积分榜数据 (真实 API 特有)
export const standingsData = {
  getStandings: () => dataSource.getStandings ? dataSource.getStandings() : Promise.resolve([]),
};

// 精彩瞬间（仅 Mock）
export const highlightData = {
  getAll: () => dataSource.getHighlights ? dataSource.getHighlights() : Promise.resolve([]),
  getById: (id) => dataSource.getHighlights().then((h) => h.find((item) => item.id === id)),
  getByType: (type) => dataSource.getHighlights().then((h) => h.filter((item) => item.type === type)),
  getTop: (count) => dataSource.getTopHighlights ? dataSource.getTopHighlights(count) : dataSource.getHighlights().then((h) => h.slice(0, count)),
};

// 赔率数据（仅 Mock）
export const oddsData = {
  getWorldCupWinner: () => dataSource.getWorldCupWinnerOdds ? dataSource.getWorldCupWinnerOdds() : Promise.resolve([]),
  getMatchOdds: () => dataSource.getMatchOdds ? dataSource.getMatchOdds() : Promise.resolve([]),
};

// AI 聊天（仅 Mock）
export const aiChat = {
  getSmartResponse: (msg) => dataSource.getSmartResponse ? dataSource.getSmartResponse(msg) : Promise.resolve('抱歉，当前无法连接到 AI 服务。'),
  getGreeting: () => dataSource.getGreeting ? dataSource.getGreeting() : Promise.resolve('你好！我是 AI 看球搭子，有什么可以帮你的吗？'),
};

// 足球科普（仅 Mock）
export const cartoonData = {
  getAll: () => dataSource.getCartoonContent ? dataSource.getCartoonContent() : Promise.resolve([]),
  getById: (id) => dataSource.getCartoonContent().then((c) => c.find((item) => item.id === id)),
  getCategories: () => Promise.resolve(['规则', '位置', '战术', '历史']),
};

// 导出数据源信息
export function getDataSource() {
  return USE_REAL_API ? 'api' : 'mock';
}

export function getCurrentCompetition() {
  return API_COMPETITION;
}

export default {
  matchData,
  teamData,
  playerData,
  standingsData,
  highlightData,
  oddsData,
  aiChat,
  cartoonData,
  getDataSource,
  getCurrentCompetition,
};
