import { Sparkles, Code2 } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-primary-600" />
              <Sparkles className="h-6 w-6 text-yellow-500 -ml-2" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                开发者资源导航
              </h1>
              <p className="text-sm text-gray-500">
                精选全栈开发资源，助力开发者成长
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
              <span className="inline-flex items-center px-2 py-1 rounded-full bg-green-100 text-green-800">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-1"></span>
                持续更新
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
