/**
 * 精彩瞬间 Mock 数据
 */

const highlights = [
  {
    id: 'hl_001',
    title: '2022 世界杯决赛：梅西圆梦卡塔尔',
    description:
      '阿根廷在点球大战中战胜法国，夺得 2022 年世界杯冠军。梅西捧起了他梦寐以求的大力神杯。',
    match: '阿根廷 vs 法国',
    date: '2022-12-18',
    type: '决赛',
    imageTag: '🏆',
    keyMoments: [
      '梅西第 23 分钟点球破门',
      '迪马利亚第 36 分钟扩大比分',
      '姆巴佩 97 秒内连进两球追平（80, 81 分钟）',
      '梅西第 108 分钟再次领先',
      '姆巴佩第 118 分钟完成帽子戏法',
      '点球大战：阿根廷 4-2 获胜',
    ],
    stats: {
      homeScore: 3,
      awayScore: 3,
      homeGoalscorers: ['梅西 (23, 108)', '迪马利亚 (36)'],
      awayGoalscorers: ['姆巴佩 (80, 81, 118)'],
      possession: '45%',
      shotsOnTarget: '6',
    },
  },
  {
    id: 'hl_002',
    title: '2018 世界杯：姆巴佩震撼世界',
    description:
      '19 岁的姆巴佩在对阵阿根廷的 16 强战中梅开二度，成为继贝利后第二位在世界杯淘汰赛中进球的青少年球员。',
    match: '法国 vs 阿根廷',
    date: '2018-06-30',
    type: '16强',
    imageTag: '⚡',
    keyMoments: [
      '姆巴佩造成点球，格列兹曼罚进（13 分钟）',
      '迪马利亚世界波扳平（41 分钟）',
      '梅尔卡多进球反超（48 分钟）',
      '帕瓦尔世界波（57 分钟）',
      '姆巴佩梅开二度（64, 68 分钟）',
      '阿圭罗补时进球（93 分钟）',
    ],
    stats: {
      homeScore: 4,
      awayScore: 3,
      homeGoalscorers: ['格列兹曼 (13)', '帕瓦尔 (57)', '姆巴佩 (64, 68)'],
      awayGoalscorers: ['迪马利亚 (41)', '梅尔卡多 (48)', '阿圭罗 (93)'],
      possession: '41%',
      shotsOnTarget: '7',
    },
  },
  {
    id: 'hl_003',
    title: '2014 世界杯：克洛泽破纪录',
    description:
      '德国前锋米洛斯拉夫·克洛泽在对阵巴西的半决赛中打进个人世界杯第 16 球，超越罗纳尔多成为世界杯历史最佳射手。',
    match: '德国 vs 巴西',
    date: '2014-07-08',
    type: '半决赛',
    imageTag: '⚽',
    keyMoments: [
      '穆勒第 11 分钟首开纪录',
      '克洛泽第 23 分钟破纪录进球',
      '克罗斯 2 分钟内连进两球（24, 26 分钟）',
      '赫迪拉第 29 分钟进球',
      '上半场德国 5-0 领先',
      '沙奇里第 90 分钟进球（最终比分 7-1）',
    ],
    stats: {
      homeScore: 7,
      awayScore: 1,
      homeGoalscorers: [
        '穆勒 (11)',
        '克洛泽 (23)',
        '克罗斯 (24, 26)',
        '赫迪拉 (29)',
        '沙奇里 (90)',
      ],
      awayGoalscorers: ['奥斯卡 (90)'],
      possession: '53%',
      shotsOnTarget: '10',
    },
  },
  {
    id: 'hl_004',
    title: '2002 世界杯：巴西第五次夺冠',
    description:
      '罗纳尔多在决赛中梅开二度，帮助巴西 2-0 击败德国，第五次夺得世界杯冠军。',
    match: '德国 vs 巴西',
    date: '2002-06-30',
    type: '决赛',
    imageTag: '⭐',
    keyMoments: [
      '卡恩上半场多次精彩扑救',
      '罗纳尔多第 67 分钟补射破门',
      '罗纳尔多第 79 分钟再进一球锁定胜局',
      '卡福举起世界杯冠军奖杯',
    ],
    stats: {
      homeScore: 0,
      awayScore: 2,
      homeGoalscorers: [],
      awayGoalscorers: ['罗纳尔多 (67, 79)'],
      possession: '60%',
      shotsOnTarget: '12',
    },
  },
  {
    id: 'hl_005',
    title: '1986 世界杯：马拉多纳的"上帝之手"',
    description:
      '阿根廷在 1/4 决赛中 2-1 击败英格兰。马拉多纳在同一场比赛中打进了世界杯历史上最著名的两个进球。',
    match: '阿根廷 vs 英格兰',
    date: '1986-06-22',
    type: '1/4决赛',
    imageTag: '👑',
    keyMoments: [
      '第 51 分钟：马拉多纳用手将球打进（被称为"上帝之手"）',
      '第 55 分钟：马拉多纳从中场开始盘带，连过五人破门（被称为"世纪进球"）',
      '莱因克尔第 81 分钟扳回一球',
      '阿根廷 2-1 晋级四强',
    ],
    stats: {
      homeScore: 2,
      awayScore: 1,
      homeGoalscorers: ['马拉多纳 (51, 55)'],
      awayGoalscorers: ['莱因克尔 (81)'],
      possession: '未知',
      shotsOnTarget: '未知',
    },
  },
  {
    id: 'hl_006',
    title: '1998 世界杯：欧文的闪电进球',
    description:
      '18 岁的迈克尔·欧文在对阵阿根廷的比赛中打进了一个令人难忘的个人进球，展现出惊人的速度和技术。',
    match: '阿根廷 vs 英格兰',
    date: '1998-06-30',
    type: '16强',
    imageTag: '🌟',
    keyMoments: [
      '巴蒂第 5 分钟点球破门',
      '希勒第 10 分钟点球扳平',
      '欧文第 16 分钟超级个人秀进球',
      '萨内蒂第 45 分钟任意球配合扳平',
      '贝克汉姆第 47 分钟被红牌罚下',
      '点球大战：阿根廷 4-3 获胜',
    ],
    stats: {
      homeScore: 2,
      awayScore: 2,
      homeGoalscorers: ['巴蒂 (5)', '萨内蒂 (45)'],
      awayGoalscorers: ['希勒 (10)', '欧文 (16)'],
      possession: '未知',
      shotsOnTarget: '未知',
    },
  },
  {
    id: 'hl_007',
    title: '2022 世界杯：摩洛哥创造历史',
    description:
      '摩洛哥成为第一支进入世界杯半决赛的非洲球队。他们在淘汰赛中先后淘汰了西班牙和葡萄牙。',
    match: '摩洛哥 vs 葡萄牙',
    date: '2022-12-10',
    type: '1/4决赛',
    imageTag: '🦁',
    keyMoments: [
      '摩洛哥全场坚守防线',
      '恩内斯里第 42 分钟头球破门',
      '布努多次精彩扑救',
      '葡萄牙压上进攻但无法破门',
      '摩洛哥 1-0 获胜晋级四强',
    ],
    stats: {
      homeScore: 1,
      awayScore: 0,
      homeGoalscorers: ['恩内斯里 (42)'],
      awayGoalscorers: [],
      possession: '27%',
      shotsOnTarget: '2',
    },
  },
  {
    id: 'hl_008',
    title: '2006 世界杯：齐达内的头槌告别',
    description:
      '法国在决赛中点球大战不敌意大利。齐达内在加时赛中因头撞马特拉齐被红牌罚下，留下世界杯最戏剧性的一幕。',
    match: '意大利 vs 法国',
    date: '2006-07-09',
    type: '决赛',
    imageTag: '🎯',
    keyMoments: [
      '齐达内第 7 分钟点球破门（勺子点球）',
      '马特拉齐第 19 分钟头球扳平',
      '齐达内第 110 分钟因头撞马特拉齐被红牌罚下',
      '120 分钟比分 1-1',
      '点球大战：意大利 5-3 获胜',
      '意大利第四次夺得世界杯',
    ],
    stats: {
      homeScore: 1,
      awayScore: 1,
      homeGoalscorers: ['马特拉齐 (19)'],
      awayGoalscorers: ['齐达内 (7)'],
      possession: '55%',
      shotsOnTarget: '8',
    },
  },
];

export function getHighlights() {
  return highlights;
}

export function getHighlightById(id) {
  return highlights.find((h) => h.id === id);
}

export function getHighlightsByType(type) {
  return highlights.filter((h) => h.type === type);
}

export function getTopHighlights(count = 5) {
  return highlights.slice(0, count);
}

export function getHighlightStats() {
  const totalHighlights = highlights.length;
  const totalGoals = highlights.reduce(
    (sum, h) => sum + h.stats.homeScore + h.stats.awayScore,
    0
  );
  const finals = highlights.filter((h) => h.type === '决赛').length;
  return {
    totalHighlights,
    totalGoals,
    finals,
  };
}
