import React from 'react';
import { motion } from 'framer-motion';
import { Download, Apple, Monitor } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white dark:bg-gray-900">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 bg-gradient-to-r from-blue-50 via-white to-white dark:from-gray-900 dark:to-gray-800">
      </div>

      <div className="max-w-[1200px] mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-semibold tracking-wide">
            全新 AI 桌面宠物体验
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
            灵绒陪伴精灵
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-light italic">
            "我不拯救世界，我只守护你。"
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 leading-relaxed max-w-lg">
            基于 MBTI 性格模型的智能桌面伙伴。它不仅仅是一个电子宠物，更是一个懂你、陪伴你的灵魂伴侣。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Apple size={24} />
              <div className="text-left">
                <div className="text-xs opacity-80">Download on</div>
                <div className="font-bold text-lg leading-none">macOS</div>
              </div>
            </button>
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Monitor size={24} />
              <div className="text-left">
                <div className="text-xs opacity-80">Download for</div>
                <div className="font-bold text-lg leading-none">Windows</div>
              </div>
            </button>
          </div>
          
          <div className="mt-8 text-sm text-gray-400 flex items-center gap-4">
            <span className="flex items-center gap-1"><Download size={14} /> 10k+ Downloads</span>
            <span>•</span>
            <span>v1.0.0 Stable</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
            {/* 这里的图片路径假设图片已经在 public/images 下 */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-purple-200 rounded-full opacity-30 animate-pulse dark:opacity-10 blur-2xl transform scale-110" />
            <video 
              src="/videos/idle.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="relative z-10 w-full h-auto drop-shadow-2xl rounded-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
