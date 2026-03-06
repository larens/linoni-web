import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import Hero from './Hero';

// Mock matchMedia for framer-motion
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

describe('Hero Component Video Compatibility', () => {
  const originalNavigator = { ...window.navigator };
  const originalCanPlayType = window.HTMLVideoElement.prototype.canPlayType;

  beforeEach(() => {
    // Reset mocks
    vi.restoreAllMocks();
  });

  afterEach(() => {
    // Restore original browser APIs
    Object.defineProperty(window, 'navigator', {
      value: originalNavigator,
      writable: true,
    });
    window.HTMLVideoElement.prototype.canPlayType = originalCanPlayType;
  });

  const mockNavigator = (userAgent: string, platform: string) => {
    Object.defineProperty(window, 'navigator', {
      value: {
        ...originalNavigator,
        userAgent,
        platform,
      },
      writable: true,
    });
  };

  const mockCanPlayType = (supportedFormats: string[]) => {
    window.HTMLVideoElement.prototype.canPlayType = vi.fn().mockImplementation((type) => {
      // Check if the type (and codecs if present) is in our supported list
      const isSupported = supportedFormats.some(format => type.includes(format));
      return isSupported ? 'probably' : '';
    });
  };

  it('macOS: Should prioritize MP4 and ignore WebM (Best for Safari/QuickTime)', () => {
    mockNavigator('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15', 'MacIntel');
    mockCanPlayType(['video/mp4', 'video/webm']); // Even if WebM is supported (e.g. Chrome on Mac), our logic forces MP4 for macOS platform

    render(<Hero />);

    const sources = document.querySelectorAll('source');
    const sourceTypes = Array.from(sources).map(s => s.getAttribute('type'));
    const sourceSrcs = Array.from(sources).map(s => s.getAttribute('src'));

    // Expect MP4 first
    expect(sourceTypes[0]).toBe('video/mp4');
    expect(sourceSrcs[0]).toBe('/videos/idle.mp4');
    
    // In our logic for macOS, we only put MP4 to ensure stability
    expect(sourceTypes).not.toContain('video/webm');
  });

  it('Windows: Should prioritize WebM if supported (Better transparency/size)', () => {
    mockNavigator('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36', 'Win32');
    mockCanPlayType(['video/webm', 'video/mp4']); // WebM supported

    render(<Hero />);

    const sources = document.querySelectorAll('source');
    const sourceTypes = Array.from(sources).map(s => s.getAttribute('type'));

    // WebM should be first because it's supported
    expect(sourceTypes[0]).toBe('video/webm');
    expect(sourceTypes[1]).toBe('video/mp4');
  });

  it('Windows: Should fallback to MP4 if WebM is NOT supported (IE11/Old Edge)', () => {
    mockNavigator('Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko', 'Win32');
    mockCanPlayType(['video/mp4']); // WebM NOT supported

    render(<Hero />);

    const sources = document.querySelectorAll('source');
    const sourceTypes = Array.from(sources).map(s => s.getAttribute('type'));

    // MP4 should be first because WebM is not supported
    expect(sourceTypes[0]).toBe('video/mp4');
    expect(sourceTypes[1]).toBe('video/webm');
  });

  it('Other Platforms (Linux/Android): Should default to WebM -> MP4 preference', () => {
    mockNavigator('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 Safari/537.36', 'Linux x86_64');
    mockCanPlayType(['video/webm', 'video/mp4']);

    render(<Hero />);

    const sources = document.querySelectorAll('source');
    const sourceTypes = Array.from(sources).map(s => s.getAttribute('type'));

    expect(sourceTypes[0]).toBe('video/webm');
    expect(sourceTypes[1]).toBe('video/mp4');
  });
});
