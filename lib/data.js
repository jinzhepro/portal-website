// 从 json.md 解析的数据
const rawData = {
  React: [
    {
      name: "React 官方文档",
      description: "用于构建 Web 和原生交互界面的库。",
      url: "https://zh-hans.react.dev/",
    },
    {
      name: "ReactRouter 官方文档",
      description: "最流行的 React 路由选择。",
      url: "https://reactrouter.com/en/main",
    },
    {
      name: "Redux",
      description: "JS 应用的状态容器，提供可预测的状态管理。",
      url: "https://cn.redux.js.org/",
    },
    {
      name: "MobX",
      description: "简单，可扩展的状态管理。",
      url: "https://zh.mobx.js.org/README.html",
    },
    {
      name: "DvaJS",
      description: "基于 React 和 redux 的轻量级 elm 风格框架。",
      url: "https://dvajs.com/",
    },
    {
      name: "UmiJS",
      description: "插件化的企业级前端应用框架。",
      url: "https://v3.umijs.org/zh-CN",
    },
    {
      name: "React Native",
      description: "使用 React 来创建 Android 和 iOS 的原生应用",
      url: "https://reactnative.cn/",
    },
    {
      name: "expo",
      description: "使用 React 构建原生应用的工具包",
      url: "https://docs.expo.dev/",
    },
  ],
  Vue: [
    {
      name: "Vue3",
      description:
        "渐进式 JavaScript 框架。易学易用，性能出色，适用场景丰富的 Web 前端框架。",
      url: "https://cn.vuejs.org/",
    },
    {
      name: "Vue2",
      description: "渐进式 JavaScript 框架。",
      url: "https://v2.cn.vuejs.org/",
    },
    {
      name: "Vue Router",
      description: "为 Vue.js 提供富有表现力、可配置的、方便的路由。",
      url: "https://router.vuejs.org/zh/",
    },
    {
      name: "Vuex",
      description: "一个专为 Vue.js 应用程序开发的状态管理模式 + 库。",
      url: "https://vuex.vuejs.org/zh/",
    },
    {
      name: "Pinia",
      description: "您将喜欢使用的 Vue 存储库",
      url: "https://pinia.web3doc.top/",
    },
    {
      name: "Nuxt",
      description: "易懂的 Web 框架",
      url: "https://nuxt.com.cn/",
    },
    {
      name: "create-vue",
      description: "启动 Vue 项目的推荐方法。",
      url: "https://github.com/vuejs/create-vue",
    },
    {
      name: "Vue CLI",
      description: "Vue.js 开发的标准工具（现已处于维护模式!）",
      url: "https://cli.vuejs.org/zh/",
    },
  ],
  Nodejs: [
    {
      name: "Nodejs 官方文档",
      description: "Node.js 是一个开源的、跨平台的 JavaScript 运行时环境。",
      url: "https://nodejs.cn/",
    },
    {
      name: "Egg",
      description: "为企业级框架和应用而生。",
      url: "https://www.eggjs.org/zh-CN",
    },
    {
      name: "Express",
      description: "基于 Node.js 平台，快速、开放、极简的 Web 开发框架。",
      url: "https://express.nodejs.cn/",
    },
    {
      name: "Koa",
      description: "Koa -- 基于 Node.js 平台的下一代 web 开发框架。",
      url: "https://koa.bootcss.com/",
    },
    {
      name: "Nest",
      description:
        "用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架。",
      url: "https://docs.nestjs.cn/",
    },
  ],
  微信小程序: [
    {
      name: "微信小程序官网文档",
      description: "微信小程序官网文档",
      url: "https://developers.weixin.qq.com/miniprogram/dev/framework/",
    },
    {
      name: "uni-app",
      description:
        "编写一套代码，可发布到 iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台。",
      url: "https://uniapp.dcloud.net.cn/",
    },
    {
      name: "WePY",
      description: "让小程序支持组件化开发的框架",
      url: "https://wepyjs.github.io/wepy-docs/",
    },
    {
      name: "Taro",
      description: "多端统一开发解决方案",
      url: "https://taro.js.org/",
    },
    {
      name: "WeUI",
      description: "为微信小程序量身定制。",
      url: "https://github.com/weui/weui-design",
    },
  ],
  "UI 库": [
    {
      name: "Ant Design",
      description:
        "助力设计开发者「更灵活」地搭建出「更美」的产品，让用户「快乐工作」~",
      url: "https://ant.design/index-cn",
    },
    {
      name: "Ant Design Pro",
      description: "开箱即用的中台前端/设计解决方案",
      url: "https://pro.ant.design/zh-CN",
    },
    {
      name: "Ant Design Mobile",
      description: "探索移动端 Web 的体验极限",
      url: "https://mobile.ant.design/zh/",
    },
    {
      name: "Element Plus",
      description: "基于 Vue 3，面向设计师和开发者的组件库",
      url: "https://element-plus.org/zh-CN/",
    },
    {
      name: "Element",
      description:
        "为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库",
      url: "https://element.eleme.io/#/zh-CN",
    },
    {
      name: "View Design",
      description:
        "基于 Vue.js 3 的企业级 UI 组件库和中后台系统解决方案，为数万开发者服务。",
      url: "https://www.iviewui.com/",
    },
    {
      name: "Ant Design of Vue",
      description:
        "这里是 Ant Design 的 Vue 实现，开发和服务于企业级后台产品。",
      url: "https://www.antdv.com/docs/vue/introduce-cn/",
    },
    {
      name: "Material UI",
      description: "直观的 React UI 工具。",
      url: "https://mui.com/",
    },
    {
      name: "Vant",
      description: "有赞团队轻量、可定制的移动端 Vue 组件库。",
      url: "https://vant-ui.github.io/vant/#/zh-CN",
    },
    {
      name: "Cube UI",
      description: "滴滴团队基于 Vue.js 实现的精致移动端组件库。",
      url: "https://didi.github.io/cube-ui/#/zh-CN",
    },
    {
      name: "Mint UI",
      description: "饿了么团队基于 Vue.js 的移动端组件库。",
      url: "http://mint-ui.github.io/#!/zh-cn",
    },
    {
      name: "NutUI",
      description: "京东团队的轻量级移动端组件库。",
      url: "https://nutui.jd.com/#/",
    },
    {
      name: "Bootstrap",
      description: "简洁、直观、强悍的前端开发框架，让 web 开发更迅速、简单。",
      url: "https://www.bootcss.com/",
    },
    {
      name: "PaperCSS",
      description: "手绘风格的 css 框架。",
      url: "https://www.getpapercss.com/",
    },
  ],
  "编译&构建&打包": [
    {
      name: "Webpack",
      description: "用于现代 JavaScript 应用程序的静态模块打包工具",
      url: "https://www.webpackjs.com/",
    },
    {
      name: "Vite",
      description: "下一代的前端工具链，为开发提供极速响应",
      url: "https://cn.vitejs.dev/",
    },
    {
      name: "Rollup",
      description: "JavaScript 打包器，将点滴代码编织成错综复杂的程序。",
      url: "https://cn.rollupjs.org/",
    },
    {
      name: "Gulp",
      description: "用自动化构建工具增强你的工作流程！",
      url: "https://www.gulpjs.com.cn/",
    },
    {
      name: "Grunt",
      description: "JavaScript 世界的构建工具",
      url: "https://www.gruntjs.cn/",
    },
    {
      name: "Babel",
      description: "Babel 是一个 JavaScript 编译器。",
      url: "https://www.babeljs.cn/",
    },
  ],
  框架类库: [
    {
      name: "single-spa",
      description: "前端微服务的 javascript 框架",
      url: "https://zh-hans.single-spa.js.org/",
    },
    {
      name: "qiankun",
      description: "可能是你见过最完善的微前端解决方案",
      url: "https://qiankun.umijs.org/zh",
    },
    {
      name: "无界",
      description: "极致的微前端框架。",
      url: "https://wujie-micro.github.io/doc/",
    },
    {
      name: "Flutter",
      description: "为任何设备构建应用程序",
      url: "https://flutter.dev/",
    },
    {
      name: "Electron",
      description: "使用 JavaScript、HTML 和 CSS 构建跨平台桌面应用程序",
      url: "https://www.electronjs.org/zh/",
    },
    {
      name: "Angular",
      description: "构建未来的 Web 开发框架",
      url: "https://angular.cn/",
    },
    {
      name: "React Native",
      description: "一次学习，随处书写。",
      url: "https://reactnative.dev/",
    },
    {
      name: "jQuery",
      description: "Query 是一个快速、小巧、功能丰富的 JavaScript 库。",
      url: "https://jquery.com/",
    },
    {
      name: "Zepto",
      description:
        "Zepto 是一个极简 JavaScript 库，用于现代浏览器，具有大部分与 jquery 兼容的 API。",
      url: "https://zeptojs.com/",
    },
    {
      name: "Swiper",
      description:
        "Swiper 是纯 javascript 打造的滑动特效插件，面向手机、平板电脑等移动终端。",
      url: "https://swiper.com.cn/",
    },
    {
      name: "iSlider",
      description:
        "iSlider 是一个表现出众，无任何插件依赖的手机平台 javascript 滑动组件。它能够处理任何元素，例如图片或者 DOM 元素。",
      url: "http://eux.baidu.com/iSlider/demo/index_chinese.html",
    },
  ],
  JavaScript: [
    {
      name: "MDN",
      description: "最权威的 web 技术查询。",
      url: "https://developer.mozilla.org/zh-CN/",
    },
    {
      name: "ECMA-262",
      description: "js 标准查询。",
      url: "https://tc39.es/ecma262/",
    },
    {
      name: "阮一峰 ES6 入门教程",
      description:
        "《ECMAScript 6 入门教程》是一本开源的 JavaScript 语言教程，全面介绍 ECMAScript 6 新引入的语法特性。",
      url: "https://es6.ruanyifeng.com/",
    },
    {
      name: "廖雪峰 JavaScript 教程",
      description: "这是小白的零基础 JavaScript 全栈教程。",
      url: "https://www.liaoxuefeng.com/wiki/1022910821149312",
    },
    {
      name: "现代 JavaScript 教程",
      description:
        "以最新的 JavaScript 标准为基准。通过简单但足够详细的内容，为你讲解从基础到高阶的 JavaScript 相关知识。",
      url: "https://zh.javascript.info/",
    },
    {
      name: "freeCodeCamp",
      description: "交互式 web 技术教程。",
      url: "https://www.freecodecamp.org/chinese/learn",
    },
    {
      name: "JavaScript 秘密花园",
      description: "深入 JavaScript 某些特性。",
      url: "http://shamansir.github.io/JavaScript-Garden/zh/",
    },
    {
      name: "JavaScript 开发者应懂的 33 个概念",
      description: "为了帮助开发者掌握 JavaScript 概念而创立的。",
      url: "https://github.com/stephentian/33-js-concepts/blob/master/README.md",
    },
    {
      name: "函数式编程",
      description: "为了帮助开发者掌握 JavaScript 概念而创立的。",
      url: "https://llh911001.gitbook.io/mostly-adequate-guide-chinese/",
    },
    {
      name: "TypeScript",
      description: "JavaScript 的超集。",
      url: "https://www.tslang.cn/",
    },
  ],
  CSS: [
    {
      name: "Sass",
      description: "世界上最成熟、最稳定、最强大的专业级 CSS 扩展语言！",
      url: "https://www.sass.hk/",
    },
    {
      name: "Less",
      description: "它是 CSS，只是多了一点东西。",
      url: "https://less.nodejs.cn/",
    },
    {
      name: "PostCSS",
      description: "是一个用 JavaScript 工具和插件转换 CSS 代码的工具。",
      url: "https://www.postcss.com.cn/",
    },
    {
      name: "stylus",
      description: "富于表现力、动态的、健壮的 CSS。",
      url: "https://www.stylus-lang.cn/",
    },
    {
      name: "Animate.css",
      description: "CSS 动画。",
      url: "https://animate.style/",
    },
    {
      name: "Autoprefixer",
      description:
        "Autoprefixer 是一个 PostCSS 插件，它可以解析你的 CSS 并添加供应商前缀。",
      url: "https://autoprefixer.github.io/",
    },
  ],
  可视化: [
    {
      name: "ECharts",
      description: "一个基于 JavaScript 的开源可视化图表库",
      url: "https://echarts.apache.org/zh/index.html",
    },
    {
      name: "Three.js",
      description: "Web3D 可视化",
      url: "https://threejs.org/",
    },
    {
      name: "AntV",
      description: "蚂蚁集团全新一代数据可视化解决方案。",
      url: "https://antv.vision/",
    },
    {
      name: "DataV",
      description: "Vue 大屏数据展示组件库。",
      url: "http://datav.jiaminghi.com/",
    },
  ],
  "AI 工具": [
    {
      name: "AI 工具集",
      description: "1000+ AI 工具集合，国内外 AI 工具集导航大全",
      url: "https://ai-bot.cn/",
    },
    {
      name: "ChatGPT",
      description: "世界上最成熟、最强大的对话交互 AI 模型",
      url: "https://chat.openai.com/",
    },
    {
      name: "ChatGPT 镜像站点",
      description: "这儿为你准备了众多免费好用的 ChatGPT 镜像站点",
      url: "https://github.com/xx025/carrot",
    },
    {
      name: "chat-pdf",
      description: "上传一个 PDF 文件，并询问有关它的任何问题。",
      url: "https://damngood.tools/tools/chat-pdf",
    },
    {
      name: "AmyMind",
      description: "打开即用，思维导图的基本素养",
      url: "https://amymind.com/",
    },
    {
      name: "写作猫",
      description:
        "集 AI 写作、多人协作、文本校对、改写润色、自动配图等功能为一体",
      url: "https://xiezuocat.com/",
    },
    {
      name: "StockAI.Trade",
      description: "基于 ChatGPT 的 AI 选股工具",
      url: "https://stockai.trade/",
    },
  ],
  "文字&图标": [
    {
      name: "iconFont",
      description: "阿里妈妈 MUX 倾力打造的矢量图标管理、交流平台。",
      url: "https://www.iconfont.cn/",
    },
    {
      name: "Bootstrap 官方图标库",
      description: "包含 1800 多个图标的免费、高质量的开源图标库",
      url: "https://icons.bootcss.com/",
    },
    {
      name: "Font Awesome",
      description: "网络字体工具包",
      url: "https://fontawesome.com.cn/",
    },
    {
      name: "EMOJI 中文网",
      description: "EMOJI 中文网",
      url: "https://www.emojiall.com/zh-hans",
    },
  ],
  "图片&视频处理": [
    {
      name: "TinyPng",
      description: "智能 WebP, PNG 和 JPEG 压缩",
      url: "https://tinypng.com/",
    },
    {
      name: "Final2x",
      description: "将图像超分辨率到任意大小",
      url: "https://github.com/Tohrusky/Final2x",
    },
    { name: "SM.MS", description: "免费图床工具", url: "https://sm.ms/" },
    {
      name: "HandBrake",
      description: "转换几乎任何格式的视频",
      url: "https://github.com/HandBrake/HandBrake",
    },
    {
      name: "HiPDF",
      description: "一站式 PDF 转换解决方案",
      url: "https://www.hipdf.cn/all-tools",
    },
  ],
  "测试&优化工具": [
    {
      name: "vConsole",
      description: "一个轻量、可拓展、针对手机网页的前端开发者调试面板。",
      url: "https://github.com/Tencent/vConsole/blob/dev/README_CN.md",
    },
    {
      name: "PageSpeed Insights",
      description: "使您的网页在所有设备上都能快速加载",
      url: "https://pagespeed.web.dev/",
    },
    {
      name: "Responsinator",
      description: "主流移动设备显示效果。",
      url: "http://www.responsinator.com/",
    },
    {
      name: "Can I use",
      description: "查询浏览器支持的现代 web 技术",
      url: "https://caniuse.com/",
    },
    {
      name: "Optimizer",
      description: "Windows 平台的优化器",
      url: "https://github.com/hellzerg/optimizer",
    },
  ],
  大牛博客: [
    {
      name: "阮一峰的个人网站",
      description: "阮一峰的个人网站",
      url: "http://www.ruanyifeng.com/",
    },
    { name: "网道", description: "网道教程", url: "https://wangdoc.com/" },
    {
      name: "张鑫旭的个人主页",
      description: "张鑫旭的个人主页",
      url: "https://www.zhangxinxu.com/",
    },
    {
      name: "周爱民的博客",
      description: "周爱民的博客",
      url: "https://aimingoo.github.io/",
    },
    {
      name: "技术胖的博客",
      description: "15 年开发经验，目前主做前端开发",
      url: "https://jspang.com/",
    },
  ],
  内容管理: [
    {
      name: "VitePress",
      description: "简单、强大、快速。满足您一直想要的现代 SSG 框架。",
      url: "https://vitepress.dev/",
    },
    {
      name: "VuePress",
      description: "Vue 驱动的静态网站生成器",
      url: "https://vuepress.vuejs.org/",
    },
    {
      name: "docsify",
      description: "一个神奇的文档网站生成器。",
      url: "https://docsify.js.org/#/zh-cn/",
    },
    {
      name: "Jekyll",
      description: "将纯文本转化为静态网站和博客。",
      url: "https://www.jekyll.com.cn/",
    },
  ],
};

// 转换数据格式
export function generateResourceData() {
  const categories = [];
  const items = [];

  Object.entries(rawData).forEach(([categoryName, categoryItems], index) => {
    // 添加分类
    categories.push({
      id: `category-${index}`,
      name: categoryName,
      count: categoryItems.length,
    });

    // 添加资源项
    categoryItems.forEach((item, itemIndex) => {
      items.push({
        id: `${categoryName}-${itemIndex}`,
        name: item.name,
        description: item.description,
        url: item.url,
        category: categoryName,
      });
    });
  });

  return { categories, items };
}

// 获取所有资源数据
export function getAllResources() {
  return generateResourceData();
}

// 根据分类获取资源
export function getResourcesByCategory(category) {
  const data = generateResourceData();
  return data.items.filter((item) => item.category === category);
}

// 搜索资源
export function searchResources(query, category) {
  const data = generateResourceData();
  let filteredItems = data.items;

  // 按分类过滤
  if (category && category !== "all") {
    filteredItems = filteredItems.filter((item) => item.category === category);
  }

  // 按搜索词过滤
  if (query.trim()) {
    const searchTerm = query.toLowerCase().trim();
    filteredItems = filteredItems.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm)
    );
  }

  return filteredItems;
}

// 获取分类统计信息
export function getCategoryStats() {
  const data = generateResourceData();
  return data.categories;
}
