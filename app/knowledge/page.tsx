import { BookOpen, FileText, Link as LinkIcon, Book, GraduationCap, Dumbbell, Mountain, TrendingUp } from 'lucide-react';
import NextLink from 'next/link';

const knowledgeCategories = [
  {
    title: '核心理论',
    icon: <Book className="w-6 h-6" />,
    items: [
      { name: '丹尼尔斯跑步方程式', type: 'book', author: 'Jack Daniels 博士' },
      { name: '高级马拉松训练', type: 'book', author: 'Pete Pfitzinger' },
      { name: '上坡运动员训练指南', type: 'book', author: 'Steve House 等' },
      { name: '超马训练精要', type: 'book', author: 'Jason Koop' },
    ]
  },
  {
    title: '科学研究',
    icon: <GraduationCap className="w-6 h-6" />,
    items: [
      { name: '无氧阈值：50+年的争议', type: 'paper', link: 'https://escholarship.org/uc/item/58p3d8sz' },
      { name: '耐力训练的未来', type: 'paper', author: 'Stephen Seiler 博士' },
    ]
  },
  {
    title: '训练指南',
    icon: <FileText className="w-6 h-6" />,
    items: [
      { name: '超马训练指南', type: 'guide', source: 'TrainingPeaks' },
      { name: '马拉松训练指南', type: 'guide', source: 'TrainingPeaks' },
      { name: '力量训练终极指南', type: 'guide', source: 'TrainingPeaks' },
    ]
  },
  {
    title: '专项技术',
    icon: <Mountain className="w-6 h-6" />,
    items: [
      { name: '训练周期化入门', type: 'article', source: 'iRunFar' },
      { name: '超马新手指南', type: 'article', source: 'iRunFar' },
      { name: '越野跑技巧专题', type: 'article', source: 'iRunFar' },
      { name: '速度训练课表', type: 'article', source: 'iRunFar' },
    ]
  },
  {
    title: '力量训练',
    icon: <Dumbbell className="w-6 h-6" />,
    items: [
      { name: '力量训练六步法', type: 'article', source: 'iRunFar' },
      { name: '垂直臀部驱动策略', type: 'article', source: 'iRunFar' },
    ]
  },
  {
    title: '恢复与预防',
    icon: <TrendingUp className="w-6 h-6" />,
    items: [
      { name: '跑步与恢复策略', type: 'article', source: 'iRunFar' },
      { name: '过度训练综合症', type: 'article', source: 'iRunFar' },
      { name: '追求边际增益', type: 'article', source: 'iRunFar' },
    ]
  }
];

const typeColors = {
  book: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
  paper: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
  guide: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
  article: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400',
};

const typeIcons = {
  book: <Book className="w-4 h-4" />,
  paper: <FileText className="w-4 h-4" />,
  guide: <FileText className="w-4 h-4" />,
  article: <LinkIcon className="w-4 h-4" />,
};

export default function KnowledgePage() {
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
                <h1 className="text-xl font-semibold">越野跑知识库</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">Trail Running Knowledge Base</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <NextLink 
                href="/"
                className="px-4 py-2 text-sm rounded-lg border border-border hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                返回首页
              </NextLink>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 简介 */}
        <div className="mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">越野跑训练科学知识库</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              为铮哥整理的专业越野跑训练资料库，涵盖核心理论、科学研究、训练指南和专项技术
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg">
              <span className="text-sm font-medium">总计: 23 个参考资料</span>
              <span className="text-xs opacity-80">持续更新中</span>
            </div>
          </div>
        </div>

        {/* 知识分类 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {knowledgeCategories.map((category) => (
            <div key={category.title} className="bg-card rounded-xl border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.items.map((item, index) => (
                  <div key={index} className="p-3 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium mb-1 truncate">{item.name}</h4>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          {'author' in item && item.author && (
                            <span className="truncate">{item.author}</span>
                          )}
                          {'source' in item && item.source && (
                            <span className="truncate">来源: {item.source}</span>
                          )}
                        </div>
                      </div>
                      <div className={`p-1.5 rounded ${typeColors[item.type as keyof typeof typeColors]}`}>
                        {typeIcons[item.type as keyof typeof typeIcons]}
                      </div>
                    </div>
                    
                    {item.link && (
                      <a 
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-sm text-accent hover:underline"
                      >
                        <LinkIcon className="w-3 h-3" />
                        查看原文
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 训练原则总结 */}
        <div className="mt-12 bg-card rounded-xl border border-border p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">核心训练原则</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">80:20</span>
              </div>
              <h4 className="font-semibold mb-1">极化训练</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">80%低强度 + 20%高强度</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">VDOT</span>
              </div>
              <h4 className="font-semibold mb-1">个性化强度</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">基于VO2max的训练配速</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">周期化</span>
              </div>
              <h4 className="font-semibold mb-1">科学安排</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">准备期-比赛期-过渡期</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                <span className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">恢复</span>
              </div>
              <h4 className="font-semibold mb-1">主动恢复</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">训练适应发生在恢复期</p>
            </div>
          </div>
        </div>

        {/* 使用说明 */}
        <div className="mt-8 p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl">
          <h3 className="text-lg font-semibold mb-3">如何使用这个知识库</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm">1</div>
                <div>
                  <h4 className="font-medium">训练计划制定</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">参考核心理论制定科学训练计划</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm">2</div>
                <div>
                  <h4 className="font-medium">视频内容创作</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">基于科学研究制作科普内容</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm">3</div>
                <div>
                  <h4 className="font-medium">客户咨询</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">提供专业的训练建议和指导</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm">4</div>
                <div>
                  <h4 className="font-medium">产品开发</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">为小程序和软件提供算法基础</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 底部信息 */}
      <footer className="border-t border-border mt-12 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <p>越野跑知识库 · 为铮哥的专业领域整理</p>
              <p className="mt-1">包含23个核心参考资料，持续更新中</p>
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