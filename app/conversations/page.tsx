import { MessageSquare, Clock, User, Hash, Tag, Search, Filter, Calendar, BookOpen, Zap, Database, FolderOpen } from 'lucide-react';
import Link from 'next/link';

export default function ConversationsPage() {
  // 对话分类
  const conversationCategories = [
    {
      id: 'projects',
      name: '项目讨论',
      icon: <Zap className="w-5 h-5" />,
      color: 'bg-blue-500',
      count: 32,
      description: 'ReVibe项目、ACL图标、商业计划等'
    },
    {
      id: 'technical',
      name: '技术咨询',
      icon: <Database className="w-5 h-5" />,
      color: 'bg-green-500',
      count: 18,
      description: 'API集成、开发问题、技术选型'
    },
    {
      id: 'business',
      name: '商业决策',
      icon: <BookOpen className="w-5 h-5" />,
      color: 'bg-purple-500',
      count: 15,
      description: '商业模式、市场策略、注册方案'
    },
    {
      id: 'creative',
      name: '创意想法',
      icon: <MessageSquare className="w-5 h-5" />,
      color: 'bg-yellow-500',
      count: 24,
      description: '产品功能、内容创意、用户体验'
    }
  ];

  // 最近对话
  const recentConversations = [
    {
      id: 1,
      title: '第二大脑重构讨论',
      category: 'technical',
      participants: ['铮哥', '大胖'],
      lastMessage: '立即开始，24小时工作。现在就开始重构第二大脑。',
      time: '刚刚',
      tags: ['第二大脑', '重构', 'Next.js'],
      unread: false
    },
    {
      id: 2,
      title: 'ReVibe开发路线图',
      category: 'projects',
      participants: ['铮哥', '大胖'],
      lastMessage: '收到开发路线图。让我先修复第二大脑的构建错误，然后整合路线图。',
      time: '15分钟前',
      tags: ['ReVibe', '开发路线', '小程序'],
      unread: true
    },
    {
      id: 3,
      title: '深圳个体工商户注册',
      category: 'business',
      participants: ['铮哥', '大胖'],
      lastMessage: '已整理深圳注册详细指南，包括免费孵化器地址和流程。',
      time: '2小时前',
      tags: ['深圳注册', '个体工商户', '孵化器'],
      unread: false
    },
    {
      id: 4,
      title: 'ACL图标Phase 1完成',
      category: 'projects',
      participants: ['铮哥', '大胖'],
      lastMessage: 'Phase 1的7个图标已全部完成，用户已进行质量检查。',
      time: '3小时前',
      tags: ['ACL图标', 'Phase 1', '完成'],
      unread: false
    },
    {
      id: 5,
      title: '抖音内容策略讨论',
      category: 'creative',
      participants: ['铮哥', '大胖'],
      lastMessage: '已生成周五抖音标题建议，包括爆款标题和内容方向。',
      time: '1天前',
      tags: ['抖音', '内容策略', '标题'],
      unread: false
    },
    {
      id: 6,
      title: '越野跑知识库整理',
      category: 'technical',
      participants: ['铮哥', '大胖'],
      lastMessage: '越野跑知识库已整理完成，包含23个专业参考资料。',
      time: '2天前',
      tags: ['越野跑', '知识库', '整理'],
      unread: false
    }
  ];

  // 对话统计
  const conversationStats = {
    total: 89,
    categorized: 27,
    uncategorized: 62,
    averageLength: '15分钟',
    mostActive: '项目讨论'
  };

  return (
    <div className="p-8">
      {/* 页面头部 */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">对话历史</h1>
              <p className="text-gray-600 dark:text-gray-400">所有项目讨论、技术咨询、商业决策的完整记录</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 bg-purple-500 text-white rounded-lg font-medium">
              {conversationStats.total} 次对话
            </div>
            <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              同步记录
            </button>
          </div>
        </div>

        {/* 统计卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">总对话数</h4>
                <div className="text-3xl font-bold mt-2">{conversationStats.total}</div>
              </div>
              <MessageSquare className="w-8 h-8 text-purple-500" />
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">已分类</h4>
                <div className="text-3xl font-bold mt-2">{conversationStats.categorized}</div>
              </div>
              <Tag className="w-8 h-8 text-green-500" />
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">平均时长</h4>
                <div className="text-3xl font-bold mt-2">{conversationStats.averageLength}</div>
              </div>
              <Clock className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">最活跃</h4>
                <div className="text-3xl font-bold mt-2">{conversationStats.mostActive}</div>
              </div>
              <Hash className="w-8 h-8 text-yellow-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 对话分类 */}
        <div>
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">对话分类</h2>
              <Filter className="w-5 h-5 text-gray-400" />
            </div>
            
            <div className="space-y-4">
              {conversationCategories.map((category) => (
                <div key={category.id} className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${category.color} bg-opacity-10`}>
                      <div className={category.color.replace('bg-', 'text-')}>
                        {category.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">{category.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{category.description}</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium">
                    {category.count}
                  </div>
                </div>
              ))}
            </div>

            {/* 分类进度 */}
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">分类进度</span>
                <span className="text-sm font-medium">{Math.round((conversationStats.categorized / conversationStats.total) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                  style={{ width: `${(conversationStats.categorized / conversationStats.total) * 100}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                {conversationStats.uncategorized} 个对话待分类
              </p>
            </div>
          </div>
        </div>

        {/* 最近对话 */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">最近对话</h2>
              <div className="flex items-center gap-2">
                <button className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                  <Search className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                  <Calendar className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="space-y-4">
              {recentConversations.map((conversation) => (
                <div 
                  key={conversation.id}
                  className={`p-4 rounded-lg border ${
                    conversation.unread 
                      ? 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20' 
                      : 'border-gray-200 dark:border-gray-700'
                  } hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                          {conversation.title}
                        </h3>
                        {conversation.unread && (
                          <span className="px-2 py-0.5 bg-blue-500 text-white text-xs rounded-full">新</span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {conversation.participants.join(', ')}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {conversation.time}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                        {conversation.lastMessage}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {conversation.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="text-sm text-blue-500 hover:text-blue-600 font-medium">
                      查看详情
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* 查看更多 */}
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <Link 
                href="/conversations/all"
                className="w-full text-center block py-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                查看全部对话记录 →
              </Link>
            </div>
          </div>

          {/* 对话价值 */}
          <div className="mt-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">对话价值</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">决策记录</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-1.5 flex-shrink-0"></div>
                    <span>项目方向选择</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-1.5 flex-shrink-0"></div>
                    <span>技术方案决策</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-1.5 flex-shrink-0"></div>
                    <span>商业策略制定</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">知识沉淀</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-pink-500 mt-1.5 flex-shrink-0"></div>
                    <span>问题解决方案</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-pink-500 mt-1.5 flex-shrink-0"></div>
                    <span>经验教训总结</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-pink-500 mt-1.5 flex-shrink-0"></div>
                    <span>创意灵感记录</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 对话管理 */}
      <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">对话管理</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors flex flex-col items-center">
            <MessageSquare className="w-6 h-6 text-blue-500 mb-2" />
            <span className="font-medium">导出对话</span>
            <span className="text-sm text-gray-500 mt-1">Markdown格式</span>
          </button>
          
          <button className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors flex flex-col items-center">
            <Tag className="w-6 h-6 text-green-500 mb-2" />
            <span className="font-medium">批量分类</span>
            <span className="text-sm text-gray-500 mt-1">AI自动分类</span>
          </button>
          
          <button className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors flex flex-col items-center">
            <Filter className="w-6 h-6 text-purple-500 mb-2" />
            <span className="font-medium">高级过滤</span>
            <span className="text-sm text-gray-500 mt-1">时间/类型/标签</span>
          </button>
          
          <button className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex flex-col items-center">
            <Clock className="w-6 h-6 text-gray-500 mb-2" />
            <span className="font-medium">时间线视图</span>
            <span className="text-sm text-gray-500 mt-1">按时间排序</span>
          </button>        </div>
      </div>

      {/* 底部信息 */}
      <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>对话历史 · 智能分类 · 跨项目关联</p>
        <p className="mt-1">最后更新: 2026年2月27日 · 对话: 89次</p>
      </div>
    </div>
  );
}
