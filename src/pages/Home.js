/**
 * 首页逻辑 - 2026 世界杯智能观赛助手
 * 数据来源：FIFA 官方抽签结果（2025 年 12 月 5 日，华盛顿）
 */

import { renderHeader, renderFooter } from '../components/Header.js';
import {
  getMatches,
  getHotMatches,
  getUpcomingMatches,
  getTodayMatches,
  DATA_INFO,
  GROUP_SUMMARY,
} from '../data/matches.js';
import { TEAMS_META } from '../data/teams.js';

renderHeader('home');
renderFooter();

function renderHeroStats() {
  const statsEl = document.getElementById('hero-stats');
  if (!statsEl) return;

  statsEl.innerHTML = `
    <div class="home-hero__stat">
      <div class="home-hero__stat-value">48</div>
      <div class="home-hero__stat-label">参赛球队</div>
    </div>
    <div class="home-hero__stat">
      <div class="home-hero__stat-value">12</div>
      <div class="home-hero__stat-label">比赛小组</div>
    </div>
    <div class="home-hero__stat">
      <div class="home-hero__stat-value">104</div>
      <div class="home-hero__stat-label">正式场次</div>
    </div>
    <div class="home-hero__stat">
      <div class="home-hero__stat-value">3</div>
      <div class="home-hero__stat-label">主办国家</div>
    </div>
  `;
}

function renderDataSource() {
  const disclaimerEl = document.querySelector('.home-hero__disclaimer');
  if (disclaimerEl) {
    disclaimerEl.innerHTML = `
      <div style="font-size: 0.95rem; line-height: 1.6;">
        📌 <strong>数据来源：</strong>${DATA_INFO.source}
        <br/>
        🗓️ <strong>抽签日期：</strong>${DATA_INFO.drawDate}
        &nbsp;·&nbsp; <strong>更新日期：</strong>${DATA_INFO.updatedDate}
        &nbsp;·&nbsp; <strong>赛期：</strong>${DATA_INFO.tournamentDates}
        <br/>
        🏟️ <strong>主办城市：</strong>${DATA_INFO.hostCities}
        <br/>
        <span style="color:#fca5a5;">⚠️ 注：${DATA_INFO.demoNote}</span>
      </div>
    `;
  }
}

function getTeamFlag(teamName) {
  const flags = {
    阿根廷: '🇦🇷',
    法国: '🇫🇷',
    巴西: '🇧🇷',
    英格兰: '🏴',
    西班牙: '🇪🇸',
    德国: '🇩🇪',
    荷兰: '🇳🇱',
    葡萄牙: '🇵🇹',
    乌拉圭: '🇺🇾',
    比利时: '🇧🇪',
    克罗地亚: '🇭🇷',
    摩洛哥: '🇲🇦',
    日本: '🇯🇵',
    韩国: '🇰🇷',
    沙特阿拉伯: '🇸🇦',
    澳大利亚: '🇦🇺',
    瑞士: '🇨🇭',
    美国: '🇺🇸',
    墨西哥: '🇲🇽',
    加拿大: '🇨🇦',
    塞内加尔: '🇸🇳',
    加纳: '🇬🇭',
    厄瓜多尔: '🇪🇨',
    哥伦比亚: '🇨🇴',
    南非: '🇿🇦',
    捷克: '🇨🇿',
    波黑: '🇧🇦',
    卡塔尔: '🇶🇦',
    海地: '🇭🇹',
    苏格兰: '🏴',
    巴拉圭: '🇵🇾',
    土耳其: '🇹🇷',
    库拉索: '🇨🇼',
    科特迪瓦: '🇨🇮',
    突尼斯: '🇹🇳',
    埃及: '🇪🇬',
    伊朗: '🇮🇷',
    新西兰: '🇳🇿',
    佛得角: '🇨🇻',
    挪威: '🇳🇴',
    阿尔及利亚: '🇩🇿',
    奥地利: '🇦🇹',
    约旦: '🇯🇴',
    乌兹别克斯坦: '🇺🇿',
    巴拿马: '🇵🇦',
  };
  return flags[teamName] || '⚽';
}

function getStageLabel(stage) {
  const labels = {
    group_a: 'A 组',
    group_b: 'B 组',
    group_c: 'C 组',
    group_d: 'D 组',
    group_e: 'E 组',
    group_f: 'F 组',
    group_g: 'G 组',
    group_h: 'H 组',
    group_i: 'I 组',
    group_j: 'J 组',
    group_k: 'K 组',
    group_l: 'L 组',
    round_32: '1/16 决赛',
    round_16: '1/8 决赛',
    quarter_finals: '1/4 决赛',
    semi_finals: '半决赛',
    play_off_for_third_place: '三四名决赛',
    final: '决赛',
  };
  return labels[stage] || stage;
}

function formatMatchDateTime(dateTime) {
  try {
    const d = new Date(dateTime);
    return d.toLocaleString('zh-CN', {
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch (e) {
    return dateTime;
  }
}

function renderMatchCard(match) {
  const hasScore =
    match.homeScore !== null && match.homeScore !== undefined && match.homeScore !== '';
  const isLive = match.status === 'live';
  const statusLabel =
    match.status === 'finished'
      ? '已结束'
      : match.status === 'live'
      ? '🔴 直播中'
      : formatMatchDateTime(match.dateTime);
  const statusColor =
    match.status === 'live' ? '#22c55e' : match.status === 'finished' ? '#64748b' : '#f97316';

  return `
    <div class="match-card ${match.isHot ? 'match-card--hot' : ''}" data-match-id="${match.id}">
      <div class="match-card__header">
        <span class="match-card__stage">${getStageLabel(match.stage)}</span>
        <span class="match-card__status" style="color: ${statusColor}; font-weight: 600;">${statusLabel}</span>
      </div>
      <div class="match-card__teams">
        <div class="team-info">
          <div class="team-info__flag">${getTeamFlag(match.homeTeam)}</div>
          <div class="team-info__name">${match.homeTeam}</div>
          ${hasScore ? `<div class="team-info__score">${match.homeScore}</div>` : '<div class="team-info__rank">VS</div>'}
        </div>
        <div class="match-card__vs" style="width: 40px; text-align: center; color: #94a3b8;">—</div>
        <div class="team-info">
          <div class="team-info__flag">${getTeamFlag(match.awayTeam)}</div>
          <div class="team-info__name">${match.awayTeam}</div>
          ${hasScore ? `<div class="team-info__score">${match.awayScore}</div>` : '<div class="team-info__rank">—</div>'}
        </div>
      </div>
      <div class="match-card__info">
        <div class="match-card__venue">🏟️ ${match.venue} · ${match.city}</div>
        ${match.weather ? `<div>🌤️ ${match.weather}</div>` : ''}
        ${match.matchPreview ? `<div class="match-card__preview">💡 ${match.matchPreview}</div>` : ''}
        ${typeof match.odds === 'object' && !hasScore ? `
          <div class="match-card__stats">
            <span>📊 胜 ${match.odds.homeWin} · 平 ${match.odds.draw} · 客胜 ${match.odds.awayWin}</span>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

function loadMatches(matches) {
  const container = document.getElementById('match-list');
  if (!container) return;

  if (!matches || matches.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #64748b;">
        暂无比赛信息
      </div>
    `;
    return;
  }

  container.innerHTML = matches.map(renderMatchCard).join('');

  const cards = container.querySelectorAll('.match-card');
  cards.forEach((card) => {
    card.addEventListener('click', () => {
      const matchId = card.getAttribute('data-match-id');
      window.location.href = `match-detail.html?id=${matchId}`;
    });
  });
}

function loadPredictions() {
  const container = document.getElementById('prediction-grid');
  if (!container) return;

  const topTeams = [
    { team: '阿根廷', odds: 5.0, probability: 20.0, change: '+0.2' },
    { team: '法国', odds: 5.5, probability: 18.2, change: '-0.3' },
    { team: '巴西', odds: 6.0, probability: 16.7, change: '+0.1' },
    { team: '英格兰', odds: 7.0, probability: 14.3, change: '-0.1' },
    { team: '西班牙', odds: 9.0, probability: 11.1, change: '+0.3' },
    { team: '德国', odds: 11.0, probability: 9.1, change: '-0.2' },
  ];

  container.innerHTML = topTeams
    .map(
      (team) => `
    <div class="prediction-card">
      <div class="prediction-card__team">
        ${getTeamFlag(team.team)} ${team.team}
      </div>
      <div class="prediction-card__odds">${team.odds.toFixed(1)}</div>
      <div class="prediction-card__prob">概率 ${team.probability}%</div>
      <div class="prediction-card__change ${team.change.startsWith('-') ? 'prediction-card__change--down' : ''}">赔率变化：${team.change}</div>
    </div>
  `
    )
    .join('');

  const meta = document.createElement('div');
  meta.style.cssText = 'grid-column: 1 / -1; text-align: center; padding: 1rem 0; color: rgba(255,255,255,0.7); font-size: 0.85rem;';
  meta.textContent = `注：以上赔率与概率数据为示例展示，不等同于官方数据 · 数据截止：${DATA_INFO.updatedDate}`;
  container.appendChild(meta);
}

function setupMatchTabs() {
  const tabs = document.querySelectorAll('#match-tabs .home-tab');
  if (!tabs || tabs.length === 0) return;

  const allMatches = getMatches();

  const getMatchMap = () => ({
    hot: allMatches.filter((m) => m.isHot),
    today: allMatches.filter((m) => {
      const md = new Date(m.dateTime);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const endToday = new Date(today);
      endToday.setDate(endToday.getDate() + 1);
      return md >= today && md < endToday;
    }),
    upcoming: allMatches.filter((m) => new Date(m.dateTime) > new Date()).slice(0, 8),
  });

  const loadTab = (tabKey) => {
    const map = getMatchMap();
    const matches = map[tabKey] || map.hot;
    loadMatches(matches);
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('home-tab--active'));
      tab.classList.add('home-tab--active');
      const tabKey = tab.getAttribute('data-tab');
      loadTab(tabKey);
    });
  });

  // 初始加载
  loadTab('hot');
}

function setupCountdown() {
  const targetDate = new Date('2026-06-11T00:00:00Z');

  function update() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      document.getElementById('cd-days').textContent = '00';
      document.getElementById('cd-hours').textContent = '00';
      document.getElementById('cd-minutes').textContent = '00';
      document.getElementById('cd-seconds').textContent = '00';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('cd-days').textContent = String(days).padStart(2, '0');
    document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('cd-minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('cd-seconds').textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

function setupCtaButtons() {
  const btnPrediction = document.getElementById('cta-prediction');
  const btnChat = document.getElementById('cta-chat');
  const btnOddsDetail = document.getElementById('cta-odds-detail');

  if (btnPrediction) {
    btnPrediction.addEventListener('click', () => {
      const el = document.getElementById('prediction-grid');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  if (btnChat) {
    btnChat.addEventListener('click', () => {
      window.location.href = 'chat.html';
    });
  }

  if (btnOddsDetail) {
    btnOddsDetail.addEventListener('click', () => {
      window.location.href = 'odds.html';
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setupCountdown();
  renderHeroStats();
  renderDataSource();
  setupMatchTabs();
  loadPredictions();
  setupCtaButtons();
});
