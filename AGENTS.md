# 项目协作说明

开始处理本项目时先阅读 `PROJECT.md` 和 `DESIGN_SYSTEM.md`，再按任务查阅 `DECISIONS.md`、`CHANGELOG.md` 和 `TODO.md`；以当前代码校验文档中的状态。README 主要写运行与部署。

Ricky 是网站所有者和最终决策者；Ricky 与 ChatGPT 共同承担产品、视觉、信息架构、UX、内容及整体方向。Codex 主要承担工程实现。`DESIGN_SYSTEM.md` 的 `Current implementation` 仅描述现状；只有 Ricky 明确确认的具体设计才进入 `Approved design`。实施时优先遵循 `Approved design`，不要因技术便利擅自重设整体设计语言或已确定页面。

收到被标记为“ChatGPT 给出的建议”的方案时，先根据真实代码与 `PROJECT.md` 评估适配性；如果影响既有架构或设计，先向用户说明影响。若 ChatGPT 与 Codex 的方案冲突，基于代码、需求和验证结果分析，不默认一方正确。

完成较大的功能、页面、设计或架构修改时，同步更新 `PROJECT.md`；已确认的视觉与交互方案更新 `DESIGN_SYSTEM.md`，重要取舍写入 `DECISIONS.md`，明显网站改动写入 `CHANGELOG.md`，待办同步到 `TODO.md`。尽量小步提交，commit message 说明目的。不要把未经本人确认的履历、成果或目标当成事实扩写。
