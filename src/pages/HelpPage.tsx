import React, { useState } from 'react';
import { Search, BookOpen, Zap, Command, Layers, FileText, HelpCircle, Link as LinkIcon, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { helpDocs, getDocsByCategory } from '../data/helpDocs';
import type { HelpDoc } from '../data/helpDocs';

const HelpPage: React.FC = () => {
  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const docsByCategory = getDocsByCategory();
  const selectedDoc = selectedDocId ? helpDocs.find(d => d.id === selectedDocId) : null;

  // 搜索过滤
  const filteredDocs = searchQuery 
    ? helpDocs.filter(doc => 
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        doc.content.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleDocClick = (id: string) => {
    setSelectedDocId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderSidebar = () => (
    <div className="hidden lg:block w-64 flex-shrink-0">
      <div className="sticky top-24">
        <div className="mb-8">
          <h5 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <BookOpen size={16} /> 文档目录
          </h5>
          
          <ul className="space-y-4 text-sm">
            {Object.entries(docsByCategory).map(([category, docs]) => (
              <li key={category}>
                <div className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  {category}
                </div>
                <ul className="space-y-1">
                  {docs.map(doc => (
                    <li key={doc.id}>
                      <button
                        onClick={() => handleDocClick(doc.id)}
                        className={`w-full text-left py-1.5 px-3 rounded-lg transition-colors bg-transparent border-0 hover:bg-gray-50 dark:hover:bg-gray-800 ${
                          selectedDocId === doc.id
                            ? 'text-blue-600 dark:text-blue-400 font-medium'
                            : 'text-gray-600 dark:text-gray-400'
                        }`}
                      >
                        {doc.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <LinkIcon size={16} /> 常用链接
          </h5>
            <ul className="space-y-1 text-sm">
            <li>
              <Link to="/updates" className="block py-1.5 px-3 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                更新日志
              </Link>
            </li>
            <li>
              <a href="#" className="block py-1.5 px-3 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                GitHub 仓库
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div className="animate-in fade-in duration-500">
      <div className="text-center lg:text-left mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">帮助中心</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
          查找教程、常见问题解答以及更多资源，让灵绒更好地陪伴你。
        </p>

        {/* Search Bar */}
        <div className="relative max-w-2xl group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-12 pr-12 py-4 bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-blue-500 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-0 focus:bg-white dark:focus:bg-gray-900 transition-all shadow-sm"
            placeholder="搜索文档（例如：如何设置 API Key？）"
          />
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
            <span className="text-xs text-gray-400 border border-gray-300 dark:border-gray-600 rounded px-1.5 py-0.5">⌘K</span>
          </div>
        </div>
        
        {/* Search Results */}
        {searchQuery && (
          <div className="mt-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
            {filteredDocs.length > 0 ? (
              <ul>
                {filteredDocs.map(doc => (
                  <li key={doc.id}>
                    <button 
                      onClick={() => {
                        handleDocClick(doc.id);
                        setSearchQuery('');
                      }}
                      className="w-full text-left px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-700 last:border-0 transition-colors"
                    >
                      <div className="text-sm text-blue-600 dark:text-blue-400 mb-1">{doc.category}</div>
                      <div className="font-medium text-gray-900 dark:text-white">{doc.title}</div>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="px-6 py-8 text-center text-gray-500 dark:text-gray-400">
                没有找到相关文档
              </div>
            )}
          </div>
        )}
      </div>

      {/* Categories */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <button onClick={() => handleDocClick('quick-start-install')} className="group p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
              <Zap size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">快速入门</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                安装、基本设置以及如何开始与灵绒的第一句对话。
              </p>
            </div>
          </div>
        </button>

        <button onClick={() => handleDocClick('feature-mbti')} className="group p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/30 rounded-xl flex items-center justify-center flex-shrink-0 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
              <Layers size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">功能详解</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                深入了解 MBTI 性格模型、日记系统、打工与养成机制。
              </p>
            </div>
          </div>
        </button>

        <button onClick={() => handleDocClick('advanced-deepseek')} className="group p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-green-50 dark:bg-green-900/30 rounded-xl flex items-center justify-center flex-shrink-0 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
              <Command size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">高级技巧</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                自定义 AI 模型、快捷键设置、数据备份与恢复指南。
              </p>
            </div>
          </div>
        </button>

        <button onClick={() => handleDocClick('faq-startup')} className="group p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-orange-200 dark:hover:border-orange-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/30 rounded-xl flex items-center justify-center flex-shrink-0 text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform">
              <HelpCircle size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">常见问题</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                解决安装失败、无法启动、API 连接错误等常见问题。
              </p>
            </div>
          </div>
        </button>
      </div>

      {/* Popular Articles List */}
      <div className="border-t border-gray-100 dark:border-gray-800 pt-12">
        <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
          <BookOpen size={20} className="text-blue-500" />
          热门文档
        </h3>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
           {helpDocs.slice(0, 4).map(doc => (
             <button 
              key={doc.id}
              onClick={() => handleDocClick(doc.id)}
              className="flex items-center justify-between group py-3 px-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border border-transparent hover:border-gray-100 dark:hover:border-gray-700 w-full text-left"
            >
              <div className="flex items-center gap-3">
                <FileText size={16} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-medium">
                  {doc.title}
                </span>
              </div>
              <span className="text-gray-300 group-hover:translate-x-1 transition-transform">→</span>
            </button>
           ))}
        </div>
      </div>
    </div>
  );

  const renderDocContent = (doc: HelpDoc) => (
    <div className="animate-in slide-in-from-right-4 duration-500">
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
        <button onClick={() => setSelectedDocId(null)} className="hover:text-gray-900 dark:hover:text-white transition-colors">
          帮助中心
        </button>
        <ChevronRight size={14} />
        <span className="text-gray-900 dark:text-white font-medium">{doc.category}</span>
      </div>

      <div className="prose prose-lg prose-blue dark:prose-invert max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {doc.content}
        </ReactMarkdown>
      </div>
      
      <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 flex justify-between">
         <div className="text-sm text-gray-500">
           最后更新于：2024年2月26日
         </div>
         <div className="flex gap-4">
           <button className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
             反馈问题
           </button>

         </div>
      </div>
    </div>
  );

  return (
    <div className="pt-24 pb-24 bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Sidebar */}
          {renderSidebar()}

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {selectedDoc ? renderDocContent(selectedDoc) : renderDashboard()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
