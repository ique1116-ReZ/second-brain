import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalSearchProvider } from "@/components/global-search";
import { CommandMenu } from "@/components/command-menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "第二大脑 · Second Brain",
  description: "个人知识管理系统 - 记录、整理、复盘所有笔记和对话",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="min-h-full">
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <GlobalSearchProvider>
          <div className="min-h-screen">
            {children}
          </div>
          <CommandMenu />
        </GlobalSearchProvider>
      </body>
    </html>
  );
}