import { useState, useEffect, useCallback, useRef } from 'react';

interface UseSlideNavigationOptions {
  totalSlides: number;
  initialSlide?: number;
}

export function useSlideNavigation({ totalSlides, initialSlide = 0 }: UseSlideNavigationOptions) {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides && index !== currentSlide) {
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
    }
  }, [currentSlide, totalSlides]);

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide, totalSlides]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  // 键盘导航
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // 鼠标滚轮导航
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (e.deltaX > 50) {
          nextSlide();
        } else if (e.deltaX < -50) {
          prevSlide();
        } else if (e.deltaY > 50) {
          nextSlide();
        } else if (e.deltaY < -50) {
          prevSlide();
        }
      }, 50);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      clearTimeout(timeout);
    };
  }, [nextSlide, prevSlide]);

  // 触控滑动导航
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;
    
    if (diff > threshold) {
      nextSlide();
    } else if (diff < -threshold) {
      prevSlide();
    }
  }, [nextSlide, prevSlide]);

  return {
    currentSlide,
    direction,
    goToSlide,
    nextSlide,
    prevSlide,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
}
