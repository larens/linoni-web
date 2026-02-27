import React, { useState } from 'react';
import { Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WechatIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <div 
    className={`bg-current ${className}`} 
    style={{ 
      width: size, 
      height: size,
      mask: `url(/assets/icons/wechat-line.svg) no-repeat center / contain`,
      WebkitMask: `url(/assets/icons/wechat-line.svg) no-repeat center / contain`
    }} 
  />
);

const Footer: React.FC = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [imgSrc, setImgSrc] = useState("/images/icons/20260226-082717.jpeg");

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/images/icons/mengqu.svg" alt="Logo" className="w-6 h-6 grayscale opacity-70" />
              <span className="font-bold text-gray-700 dark:text-gray-300">Linoni</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              © {new Date().getFullYear()} Larens. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="https://github.com/larens/LingrongCompanion" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <div className="relative group">
              <a 
                href="#" 
                className="text-gray-400 hover:text-green-500 transition-colors block"
                onMouseEnter={() => setShowPreview(true)}
                onMouseLeave={() => setShowPreview(false)}
              >
                <WechatIcon size={24} />
              </a>
              
              {/* WeChat QR Code Popup */}
              <AnimatePresence>
                {showPreview && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } }}
                    exit={{ opacity: 0, y: 10, transition: { duration: 0.15 } }}
                    className="absolute bottom-full -left-[80px] mb-3 z-50 bg-white dark:bg-gray-800 p-2 rounded-[4px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-gray-700 w-[180px] h-[200px]"
                  >
                    <img 
                      src={imgSrc} 
                      alt="WeChat QR Code" 
                      className="w-[160px] h-[160px] object-cover "
                      onError={() => setImgSrc("/assets/img/placeholder.png")}
                    />
                    <div className="text-center mt-2 text-xs text-gray-500 dark:text-gray-400 font-medium pb-1">
                      微信扫码入群
                    </div>
                    {/* Arrow */}
                    <div className="w-3 h-3 bg-white dark:bg-gray-800 border-b border-r border-gray-100 dark:border-gray-700 transform rotate-45 absolute left-1/2 -translate-x-1/2 -bottom-1.5"></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs text-gray-400">
          <p>Made with ❤️ by Larens</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
