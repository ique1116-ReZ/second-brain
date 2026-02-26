import MemoryList from '@/components/memory-list';
import Filters from '@/components/filters';
import Stats from '@/components/stats';
import SearchButton from '@/components/search-button';

export default async function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold">脑</span>
              </div>
              <div>
                <h1 className="text-xl font-semibold">第二大脑</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">Second Brain</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <SearchButton />
              <button className="px-4 py-2 text-sm rounded-lg border border-border hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                新增记忆
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 左侧边栏 */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-card rounded-xl border border-border p-6">
              <h2 className="text-lg font-semibold mb-4">系统概览</h2>
              <Stats />
            </div>
            
            <div className="bg-card rounded-xl border border-border p-6">
              <h2 className="text-lg font-semibold mb-4">筛选器</h2>
              <Filters />
            </div>
            
            <div className="bg-card rounded-xl border border-border p-6">
              <h2 className="text-lg font-semibold mb-4">使用提示</h2>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>使用 <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">Cmd+K</kbd> 快速搜索</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>点击卡片查看详情</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>使用筛选器快速定位内容</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>标签可以帮助分类和组织</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 主内容区 */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">所有记忆</h2>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  按创建时间排序
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                这里汇集了所有的笔记、对话、任务和想法。使用搜索和筛选功能快速找到你需要的内容。
              </p>
            </div>

            <MemoryList />
          </div>
        </div>
      </main>

      {/* 底部信息 */}
      <footer className="border-t border-border mt-12 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <p>第二大脑系统 · 为铮哥打造的个人知识管理系统</p>
              <p className="mt-1">构建于 Next.js · 极致简约设计</p>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <p>版本 1.0.0 · 最后更新: {new Date().toLocaleDateString('zh-CN')}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}