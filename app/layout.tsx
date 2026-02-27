import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Brain, Zap, Database, Search, User } from 'lucide-react';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '第二大脑 - 铮哥的超级知识库',
  description: '整合所有项目、对话、知识的智能管理系统',
};

// 知识库分类
const knowledgeBases = [
  { id: 'overview', name: '总览', icon: <Brain className="w-4 h-4" />, path: '/' },
  { id: 'revibe', name: 'ReVibe项目', icon: <Zap className="w-4 h-4" />, path: '/revibe' },
  { id: 'trail-running', name: '越野跑知识', icon: <User className="w-4 h-4" />, path: '/trail-running' },
  { id: 'conversations', name: '对话历史', icon: <Database className="w-4 h-4" />, path: '/conversations' },
  { id: 'search', name: '智能搜索', icon: <Search className="w-4 h-4" />, path: '/search' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900`}>
        <div className="min-h-screen flex">
          {/* 侧边栏导航 */}
          <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
            {/* Logo */}
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">第二大脑</h1>
                  <p className="text-xs text-gray-500 dark:text-gray-400">铮哥的超级知识库</p>
                </div>
              </div>
            </div>

            {/* 知识库切换 */}
            <div className="p-4">
              <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                知识库
              </h2>
              <nav className="space-y-1">
                {knowledgeBases.map((kb) => (
                  <Link
                    key={kb.id}
                    href={kb.path}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                  >
                    <div className="text-gray-500 dark:text-gray-400 group-hover:text-blue-500">
                      {kb.icon}
                    </div>
                    <span className="font-medium">{kb.name}</span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* 统计信息 */}
            <div className="mt-auto p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">知识库</span>
                  <span className="font-semibold">3个</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">文档</span>
                  <span className="font-semibold">127个</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">对话</span>
                  <span className="font-semibold">89次</span>
                </div>
              </div>
            </div>

            {/* 用户信息 */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">铮</span>
                </div>
                <div>
                  <p className="font-medium">铮哥</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">深圳 · 创业者</p>
                </div>
              </div>
            </div>
          </aside>

          {/* 主内容区 */}
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}