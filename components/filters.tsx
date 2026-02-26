'use client';

import { useState, useEffect } from 'react';
import { Calendar, Tag, Filter, X } from 'lucide-react';
import { getAllTags } from '@/lib/data';
import { MemoryType } from '@/types';

const typeOptions: { value: MemoryType | 'all'; label: string }[] = [
  { value: 'all', label: '全部类型' },
  { value: 'note', label: '笔记' },
  { value: 'conversation', label: '对话' },
  { value: 'task', label: '任务' },
  { value: 'idea', label: '想法' },
  { value: 'bookmark', label: '书签' },
  { value: 'other', label: '其他' }
];

const dateOptions = [
  { value: 'all', label: '全部时间' },
  { value: 'today', label: '今天' },
  { value: 'week', label: '本周' },
  { value: 'month', label: '本月' },
  { value: 'year', label: '今年' },
  { value: 'custom', label: '自定义范围' }
];

export default function Filters() {
  const [selectedType, setSelectedType] = useState<MemoryType | 'all'>('all');
  const [selectedDate, setSelectedDate] = useState('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [availableTags, setAvailableTags] = useState<string[]>([]);
  const [isCustomDate, setIsCustomDate] = useState(false);
  const [customStart, setCustomStart] = useState('');
  const [customEnd, setCustomEnd] = useState('');

  useEffect(() => {
    const tags = getAllTags();
    setAvailableTags(tags);
  }, []);

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleClearFilters = () => {
    setSelectedType('all');
    setSelectedDate('all');
    setSelectedTags([]);
    setIsCustomDate(false);
    setCustomStart('');
    setCustomEnd('');
  };

  const hasActiveFilters = selectedType !== 'all' || selectedDate !== 'all' || selectedTags.length > 0;

  return (
    <div className="space-y-6">
      {/* 类型筛选 */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Filter className="w-4 h-4 text-gray-400" />
          <h3 className="text-sm font-medium">内容类型</h3>
        </div>
        <div className="space-y-2">
          {typeOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setSelectedType(option.value)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                selectedType === option.value
                  ? 'bg-accent text-accent-foreground'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* 日期筛选 */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-4 h-4 text-gray-400" />
          <h3 className="text-sm font-medium">时间范围</h3>
        </div>
        <div className="space-y-2">
          {dateOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                setSelectedDate(option.value);
                setIsCustomDate(option.value === 'custom');
              }}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                selectedDate === option.value
                  ? 'bg-accent text-accent-foreground'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {isCustomDate && (
          <div className="mt-3 space-y-3 p-3 border border-gray-200 dark:border-gray-800 rounded-lg">
            <div>
              <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                开始日期
              </label>
              <input
                type="date"
                value={customStart}
                onChange={(e) => setCustomStart(e.target.value)}
                className="w-full px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-700 rounded bg-transparent"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                结束日期
              </label>
              <input
                type="date"
                value={customEnd}
                onChange={(e) => setCustomEnd(e.target.value)}
                className="w-full px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-700 rounded bg-transparent"
              />
            </div>
          </div>
        )}
      </div>

      {/* 标签筛选 */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-gray-400" />
            <h3 className="text-sm font-medium">标签</h3>
          </div>
          {selectedTags.length > 0 && (
            <button
              onClick={() => setSelectedTags([])}
              className="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              清空
            </button>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2">
          {availableTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagToggle(tag)}
              className={`px-3 py-1.5 rounded-full text-xs transition-colors ${
                selectedTags.includes(tag)
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {tag}
              {selectedTags.includes(tag) && (
                <X className="w-3 h-3 ml-1 inline" />
              )}
            </button>
          ))}
        </div>
        
        {availableTags.length === 0 && (
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-2">
            暂无标签
          </p>
        )}
      </div>

      {/* 筛选状态和操作 */}
      {hasActiveFilters && (
        <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium">当前筛选</span>
            <button
              onClick={handleClearFilters}
              className="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 flex items-center gap-1"
            >
              <X className="w-3 h-3" />
              清除所有
            </button>
          </div>
          
          <div className="space-y-2">
            {selectedType !== 'all' && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">类型</span>
                <span className="font-medium">
                  {typeOptions.find(opt => opt.value === selectedType)?.label}
                </span>
              </div>
            )}
            
            {selectedDate !== 'all' && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">时间</span>
                <span className="font-medium">
                  {dateOptions.find(opt => opt.value === selectedDate)?.label}
                </span>
              </div>
            )}
            
            {selectedTags.length > 0 && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">标签</span>
                <span className="font-medium">
                  {selectedTags.length} 个
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}