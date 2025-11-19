import { getCategoryColor, getCategoryIcon } from "@/lib/utils";

export default function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        onClick={() => onCategoryChange("all")}
        className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
          selectedCategory === "all"
            ? "bg-primary-600 text-white shadow-md"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        <span className="mr-2">📚</span>
        全部资源
        <span className="ml-2 bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full text-xs">
          {categories.reduce((sum, cat) => sum + cat.count, 0)}
        </span>
      </button>

      {categories.map((category) => {
        const colorClass = getCategoryColor(category.name);
        const icon = getCategoryIcon(category.name);
        const isActive = selectedCategory === category.name;

        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.name)}
            className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              isActive
                ? "bg-primary-600 text-white shadow-md"
                : `${colorClass} hover:opacity-80`
            }`}
          >
            <span className="mr-2">{icon}</span>
            {category.name}
            <span
              className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                isActive
                  ? "bg-white/20 text-white"
                  : "bg-white/50 text-gray-700"
              }`}
            >
              {category.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
