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
  后端技术: [
    {
      name: "Django",
      description: "Python高级Web框架，鼓励快速开发和干净、实用的设计",
      url: "https://www.djangoproject.com/",
    },
    {
      name: "Flask",
      description: "Python轻量级Web框架，简单易用且扩展性强",
      url: "https://flask.palletsprojects.com/",
    },
    {
      name: "Spring Boot",
      description: "Java企业级框架，简化Spring应用的初始搭建和开发过程",
      url: "https://spring.io/projects/spring-boot",
    },
    {
      name: "Laravel",
      description: "PHP现代Web框架，表达力强、优雅的语法",
      url: "https://laravel.com/",
    },
    {
      name: "Ruby on Rails",
      description: "Ruby Web框架，遵循约定优于配置的原则",
      url: "https://rubyonrails.org/",
    },
    {
      name: "ASP.NET Core",
      description: "微软跨平台框架，用于构建现代化的云原生Web应用",
      url: "https://dotnet.microsoft.com/apps/aspnet",
    },
    {
      name: "FastAPI",
      description: "现代Python API框架，高性能、易于学习、快速编码",
      url: "https://fastapi.tiangolo.com/",
    },
    {
      name: "GraphQL",
      description: "API查询语言和运行时，用于构建灵活的API",
      url: "https://graphql.org/",
    },
  ],
  数据库: [
    {
      name: "MySQL",
      description: "世界上最流行的开源关系型数据库管理系统",
      url: "https://www.mysql.com/",
    },
    {
      name: "PostgreSQL",
      description: "高级开源关系型数据库，具有强大的功能和扩展性",
      url: "https://www.postgresql.org/",
    },
    {
      name: "MongoDB",
      description: "文档型NoSQL数据库，提供高性能、高可用性和易扩展性",
      url: "https://www.mongodb.com/",
    },
    {
      name: "Redis",
      description: "内存数据结构存储，用作数据库、缓存和消息代理",
      url: "https://redis.io/",
    },
    {
      name: "SQLite",
      description: "轻量级嵌入式数据库，无需服务器即可运行",
      url: "https://www.sqlite.org/",
    },
    {
      name: "Firebase",
      description: "Google移动和Web应用开发平台，提供实时数据库等服务",
      url: "https://firebase.google.com/",
    },
    {
      name: "Supabase",
      description: "开源Firebase替代方案，提供后端即服务",
      url: "https://supabase.com/",
    },
    {
      name: "Prisma",
      description: "现代数据库工具包，提供类型安全的数据库访问",
      url: "https://www.prisma.io/",
    },
  ],
  DevOps工具: [
    {
      name: "Docker",
      description: "容器化平台，简化应用程序的部署和管理",
      url: "https://www.docker.com/",
    },
    {
      name: "Kubernetes",
      description: "容器编排系统，自动化容器部署、扩展和管理",
      url: "https://kubernetes.io/",
    },
    {
      name: "GitHub Actions",
      description: "GitHub的CI/CD自动化工具，构建、测试和部署代码",
      url: "https://github.com/features/actions",
    },
    {
      name: "Jenkins",
      description: "开源自动化服务器，用于构建、部署和自动化项目",
      url: "https://www.jenkins.io/",
    },
    {
      name: "GitLab CI",
      description: "GitLab集成的CI/CD平台，提供完整的DevOps工具链",
      url: "https://docs.gitlab.com/ee/ci/",
    },
    {
      name: "Terraform",
      description: "基础设施即代码工具，安全高效地构建、更改和版本化基础设施",
      url: "https://www.terraform.io/",
    },
    {
      name: "Ansible",
      description: "自动化配置管理和应用部署工具",
      url: "https://www.ansible.com/",
    },
    {
      name: "Prometheus",
      description: "开源监控和警报工具包，用于记录时间序列数据",
      url: "https://prometheus.io/",
    },
  ],
  设计资源: [
    {
      name: "Figma",
      description: "协作式界面设计工具，支持实时协作和原型制作",
      url: "https://www.figma.com/",
    },
    {
      name: "Sketch",
      description: "Mac端专业的数字设计工具，专注于UI和UX设计",
      url: "https://www.sketch.com/",
    },
    {
      name: "Adobe XD",
      description: "Adobe的协作式用户体验设计工具，用于设计和原型制作",
      url: "https://www.adobe.com/products/xd.html",
    },
    {
      name: "Framer",
      description: "交互式设计工具，从设计到代码的无缝工作流",
      url: "https://www.framer.com/",
    },
    {
      name: "InVision",
      description: "数字产品设计平台，提供原型设计和协作功能",
      url: "https://www.invisionapp.com/",
    },
    {
      name: "Canva",
      description: "在线图形设计平台，提供简单易用的设计工具",
      url: "https://www.canva.com/",
    },
    {
      name: "Dribbble",
      description: "设计师社区和作品展示平台，发现设计灵感",
      url: "https://dribbble.com/",
    },
    {
      name: "Behance",
      description: "Adobe创意作品展示平台，展示和发现创意作品",
      url: "https://www.behance.net/",
    },
  ],
  移动端开发: [
    {
      name: "React Native",
      description: "使用React构建原生移动应用的框架",
      url: "https://reactnative.dev/",
    },
    {
      name: "Flutter",
      description:
        "Google的跨平台UI工具包，可快速在iOS和Android上构建高质量的原生用户界面",
      url: "https://flutter.dev/",
    },
    {
      name: "Ionic",
      description:
        "基于Web技术的混合应用框架，使用HTML、CSS和JavaScript构建移动应用",
      url: "https://ionicframework.com/",
    },
    {
      name: "Cordova",
      description: "将Web应用打包为原生应用的开源移动开发框架",
      url: "https://cordova.apache.org/",
    },
    {
      name: "Capacitor",
      description: "现代化的跨平台应用运行时，可将Web应用转换为原生应用",
      url: "https://capacitorjs.com/",
    },
    {
      name: "Xamarin",
      description: "微软的跨平台移动应用开发框架，使用C#构建iOS和Android应用",
      url: "https://dotnet.microsoft.com/apps/xamarin",
    },
    {
      name: "Swift",
      description: "Apple开发的编程语言，用于iOS、macOS等平台的原生应用开发",
      url: "https://swift.org/",
    },
    {
      name: "Kotlin",
      description: "JetBrains开发的现代编程语言，Android官方推荐的开发语言",
      url: "https://kotlinlang.org/",
    },
  ],
  学习平台: [
    {
      name: "Coursera",
      description: "在线课程平台，提供大学级别的课程和专业证书",
      url: "https://www.coursera.org/",
    },
    {
      name: "Udemy",
      description: "技能学习平台，提供各种技术和非技术课程",
      url: "https://www.udemy.com/",
    },
    {
      name: "edX",
      description: "大学级别在线课程平台，由哈佛和MIT等顶级大学创建",
      url: "https://www.edx.org/",
    },
    {
      name: "freeCodeCamp",
      description: "免费编程学习平台，提供全栈开发课程",
      url: "https://www.freecodecamp.org/",
    },
    {
      name: "Codecademy",
      description: "交互式学习平台，通过实践学习编程",
      url: "https://www.codecademy.com/",
    },
    {
      name: "LeetCode",
      description: "算法和编程练习平台，用于技术面试准备",
      url: "https://leetcode.com/",
    },
    {
      name: "HackerRank",
      description: "技术面试准备平台，提供编程挑战和面试准备",
      url: "https://www.hackerrank.com/",
    },
    {
      name: "Frontend Masters",
      description: "前端专业课程平台，提供深度技术培训",
      url: "https://frontendmasters.com/",
    },
  ],
  社区论坛: [
    {
      name: "Stack Overflow",
      description: "程序员问答社区，解决编程问题的最佳平台",
      url: "https://stackoverflow.com/",
    },
    {
      name: "GitHub",
      description: "全球最大的代码托管平台和开发者社区",
      url: "https://github.com/",
    },
    {
      name: "Reddit",
      description: "社交新闻聚合网站，拥有活跃的技术讨论板块",
      url: "https://www.reddit.com/",
    },
    {
      name: "V2EX",
      description: "创意工作者社区，专注于技术和创意讨论",
      url: "https://www.v2ex.com/",
    },
    {
      name: "SegmentFault",
      description: "中文技术问答社区，解决编程问题",
      url: "https://segmentfault.com/",
    },
    {
      name: "掘金",
      description: "技术文章分享社区，发现优质技术内容",
      url: "https://juejin.cn/",
    },
    {
      name: "CSDN",
      description: "中文IT技术社区，提供技术文章和资源",
      url: "https://www.csdn.net/",
    },
    {
      name: "知乎",
      description: "中文问答社区，有丰富的技术讨论内容",
      url: "https://www.zhihu.com/",
    },
  ],
  代码托管: [
    {
      name: "GitHub",
      description: "全球最大的代码托管平台，支持Git版本控制",
      url: "https://github.com/",
    },
    {
      name: "GitLab",
      description: "开源代码管理平台，提供完整的DevOps工具链",
      url: "https://about.gitlab.com/",
    },
    {
      name: "Bitbucket",
      description: "Atlassian的代码托管平台，与Jira集成",
      url: "https://bitbucket.org/",
    },
    {
      name: "Gitee",
      description: "中文代码托管平台，专为国内开发者优化",
      url: "https://gitee.com/",
    },
    {
      name: "SourceForge",
      description: "开源软件托管平台，历史悠久",
      url: "https://sourceforge.net/",
    },
    {
      name: "CodePen",
      description: "前端代码分享平台，在线编辑和展示HTML/CSS/JS",
      url: "https://codepen.io/",
    },
    {
      name: "JSFiddle",
      description: "在线JavaScript编辑器，快速测试和分享代码",
      url: "https://jsfiddle.net/",
    },
    {
      name: "CodeSandbox",
      description: "在线代码编辑器，支持现代前端框架",
      url: "https://codesandbox.io/",
    },
  ],
  部署平台: [
    {
      name: "Vercel",
      description: "Next.js官方推荐平台，提供前端应用部署服务",
      url: "https://vercel.com/",
    },
    {
      name: "Netlify",
      description: "现代静态网站托管平台，提供CI/CD功能",
      url: "https://www.netlify.com/",
    },
    {
      name: "Heroku",
      description: "云应用平台，简化应用部署和管理",
      url: "https://www.heroku.com/",
    },
    {
      name: "DigitalOcean",
      description: "云服务器提供商，为开发者提供简单可靠的云计算",
      url: "https://www.digitalocean.com/",
    },
    {
      name: "AWS Amplify",
      description: "全栈无服务器平台，快速构建和部署应用",
      url: "https://aws.amazon.com/amplify/",
    },
    {
      name: "Firebase Hosting",
      description: "Google的Web托管服务，快速部署静态网站",
      url: "https://firebase.google.com/products/hosting",
    },
    {
      name: "Cloudflare Pages",
      description: "边缘计算托管平台，提供全球CDN加速",
      url: "https://pages.cloudflare.com/",
    },
    {
      name: "GitHub Pages",
      description: "免费的静态网站托管服务，直接从GitHub仓库部署",
      url: "https://pages.github.com/",
    },
  ],
  性能监控: [
    {
      name: "Google Analytics",
      description: "网站流量分析工具，了解用户行为和网站性能",
      url: "https://analytics.google.com/",
    },
    {
      name: "Hotjar",
      description: "用户行为分析工具，通过热图和会话录制了解用户",
      url: "https://www.hotjar.com/",
    },
    {
      name: "Sentry",
      description: "错误监控平台，实时发现和修复应用错误",
      url: "https://sentry.io/",
    },
    {
      name: "LogRocket",
      description: "前端监控工具，重现用户会话以快速调试问题",
      url: "https://logrocket.com/",
    },
    {
      name: "New Relic",
      description: "应用性能监控，全面了解应用性能",
      url: "https://newrelic.com/",
    },
    {
      name: "Datadog",
      description: "基础设施监控，实时监控服务器和应用性能",
      url: "https://www.datadoghq.com/",
    },
    {
      name: "Lighthouse",
      description: "网站性能评估工具，改进网页质量",
      url: "https://developers.google.com/web/tools/lighthouse",
    },
    {
      name: "WebPageTest",
      description: "网站性能测试工具，详细分析页面加载性能",
      url: "https://www.webpagetest.org/",
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
