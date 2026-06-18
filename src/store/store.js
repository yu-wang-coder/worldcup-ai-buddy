/**
 * 全局状态管理
 */

import { getItem, setItem } from '../utils/storage.js';

const STORE_KEYS = {
  USER_PREFERENCES: 'user_preferences',
  CHAT_HISTORY: 'chat_history',
  FAVORITE_MATCHES: 'favorite_matches',
  FAVORITE_TEAMS: 'favorite_teams',
};

const DEFAULT_STATE = {
  userPreferences: {
    theme: 'light',
    favoriteTeams: [],
    notifications: true,
    language: 'zh-CN',
  },
  chatHistory: [],
  favoriteMatches: [],
  favoriteTeams: [],
};

class Store {
  constructor() {
    this.state = this._loadState();
    this.listeners = new Set();
  }

  _loadState() {
    const preferences = getItem(STORE_KEYS.USER_PREFERENCES);
    const chatHistory = getItem(STORE_KEYS.CHAT_HISTORY);
    const favoriteMatches = getItem(STORE_KEYS.FAVORITE_MATCHES);
    const favoriteTeams = getItem(STORE_KEYS.FAVORITE_TEAMS);

    return {
      userPreferences: preferences || DEFAULT_STATE.userPreferences,
      chatHistory: chatHistory || DEFAULT_STATE.chatHistory,
      favoriteMatches: favoriteMatches || DEFAULT_STATE.favoriteMatches,
      favoriteTeams: favoriteTeams || DEFAULT_STATE.favoriteTeams,
    };
  }

  getState() {
    return { ...this.state };
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  _notify() {
    this.listeners.forEach((listener) => listener(this.state));
  }

  addChatMessage(message) {
    this.state.chatHistory.push({
      ...message,
      timestamp: new Date().toISOString(),
    });
    setItem(STORE_KEYS.CHAT_HISTORY, this.state.chatHistory);
    this._notify();
  }

  clearChatHistory() {
    this.state.chatHistory = [];
    setItem(STORE_KEYS.CHAT_HISTORY, []);
    this._notify();
  }

  toggleFavoriteMatch(matchId) {
    const index = this.state.favoriteMatches.indexOf(matchId);
    if (index > -1) {
      this.state.favoriteMatches.splice(index, 1);
    } else {
      this.state.favoriteMatches.push(matchId);
    }
    setItem(STORE_KEYS.FAVORITE_MATCHES, this.state.favoriteMatches);
    this._notify();
  }

  isFavoriteMatch(matchId) {
    return this.state.favoriteMatches.includes(matchId);
  }

  toggleFavoriteTeam(teamId) {
    const index = this.state.favoriteTeams.indexOf(teamId);
    if (index > -1) {
      this.state.favoriteTeams.splice(index, 1);
    } else {
      this.state.favoriteTeams.push(teamId);
    }
    setItem(STORE_KEYS.FAVORITE_TEAMS, this.state.favoriteTeams);
    this._notify();
  }

  isFavoriteTeam(teamId) {
    return this.state.favoriteTeams.includes(teamId);
  }

  updatePreferences(prefs) {
    this.state.userPreferences = {
      ...this.state.userPreferences,
      ...prefs,
    };
    setItem(STORE_KEYS.USER_PREFERENCES, this.state.userPreferences);
    this._notify();
  }
}

const store = new Store();
export default store;
export { STORE_KEYS };
