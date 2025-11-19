# AGENTS.md - Code Mode

This file provides guidance to agents when working with code in this repository.

## 项目编码规则 (非显而易见)

### 数据管理

- 所有资源数据必须存储在 `lib/data.js` 的 `rawData` 对象中
- 添加新分类时，必须同时在 `lib/utils.js` 的 `getCategoryColor()` 和 `getCategoryIcon()` 函数中添加对应样式
- 资源对象必须包含三个字段：`name`, `description`, `url`

### 组件开发

- 所有页面组件必须添加 `"use client";` 指令 (Next.js 14 App Router 要求)
- 使用 `cn()` 工具函数合并 Tailwind CSS 类名，不要直接使用 clsx 或 tailwind-merge
- 搜索功能必须使用 300ms 防抖 (使用 `lib/utils.js` 中的 `debounce` 函数)

### 样式约定

- 分类颜色必须通过 `getCategoryColor()` 函数动态生成，不要硬编码颜色
- 使用 `line-clamp` 类限制文本行数 (资源卡片标题用 `line-clamp-1`，描述用 `line-clamp-3`)
- 所有外部链接必须包含 `target="_blank" rel="noopener noreferrer"`

### 路径别名

- 使用 `@/*` 路径别名指向项目根目录 (在 jsconfig.json 中配置)
- 示例：`import { cn } from "@/lib/utils"` 而不是 `import { cn } from "../../lib/utils"`

### 响应式设计

- 移动端：单列布局 (`grid-cols-1`)
- 平板：双列布局 (`md:grid-cols-2`)
- 桌面：三列布局 (`lg:grid-cols-3`)
