import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideArrowsProps {
  onPrev: () => void;
  onNext: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
}

export function SlideArrows({ onPrev, onNext, canGoPrev, canGoNext }: SlideArrowsProps) {
  return (
    <>
      {/* 左箭头 */}
      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: canGoPrev ? 1 : 0.3, x: 0 }}
        whileHover={canGoPrev ? { scale: 1.1, x: -2 } : {}}
        transition={{ duration: 0.3 }}
        onClick={onPrev}
        disabled={!canGoPrev}
        className="fixed left-6 md:left-10 top-1/2 -translate-y-1/2 z-50 w-10 h-10 flex items-center justify-center cursor-pointer disabled:cursor-not-allowed group"
        aria-label="Previous slide"
      >
        <ChevronLeft 
          strokeWidth={1} 
          className="w-6 h-6 text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent-gold)] transition-colors duration-300" 
        />
      </motion.button>

      {/* 右箭头 */}
      <motion.button
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: canGoNext ? 1 : 0.3, x: 0 }}
        whileHover={canGoNext ? { scale: 1.1, x: 2 } : {}}
        transition={{ duration: 0.3 }}
        onClick={onNext}
        disabled={!canGoNext}
        className="fixed right-20 md:right-28 top-1/2 -translate-y-1/2 z-50 w-10 h-10 flex items-center justify-center cursor-pointer disabled:cursor-not-allowed group"
        aria-label="Next slide"
      >
        <ChevronRight 
          strokeWidth={1} 
          className="w-6 h-6 text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent-gold)] transition-colors duration-300" 
        />
      </motion.button>
    </>
  );
}
