import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
import Hero from './Hero';

expect.extend(matchers);

const LINKS = {
  macOS: {
    apple: 'https://linoni-1255984696.cos.ap-beijing.myqcloud.com/%E7%81%B5%E7%BB%92%E9%99%AA%E4%BC%B4%E7%B2%BE%E7%81%B5-2.1.1-mac-arm64.zip',
    intel: 'https://linoni-1255984696.cos.ap-beijing.myqcloud.com/%E7%81%B5%E7%BB%92%E9%99%AA%E4%BC%B4%E7%B2%BE%E7%81%B5-2.1.1-mac-x64.zip',
  },
  windows: {
    intel: 'https://linoni-1255984696.cos.ap-beijing.myqcloud.com/%E7%81%B5%E7%BB%92%E9%99%AA%E4%BC%B4%E7%B2%BE%E7%81%B5-2.1.1-win-x64-portable.exe.zip',
    arm: 'https://linoni-1255984696.cos.ap-beijing.myqcloud.com/%E7%81%B5%E7%BB%92%E9%99%AA%E4%BC%B4%E7%B2%BE%E7%81%B5-2.1.1-win-arm64-portable.exe.zip',
  },
};

describe('Hero Component Download Links', () => {
  it('renders macOS download button with correct default link (Apple Silicon)', () => {
    render(<Hero />);
    
    // Check for the "Apple 版本" link
    const links = screen.getAllByRole('link');
    const appleLink = links.find(link => link.textContent?.includes('Apple 版本'));
    expect(appleLink).toBeDefined();
    
    // By default chipType is apple
    // The main button also links to apple version
    const mainButton = links.find(link => link.textContent?.includes('macOS') && link.className.includes('bg-gray-900'));
    
    expect(mainButton).toBeDefined();
    expect(mainButton).toHaveAttribute('href', LINKS.macOS.apple);
  });

  it('renders Windows download button with correct default link (Intel)', () => {
    render(<Hero />);
    
    const links = screen.getAllByRole('link');
    // Main Windows button (blue)
    const windowsButton = links.find(link => link.textContent?.includes('Windows') && link.className.includes('bg-blue-600'));
    
    expect(windowsButton).toBeDefined();
    expect(windowsButton).toHaveAttribute('href', LINKS.windows.intel);
  });

  it('contains all 4 download options in dropdowns', () => {
    render(<Hero />);
    
    const links = screen.getAllByRole('link');
    
    // macOS options
    const macAppleOption = links.find(link => link.textContent?.includes('M1/M2/M3/M4 芯片'));
    expect(macAppleOption).toBeDefined();
    expect(macAppleOption).toHaveAttribute('href', LINKS.macOS.apple);
    
    const macIntelOption = links.find(link => link.textContent?.includes('Core i5/i7/i9 处理器'));
    expect(macIntelOption).toBeDefined();
    expect(macIntelOption).toHaveAttribute('href', LINKS.macOS.intel);

    // Windows options
    const winIntelOption = links.find(link => link.textContent?.includes('x64 架构'));
    expect(winIntelOption).toBeDefined();
    expect(winIntelOption).toHaveAttribute('href', LINKS.windows.intel);
    
    const winArmOption = links.find(link => link.textContent?.includes('ARM64 架构'));
    expect(winArmOption).toBeDefined();
    expect(winArmOption).toHaveAttribute('href', LINKS.windows.arm);
  });
});
