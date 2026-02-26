import { MemoryItem, MemoryType } from '@/types';

// 模拟数据 - 实际项目中会从数据库或API获取
export const mockMemories: MemoryItem[] = [
  {
    id: '1',
    title: '第二大脑项目规划',
    content: '使用 Next.js 构建个人知识管理系统，包含全局搜索、多维筛选等功能。',
    type: 'note',
    tags: ['project', 'nextjs', 'knowledge-management'],
    createdAt: new Date('2024-02-25'),
    updatedAt: new Date('2024-02-25'),
    source: 'conversation'
  },
  {
    id: '2',
    title: '与大胖的初次对话',
    content: '确定了身份：大胖（AI助手）和铮哥（用户）。讨论了第二大脑系统的需求。',
    type: 'conversation',
    tags: ['onboarding', 'setup', 'planning'],
    createdAt: new Date('2024-02-26'),
    updatedAt: new Date('2024-02-26'),
    source: 'chat'
  },
  {
    id: '3',
    title: 'OpenClaw 版本信息',
    content: '当前版本：2026.2.23，Node.js v22.22.0，运行在 OpenCloudOS 系统上。',
    type: 'note',
    tags: ['system', 'version', 'setup'],
    createdAt: new Date('2024-02-26'),
    updatedAt: new Date('2024-02-26'),
    source: 'system'
  },
  {
    id: '4',
    title: 'Minimal UI 设计原则',
    content: '界面保持极致简约，减少视觉噪音，专注于内容本身。使用干净的布局和足够的留白。',
    type: 'idea',
    tags: ['design', 'ui', 'minimalism'],
    createdAt: new Date('2024-02-24'),
    updatedAt: new Date('2024-02-24'),
    source: 'note'
  },
  {
    id: '5',
    title: '全局搜索功能设计',
    content: '支持 Cmd+K 快捷键唤起搜索，覆盖所有内容类型。需要实现模糊搜索和高亮显示。',
    type: 'task',
    tags: ['feature', 'search', 'keyboard-shortcut'],
    createdAt: new Date('2024-02-23'),
    updatedAt: new Date('2024-02-23'),
    source: 'planning'
  },
  {
    id: '6',
    title: '多维筛选需求',
    content: '按日期范围、内容类型（笔记、对话、任务等）进行过滤。需要直观的筛选界面。',
    type: 'task',
    tags: ['feature', 'filter', 'ui'],
    createdAt: new Date('2024-02-22'),
    updatedAt: new Date('2024-02-22'),
    source: 'requirement'
  },
  {
    id: '7',
    title: 'Next.js 项目结构',
    content: '使用 App Router，TypeScript，Tailwind CSS。组件化架构，关注点分离。',
    type: 'note',
    tags: ['technical', 'nextjs', 'architecture'],
    createdAt: new Date('2024-02-21'),
    updatedAt: new Date('2024-02-21'),
    source: 'documentation'
  },
  {
    id: '8',
    title: '数据持久化方案',
    content: '考虑使用 SQLite 或 PostgreSQL 存储记忆数据。需要设计数据模型和迁移脚本。',
    type: 'idea',
    tags: ['database', 'persistence', 'backend'],
    createdAt: new Date('2024-02-20'),
    updatedAt: new Date('2024-02-20'),
    source: 'planning'
  },
  {
    id: '9',
    title: '响应式设计考虑',
    content: '确保在移动设备和桌面端都有良好的体验。使用 Tailwind 的响应式工具类。',
    type: 'note',
    tags: ['design', 'responsive', 'mobile'],
    createdAt: new Date('2024-02-19'),
    updatedAt: new Date('2024-02-19'),
    source: 'design'
  },
  {
    id: '10',
    title: '快捷键系统',
    content: '除了 Cmd+K 全局搜索，还需要考虑其他快捷键：Esc 关闭模态框，Enter 选择，上下箭头导航等。',
    type: 'task',
    tags: ['feature', 'keyboard', 'ux'],
    createdAt: new Date('2024-02-18'),
    updatedAt: new Date('2024-02-18'),
    source: 'planning'
  }
];

// 获取所有记忆点
export async function getMemories(): Promise<MemoryItem[]> {
  // 模拟异步获取
  return new Promise(resolve => {
    setTimeout(() => resolve(mockMemories), 100);
  });
}

// 搜索记忆点
export async function searchMemories(query: string): Promise<MemoryItem[]> {
  if (!query.trim()) return mockMemories;
  
  const lowerQuery = query.toLowerCase();
  return mockMemories.filter(item => 
    item.title.toLowerCase().includes(lowerQuery) ||
    item.content.toLowerCase().includes(lowerQuery) ||
    item.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

// 按类型筛选
export async function filterByType(type: MemoryType | 'all'): Promise<MemoryItem[]> {
  if (type === 'all') return mockMemories;
  return mockMemories.filter(item => item.type === type);
}

// 按日期范围筛选
export async function filterByDate(start: Date, end: Date): Promise<MemoryItem[]> {
  return mockMemories.filter(item => 
    item.createdAt >= start && item.createdAt <= end
  );
}

// 获取所有标签
export function getAllTags(): string[] {
  const tags = new Set<string>();
  mockMemories.forEach(item => {
    item.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags);
}

// 获取类型统计
export function getTypeStats(): Record<MemoryType, number> {
  const stats: Record<MemoryType, number> = {
    note: 0,
    conversation: 0,
    task: 0,
    idea: 0,
    bookmark: 0,
    other: 0
  };
  
  mockMemories.forEach(item => {
    stats[item.type]++;
  });
  
  return stats;
}