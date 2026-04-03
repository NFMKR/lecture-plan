import { motion } from 'motion/react';

interface NavigationProps {
  totalSlides: number;
  currentSlide: number;
  onGoToSlide: (index: number) => void;
}

const slideLabels = [
  '开场',
  '能力',
  '愿景'
];

export function Navigation({ totalSlides, currentSlide, onGoToSlide }: NavigationProps) {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onGoToSlide(index)}
          className="group relative flex items-center justify-end"
          aria-label={`Go to slide ${index + 1}`}
        >
          <motion.div
            initial={false}
            animate={{
              width: currentSlide === index ? 8 : 4,
              backgroundColor: currentSlide === index 
                ? 'var(--color-accent-gold)' 
                : 'var(--color-text-muted)'
            }}
            whileHover={{ width: 8 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-full h-[4px] md:h-[6px]"
          />
          
          {/* 页面标签 */}
          <motion.span
            initial={false}
            animate={{
              opacity: currentSlide === index ? 1 : 0,
              x: currentSlide === index ? 0 : 10,
            }}
            transition={{ duration: 0.3 }}
            className="absolute right-4 text-xs font-accent tracking-widest text-[var(--color-accent-gold)] whitespace-nowrap pointer-events-none"
          >
            {slideLabels[index] || `0${index + 1}`}
          </motion.span>
        </button>
      ))}
    </div>
  );
}
