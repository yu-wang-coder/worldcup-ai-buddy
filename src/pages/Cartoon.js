/**
 * 足球科普页逻辑
 */

import { renderHeader, renderFooter } from '../components/Header.js';
import { cartoonData } from '../api/dataProvider.js';

renderHeader('cartoon');
renderFooter();

function getLevelLabel(level) {
  const labels = {
    beginner: '入门',
    intermediate: '进阶',
    advanced: '高级',
  };
  return labels[level] || level;
}

function getLevelClass(level) {
  const classes = {
    beginner: '',
    intermediate: 'cartoon-card__level--intermediate',
    advanced: 'cartoon-card__level--advanced',
  };
  return classes[level] || '';
}

function getCoverVariant(index) {
  const variants = ['', 'cartoon-card__cover--blue', 'cartoon-card__cover--green', 'cartoon-card__cover--purple', 'cartoon-card__cover--cyan'];
  return variants[index % variants.length];
}

function renderCartoonCard(item, index) {
  return `
    <div class="cartoon-card" data-id="${item.id}">
      <div class="cartoon-card__cover ${getCoverVariant(index)}">
        <div class="cartoon-card__emoji">${item.thumbnail}</div>
        <div class="cartoon-card__duration">⏱ ${item.duration}</div>
      </div>
      <div class="cartoon-card__content">
        <div class="cartoon-card__title">${item.title}</div>
        <div class="cartoon-card__desc">${item.description}</div>
        <div class="cartoon-card__meta">
          <span class="cartoon-card__level ${getLevelClass(item.level)}">${getLevelLabel(item.level)}</span>
          <span>👁️ ${item.views || Math.floor(Math.random() * 100000 + 5000).toLocaleString()} 人学习</span>
        </div>
      </div>
    </div>
  `;
}

async function loadCartoon() {
  const container = document.getElementById('cartoon-grid');
  if (!container) return;

  try {
    const items = await cartoonData.getAll();

    if (!items || items.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #64748b;">
          暂无科普内容
        </div>
      `;
      return;
    }

    container.innerHTML = items.map((item, index) => renderCartoonCard(item, index)).join('');

    const cards = container.querySelectorAll('.cartoon-card');
    cards.forEach((card) => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        alert(`正在打开科普内容 ID: ${id}\n\n（这是演示功能，实际部署后会跳转到详细的学习页，可能包含视频或图文内容）`);
      });
    });
  } catch (error) {
    console.error('加载科普内容失败:', error);
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #ef4444;">
        加载失败，请刷新页面重试
      </div>
    `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadCartoon();
});
