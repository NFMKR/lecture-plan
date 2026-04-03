import { motion } from 'motion/react';

interface ProgressProps {
  progress: number;
  currentSlide: number;
  totalSlides: number;
}

export function Progress({ progress, currentSlide, totalSlides }: ProgressProps) {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-4">
      {/* 进度条 */}
      <div className="w-48 md:w-64 h-[1px] bg-[var(--color-border)] rounded-full overflow-hidden">
        <motion.div
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="h-full bg-gradient-to-r from-[var(--color-accent-gold)] to-[var(--color-accent-warm)]"
        />
      </div>
      
      {/* 页码 */}
      <div className="flex items-center gap-3">
        <motion.span
          key={currentSlide}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="font-accent text-sm text-[var(--color-text-secondary)] tracking-widest"
        >
          {String(currentSlide + 1).padStart(2, '0')}
        </motion.span>
        <span className="text-[var(--color-text-muted)]">/</span>
        <span className="font-accent text-sm text-[var(--color-text-muted)] tracking-widest">
          {String(totalSlides).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}
