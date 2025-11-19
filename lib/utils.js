import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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
    React: "bg-blue-100 text-blue-800",
    Vue: "bg-green-100 text-green-800",
    Nodejs: "bg-yellow-100 text-yellow-800",
    微信小程序: "bg-emerald-100 text-emerald-800",
    "UI 库": "bg-purple-100 text-purple-800",
    "编译&构建&打包": "bg-orange-100 text-orange-800",
    框架类库: "bg-red-100 text-red-800",
    JavaScript: "bg-indigo-100 text-indigo-800",
    CSS: "bg-pink-100 text-pink-800",
    可视化: "bg-cyan-100 text-cyan-800",
    "AI 工具": "bg-violet-100 text-violet-800",
    "文字&图标": "bg-amber-100 text-amber-800",
    "图片&视频处理": "bg-teal-100 text-teal-800",
    "测试&优化工具": "bg-rose-100 text-rose-800",
    大牛博客: "bg-slate-100 text-slate-800",
    内容管理: "bg-zinc-100 text-zinc-800",
  };
  return colors[category] || "bg-gray-100 text-gray-800";
}

export function getCategoryIcon(category) {
  const icons = {
    React: "⚛️",
    Vue: "💚",
    Nodejs: "🟢",
    微信小程序: "📱",
    "UI 库": "🎨",
    "编译&构建&打包": "🔧",
    框架类库: "📦",
    JavaScript: "📜",
    CSS: "🎭",
    可视化: "📊",
    "AI 工具": "🤖",
    "文字&图标": "✏️",
    "图片&视频处理": "🖼️",
    "测试&优化工具": "🔍",
    大牛博客: "👨‍💻",
    内容管理: "📝",
  };
  return icons[category] || "📚";
}
