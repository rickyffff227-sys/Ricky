# Ricky Fu — Personal Digital Home Design System

更新日期：2026-09-24。本文区分两类状态：

- **Current implementation**：代码当前实际采用的做法，用于核对与维护。
- **Approved design**：Ricky 与 ChatGPT 已正式确认的设计约束。实现与现状冲突时，以 Approved design 为修改目标。

Ricky 是网站所有者和最终决策者。Ricky 与 ChatGPT 共同决定产品、视觉、信息架构、UX 与内容表达；Codex 负责准确记录并完成工程实现，不自行扩写未确认的设计。

## 1. Design Philosophy

**Current implementation**

- 当前仍是单页 Prototype，已完成第一次正式视觉改版。
- Intro、Hero、About 已采用暖纸色、深墨色与克制的编辑式视觉。
- Work、Strengths、Contact 保持原有结构，颜色已同步转入暖色系统；具体内容与组件形式仍需逐项确认。

**Approved design**

- 网站长期定位是 **Ricky Fu 的 Personal Digital Home / 个人数字主页**。
- 网站承担自我了解、自我表达、成长记录、经历沉淀、思考记录与长期个人主页等职责。求职、学校申请与简历展示是使用场景。
- 核心气质关键词：**好奇、理性、开放、包容、人文、克制**。
- 视觉表达保持自然、安静、留白充足，避免模板化 Portfolio 语言和无意义装饰。

## 2. Brand Identity

**Current implementation**

- 页面使用英文名 `Ricky Fu`；Header 使用 `R·F` 与 `RICKY FU / PERSONAL HOME`。
- Intro 与 Hero 都使用独立的 `RICKY FU` 名字层。
- 中文负责主要叙事，英文用于名字、章节标签和少量辅助信息。

**Approved design**

- 网站的品牌定义是 `Personal Digital Home / 个人数字主页`。
- `RICKY FU` 在 Hero 中是独立视觉层，不是导航 Logo 的简单放大。
- 复杂 Logo、金属感、潮流花体、霓虹与 3D 效果不进入本轮视觉系统。
- 最终 Logo、favicon 与字体形式仍待确认。

## 3. Color System

### Approved design — Paper · Ink · Oxide · Moss

| Token | HEX | 用途 |
| --- | --- | --- |
| Paper | `#F3F0E9` | 页面、Hero 与 About 主基底 |
| Ink | `#1C1C18` | 主文字与主要结构 |
| Muted | `#716D65` | 正文次级文字 |
| Oxide | `#8C4938` | 极少量重点、细线与局部标点 |
| Moss | `#687267` | 辅助标签与克制的次强调 |
| Line | `#D8D2C7` | 分隔线与边界 |
| Deep Ink | `#171714` | Intro 与深色收尾区域 |
| Warm White | `#F1EEE7` | Deep Ink 上的主要文字 |
| Warm Paper Deep | `#E7E0D5` | About 左侧视觉背景块 |

使用原则：

- 全站从冷蓝灰转入温暖、编辑型、带纸张感的色彩系统。
- Intro 使用 Deep Ink；Hero 与 About 使用 Paper。
- Oxide 与 Moss 只用于小面积辅助。
- 不使用纯黑背景、炫目发光、chrome 金属或霓虹效果。
- 暗色模式与交互状态的完整 token 仍待确认。

## 4. Typography

**Current implementation**

- 字体栈为 `Inter, "Helvetica Neue", Arial, "PingFang SC", "Microsoft YaHei", sans-serif`，未加载项目内字体文件。
- Hero 的 `RICKY FU` 与中文态度文案使用大字号和紧字距建立编辑层级。
- About 起句是 H3 层级，正文保持较窄阅读宽度，末句使用轻度强调。
- 英文辅助标签使用小字号、大写和宽字距。

**Approved design**

- About 起句“我习惯先理解，再判断。”应明显但克制。
- About 最后一句可以适度强调，但不能成为第二个 Hero。
- 正文保持自然阅读节奏，不使用大量粗体、渐变、特殊颜色或动画。
- 最终字体系统、字阶和最小字号仍待确认。

## 5. Information Architecture & Layout

### Approved design

- **Hero = Attitude**：表达 Ricky 的态度、观察世界的方式与网站气质。
- **About = Identity**：通过个人叙事表达 Ricky 是怎样的人。
- **Work = Experience**：展示经历、项目、研究、实习、教育与作品。
- **Notes = Thinking**：记录想法、观点、学习与思考。
- **Now = Present**：记录当前关注、学习、研究或参与的事情。

Notes 与 Now 当前只作为长期信息架构原则，不新增页面、路由或组件。

**Current implementation**

- 单页锚点结构保持不变：Hero、About、Selected Experience、Strengths、Contact。
- 最大版心约 1700px；主要断点为 1100px、760px、480px。
- Hero 使用全屏静态结构；About 保持左侧视觉、右侧正文。
- Work、Strengths 与 Contact 的结构本轮未重做。

## 6. Approved Component Decisions

### DD-006 — About = Personal Narrative

- About 的核心任务是让访问者认识 Ricky 这个人。
- 内容围绕 Ricky 如何观察世界、保持好奇的问题、思考与判断方式、对科技、经济、市场、人与社会的兴趣，以及仍在学习与变化的状态展开。
- 不使用本科生、毕业年份、求职状态、教育背景列表、技能罗列或简历式自我评价作为 About 主体。
- 保留“左侧视觉 + 右侧主体文字”的总体布局。
- 原 About 次级身份信息栏不再属于确认方案。

### DD-007 — Education as Experience

- **Education is an experience, not a badge.**
- 教育经历不作为 Hero 或 About 的核心身份标签。
- 天津商业大学、国际经济与贸易专业、本科阶段及对应时间未来作为一段 `Experience / Journey`，与实习、项目、研究、研究生阶段和工作经历共同构成长线时间线。
- 毕业年份可存在于该段经历的详细信息中，无需出现在网站最显眼的位置。

### DD-008 — About Narrative

**Approved copy**

> **我习惯先理解，再判断。**
>
> 面对陌生的问题，我会先理清背景与逻辑，再形成自己的判断。不同的声音，也常常让我重新检查自己是否遗漏了什么。
>
> 我对科技、经济与市场的兴趣，最终都指向同一个问题：现实究竟是如何运转的。越是深入其中，我越在意人的处境、选择与关系——我们如何理解彼此，又如何对待彼此。
>
> 我仍然在变化，也仍然在学习。**理解现实的逻辑，也试着理解身处其中的人。**

- Hero 表达“在复杂中理解，在变化中成长”的态度；About 解释这里的“理解”具体意味着什么。
- 文案保持自然、克制、坦诚，允许留白，兼顾专业性与个人性。
- 不把正文写成个人陈述或简历摘要，不堆砌自我评价，不使用“本人”“具备较强能力”“善于”等简历语言。
- 当前文案不得自行扩写或改写。
- 正文不拆成卡片，不新增技能或阶段身份标签。

### DD-009 — Entry & Hero Visual Direction

#### Intro

- 首次进入网站时播放 Intro 进入层，只展示名字 **RICKY FU**。
- 不添加副标题、复杂 Logo、进入按钮或滚动触发。
- Intro 自动进入主页，仅首次访问完整播放；后续刷新或再次访问可以跳过或使用极简版。
- 背景使用 Deep Ink `#171714`，名字使用接近 `#F1EEE7` 的暖白，Oxide `#8C4938` 只作极少量细节点缀。
- 动效采用 **模糊 → 清晰 → 稳定 → 淡出**，总时长约 1.5–1.8 秒。
- 动效保持克制、顺滑、安静，不使用强烈缩放、弹跳、旋转或夸张位移。
- Intro 与主页保持连续的视觉语言。

#### Hero

- Hero 结构依次为独立名字层 `RICKY FU`、正式主标题、正式副标题与一个了解型轻量入口。
- 主标题：
  - **在复杂中理解，**
  - **在变化中成长。**
- 副标题：**我试着理解现实如何运转，也试着理解人与世界。**
- 轻量入口采用 **继续了解**，指向 About。
- Hero 使用静态、安静的视觉结构，以 Paper `#F3F0E9` 为基底，强调编辑感与留白。
- 删除背景视频。
- 删除 `PORTFOLIO · 2026`、坐标、向下探索、Scroll 线及其他底部模板化信息。
- Hero 不承载本科生、求职状态、毕业年份、学历或其他阶段性身份标签。

### DD-010 — About Visual Direction

- About 承接 Hero，并通过 DD-008 文案解释 Ricky 的“理解”。
- 保留左侧视觉与右侧正文结构。
- 左侧方向是 **真实人像 + 半抽象编辑处理**：人像表达“这是 Ricky”，编辑处理表达“这是 Ricky 的视觉世界”。
- 最终照片尚未确定，本轮先建立可替换的人像占位结构。
- 占位结构使用较深暖纸色，可加入极细线、不完整边框、局部 `RF`、轻纸纹、裁切感与非封闭构图。
- 左侧视觉保持安静、编辑感和个人性；不使用科技球体、宇宙轨道、科技网格、潮流海报感或商务证件照展示框。
- 右侧逐字保留 DD-008 文案；起句清晰，正文行宽适合阅读，段落有呼吸感，末句轻度强调。
- 页面不增加技能、学历、身份或求职标签。
- 当前学校、专业、阶段、预计毕业、所在城市与邮箱信息栏从页面视觉中删除。

### DD-011 — Remove Metrics from About

- 删除 About 下方的数字指标模块，包括：
  - `04 段跨领域实践经历`
  - `03 个出口业务目的地`
  - `01 项全国性竞赛奖项`
  - `持续学习 / 持续探索`
- 这些事实若未来仍有价值，应在 Experience 中以具体经历表达。
- About 保持连续的个人叙事与阅读节奏。

## 7. Motion System

**Current implementation**

- Intro 总时长 1.72 秒，名字和细线执行模糊、清晰、稳定、淡出。
- `localStorage` 键 `ricky-intro-seen-v1` 记录首次完整播放；记录存在时直接进入主页。
- 系统设置减少动态效果时，Intro 约 120ms 后移除，并将全局动画和过渡压缩到最短。
- 页面继续使用平滑锚点滚动；链接和卡片保留轻微 hover 反馈。
- Hero 不再播放视频。

**Approved design**

- Intro 动效遵循 DD-009。
- 其他页面进入、滚动揭示与页面切换方案仍待确认。

## 8. Imagery

**Current implementation**

- About 左侧使用暖纸色编辑式人像占位：内层裁切框、半透明 `RF`、细线和 Oxide 小点。
- 最终真实人像、项目截图、摄影与 Mockup 尚未接入。
- Experience 卡片仍使用 CSS 抽象占位视觉，本轮只同步了暖色系统。

**Approved design**

- About 左侧遵循 DD-010 的“真实人像 + 半抽象编辑处理”方向。
- 真实人像的画幅、拍摄、裁切、色调和替换细节等待 Ricky 与 ChatGPT 确认。
- 项目图、截图与 Mockup 的最终规则尚未确认。

## 9. Responsive & Accessibility

**Current implementation**

- 桌面端保持全尺寸导航、双列 About 与大字号 Hero。
- 760px 以下使用折叠菜单，Hero 和 About 改为单列；480px 以下继续调整名字、标题与占位尺寸。
- Intro 为装饰层并使用 `aria-hidden`；About 占位有明确的辅助技术说明。
- 键盘焦点使用 Oxide 轮廓；系统减少动态效果偏好会缩短 Intro 与全局动效。
- 真实设备验收仍需继续。

**Approved design**

- 手机端必须保持清晰的信息层级和阅读体验。
- 具体断点、最小字号、对比度目标与真实人像替代文本规则仍待确认。

## 10. Writing & Content Style

- Hero 与 About 使用已批准的正式文案，不自行改写。
- 中文负责主要信息，英文只作辅助层级。
- 避免“优秀、成熟、专业、独立”等堆叠式自我评价。
- 避免“本人”“具备较强能力”“善于”等简历式语言。
- 保持自然、克制、坦诚，允许复杂性和留白。

### Ricky Content Lens / Internal Content Principles

以下四个问题是长期内容判断原则，供 Work、Notes、Now 与其他内容扩展使用：

1. **这个内容有没有体现好奇？**
2. **有没有自己的判断？**
3. **有没有容纳复杂性？**
4. **有没有最后记得“人”？**

## 11. Do / Don't

| DO | DON'T |
| --- | --- |
| 使用 Paper、Ink 与充足留白 | 回退到冷蓝灰科技模板风格 |
| 让 Hero 表达长期态度 | 在 Hero 放求职、学历或毕业阶段标签 |
| 让 About 进行个人叙事 | 在 About 汇总学校、技能、联系方式和数字战绩 |
| 使用真实人像与克制编辑处理 | 科技球体、宇宙轨道、商务证件照框 |
| 用轻量文字入口连接 About | 厚重营销式 CTA |
| 逐项确认后写入 Approved design | 自行增加 Notes / Now 页面或扩写正式文案 |

## 12. Current Decisions

### Approved design

- **DD-006**：About = Personal Narrative。
- **DD-007**：Education as Experience。
- **DD-008**：About Narrative 与 Ricky Content Lens。
- **DD-009**：首次 Intro 与静态编辑式 Hero。
- **DD-010**：About 使用真实人像与半抽象编辑处理方向。
- **DD-011**：删除 About metrics。
- **Color Direction**：Paper · Ink · Oxide · Moss。
- **长期定位**：Personal Digital Home。
- **长期信息架构**：Hero = Attitude、About = Identity、Work = Experience、Notes = Thinking、Now = Present。

### Current implementation

- DD-009、DD-010 与 DD-011 已落地。
- Intro 首次完整播放并自动退出；回访时跳过。
- Hero 已删除视频、底部信息和模板化 Scroll 提示。
- About 已删除学校、专业、阶段、毕业时间、城市、邮箱 meta 信息栏。
- About 已删除全部数字指标。
- About 正文逐字保留 DD-008。
- About 左侧已完成可供未来真实人像替换的编辑式占位结构。
- 单页结构保持不变；Notes 与 Now 未新增。
- Work、Strengths 和 Contact 已同步暖色系统，具体结构尚未作为新 Approved design。
- 字体系统、真实照片、项目图片与 Strengths 的下一轮内容结构仍待确认。

## 13. Open Design Questions

1. 最终人像采用什么画幅、姿态、背景、色调与裁切方式？
2. Strengths 是否改为 `How I Work`，其正式内容与视觉结构如何定义？
3. Experience 如何演进为长期 Journey，卡片是否需要详情？
4. 最终字体系统、字号、间距和小号英文标签的可读性如何统一？
5. Notes 与 Now 的页面形式、内容模型和导航关系是什么？
6. 项目截图、摄影和 Mockup 的展示规则是什么？
7. 是否需要暗色模式、自定义域名或英文版？
