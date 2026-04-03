import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Slide1() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-texture">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-[#F5F0E8]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8B7355]/5 rounded-full blur-3xl" />
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#8B7355]/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24 flex items-center">
        {/* 左侧 - 简述区域 */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -40 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-1/3 pr-12"
        >
          {/* 页码 */}
          <span className="font-art-display text-xs text-[#8B7355]/60 tracking-[0.4em] block mb-8">
            01
          </span>

          {/* 装饰线 */}
          <div className="art-line mb-8" />

          {/* 标题 */}
          <h1 className="font-art text-4xl md:text-5xl lg:text-6xl text-[#2D2A26] leading-[1.2] mb-8">
            Hi all
          </h1>

          <p className="font-art text-lg md:text-xl text-[#5C554A] leading-relaxed mb-8">
            成果回溯・当前规划<span className="text-[#8B7355] italic">・展望未来</span>
          </p>

          {/* 分隔 */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-6 h-[1px] bg-[#8B7355]/40" />
            <span className="w-1 h-1 rounded-full bg-[#8B7355]/60" />
            <span className="w-6 h-[1px] bg-[#8B7355]/40" />
          </div>

          {/* 汇报人 */}
          <div className="flex items-center gap-4">
            <span className="font-art-display text-[10px] text-[#8B7355]/60 tracking-[0.3em]">
              汇报人
            </span>
            <span className="font-art text-xl text-[#2D2A26]">
              郭鹏杰
            </span>
          </div>
        </motion.div>

        {/* 右侧 - 液态卡片 */}
        <motion.div 
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 60 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-2/3 pl-12"
        >
          <div className="liquid-card liquid-card-hover rounded-2xl overflow-hidden">
            {/* 图片区域 */}
            <div className="relative h-80 md:h-96 overflow-hidden">
              <img 
                src="https://7472-tryonapi-9g4f859qef540221-1395010318.tcb.qcloud.la/screenshots/13321.jpg" 
                alt="Presentation Cover" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2A26]/40 to-transparent" />
            </div>
            
            {/* 文字内容 */}
            <div className="p-8 md:p-10">
              <h3 className="font-art text-2xl md:text-3xl text-[#2D2A26] mb-4">
              <span className="text-[#8B7355] italic">聚焦自身技术体系，结合公司业务需求汇报技术价值、成长规划及价值匹配诉求，从而与凹凸同频共行。</span>
              </h3>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 页码指示 */}
      <div className="absolute bottom-8 left-8 md:left-16">
        <span className="font-art-display text-[10px] text-[#8B7355]/40 tracking-[0.4em]">
          01 / 05
        </span>
      </div>
    </div>
  );
}
