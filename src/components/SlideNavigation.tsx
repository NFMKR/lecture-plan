import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNavigate: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
}

export function SlideNavigation({
  currentSlide,
  totalSlides,
  onNavigate,
  onPrev,
  onNext
}: SlideNavigationProps) {
  return (
    <>
      {/* 底部导航 - 整合进度条和箭头按钮 */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6">
        {/* 左箭头 */}
        <motion.button
          onClick={onPrev}
          disabled={currentSlide === 0}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`p-2 rounded-full border transition-all duration-300 ${
            currentSlide === 0 
              ? 'border-[#8B7355]/20 text-[#8B7355]/30 cursor-not-allowed' 
              : 'border-[#8B7355]/30 text-[#8B7355] bg-white/60 backdrop-blur-sm hover:bg-white hover:border-[#8B7355]/50'
          }`}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
        </motion.button>

        {/* 进度条 */}
        <div className="flex items-center gap-3">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => onNavigate(index)}
              animate={{
                width: currentSlide === index ? 28 : 8,
                opacity: currentSlide === index ? 1 : 0.35
              }}
              transition={{ duration: 0.3 }}
              className="h-[2px] bg-[#8B7355] rounded-full cursor-pointer hover:opacity-70 transition-opacity"
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* 右箭头 */}
        <motion.button
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`p-2 rounded-full border transition-all duration-300 ${
            currentSlide === totalSlides - 1 
              ? 'border-[#8B7355]/20 text-[#8B7355]/30 cursor-not-allowed' 
              : 'border-[#8B7355]/30 text-[#8B7355] bg-white/60 backdrop-blur-sm hover:bg-white hover:border-[#8B7355]/50'
          }`}
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
        </motion.button>
      </div>

      {/* 页码数字 - 底部右侧 */}
      <div className="fixed bottom-8 right-8 md:right-12 z-50 flex items-center gap-2">
        <span className="font-art-display text-sm text-[#8B7355]/50 tracking-wider">
          {String(currentSlide + 1).padStart(2, '0')}
        </span>
        <span className="font-art-display text-xs text-[#8B7355]/30">/</span>
        <span className="font-art-display text-xs text-[#8B7355]/30 tracking-wider">
          {String(totalSlides).padStart(2, '0')}
        </span>
      </div>

      {/* 键盘提示 - 底部左侧 */}
      <div className="fixed bottom-8 left-8 md:left-12 z-50 hidden md:flex items-center gap-2 opacity-30">
        <span className="font-art-display text-[9px] text-[#8B7355] tracking-[0.15em]">
          ← →
        </span>
        <span className="font-art-display text-[9px] text-[#8B7355]/60 tracking-[0.1em]">
          切换
        </span>
      </div>
    </>
  );
}
