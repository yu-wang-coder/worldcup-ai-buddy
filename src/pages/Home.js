/**
 * 首页逻辑 - 2026 世界杯智能观赛助手
 */

import { renderHeader, renderFooter } from '../components/Header.js';
import { matchData, oddsData } from '../api/dataProvider.js';
import { formatDate, formatTime } from '../utils/format.js';

renderHeader('home');
renderFooter();

const MATCH_TABS = {
  hot: matchData.getHot,
  today: matchData.getToday,
  upcoming: () => matchData.getUpcoming(7),
};

function renderHeroStats() {
  const statsEl = document.getElementById('hero-stats');
  if (!statsEl) return;

  statsEl.innerHTML = `
    <div class="home-hero__stat">
      <div class="home-hero__stat-value">48</div>
      <div class="home-hero__stat-label">参赛球队</div>
    </div>
    <div class="home-hero__stat">
      <div class="home-hero__stat-value">64</div>
      <div class="home-hero__stat-label">精彩比赛</div>
    </div>
    <div class="home-hero__stat">
      <div class="home-hero__stat-value">104</div>
      <div class="home-hero__stat-label">场次赛期</div>
    </div>
    <div class="home-hero__stat">
      <div class="home-hero__stat-value">3</div>
      <div class="home-hero__stat-label">主办国家</div>
    </div>
  `;
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
    丹麦: '🇩🇰',
    塞尔维亚: '🇷🇸',
    瑞士: '🇨🇭',
    美国: '🇺🇸',
    墨西哥: '🇲🇽',
    加拿大: '🇨🇦',
    塞内加尔: '🇸🇳',
    加纳: '🇬🇭',
    厄瓜多尔: '🇪🇨',
    意大利: '🇮🇹',
    哥伦比亚: '🇨🇴',
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
    round_16: '1/8 决赛',
    quarter_finals: '1/4 决赛',
    semi_finals: '半决赛',
    play_off_for_third_place: '三四名决赛',
    final: '决赛',
  };
  return labels[stage] || stage;
}

function renderMatchCard(match) {
  const hasScore = match.homeScore !== undefined && match.awayScore !== undefined;
  const isLive = match.status === 'live';
  const statusLabel = match.status === 'finished' ? '已结束' : match.status === 'live' ? '🔴 直播中' : match.status === 'upcoming' ? '即将开始' : '';
  const statusColor = match.status === 'live' ? '#22c55e' : match.status === 'finished' ? '#64748b' : '#f97316';

  return `
    <div class="match-card ${match.isHot ? 'match-card--hot' : ''}" data-match-id="${match.id}">
      <div class="match-card__header">
        <span class="match-card__stage">${getStageLabel(match.stage)}</span>
        <span class="match-card__status" style="color: ${statusColor}; font-weight: 600;">${statusLabel || formatDate(match.dateTime)}</span>
      </div>
      <div class="match-card__teams">
        <div class="team-info">
          <div class="team-info__flag">${getTeamFlag(match.homeTeam)}</div>
          <div class="team-info__name">${match.homeTeam}</div>
          ${hasScore ? `<div class="team-info__score">${match.homeScore}</div>` : '<div class="team-info__rank">主队</div>'}
        </div>
        <div class="match-card__vs">
          ${hasScore ? `<span style="color: #f97316; font-size: 1.2rem;">VS</span>` : 'VS'}
        </div>
        <div class="team-info">
          <div class="team-info__flag">${getTeamFlag(match.awayTeam)}</div>
          <div class="team-info__name">${match.awayTeam}</div>
          ${hasScore ? `<div class="team-info__score">${match.awayScore}</div>` : '<div class="team-info__rank">客队</div>'}
        </div>
      </div>
      <div class="match-card__info">
        <div class="match-card__venue">🏟️ ${match.venue} · ${match.city}</div>
        ${match.weather ? `<div>🌤️ ${match.weather}</div>` : ''}
        ${match.matchPreview ? `<div class="match-card__preview">💡 ${match.matchPreview}</div>` : ''}
        ${hasScore ? `
          <div class="match-card__stats">
            <span>⚽ 进球: ${match.homeScore} - ${match.awayScore}</span>
            <span>⏱️ ${match.minute || '90'}'</span>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

async function loadMatches(tabKey = 'hot') {
  const container = document.getElementById('match-list');
  if (!container) return;

  container.innerHTML = `
    <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #64748b;">
      正在加载比赛信息...
    </div>
  `;

  try {
    const loader = MATCH_TABS[tabKey] || matchData.getHot;
    const matches = await loader();

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
  } catch (error) {
    console.error('加载比赛信息失败:', error);
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #ef4444;">
        加载失败，请刷新页面重试
      </div>
    `;
  }
}

async function loadPredictions() {
  const container = document.getElementById('prediction-grid');
  if (!container) return;

  try {
    const odds = await oddsData.getWorldCupWinner();

    if (!odds || odds.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; color: rgba(255,255,255,0.7); text-align: center; padding: 2rem;">
          暂无预测数据
        </div>
      `;
      return;
    }

    const topTeams = odds.slice(0, 6);
    container.innerHTML = topTeams.map((team) => `
      <div class="prediction-card">
        <div class="prediction-card__team">
          ${getTeamFlag(team.team)} ${team.team}
        </div>
        <div class="prediction-card__odds">${team.odds.toFixed(1)}</div>
        <div class="prediction-card__prob">概率 ${team.probability}%</div>
        ${team.change ? `<div class="prediction-card__change ${team.change.startsWith('-') ? 'prediction-card__change--down' : ''}">赔率变化：${team.change}</div>` : ''}
      </div>
    `).join('');
  } catch (error) {
    console.error('加载预测数据失败:', error);
  }
}

function setupMatchTabs() {
  const tabs = document.querySelectorAll('#match-tabs .home-tab');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('home-tab--active'));
      tab.classList.add('home-tab--active');

      const tabKey = tab.getAttribute('data-tab');
      loadMatches(tabKey);
    });
  });
}

function setupCountdown() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);
  targetDate.setHours(0, 0, 0, 0);

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
  setupMatchTabs();
  renderHeroStats();
  loadMatches('hot');
  loadPredictions();
  setupCtaButtons();
});
