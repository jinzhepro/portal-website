# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## 项目特定信息

### 构建命令

- `npm run dev` - 启动开发服务器 (Next.js 14)
- `npm run build` - 构建生产版本
- `npm run start` - 启动生产服务器
- `npm run lint` - 运行 ESLint 检查

### 数据管理

- 所有资源数据存储在 `lib/data.js` 中的 `rawData` 对象
- 添加新资源：直接编辑 `rawData` 对象，格式为 `{name, description, url}`
- 添加新分类：在 `rawData` 中添加新键，并在 `lib/utils.js` 的 `getCategoryColor` 和 `getCategoryIcon` 函数中添加对应样式

### 代码风格

- 使用 `@/*` 路径别名指向项目根目录 (在 jsconfig.json 中配置)
- 组件使用 `.jsx` 扩展名 (非 `.tsx`)
- 使用 `cn()` 工具函数合并 Tailwind CSS 类名 (来自 `lib/utils.js`)
- 搜索功能使用 300ms 防抖 (在 `components/SearchBox.jsx` 中实现)

### 项目结构

- 使用 Next.js 14 App Router (非 Pages Router)
- 所有页面组件必须添加 `"use client";` 指令 (在 `app/page.jsx` 中)
- 组件位于 `components/` 目录，工具函数位于 `lib/` 目录

### 样式系统

- 使用 Tailwind CSS 自定义颜色主题 (在 `tailwind.config.js` 中定义)
- 分类颜色通过 `getCategoryColor()` 函数动态生成
- 使用渐变背景和悬停效果增强用户体验
- 响应式设计：移动端单列，平板双列，桌面三列布局

### 特殊约定

- 资源卡片使用 `line-clamp` 类限制文本行数
- 搜索支持名称、描述和分类的模糊匹配
- 分类过滤器显示每个分类的资源数量
- 所有外部链接使用 `target="_blank" rel="noopener noreferrer"`
