export type MemoryType = 'note' | 'conversation' | 'task' | 'idea' | 'bookmark' | 'other';

export interface MemoryItem {
  id: string;
  title: string;
  content: string;
  type: MemoryType;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  source?: string;
  metadata?: Record<string, any>;
}

export interface FilterOptions {
  type?: MemoryType | 'all';
  dateRange?: {
    start: Date;
    end: Date;
  };
  tags?: string[];
  search?: string;
}

export interface SearchResult {
  item: MemoryItem;
  matches: {
    field: 'title' | 'content' | 'tags';
    text: string;
    score: number;
  }[];
}