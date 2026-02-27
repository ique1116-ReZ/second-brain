import { Zap, FileText, Code, DollarSign, Users, Calendar, CheckCircle, Clock, AlertCircle, FolderOpen, Database, Settings } from 'lucide-react';
import Link from 'next/link';

export default function ReVibePage() {
  // 项目模块
  const projectModules = [
    {
      id: 'business',
      name: '商业计划',
      icon: <FileText className="w-5 h-5" />,
      color: 'bg-blue-500',
      status: 'completed',
      items: [
        { name: '商业计划书', status: 'completed', link: '/revibe/business-plan' },
        { name: '市场分析', status: 'completed', link: '/revibe/market-analysis' },
        { name: '商业模式', status: 'completed', link: '/revibe/business-model' },
      ]
    },
    {
      id: 'icons',
      name: 'ACL图标项目',
      icon: <FolderOpen className="w-5 h-5" />,
      color: 'bg-green-500',
      status: 'in-progress',
      items: [
        { name: 'Phase 1: 急性期 (7/7)', status: 'completed', link: '/revibe/icons/phase1' },
        { name: 'Phase 2: 早期康复 (0/8)', status: 'pending', link: '/revibe/icons/phase2' },
        { name: 'Phase 3: 中期康复 (0/7)', status: 'pending', link: '/revibe/icons/phase3' },
        { name: 'Phase 4: 力量建立 (0/9)', status: 'pending', link: '/revibe/icons/phase4' },
        { name: 'Phase 5: 跳跃准备 (0/7)', status: 'pending', link: '/revibe/icons/phase5' },
        { name: 'Phase 6: 动态训练 (0/8)', status: 'pending', link: '/revibe/icons/phase6' },
        { name: 'Phase 7: 重返运动 (0/6)', status: 'pending', link: '/revibe/icons/phase7' },
      ]
    },
    {
      id: 'development',
      name: '技术开发',
      icon: <Code className="w-5 h-5" />,
      color: 'bg-purple-500',
      status: 'in-progress',
      items: [
        { name: '前端开发 (90%)', status: 'in-progress', link: '/revibe/development/frontend' },
        { name: '后端架构', status: 'pending', link: '/revibe/development/backend' },
        { name: '算法实现', status: 'pending', link: '/revibe/development/algorithms' },
        { name: '数据库设计', status: 'pending', link: '/revibe/development/database' },
      ]
    },
    {
      id: 'registration',
      name: '商业注册',
      icon: <DollarSign className="w-5 h-5" />,
      color: 'bg-yellow-500',
      status: 'in-progress',
      items: [
        { name: '深圳注册方案', status: 'completed', link: '/revibe/registration/shenzhen' },
        { name: '孵化器申请', status: 'in-progress', link: '/revibe/registration/incubator' },
        { name: '微信支付接入', status: 'pending', link: '/revibe/registration/wechat-pay' },
        { name: '税务登记', status: 'pending', link: '/revibe/registration/tax' },
      ]
    },
    {
      id: 'operations',
      name: '运营与市场',
      icon: <Users className="w-5 h-5" />,
      color: 'bg-pink-500',
      status: 'planning',
      items: [
        { name: '用户增长策略', status: 'planning', link: '/revibe/operations/growth' },
        { name: '内容运营计划', status: 'planning', link: '/revibe/operations/content' },
        { name: '抖音推广策略', status: 'in-progress', link: '/revibe/operations/douyin' },
        { name: '合作伙伴', status: 'planning', link: '/revibe/operations/partners' },
      ]
    },
    {
      id: 'timeline',
      name: '项目时间线',
      icon: <Calendar className="w-5 h-5" />,
      color: 'bg-indigo-500',
      status: 'active',
      items: [
        { name: '2026年2月: 项目启动', status: 'completed' },
        { name: '2026年3月: MVP上线', status: 'upcoming' },
        { name: '2026年4月: 用户测试', status: 'upcoming' },
        { name: '2026年6月: 正式发布', status: 'upcoming' },
      ]
    }
  ];

  // 状态图标
  const statusIcons = {
    completed: <CheckCircle className="w-4 h-4 text-green-500" />,
    'in-progress': <Clock className="w-4 h-4 text-blue-500" />,
    pending: <AlertCircle className="w-4 h-4 text-yellow-500" />,
    planning: <Settings className="w-4 h-4 text-gray-500" />,
    upcoming: <Calendar className="w-4 h-4 text-purple-500" />,
  };

  // 项目统计
  const projectStats = {
    totalTasks: 32,
    completedTasks: 11,
    inProgressTasks: 8,
    pendingTasks: 13,
    completionRate: 34,
  };

  return (
    <div className="p-8">
      {/* 项目头部 */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">ReVibe项目</h1>
            <p className="text-gray-600 dark:text-gray-400">ACL术后运动能力重建系统 - 基于循证运动科学</p>
          </div>
        </div>

        {/* 项目状态条 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">项目总进度</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">整体完成度: {projectStats.completionRate}%</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500">{projectStats.completedTasks}</div>
                <div className="text-sm text-gray-500">已完成</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500">{projectStats.inProgressTasks}</div>
                <div className="text-sm text-gray-500">进行中</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">{projectStats.pendingTasks}</div>
                <div className="text-sm text-gray-500">待开始</div>
              </div>
            </div>
          </div>
          
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${projectStats.completionRate}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* 项目模块网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectModules.map((module) => (
          <div 
            key={module.id}
            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow"
          >
            {/* 模块头部 */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${module.color} bg-opacity-10`}>
                  <div className={module.color.replace('bg-', 'text-')}>
                    {module.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{module.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    {statusIcons[module.status as keyof typeof statusIcons]}
                    <span className="text-xs text-gray-500 capitalize">{module.status.replace('-', ' ')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 模块内容 */}
            <div className="space-y-3">
              {module.items.map((item: any, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                  <div className="flex items-center gap-3">
                    {'link' in item && item.link ? (
                      <Link href={item.link} className="font-medium text-gray-900 dark:text-white hover:text-blue-500">
                        {item.name}
                      </Link>
                    ) : (
                      <span className="font-medium text-gray-900 dark:text-white">{item.name}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {statusIcons[item.status as keyof typeof statusIcons]}
                  </div>
                </div>
              ))}
            </div>

            {/* 模块操作 */}
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <Link 
                  href={`/revibe/${module.id}`}
                  className="flex-1 text-center px-3 py-2 text-sm font-medium text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                >
                  查看详情
                </Link>
                <button className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                  编辑
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 关键文档 */}
      <div className="mt-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">关键文档</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link 
              href="/revibe/business-plan"
              className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            >
              <FileText className="w-6 h-6 text-blue-500 mb-2" />
              <h3 className="font-medium text-gray-900 dark:text-white">商业计划书</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">简化版，孵化器申请用</p>
            </Link>

            <Link 
              href="/revibe/icons/phase1"
              className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
            >
              <Database className="w-6 h-6 text-green-500 mb-2" />
              <h3 className="font-medium text-gray-900 dark:text-white">ACL图标Phase 1</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">7个图标完成存档</p>
            </Link>

            <Link 
              href="/revibe/registration/shenzhen"
              className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-colors"
            >
              <DollarSign className="w-6 h-6 text-yellow-500 mb-2" />
              <h3 className="font-medium text-gray-900 dark:text-white">深圳注册指南</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">详细步骤和方案</p>
            </Link>

            <Link 
              href="/revibe/operations/douyin"
              className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-pink-500 hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-colors"
            >
              <Users className="w-6 h-6 text-pink-500 mb-2" />
              <h3 className="font-medium text-gray-900 dark:text-white">抖音推广策略</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">内容计划和标题推送</p>
            </Link>
          </div>
        </div>
      </div>

      {/* 项目说明 */}
      <div className="mt-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800 p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">项目说明</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">项目定位</h3>
            <p className="text-gray-600 dark:text-gray-400">
              ReVibe是一个基于循证运动科学的阶段化运动能力重建系统，专注于为ACL术后用户提供科学、安全、个性化的训练指导。
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">核心原则</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>阶段优先于时间</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>能力优先于主观感受</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>指导而非判断</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 底部信息 */}
      <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>ReVibe项目知识库 · 最后更新: 2026年2月27日 22:45</p>
        <p className="mt-1">项目负责人: 铮哥 · AI助手: 大胖 · 状态: 24小时开发中</p>
      </div>
    </div>
  );
}