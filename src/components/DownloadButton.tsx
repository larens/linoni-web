import React from 'react';
import { ChevronDown, Check, type LucideIcon } from 'lucide-react';

export interface DownloadOption {
  id: string;
  label: string;
  subLabel: string;
  url: string;
}

interface DownloadButtonProps {
  platformName: string;
  Icon: LucideIcon;
  currentOptionId: string;
  options: DownloadOption[];
  onOptionSelect: (id: string) => void;
  variant: 'dark' | 'primary';
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  platformName,
  Icon,
  currentOptionId,
  options,
  onOptionSelect,
  variant
}) => {
  const currentOption = options.find(opt => opt.id === currentOptionId) || options[0];
  const downloadUrl = currentOption.url;

  const baseClasses = "flex items-center justify-center gap-2 px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 min-w-[200px]";
  const variantClasses = variant === 'dark' 
    ? "bg-gray-900 hover:bg-gray-800 text-white" 
    : "bg-blue-600 hover:bg-blue-700 text-white";

  return (
    <div className="relative group">
      <a 
        href={downloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${variantClasses}`}
      >
        <Icon size={24} />
        <div className="text-left">
          <div className="text-xs opacity-80">Download for</div>
          <div className="font-bold text-lg leading-none flex items-center gap-1">
            {platformName}
            <ChevronDown 
              size={16} 
              className="transition-transform group-hover:rotate-180"
            />
          </div>
        </div>
      </a>
      
      <div className="absolute top-full left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 min-w-full w-max">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden z-20 border border-gray-200 dark:border-gray-700">
          {options.map((option) => (
            <a
              key={option.id}
              href={option.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onOptionSelect(option.id)}
              className={`w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors block ${
                currentOptionId === option.id ? 'bg-blue-50 dark:bg-blue-900/30' : ''
              }`}
            >
              <div className="mr-4">
                <div className="font-medium text-gray-900 dark:text-white">{option.label}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{option.subLabel}</div>
              </div>
              {currentOptionId === option.id && <Check size={16} className="text-blue-600" />}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
