# AGENTS.md - Architect Mode

This file provides guidance to agents when working with code in this repository.

## 项目架构规则 (非显而易见)

### 核心架构

- 基于 Next.js 14 App Router 的单页应用
- 数据驱动架构：所有资源数据集中管理
- 组件化设计：高度模块化的 React 组件

### 数据流架构

- 数据源：`lib/data.js` 中的 `rawData` 对象
- 数据处理：`generateResourceData()` 函数转换数据格式
- 状态管理：React useState 和 useMemo 管理组件状态
- 搜索和筛选：在客户端进行，无需后端 API

### 组件架构

- 页面级组件：`app/page.jsx` (主页面)
- 布局组件：`app/layout.jsx` (根布局)
- 功能组件：Header, SearchBox, CategoryFilter, ResourceCard
- 工具函数：`lib/utils.js` 提供通用功能

### 样式架构

- Tailwind CSS 原子化样式系统
- 自定义主题配置在 `tailwind.config.js`
- 动态样式：分类颜色和图标通过函数生成
- 响应式设计：移动优先的断点系统

### 扩展性考虑

- 添加新分类：需修改数据文件和工具函数
- 添加新功能：遵循现有组件模式
- 样式扩展：使用 Tailwind 的扩展机制
- 性能优化：利用 Next.js 的内置优化
