# SpaceLab Handoff · 2026-06-25

> Zhang Lab 课题组网站。Astro SSG + GitHub Pages。Space 深色主题 + Cream 浅色主题。中英双语。

## 技术栈

| 层 | 选型 |
|---|------|
| 框架 | Astro (纯静态，v5+) |
| 样式 | 原生 CSS（`src/styles/global.css`, ~2400行） |
| 地图 | Mapbox GL JS v3.23 |
| 内容 | MDX (`src/content/`) |
| 部署 | GitHub Pages (`/SpaceLab/` 子路径) |
| 构建 | `astro build` → `scripts/fix-github-pages-base.mjs` 补 base path |

## 项目结构

```
src/
├── pages/          # Astro 页面 (index, about, news, publications, collections, blogs, our-team, contact, faq)
├── components/     # 组件 (GlobeMap, LangSwitch, StarsCanvas, Cards...)
├── layouts/        # BaseLayout.astro (全局 chrome)
├── content/        # MDX 内容 (news, publications, collections, blogs, markers)
├── data/           # team.ts (团队成员数据)
└── styles/         # global.css (~2400行)
public/assets/
├── fonts/          # DM Serif Display (拉丁字体, ~110KB)
├── logo/           # spacelab.svg
├── js/             # i18n.js (客户端双语切换)
└── space/          # 星空纹理图
scripts/            # copy-fonts.sh, deploy.sh, fix-github-pages-base.mjs
```

## 本轮改动概览（12 commits）

### 字体系统
- **移除**: STZhongsong/STHeiti (华文, 商业, 27MB), San Francisco Display, Faire Octave
- **替换**: Noto Serif SC (标题) + Noto Sans SC (正文), Google Fonts CDN 按子集加载
- **保留**: DM Serif Display 本地托管 (~110KB)
- CSS 变量见 `:root { --font-title, --font-body }`, `html[lang="en"] { }` 覆盖英文

### 导航菜单
- 顺序: **Home → News → Research → Team → Publications → Contact** (+ 语言切换)
- Logo 替换为 Home 文字链接，融入 nav-links 统一管理
- 字号: Space 主题 `19-26px`, 浅色 `20-28px`, 平板 `17-22px`
- 悬停下划线动画（左→右 cubic-bezier）+ active 状态常驻
- active 用 `data-route` 属性 + JS 路径段匹配（免疫 GitHub Pages base path 改写）
- 布局: `grid-template-columns: 1fr auto`, nav-links `space-evenly` 撑满, 容器 72-76px 高

### 次级页面标题
- `.collection-title`, `.publication-title`: `30-52px` → `44-76px` (~1.5x)
- `.section-title`: `34-56px` → `38-64px` (sync)
- `.publication-lede`: `16-20px` → `24-30px`, 对比度 `0.6→0.75` (Space) / `0.78→0.88` (light)
- hero 容器: `min-height 320→420px`, 底部 `padding: 0→56px`

### 响应式
- 断点: `1024px` (平板横屏) / `768px` (平板竖屏) / `860px` (手机) / `560px` (小手机)
- 卡片网格: `repeat(auto-fill, minmax(300px, 1fr))`

### 无障碍 (WCAG 2.1)
- `skip-to-content` 链接 (`.skip-link`)
- `:focus-visible` 自定义焦点样式 (3px blue outline)
- `prefers-reduced-motion` 全局禁用动画
- LangSwitch: `role="radiogroup"` + `aria-checked`
- `<main id="main-content">`, `<nav aria-label>`

### 性能
- DM Serif Display `font-display: optional`
- Google Fonts DNS preconnect
- 内容图片 `loading="lazy"`, Logo `fetchpriority="high"`
- favicon.svg

## Anthropic 设计约束

遵循 [frontend-design skill](https://github.com/anthropics/skills) 原则:
- "Typography carries personality" — 双衬线体系 (DM Serif + Noto Serif SC)
- "Hero is a thesis" — 次级页面标题放大到 44-76px
- "Leverage motion deliberately" — hover 下划线 cubic-bezier, reduced-motion 尊重
- "Restraint and self-critique" — 不做过度设计, 保持模板底层美学

## 本地开发

```bash
cd /Users/mamingyang/Documents/GitHub/mimic-iv-pipeline/SpaceLab
npm install
npm run dev        # localhost:4321
npm run build      # 产出 dist/
```

## 部署流程

1. `git push origin main`
2. GitHub Actions (`deploy.yml`) 自动 `npm run build` → deploy to Pages
3. 站点: https://tylermmy13-droid.github.io/SpaceLab

## 已知要点

| 项目 | 说明 |
|------|------|
| Base path | GitHub Pages 在 `/SpaceLab/` 子路径, `fix-github-pages-base.mjs` 自动补 href/src |
| Mapbox token | `src/components/GlobeMap.astro:101` — 替换 `YOUR_MAPBOX_ACCESS_TOKEN` 为真实 token |
| 字体授权 | Noto Serif/Sans SC 开源, DM Serif Display OFL, 均合法 |
| `scripts/copy-fonts.sh` | 已废弃, 不再需要本地华文字体 |
| 浏览器兼容 | Chrome/Firefox/Safari/Edge 最新两版 |
