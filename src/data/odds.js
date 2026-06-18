/**
 * 赔率分析 Mock 数据
 */

const oddsData = {
  world_cup_winner: [
    { team: '巴西', odds: 4.5, probability: 22.2, change: '+0.2' },
    { team: '法国', odds: 5.0, probability: 20.0, change: '-0.1' },
    { team: '阿根廷', odds: 6.0, probability: 16.7, change: '+0.5' },
    { team: '英格兰', odds: 7.5, probability: 13.3, change: '+0.3' },
    { team: '德国', odds: 9.0, probability: 11.1, change: '-0.2' },
    { team: '西班牙', odds: 10.0, probability: 10.0, change: '+0.1' },
    { team: '荷兰', odds: 15.0, probability: 6.7, change: '0.0' },
    { team: '葡萄牙', odds: 18.0, probability: 5.6, change: '-0.3' },
    { team: '比利时', odds: 22.0, probability: 4.5, change: '-0.1' },
    { team: '美国', odds: 45.0, probability: 2.2, change: '+2.0' },
    { team: '墨西哥', odds: 50.0, probability: 2.0, change: '+1.0' },
    { team: '加拿大', odds: 80.0, probability: 1.3, change: '+3.0' },
  ],

  top_scorer: [
    { player: '姆巴佩', team: '法国', odds: 5.0, probability: 20.0 },
    { player: '哈里·凯恩', team: '英格兰', odds: 7.0, probability: 14.3 },
    { player: '维尼修斯', team: '巴西', odds: 9.0, probability: 11.1 },
    { player: 'C 罗', team: '葡萄牙', odds: 12.0, probability: 8.3 },
    { player: '梅西', team: '阿根廷', odds: 15.0, probability: 6.7 },
    { player: '阿尔瓦雷斯', team: '阿根廷', odds: 18.0, probability: 5.6 },
    { player: '贝林厄姆', team: '英格兰', odds: 20.0, probability: 5.0 },
    { player: '穆西亚拉', team: '德国', odds: 22.0, probability: 4.5 },
  ],

  match_odds: [
    {
      id: 'match_001',
      match: '阿根廷 vs 法国',
      homeWin: 2.4,
      draw: 3.2,
      awayWin: 2.9,
      over2_5: 1.7,
      under2_5: 2.1,
      bttsYes: 1.5,
      bttsNo: 2.5,
      bookmaker: 'Bet365',
      lastUpdated: '2026-06-10 14:00',
    },
    {
      id: 'match_002',
      match: '巴西 vs 葡萄牙',
      homeWin: 1.9,
      draw: 3.5,
      awayWin: 3.8,
      over2_5: 1.5,
      under2_5: 2.5,
      bttsYes: 1.6,
      bttsNo: 2.3,
      bookmaker: 'Bet365',
      lastUpdated: '2026-06-10 14:00',
    },
    {
      id: 'match_003',
      match: '德国 vs 西班牙',
      homeWin: 2.3,
      draw: 3.2,
      awayWin: 2.9,
      over2_5: 1.8,
      under2_5: 2.0,
      bttsYes: 1.7,
      bttsNo: 2.1,
      bookmaker: 'Bet365',
      lastUpdated: '2026-06-10 14:00',
    },
    {
      id: 'match_004',
      match: '英格兰 vs 日本',
      homeWin: 1.6,
      draw: 3.8,
      awayWin: 5.2,
      over2_5: 1.5,
      under2_5: 2.5,
      bttsYes: 1.5,
      bttsNo: 2.5,
      bookmaker: 'Bet365',
      lastUpdated: '2026-06-10 14:00',
    },
    {
      id: 'match_005',
      match: '荷兰 vs 克罗地亚',
      homeWin: 2.0,
      draw: 3.2,
      awayWin: 3.5,
      over2_5: 1.9,
      under2_5: 1.9,
      bttsYes: 1.8,
      bttsNo: 2.0,
      bookmaker: 'Bet365',
      lastUpdated: '2026-06-10 14:00',
    },
    {
      id: 'match_006',
      match: '墨西哥 vs 加拿大',
      homeWin: 2.1,
      draw: 3.2,
      awayWin: 3.3,
      over2_5: 1.8,
      under2_5: 2.0,
      bttsYes: 1.7,
      bttsNo: 2.1,
      bookmaker: 'Bet365',
      lastUpdated: '2026-06-10 14:00',
    },
  ],

  group_winner: [
    {
      group: 'A 组（墨西哥、加拿大、沙特、...）',
      odds: [
        { team: '墨西哥', odds: 2.0 },
        { team: '加拿大', odds: 3.5 },
        { team: '沙特阿拉伯', odds: 4.5 },
      ],
    },
    {
      group: 'B 组（美国、韩国、...）',
      odds: [
        { team: '美国', odds: 2.5 },
        { team: '韩国', odds: 2.8 },
        { team: '其他', odds: 4.0 },
      ],
    },
    {
      group: 'C 组（阿根廷、乌拉圭、...）',
      odds: [
        { team: '阿根廷', odds: 1.5 },
        { team: '乌拉圭', odds: 3.5 },
        { team: '其他', odds: 6.0 },
      ],
    },
    {
      group: 'D 组（巴西、澳大利亚、...）',
      odds: [
        { team: '巴西', odds: 1.3 },
        { team: '澳大利亚', odds: 4.5 },
        { team: '其他', odds: 7.0 },
      ],
    },
  ],

  odds_history: {
    '阿根廷 vs 法国': {
      dates: ['06-01', '06-03', '06-05', '06-07', '06-09', '06-11'],
      homeWin: [2.5, 2.4, 2.5, 2.4, 2.3, 2.4],
      draw: [3.3, 3.2, 3.3, 3.2, 3.2, 3.2],
      awayWin: [3.0, 2.9, 3.0, 2.9, 3.0, 2.9],
    },
    '巴西 vs 葡萄牙': {
      dates: ['06-01', '06-03', '06-05', '06-07', '06-09', '06-11'],
      homeWin: [2.0, 1.9, 2.0, 1.9, 1.8, 1.9],
      draw: [3.6, 3.5, 3.6, 3.5, 3.5, 3.5],
      awayWin: [4.0, 3.8, 4.0, 3.8, 3.9, 3.8],
    },
    '德国 vs 西班牙': {
      dates: ['06-01', '06-03', '06-05', '06-07', '06-09', '06-11'],
      homeWin: [2.4, 2.3, 2.4, 2.3, 2.3, 2.3],
      draw: [3.3, 3.2, 3.3, 3.2, 3.2, 3.2],
      awayWin: [3.0, 2.9, 3.0, 2.9, 2.9, 2.9],
    },
  },

  bookmaker_comparison: {
    '阿根廷 vs 法国': {
      homeWin: [
        { bookmaker: 'Bet365', odds: 2.4 },
        { bookmaker: 'William Hill', odds: 2.35 },
        { bookmaker: 'Paddy Power', odds: 2.38 },
        { bookmaker: 'Betfair', odds: 2.42 },
        { bookmaker: '1xBet', odds: 2.39 },
      ],
      draw: [
        { bookmaker: 'Bet365', odds: 3.2 },
        { bookmaker: 'William Hill', odds: 3.18 },
        { bookmaker: 'Paddy Power', odds: 3.22 },
        { bookmaker: 'Betfair', odds: 3.2 },
        { bookmaker: '1xBet', odds: 3.25 },
      ],
      awayWin: [
        { bookmaker: 'Bet365', odds: 2.9 },
        { bookmaker: 'William Hill', odds: 2.92 },
        { bookmaker: 'Paddy Power', odds: 2.88 },
        { bookmaker: 'Betfair', odds: 2.95 },
        { bookmaker: '1xBet', odds: 2.85 },
      ],
    },
  },
};

export function getWorldCupWinnerOdds() {
  return oddsData.world_cup_winner;
}

export function getTopScorerOdds() {
  return oddsData.top_scorer;
}

export function getMatchOdds() {
  return oddsData.match_odds;
}

export function getGroupWinnerOdds() {
  return oddsData.group_winner;
}

export function getOddsHistory(match) {
  return oddsData.odds_history[match] || null;
}

export function getBookmakerComparison(match) {
  return oddsData.bookmaker_comparison[match] || null;
}

export function getBestOdds(match, type) {
  const comparison = oddsData.bookmaker_comparison[match];
  if (!comparison) return null;

  const odds = comparison[type];
  if (!odds) return null;

  return odds.reduce((best, current) =>
    current.odds > best.odds ? current : best
  );
}

export function calculateImpliedProbability(odds) {
  return (100 / odds).toFixed(1) + '%';
}

export function calculateExpectedValue(odds, actualProbability) {
  return ((odds * actualProbability) / 100 - 1) * 100;
}
