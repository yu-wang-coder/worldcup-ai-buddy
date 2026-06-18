/**
 * 精彩瞬间页逻辑
 */

import { renderHeader, renderFooter } from '../components/Header.js';
import { highlightData } from '../api/dataProvider.js';

renderHeader('highlights');
renderFooter();

function getCategoryEmoji(category) {
  const emojis = {
    goal: '⚽',
    highlight: '🎬',
    celebration: '🎉',
    skill: '🪄',
    history: '📜',
    documentary: '🎥',
  };
  return emojis[category] || '🎯';
}

function getCategoryLabel(category) {
  const labels = {
    goal: '进球',
    highlight: '高光',
    celebration: '庆祝',
    skill: '技巧',
    history: '历史',
    documentary: '纪录片',
  };
  return labels[category] || category;
}

function renderHighlightCard(item) {
  return `
    <div class="highlight-card" data-id="${item.id}">
      <div class="highlight-card__image">
        <div class="highlight-card__emoji">${getCategoryEmoji(item.category)}</div>
        <div class="highlight-card__play">▶</div>
      </div>
      <div class="highlight-card__content">
        <div class="highlight-card__title">${item.title}</div>
        <div class="highlight-card__meta">${item.match || ''} ${item.match ? '·' : ''} ${item.minute || ''}</div>
        <div class="highlight-card__desc">${item.description}</div>
        <div class="highlight-card__tags">
          <span class="highlight-card__tag">${getCategoryLabel(item.category)}</span>
          ${item.relatedPlayer ? `<span class="highlight-card__tag">${item.relatedPlayer}</span>` : ''}
        </div>
        <div class="highlight-card__stats">
          <span>👁️ ${item.views || Math.floor(Math.random() * 500000 + 10000).toLocaleString()} 次观看</span>
          <span>👍 ${item.likes || Math.floor(Math.random() * 50000 + 5000).toLocaleString()}</span>
        </div>
      </div>
    </div>
  `;
}

async function loadHighlights() {
  const container = document.getElementById('highlights-grid');
  if (!container) return;

  try {
    const items = await highlightData.getAll();

    if (!items || items.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #64748b;">
          暂无精彩瞬间
        </div>
      `;
      return;
    }

    container.innerHTML = items.map(renderHighlightCard).join('');

    const cards = container.querySelectorAll('.highlight-card');
    cards.forEach((card) => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        alert(`正在播放精彩片段 ID: ${id}\n\n（这是演示功能，实际部署后会跳转到视频播放页）`);
      });
    });
  } catch (error) {
    console.error('加载精彩瞬间失败:', error);
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #ef4444;">
        加载失败，请刷新页面重试
      </div>
    `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadHighlights();
});
