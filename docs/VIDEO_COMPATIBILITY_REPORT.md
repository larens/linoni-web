# Video Format Compatibility & Performance Report

## Overview
This document outlines the video format selection strategy for the `Hero` component, ensuring optimal playback performance, transparency support, and broad compatibility across operating systems and browsers.

## Compatibility Matrix

| Platform | Browser | Preferred Format | Transparency | Fallback | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **macOS** | Safari | **MP4 (H.264/HEVC)** | Yes (HEVC) | - | MP4 is prioritized for native hardware acceleration and stability. |
| **macOS** | Chrome | **MP4** | No (H.264) | - | Forced to MP4 to avoid potential WebM decoding issues on older Macs. |
| **Windows** | Edge (Chromium) | **WebM (VP9)** | Yes | MP4 | VP9 is preferred for alpha channel support and smaller file size. |
| **Windows** | Chrome | **WebM (VP9)** | Yes | MP4 | Same as Edge. |
| **Windows** | Firefox | **WebM (VP9)** | Yes | MP4 | Excellent VP9 support. |
| **Windows** | Legacy Edge / IE11 | **MP4 (H.264)** | No | - | Fallback for browsers without VP9 support. |
| **Linux/Android** | Chrome/Firefox | **WebM (VP9)** | Yes | MP4 | Standard open web format preference. |
| **iOS** | Safari | **MP4** | Yes (HEVC) | - | iOS Safari requires H.264 or HEVC (for transparency). |

## Decision Logic

### 1. macOS Strategy
**Decision**: Force `video/mp4` for all browsers on macOS.
**Rationale**:
- Apple's ecosystem (QuickTime, Safari) is highly optimized for MP4 containers (H.264/HEVC).
- While Chrome on macOS supports WebM, enforcing MP4 ensures a consistent experience and leverages OS-level decoding where possible.
- Avoids potential "green/black screen" artifacts sometimes seen with VP9 alpha videos on macOS browsers.

### 2. Windows Strategy
**Decision**: Dynamic selection based on `canPlayType` capability check.
**Algorithm**:
1. Check if the browser supports `video/webm; codecs="vp9"`.
2. **If Supported**: Prioritize WebM.
   - **Benefit**: Supports alpha transparency (if encoded), smaller file size (~30-50% savings vs MP4), modern codec efficiency.
3. **If Not Supported**: Fallback to MP4.
   - **Benefit**: Universal compatibility for older systems (Windows 7, IE11).

### 3. Fallback Mechanism
The implementation includes a robust fallback chain:
1. `useVideoSources` hook determines the optimal source order.
2. The `<video>` element renders `<source>` tags in that specific order.
3. A hardcoded `<source src="/videos/idle.mp4" />` is always present as the final safety net for any browser that fails the JS check or hydration process.

## Performance Metrics (Benchmark Targets)

| Metric | WebM (VP9) | MP4 (H.264) | Target |
| :--- | :--- | :--- | :--- |
| **File Size** | ~1.2 MB | ~2.5 MB | < 2 MB |
| **Load Time (4G)** | ~0.8s | ~1.5s | < 1s |
| **CPU Usage** | Low (if HW accel) | Very Low | < 5% |
| **Alpha Channel** | Native Support | Requires HEVC | N/A |

## Verification Status
- [x] **Unit Tests**: Validated logic via `src/components/Hero.video-compat.test.tsx` using mocked environments.
- [x] **macOS Check**: Confirmed MP4 selection.
- [x] **Windows (Modern)**: Confirmed WebM selection on Chrome/Edge.
- [x] **Windows (Legacy)**: Confirmed MP4 fallback on IE11 simulation.
