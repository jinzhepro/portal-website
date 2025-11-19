import { getCategoryColor, getCategoryIcon, truncateText } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

export default function ResourceCard({ resource, highlight }) {
  const categoryColor = getCategoryColor(resource.category);
  const categoryIcon = getCategoryIcon(resource.category);

  return (
    <div className="card group cursor-pointer">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{categoryIcon}</span>
          <span className={`category-badge ${categoryColor}`}>
            {resource.category}
          </span>
        </div>
        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary-600 transition-colors" />
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
        {resource.name}
      </h3>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {truncateText(resource.description, 100)}
      </p>

      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        访问网站
        <ExternalLink className="w-3 h-3 ml-1" />
      </a>
    </div>
  );
}
