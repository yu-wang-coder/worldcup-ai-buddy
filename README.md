# 🏆 AI 看球搭子 — 2026 世界杯智能观赛助手

> 一个纯前端实现的世界杯观赛助手 Demo，提供实时赛事信息、AI 聊天陪聊、赔率分析和精彩瞬间回顾。

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=flat&logo=github&logoColor=white)

---

## 🌟 功能特色

### 1. 🏠 首页展示
- 世界杯倒计时
- 精选 / 今日 / 未来一周比赛筛选
- AI 实时夺冠概率预测
- 六大核心功能入口

### 2. ⚽ 赛事详情
- 球队信息（世界排名、主教练、核心球员）
- 球员资料（位置、年龄、俱乐部、进球数）
- AI 比赛分析（赛前预测、关键球员、战术要点）
- 赔率对比

### 3. 🤖 AI 聊天助手
- 智能对话（模拟 AI 交互）
- 快捷问题按钮（一键提问热门问题）
- 足球规则解答
- 球队和球员信息查询
- 世界杯历史趣闻

### 4. 🎯 精彩瞬间
- 经典进球回顾
- 高光时刻集锦
- 历史纪录片

### 5. 📊 赔率分析
- 世界杯冠军赔率
- 热门比赛赔率
- 多平台赔率对比
- AI 智能分析建议
- 概率趋势可视化

### 6. 📖 足球科普
- 基础规则入门
- 球员位置详解
- 裁判手势图解
- 战术体系解析
- 世界杯历史趣闻

---

## 🏗️ 技术架构

```
worldcup-ai-buddy/
├── index.html              # 首页
├── match-detail.html       # 赛事详情页
├── chat.html               # AI 聊天页
├── highlights.html         # 精彩瞬间页
├── odds.html               # 赔率分析页
├── cartoon.html            # 足球科普页
│
├── src/
│   ├── api/                # 统一数据提供者（API + Mock）
│   ├── components/         # 可复用组件（Header、Footer）
│   ├── data/               # Mock 数据层
│   ├── pages/              # 各页面逻辑
│   ├── store/              # 全局状态管理
│   ├── styles/             # 样式文件（CSS 变量 + 模块化）
│   └── utils/              # 工具函数
│
├── assets/                 # 静态资源
├── docs/                   # 开发文档
└── specs/                  # 产品规格
```

### 核心技术栈

- **HTML5** — 语义化标签结构
- **CSS3** — CSS 变量 + Flexbox/Grid 响应式布局
- **JavaScript ES6+** — 模块化（ES Modules）、Async/Await
- **无框架依赖** — 纯原生实现，零构建步骤

### 架构亮点

1. **数据层封装**：`dataProvider.js` 统一调度，API 失败自动降级到 Mock
2. **状态管理**：自定义 Store 类，localStorage 持久化
3. **模块化 CSS**：每页独立样式文件，CSS 变量统一主题色
4. **组件化**：Header/Footer 作为独立组件，所有页面复用
5. **响应式设计**：手机、平板、桌面完美适配

---

## 🚀 快速开始

### 方式一：直接打开（最简单）

由于项目使用 ES Modules，直接双击 HTML 文件可能遇到 CORS 限制。
**推荐使用方式二**。

### 方式二：本地 HTTP 服务器

```bash
# 使用 Python（推荐，大多数系统自带）
cd worldcup-ai-buddy
python -m http.server 8080

# 或使用 Node.js
npx http-server -p 8080
```

然后在浏览器访问：`http://localhost:8080/`

### 方式三：VS Code Live Server

1. 安装 VS Code 扩展 [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. 在项目目录右键 `index.html` → `Open with Live Server`

---

## 🌐 GitHub Pages 部署指南

### 步骤 1：准备仓库

```bash
# 进入项目目录
cd worldcup-ai-buddy

# 初始化 Git（如果还没有）
git init
git add .
git commit -m "feat: initial commit - 2026 世界杯智能观赛助手"

# 添加远程仓库（替换为你自己的 GitHub 仓库地址）
git remote add origin https://github.com/你的用户名/worldcup-ai-buddy.git
git branch -M main
git push -u origin main
```

### 步骤 2：启用 GitHub Pages

1. 打开 GitHub 仓库页面
2. 点击 **Settings**（设置）
3. 左侧菜单找到 **Pages**
4. 在 **Source** 中选择：
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. 点击 **Save**
6. 等待 1-2 分钟，页面会显示部署成功的链接

### 步骤 3：访问网站

部署成功后，访问地址为：

```
https://你的用户名.github.io/worldcup-ai-buddy/
```

### 自定义域名（可选）

在项目根目录创建 `CNAME` 文件，内容为你的域名：

```
worldcup-ai-buddy.example.com
```

然后在 DNS 管理面板添加 CNAME 记录指向 `你的用户名.github.io`

---

## 📁 项目结构详解

| 目录 | 用途 | 关键文件 |
|------|------|----------|
| `/` | 入口 HTML 页面 | `index.html`, `chat.html`, `odds.html` |
| `src/api/` | 数据提供者 | `dataProvider.js` |
| `src/components/` | 可复用 UI 组件 | `Header.js` |
| `src/data/` | Mock 数据 | `matches.js`, `teams.js`, `players.js`, `odds.js` |
| `src/pages/` | 页面逻辑 | `Home.js`, `Chat.js`, `Odds.js` |
| `src/store/` | 状态管理 | `store.js` |
| `src/styles/` | 样式 | `variables.css`, `global.css`, `home.css` |
| `src/utils/` | 工具函数 | `format.js`, `helpers.js` |

---

## 🎨 主题配色

| 颜色 | 用途 | Hex |
|------|------|-----|
| 🟧 主色 | 按钮、链接、高亮 | `#f97316` |
| 🟥 辅助 | 次要强调、趋势 | `#ef4444` |
| 🟨 强调 | 图标、装饰元素 | `#fbbf24` |
| ⬛ 深色 | 标题、Hero 区 | `#0f172a` |
| ⬜ 浅色 | 背景、卡片 | `#f8fafc` |

在 `src/styles/variables.css` 中可修改主题色。

---

## 🧪 测试

项目通过以下方式进行验证：

- ✅ 本地 HTTP 服务器加载测试
- ✅ 六大页面可访问（index, match-detail, chat, highlights, odds, cartoon）
- ✅ 数据加载与显示测试
- ✅ 导航链接测试
- ✅ 响应式布局测试

---

## 📝 更新日志

### v1.0.0 (2026)
- 🎉 正式发布 MVP 版本
- ✅ 首页：倒计时、热门赛事、AI 预测
- ✅ 赛事详情：球队信息、球员数据、赔率
- ✅ AI 聊天：智能对话、快捷提问
- ✅ 精彩瞬间：进球和高光时刻
- ✅ 赔率分析：冠军赔率、比赛赔率、趋势图
- ✅ 足球科普：规则、位置、战术、历史

---

## 📄 License

MIT License — 仅供学习和演示使用。

> ⚠️ 注意：本项目所有数据为 Mock 数据，仅供演示。真实世界杯数据请接入官方 API。

---

## ❓ 常见问题

**Q: 为什么直接双击 HTML 打开不显示内容？**
A: 因为使用了 ES Modules，需要通过 HTTP 协议访问。请使用本地服务器方式启动。

**Q: 如何修改主题颜色？**
A: 编辑 `src/styles/variables.css` 文件中的 CSS 变量即可。

**Q: 如何接入真实世界杯数据？**
A: 在 `src/api/dataProvider.js` 中添加 API 调用函数，将 `DATA_SOURCE` 改为 `'api'` 即可。Mock 数据会作为降级方案。

**Q: 部署到 GitHub Pages 后数据加载失败？**
A: 检查浏览器控制台，通常是路径问题或 CORS 限制。确保所有资源路径使用相对路径。

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的改动 (`git commit -m 'feat: add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

---

**Made with ❤️ for 2026 FIFA World Cup**
