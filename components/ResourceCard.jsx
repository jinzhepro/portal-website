import { getCategoryColor, getCategoryIcon, truncateText } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

export default function ResourceCard({ resource, highlight }) {
  const categoryColor = getCategoryColor(resource.category);
  const categoryIcon = getCategoryIcon(resource.category);

  return (
    <div className="group cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-indigo-200 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <span className="text-3xl drop-shadow-sm">{categoryIcon}</span>
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${categoryColor}`}
            >
              {resource.category}
            </span>
          </div>
          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors duration-300" />
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-1">
          {resource.name}
        </h3>

        <p className="text-gray-600 text-sm mb-5 line-clamp-3 leading-relaxed">
          {truncateText(resource.description, 120)}
        </p>

        <div className="flex items-center justify-between">
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            访问网站
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-500">在线</span>
          </div>
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-indigo-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
}
