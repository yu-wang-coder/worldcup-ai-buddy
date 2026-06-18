/**
 * 数据验证工具
 */

export function isValidMatch(match) {
  if (!match || typeof match !== 'object') return false;
  return match.id && match.homeTeam && match.awayTeam;
}

export function isValidTeam(team) {
  if (!team || typeof team !== 'object') return false;
  return team.id && team.name;
}

export function isValidPlayer(player) {
  if (!player || typeof player !== 'object') return false;
  return player.id && player.name;
}

export function isNonEmptyString(str) {
  return typeof str === 'string' && str.trim().length > 0;
}

export function isPositiveNumber(num) {
  return typeof num === 'number' && !isNaN(num) && num > 0;
}

export function isValidDate(dateStr) {
  if (!dateStr) return false;
  const date = new Date(dateStr);
  return !isNaN(date.getTime());
}

export function sanitizeHtml(text) {
  if (!text || typeof text !== 'string') return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
