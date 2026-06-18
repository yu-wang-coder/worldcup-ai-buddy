/**
 * 赔率分析页逻辑
 */

import { renderHeader, renderFooter } from '../components/Header.js';
import { oddsData, matchData } from '../api/dataProvider.js';

renderHeader('odds');
renderFooter();

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
  };
  return flags[teamName] || '⚽';
}

function renderOverview() {
  const container = document.getElementById('odds-overview');

  const cards = [
    { icon: '📊', title: '数据来源', value: 'Mock', desc: '⚠️ 仅供演示，不可用作投注' },
    { icon: '📈', title: 'AI 胜率预测', value: '参考', desc: '⚠️ AI 模拟分析，非真实预测' },
    { icon: '⚡', title: '数据更新', value: '模拟', desc: '⚠️ 模拟数据，非实时更新' },
    { icon: '🎯', title: '热门比赛', value: '23 场', desc: '⚠️ 数据均为虚构' },
  ];

  container.innerHTML = cards.map((card) => `
    <div class="odds-card">
      <div class="odds-card__header">
        <div class="odds-card__icon">${card.icon}</div>
        <div class="odds-card__title">${card.title}</div>
      </div>
      <div class="odds-card__value">${card.value}</div>
      <div class="odds-card__desc">${card.desc}</div>
    </div>
  `).join('');
}

async function renderWinnerOdds() {
  const container = document.getElementById('winner-odds-table');

  try {
    const odds = await oddsData.getWorldCupWinner();

    if (!odds || odds.length === 0) {
      container.innerHTML = `<p style="color: #64748b; text-align: center; padding: 2rem;">暂无冠军赔率数据</p>`;
      return;
    }

    container.innerHTML = `
      <div class="odds-table" style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr>
              <th style="text-align: left; padding: 1rem; background: #f8fafc;">球队</th>
              <th style="text-align: left; padding: 1rem; background: #f8fafc;">平均赔率</th>
              <th style="text-align: left; padding: 1rem; background: #f8fafc;">胜率</th>
              <th style="text-align: left; padding: 1rem; background: #f8fafc;">变化</th>
              <th style="text-align: left; padding: 1rem; background: #f8fafc;">AI 预测</th>
            </tr>
          </thead>
          <tbody>
            ${odds.map((team) => `
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 1rem;">
                  <div class="odds-table__team">${getTeamFlag(team.team)} ${team.team}</div>
                </td>
                <td style="padding: 1rem; font-weight: 700; color: #f97316; font-size: 1.1rem;">${team.odds.toFixed(2)}</td>
                <td style="padding: 1rem; color: #64748b;">${team.probability}%</td>
                <td style="padding: 1rem;">
                  <span class="odds-table__change ${team.change && team.change.startsWith('-') ? 'odds-table__change--down' : ''}">
                    ${team.change || '—'}
                  </span>
                </td>
                <td style="padding: 1rem; color: #475569;">${team.aiAnalysis || '—'}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  } catch (error) {
    console.error('加载冠军赔率失败:', error);
    container.innerHTML = `<p style="color: #ef4444; text-align: center; padding: 2rem;">加载失败</p>`;
  }
}

async function renderMatchOdds() {
  const container = document.getElementById('match-odds-table');

  try {
    const matches = await matchData.getHot();

    if (!matches || matches.length === 0) {
      container.innerHTML = `<p style="color: #64748b; text-align: center; padding: 2rem;">暂无比赛赔率数据</p>`;
      return;
    }

    const matchesWithOdds = matches.filter((m) => m.odds);

    if (matchesWithOdds.length === 0) {
      container.innerHTML = `<p style="color: #64748b; text-align: center; padding: 2rem;">暂无比赛赔率数据</p>`;
      return;
    }

    container.innerHTML = `
      <div class="odds-table" style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr>
              <th style="text-align: left; padding: 1rem; background: #f8fafc;">比赛</th>
              <th style="text-align: left; padding: 1rem; background: #f8fafc;">${matchesWithOdds[0].homeTeam || '主队'}胜</th>
              <th style="text-align: left; padding: 1rem; background: #f8fafc;">平局</th>
              <th style="text-align: left; padding: 1rem; background: #f8fafc;">${matchesWithOdds[0].awayTeam || '客队'}胜</th>
              <th style="text-align: left; padding: 1rem; background: #f8fafc;">AI 建议</th>
            </tr>
          </thead>
          <tbody>
            ${matchesWithOdds.map((m) => `
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 1rem;">
                  <div class="odds-table__team">
                    ${getTeamFlag(m.homeTeam)} ${m.homeTeam} vs ${getTeamFlag(m.awayTeam)} ${m.awayTeam}
                  </div>
                </td>
                <td style="padding: 1rem; font-weight: 700; color: #f97316;">${m.odds.homeWin}</td>
                <td style="padding: 1rem; font-weight: 700; color: #475569;">${m.odds.draw}</td>
                <td style="padding: 1rem; font-weight: 700; color: #3b82f6;">${m.odds.awayWin}</td>
                <td style="padding: 1rem; color: #64748b; font-size: 0.85rem;">${m.odds.aiSuggestion || '数据收集中'}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  } catch (error) {
    console.error('加载比赛赔率失败:', error);
    container.innerHTML = `<p style="color: #ef4444; text-align: center; padding: 2rem;">加载失败</p>`;
  }
}

async function renderTrendChart() {
  const container = document.getElementById('trend-chart');

  try {
    const odds = await oddsData.getWorldCupWinner();

    if (!odds || odds.length === 0) {
      container.innerHTML = `<p style="color: #64748b; text-align: center; padding: 2rem;">暂无趋势数据</p>`;
      return;
    }

    const top5 = odds.slice(0, 5);
    const maxProb = Math.max(...top5.map((t) => parseFloat(t.probability)));

    container.innerHTML = `
      <div class="odds-trend">
        <div style="font-weight: 600; color: #0f172a; margin-bottom: 1rem;">热门球队夺冠概率走势</div>
        ${top5.map((team) => {
          const prob = parseFloat(team.probability) || 1;
          const widthPercent = (prob / maxProb) * 100;
          return `
            <div class="odds-trend__bar">
              <div class="odds-trend__label">${getTeamFlag(team.team)} ${team.team}</div>
              <div class="odds-trend__bar-container">
                <div class="odds-trend__bar-fill" style="width: ${widthPercent}%;"></div>
              </div>
              <div class="odds-trend__value">${prob.toFixed(1)}%</div>
            </div>
          `;
        }).join('')}
      </div>
      <div style="margin-top: 1.5rem; padding: 1.5rem; background: linear-gradient(135deg, #fef2f2, #fee2e2); border-radius: 12px; border-left: 4px solid #ef4444;">
        <div style="font-weight: 700; color: #dc2626; margin-bottom: 0.5rem;">⚠️ 重要提示</div>
        <p style="color: #991b1b; font-size: 0.95rem; line-height: 1.6;">
          本页面所有赔率数据均为 <strong>Mock 模拟数据</strong>，仅供学习演示用途，<strong>绝不构成任何投注建议</strong>。
          请勿将本站数据用于真实博彩行为。博彩有风险，请理性对待。
        </p>
      </div>
    `;
  } catch (error) {
    console.error('加载趋势图表失败:', error);
    container.innerHTML = `<p style="color: #ef4444; text-align: center; padding: 2rem;">加载失败</p>`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderOverview();
  renderWinnerOdds();
  renderMatchOdds();
  renderTrendChart();
});
