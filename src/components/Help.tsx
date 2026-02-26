import React from 'react';
import { Search, BookOpen, Zap, Command, Layers } from 'lucide-react';

const Help: React.FC = () => {
  return (
    <section id="help" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">帮助中心</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            查找教程、常见问题解答以及更多资源。
          </p>

          {/* Search Bar - HapiGo Style */}
          <div className="relative max-w-2xl mx-auto group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-blue-500 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-0 focus:bg-white dark:focus:bg-gray-900 transition-all shadow-sm"
              placeholder="搜索文档（例如：如何设置 API Key？）"
            />
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <span className="text-xs text-gray-400 border border-gray-300 dark:border-gray-600 rounded px-1.5 py-0.5">⌘K</span>
            </div>
          </div>
        </div>

        {/* Documentation Categories */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <a href="#" className="group p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
              <Zap size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">快速入门</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              安装、基本设置以及如何开始与灵绒的第一句对话。
            </p>
          </a>

          <a href="#" className="group p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
              <Layers size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">功能详解</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              深入了解 MBTI 性格模型、日记系统、打工与养成机制。
            </p>
          </a>

          <a href="#" className="group p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-green-50 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-4 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
              <Command size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">高级技巧</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              自定义 AI 模型、快捷键设置、数据备份与恢复指南。
            </p>
          </a>
        </div>

        {/* Popular Articles List */}
        <div className="border-t border-gray-100 dark:border-gray-800 pt-12">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <BookOpen size={20} className="text-gray-400" />
            热门文档
          </h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            <a href="#" className="flex items-center justify-between group py-2 border-b border-gray-50 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-colors">
              <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">如何配置 DeepSeek API Key？</span>
              <span className="text-gray-300 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="#" className="flex items-center justify-between group py-2 border-b border-gray-50 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-colors">
              <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">灵绒的性格是如何演变的？</span>
              <span className="text-gray-300 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="#" className="flex items-center justify-between group py-2 border-b border-gray-50 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-colors">
              <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Windows 版如何开机自启动？</span>
              <span className="text-gray-300 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="#" className="flex items-center justify-between group py-2 border-b border-gray-50 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-colors">
              <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">遇到无法对话的情况怎么办？</span>
              <span className="text-gray-300 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
