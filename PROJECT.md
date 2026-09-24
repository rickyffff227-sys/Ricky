# 项目长期上下文｜Ricky Fu 个人网页

更新日期：2026-09-24。本文记录当前代码与已确认方向。较大的功能、页面、设计或架构修改完成后，同步更新本文以及 [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)、[DECISIONS.md](./DECISIONS.md)、[CHANGELOG.md](./CHANGELOG.md) 和 [TODO.md](./TODO.md)。

> Product and visual design decisions are made collaboratively by Ricky and ChatGPT. Codex serves primarily as the engineering implementation layer. `DESIGN_SYSTEM.md` is the source of truth for approved visual and interaction decisions.

## 项目目标

建立 Ricky Fu 的 **Personal Digital Home / 个人数字主页**，用于自我了解、自我表达、成长记录、经历沉淀、思考记录与长期个人主页。求职、学校申请和简历展示是使用场景，不是网站核心定义。

## 网站定位

当前是中文为主、英文标签辅助的单页 Prototype。长期信息架构为 `Hero = Attitude`、`About = Identity`、`Work = Experience`、`Notes = Thinking`、`Now = Present`。DD-006 至 DD-011 已确认 About 的叙事职责、教育归属、正式文案、Intro、Hero、About 视觉和指标删除。当前只实现 Hero、About、Work、Strengths 与 Contact；Notes、Now 和长期时间线尚未实现。

生产环境：<https://ricky-etq.pages.dev>。

## 目标用户

- 希望了解 Ricky 及其长期成长轨迹的访问者。
- 招聘方、潜在实习或工作合作方。
- 硕士项目招生相关人员。

不同访问场景的内容优先级仍待后续确认。

## 当前技术栈

| 层面 | 当前实现 |
| --- | --- |
| 前端 | React 19、React DOM 19，JavaScript/JSX |
| 构建 | Vite 8、npm 与 `package-lock.json` |
| 样式 | 原生 CSS，集中在 `src/App.css` 与 `src/index.css` |
| 检查 | Oxlint；命令 `npm run lint` |
| 内容 | `src/App.jsx` 内的 profile、experiences、strengths 与页面 JSX |
| 路由 | 单页锚点导航，无路由库 |
| 部署 | GitHub main → Cloudflare Pages 自动生产部署，输出目录 `dist` |

项目代码根目录是本文件所在的 `personal-site/`。`node_modules/` 与 `dist/` 是本地生成目录，已被 `.gitignore` 排除。

## 页面结构

1. 首次 Intro：只显示 `RICKY FU`，约 1.72 秒后自动进入；同一浏览器后续访问跳过。
2. 顶部导航：`R·F / RICKY FU / PERSONAL HOME`、关于我、精选经历、个人优势、联系入口。
3. Hero `#top`：独立 `RICKY FU` 名字层、批准的主标题与副标题、“继续了解”入口；无视频和底部信息栏。
4. About `#about`：左侧暖纸色编辑式人像占位，右侧 DD-008 正式叙事；无身份 meta 与数字指标。
5. Selected Experience `#work`：两段实习和一段教育与技能经历；目前为概述卡片。
6. Strengths `#strengths`：研究与洞察、数据整理、跨领域视角、沟通与表达四张卡片。
7. Contact `#contact`：邮箱、电话、所在地与返回顶部。

## 设计语言

- 正式色彩方向是 **Paper · Ink · Oxide · Moss**。
- Paper `#F3F0E9` 为主基底，Ink `#1C1C18` 为主文字，Oxide `#8C4938` 与 Moss `#687267` 小范围辅助，Deep Ink `#171714` 用于 Intro 与深色收尾。
- Hero 静态、安静、留白充足，采用编辑式名字与文字层级。
- About 左侧使用“真实人像 + 半抽象编辑处理”的长期方向；当前是未来可替换的占位结构。
- 页面最大版心约 1700px；CSS 在 1100px、760px、480px 设置响应式断点。
- Work、Strengths 和 Contact 本轮只同步暖色系统，结构并未升级为新的 Approved design。

## 已完成内容与完成度

- 单页主要区块、锚点导航、移动端菜单、邮箱和电话链接已实现。
- DD-009 Intro 与 Hero、DD-010 About 视觉、DD-011 指标删除已实现。
- Hero 背景视频、底部信息栏和 Scroll 装饰已从页面删除。
- About 身份信息栏与数字指标已从页面删除。
- DD-008 About 文案逐字保留。
- GitHub 与 Cloudflare Pages 持续部署已接通；`main` 自动生产部署，非生产分支生成 Preview Deployments。
- 2026-09-24 本轮 `npm run lint` 与 `npm run build` 均通过，并完成桌面端浏览器复核。
- **完成度判断**：第一次正式视觉改版完成；真实人像、案例证据、内容深度与完整设备验收仍待推进。

## 当前正在进行的内容

本轮第一次视觉改版已经完成代码实现和文档同步。等待推送后由 Cloudflare Pages 自动发布。

## 下一步计划

1. 与 Ricky、ChatGPT 确认 Strengths 是否重构为 `How I Work`，再决定文案与视觉结构。
2. 选择并准备真实人像，按 DD-010 替换 About 占位。
3. 收集至少一项可公开案例材料，补足问题、职责、方法、结果与脱敏证据。
4. 把教育经历逐步整理为长期 Experience / Journey 的一章。
5. 完成手机端真实设备验收，并复核小号英文标签、导航和联系方式。
6. 按正式决策逐步确认 Notes、Now、字体系统、项目图片规则与自定义域名。

## 已确认的重要决策

- Ricky 是所有者与最终决策者；Ricky 和 ChatGPT 共同承担产品与设计判断，Codex 负责工程实现。
- `DESIGN_SYSTEM.md` 区分 Current implementation 与 Approved design。
- 网站长期定位是 Personal Digital Home。
- DD-006 至 DD-008 定义 About 叙事、Education 归属与正式文案。
- DD-009 至 DD-011 定义 Intro、Hero、About 视觉与指标删除。
- 本轮色彩系统为 Paper · Ink · Oxide · Moss。
- 单页架构继续保留；Notes 与 Now 暂不新增。
- GitHub 仓库为 `rickyffff227-sys/Ricky`；Cloudflare Pages 的生产分支为 `main`。

## 待确认问题

- 最终人像照片、画幅、裁切、色调与替换方式。
- Strengths → How I Work 的正式内容与视觉。
- Experience / Journey 的时间线形式与详情页需求。
- 是否公开手机号；邮箱是否继续作为主要联系入口。
- 项目图片、成果材料、简历下载和外部资料入口。
- 最终字体系统、Notes / Now、自定义域名与英文版。

## 已知 Bug / 技术债

- 三张经历卡片有箭头和 hover 反馈，但没有点击目标，容易形成可点击预期。
- Work 与 Strengths 仍保留早期结构，需要在正式内容确认后逐步重构。
- 最终真实人像尚未提供，About 左侧目前是有明确语义的占位结构。
- 页面内容与结构集中在一个 `App.jsx`；案例、多语言或更多页面出现后需要重新评估拆分。
- 尚无自动化 UI 测试；当前验证覆盖 lint、生产构建与桌面浏览器视觉复核。

## 最近一次重要修改

2026-09-24：落实 DD-009、DD-010、DD-011，新增首次 Intro，重构静态 Hero，删除 Hero 视频与底部信息，重做 About 人像占位，并删除 About meta 与 metrics；全站同步 Paper · Ink · Oxide · Moss 色彩方向。

## 协作与维护约定

1. 新任务开始前先读本文与 `DESIGN_SYSTEM.md`，并以代码核对实际状态。
2. 获确认的设计写入 `DESIGN_SYSTEM.md`，重要取舍写入 `DECISIONS.md`，明显网站改动写入 `CHANGELOG.md`，待办同步到 `TODO.md`。
3. README 只维护运行、构建和部署说明。
4. 尽量小步提交，每条 commit message 写清修改目的。
