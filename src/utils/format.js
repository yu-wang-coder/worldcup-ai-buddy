/**
 * 格式化工具函数
 */

export function formatDate(dateStr) {
  try {
    const date = new Date(dateStr);
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
  } catch (e) {
    return dateStr;
  }
}

export function formatTime(timeStr) {
  if (!timeStr) return '';
  return timeStr.substring(0, 5);
}

export function formatDateTime(dateStr) {
  try {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  } catch (e) {
    return dateStr;
  }
}

export function formatRelativeTime(dateStr) {
  try {
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = date - now;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

    if (diffDays > 0) return `${diffDays}天后`;
    if (diffDays === 0) {
      if (diffHours > 0) return `${diffHours}小时后`;
      return '今天';
    }
    if (diffDays === -1) return '昨天';
    if (diffDays > -7) return `${Math.abs(diffDays)}天前`;
    return formatDate(dateStr);
  } catch (e) {
    return dateStr;
  }
}

export function formatNumber(num) {
  if (num === null || num === undefined) return '';
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function formatCurrency(num, currency = '¥') {
  return `${currency}${formatNumber(num)}`;
}

export function formatDuration(minutes) {
  if (!minutes) return '';
  if (minutes < 60) return `${minutes}分钟`;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins > 0 ? `${hours}小时${mins}分钟` : `${hours}小时`;
}

export function getWeekday(dateStr) {
  const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  try {
    const date = new Date(dateStr);
    return weekdays[date.getDay()];
  } catch (e) {
    return '';
  }
}
