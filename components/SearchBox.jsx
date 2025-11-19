import { useState } from "react";
import { Search } from "lucide-react";
import { debounce } from "@/lib/utils";

export default function SearchBox({ onSearch, placeholder = "搜索资源..." }) {
  const [query, setQuery] = useState("");

  const debouncedSearch = debounce((searchQuery) => {
    onSearch(searchQuery);
  }, 300);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="search-input"
      />
      {query && (
        <button
          type="button"
          onClick={() => {
            setQuery("");
            onSearch("");
          }}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </form>
  );
}
