/**
 * 顶部导航栏组件 - 在所有页面使用
 */

export function renderHeader(activePage = 'home') {
  const navItems = [
    { id: 'home', label: '首页', href: 'index.html', icon: '🏠' },
    { id: 'matches', label: '赛事详情', href: 'match-detail.html?id=match_a1', icon: '⚽' },
    { id: 'chat', label: 'AI 聊天', href: 'chat.html', icon: '🤖' },
    { id: 'highlights', label: '精彩瞬间', href: 'highlights.html', icon: '🎯' },
    { id: 'odds', label: '赔率分析', href: 'odds.html', icon: '📊' },
    { id: 'cartoon', label: '足球科普', href: 'cartoon.html', icon: '📖' },
  ];

  const headerEl = document.getElementById('app-header');

  if (!headerEl) return;

  headerEl.className = 'site-header';
  headerEl.innerHTML = `
    <style>
      .site-header {
        background: white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        position: sticky;
        top: 0;
        z-index: 100;
      }
      .header-inner {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 64px;
      }
      .header-logo {
        font-size: 1.25rem;
        font-weight: 800;
        background: linear-gradient(135deg, #f97316, #ef4444);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
        text-decoration: none;
      }
      .header-logo:hover {
        opacity: 0.9;
      }
      .header-nav {
        display: flex;
        gap: 0.5rem;
        align-items: center;
      }
      .header-link {
        padding: 0.5rem 1rem;
        border-radius: 8px;
        color: #334155;
        text-decoration: none;
        font-size: 0.95rem;
        font-weight: 500;
        transition: all 0.2s ease;
        white-space: nowrap;
      }
      .header-link:hover {
        background: #fff7ed;
        color: #f97316;
      }
      .header-link--active {
        background: linear-gradient(135deg, #f97316, #ef4444);
        color: white;
      }
      .header-link--active:hover {
        background: linear-gradient(135deg, #f97316, #ef4444);
        color: white;
      }
      .header-toggle {
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0.5rem;
      }
      @media (max-width: 768px) {
        .header-inner {
          padding: 0 1rem;
          height: 56px;
        }
        .header-toggle {
          display: block;
        }
        .header-nav {
          display: none;
          position: absolute;
          top: 56px;
          left: 0;
          right: 0;
          background: white;
          flex-direction: column;
          padding: 1rem;
          gap: 0.25rem;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .header-nav--open {
          display: flex;
        }
        .header-link {
          width: 100%;
          padding: 0.75rem 1rem;
        }
        .header-logo {
          font-size: 1.1rem;
        }
      }
    </style>
    <div class="header-inner">
      <a href="index.html" class="header-logo">🏆 AI 看球搭子</a>
      <button class="header-toggle" id="header-toggle" type="button" aria-label="打开菜单">☰</button>
      <nav class="header-nav" id="header-nav">
        ${navItems.map((item) => `
          <a href="${item.href}" class="header-link ${item.id === activePage ? 'header-link--active' : ''}">
            ${item.icon} ${item.label}
          </a>
        `).join('')}
      </nav>
    </div>
  `;

  const toggleBtn = document.getElementById('header-toggle');
  const nav = document.getElementById('header-nav');

  if (toggleBtn && nav) {
    toggleBtn.addEventListener('click', () => {
      nav.classList.toggle('header-nav--open');
    });
  }
}

/**
 * 底部信息组件
 */
export function renderFooter() {
  const footerEl = document.getElementById('app-footer');

  if (!footerEl) return;

  footerEl.className = 'site-footer';
  footerEl.innerHTML = `
    <style>
      .site-footer {
        background: #0f172a;
        color: white;
        padding: 3rem 1.5rem 2rem;
      }
      .footer-inner {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-bottom: 2rem;
      }
      .footer-section h3 {
        font-size: 1.1rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: #f97316;
      }
      .footer-section p {
        font-size: 0.9rem;
        color: #94a3b8;
        line-height: 1.6;
        margin-bottom: 0.5rem;
      }
      .footer-link {
        display: block;
        color: #94a3b8;
        text-decoration: none;
        font-size: 0.9rem;
        padding: 0.25rem 0;
        transition: color 0.2s ease;
      }
      .footer-link:hover {
        color: #f97316;
      }
      .footer-bottom {
        border-top: 1px solid #1e293b;
        padding-top: 1.5rem;
        text-align: center;
        color: #64748b;
        font-size: 0.85rem;
      }
    </style>
    <div class="footer-inner">
      <div class="footer-section">
        <h3>🏆 AI 看球搭子</h3>
        <p>
          2026 世界杯智能观赛助手，提供实时赛事信息、赔率分析、
          AI 陪聊和精彩瞬间回顾。
        </p>
      </div>
      <div class="footer-section">
        <h3>功能导航</h3>
        <a href="index.html" class="footer-link">首页</a>
        <a href="match-detail.html" class="footer-link">赛事详情</a>
        <a href="chat.html" class="footer-link">AI 聊天</a>
        <a href="highlights.html" class="footer-link">精彩瞬间</a>
        <a href="odds.html" class="footer-link">赔率分析</a>
        <a href="cartoon.html" class="footer-link">足球科普</a>
      </div>
      <div class="footer-section">
        <h3>关于项目</h3>
        <p>纯前端静态网站 Demo</p>
        <p>技术栈：HTML5 + CSS3 + ES6+</p>
        <p>数据来源：FIFA 官方抽签结果</p>
        <p style="font-size: 0.8rem; color: #94a3b8; margin-top: 0.3rem;">更新日期：2025 年 12 月</p>
      </div>
      <div class="footer-section">
        <h3>⚠️ 免责声明</h3>
        <p style="color: #ef4444; font-size: 0.85rem; line-height: 1.6;">
          本网站<strong>分组 / 赛程框架数据基于 FIFA 官方 2026 世界杯抽签结果</strong>，
          具体比分、赔率、出场等演示数据仅为示例展示，仅供演示和学习使用，不构成任何投注建议。
        </p>
        <p style="color: #fbbf24; font-size: 0.8rem; margin-top: 0.5rem;">
          请勿将本站数据用于真实博彩，所有赔率信息均为示例展示。
        </p>
      </div>
    </div>
    <div class="footer-bottom">
      © 2026 AI 看球搭子 · 仅供学习和演示使用
    </div>
  `;
}

export default {
  renderHeader,
  renderFooter,
};
