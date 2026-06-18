/**
 * 赛事详情页逻辑
 */

import { renderHeader, renderFooter } from '../components/Header.js';
import { matchData, teamData, playerData } from '../api/dataProvider.js';
import { getTeamByName } from '../data/teams.js';

renderHeader('matches');
renderFooter();

function getTeamFlag(teamName) {
  const team = getTeamByName(teamName);
  if (team && team.flag) return team.flag;
  return '⚽';
}

function getStageLabel(stage) {
  const labels = {
    group_a: 'A 组小组赛',
    group_b: 'B 组小组赛',
    group_c: 'C 组小组赛',
    group_d: 'D 组小组赛',
    group_e: 'E 组小组赛',
    group_f: 'F 组小组赛',
    group_g: 'G 组小组赛',
    group_h: 'H 组小组赛',
    round_16: '1/8 决赛',
    quarter_finals: '1/4 决赛',
    semi_finals: '半决赛',
    play_off_for_third_place: '三四名决赛',
    final: '决赛',
  };
  return labels[stage] || stage;
}

function formatMatchDate(dateStr) {
  if (!dateStr) return '未知';
  try {
    const date = new Date(dateStr);
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
  } catch (e) {
    return dateStr;
  }
}

async function getTeamInfo(teamName) {
  try {
    const teams = await teamData.getAll();
    return teams.find((t) => t.name === teamName) || null;
  } catch (e) {
    return null;
  }
}

async function getTeamPlayers(teamName) {
  try {
    const players = await playerData.getAll();
    return players.filter((p) => p.team === teamName).slice(0, 6);
  } catch (e) {
    return [];
  }
}

function renderTeamCard(teamName, teamInfo, players) {
  const flag = getTeamFlag(teamName);
  const rank = teamInfo?.rank || '未知';
  const confederation = teamInfo?.confederation || '未知';
  const nickname = teamInfo?.nickname || '';
  const bestFinish = teamInfo?.bestWorldCupFinish || '暂无记录';
  const coach = teamInfo?.coach || '未知';
  const starPlayer = teamInfo?.starPlayer || '';

  return `
    <div class="team-card">
      <div class="team-card__header">
        <div class="team-card__flag">${flag}</div>
        <div class="team-card__info">
          <h3>${teamName}</h3>
          <p>${nickname} · ${confederation}</p>
        </div>
      </div>
      <div class="team-card__stats">
        <div class="team-card__stat">
          <div class="team-card__stat-value">#${rank}</div>
          <div class="team-card__stat-label">世界排名</div>
        </div>
        <div class="team-card__stat">
          <div class="team-card__stat-value">${players.length > 0 ? players.reduce((sum, p) => sum + (p.goals || 0), 0) : '-'}</div>
          <div class="team-card__stat-label">核心球员进球</div>
        </div>
        <div class="team-card__stat">
          <div class="team-card__stat-value">${teamInfo?.worldCupsWon || 0}</div>
          <div class="team-card__stat-label">世界杯冠军</div>
        </div>
      </div>
      <div class="team-card__detail">
        <strong>主教练：</strong>${coach}<br/>
        <strong>核心球员：</strong>${starPlayer || '—'}<br/>
        <strong>最佳战绩：</strong>${bestFinish}<br/>
        ${teamInfo?.didYouKnow ? `<strong>趣闻：</strong>${teamInfo.didYouKnow}` : ''}
      </div>
      ${players.length > 0 ? `
        <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #f1f5f9;">
          <div style="font-weight: 600; font-size: 0.9rem; color: #0f172a; margin-bottom: 0.75rem;">⭐ 核心球员</div>
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
            ${players.map((p) => `
              <span style="background: #fff7ed; color: #f97316; padding: 0.35rem 0.75rem; border-radius: 20px; font-size: 0.85rem; font-weight: 500;">
                ${p.name}
              </span>
            `).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

function renderPlayerCards(players, teamName) {
  if (players.length === 0) return '';

  return `
    <section>
      <h2 class="section-title">👥 ${teamName} 核心球员</h2>
      <div class="players-list">
        ${players.map((player) => `
          <div class="player-card">
            <div class="player-card__avatar">
              ${player.name.substring(0, 1)}
            </div>
            <div class="player-card__info">
              <div class="player-card__name">${player.name}</div>
              <div class="player-card__meta">
                ${player.position || '—'} · ${player.age || '—'}岁 · ${player.club || '—'}
              </div>
              <div class="player-card__stats">
                <span class="player-card__stat">⚽ ${player.goals || 0} 球</span>
                <span class="player-card__stat">🎯 ${player.assists || 0} 助攻</span>
                <span class="player-card__stat">💪 ${player.appearances || 0} 场</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

async function renderMatchDetail(matchId) {
  const container = document.getElementById('match-content');

  try {
    let match = await matchData.getById(matchId);
    if (!match) {
      const allMatches = await matchData.getAll();
      if (allMatches && allMatches.length > 0) {
        match = allMatches[0];
      }
    }

    if (!match) {
      container.innerHTML = `
        <div class="match-detail__header" style="text-align: center;">
          <div class="match-detail__stage">⚠️ 未找到比赛信息</div>
          <h1 class="match-detail__title">比赛不存在</h1>
          <p style="opacity: 0.8; margin-top: 1rem;">请返回首页查看其他比赛。</p>
          <a href="index.html" style="display: inline-block; margin-top: 1.5rem; padding: 0.75rem 1.5rem; background: #f97316; color: white; text-decoration: none; border-radius: 8px;">返回首页</a>
        </div>
      `;
      return;
    }

    const homeTeamInfo = await getTeamInfo(match.homeTeam);
    const awayTeamInfo = await getTeamInfo(match.awayTeam);
    const homePlayers = await getTeamPlayers(match.homeTeam);
    const awayPlayers = await getTeamPlayers(match.awayTeam);

    container.innerHTML = `
      <div class="match-detail__header">
        <div class="match-detail__stage">${getStageLabel(match.stage)}</div>
        <h1 class="match-detail__title">${match.homeTeam} vs ${match.awayTeam}</h1>

        <div class="match-detail__teams">
          <div class="match-detail__team">
            <div class="match-detail__team-flag">${getTeamFlag(match.homeTeam)}</div>
            <div class="match-detail__team-name">${match.homeTeam}</div>
          </div>
          <div class="match-detail__vs">VS</div>
          <div class="match-detail__team">
            <div class="match-detail__team-flag">${getTeamFlag(match.awayTeam)}</div>
            <div class="match-detail__team-name">${match.awayTeam}</div>
          </div>
        </div>

        <div class="match-detail__meta">
          <div class="match-detail__meta-item">📅 ${formatMatchDate(match.dateTime)}</div>
          <div class="match-detail__meta-item">🏟️ ${match.venue || '未知场馆'}</div>
          <div class="match-detail__meta-item">📍 ${match.city || '未知城市'}</div>
          ${match.weather ? `<div class="match-detail__meta-item">🌤️ ${match.weather}</div>` : ''}
          ${match.referee ? `<div class="match-detail__meta-item">👨‍⚖️ 裁判：${match.referee}</div>` : ''}
        </div>
      </div>

      ${match.matchPreview ? `
        <section style="margin-bottom: 2.5rem;">
          <div class="match-preview">
            <h3>💡 AI 比赛分析</h3>
            <p>${match.matchPreview}</p>
          </div>
        </section>
      ` : ''}

      <h2 class="section-title">📋 球队信息</h2>
      <div class="team-info-section">
        ${renderTeamCard(match.homeTeam, homeTeamInfo, homePlayers)}
        ${renderTeamCard(match.awayTeam, awayTeamInfo, awayPlayers)}
      </div>

      ${renderPlayerCards(homePlayers, match.homeTeam)}
      ${renderPlayerCards(awayPlayers, match.awayTeam)}

      ${match.odds ? `
        <section style="margin-top: 2.5rem;">
          <h2 class="section-title">📊 赔率分析</h2>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; background: white; padding: 1.5rem; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
            <div style="text-align: center;">
              <div style="font-size: 0.9rem; color: #64748b; margin-bottom: 0.5rem;">${match.homeTeam} 胜</div>
              <div style="font-size: 2rem; font-weight: 800; color: #f97316;">${match.odds.homeWin}</div>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 0.9rem; color: #64748b; margin-bottom: 0.5rem;">平局</div>
              <div style="font-size: 2rem; font-weight: 800; color: #475569;">${match.odds.draw}</div>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 0.9rem; color: #64748b; margin-bottom: 0.5rem;">${match.awayTeam} 胜</div>
              <div style="font-size: 2rem; font-weight: 800; color: #3b82f6;">${match.odds.awayWin}</div>
            </div>
          </div>
          <div style="margin-top: 1rem; text-align: center;">
            <a href="odds.html" style="color: #f97316; font-weight: 600; text-decoration: none;">查看完整赔率分析 →</a>
          </div>
        </section>
      ` : ''}

      <section style="margin-top: 2.5rem;">
        <h2 class="section-title">💬 想了解更多？</h2>
        <div style="background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); border-radius: 16px; padding: 2rem; text-align: center;">
          <div style="font-size: 1.25rem; font-weight: 700; color: #1e40af; margin-bottom: 0.5rem;">AI 聊天助手随时为你服务</div>
          <p style="color: #3b82f6; margin-bottom: 1.25rem;">预测比赛结果？想了解球队历史？有什么疑问尽管问！</p>
          <a href="chat.html" style="display: inline-block; padding: 0.75rem 2rem; background: linear-gradient(135deg, #f97316, #ef4444); color: white; text-decoration: none; border-radius: 8px; font-weight: 600;">开始 AI 聊天 →</a>
        </div>
      </section>
    `;
  } catch (error) {
    console.error('加载比赛详情失败:', error);
    container.innerHTML = `
      <div class="match-detail__header" style="text-align: center;">
        <div class="match-detail__stage">❌ 加载失败</div>
        <h1 class="match-detail__title">无法获取比赛信息</h1>
        <p style="opacity: 0.8; margin-top: 1rem;">请稍后刷新重试</p>
        <a href="index.html" style="display: inline-block; margin-top: 1.5rem; padding: 0.75rem 1.5rem; background: #f97316; color: white; text-decoration: none; border-radius: 8px;">返回首页</a>
      </div>
    `;
  }
}

function getMatchIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id') || 'match_a1';
}

document.addEventListener('DOMContentLoaded', () => {
  const matchId = getMatchIdFromUrl();
  renderMatchDetail(matchId);
});
