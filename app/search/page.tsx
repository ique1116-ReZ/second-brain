'use client';

import { Search, Filter, Clock, Hash, Tag, FileText, MessageSquare, User, Zap, BookOpen, Database, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  // 搜索过滤器
  const filters = [
    { id: 'all', name: '全部', icon: <Search className="w-4 h-4" /> },
    { id: 'revibe', name: 'ReVibe项目', icon: <Zap className="w-4 h-4" /> },
    { id: 'trail', name: '越野跑', icon: <User className="w-4 h-4" /> },
    { id: 'conversations', name: '对话历史', icon: <MessageSquare className="w-4 h-4" /> },
    { id: 'documents', name: '文档', icon: <FileText className="w-4 h-4" /> },
    { id: 'technical', name: '技术', icon: <Database className="w-4 h-4" /> },
  ];

  // 热门搜索
  const popularSearches = [
    { query: 'ACL图标项目', count: 24 },
    { query: '深圳注册指南', count: 18 },
    { query: '越野跑极化训练', count: 15 },
    { query: 'ReVibe商业计划', count: 12 },
    { query: '抖音内容策略', count: 9 },
    { query: 'Next.js重构', count: 7 },
  ];

  // 最近搜索
  const recentSearches = [
    { query: '第二大脑重构', time: '刚刚' },
    { query: 'Tailwind CSS配置', time: '15分钟前' },
    { query: '微信云开发', time: '1小时前' },
    { query: '个体工商户注册', time: '2小时前' },
  ];

  // 搜索结果示例
  const searchResults = [
    {
      id: 1,
      title: 'ReVibe商业计划书',
      description: '简化版商业计划书，用于孵化器申请和投资洽谈',
      type: 'document',
      knowledgeBase: 'ReVibe项目',
      relevance: 95,
      tags: ['商业计划', '孵化器', '投资'],
      lastUpdated: '2026年2月27日'
    },
    {
      id: 2,
      title: 'ACL图标Phase 1完成',
      description: 'Phase 1的7个图标已全部完成，用户已进行质量检查',
      type: 'conversation',
      knowledgeBase: '对话历史',
      relevance: 88,
      tags: ['ACL图标', 'Phase 1', '完成'],
      lastUpdated: '3小时前'
    },
    {
      id: 3,
      title: '越野跑极化训练研究',
      description: 'Stephen Seiler博士的80:20极化训练模型研究',
      type: 'paper',
      knowledgeBase: '越野跑知识',
      relevance: 82,
      tags: ['极化训练', '科学研究', 'Stephen Seiler'],
      lastUpdated: '1天前'
    },
    {
      id: 4,
      title: '深圳个体工商户注册指南',
      description: '详细步骤和方案，包括免费孵化器地址和流程',
      type: 'guide',
      knowledgeBase: 'ReVibe项目',
      relevance: 78,
      tags: ['深圳注册', '个体工商户', '孵化器'],
      lastUpdated: '2小时前'
    },
    {
      id: 5,
      title: '第二大脑重构讨论',
      description: '立即开始，24小时工作。现在就开始重构第二大脑',
      type: 'conversation',
      knowledgeBase: '对话历史',
      relevance: 75,
      tags: ['第二大脑', '重构', 'Next.js'],
      lastUpdated: '刚刚'
    },
    {
      id: 6,
      title: '抖音内容策略讨论',
      description: '已生成周五抖音标题建议，包括爆款标题和内容方向',
      type: 'conversation',
      knowledgeBase: '对话历史',
      relevance: 70,
      tags: ['抖音', '内容策略', '标题'],
      lastUpdated: '1天前'
    },
  ];

  // 类型图标
  const typeIcons = {
    document: <FileText className="w-4 h-4" />,
    conversation: <MessageSquare className="w-4 h-4" />,
    paper: <BookOpen className="w-4 h-4" />,
    guide: <FileText className="w-4 h-4" />,
  };

  // 类型颜色
  const typeColors = {
    document: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
    conversation: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
    paper: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
    guide: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400',
  };

  return (
    <div className="p-8">
      {/* 搜索头部 */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600">
              <Search className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">智能搜索</h1>
              <p className="text-gray-600 dark:text-gray-400">跨知识库检索，快速找到你需要的信息</p>
            </div>
          </div>
        </div>

        {/* 搜索框 */}
        <div className="relative mb-6">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜索所有知识库、对话、文档..."
            className="w-full pl-12 pr-4 py-4 text-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <span className="text-sm text-gray-500">按 Enter 搜索</span>
          </div>
        </div>

        {/* 搜索过滤器 */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                activeFilter === filter.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {filter.icon}
              {filter.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 搜索结果 */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">搜索结果</h2>
              <div className="text-sm text-gray-500">
                找到 <span className="font-semibold">{searchResults.length}</span> 个相关结果
              </div>
            </div>
            
            <div className="space-y-4">
              {searchResults.map((result) => (
                <div key={result.id} className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded ${typeColors[result.type as keyof typeof typeColors]}`}>
                          {typeIcons[result.type as keyof typeof typeIcons]}
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{result.title}</h3>
                        <div className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded">
                          {result.knowledgeBase}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-3">{result.description}</p>
                      
                      <div className="flex items-center gap-2 mb-3">
                        {result.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-4">
                          <span>相关度: {result.relevance}%</span>
                          <span>更新: {result.lastUpdated}</span>
                        </div>
                        <button className="flex items-center gap-1 text-blue-500 hover:text-blue-600">
                          查看详情
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 侧边栏 */}
        <div>
          {/* 热门搜索 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">热门搜索</h3>
              <Hash className="w-5 h-5 text-gray-400" />
            </div>
            
            <div className="space-y-3">
              {popularSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => setSearchQuery(search.query)}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-left"
                >
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 dark:text-white truncate">{search.query}</div>
                    <div className="text-sm text-gray-500">{search.count} 次搜索</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </button>
              ))}
            </div>
          </div>

          {/* 最近搜索 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">最近搜索</h3>
              <Clock className="w-5 h-5 text-gray-400" />
            </div>
            
            <div className="space-y-3">
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => setSearchQuery(search.query)}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-left"
                >
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 dark:text-white truncate">{search.query}</div>
                    <div className="text-sm text-gray-500">{search.time}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </button>
              ))}
            </div>
          </div>

          {/* 搜索技巧 */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200 dark:border-blue-800 p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">搜索技巧</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
                <span>使用引号搜索精确短语</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
                <span>使用 site: 限定知识库</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
                <span>使用 type: 限定文档类型</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
                <span>使用 tag: 搜索特定标签</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 高级搜索 */}
      <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">高级搜索选项</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-2">
              <Tag className="w-4 h-4 text-blue-500" />
              <h4 className="font-medium">按标签搜索</h4>
            </div>
            <p className="text-sm text-gray-500">使用 tag:ACL图标 搜索特定标签</p>
          </div>
          
          <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-2">
              <Filter className="w-4 h-4 text-green-500" />
              <h4 className="font-medium">按时间过滤</h4>
            </div>
            <p className="text-sm text-gray-500">使用 time:today 或 time:week</p>
          </div>
          
          <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-4 h-4 text-purple-500" />
              <h4 className="font-medium">按类型过滤</h4>
            </div>
            <p className="text-sm text-gray-500">使用 type:document 或 type:conversation</p>
          </div>
          
          <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-2">
              <Database className="w-4 h-4 text-yellow-500" />
              <h4 className="font-medium">按知识库</h4>
            </div>
            <p className="text-sm text-gray-500">使用 site:revibe 或 site:trail-running</p>
          </div>
        </div>
      </div>

      {/* 底部信息 */}
      <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>智能搜索 · 跨知识库检索 · 语义理解</p>
        <p className="mt-1">支持自然语言查询和高级搜索语法</p>
      </div>
    </div>
  );
}