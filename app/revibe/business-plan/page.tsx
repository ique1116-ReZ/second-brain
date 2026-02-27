import { FileText, Download, Share2, Edit, Printer, CheckCircle, AlertCircle, Clock, Users, DollarSign, TrendingUp, Shield } from 'lucide-react';
import Link from 'next/link';

export default function BusinessPlanPage() {
  // 商业计划书内容
  const businessPlan = {
    title: 'ReVibe商业计划书（简化版）',
    version: 'v1.0',
    lastUpdated: '2026年2月27日',
    status: 'completed',
    
    sections: [
      {
        id: 'overview',
        title: '项目概述',
        content: `ReVibe是一个基于循证运动科学的阶段化运动能力重建系统，专注于为ACL术后用户提供科学、安全、个性化的训练指导。`,
        keyPoints: [
          '基于循证运动科学',
          '阶段化训练指导',
          '视频动作评估',
          '个性化训练计划'
        ]
      },
      {
        id: 'market',
        title: '市场分析',
        content: `中国每年ACL手术约10万例，康复期长达9-12个月。现有产品要么太医疗化，要么缺乏科学性。ReVibe填补了科学指导与便捷使用之间的空白。`,
        keyPoints: [
          '目标用户: ACL术后康复期人群',
          '市场规模: 每年10万手术病例',
          '康复周期: 9-12个月',
          '市场空缺: 科学+便捷的专项指导'
        ]
      },
      {
        id: 'product',
        title: '产品描述',
        content: `核心功能包括阶段引擎、视频评估、训练生成和进度跟踪。技术特点包括Mediapipe姿态识别、后端计算、极简前端设计。`,
        keyPoints: [
          '阶段引擎: 基于能力的进阶判断',
          '视频评估: 动作质量分析',
          '训练生成: 个性化计划',
          '技术栈: Next.js + FastAPI'
        ]
      },
      {
        id: 'business',
        title: '商业模式',
        content: `主要收入来自订阅服务，包括基础免费功能和高级付费功能。未来可拓展企业合作和增值服务。`,
        keyPoints: [
          '订阅服务: 29-99元/月',
          '增值服务: 专业报告、一对一指导',
          '企业合作: 运动队、保险公司',
          '成本结构: 开发+运营+营销'
        ]
      },
      {
        id: 'team',
        title: '团队介绍',
        content: `当前为个人开发者，具备运动科学和软件开发背景。未来计划组建包含运动科学专家、工程师、设计师的完整团队。`,
        keyPoints: [
          '创始人: 铮哥（个人开发者）',
          '背景: 运动科学 + 软件开发',
          '优势: 技术实现 + 专业知识',
          '未来团队: 专家+工程师+设计师'
        ]
      },
      {
        id: 'risks',
        title: '风险与对策',
        content: `主要风险包括政策风险、技术风险、市场风险和竞争风险。通过明确产品边界、持续优化算法、小步快跑策略来应对。`,
        keyPoints: [
          '政策风险: 明确非医疗定位',
          '技术风险: 持续算法优化',
          '市场风险: 免费试用教育市场',
          '竞争风险: 专注垂直领域'
        ]
      }
    ],
    
    disclaimer: `重要声明：本产品为运动训练指导工具，不提供医疗诊断、治疗或风险预测。用户应在医生允许下进行训练，如有不适请立即停止并咨询专业医生。`
  };

  // 使用场景
  const useCases = [
    {
      title: '孵化器申请',
      description: '用于申请免费注册地址和政策支持',
      icon: <Users className="w-5 h-5" />,
      status: 'active'
    },
    {
      title: '投资洽谈',
      description: '初步展示项目价值和商业模式',
      icon: <DollarSign className="w-5 h-5" />,
      status: 'ready'
    },
    {
      title: '团队招募',
      description: '吸引技术合伙人和早期成员',
      icon: <TrendingUp className="w-5 h-5" />,
      status: 'ready'
    },
    {
      title: '政策咨询',
      description: '向政府部门咨询创业支持',
      icon: <Shield className="w-5 h-5" />,
      status: 'active'
    }
  ];

  return (
    <div className="p-8">
      {/* 文档头部 */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{businessPlan.title}</h1>
              <div className="flex items-center gap-4 mt-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                  版本 {businessPlan.version}
                </span>
                <span className="text-gray-500 dark:text-gray-400">最后更新: {businessPlan.lastUpdated}</span>
                <span className="flex items-center gap-1 text-green-500">
                  <CheckCircle className="w-4 h-4" />
                  已完成
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center gap-2">
              <Download className="w-4 h-4" />
              下载PDF
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              分享
            </button>
          </div>
        </div>

        {/* 使用场景 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">使用场景</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-500">
                    {useCase.icon}
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    useCase.status === 'active' 
                      ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400'
                  }`}>
                    {useCase.status === 'active' ? '进行中' : '已就绪'}
                  </span>
                </div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-1">{useCase.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 商业计划书内容 */}
      <div className="space-y-8">
        {businessPlan.sections.map((section) => (
          <div key={section.id} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">{section.title}</h2>
              <button className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                <Edit className="w-4 h-4" />
              </button>
            </div>
            
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 mb-6">{section.content}</p>
              
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">关键要点</h4>
                <ul className="space-y-2">
                  {section.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 免责声明 */}
      <div className="mt-8 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl border border-red-200 dark:border-red-800 p-6">
        <div className="flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">重要声明</h3>
            <p className="text-gray-600 dark:text-gray-400">{businessPlan.disclaimer}</p>
          </div>
        </div>
      </div>

      {/* 文档操作 */}
      <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">文档操作</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors flex flex-col items-center">
            <Download className="w-6 h-6 text-blue-500 mb-2" />
            <span className="font-medium">下载文档</span>
            <span className="text-sm text-gray-500 mt-1">PDF格式</span>
          </button>
          
          <button className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors flex flex-col items-center">
            <Printer className="w-6 h-6 text-green-500 mb-2" />
            <span className="font-medium">打印版本</span>
            <span className="text-sm text-gray-500 mt-1">A4格式</span>
          </button>
          
          <button className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors flex flex-col items-center">
            <Share2 className="w-6 h-6 text-purple-500 mb-2" />
            <span className="font-medium">分享链接</span>
            <span className="text-sm text-gray-500 mt-1">加密访问</span>
          </button>
          
          <Link 
            href="/revibe"
            className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex flex-col items-center"
          >
            <FileText className="w-6 h-6 text-gray-500 mb-2" />
            <span className="font-medium">返回项目</span>
            <span className="text-sm text-gray-500 mt-1">ReVibe主页</span>
          </Link>
        </div>
      </div>

      {/* 版本历史 */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">版本历史</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                <FileText className="w-4 h-4 text-blue-500" />
              </div>
              <div>
                <h4 className="font-medium">v1.0 - 当前版本</h4>
                <p className="text-sm text-gray-500">简化版，孵化器申请用</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">2026年2月27日</div>
          </div>
          
          <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
                <Clock className="w-4 h-4 text-gray-500" />
              </div>
              <div>
                <h4 className="font-medium">v2.0 - 规划中</h4>
                <p className="text-sm text-gray-500">完整版，投资洽谈用</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">预计2026年3月</div>
          </div>
        </div>
      </div>

      {/* 底部信息 */}
      <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>商业计划书 · ReVibe项目 · 仅供内部使用</p>
        <p className="mt-1">创建者: 铮哥 · 整理者: 大胖 · 最后更新: {businessPlan.lastUpdated}</p>
      </div>
    </div>
  );
}