import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Download, Apple, Monitor } from 'lucide-react';
import { DownloadButton, type DownloadOption } from './DownloadButton';

// Video format configuration interface
interface VideoFormat {
  src: string;
  type: string;
  codecs?: string;
  priority: number; // Higher is better
}

// OS Platform detection
type Platform = 'macOS' | 'Windows' | 'Other';

const getPlatform = (): Platform => {
  if (typeof navigator === 'undefined') return 'Other';
  const platform = navigator.platform.toLowerCase();
  const ua = navigator.userAgent.toLowerCase();
  
  if (platform.includes('mac') || ua.includes('mac os')) return 'macOS';
  if (platform.includes('win') || ua.includes('windows')) return 'Windows';
  return 'Other';
};

// Check video format support
const checkVideoSupport = (type: string, codecs?: string): boolean => {
  if (typeof document === 'undefined') return false;
  const video = document.createElement('video');
  const format = codecs ? `${type}; codecs="${codecs}"` : type;
  const canPlay = video.canPlayType(format);
  return canPlay === 'probably' || canPlay === 'maybe';
};

const useVideoSources = () => {
  const [platform] = useState<Platform>(() => getPlatform());

  const sources = useMemo(() => {
    const mp4Format: VideoFormat = { 
      src: '/videos/idle.mp4', 
      type: 'video/mp4', 
      priority: 1 
    };
    
    const webmFormat: VideoFormat = { 
      src: '/videos/idle.webm', 
      type: 'video/webm', 
      codecs: 'vp9',
      priority: 2 
    };

    let selectedSources: VideoFormat[] = [];

    // Platform-specific logic based on compatibility testing requirements
    if (platform === 'macOS') {
      // macOS: Default to MP4 for best performance and compatibility (Safari)
      selectedSources = [mp4Format];
    } else if (platform === 'Windows') {
      // Windows: Check WebM (VP9) support first, fallback to MP4
      // This dynamic selection ensures better quality/transparency where supported (modern browsers)
      // while maintaining compatibility with older systems (IE11/Legacy Edge)
      const supportsWebM = checkVideoSupport(webmFormat.type, webmFormat.codecs);
      
      if (supportsWebM) {
        selectedSources = [webmFormat, mp4Format];
      } else {
        selectedSources = [mp4Format, webmFormat];
      }
    } else {
      // Other platforms (Linux, Android, etc.): Default standard behavior
      selectedSources = [webmFormat, mp4Format];
    }

    return selectedSources;
  }, [platform]);

  return { sources, platform };
};

const DOWNLOAD_LINKS = {
  macOS: {
    apple: 'https://download.linoni.cn/%E7%81%B5%E7%BB%92%E9%99%AA%E4%BC%B4%E7%B2%BE%E7%81%B5-3.0.1-mac-arm64.zip',
    intel: 'https://download.linoni.cn/%E7%81%B5%E7%BB%92%E9%99%AA%E4%BC%B4%E7%B2%BE%E7%81%B5-3.0.1-mac-x64.zip',
  },
  windows: {
    intel: 'https://download.linoni.cn/%E7%81%B5%E7%BB%92%E9%99%AA%E4%BC%B4%E7%B2%BE%E7%81%B5-3.0.1-win-x64-portable.exe',
    arm: 'https://download.linoni.cn/%E7%81%B5%E7%BB%92%E9%99%AA%E4%BC%B4%E7%B2%BE%E7%81%B5-3.0.1-win-x64-portable.exe',
  },
};

const getInitialMacChipType = (): 'apple' | 'intel' => {
  if (typeof navigator === 'undefined') return 'apple';
  const platform = navigator.platform.toLowerCase();
  const ua = navigator.userAgent.toLowerCase();
  if (platform.includes('mac')) {
    const isAppleSilicon = platform.includes('arm') || ua.includes('apple silicon');
    return isAppleSilicon ? 'apple' : 'intel';
  }
  return 'apple';
};

const getInitialWinArch = (): 'intel' | 'arm' => {
  if (typeof navigator === 'undefined') return 'intel';
  const platform = navigator.platform.toLowerCase();
  const ua = navigator.userAgent.toLowerCase();
  if (platform.includes('win')) {
    const isArm = ua.includes('arm64') || ua.includes('aarch64') || platform.includes('arm');
    return isArm ? 'arm' : 'intel';
  }
  return 'intel';
};

const Hero: React.FC = () => {
  const [macChipType, setMacChipType] = useState<'apple' | 'intel'>(getInitialMacChipType);
  const [winArch, setWinArch] = useState<'intel' | 'arm'>(getInitialWinArch);

  const macOptions: DownloadOption[] = [
    { id: 'apple', label: 'Apple 版本', subLabel: 'M1/M2/M3/M4 芯片', url: DOWNLOAD_LINKS.macOS.apple },
    { id: 'intel', label: 'Intel 版本', subLabel: 'Core i5/i7/i9 处理器', url: DOWNLOAD_LINKS.macOS.intel }
  ];

  const winOptions: DownloadOption[] = [
    { id: 'intel', label: 'Intel 版本', subLabel: 'x64 架构', url: DOWNLOAD_LINKS.windows.intel },
    { id: 'arm', label: 'ARM 版本', subLabel: 'ARM64 架构', url: DOWNLOAD_LINKS.windows.arm }
  ];

  const { sources, platform } = useVideoSources();

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
            <DownloadButton
              platformName="macOS"
              Icon={Apple}
              currentOptionId={macChipType}
              options={macOptions}
              onOptionSelect={(id) => setMacChipType(id as 'apple' | 'intel')}
              variant="dark"
            />
            
            <DownloadButton
              platformName="Windows"
              Icon={Monitor}
              currentOptionId={winArch}
              options={winOptions}
              onOptionSelect={(id) => setWinArch(id as 'intel' | 'arm')}
              variant="primary"
            />
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
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-purple-200 rounded-full opacity-30 dark:opacity-10 blur-2xl" />
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="relative z-10 w-full h-auto drop-shadow-2xl rounded-2xl mix-blend-screen"
              key={platform} // Force re-render on platform change (hydration mismatch prevention)
            >
              {sources.map((source) => (
                <source key={source.src} src={source.src} type={source.type} />
              ))}
              {/* Fallback for older browsers */}
              <source src="/videos/idle.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
