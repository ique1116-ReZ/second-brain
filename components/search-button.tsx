'use client';

import { Search } from 'lucide-react';
import { useGlobalSearch } from './global-search';

export default function SearchButton() {
  const { openSearch } = useGlobalSearch();

  return (
    <button
      onClick={openSearch}
      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm"
    >
      <Search className="w-4 h-4" />
      <span>搜索</span>
      <kbd className="hidden sm:inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
        <span className="text-xs">⌘</span>K
      </kbd>
    </button>
  );
}