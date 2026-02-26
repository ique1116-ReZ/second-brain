'use client';

import { useEffect, useState } from 'react';
import { FileText, MessageSquare, CheckSquare, Lightbulb, Bookmark, MoreHorizontal } from 'lucide-react';
import { getTypeStats } from '@/lib/data';
import { MemoryType } from '@/types';

const typeConfig: Record<MemoryType, { label: string; icon: React.ReactNode; color: string }> = {
  note: {
    label: '笔记',
    icon: <FileText className="w-4 h-4" />,
    color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
  },
  conversation: {
    label: '对话',
    icon: <MessageSquare className="w-4 h-4" />,
    color: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
  },
  task: {
    label: '任务',
    icon: <CheckSquare className="w-4 h-4" />,
    color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
  },
  idea: {
    label: '想法',
    icon: <Lightbulb className="w-4 h-4" />,
    color: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400'
  },
  bookmark: {
    label: '书签',
    icon: <Bookmark className="w-4 h-4" />,
    color: 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
  },
  other: {
    label: '其他',
    icon: <MoreHorizontal className="w-4 h-4" />,
    color: 'bg-gray-100 text-gray-600 dark:bg-gray-900/30 dark:text-gray-400'
  }
};

export default function Stats() {
  const [stats, setStats] = useState<Record<MemoryType, number> | null>(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const statsData = getTypeStats();
    setStats(statsData);
    
    const totalCount = Object.values(statsData).reduce((sum, count) => sum + count, 0);
    setTotal(totalCount);
  }, []);

  if (!stats) {
    return (
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* 总数统计 */}
      <div className="text-center p-4 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="text-3xl font-bold mb-1">{total}</div>
        <div className="text-sm text-gray-600 dark:text-gray-400">总记忆数</div>
      </div>

      {/* 类型分布 */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">类型分布</h3>
        <div className="space-y-2">
          {(Object.entries(stats) as [MemoryType, number][]).map(([type, count]) => {
            const config = typeConfig[type];
            const percentage = total > 0 ? Math.round((count / total) * 100) : 0;
            
            return (
              <div key={type} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded ${config.color}`}>
                    {config.icon}
                  </div>
                  <span className="text-sm">{config.label}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-24 h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-current rounded-full"
                      style={{ 
                        width: `${percentage}%`,
                        backgroundColor: config.color.includes('blue') ? '#3b82f6' :
                                       config.color.includes('green') ? '#10b981' :
                                       config.color.includes('purple') ? '#8b5cf6' :
                                       config.color.includes('yellow') ? '#f59e0b' :
                                       config.color.includes('red') ? '#ef4444' : '#6b7280'
                      }}
                    />
                  </div>
                  <span className="text-sm font-medium w-8 text-right">{count}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 最近活动 */}
      <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">最近活动</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">今日新增</span>
            <span className="font-medium">2</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">本周新增</span>
            <span className="font-medium">8</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">本月新增</span>
            <span className="font-medium">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}