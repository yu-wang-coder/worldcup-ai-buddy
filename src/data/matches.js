/**
 * 比赛 Mock 数据 - 2026 世界杯赛程
 */

const baseDate = new Date();
const formatDate = (daysOffset) => {
  const d = new Date(baseDate);
  d.setDate(d.getDate() + daysOffset);
  return d.toISOString();
};

const matches = [
  {
    id: 'match_001',
    homeTeam: '墨西哥',
    awayTeam: '加拿大',
    homeScore: null,
    awayScore: null,
    stage: 'group_a',
    venue: '阿兹特克体育场',
    city: '墨西哥城',
    dateTime: formatDate(1),
    status: 'scheduled',
    isHot: true,
    attendance: null,
    weather: '晴 24°C',
    referee: '法昆多·特略',
    odds: {
      homeWin: 2.1,
      draw: 3.2,
      awayWin: 3.3,
    },
    matchPreview: '东道主墨西哥队在揭幕战中迎来加拿大挑战，这将是一场充满激情的对决。',
  },
  {
    id: 'match_002',
    homeTeam: '美国',
    awayTeam: '韩国',
    homeScore: null,
    awayScore: null,
    stage: 'group_b',
    venue: '大都会人寿体育场',
    city: '纽约',
    dateTime: formatDate(1),
    status: 'scheduled',
    isHot: true,
    attendance: null,
    weather: '多云 22°C',
    referee: '伊斯特万·科瓦奇',
    odds: {
      homeWin: 2.5,
      draw: 3.1,
      awayWin: 2.7,
    },
    matchPreview: '美国队坐拥主场优势，而韩国队则希望通过亚洲力量取得突破。',
  },
  {
    id: 'match_003',
    homeTeam: '阿根廷',
    awayTeam: '法国',
    homeScore: null,
    awayScore: null,
    stage: 'group_c',
    venue: '迈阿密国际体育场',
    city: '迈阿密',
    dateTime: formatDate(2),
    status: 'scheduled',
    isHot: true,
    attendance: null,
    weather: '晴 28°C',
    referee: '丹尼·马克列',
    odds: {
      homeWin: 1.9,
      draw: 3.5,
      awayWin: 3.8,
    },
    matchPreview: '上届世界杯决赛重演！梅西率领的阿根廷队再次面对姆巴佩的法国队。',
  },
  {
    id: 'match_004',
    homeTeam: '巴西',
    awayTeam: '葡萄牙',
    homeScore: null,
    awayScore: null,
    stage: 'group_d',
    venue: '梅赛德斯奔驰体育场',
    city: '亚特兰大',
    dateTime: formatDate(2),
    status: 'scheduled',
    isHot: true,
    attendance: null,
    weather: '多云 26°C',
    referee: '何塞·马利亚·桑切斯',
    odds: {
      homeWin: 1.7,
      draw: 3.8,
      awayWin: 4.5,
    },
    matchPreview: 'C 罗率领葡萄牙队挑战 5 星巴西，双方都拥有顶级球星。',
  },
  {
    id: 'match_005',
    homeTeam: '德国',
    awayTeam: '西班牙',
    homeScore: null,
    awayScore: null,
    stage: 'group_e',
    venue: 'NRG 体育场',
    city: '休斯顿',
    dateTime: formatDate(3),
    status: 'scheduled',
    isHot: true,
    attendance: null,
    weather: '晴 30°C',
    referee: '安东尼奥·马特乌',
    odds: {
      homeWin: 2.3,
      draw: 3.2,
      awayWin: 2.9,
    },
    matchPreview: '两大欧洲足球强国的对话，这将是小组赛阶段最引人注目的比赛之一。',
  },
  {
    id: 'match_006',
    homeTeam: '英格兰',
    awayTeam: '日本',
    homeScore: null,
    awayScore: null,
    stage: 'group_f',
    venue: '林肯金融体育场',
    city: '费城',
    dateTime: formatDate(3),
    status: 'scheduled',
    isHot: false,
    attendance: null,
    weather: '多云 25°C',
    referee: '安德雷亚斯·埃克特贝里',
    odds: {
      homeWin: 1.6,
      draw: 3.8,
      awayWin: 5.2,
    },
    matchPreview: '日本队作为亚洲足球的代表，将挑战强大的英格兰队。',
  },
  {
    id: 'match_007',
    homeTeam: '荷兰',
    awayTeam: '克罗地亚',
    homeScore: null,
    awayScore: null,
    stage: 'group_g',
    venue: 'Lumen Field',
    city: '西雅图',
    dateTime: formatDate(4),
    status: 'scheduled',
    isHot: false,
    attendance: null,
    weather: '晴 18°C',
    referee: '阿图尔·迪亚斯',
    odds: {
      homeWin: 2.0,
      draw: 3.2,
      awayWin: 3.5,
    },
    matchPreview: '荷兰队的全攻全守足球对阵克罗地亚队的顽强防守，风格的对抗。',
  },
  {
    id: 'match_008',
    homeTeam: '比利时',
    awayTeam: '摩洛哥',
    homeScore: null,
    awayScore: null,
    stage: 'group_h',
    venue: '雷蒙德詹姆斯体育场',
    city: '坦帕',
    dateTime: formatDate(4),
    status: 'scheduled',
    isHot: false,
    attendance: null,
    weather: '晴 27°C',
    referee: '弗朗切斯科·富尔诺',
    odds: {
      homeWin: 2.2,
      draw: 3.1,
      awayWin: 3.2,
    },
    matchPreview: '非洲劲旅摩洛哥队希望复制上届世界杯的黑马表现，挑战欧洲红魔比利时。',
  },
  {
    id: 'match_009',
    homeTeam: '塞内加尔',
    awayTeam: '加纳',
    homeScore: null,
    awayScore: null,
    stage: 'group_a',
    venue: '阿兹特克体育场',
    city: '墨西哥城',
    dateTime: formatDate(5),
    status: 'scheduled',
    isHot: false,
    attendance: null,
    weather: '多云 25°C',
    referee: '塞萨尔·拉莫斯',
    odds: {
      homeWin: 2.3,
      draw: 3.0,
      awayWin: 3.0,
    },
    matchPreview: '非洲德比！塞内加尔和加纳将为非洲荣誉而战。',
  },
  {
    id: 'match_010',
    homeTeam: '瑞士',
    awayTeam: '丹麦',
    homeScore: null,
    awayScore: null,
    stage: 'group_b',
    venue: '吉列体育场',
    city: '波士顿',
    dateTime: formatDate(5),
    status: 'scheduled',
    isHot: false,
    attendance: null,
    weather: '晴 20°C',
    referee: '威尔顿·桑帕约',
    odds: {
      homeWin: 2.6,
      draw: 3.1,
      awayWin: 2.5,
    },
    matchPreview: '两支欧洲中等强队的较量，每一分都至关重要。',
  },
  {
    id: 'match_011',
    homeTeam: '乌拉圭',
    awayTeam: '沙特阿拉伯',
    homeScore: null,
    awayScore: null,
    stage: 'group_c',
    venue: '迈阿密国际体育场',
    city: '迈阿密',
    dateTime: formatDate(6),
    status: 'scheduled',
    isHot: false,
    attendance: null,
    weather: '晴 29°C',
    referee: '盖格',
    odds: {
      homeWin: 1.8,
      draw: 3.4,
      awayWin: 4.3,
    },
    matchPreview: '南美劲旅乌拉圭迎战亚洲球队沙特阿拉伯，沙特希望再次爆冷。',
  },
  {
    id: 'match_012',
    homeTeam: '厄瓜多尔',
    awayTeam: '澳大利亚',
    homeScore: null,
    awayScore: null,
    stage: 'group_d',
    venue: '大都会人寿体育场',
    city: '纽约',
    dateTime: formatDate(6),
    status: 'scheduled',
    isHot: false,
    attendance: null,
    weather: '多云 23°C',
    referee: '赫苏斯·希尔·曼萨诺',
    odds: {
      homeWin: 2.4,
      draw: 3.1,
      awayWin: 2.8,
    },
    matchPreview: '南美与大洋洲的对决，双方实力相近，都希望拿到积分。',
  },
  {
    id: 'match_013',
    homeTeam: '墨西哥',
    awayTeam: '韩国',
    homeScore: null,
    awayScore: null,
    stage: 'group_a',
    venue: '阿兹特克体育场',
    city: '墨西哥城',
    dateTime: formatDate(7),
    status: 'scheduled',
    isHot: true,
    attendance: null,
    weather: '晴 26°C',
    referee: '米歇尔·奥利弗',
    odds: {
      homeWin: 2.0,
      draw: 3.3,
      awayWin: 3.5,
    },
    matchPreview: '东道主墨西哥迎来次轮比赛，韩国队的快速反击将是主要威胁。',
  },
  {
    id: 'match_014',
    homeTeam: '美国',
    awayTeam: '加纳',
    homeScore: null,
    awayScore: null,
    stage: 'group_b',
    venue: '大都会人寿体育场',
    city: '纽约',
    dateTime: formatDate(8),
    status: 'scheduled',
    isHot: false,
    attendance: null,
    weather: '多云 24°C',
    referee: '丹尼尔·西伯特',
    odds: {
      homeWin: 2.1,
      draw: 3.3,
      awayWin: 3.2,
    },
    matchPreview: '美国队在主场对阵非洲代表加纳，都期望拿下胜利。',
  },
  {
    id: 'match_015',
    homeTeam: '阿根廷',
    awayTeam: '葡萄牙',
    homeScore: null,
    awayScore: null,
    stage: 'round_16',
    venue: '迈阿密国际体育场',
    city: '迈阿密',
    dateTime: formatDate(14),
    status: 'scheduled',
    isHot: true,
    attendance: null,
    weather: '晴 29°C',
    referee: '马克·盖格',
    odds: {
      homeWin: 1.85,
      draw: 3.4,
      awayWin: 4.0,
    },
    matchPreview: '梅罗对决？如果双方都能晋级，这将是足球史上最伟大射手的正面碰撞！',
  },
  {
    id: 'match_016',
    homeTeam: '巴西',
    awayTeam: '西班牙',
    homeScore: null,
    awayScore: null,
    stage: 'round_16',
    venue: '梅赛德斯奔驰体育场',
    city: '亚特兰大',
    dateTime: formatDate(15),
    status: 'scheduled',
    isHot: true,
    attendance: null,
    weather: '多云 27°C',
    referee: '安东尼奥·马特乌',
    odds: {
      homeWin: 2.0,
      draw: 3.2,
      awayWin: 3.5,
    },
    matchPreview: '南美王者对阵欧洲新科冠军，这将是一场顶级对决。',
  },
];

export function getMatches() {
  return matches;
}

export function getMatchesByStage(stage) {
  return matches.filter((m) => m.stage === stage);
}

export function getMatchById(id) {
  return matches.find((m) => m.id === id);
}

export function getHotMatches() {
  return matches.filter((m) => m.isHot);
}

export function getUpcomingMatches(days = 7) {
  const now = new Date();
  const limit = new Date();
  limit.setDate(limit.getDate() + days);
  return matches.filter((m) => {
    const matchDate = new Date(m.dateTime);
    return matchDate >= now && matchDate <= limit;
  });
}

export function getTodayMatches() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  return matches.filter((m) => {
    const matchDate = new Date(m.dateTime);
    return matchDate >= today && matchDate < tomorrow;
  });
}

export function getNextMatch() {
  const futureMatches = matches
    .filter((m) => new Date(m.dateTime) > new Date())
    .sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
  return futureMatches.length > 0 ? futureMatches[0] : null;
}
