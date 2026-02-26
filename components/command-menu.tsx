'use client';

import { useState, useEffect, useCallback } from 'react';
import { Search, X, Calendar, Tag, FileText, MessageSquare, CheckSquare, Lightbulb, Bookmark, MoreHorizontal } from 'lucide-react';
import { useGlobalSearch } from './global-search';
import { searchMemories } from '@/lib/data';
import { MemoryItem, MemoryType } from '@/types';

const typeIcons: Record<MemoryType, React.ReactNode> = {
  note: <FileText className="w-4 h-4" />,
  conversation: <MessageSquare className="w-4 h-4" />,
  task: <CheckSquare className="w-4 h-4" />,
  idea: <Lightbulb className="w-4 h-4" />,
  bookmark: <Bookmark className="w-4 h-4" />,
  other: <MoreHorizontal className="w-4 h-4" />,
};

const typeLabels: Record<MemoryType, string> = {
  note: '笔记',
  conversation: '对话',
  task: '任务',
  idea: '想法',
  bookmark: '书签',
  other: '其他',
};

export function CommandMenu() {
  const { isOpen, closeSearch } = useGlobalSearch();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<MemoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const performSearch = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    try {
      const searchResults = await searchMemories(searchQuery);
      setResults(searchResults);
    } catch (error) {
      console.error('搜索失败:', error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      performSearch(query);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query, performSearch]);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setResults([]);
      // 聚焦搜索输入框
      setTimeout(() => {
        const input = document.querySelector('input[type="search"]');
        if (input instanceof HTMLInputElement) {
          input.focus();
        }
      }, 100);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleResultClick = (item: MemoryItem) => {
    console.log('选择项目:', item);
    // 这里可以跳转到详情页或执行其他操作
    closeSearch();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* 背景遮罩 */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeSearch}
      />
      
      {/* 搜索模态框 */}
      <div className="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-800 animate-slideIn">
        {/* 搜索输入框 */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="搜索所有笔记、对话、任务..."
              className="flex-1 bg-transparent border-none outline-none text-lg placeholder-gray-400"
              autoFocus
            />
            <button
              onClick={closeSearch}
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* 搜索结果 */}
        <div className="max-h-[60vh] overflow-y-auto minimal-scrollbar">
          {isLoading ? (
            <div className="p-8 text-center text-gray-400">
              搜索中...
            </div>
          ) : results.length > 0 ? (
            <div className="divide-y divide-gray-100 dark:divide-gray-800">
              {results.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleResultClick(item)}
                  className="w-full p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded bg-gray-100 dark:bg-gray-800">
                      {typeIcons[item.type]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium truncate">{item.title}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                          {typeLabels[item.type]}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {item.content}
                      </p>
                      <div className="flex items-center gap-3 mt-2 text-xs text-gray-500 dark:text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {item.createdAt.toLocaleDateString('zh-CN')}
                        </span>
                        {item.tags.length > 0 && (
                          <span className="flex items-center gap-1">
                            <Tag className="w-3 h-3" />
                            {item.tags.slice(0, 2).join(', ')}
                            {item.tags.length > 2 && '...'}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : query ? (
            <div className="p-8 text-center text-gray-400">
              未找到 "{query}" 的相关结果
            </div>
          ) : (
            <div className="p-8 text-center text-gray-400">
              输入关键词开始搜索
              <div className="mt-2 text-sm">
                支持搜索标题、内容和标签
              </div>
            </div>
          )}
        </div>

        {/* 快捷键提示 */}
        <div className="p-3 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-500">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">↑↓</kbd>
                导航
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">Enter</kbd>
                选择
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">Esc</kbd>
                关闭
              </span>
            </div>
            <div>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">Cmd</kbd>
                <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">K</kbd>
                快速打开
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}