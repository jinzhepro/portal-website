# AGENTS.md - Debug Mode

This file provides guidance to agents when working with code in this repository.

## 项目调试规则 (非显而易见)

### 开发服务器调试

- 开发服务器运行在 http://localhost:3000
- 使用 `npm run dev` 启动，支持热重载
- Next.js 14 App Router 的调试信息在终端中显示

### 搜索功能调试

- 搜索使用 300ms 防抖，调试时注意延迟
- 搜索支持名称、描述和分类的模糊匹配
- 搜索不区分大小写

### 数据调试

- 所有数据在 `lib/data.js` 的 `rawData` 对象中
- 使用 `getAllResources()` 函数获取处理后的数据
- 分类统计通过 `getCategoryStats()` 函数获取

### 样式调试

- 使用 Tailwind CSS 类名，检查 `tailwind.config.js` 配置
- 分类颜色动态生成，检查 `getCategoryColor()` 函数
- 响应式布局断点：sm(640px), md(768px), lg(1024px)

### 常见问题

- 如果路径别名 `@/*` 不工作，检查 jsconfig.json 配置
- 组件必须添加 `"use client";` 指令，否则会报错
- 外部链接必须包含 `target="_blank" rel="noopener noreferrer"`
