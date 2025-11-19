import { getCategoryColor, getCategoryIcon } from "@/lib/utils";

export default function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">资源分类</h3>
        <span className="text-sm text-gray-500">
          共 {categories.reduce((sum, cat) => sum + cat.count, 0)} 个资源
        </span>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => onCategoryChange("all")}
          className={`group relative inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
            selectedCategory === "all"
              ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg ring-2 ring-indigo-500 ring-offset-2"
              : "bg-white text-gray-700 hover:bg-gray-50 shadow-md border border-gray-200 hover:shadow-lg hover:border-indigo-300"
          }`}
        >
          <span className="mr-2.5 text-lg">📚</span>
          <span className="font-semibold">全部资源</span>
          <span
            className={`ml-2.5 px-2 py-0.5 rounded-lg text-xs font-medium ${
              selectedCategory === "all"
                ? "bg-white/20 text-white"
                : "bg-gray-100 text-gray-600 group-hover:bg-indigo-100 group-hover:text-indigo-700"
            }`}
          >
            {categories.reduce((sum, cat) => sum + cat.count, 0)}
          </span>
          {selectedCategory === "all" && (
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
          )}
        </button>

        {categories.map((category) => {
          const colorClass = getCategoryColor(category.name);
          const icon = getCategoryIcon(category.name);
          const isActive = selectedCategory === category.name;

          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.name)}
              className={`group relative inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                isActive
                  ? `${colorClass} shadow-lg ring-2 ring-offset-2 transform scale-105`
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow-md border border-gray-200 hover:shadow-lg hover:border-indigo-300"
              }`}
            >
              <span className="mr-2.5 text-lg">{icon}</span>
              <span className="font-semibold">{category.name}</span>
              <span
                className={`ml-2.5 px-2 py-0.5 rounded-lg text-xs font-medium ${
                  isActive
                    ? "bg-white/30 text-current"
                    : "bg-gray-100 text-gray-600 group-hover:bg-indigo-100 group-hover:text-indigo-700"
                }`}
              >
                {category.count}
              </span>
              {isActive && (
                <div
                  className={`absolute inset-0 rounded-xl ${colorClass} opacity-0 group-hover:opacity-10 transition-opacity`}
                ></div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
