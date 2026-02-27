import { BookOpen, FileText, Link as LinkIcon, Book, GraduationCap, Dumbbell, Mountain, TrendingUp, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const knowledgeCategories = [
  {
    title: '核心理论',
    icon: <Book className="w-6 h-6" />,
    items: [
      { name: '丹尼尔斯跑步方程式', type: 'book', author: 'Jack Daniels 博士', description: 'VDOT系统与训练强度区间' },
      { name: '高级马拉松训练', type: 'book', author: 'Pete Pfitzinger', description: '马拉松生理学与周期化训练' },
      { name: '上坡运动员训练指南', type: 'book', author: 'Steve House 等', description: '山地跑代谢基础与有氧开发' },
      { name: '超马训练精要', type: 'book', author: 'Jason Koop', description: '超马能量系统与比赛策略' },
    ]
  },
  {
    title: '科学研究',
    icon: <GraduationCap className="w-6 h-6" />,
    items: [
      { name: '无氧阈值：50+年的争议', type: 'paper', link: 'https://escholarship.org/uc/item/58p3d8sz', description: '乳酸阈值与气体交换阈值研究' },
      { name: '耐力训练的未来', type: 'paper', author: 'Stephen Seiler 博士', description: '80:20极化训练模型' },
    ]
  },
  {
    title: '训练指南',
    icon: <FileText className="w-6 h-6" />,
    items: [
      { name: '超马训练指南', type: 'guide', source: 'TrainingPeaks', link: 'https://www.trainingpeaks.com/learn/ultramarathon-training-guide/', description: '超马入门到精通的系统指南' },
      { name: '马拉松训练指南', type: 'guide', source: 'TrainingPeaks', link: 'https://www.trainingpeaks.com/learn/marathon-training-guide/', description: '马拉松训练基础与进阶' },
      { name: '力量训练终极指南', type: 'guide', source: 'TrainingPeaks', link: 'https://www.trainingpeaks.com/learn/strength-training-guide/', description: '跑步专项力量训练方案' },
    ]
  },
  {
    title: '专项技术',
    icon: <Mountain className="w-6 h-6" />,
    items: [
      { name: '训练周期化入门', type: 'article', source: 'iRunFar', link: 'https://www.irunfar.com/running-periodization-it-isnt-rocket-science', description: '宏观、中观、微观周期安排' },
      { name: '超马新手指南', type: 'article', source: 'iRunFar', link: 'https://www.irunfar.com/newbies-guide-to-ultramarathons', description: '首个超马的完整准备指南' },
      { name: '越野跑技巧专题', type: 'article', source: 'iRunFar', link: 'https://www.irunfar.com/training/trail-skills', description: '上坡、下坡、技术地形技巧' },
      { name: '速度训练课表', type: 'article', source: 'iRunFar', link: 'https://www.irunfar.com/speed-based-workouts-for-ultramarathon-training', description: '超马中的速度训练整合' },
    ]
  },
  {
    title: '力量训练',
    icon: <Dumbbell className="w-6 h-6" />,
    items: [
      { name: '力量训练六步法', type: 'article', source: 'iRunFar', link: 'https://www.irunfar.com/six-steps-toward-successful-strength-training', description: '从基础到专项的力量训练' },
      { name: '垂直臀部驱动策略', type: 'article', source: 'iRunFar', link: 'https://www.irunfar.com/where-the-rubber-meets-the-road-the-role-of-hip-torque-in-optimal-running', description: '臀部生物力学与跑姿优化' },
    ]
  },
  {
    title: '恢复与预防',
    icon: <TrendingUp className="w-6 h-6" />,
    items: [
      { name: '跑步与恢复策略', type: 'article', source: 'iRunFar', link: 'https://www.irunfar.com/running-and-recovery', description: '主动恢复与恢复监测' },
      { name: '过度训练综合症', type: 'article', source: 'iRunFar', link: 'https://www.irunfar.com/overtraining-syndrome-part-two-treatment-and-prevention', description: '过度训练识别与预防' },
      { name: '追求边际增益', type: 'article', source: 'iRunFar', link: 'https://www.irunfar.com/in-pursuit-of-marginal-gains', description: 'Hardrock 100备赛细节优化' },
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

export default function TrailRunningPage() {
  return (
    <div className="p-8">
      {/* 页面头部 */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Link 
              href="/"
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">越野跑知识库</h1>
              <p className="text-gray-600 dark:text-gray-400">为铮哥整理的专业越野跑训练资料库</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 bg-green-500 text-white rounded-lg font-medium">
              23 个参考资料
            </div>
          </div>
        </div>

        {/* 简介卡片 */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800 p-6 mb-6">
          <div className="flex items-start gap-4">
            <BookOpen className="w-8 h-8 text-green-500 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">知识库简介</h2>
              <p className="text-gray-600 dark:text-gray-400">
                这个知识库汇集了越野跑训练的核心理论、科学研究、训练指南和专项技术，涵盖从基础生理学到高级比赛策略的全方位内容。
                所有资料都经过精心筛选和整理，为铮哥的专业领域提供可靠参考。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 知识分类网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {knowledgeCategories.map((category) => (
          <div key={category.title} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{category.title}</h3>
            </div>
            
            <div className="space-y-3">
              {category.items.map((item, index) => (
                <div key={index} className="p-3 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1 truncate">{item.name}</h4>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-1">
                        {'author' in item && item.author && (
                          <span className="truncate">{item.author}</span>
                        )}
                        {'source' in item && item.source && (
                          <span className="truncate">来源: {item.source}</span>
                        )}
                      </div>
                      {'description' in item && item.description && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <div className={`p-1.5 rounded ${typeColors[item.type as keyof typeof typeColors]}`}>
                      {typeIcons[item.type as keyof typeof typeIcons]}
                    </div>
                  </div>
                  
                  <div className="mt-2">
                    {'link' in item && item.link ? (
                      <a 
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-green-500 hover:underline"
                      >
                        <LinkIcon className="w-3 h-3" />
                        查看原文
                      </a>
                    ) : (
                      <span className="text-xs text-gray-400 dark:text-gray-500">
                        {item.type === 'book' ? '实体书籍/电子书' : '请联系铮哥获取资料'}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 训练原则总结 */}
      <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">核心训练原则</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-4">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">80:20</span>
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">极化训练</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">80%低强度 + 20%高强度</p>
          </div>
          
          <div className="text-center p-4">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <span className="text-2xl font-bold text-green-600 dark:text-green-400">VDOT</span>
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">个性化强度</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">基于VO2max的训练配速</p>
          </div>
          
          <div className="text-center p-4">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">周期化</span>
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">科学安排</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">准备期-比赛期-过渡期</p>
          </div>
          
          <div className="text-center p-4">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
              <span className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">恢复</span>
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">主动恢复</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">训练适应发生在恢复期</p>
          </div>
        </div>
      </div>

      {/* 使用说明 */}
      <div className="mt-8 p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">如何使用这个知识库</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm">1</div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">训练计划制定</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">参考核心理论制定科学训练计划</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm">2</div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">视频内容创作</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">基于科学研究制作科普内容</p>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm">3</div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">客户咨询</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">提供专业的训练建议和指导</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm">4</div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">产品开发</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">为小程序和软件提供算法基础</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部信息 */}
      <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>越野跑知识库 · 专业参考资料库 · 为铮哥整理</p>
        <p className="mt-1">最后更新: 2026年2月27日 · 参考资料: 23个</p>
      </div>
    </div>
  );
}