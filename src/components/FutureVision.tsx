import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function FutureVision() {
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
          src="https://7472-tryonapi-9g4f859qef540221-1395010318.tcb.qcloud.la/screenshots/213.jpg" 
          alt="Future Vision Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* 多层渐变遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-transparent to-transparent" />
      </motion.div>

      {/* 内容区域 */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-16 lg:px-24 text-left">
        {/* 英文标签 */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-art-display text-[10px] md:text-xs text-[#C9A962] tracking-[0.4em] block mb-8"
        >
          VISION & FUTURE
        </motion.span>

        {/* 装饰线 */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isVisible ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-16 h-[1px] bg-[#C9A962] mb-12 origin-left"
        />

        {/* 主标题 */}
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-art text-3xl md:text-5xl lg:text-6xl text-[#F5F5F0] leading-[1.5] tracking-wide mb-8"
        >
          持续深耕
          <span className="text-[#C9A962] italic">前端技术</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-art text-2xl md:text-4xl lg:text-5xl text-[#A8A8A3] leading-[1.5] tracking-wide mb-8"
        >
          深化<span className="text-[#F5F5F0]">全栈与AI应用</span>开发能力
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-art text-2xl md:text-4xl lg:text-5xl text-[#A8A8A3] leading-[1.5] tracking-wide mb-16"
        >
          结合业务创造价值
        </motion.p>

        {/* 分隔装饰 */}
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: isVisible ? 1 : 0, scaleX: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="w-12 h-[1px] bg-[#C9A962]/50" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A962]/60" />
          <span className="w-12 h-[1px] bg-[#C9A962]/50" />
        </motion.div>

        {/* 愿景总结 */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-art text-xl md:text-2xl text-[#F5F5F0] tracking-wide"
        >
          助力团队共同成长
        </motion.p>

        {/* 感谢语 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 1, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 md:mt-32"
        >
          <div className="w-12 h-[1px] bg-[#C9A962]/40 mx-0 mb-8" />
          <p className="font-art-display text-sm md:text-base text-[#A8A8A3]/60 tracking-[0.3em]">
            THANK YOU
          </p>
        </motion.div>
      </div>

      {/* 页码 */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute bottom-12 left-8 md:left-16 flex items-center gap-3"
      >
        <span className="font-art-display text-[10px] text-[#A8A8A3]/60 tracking-[0.4em]">
          03 / 03
        </span>
      </motion.div>

      {/* 右侧装饰 */}
      <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2">
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-[#C9A962]/20 to-transparent" />
      </div>
    </div>
  );
}
