/**
 * AI 聊天页逻辑
 */

import { renderHeader, renderFooter } from '../components/Header.js';
import { aiChat } from '../api/dataProvider.js';

renderHeader('chat');
renderFooter();

const quickReplies = [
  '谁会赢得 2026 世界杯？',
  '分析一下阿根廷 vs 法国',
  '给我讲一个足球冷知识',
  '越位规则是什么？',
  '预测梅西的表现如何？',
  '黑马球队是哪支？',
];

function addAiMessage(content) {
  const messages = document.getElementById('chat-messages');
  if (!messages) return;

  const messageEl = document.createElement('div');
  messageEl.className = 'chat-message chat-message--ai';
  messageEl.innerHTML = `
    <div class="chat-message__avatar">🤖</div>
    <div class="chat-message__bubble">${content}</div>
  `;

  messages.appendChild(messageEl);
  messages.scrollTop = messages.scrollHeight;
}

function addUserMessage(content) {
  const messages = document.getElementById('chat-messages');
  if (!messages) return;

  const messageEl = document.createElement('div');
  messageEl.className = 'chat-message chat-message--user';
  messageEl.innerHTML = `
    <div class="chat-message__avatar">👤</div>
    <div class="chat-message__bubble">${content}</div>
  `;

  messages.appendChild(messageEl);
  messages.scrollTop = messages.scrollHeight;
}

function showTyping() {
  const messages = document.getElementById('chat-messages');
  if (!messages) return null;

  const messageEl = document.createElement('div');
  messageEl.className = 'chat-message chat-message--ai';
  messageEl.id = 'typing-indicator';
  messageEl.innerHTML = `
    <div class="chat-message__avatar">🤖</div>
    <div class="chat-message__bubble">
      <span class="chat-typing"><span></span><span></span><span></span></span>
    </div>
  `;

  messages.appendChild(messageEl);
  messages.scrollTop = messages.scrollHeight;
  return messageEl;
}

function hideTyping() {
  const typingEl = document.getElementById('typing-indicator');
  if (typingEl) {
    typingEl.remove();
  }
}

async function handleSendMessage(message) {
  if (!message || !message.trim()) return;

  const sendBtn = document.getElementById('chat-send-btn');
  const input = document.getElementById('chat-input');

  if (sendBtn) sendBtn.disabled = true;

  addUserMessage(message);

  if (input) input.value = '';

  showTyping();

  try {
    const response = await aiChat.getSmartResponse(message);
    hideTyping();
    
    setTimeout(() => {
      addAiMessage(response);
      if (sendBtn) sendBtn.disabled = false;
    }, 400);
  } catch (error) {
    console.error('获取 AI 回复失败:', error);
    hideTyping();
    setTimeout(() => {
      addAiMessage('抱歉，我现在有点小故障了...让我重新组织一下思路...');
      if (sendBtn) sendBtn.disabled = false;
    }, 300);
  }
}

function setupInput() {
  const input = document.getElementById('chat-input');
  const sendBtn = document.getElementById('chat-send-btn');

  if (input && sendBtn) {
    sendBtn.addEventListener('click', () => {
      handleSendMessage(input.value);
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSendMessage(input.value);
      }
    });

    input.addEventListener('input', () => {
      input.style.height = 'auto';
      input.style.height = Math.min(input.scrollHeight, 120) + 'px';
    });
  }
}

function setupQuickReplies() {
  const buttons = document.querySelectorAll('.chat-quick-reply');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const msg = btn.getAttribute('data-msg') || btn.textContent;
      handleSendMessage(msg);
    });
  });
}

function showWelcome() {
  setTimeout(async () => {
    const greeting = await aiChat.getGreeting();
    addAiMessage(greeting);

    setTimeout(async () => {
      addAiMessage('我可以帮你：<br>⚽ 分析比赛和球队<br>📊 预测比赛结果<br>📖 解答足球规则和知识<br>🏆 分享世界杯趣闻<br><br>点击上方的快捷按钮开始提问，或者直接输入你的问题！');
    }, 1000);
  }, 500);
}

document.addEventListener('DOMContentLoaded', () => {
  setupInput();
  setupQuickReplies();
  showWelcome();
});
