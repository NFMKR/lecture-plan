import { AnimatePresence, motion } from 'framer-motion';
import { Slide1 } from './components/Slide1';
import { Slide2 } from './components/Slide2';
import { Slide3 } from './components/Slide3';
import { Slide4 } from './components/Slide4';
import { Slide5 } from './components/Slide5';
import { Slide6 } from './components/Slide6';
import { Slide7 } from './components/Slide7';
import { SlideNavigation } from './components/SlideNavigation';
import { useSlideNavigation } from './hooks/useSlideNavigation';

const slides = [
  <Slide1 key="slide1" />,
  <Slide2 key="slide2" />,
  <Slide3 key="slide3" />,
  <Slide4 key="slide4" />,
  <Slide5 key="slide5" />,
  <Slide6 key="slide6" />,
  <Slide7 key="slide7" />,
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -1000 : 1000,
    opacity: 0,
  }),
};

export default function App() {
  const {
    currentSlide,
    direction,
    goToSlide,
    nextSlide,
    prevSlide,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useSlideNavigation({ totalSlides: slides.length, initialSlide: 0 });

  return (
    <div 
      className="relative w-full h-screen overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 幻灯片内容 */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
          }}
          className="absolute inset-0 w-full h-full"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>

      {/* 导航组件 */}
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onNavigate={goToSlide}
        onPrev={prevSlide}
        onNext={nextSlide}
      />

      {/* 装饰性边框 - 浅色主题 */}
      <div className="fixed inset-0 pointer-events-none z-[100]">
        {/* 顶部 */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B7355]/15 to-transparent" />
        {/* 底部 */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B7355]/15 to-transparent" />
        {/* 左侧 */}
        <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-[#8B7355]/15 to-transparent" />
        {/* 右侧 */}
        <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-[#8B7355]/15 to-transparent" />
      </div>
    </div>
  );
}
