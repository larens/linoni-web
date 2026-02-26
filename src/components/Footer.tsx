import React from 'react';
import { Github } from 'lucide-react';

const WechatIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.5,14.5 C4.08172029,14.5 0.5,11.5898509 0.5,8 C0.5,4.41014913 4.08172029,1.5 8.5,1.5 C12.9182797,1.5 16.5,4.41014913 16.5,8 C16.5,11.5898509 12.9182797,14.5 8.5,14.5 Z M8.5,13.5 C12.3659932,13.5 15.5,10.954305 15.5,8 C15.5,5.045695 12.3659932,2.5 8.5,2.5 C4.63400675,2.5 1.5,5.045695 1.5,8 C1.5,10.954305 4.63400675,13.5 8.5,13.5 Z M6,6.5 C6.55228475,6.5 7,6.05228475 7,5.5 C7,4.94771525 6.55228475,4.5 6,4.5 C5.44771525,4.5 5,4.94771525 5,5.5 C5,6.05228475 5.44771525,6.5 6,6.5 Z M11,6.5 C11.5522847,6.5 12,6.05228475 12,5.5 C12,4.94771525 11.5522847,4.5 11,4.5 C10.4477153,4.5 10,4.94771525 10,5.5 C10,6.05228475 10.4477153,6.5 11,6.5 Z" fillRule="evenodd" opacity="0.1"/>
    <path d="M16.5,16.5 C16.5,16.5 16.5,16.5 16.5,16.5 C16.5,16.5 16.5,16.5 16.5,16.5 Z" opacity="0.1"/>
    <path d="M19.129,13.298 C21.847,12.364 23.5,10.665 23.5,8.5 C23.5,5.042 19.822,2.5 14.5,2.5 C9.178,2.5 5.5,5.042 5.5,8.5 C5.5,11.958 9.178,14.5 14.5,14.5 C15.656,14.5 16.736,14.39 17.729,14.175 L20.5,15.5 L19.129,13.298 Z M11.5,7.5 C11.5,6.948 11.948,6.5 12.5,6.5 C13.052,6.5 13.5,6.948 13.5,7.5 C13.5,8.052 13.052,8.5 12.5,8.5 C11.948,8.5 11.5,8.052 11.5,7.5 Z M16.5,7.5 C16.5,6.948 16.948,6.5 17.5,6.5 C18.052,6.5 18.5,6.948 18.5,7.5 C18.5,8.052 18.052,8.5 17.5,8.5 C16.948,8.5 16.5,8.052 16.5,7.5 Z M8,18.5 C3.582,18.5 0,15.59 0,12 C0,8.41 3.582,5.5 8,5.5 C12.418,5.5 16,8.41 16,12 C16,15.59 12.418,18.5 8,18.5 C7.265,18.5 6.556,18.421 5.885,18.273 L4,19.5 L4.729,17.202 C1.874,16.035 0,14.152 0,12 C0,11.926 0.003,11.853 0.008,11.78 C0.304,11.927 0.615,12.064 0.938,12.189 C1.155,14.07 2.875,15.5 4.908,15.5 C5.138,15.5 5.362,15.485 5.581,15.457 L6.883,17.548 L8.528,16.48 C9.278,16.815 10.106,17 10.979,17 C13.437,17 15.603,15.65 16.632,13.56 C16.345,13.587 16.052,13.6 15.756,13.6 C15.671,13.6 15.586,13.599 15.502,13.597 C15.158,16.368 12.059,18.5 8.5,18.5 L8,18.5 Z M5.5,10.5 C5.5,9.948 5.948,9.5 6.5,9.5 C7.052,9.5 7.5,9.948 7.5,10.5 C7.5,11.052 7.052,11.5 6.5,11.5 C5.948,11.5 5.5,11.052 5.5,10.5 Z M10.5,10.5 C10.5,9.948 10.948,9.5 11.5,9.5 C12.052,9.5 12.5,9.948 12.5,10.5 C12.5,11.052 12.052,11.5 11.5,11.5 C10.948,11.5 10.5,11.052 10.5,10.5 Z" />
  </svg>
);

const Footer: React.FC = () => {
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
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors block">
                <WechatIcon size={24} />
              </a>
              
              {/* WeChat QR Code Popup */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 pb-4 hidden group-hover:block z-50 animate-in fade-in zoom-in-95 duration-200">
                <div className="bg-white dark:bg-gray-800 p-2 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 relative">
                  <img 
                    src="/images/icons/20260226-082717.jpeg" 
                    alt="WeChat QR Code" 
                    className="w-[200px] h-[200px] object-cover rounded-lg"
                  />
                  <div className="text-center mt-2 text-xs text-gray-500 dark:text-gray-400 font-medium pb-1">
                    扫码添加微信
                  </div>
                  {/* Arrow */}
                  <div className="w-4 h-4 bg-white dark:bg-gray-800 border-b border-r border-gray-100 dark:border-gray-700 transform rotate-45 absolute left-1/2 -translate-x-1/2 -bottom-2"></div>
                </div>
              </div>
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
