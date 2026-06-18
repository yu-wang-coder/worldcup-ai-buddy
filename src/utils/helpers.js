/**
 * 通用辅助函数
 */

export function debounce(fn, delay = 300) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

export function throttle(fn, delay = 300) {
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last >= delay) {
      last = now;
      fn.apply(this, args);
    }
  };
}

export function randomId() {
  return Math.random().toString(36).substring(2, 11) + Date.now().toString(36);
}

export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function pickRandom(array) {
  if (!Array.isArray(array) || array.length === 0) return null;
  return array[Math.floor(Math.random() * array.length)];
}

export function shuffleArray(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function chunkArray(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

export function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function truncateText(text, maxLength = 100) {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

export function formatTeamName(name) {
  if (!name) return '';
  const replacements = {
    'Argentina': '阿根廷',
    'France': '法国',
    'Brazil': '巴西',
    'England': '英格兰',
    'Spain': '西班牙',
    'Germany': '德国',
    'Netherlands': '荷兰',
    'Portugal': '葡萄牙',
    'Uruguay': '乌拉圭',
    'Belgium': '比利时',
    'Croatia': '克罗地亚',
    'Morocco': '摩洛哥',
    'Japan': '日本',
    'Korea Republic': '韩国',
    'Saudi Arabia': '沙特阿拉伯',
    'Australia': '澳大利亚',
    'Denmark': '丹麦',
    'Serbia': '塞尔维亚',
    'Switzerland': '瑞士',
    'USA': '美国',
    'Mexico': '墨西哥',
    'Poland': '波兰',
    'Senegal': '塞内加尔',
    'Ghana': '加纳',
    'Cameroon': '喀麦隆',
    'Tunisia': '突尼斯',
    'Iran': '伊朗',
    'Qatar': '卡塔尔',
    'Ecuador': '厄瓜多尔',
    'Canada': '加拿大',
    'Wales': '威尔士',
    'Costa Rica': '哥斯达黎加',
    'Italy': '意大利',
    'Norway': '挪威',
    'Sweden': '瑞典',
    'Republic of Ireland': '爱尔兰',
    'Scotland': '苏格兰',
    'Finland': '芬兰',
    'Ukraine': '乌克兰',
    'Turkiye': '土耳其',
    'Romania': '罗马尼亚',
    'Greece': '希腊',
    'Hungary': '匈牙利',
    'Czechia': '捷克',
    'Slovakia': '斯洛伐克',
    'Slovenia': '斯洛文尼亚',
    'Bosnia and Herzegovina': '波黑',
    'Austria': '奥地利',
    'Albania': '阿尔巴尼亚',
    'Georgia': '格鲁吉亚',
    'Luxembourg': '卢森堡',
    'Iceland': '冰岛',
    'Kazakhstan': '哈萨克斯坦',
    'Andorra': '安道尔',
    'Gibraltar': '直布罗陀',
    'San Marino': '圣马力诺',
    'Liechtenstein': '列支敦士登',
    'Malta': '马耳他',
    'Cyprus': '塞浦路斯',
    'Israel': '以色列',
    'Armenia': '亚美尼亚',
    'Azerbaijan': '阿塞拜疆',
    'North Macedonia': '北马其顿',
    'Montenegro': '黑山',
    'Algeria': '阿尔及利亚',
    'Egypt': '埃及',
    'Nigeria': '尼日利亚',
    'Togo': '多哥',
    'Ethiopia': '埃塞俄比亚',
    'Malawi': '马拉维',
    'Chile': '智利',
    'Peru': '秘鲁',
    'Colombia': '哥伦比亚',
    'Bolivia': '玻利维亚',
    'Venezuela': '委内瑞拉',
    'Paraguay': '巴拉圭',
    'New Zealand': '新西兰',
    'Papua New Guinea': '巴布亚新几内亚',
    'Tahiti': '塔希提',
    'New Caledonia': '新喀里多尼亚',
    'Solomon Islands': '所罗门群岛',
    'Vanuatu': '瓦努阿图',
    'Fiji': '斐济',
    'Samoa': '萨摩亚',
    'Tonga': '汤加',
    'American Samoa': '美属萨摩亚',
    'Cook Islands': '库克群岛',
    'Niue': '纽埃',
    'Tuvalu': '图瓦卢',
    'Kiribati': '基里巴斯',
    'Nauru': '瑙鲁',
    'Marshall Islands': '马绍尔群岛',
    'Palau': '帕劳',
    'Micronesia': '密克罗尼西亚',
    'Guam': '关岛',
    'Northern Mariana Islands': '北马里亚纳',
    'Puerto Rico': '波多黎各',
    'Dominican Republic': '多米尼加',
    'Cuba': '古巴',
    'Haiti': '海地',
    'Jamaica': '牙买加',
    'Trinidad and Tobago': '特立尼达和多巴哥',
    'Barbados': '巴巴多斯',
    'Guyana': '圭亚那',
    'Suriname': '苏里南',
    'French Guiana': '法属圭亚那',
    'Martinique': '马提尼克',
    'Guadeloupe': '瓜德罗普',
    'Honduras': '洪都拉斯',
    'Nicaragua': '尼加拉瓜',
    'Panama': '巴拿马',
    'Costa Rica': '哥斯达黎加',
    'El Salvador': '萨尔瓦多',
    'Guatemala': '危地马拉',
    'Belize': '伯利兹',
    'Haiti': '海地',
    'Dominican Republic': '多米尼加',
    'Canada': '加拿大',
    'USA': '美国',
    'Mexico': '墨西哥',
    'Brazil': '巴西',
    'Argentina': '阿根廷',
    'Uruguay': '乌拉圭',
    'Chile': '智利',
    'Paraguay': '巴拉圭',
    'Bolivia': '玻利维亚',
    'Venezuela': '委内瑞拉',
    'Colombia': '哥伦比亚',
    'Peru': '秘鲁',
    'Ecuador': '厄瓜多尔',
  };
  return replacements[name] || name;
}

export function getTeamLogo(name) {
  const flags = {
    '阿根廷': '🇦🇷',
    '法国': '🇫🇷',
    '巴西': '🇧🇷',
    '英格兰': '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    '西班牙': '🇪🇸',
    '德国': '🇩🇪',
    '荷兰': '🇳🇱',
    '葡萄牙': '🇵🇹',
    '乌拉圭': '🇺🇾',
    '比利时': '🇧🇪',
    '克罗地亚': '🇭🇷',
    '摩洛哥': '🇲🇦',
    '日本': '🇯🇵',
    '韩国': '🇰🇷',
    '沙特阿拉伯': '🇸🇦',
    '澳大利亚': '🇦🇺',
    '丹麦': '🇩🇰',
    '塞尔维亚': '🇷🇸',
    '瑞士': '🇨🇭',
    '美国': '🇺🇸',
    '墨西哥': '🇲🇽',
    '波兰': '🇵🇱',
    '塞内加尔': '🇸🇳',
    '加纳': '🇬🇭',
    '喀麦隆': '🇨🇲',
    '突尼斯': '🇹🇳',
    '伊朗': '🇮🇷',
    '卡塔尔': '🇶🇦',
    '厄瓜多尔': '🇪🇨',
    '加拿大': '🇨🇦',
    '威尔士': '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
    '哥斯达黎加': '🇨🇷',
    '意大利': '🇮🇹',
    '挪威': '🇳🇴',
    '瑞典': '🇸🇪',
    '爱尔兰': '🇮🇪',
    '苏格兰': '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    '芬兰': '🇫🇮',
    '乌克兰': '🇺🇦',
    '土耳其': '🇹🇷',
    '罗马尼亚': '🇷🇴',
    '希腊': '🇬🇷',
    '匈牙利': '🇭🇺',
    '捷克': '🇨🇿',
    '斯洛伐克': '🇸🇰',
    '斯洛文尼亚': '🇸🇮',
    '波黑': '🇧🇦',
    '奥地利': '🇦🇹',
    '阿尔巴尼亚': '🇦🇱',
    '格鲁吉亚': '🇬🇪',
    '卢森堡': '🇱🇺',
    '冰岛': '🇮🇸',
    '哈萨克斯坦': '🇰🇿',
  };
  return flags[name] || '⚽';
}

export function getMatchStatus(status) {
  const statusMap = {
    'scheduled': '未开始',
    'in_progress': '进行中',
    'live': '进行中',
    'finished': '已结束',
    'postponed': '已推迟',
    'suspended': '已暂停',
  };
  return statusMap[status] || status || '未知';
}

export function getMatchStage(stage) {
  const stageMap = {
    'group_a': 'A组',
    'group_b': 'B组',
    'group_c': 'C组',
    'group_d': 'D组',
    'group_e': 'E组',
    'group_f': 'F组',
    'group_g': 'G组',
    'group_h': 'H组',
    'round_16': '1/8决赛',
    'quarter_finals': '1/4决赛',
    'semi_finals': '半决赛',
    'play_off_for_third_place': '三四名决赛',
    'final': '决赛',
  };
  return stageMap[stage] || stage || '未知';
}
