import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "开发者资源导航",
  description: "精选全栈开发资源，包含前端、后端、数据库、DevOps等",
  keywords:
    "前端,后端,数据库,DevOps,React,Vue,Node.js,JavaScript,TypeScript,UI库,工具",
  authors: [{ name: "Developer Portal" }],
  openGraph: {
    title: "开发者资源导航",
    description: "精选全栈开发资源，包含前端、后端、数据库、DevOps等",
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
