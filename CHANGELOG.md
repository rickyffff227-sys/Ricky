# 网站改动记录

记录明显的网站功能、内容、设计和架构改动，以及会影响协作方式的工程变更。既有网页在本记录建立前的修改历史未知，不补写未经验证的发布日期。

## 2026-09-24｜落实 DD-012 How I Work

- 将导航与第三章节由“个人优势 / Strengths”更新为“工作方式 / How I Work”。
- 使用四项已确认方法原则替换研究、数据、跨领域与沟通能力卡片。
- 删除四卡片、技能标签、图标与 Feature Grid 视觉，改为桌面 2 × 2、手机单列四段的编辑式方法宣言布局。
- 使用细分隔线、结构编号与留白建立层级；第四项以 Oxide 编号、短线和略高字重轻度强调。
- 保持 Paper · Ink · Oxide · Moss 色彩系统和单页结构，未新增 Notes / Now。

## 2026-09-24｜完成第一次正式视觉改版

- 将 DD-009、DD-010、DD-011 与 Paper · Ink · Oxide · Moss 色彩方向写入 Approved design。
- 新增首次访问 Intro，只展示 `RICKY FU`，约 1.72 秒自动完成；同一浏览器后续访问跳过，减少动态效果时快速退出。
- Hero 改为静态暖纸色编辑结构，加入独立名字层与“继续了解”入口，删除视频、底部信息栏、坐标、年份与 Scroll 提示。
- About 保留左视觉与右正文，左侧改为未来可替换真实人像的暖纸色编辑占位，逐字保留 DD-008 文案。
- 删除 About 的学校、专业、阶段、毕业时间、城市、邮箱 meta 信息栏，以及全部数字指标。
- Work、Strengths 与 Contact 保持原有结构并同步暖色系统；未新增 Notes / Now 页面。
- Oxlint 与 Vite 生产构建通过，并完成桌面浏览器视觉复核。

## 2026-09-23｜发布 Cloudflare Pages 生产环境

- 将 GitHub 仓库 `rickyffff227-sys/Ricky` 连接到 Cloudflare Pages，生产地址为 <https://ricky-etq.pages.dev>。
- 部署使用 React (Vite)、`npm run build`、`dist` 与生产分支 `main`。
- 启用 `main` 自动生产部署和所有非生产分支的 Preview Deployments。
- 部署过程未修改页面视觉、文案或 Design System。

## 2026-09-23｜落实 DD-008 About Narrative

- 将确认的 About 文案逐字写入页面，保留左侧视觉与右侧正文结构。
- 核心起句沿用现有标题层级；末句使用同字号、适度字重与轻微色差强调，没有新增 Card、标签或动画。
- 在设计规范中记录 Hero → About 连续叙事、文案风格约束，以及长期内部内容准则 `Ricky Content Lens`。
- 现有身份信息栏未强化，继续标记为后续迁移对象。

## 2026-09-23｜确认 About 叙事与 Education 归属

- 在设计规范中加入 DD-006：About 采用个人叙事，不承担传统简历式信息汇总。
- 加入 DD-007：教育作为 Experience / Journey，而非 Hero 或 About 的身份标签。
- 将现有 About 学校、专业、阶段与毕业时间信息栏标记为待移除或迁移；本轮未修改页面代码、未编写最终 About 文案。

## 2026-09-23｜落实首批正式设计决策

- 将网站长期定位确认为 Personal Digital Home，并在设计规范中记录核心气质与长期信息架构。
- Hero 改为长期态度文案，移除 `OPEN TO OPPORTUNITIES`、`2027 GRADUATE`、本科生和毕业阶段说明。
- 将学校、专业、本科阶段、预计毕业时间、所在地与邮箱整理到 About 正文下方的次级信息栏。
- 保留现有单页结构、浅色蓝灰视觉、视频背景、内容区块与整体节奏；未新增 Notes / Now 页面，未确定最终配色或字体系统。

## 2026-09-23｜建立设计规范的现状与批准边界

- 新增 `DESIGN_SYSTEM.md`，从代码记录字体、颜色、间距、布局、断点、组件、动画和交互现状；未将现状自动视为最终设计。
- 更新 `PROJECT.md`、`DECISIONS.md` 与协作说明，明确 Ricky 最终决策、Ricky 与 ChatGPT 共同设计、Codex 主要负责工程实现。
- 网站代码、页面视觉与交互未改。

## 2026-09-22｜建立项目协作基线

- 新增 `PROJECT.md`、`DECISIONS.md`、`CHANGELOG.md`、`TODO.md` 与简明的 `AGENTS.md`，使后续协作可从仓库恢复上下文。
- README 调整为本地运行、构建、静态部署与文档入口。
- 核对当前源码、媒体、构建和 lint；网页功能与视觉未改。
