# AGENTS.md - Ask Mode

This file provides guidance to agents when working with code in this repository.

## 项目文档规则 (非显而易见)

### 项目概述

- 这是一个开发者资源导航网站，基于 Next.js 14 构建
- 包含 25 个分类的开发资源，共 200+ 个精选资源
- 支持按名称、描述、分类进行搜索和筛选

### 数据结构说明

- 资源数据存储在 `lib/data.js` 的 `rawData` 对象中
- 每个资源包含：`name`(名称), `description`(描述), `url`(链接)
- 分类通过对象键组织，每个分类包含资源数组

### 功能特性

- 搜索功能：支持模糊匹配，300ms 防抖
- 分类筛选：显示每个分类的资源数量
- 响应式设计：移动端单列，平板双列，桌面三列
- 资源卡片：包含分类标签、描述和访问链接

### 技术栈细节

- Next.js 14 App Router (非 Pages Router)
- Tailwind CSS 自定义主题
- Lucide React 图标库
- 使用 `@/*` 路径别名

### 项目结构说明

- `app/` - Next.js App Router 页面
- `components/` - React 组件
- `lib/` - 工具函数和数据
- 所有组件使用 `.jsx` 扩展名
