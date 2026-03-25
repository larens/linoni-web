import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { updates } from '../data/updates';

const LatestFeatures: React.FC = () => {
  return (
    <section id="latest" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">
                Changelog
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">最新功能与更新</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              我们会持续迭代，为您带来更好的陪伴体验。
            </p>
          </div>
          <Link
            to="/updates"
            className="mt-6 md:mt-0 flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors shadow-sm"
          >
            查看全部更新 <ChevronRight size={16} />
          </Link>
        </div>

        <div className="space-y-12 relative before:absolute before:left-[19px] md:before:left-[149px] before:top-2 before:bottom-0 before:w-[2px] before:bg-gray-200 dark:before:bg-gray-700">
          {updates.map((update, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col md:flex-row gap-6 md:gap-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-[13px] md:left-[143px] top-2 w-3.5 h-3.5 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 z-10" />

              {/* Date & Version */}
              <div className="md:w-32 flex-shrink-0 md:text-right pt-1 pl-12 md:pl-0">
                <div className="font-mono text-sm font-bold text-gray-900 dark:text-white">{update.version}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{update.date}</div>
              </div>

              {/* Content Card */}
              <div className="flex-1 bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 ml-8 md:ml-0 hover:shadow-md transition-shadow">
                <ul className="space-y-4">
                  {update.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`mt-0.5 flex-shrink-0 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border
                        ${feature.type === 'new' ? 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800' : 
                          feature.type === 'fix' ? 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800' : 
                          'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800'}`}
                      >
                        {feature.type === 'new' ? 'New' : feature.type === 'fix' ? 'Fix' : 'Opt'}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {feature.content}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestFeatures;
