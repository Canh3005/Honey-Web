import { useEffect, useRef, useCallback } from 'react';

export const useSmoothScroll = (duration = 1000) => {
  const scrollContainerRef = useRef(null);
  const lockScrollRef = useRef(false);
  const isScrollingRef = useRef(false);

  // Cho phép component con lock/unlock scroll
  const setScrollLock = useCallback((locked) => {
    lockScrollRef.current = locked;
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    let scrollTimeout;

    const smoothScrollTo = (element, target, duration) => {
      const start = element.scrollTop;
      const distance = target - start;
      const startTime = performance.now();

      const animation = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (ease-in-out)
        const easeProgress = progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        element.scrollTop = start + distance * easeProgress;

        if (progress < 1) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    };

    const handleWheel = (e) => {
      // Nếu scroll đang bị lock bởi component con, không làm gì
      if (lockScrollRef.current) {
        e.preventDefault();
        return;
      }

      e.preventDefault();

      if (isScrollingRef.current) return;

      const delta = e.deltaY;
      const currentScroll = container.scrollTop;
      const screenHeight = window.innerHeight;

      // Tính section hiện tại
      const currentSection = Math.round(currentScroll / screenHeight);

      // Xác định section tiếp theo
      let targetSection = currentSection;
      if (delta > 0) {
        targetSection = currentSection + 1;
      } else if (delta < 0) {
        targetSection = currentSection - 1;
      }

      const targetScroll = targetSection * screenHeight;

      // Scroll mượt với thời gian tùy chỉnh
      isScrollingRef.current = true;
      smoothScrollTo(container, targetScroll, duration);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrollingRef.current = false;
      }, duration);
    };

    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
      clearTimeout(scrollTimeout);
    };
  }, [duration]);

  // Trả về cả ref và hàm setScrollLock
  scrollContainerRef.setScrollLock = setScrollLock;
  return scrollContainerRef;
};
