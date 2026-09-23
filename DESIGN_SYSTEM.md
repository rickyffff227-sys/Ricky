# Ricky Fu — Personal Digital Home Design System

更新日期：2026-09-23。依据 `src/App.jsx`、`src/App.css`、`src/index.css`、`index.html` 和现有媒体文件整理。本文件区分两种状态：

- **Current implementation**：代码此刻实际采用的做法，仅供核对和后续讨论；不等于 Ricky 批准的最终设计。
- **Approved design**：只有 Ricky 明确表示“这个设计已经确认”或“这是我与 ChatGPT 最终确认的设计方案”后，才把对应的具体视觉或交互方案写入。实现时优先遵循它；与当前代码冲突时，以它为修改目标。

Ricky 是网站所有者和最终决策者。Ricky 与 ChatGPT 共同决定产品、视觉、信息架构、UX、内容表达及整体方向；Codex 主要负责工程实现、适配、动画、测试、性能和代码维护。未经确认，不因实现便利擅自重设整体设计语言或已确定的页面。已获确认的长期定位、气质、信息架构、Hero 文案与内容边界分别写入相关章节的 `Approved design`，并汇总在第 15 节；未明确批准的当前 CSS 数值与组件方案仍只属于 `Current implementation`。

## 1. Design Philosophy

**Current implementation**

- 现有页面以浅色背景、深色文字、低饱和蓝灰、宽留白、大幅中文标题和小号英文辅助标签营造较理性、安静的感觉。
- 视觉重点落在首屏标题、经历卡片和联系区；部分抽象球体、网格、渐变和视频承担装饰作用。
- 当前实现尚未经过 Ricky 与 ChatGPT 对整体视觉的最终确认。

**Approved design**

- 网站长期定位是 **Ricky Fu 的 Personal Digital Home / 个人数字主页**。它用于自我了解、自我表达、成长记录、经历沉淀、思考记录与长期个人主页；求职、学校申请和简历展示是使用场景，而非网站本身的核心定义。
- 已确认的核心气质关键词是：**好奇、理性、开放、包容、人文、克制**。后续视觉、交互、文案与内容设计应尽量与这些关键词一致。
- 当前页面仍是 `Prototype / v0.1`。现有的大面积留白、浅色低饱和蓝灰基调、大字号标题、中文为主英文为辅助标签，以及 About / Experience / Contact 的整体节奏可继续作为实现基线；这些基线不代表其中每个视觉参数或组件均已批准。

## 2. Brand Identity

**Current implementation**

- 页面使用英文名 `Ricky Fu`；顶部文字标记是 `R·F` 加 `RICKY FU / PORTFOLIO`，联系区背景使用巨大的 `RF`。
- favicon 是深色方形底上的字母 `R` 与蓝色圆点，并非顶部 `R·F` 的同一图形版本。
- 页面围绕国际经济与贸易背景、市场研究、消费者洞察和数据整理展开；这是现有文案的定位，不自动视为最终品牌定位。
- 文案以中文表达主要信息，以大写英文标签和短句辅助。现有代码未给出中文姓名，不能推断中文名或自行建立中英文名映射。
- 整体语气偏克制、积极、第一人称；Hero 已移除求职与毕业阶段标签，改为经确认的长期态度文案。

**Approved design**

- 网站的核心身份是 `Personal Digital Home / 个人数字主页`，不以“求职站”“申请站”或“在线简历”作为品牌定义。
- 具体 Logo、Wordmark、favicon、中文名关系与字体形式仍待确认；现有 `PORTFOLIO` 字样只属于当前实现，不能据此限制长期定位。

## 3. Color System

**Current implementation**：以下记录现有主要用途。`—` 表示目前只有硬编码色值，没有对应 CSS 变量。RGB 是 HEX 的等值表达，不表示另有一套颜色定义。现有 CSS 共出现 76 个不同 HEX 值及 26 种 `rgba()` 表达，渐变和装饰使用大量近似色；因此当前还不是统一的语义色系统。

| 用途 | HEX | RGB | CSS variable / 当前使用 |
| --- | --- | --- | --- |
| Background：页面基础 | `#FFFFFF` | `rgb(255, 255, 255)` | —；`src/index.css` 的 `:root` 背景 |
| Background：浅纸色 | `#F6F7F8` | `rgb(246, 247, 248)` | `--paper`；当前主要是声明，区块常用其他近似色 |
| Background：经历区 | `#F5F7F8` | `rgb(245, 247, 248)` | —；`.work-section` |
| Background：首屏后备 | `#EEF2F5` | `rgb(238, 242, 245)` | —；`.hero` |
| Surface：卡片 | `#FFFFFF` | `rgb(255, 255, 255)` | —；`.experience-card` |
| Primary Text | `#182024` | `rgb(24, 32, 36)` | `--ink`；根文字与部分悬停状态 |
| Secondary Text：基础声明 | `#6D757E` | `rgb(109, 117, 126)` | `--muted`；实际次级文字多为其他硬编码灰色 |
| Secondary Text：正文示例 | `#66717A` | `rgb(102, 113, 122)` | —；关于区正文 |
| Border：基础声明 | `#DFE4E8` | `rgb(223, 228, 232)` | `--line`；关于信息与优势网格 |
| Accent：基础声明 | `#637FAE` | `rgb(99, 127, 174)` | `--blue`；标记圆点与导航悬停等 |
| Accent：大标题局部 | `#7189AE` | `rgb(113, 137, 174)` | —；首屏及联系区强调字 |
| Hover：主按钮 | `#425E83` | `rgb(66, 94, 131)` | —；`.button-primary:hover` |
| Hover：联系圆按钮 | `#54749A` | `rgb(84, 116, 154)` | —；`.contact-cta:hover` |
| Selection：选中文字背景 | `#C9D8F5` | `rgb(201, 216, 245)` | —；`::selection` |
| Selection：选中文字 | `#122B52` | `rgb(18, 43, 82)` | —；`::selection` |

`--max:1700px` 是布局变量，不是颜色。当前没有单独的 `:active` 色、暗色模式 token 或暗色模式样式。首屏、头像占位、经历视觉和联系区还使用多层渐变与半透明白/蓝色，不能仅从上表还原完整画面；这些色值均保留在源码中，尚未归并。

**Approved design**：背景、表面、文字、边框、强调、悬停、激活和未来暗色模式的具体色板均未确认。

## 4. Typography

**Current implementation**：根字体栈为 `Inter, "Helvetica Neue", Arial, "PingFang SC", "Microsoft YaHei", sans-serif`。项目没有引入 Inter 字体文件或网络字体，因此实际显示取决于设备已安装字体。未写明的行高或字重使用继承/浏览器默认值，不能补记为设计规范。

| 层级 / 当前选择器 | 字号 | 字重 | 行高 | 字间距 |
| --- | --- | --- | --- | --- |
| Display：联系区 `.contact-main h2` | `clamp(70px, 8.5vw, 158px)`；断点另有覆盖 | `620` | `1.14` | `-.09em` |
| H1：首屏 `.hero h1` | `clamp(65px, 6.45vw, 120px)`；1100、760、480px 下多次覆盖 | `650` | `1.27` | `-.085em`；760px 下 `-.08em` |
| H2：区块标题 `.section-heading h2` | `clamp(50px, 5vw, 92px)`；760px 下 `clamp(42px, 8vw, 63px)` | `600` | `1.23` | `-.075em` |
| H3：关于区 `.about-copy h3` | `clamp(35px, 3vw, 55px)`；760px 为 `36px`，480px 为 `29px` | `600` | `1.35` | `-.055em` |
| H3：经历卡 `.experience-body h3` | `clamp(28px, 2.1vw, 38px)`；760px 为 `29px` | `600` | `1.38` | `-.055em` |
| H3：优势卡 `.strength-card h3` | `25px` | 未单独设置 | 未单独设置 | `-.06em` |
| Body：关于区 `.about-copy > p` | `16px`；760px 下 `14px` | 未单独设置 | `2.1` | 未单独设置 |
| Body emphasis：`.about-reflection strong` | 继承正文 | `600` | 继承正文 | 未单独设置；块级显示并有 `7px` 上间距 |
| Body：经历卡 `.experience-body p` | `14px` | 未单独设置 | `1.9` | 未单独设置 |
| Body：优势卡 `.strength-card p` | `13px` | 未单独设置 | `1.9` | 未单独设置 |
| Caption / eyebrow 等共享选择器 | 多数 `11px`，局部 `8–10px` | 多数 `700` | 多数未单独设置 | 多数 `.18em` |
| Navigation `.nav-links` | `13px` | `600` | 未单独设置 | `.04em` |
| Project Number：经历卡 `.experience-top` | `10px`；480px 下 `8px` | `700` | 未单独设置 | `.18em` |

中英文混排现状：主要段落用中文；英文标签常用大写与较宽字距；中文标题中的标点和换行在 JSX 中手工指定。当前没有统一的中英文空格、标点、缩写、数字或换行规范。

**Approved design**：字体文件、字阶、混排和最小字号尚未确认。现有 8–11px 辅助文字需要结合可读性检查。

## 5. Layout System

**Current implementation**

- 最大版心：`.page-width` 使用 `width: min(calc(100% - clamp(48px, 8vw, 160px)), var(--max))`，其中 `--max:1700px`；760px 及以下改为 `calc(100% - 40px)`，即左右各 20px。
- Header 高度：桌面 88px，1100px 以下 76px，760px 以下 69px；header 自身左右 padding 为 `clamp(24px, 4vw, 80px)`，手机为 20px。
- Grid：关于区两列比例 `.89fr / 1.11fr`；经历区为两列，第一张跨两列并内部分半；优势区 4 列、760px 以下 2 列、480px 以下 1 列；数字指标 4 列、760px 以下 2 列。
- Section spacing：`.section-shell` 上/下为 `145/150px`；1100px 以下 `105/110px`；480px 以下 `80/85px`。
- 阅读宽度：关于文案盒最大 690px、正文段落最大 600px；经历卡描述最大 440px。未定义全站统一的阅读宽度 token。
- 断点：`max-width:1100px`、`760px`、`480px`；在 480px 另有第二条覆盖首屏标题大小。

**Approved design**

长期信息架构采用以下语义关系：

- **Hero = Attitude**：表达 Ricky 的态度、观察世界的方式与网站整体气质。
- **About = Identity**：通过个人叙事表达 Ricky 是怎样的人，不承担传统简历式身份或基本信息汇总。
- **Work = Experience**：展示经历、项目、研究、实习、教育与作品；教育作为成长经历的一章进入长期 Journey / Experience。
- **Notes = Thinking**：记录想法、观点、学习与思考。
- **Now = Present**：记录当前正在关注、学习、研究或参与的事情。

这套关系是未来扩展的重要信息架构原则。Notes 与 Now 的最终页面形式尚未确认，不得据此自行增加页面、路由或组件。现有最大宽度、列网格、区块节奏、边距和断点仍未获最终批准。

## 6. Spacing System

**Current implementation**：没有 spacing CSS variables 或统一 scale。常见间距包括 20、22、24、25、28、30、32、35、36、40、42、45、48、50、55、60、65、70、78、80、85、105、110、120、145、150px；如经历网格 gap 为 22px，优势卡 padding 为 28px，区块标题下边距为 78px。它们来自当前选择器，不能解释为一套刻意设计的比例体系。

**Approved design**：尚未确定。Ricky 给出的 `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128` 是可讨论的示例，不自动替换现有数值。待 Ricky 与 ChatGPT 确认 scale 后再建立 token，并分步骤迁移。

## 7. Components

**Current implementation**：下表中的“动画”仅描述现有行为；没有写到的状态即未实现。多数组件是 JSX 结构与 CSS class 的组合，并非独立 React 组件。

| 组件 | 使用场景与视觉规则 | Hover / Animation | Mobile 行为 |
| --- | --- | --- | --- |
| Navigation | 绝对定位于首屏顶部；左侧 `R·F` Wordmark，中间锚点，右侧联系胶囊按钮 | 导航链接换蓝；联系按钮变深底白字，`.2s` | 760px 以下折叠菜单；点击导航链接后关闭 |
| Hero | 满屏背景视频、浅色遮罩、大标题、简介和两个 CTA | 主按钮上移 3px 且变蓝，`.25s`；背景视频循环 | 标题缩小、视频裁切点改到 66%、底部坐标文字隐藏 |
| Project Card / Experience Item | 当前实际上是 `.experience-card`：上方分类、抽象视觉、标题、描述和机构日期；第一张更大 | 整卡上移 5px 并加阴影，箭头圆圈反色；卡片本身不是链接 | 两列改一列；第一张由左右排版改上下排版 |
| Project Index | 当前未实现独立项目索引或项目详情目录 | 无 | 无 |
| Section Header | `SectionHeading` 复用 eyebrow、标题及右侧说明 | 无 | 760px 以下隐藏右侧说明、缩小标题 |
| About Block | 左侧人物占位视觉、右侧介绍和个人信息，底部数字指标 | 邮箱是下划线链接；无其他动画 | 变单列，数字指标改两列 |
| Buttons / Links | 深色胶囊主按钮、文字链接、顶部联系按钮、联系区圆形邮件按钮 | 颜色变化或位移；圆形邮件按钮悬停旋转 45° | 主按钮缩小；圆形按钮缩小并移到标题下方 |
| Tags / Labels | eyebrow 蓝点、英文小标签、卡片编号及辅助文字 | 多数无交互 | 部分缩小或隐藏 |
| Footer | 版权、英文短句、返回顶部 | 返回顶部为锚点；无独立 hover 样式 | 换行，480px 以下隐藏英文短句 |
| Image Container | `.portrait-card` 和 `.experience-visual` 当前均为 CSS 生成的占位画面；首屏为本地视频 | 经历视觉随卡片一起位移；无独立图片动画 | 容器高度变化，裁切随宽度变化 |

**Approved design**

- Hero 只承担 **Attitude**，不承担简历功能。它必须保持长期有效，不随 Ricky 从本科生变为研究生、职场人士或其他身份而失效。
- Hero 不得放置本科生、求职状态、`OPEN TO OPPORTUNITIES`、`2027 GRADUATE`、毕业年份、学历标签或类似阶段性职业身份信息。

### DD-006 — About = Personal Narrative

- About 的任务是让访问者认识 Ricky 这个人，而不是快速读取 Ricky 的履历。
- About 主体内容未来围绕：Ricky 如何观察世界、对哪些问题保持好奇、思考与判断方式、对经济、市场、人与社会的兴趣，以及当前仍在学习与变化的状态。
- About 不使用本科生、`2027 Graduate`、求职状态、教育背景列表、大段学校 / 专业 / 毕业时间信息或技能罗列等典型简历式表达；也不使用“本人性格开朗”“具有较强 XX 能力”等简历式个人陈述。
- 当前 About “左侧大视觉 + 右侧主体文字”的总体布局可以保留为设计基线。
- 上一轮确认的“About 正文下方集中放置阶段身份 supporting information”方案不再有效。当前代码中的学校、专业、阶段、预计毕业时间、所在地与邮箱信息栏属于待移除或迁移的临时实现，不是 Approved design。
- 本轮不撰写最终 About 文案，不重新设计完整 About，也不增加折叠式“简历信息抽屉”；等待后续正式内容与视觉细节确认。

### DD-007 — Education as Experience

- **Education is an experience, not a badge.**
- 教育经历不作为 Hero 或 About 的核心身份标签。本科阶段是 Ricky 人生与成长经历中的一个章节。
- 天津商业大学、国际经济与贸易专业、本科阶段及对应时间未来作为一段 `Experience / Journey` 内容，与实习、项目、研究、研究生阶段和工作经历共同组成长期个人时间线。
- 具体毕业年份可以放在该段经历的详细信息中，无需出现在网站最显眼的位置。

### DD-008 — About Narrative

**Approved copy**

> **我习惯先理解，再判断。**
>
> 面对陌生的问题，我会先理清背景与逻辑，再形成自己的判断。不同的声音，也常常让我重新检查自己是否遗漏了什么。
>
> 我对科技、经济与市场的兴趣，最终都指向同一个问题：现实究竟是如何运转的。越是深入其中，我越在意人的处境、选择与关系——我们如何理解彼此，又如何对待彼此。
>
> 我仍然在变化，也仍然在学习。**理解现实的逻辑，也试着理解身处其中的人。**

- 这段文字不是传统简历式自我介绍。它表达 Ricky 的思考方式，以及对科技、经济、市场和人的长期兴趣；体现理性而避免冷感，体现人文关怀而避免煽情，体现独立判断而避免武断。
- Hero 表达“在复杂中理解，在变化中成长”的态度；About 进一步解释这里的“理解”具体意味着什么。两者构成连续叙事，不作为彼此独立的模块处理。
- 文案保持自然、克制、坦诚，允许留白，兼顾专业性与个人性。不写成个人陈述或简历摘要，不堆砌“优秀、专业、成熟、独立”等自我评价，不使用“本人”“具备较强能力”“善于”等简历语言，也不为了显得高级而过度文学化。
- 当前确认文案不得自行扩写或改写；后续修改须等待 Ricky 与 ChatGPT 再次确认。
- 页面保留左侧视觉与右侧正文的基本结构，不把正文拆成大量 Card，不新增技能标签或阶段身份标签，也不在主体中加入大段学校、专业或毕业时间信息。
- “我习惯先理解，再判断。”作为核心起句，具有明显但克制的层级；最后一句可适度强调，但不做成大型 slogan，不抢过 Hero。中间正文保持正常阅读节奏，不使用过多粗体、渐变、特殊颜色或动画。
- 现有传统简历式信息栏可暂时保留代码且不得强化视觉层级，继续作为后续迁移对象；不自行设计新的学历信息模块。教育继续按照 DD-007 处理。

其他组件的具体外观、状态、交互和手机端表现尚未逐项确认。

## 8. Motion System

**Current implementation**

- 页面进入、Scroll reveal、图片独立动画、页面切换：未实现。
- 首屏视频：自动播放、静音、循环、行内播放；生成脚本定义 24 FPS × 96 帧，约 4 秒循环。
- Hover：多数链接颜色过渡 `.2s`；按钮、卡片、优势卡约 `.25s`。CSS 未指定 easing，使用浏览器默认 `ease`。
- 全站 `scroll-behavior:smooth`；`prefers-reduced-motion:reduce` 下切换为 `auto`，并极大缩短 CSS 动画与过渡，但没有停止 `<video>` 自动播放。

**Approved design**：具体 easing、duration、入场、滚动、图片与页面切换方案未确认。Ricky 本次给出的动画方向是“克制、自然、服务内容，不为了炫技”。

## 9. Imagery

**Current implementation**

- 真实项目图片、Screenshot、Photography、Mockup 与 Cover image 尚未提供或接入，不能推断最终图片风格。
- 首页 `hero-motion.mp4` 与 `hero-poster.jpg` 由脚本生成，画幅 960×540（16:9）；视频采用 `object-fit:cover`，手机更改 `object-position`。
- 人像区为 CSS 渐变、网格和抽象轮廓占位；经历图为渐变、圆轨道与球体占位。没有 `<img>` 作品图片及对应裁切/替代文本规则。
- 经历图桌面常规高度 260px，首卡最小高度 390px；760px 以下常规 240px，480px 以下 220px。这是容器高度，不是批准的项目图片比例。
- 卡片和人物图容器基本为直角；胶囊按钮为 `100px` 圆角，圆按钮与轨道为 `50%`。图片圆角、截图比例及裁切策略尚未确定。

**Approved design**：项目图比例、封面、截图、摄影、Mockup、圆角和裁切规则均未确认。

## 10. Responsive Design

**Current implementation**

- Desktop（>1100px）：全尺寸导航，关于区左右两列，经历区两列并突出首卡，优势区四列。
- Tablet（761–1100px）：header 和区块留白缩小，优势区两列；关于区与经历区仍维持桌面式列结构，需实测阅读体验。
- Mobile（≤760px）：导航改折叠菜单；关于区和经历区改一列；指标与优势先改两列，≤480px 时优势再改单列；部分辅助文字隐藏，首屏视频裁切调整。
- Small mobile（≤480px）：进一步缩小标题、肖像区和卡片视觉。首屏 H1 在这个断点有两条同优先级规则，后一条覆盖前一条。
- `body` 最小宽度 320px；尚无真实设备验收记录。手机布局并非仅整体缩放，但阅读层级和点击目标仍需实测。

**Approved design**：具体断点与布局未确认。Ricky 本次要求单独保证手机端的信息层级和阅读体验。

## 11. Writing & Content Style

**Current implementation**

- 标题和核心描述以中文为主；英文用于 section eyebrow、分类、编号、短标签与页脚。
- Hero 使用经确认的态度文案；About 已采用 DD-008 的正式个人叙事文案。卡片仍采用概述句式，其他区域尚无统一叙述人称规则。
- 经历标题为短句，如“从竞品资料，读懂消费市场。”；描述大致一至两句话，没有统一字数或成果结构。
- 日期同时出现 `2026.07 — 2026.09`、`预计 2027.06 毕业`、`2024—2027`、动态版权年份；格式尚未统一。
- 当前卡片标题并非“项目名称”，也没有独立项目标题格式。文案真实性与公开范围须由 Ricky 确认。

**Approved design**

- Hero 正式主标题为：**在复杂中理解， / 在变化中成长。** 代码中的换行位于逗号之后。
- Hero 正式副标题为：**我试着理解现实如何运转，也试着理解人与世界。**
- Hero 文案不出现阶段性身份或求职型标签。
- About 文案、语气与强调规则遵循 DD-008；不得自行扩写或改写。

### Ricky Content Lens / Internal Content Principles

以下四个问题是长期内部内容判断原则，不一定直接展示给访客。未来 Work、Notes、Now 及其他内容扩展均应参考：

1. **这个内容有没有体现好奇？**
2. **有没有自己的判断？**
3. **有没有容纳复杂性？**
4. **有没有最后记得“人”？**

其他标题语言、混排比例、描述长度、第一人称、日期和项目命名规则仍待确认。

## 12. Interaction Principles

**Current implementation**

- 导航与“返回顶部”通过页内锚点跳转；窄屏菜单用 React state 开合，点击其链接后关闭。
- 联系方式使用 `mailto:` 与 `tel:`。目前没有站外链接，也没有专门的 external-link 图标/新窗口规则。
- 经历卡片有悬停反馈和箭头视觉，却没有点击目标、项目打开方式或返回逻辑。
- HTML 使用平滑滚动；减少动态效果偏好时关闭平滑滚动。
- 有 hover 样式，但未单独定义 `:active`、`:focus-visible` 或菜单的 Escape/点外关闭行为。

**Approved design**：导航、点击反馈、站外链接、项目打开与返回流程的具体规则尚未确认。

## 13. Accessibility

**Current implementation**

- 有主导航 `aria-label`；菜单按钮有 `aria-expanded` 与 `aria-controls`；装饰性 SVG 和首屏视频标有 `aria-hidden`；邮件圆按钮有可读标签。
- 全局未定义专用键盘焦点样式，当前依赖浏览器默认行为；未记录键盘导航实测。
- 当前没有实际作品图片，所以没有作品图片 alt 规则。关于区占位图使用文字 `aria-label`。
- 辅助文字最小可到 8–10px；颜色对比度未经测量，不能断言满足 WCAG。
- CSS 部分处理 `prefers-reduced-motion`，但视频仍自动播放。

**Approved design**：对比度目标、最小字号、焦点样式、图片替代文本与视频减动规则尚未形成经确认的数值规范；实现时仍应满足基本可访问性要求。

## 14. Do / Don't

**Ricky 在本次任务中给出的方向和禁忌**（用于约束后续讨论与实现；不等于当前 CSS 各项参数已获批准）：

| DO | DON'T |
| --- | --- |
| 克制、清晰、有个人性格 | 模板化程序员 Portfolio |
| 强调内容、留白 | 满屏渐变、无意义玻璃拟态 |
| 编辑设计感、高质量排版 | 大量发光效果、过度圆角卡片 |
| 动画自然且服务内容 | 无意义动画 |
| 手机端有独立的信息层级与阅读体验 | 所有内容都塞进 Card；为了“高级”牺牲可读性 |
| 让 Hero 长期表达态度，让 About 进行个人叙事，把 Education 作为 Experience | 在 Hero / About 用学历、毕业年份或求职状态快速证明身份 |
| 逐项确认后再写入 Approved design | 将 Current implementation 自动升级为 Approved design；未经确认确定 Notes / Now 形式 |

## 15. Current Decisions

### Approved design

#### DD-006 — About = Personal Narrative

- About 以个人叙事帮助访问者认识 Ricky，不提供传统简历式教育背景、基本信息或技能汇总。
- 保留左侧大视觉与右侧主体文字的总体布局基线；最终文案与细节等待下一轮确认。
- 原 About 次级身份信息栏不再是 Approved design；当前实现标记为待移除或迁移。
- 不新增折叠式简历信息抽屉。

#### DD-007 — Education as Experience

- `Education is an experience, not a badge.`
- 教育离开 Hero / About 的核心身份层级，未来作为长期 Experience / Journey 时间线中的一段经历，与实习、项目、研究、研究生阶段和工作经历并列。
- 毕业年份只需存在于教育经历的详细信息中，不置于网站最显眼位置。

#### DD-008 — About Narrative

- 上述 Approved copy 是当前 About 的正式文案基线，不得自行扩写或改写。
- Hero 与 About 构成连续叙事：Hero 表达态度，About 解释“理解”的具体含义。
- 页面继续使用左侧视觉与右侧正文结构；核心起句明显但克制，末句仅适度强调，中间正文保持正常阅读节奏。
- `Ricky Content Lens` 的四个问题成为 Work、Notes、Now 与其他内容扩展的长期内部判断原则。

#### Existing approved decisions

- **长期定位**：网站是 Ricky Fu 的 **Personal Digital Home / 个人数字主页**，服务于自我了解、自我表达、成长记录、经历沉淀、思考记录与长期个人主页。求职、学校申请和简历展示只是使用场景。
- **核心气质**：好奇、理性、开放、包容、人文、克制。
- **长期信息架构**：`Hero = Attitude`、`About = Identity`、`Work = Experience`、`Notes = Thinking`、`Now = Present`。
- **Hero 正式文案**：主标题为“在复杂中理解， / 在变化中成长。”；副标题为“我试着理解现实如何运转，也试着理解人与世界。”
- **Hero 内容边界**：不承担简历功能；不放本科生、求职状态、`OPEN TO OPPORTUNITIES`、`2027 GRADUATE`、毕业年份、学历标签或类似阶段性身份信息。
- **About 职责**：按 DD-006 进行个人叙事，让访问者认识 Ricky 这个人；不承担教育背景、基本信息或技能汇总。
- **原型处理原则**：当前仍是 `Prototype / v0.1`，不推倒重做。留白、浅色低饱和蓝灰、大字号标题、中英层级和 About / Experience / Contact 节奏可作为基线继续使用，但不等于全部批准。

### Current implementation and constraints

- About 主体已逐字采用 DD-008 文案；核心起句沿用现有 H3 层级，最后一句以同字号、适度字重与轻微色差强调，没有新增 Card、标签或动画。
- 当前代码仍显示 About 次级身份信息栏；DD-006 已撤销该方案的批准状态。该信息栏需在后续正式 About 设计中移除或迁移，本轮未强化其视觉层级。
- Notes 与 Now 只记录为未来信息架构语义；其最终页面形式尚未决定，当前不新增页面或组件。
- 整体配色、最终字体系统、更多视觉元素与求职型标签均未获批准，不自行添加或替换。
- `Current implementation` 继续只描述代码现状，不因本轮确认部分方向而整体升级为 `Approved design`。
- 以后 Ricky 表示“这是我和 ChatGPT 已经确认的设计决策”时，默认作为候选 `Approved design` 准确记录；只记录其明确范围，不自行延伸未确认内容。
- Ricky 是最终决策者；Ricky 与 ChatGPT 共同决定产品和设计；Codex 主要负责实现，并在代码结构冲突时说明影响。

## 16. Open Design Questions

1. 长期主页的目标受众在不同使用场景中的优先级如何安排？
2. `Ricky Fu`、中文名、`RF / R·F`、现有 `PORTFOLIO` 字样与 favicon 的关系如何统一？
3. 哪些现有色彩、字号、间距、圆角和版式应保留？统一 token 与 spacing scale 如何确定？
4. 是否需要暗色模式？若需要，配色及切换方式如何设计？
5. 真实案例、封面图、肖像和截图的画幅、来源、裁切与展示规则是什么？
6. 项目卡片是否可点，打开详情的方式与返回路径是什么？
7. About 现有身份信息栏迁移到何处，以及后续视觉细节如何处理？在确认前不自行设计新的学历模块。
8. Notes 与 Now 的页面形式、内容模型和导航关系是什么？在确认前保持未实现。
9. 动画程度、视频减动模式、焦点状态、对比度与最低字号如何确定？
10. 手机端哪些信息应保留、重排或简化？需要在什么设备宽度上验收？
