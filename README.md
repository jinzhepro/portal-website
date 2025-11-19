# 开发者资源导航

一个现代化的全栈开发资源导航网站，基于 Next.js 14 构建，提供分类浏览和搜索功能。

## 功能特性

- 🎨 **现代化设计** - 使用 Tailwind CSS 打造美观的界面
- 🔍 **智能搜索** - 支持按名称、描述、分类搜索
- 📂 **分类浏览** - 25 个精心分类的开发资源
- 📱 **响应式设计** - 完美适配桌面和移动设备
- ⚡ **快速加载** - 基于 Next.js 14 的性能优化
- 🎯 **用户体验** - 流畅的动画和交互效果

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: JavaScript
- **样式**: Tailwind CSS
- **图标**: Lucide React
- **工具**: ESLint, PostCSS

## 项目结构

```
developer-portal/
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.jsx         # 根布局
│   └── page.jsx           # 主页面
├── components/            # React 组件
│   ├── CategoryFilter.jsx # 分类过滤器
│   ├── Header.jsx         # 页面头部
│   ├── ResourceCard.jsx   # 资源卡片
│   └── SearchBox.jsx      # 搜索框
├── lib/                   # 工具库
│   ├── data.js           # 数据处理
│   └── utils.js          # 工具函数
└── README.md
```

## 资源分类

网站包含以下 25 个分类的开发资源：

### 前端开发

1. **React** - React 生态系统相关资源
2. **Vue** - Vue.js 框架及相关工具
3. **UI 库** - 各类 UI 组件库
4. **JavaScript** - JavaScript 学习资源
5. **CSS** - CSS 预处理器和工具
6. **可视化** - 数据可视化库
7. **文字&图标** - 字体和图标资源
8. **图片&视频处理** - 媒体处理工具

### 后端与全栈

9. **Nodejs** - Node.js 后端开发资源
10. **后端技术** - 各种后端框架和工具
11. **数据库** - 数据库相关资源
12. **微信小程序** - 小程序开发框架和工具

### 开发工具

13. **编译&构建&打包** - 构建工具和打包器
14. **框架类库** - 其他前端框架和库
15. **测试&优化工具** - 测试和性能优化工具
16. **AI 工具** - AI 相关开发工具
17. **DevOps 工具** - DevOps 相关工具和平台

### 平台与社区

18. **学习平台** - 在线学习平台和课程
19. **社区论坛** - 开发者社区和论坛
20. **代码托管** - 代码托管和版本控制平台
21. **部署平台** - 应用部署和托管平台
22. **性能监控** - 性能监控和分析工具
23. **设计资源** - 设计相关资源和工具
24. **大牛博客** - 知名开发者博客
25. **内容管理** - 文档和内容管理工具

## 开始使用

### 环境要求

- Node.js 18.0 或更高版本
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
npm start
```

## 数据管理

所有资源数据存储在 `lib/data.js` 文件中，采用结构化的 JSON 格式。要添加新资源或修改现有资源，只需编辑该文件即可。

### 添加新资源

```javascript
{
  name: "资源名称",
  description: "资源描述",
  url: "https://example.com"
}
```

### 添加新分类

在 `rawData` 对象中添加新的分类键值对，并在 `getCategoryColor` 和 `getCategoryIcon` 函数中添加对应的样式和图标。

## 自定义样式

项目使用 Tailwind CSS，可以通过修改以下文件来自定义样式：

- `tailwind.config.js` - Tailwind 配置
- `app/globals.css` - 全局样式和组件类

## 部署

### Vercel (推荐)

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 自动部署完成

### 其他平台

```bash
npm run build
```

将 `.next` 目录部署到任何支持 Node.js 的平台。

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目。

## 许可证

MIT License
