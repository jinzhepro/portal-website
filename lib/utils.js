import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  Smartphone,
  Palette,
  Zap,
  Package,
  Code,
  BarChart3,
  Bot,
  Type,
  Image,
  Wrench,
  User,
  FileText,
  Tablet,
  Cpu,
  Database,
  Settings,
  BookOpen,
  MessageSquare,
  Link,
  Rocket,
  Activity,
} from "lucide-react";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatDate(date) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function debounce(func, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

export function highlightText(text, highlight) {
  if (!highlight.trim()) return text;
  const regex = new RegExp(`(${highlight})`, "gi");
  return text.replace(
    regex,
    '<mark class="bg-yellow-200 text-yellow-900">$1</mark>'
  );
}

export function getCategoryColor(category) {
  const colors = {
    React:
      "bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border-blue-200",
    Vue: "bg-gradient-to-r from-green-50 to-green-100 text-green-700 border-green-200",
    Nodejs:
      "bg-gradient-to-r from-yellow-50 to-yellow-100 text-yellow-700 border-yellow-200",
    微信小程序:
      "bg-gradient-to-r from-emerald-50 to-emerald-100 text-emerald-700 border-emerald-200",
    "UI 库":
      "bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 border-purple-200",
    "编译&构建&打包":
      "bg-gradient-to-r from-orange-50 to-orange-100 text-orange-700 border-orange-200",
    框架类库:
      "bg-gradient-to-r from-red-50 to-red-100 text-red-700 border-red-200",
    JavaScript:
      "bg-gradient-to-r from-indigo-50 to-indigo-100 text-indigo-700 border-indigo-200",
    CSS: "bg-gradient-to-r from-pink-50 to-pink-100 text-pink-700 border-pink-200",
    可视化:
      "bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-700 border-cyan-200",
    "AI 工具":
      "bg-gradient-to-r from-violet-50 to-violet-100 text-violet-700 border-violet-200",
    "文字&图标":
      "bg-gradient-to-r from-amber-50 to-amber-100 text-amber-700 border-amber-200",
    "图片&视频处理":
      "bg-gradient-to-r from-teal-50 to-teal-100 text-teal-700 border-teal-200",
    "测试&优化工具":
      "bg-gradient-to-r from-rose-50 to-rose-100 text-rose-700 border-rose-200",
    大牛博客:
      "bg-gradient-to-r from-slate-50 to-slate-100 text-slate-700 border-slate-200",
    内容管理:
      "bg-gradient-to-r from-zinc-50 to-zinc-100 text-zinc-700 border-zinc-200",
    移动端开发:
      "bg-gradient-to-r from-lime-50 to-lime-100 text-lime-700 border-lime-200",
    后端技术:
      "bg-gradient-to-r from-green-50 to-green-100 text-green-700 border-green-200",
    数据库:
      "bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border-blue-200",
    DevOps工具:
      "bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 border-purple-200",
    设计资源:
      "bg-gradient-to-r from-pink-50 to-pink-100 text-pink-700 border-pink-200",
    学习平台:
      "bg-gradient-to-r from-yellow-50 to-yellow-100 text-yellow-700 border-yellow-200",
    社区论坛:
      "bg-gradient-to-r from-indigo-50 to-indigo-100 text-indigo-700 border-indigo-200",
    代码托管:
      "bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 border-gray-200",
    部署平台:
      "bg-gradient-to-r from-orange-50 to-orange-100 text-orange-700 border-orange-200",
    性能监控:
      "bg-gradient-to-r from-red-50 to-red-100 text-red-700 border-red-200",
  };
  return (
    colors[category] ||
    "bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 border-gray-200"
  );
}

export function getCategoryIcon(category) {
  const icons = {
    React: Code,
    Vue: Smartphone,
    Nodejs: Cpu,
    微信小程序: Smartphone,
    "UI 库": Palette,
    "编译&构建&打包": Zap,
    框架类库: Package,
    JavaScript: Code,
    CSS: Palette,
    可视化: BarChart3,
    "AI 工具": Bot,
    "文字&图标": Type,
    "图片&视频处理": Image,
    "测试&优化工具": Wrench,
    大牛博客: User,
    内容管理: FileText,
    移动端开发: Tablet,
    后端技术: Cpu,
    数据库: Database,
    DevOps工具: Settings,
    设计资源: Palette,
    学习平台: BookOpen,
    社区论坛: MessageSquare,
    代码托管: Link,
    部署平台: Rocket,
    性能监控: Activity,
  };

  const IconComponent = icons[category] || BookOpen;
  return <IconComponent className="w-5 h-5" />;
}
