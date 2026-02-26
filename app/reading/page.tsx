import { BookOpen, FileText, Users, Target, BarChart, Cpu, RefreshCw, TrendingUp } from 'lucide-react';
import NextLink from 'next/link';

const bookNotes = [
  {
    title: '《人人都是产品经理》',
    author: '苏杰',
    category: '产品思维',
    icon: <Users className="w-6 h-6" />,
    color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
    keyPoints: [
      '产品经理是产品的CEO，负责从概念到迭代',
      'PDCA循环：计划、执行、检查、处理',
      '四个成长阶段：助理→经理→高级→总监',
      '核心能力：用户思维、商业思维、数据思维、技术思维'
    ],
    application: [
      '抖音账号运营：把账号当产品',
      'ACL小程序开发：MVP思维指导',
      '视频内容创作：数据驱动决策',
      '个人成长：把自己当产品打造'
    ]
  }
];

const coreConcepts = [
  {
    title: 'PDCA循环',
    icon: <RefreshCw className="w-5 h-5" />,
    description: '计划→执行→检查→处理的持续改进循环'
  },
  {
    title: 'MVP思维',
    icon: <Target className="w-5 h-5" />,
    description: '最小可行产品，快速验证核心假设'
  },
  {
    title: '用户思维',
    icon: <Users className="w-5 h-5" />,
    description: '站在用户角度思考，具备同理心'
  },
  {
    title: '数据驱动',
    icon: <BarChart className="w-5 h-5" />,
    description: '用数据支持决策，而不是凭感觉'
  },
  {
    title: '产品生命周期',
    icon: <TrendingUp className="w-5 h-5" />,
    description: '引入期→成长期→成熟期→衰退期'
  },
  {
    title: '技术思维',
    icon: <Cpu className="w-5 h-5" />,
    description: '理解技术边界和可能性'
  }
];

export default function ReadingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-semibold">读书笔记</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">Reading Notes</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <NextLink 
                href="/"
                className="px-4 py-2 text-sm rounded-lg border border-border hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                返回首页
              </NextLink>
              <NextLink 
                href="/knowledge"
                className="px-4 py-2 text-sm rounded-lg border border-border hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                知识库
              </NextLink>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 简介 */}
        <div className="mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">《人人都是产品经理》读书笔记</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              为铮哥整理的产品思维框架，适用于抖音运营、小程序开发、内容创作
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg">
              <span className="text-sm font-medium">作者: 苏杰</span>
              <span className="text-xs opacity-80">2010年出版</span>
            </div>
          </div>
        </div>

        {/* 核心观点 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              书籍核心观点
            </h3>
            
            <div className="space-y-4">
              {bookNotes.map((book) => (
                <div key={book.title} className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className={`p-3 rounded-lg ${book.color}`}>
                      {book.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">{book.title}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{book.author}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-2 text-gray-700 dark:text-gray-300">核心要点:</h5>
                    <ul className="space-y-2">
                      {book.keyPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <div className="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mt-0.5">
                            <span className="text-xs">{index + 1}</span>
                          </div>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-2 text-gray-700 dark:text-gray-300">对铮哥的应用:</h5>
                    <ul className="space-y-2">
                      {book.application.map((app, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <div className="w-5 h-5 rounded-full bg-accent text-accent-foreground flex items-center justify-center mt-0.5">
                            <span className="text-xs">✓</span>
                          </div>
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 核心概念 */}
          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              核心概念解析
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {coreConcepts.map((concept, index) => (
                <div key={index} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded bg-gray-100 dark:bg-gray-800">
                      {concept.icon}
                    </div>
                    <h4 className="font-semibold">{concept.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {concept.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* 产品开发流程 */}
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
              <h4 className="font-semibold mb-3">产品开发流程（PDCA）</h4>
              <div className="grid grid-cols-4 gap-2">
                {['计划', '执行', '检查', '处理'].map((step, index) => (
                  <div key={step} className="text-center">
                    <div className="w-10 h-10 mx-auto mb-1 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div className="text-sm font-medium">{step}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 产品经理能力模型 */}
        <div className="bg-card rounded-xl border border-border p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">产品经理四大核心能力</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="font-semibold mb-2">用户思维</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                同理心、用户画像、用户旅程
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="font-semibold mb-2">商业思维</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                商业模式、成本意识、ROI分析
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <BarChart className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="font-semibold mb-2">数据思维</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                数据驱动、关键指标、数据分析
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                <Cpu className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h4 className="font-semibold mb-2">技术思维</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                技术理解、技术边界、技术趋势
              </p>
            </div>
          </div>
        </div>

        {/* 行动指南 */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">铮哥的行动指南</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <h4 className="font-semibold mb-2">抖音账号产品化</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• 把账号当作产品运营</li>
                <li>• 用户研究：分析4.2万粉丝需求</li>
                <li>• 内容规划：基于数据驱动选题</li>
                <li>• 持续迭代：根据反馈优化内容</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-green-600 dark:text-green-400">2</span>
              </div>
              <h4 className="font-semibold mb-2">ACL小程序MVP开发</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• 最小可行产品思维</li>
                <li>• 先做核心闭环，快速验证</li>
                <li>• 用户测试获取早期反馈</li>
                <li>• 小步快跑，持续迭代</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-purple-600 dark:text-purple-400">3</span>
              </div>
              <h4 className="font-semibold mb-2">个人成长产品化</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• 把自己当作产品打造</li>
                <li>• 设定成长目标（10万粉丝等）</li>
                <li>• 制定执行计划（每月1本书）</li>
                <li>• 持续优化，建立个人品牌</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* 底部信息 */}
      <footer className="border-t border-border mt-12 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <p>《人人都是产品经理》读书笔记 · 为铮哥的产品思维提升整理</p>
              <p className="mt-1">结合抖音运营、小程序开发、个人成长的实际应用</p>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <p>最后更新: 2026年2月26日</p>
              <p className="mt-1">整理者: 大胖</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}