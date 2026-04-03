import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-[#0A0A0A] overflow-hidden">
      {/* 背景图片 */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img 
          src="https://7472-tryonapi-9g4f859qef540221-1395010318.tcb.qcloud.la/screenshots/13321.jpg" 
          alt="Presentation Cover" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* 渐变遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/40" />
      </motion.div>

      {/* 内容区域 */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-16 text-left">
        {/* 装饰性元素 */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isVisible ? 1 : 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-16 h-[1px] bg-[#C9A962] mb-12 origin-left"
        />

        {/* 主标题 */}
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-art text-4xl md:text-6xl lg:text-7xl text-[#F5F5F0] leading-[1.3] mb-8 tracking-wide"
        >
          大家好
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-art text-lg md:text-xl lg:text-2xl text-[#A8A8A3] leading-relaxed mb-16 max-w-2xl"
        >
          在此即<span className="text-[#C9A962] italic">自我职业规划</span>展开聊聊
        </motion.p>

        {/* 分隔装饰 */}
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: isVisible ? 1 : 0, scaleX: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="w-8 h-[1px] bg-[#C9A962]/50" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A962]/60" />
          <span className="w-8 h-[1px] bg-[#C9A962]/50" />
        </motion.div>

        {/* 汇报人信息 */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
          transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-4"
        >
          <span className="font-art-display text-xs md:text-sm text-[#A8A8A3] tracking-[0.3em]">
            汇报人
          </span>
          <span className="w-[1px] h-8 bg-[#2A2A2A] rotate-12" />
          <span className="font-art text-xl md:text-2xl text-[#F5F5F0] tracking-wide">
            郭鹏杰
          </span>
        </motion.div>

        {/* 底部装饰 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-12 left-8 md:left-16 flex items-center gap-3"
        >
          <span className="font-art-display text-[10px] text-[#A8A8A3]/60 tracking-[0.4em]">
            01 / 03
          </span>
        </motion.div>
      </div>

      {/* 右侧装饰 */}
      <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-[#C9A962]/30 to-transparent" />
      </div>
    </div>
  );
}
