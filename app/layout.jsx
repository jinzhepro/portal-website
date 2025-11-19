import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "前端资源门户",
  description: "精选前端开发资源，包含框架、工具、教程等",
  keywords: "前端,React,Vue,JavaScript,TypeScript,UI库,工具",
  authors: [{ name: "Frontend Portal" }],
  openGraph: {
    title: "前端资源门户",
    description: "精选前端开发资源，包含框架、工具、教程等",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
          {children}
        </div>
      </body>
    </html>
  );
}
