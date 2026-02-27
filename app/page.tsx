import { Brain, Zap, User, Database, Search, FileText, Calendar, TrendingUp, Clock, FolderOpen, MessageSquare, Settings } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  // 知识库统计
  const knowledgeStats = [
    { name: 'ReVibe项目', count: 47, icon: <Zap className="w-5 h-5" />, color: 'bg-blue-500', path: '/revibe' },
    { name: '越野跑知识', count: 23, icon: <User className="w-5 h-5" />, color: 'bg-green-500', path: '/trail-running' },
    { name: '对话历史', count: 89, icon: <MessageSquare className="w-5 h-5" />, color: 'bg-purple-500', path: '/conversations' },
    { name: '其他项目', count: 12, icon: <FolderOpen className="w-5 h-5" />, color: 'bg-yellow-500', path: '/projects' },
  ];

  // 最近活动
  const recentActivities = [
    { id: 1, type: 'document', title: 'ReVibe商业计划书完成', time: '2小时前', knowledgeBase: 'ReVibe项目' },
    { id: 2, type: 'conversation', title: '讨论深圳个体工商户注册', time: '3小时前', knowledgeBase: '对话历史' },
    { id: 3, type: 'progress', title: 'ACL图标Phase 1完成', time: '4小时前', knowledgeBase: 'ReVibe项目' },
    { id: 4, type: 'research', title: '越野跑极化训练研究', time: '1天前', knowledgeBase: '越野跑知识' },
    { id: 5, type: 'planning', title: '抖音内容策略制定', time: '2天前', knowledgeBase: '对话历史' },
  ];

  // 快速操作
  const quickActions = [
    { title: '新增文档', icon: <FileText className="w-5 h-5" />, description: '创建新的知识文档', action: 'create' },
    { title: '智能搜索', icon: <Search className="w-5 h-5" />, description: '搜索所有知识库', action: 'search' },
    { title: '查看日历', icon: <Calendar className="w-5 h-5" />, description: '查看项目时间线', action: 'calendar' },
    { title: '系统设置', icon: <Settings className="w-5 h-5" />, description: '管理知识库设置', action: 'settings' },
  ];

  return (
    <div className="p-8">
      {/* 欢迎区域 */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">欢迎回来，铮哥！</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">你的第二大脑已整合所有项目知识，随时为你服务</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium">
              2026年2月27日
            </div>
            <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              同步数据
            </button>
          </div>
        </div>
      </div>

      {/* 知识库概览 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {knowledgeStats.map((stat) => (
          <Link
            key={stat.name}
            href={stat.path}
            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.color} bg-opacity-10`}>
                <div className={stat.color.replace('bg-', 'text-')}>
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold">{stat.count}</div>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{stat.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">点击查看详情</p>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 最近活动 */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">最近活动</h2>
              <Link href="/conversations" className="text-blue-500 hover:text-blue-600 text-sm font-medium">
                查看全部
              </Link>
            </div>
            
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
                    <Clock className="w-5 h-5 text-gray-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-gray-900 dark:text-white">{activity.title}</h4>
                      <span className="text-sm text-gray-500">{activity.time}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">{activity.knowledgeBase}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 快速操作 */}
        <div>
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">快速操作</h2>
            
            <div className="space-y-4">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  className="w-full flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-left"
                >
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-500">
                    {action.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{action.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{action.description}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* 系统状态 */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="font-medium text-gray-900 dark:text-white mb-3">系统状态</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">存储使用</span>
                  <span className="font-medium">24%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '24%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">AI记忆关联</span>
                  <span className="font-medium">启用</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">自动备份</span>
                  <span className="font-medium text-green-500">正常</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 项目进度 */}
      <div className="mt-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">项目进度</h2>
            <TrendingUp className="w-6 h-6 text-gray-400" />
          </div>
          
          <div className="space-y-6">
            {/* ReVibe项目 */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-500" />
                  <h3 className="font-semibold">ReVibe项目</h3>
                </div>
                <span className="text-sm font-medium">47%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '47%' }}></div>
              </div>
              <div className="flex items-center justify-between mt-2 text-sm text-gray-500">
                <span>ACL图标: 7/40</span>
                <span>前端: 90%</span>
                <span>商业注册: 进行中</span>
              </div>
            </div>

            {/* 越野跑知识库 */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-green-500" />
                  <h3 className="font-semibold">越野跑知识库</h3>
                </div>
                <span className="text-sm font-medium">85%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <div className="flex items-center justify-between mt-2 text-sm text-gray-500">
                <span>参考资料: 23个</span>
                <span>分类: 6个</span>
                <span>更新: 2月26日</span>
              </div>
            </div>

            {/* 对话历史 */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-purple-500" />
                  <h3 className="font-semibold">对话历史整理</h3>
                </div>
                <span className="text-sm font-medium">30%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '30%' }}></div>
              </div>
              <div className="flex items-center justify-between mt-2 text-sm text-gray-500">
                <span>对话: 89次</span>
                <span>已分类: 27次</span>
                <span>待整理: 62次</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部信息 */}
      <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>第二大脑 v2.0 · 整合所有项目知识 · 最后更新: 2026年2月27日 22:30</p>
        <p className="mt-1">AI助手: 大胖 · 状态: 24小时工作中</p>
      </div>
    </div>
  );
}