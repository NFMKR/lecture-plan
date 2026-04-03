import { motion } from 'framer-motion';
import { Code2, Server, Workflow, Sparkles, Zap, RefreshCcw } from 'lucide-react';
import { useEffect, useState } from 'react';

const capabilities = [
  {
    icon: Code2,
    title: "极致前端",
    description: "提供顶级前端技能支持，深耕技术、优化体验，保障开发质量。",
    number: "01"
  },
  {
    icon: Server,
    title: "全栈贯通",
    description: "打通前后端，高效完成开发与联调，为团队分担核心压力。",
    number: "02"
  },
  {
    icon: Workflow,
    title: "多维角色",
    description: "深入业务理解与产品设计，无缝跨部门协作。",
    number: "03"
  },
  {
    icon: Sparkles,
    title: "AI 赋能与创新",
    description: "主动探索 AI 应用开发，用工具赋能效率与业务创新。",
    number: "04"
  },
  {
    icon: Zap,
    title: "高效执行",
    description: "快速拆解任务、落地需求，全力以赴，不推诿、不敷衍。",
    number: "05"
  },
  {
    icon: RefreshCcw,
    title: "拥抱进化",
    description: "主动适应工作与技术变化，积极探索优化，持续重构完善。",
    number: "06"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export function Capabilities() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-[#0A0A0A] px-8 md:px-16 lg:px-24 overflow-hidden">
      {/* 顶部装饰 */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16"
      >
        <span className="font-art-display text-[10px] md:text-xs text-[#C9A962] tracking-[0.4em] block mb-6">
          CORE CAPABILITIES
        </span>
        <h2 className="font-art text-3xl md:text-5xl lg:text-6xl text-[#F5F5F0] tracking-wide mb-6">
          核心能力
        </h2>
        <div className="gold-line mx-auto" />
      </motion.div>

      {/* 卡片网格 */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#2A2A2A]/30 max-w-6xl w-full rounded-sm overflow-hidden"
      >
        {capabilities.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ 
              backgroundColor: "rgba(201, 169, 98, 0.05)",
              transition: { duration: 0.3 }
            }}
            className="relative bg-[#0A0A0A] p-8 md:p-10 lg:p-12 group cursor-default"
          >
            {/* 卡片编号 */}
            <span className="absolute top-6 right-8 font-art-display text-[10px] text-[#C9A962]/40 tracking-widest">
              {item.number}
            </span>
            
            {/* 图标 */}
            <div className="mb-8 transform group-hover:translate-y-[-4px] transition-transform duration-500">
              <item.icon strokeWidth={1.5} className="w-10 h-10 text-[#C9A962]" />
            </div>

            {/* 标题 */}
            <h3 className="font-art text-xl md:text-2xl text-[#F5F5F0] mb-4 tracking-wide">
              {item.title}
            </h3>

            {/* 描述 */}
            <p className="font-['Source_Serif_4'] text-sm md:text-base text-[#A8A8A3] leading-relaxed">
              {item.description}
            </p>

            {/* 底部装饰线 */}
            <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#C9A962]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </motion.div>

      {/* 页码 */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-12 left-8 md:left-16 flex items-center gap-3"
      >
        <span className="font-art-display text-[10px] text-[#A8A8A3]/60 tracking-[0.4em]">
          02 / 03
        </span>
      </motion.div>
    </div>
  );
}
