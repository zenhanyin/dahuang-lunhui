# 项目清单

## 基础信息

- 项目名：大荒轮回录
- 英文名：Dahuang: Wheel of Rebirth
- 项目类型：网页文字 RPG / 轮回模拟器
- 主色：深墨绿 `#121510`
- 强调色：旧金 `#d8b35f`
- 当前发布目标：
  - ChatGPT Sites：`https://lunhui-wendao-game.zenhanyin.chatgpt.site`
  - GitHub Pages：由 `gh-pages` 分支发布

## 新增品牌资源

- `assets/app-icon-source.png`：原始生成图标
- `assets/app-icon-512.png`：PWA / 高清图标
- `assets/app-icon-512.webp`：压缩预览图标
- `assets/app-icon-192.png`：移动端安装图标
- `assets/app-icon-192.webp`：压缩预览图标
- `assets/app-icon-64.png`：中尺寸图标
- `assets/app-icon-32.png`：favicon
- `site.webmanifest`：Web App Manifest

## 页面入口

- `index.html`：主入口
- `text-adventure.html`：本地文件入口兼容
- `site.webmanifest`：应用清单

## 数据与配置

- `story-config.xlsx`：剧情配置源
- `story-config.js`：运行时剧情配置
- `drizzle/0001_create_analytics_events.sql`：统计表结构

## 构建与发布

- `build-site.js`：Sites Worker 打包脚本
- `package.json`：构建命令与依赖声明
- `.openai/hosting.json`：Sites 项目绑定配置

## 检查脚本

- `tools/check-story-text-quality.js`
- `tools/audit-runtime-visual-consistency.js`
- `tools/story-flow-check.js`
- `tools/risk-check.cjs`
- `tools/excel-to-story-js.py`

## 发布纪律

- 开发只提交到 `main`。
- GitHub Pages 只从稳定 `main` 同步到 `gh-pages`。
- ChatGPT Sites 只推 Sites 内部源仓库。
- 不提交临时包、`dist/`、测试输出或密钥。
