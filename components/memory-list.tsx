'use client';

import { useState, useEffect } from 'react';
import { FileText, MessageSquare, CheckSquare, Lightbulb, Bookmark, MoreHorizontal, Calendar, Tag, ChevronRight } from 'lucide-react';
import { getMemories } from '@/lib/data';
import { MemoryItem, MemoryType } from '@/types';

const typeIcons: Record<MemoryType, React.ReactNode> = {
  note: <FileText className="w-4 h-4" />,
  conversation: <MessageSquare className="w-4 h-4" />,
  task: <CheckSquare className="w-4 h-4" />,
  idea: <Lightbulb className="w-4 h-4" />,
  bookmark: <Bookmark className="w-4 h-4" />,
  other: <MoreHorizontal className="w-4 h-4" />,
};

const typeColors: Record<MemoryType, string> = {
  note: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
  conversation: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
  task: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
  idea: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400',
  bookmark: 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400',
  other: 'bg-gray-100 text-gray-600 dark:bg-gray-900/30 dark:text-gray-400',
};

const typeLabels: Record<MemoryType, string> = {
  note: '笔记',
  conversation: '对话',
  task: '任务',
  idea: '想法',
  bookmark: '书签',
  other: '其他',
};

export default function MemoryList() {
  const [memories, setMemories] = useState<MemoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  useEffect(() => {
    loadMemories();
  }, []);

  const loadMemories = async () => {
    setIsLoading(true);
    try {
      const data = await getMemories();
      // 按创建时间倒序排序
      const sortedData = data.sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setMemories(sortedData);
    } catch (error) {
      console.error('加载记忆数据失败:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const memoryDate = new Date(date);
    const diffTime = Math.abs(now.getTime() - memoryDate.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return '今天';
    } else if (diffDays === 1) {
      return '昨天';
    } else if (diffDays < 7) {
      return `${diffDays}天前`;
    } else {
      return memoryDate.toLocaleDateString('zh-CN', {
        month: 'short',
        day: 'numeric'
      });
    }
  };

  const handleItemClick = (id: string) => {
    setSelectedItem(selectedItem === id ? null : id);
    // 在实际应用中，这里可能会跳转到详情页或展开更多内容
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6 animate-pulse">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-800"></div>
              <div className="flex-1 space-y-3">
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/4"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
                <div className="flex gap-2">
                  <div className="h-6 w-16 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
                  <div className="h-6 w-20 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (memories.length === 0) {
    return (
      <div className="bg-card rounded-xl border border-border p-12 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <FileText className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium mb-2">暂无记忆</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          开始记录你的第一段记忆吧
        </p>
        <button className="px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity">
          创建新记忆
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {memories.map((item) => (
        <div
          key={item.id}
          className={`bg-card rounded-xl border border-border p-6 transition-all hover:shadow-md cursor-pointer ${
            selectedItem === item.id ? 'ring-2 ring-accent/20' : ''
          }`}
          onClick={() => handleItemClick(item.id)}
        >
          <div className="flex items-start gap-4">
            {/* 类型图标 */}
            <div className={`p-3 rounded-lg ${typeColors[item.type]}`}>
              {typeIcons[item.type]}
            </div>

            {/* 内容 */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                    {item.content}
                  </p>
                </div>
                <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${
                  selectedItem === item.id ? 'rotate-90' : ''
                }`} />
              </div>

              {/* 元信息 */}
              <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-500 dark:text-gray-500">
                <span className="flex items-center gap-1.5">
                  <div className={`px-2 py-0.5 rounded-full text-xs ${typeColors[item.type]}`}>
                    {typeLabels[item.type]}
                  </div>
                </span>
                
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {formatDate(item.createdAt)}
                </span>
                
                {item.tags.length > 0 && (
                  <span className="flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5" />
                    <div className="flex flex-wrap gap-1">
                      {item.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                      {item.tags.length > 3 && (
                        <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">
                          +{item.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </span>
                )}
                
                {item.source && (
                  <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">
                    来源: {item.source}
                  </span>
                )}
              </div>

              {/* 展开的详情（如果被选中） */}
              {selectedItem === item.id && (
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">详细信息</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-500 dark:text-gray-400">创建时间:</span>
                          <span>{item.createdAt.toLocaleString('zh-CN')}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500 dark:text-gray-400">更新时间:</span>
                          <span>{item.updatedAt.toLocaleString('zh-CN')}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500 dark:text-gray-400">ID:</span>
                          <span className="font-mono text-xs">{item.id}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">完整内容</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-wrap">
                        {item.content}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <button className="px-3 py-1.5 text-sm border border-border rounded hover:bg-gray-50 dark:hover:bg-gray-800">
                      编辑
                    </button>
                    <button className="px-3 py-1.5 text-sm border border-border rounded hover:bg-gray-50 dark:hover:bg-gray-800">
                      复制链接
                    </button>
                    <button className="px-3 py-1.5 text-sm border border-border rounded hover:bg-gray-50 dark:hover:bg-gray-800">
                      导出
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* 分页或加载更多 */}
      <div className="flex items-center justify-between pt-6 border-t border-border">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          显示 {memories.length} 个记忆点
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-sm border border-border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed">
            上一页
          </button>
          <button className="px-4 py-2 text-sm border border-border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
            下一页
          </button>
        </div>
      </div>
    </div>
  );
}