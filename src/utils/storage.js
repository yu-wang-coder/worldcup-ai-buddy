/**
 * 本地存储工具
 */

const STORAGE_PREFIX = 'worldcup_ai_buddy_';

export function setItem(key, value) {
  try {
    const fullKey = STORAGE_PREFIX + key;
    const serialized = typeof value === 'object' ? JSON.stringify(value) : value;
    localStorage.setItem(fullKey, serialized);
    return true;
  } catch (e) {
    console.warn('Storage set failed:', e);
    return false;
  }
}

export function getItem(key) {
  try {
    const fullKey = STORAGE_PREFIX + key;
    const value = localStorage.getItem(fullKey);
    if (value === null) return null;
    try {
      return JSON.parse(value);
    } catch (parseError) {
      return value;
    }
  } catch (e) {
    return null;
  }
}

export function removeItem(key) {
  try {
    const fullKey = STORAGE_PREFIX + key;
    localStorage.removeItem(fullKey);
    return true;
  } catch (e) {
    return false;
  }
}

export function clearAll() {
  try {
    Object.keys(localStorage)
      .filter(key => key.startsWith(STORAGE_PREFIX))
      .forEach(key => localStorage.removeItem(key));
    return true;
  } catch (e) {
    return false;
  }
}

export function getItemRaw(key) {
  try {
    const fullKey = STORAGE_PREFIX + key;
    return localStorage.getItem(fullKey);
  } catch (e) {
    return null;
  }
}

export function setItemRaw(key, value) {
  try {
    const fullKey = STORAGE_PREFIX + key;
    localStorage.setItem(fullKey, value);
    return true;
  } catch (e) {
    return false;
  }
}
