"use client";

import { useState, useEffect, useMemo } from "react";
import Header from "@/components/Header";
import SearchBox from "@/components/SearchBox";
import CategoryFilter from "@/components/CategoryFilter";
import ResourceCard from "@/components/ResourceCard";
import { getAllResources, searchResources } from "@/lib/data";

export default function HomePage() {
  const [resources, setResources] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const data = getAllResources();
    setResources(data.items);
    setCategories(data.categories);
    setIsLoading(false);
  }, []);

  const filteredResources = useMemo(() => {
    return searchResources(
      searchQuery,
      selectedCategory === "all" ? undefined : selectedCategory
    );
  }, [searchQuery, selectedCategory]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 搜索区域 */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              探索开发者世界
            </h2>
            <p className="text-lg text-gray-600">
              发现优质的全栈开发资源，提升你的技能
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <SearchBox
              onSearch={handleSearch}
              value={searchQuery}
              placeholder="搜索框架、工具、教程、平台..."
            />
          </div>
        </div>

        {/* 分类过滤器 */}
        <div className="mb-8">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        {/* 统计信息 */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              找到{" "}
              <span className="font-semibold text-primary-600">
                {filteredResources.length}
              </span>{" "}
              个资源
              {searchQuery && (
                <span>
                  ，搜索关键词：
                  <span className="font-medium">"{searchQuery}"</span>
                </span>
              )}
              {selectedCategory !== "all" && (
                <span>
                  ，分类：
                  <span className="font-medium">{selectedCategory}</span>
                </span>
              )}
            </p>

            {(searchQuery || selectedCategory !== "all") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="text-sm text-primary-600 hover:text-primary-700 font-medium"
              >
                清除筛选
              </button>
            )}
          </div>
        </div>

        {/* 资源列表 */}
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {filteredResources.map((resource) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
                highlight={searchQuery}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg
                className="mx-auto h-12 w-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              没有找到相关资源
            </h3>
            <p className="text-gray-600 mb-4">
              尝试调整搜索关键词或选择其他分类
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="btn-primary"
            >
              查看全部资源
            </button>
          </div>
        )}
      </main>

      {/* 页脚 */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500 text-sm">
            <p>© 2024 开发者资源导航. 精心整理，助力开发者成长.</p>
            <p className="mt-2">
              共收录{" "}
              <span className="font-semibold text-primary-600">
                {resources.length}
              </span>{" "}
              个优质资源
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
