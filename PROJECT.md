# 项目长期上下文｜Ricky Fu 个人网页

更新日期：2026-09-23。本文记录可从当前代码确认的状态；尚未由本人确认的内容会明确标为“待确认”。每次较大的功能、页面、设计或架构修改完成后，同步更新本文，并按需更新 [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)、[DECISIONS.md](./DECISIONS.md)、[CHANGELOG.md](./CHANGELOG.md) 和 [TODO.md](./TODO.md)。

> Product and visual design decisions are made collaboratively by Ricky and ChatGPT. Codex serves primarily as the engineering implementation layer. `DESIGN_SYSTEM.md` is the source of truth for approved visual and interaction decisions.

## 项目目标

建立 Ricky Fu 的 **Personal Digital Home / 个人数字主页**，用于自我了解、自我表达、成长记录、经历沉淀、思考记录与长期个人主页。求职、学校申请和简历展示是其中的使用场景，不是网站核心定义。

## 网站定位

当前是中文为主、英文标签辅助的单页 `Prototype / v0.1`。已确认的长期信息架构逻辑是 `Hero = Attitude`、`About = Identity`、`Work = Experience`、`Notes = Thinking`、`Now = Present`。DD-006 明确 About 是个人叙事，DD-007 将教育定义为 Experience / Journey，DD-008 确认了 About 正式文案及其与 Hero 的连续叙事；现有代码暂时实现 Hero、About、Work、优势与 Contact，Notes、Now 和长期时间线形式尚未确定。页面尚未形成带过程、成果和佐证材料的完整案例集。当前生产环境由 Cloudflare Pages 托管：<https://ricky-etq.pages.dev>。

## 目标用户

- 招聘方与潜在实习或工作合作方：快速判断背景、相关经验、能力和联系方式。
- 硕士项目招生相关人员：了解学业背景、兴趣方向和实践经历。
- 其他希望了解或联系 Ricky Fu 的访问者。

具体优先人群、申请方向和转化目标仍待本人确认，不应仅凭上述推断扩写文案。

## 当前技术栈

| 层面 | 当前实现 |
| --- | --- |
| 前端 | React 19、React DOM 19，JavaScript/JSX |
| 构建与开发 | Vite 8、`@vitejs/plugin-react`、npm 与 `package-lock.json` |
| 样式 | 原生 CSS，集中在 `src/App.css` 与 `src/index.css` |
| 代码检查 | Oxlint；命令为 `npm run lint` |
| 内容 | `src/App.jsx` 内的 `profile`、`experiences`、`strengths` 常量及页面 JSX；无 CMS 或后端 |
| 媒体 | `public/` 内的本地 MP4、JPG、SVG；`scripts/generate_hero.py` 可生成首页视频与海报帧 |
| 路由和测试 | 单页锚点导航；未发现路由库、自动化测试脚本或测试文件 |

项目代码根目录是本文件所在的 `personal-site/`。`node_modules/` 与 `dist/` 是本地生成目录，已被 `.gitignore` 排除。

## 页面结构

1. 顶部导航：品牌标记、关于我、精选经历、个人优势、联系入口；窄屏显示菜单按钮。
2. 首页 `#top`：视频背景、长期态度文案、查看经历与了解更多入口；不承载求职、学历或毕业阶段标签。
3. 关于我 `#about`：左侧照片占位视觉，右侧为 DD-008 正式个人叙事；学校/专业/阶段/预计毕业时间/城市/邮箱次级信息栏和三项数字指标仍在当前代码中，其中身份信息栏已被 DD-006 标记为待移除或迁移。
4. 精选经历 `#work`：两段实习和一张学历与技能卡片；目前只有概述，没有案例详情或成果链接。
5. 个人优势 `#strengths`：研究与洞察、数据整理、跨领域视角、沟通与表达四张卡片。
6. 联系 `#contact`：邮箱、电话、所在地、返回顶部。

## 设计语言

- 以下只是当前代码的视觉现状，尚非最终批准的设计规范；完整现状与批准状态见 [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)。
- 浅灰白背景、深灰文字和低饱和蓝色强调，整体偏理性、清爽、留白较多。
- 大字号中文标题与小号英文标签并用；圆形轨道、网格、渐变、首屏抽象循环视频构成主要视觉。
- 页面最大版心约 1700px；CSS 在 1100px、760px、480px 设置响应式断点。
- 关于区人物图和经历卡片视觉仍为 CSS 占位设计。真实肖像、案例图及可验证成果尚未加入。

## 已完成内容与完成度

- 单页主要区块、锚点导航、移动端菜单、邮箱和电话链接已实现。
- 首页视频与静态海报帧已放入本地资源，视频生成脚本可供后续重建。
- 页面描述、标题和 favicon 已设置；构建与 Oxlint 命令可运行。
- 截至 2026-09-23，`npm run build` 与 `npm run lint` 均通过。
- GitHub 仓库已连接 Cloudflare Pages；`main` 自动生产部署和非生产分支 Preview Deployments 已启用，构建命令为 `npm run build`，输出目录为 `dist`。
- **完成度判断**：已发布的展示基础版；内容证据、案例深度与实际设备验收尚未完成，不能视为最终作品集。

## 当前正在进行的内容

网站基础版已部署到 Cloudflare Pages，并接通 GitHub 自动部署。页面设计与内容未因部署而调整；现有 About 低层级身份信息栏继续等待后续迁移。

## 下一步计划

1. 核对公开信息、三项数字指标、经历时间与结果表述，并确认手机号等联系方式的公开范围。
2. 补充至少一项可公开的真实案例材料：问题、本人职责、方法、结果、可展示图片或脱敏证据；据此决定是否增加案例详情。
3. 由 Ricky 与 ChatGPT 逐项确认后，再决定 Notes / Now 的页面形式、最终配色与字体系统。
4. 做桌面和手机实测，处理内容、交互与动效问题；需要品牌域名时再配置 Cloudflare Pages 自定义域名。

## 已确认的重要决策

- 协作采用“代码仓库 + 项目上下文文档”模式；Ricky 是所有者与最终决策者，Ricky 和 ChatGPT 共同承担产品与设计判断，Codex 主要承担工程实现。具体流程见 [DECISIONS.md](./DECISIONS.md)。
- `DESIGN_SYSTEM.md` 区分 `Current implementation` 与 `Approved design`；只有 Ricky 明确确认的具体设计进入后者，代码实现优先遵循后者。
- 网站长期定位是 Personal Digital Home；核心气质、信息架构、Hero 文案与内容边界已获批准。DD-006 与 DD-008 规定 About 的个人叙事职责及正式文案，DD-007 规定教育作为 Experience；此前 About supporting information 方案已失效。
- 本轮保留现有单页架构与视觉，不做大规模改版。除明确批准的项目外，现有技术与视觉选择仍只属于代码现状。
- 代码托管使用 GitHub 仓库 `rickyffff227-sys/Ricky`；生产部署使用 Cloudflare Pages，`main` 为生产分支，其他分支生成预览部署。
- 外部建议（包括被标记为“ChatGPT 给出的建议”）须先对照当前代码和本文评估，再决定是否实施；影响已有架构或设计时先说明影响。

## 待确认问题

- 长期主页的目标受众优先级是什么？求职、学校申请是否需要不同入口？
- `04` 段跨领域实践、`03` 个出口业务目的地、`01` 项全国性竞赛奖项及各项经历表述，哪些可以公开，是否有可核对的依据？
- 是否公开手机号？邮箱是否继续作为唯一主要联系入口？
- 是否提供本人照片、案例图片、可公开成果、简历下载或外部资料链接？
- 是否需要自定义域名与英文版？

## 已知 Bug / 技术债

- 三张“精选经历”卡片右下角使用箭头和悬停反馈，但整张卡片不是链接，也没有详情页；可能让访问者误以为可以点击。
- 首页视频会自动播放。CSS 对系统减少动态效果偏好只关闭动画与过渡，未停止视频播放。
- 页面数字指标及“公共传播、外贸业务”等经历在当前展示卡片中没有对应细节或证据，需在发布前核对；此处记录为内容风险，不断言事实错误。
- 页面内容与结构集中在一个 `App.jsx` 中；新增案例、多受众版本或多语言时需要重新评估拆分方式。
- 未发现自动化测试或实际浏览器验收记录；构建与 lint 通过不代表各设备视觉和交互已验收。

## 最近一次重要修改

2026-09-23：将 GitHub 仓库连接到 Cloudflare Pages，发布 `ricky-etq.pages.dev`，并启用 `main` 自动生产部署与非生产分支 Preview Deployments；未修改页面设计或内容。后续明显改动记录在 [CHANGELOG.md](./CHANGELOG.md)。

## 协作与维护约定

1. 新任务开始前先读本文与 `DESIGN_SYSTEM.md`，并用代码核对其中可能变化的事实；聊天记录仅作为补充。
2. 对 ChatGPT 建议或其他外部方案，先说明与当前实现的适配性、收益及对架构/设计的影响；有冲突时以代码和证据为依据，不预设哪一方正确。
3. 完成较大功能、页面、设计或架构改动后更新本文；获确认的视觉与交互决策记入 `DESIGN_SYSTEM.md` 的 `Approved design`，重要取舍记入 `DECISIONS.md`，明显网站改动记入 `CHANGELOG.md`，待办同步到 `TODO.md`。
4. README 只维护运行、构建和部署说明。尽量小步提交，每条 Git commit message 写清修改目的。
