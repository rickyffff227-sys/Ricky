# Ricky Fu · Personal Digital Home

基于 React + Vite 的个人数字主页原型，用于记录经历、思考、成长与当下。求职、学校申请和简历展示是其中的使用场景。

## 本地运行

```bash
npm ci
npm run dev
```

打开终端显示的本地地址（Vite 默认 `http://localhost:5173/`）。

## 检查与构建

```bash
npm run lint
npm run build
npm run preview
```

`npm run build` 生成 `dist/`。部署到静态网站服务时以 `dist/` 为发布目录；本项目目前没有绑定具体托管平台或域名。

## 项目文档

- [PROJECT.md](./PROJECT.md)：目标、当前状态和长期协作上下文。
- [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)：当前设计实现与已批准设计的区分。
- [DECISIONS.md](./DECISIONS.md)：重要取舍及理由。
- [CHANGELOG.md](./CHANGELOG.md)：明显改动记录。
- [TODO.md](./TODO.md)：按优先级维护的待办。

首页本地媒体位于 `public/`。如需重建视频和海报帧，运行 `scripts/generate_hero.py`；脚本另需 Python 的 `numpy`、`Pillow`、`imageio-ffmpeg`。
