import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Target, TrendingUp, Heart, Users, Briefcase, Award } from 'lucide-react';

const plans = [
  {
    icon: Target,
    title: "能力规划",
    description: "提供顶级前端技能支持，深耕技术、优化体验，保障开发质量。"
  },
  {
    icon: TrendingUp,
    title: "全栈贯通",
    description: "打通前后端，高效完成开发与联调，为团队分担核心压力。"
  },
  {
    icon: Heart,
    title: "多维角色",
    description: "深入业务理解与产品设计，无缝跨部门协作。"
  },
  {
    icon: Users,
    title: "AI 赋能与创新",
    description: "主动探索 AI 应用开发，用工具赋能效率与业务创新，具备不破不立的精神。"
  },
  {
    icon: Briefcase,
    title: "职业理念",
    description: "快速拆解任务、落地需求，全力以赴，不推诿、不敷衍、高效执行。"
  },
  {
    icon: Award,
    title: "拥抱进化",
    description: "主动适应工作与技术变化，积极探索优化，助力团队成长。"
  }
];

export function Slide4() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-texture">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[50%] h-[60%] bg-gradient-to-t from-[#F5F0E8]/60 to-transparent" />
        <div className="absolute top-20 right-0 w-80 h-80 bg-[#8B7355]/4 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24 flex items-center">
        {/* 左侧 - 简述区域 */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -40 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-[30%] pr-10"
        >
          <span className="font-art-display text-xs text-[#8B7355]/60 tracking-[0.4em] block mb-8">
            03
          </span>

          <div className="art-line mb-8" />

          <h2 className="font-art text-3xl md:text-4xl lg:text-5xl text-[#2D2A26] leading-[1.2] mb-6">
            工作<span className="text-[#8B7355] italic">计划</span>
          </h2>

          <p className="font-['Source_Serif_4'] text-[#5C554A] leading-relaxed mb-6">
            当前职业规划<br />与价值体现
          </p>

          <div className="flex items-center gap-3">
            <span className="w-6 h-[1px] bg-[#8B7355]/40" />
            <span className="w-1 h-1 rounded-full bg-[#8B7355]/60" />
            <span className="w-6 h-[1px] bg-[#8B7355]/40" />
          </div>
        </motion.div>

        {/* 右侧 - 液态卡片列表 */}
        <motion.div 
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 60 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-[70%] pl-10"
        >
          <div className="space-y-4">
            {plans.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="liquid-card liquid-card-hover rounded-xl p-5 md:p-6 flex items-center gap-5"
              >
                {/* 图标 */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#8B7355]/10 flex items-center justify-center">
                  <item.icon strokeWidth={1.5} className="w-5 h-5 text-[#8B7355]" />
</div>

                {/* 内容 */}
                <div className="flex-1">
                  <h3 className="font-art text-base md:text-lg text-[#2D2A26] mb-1">
                    {item.title}
                  </h3>
                  <p className="font-['Source_Serif_4'] text-sm text-[#5C554A] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* 编号 */}
                <span className="flex-shrink-0 font-art-display text-[10px] text-[#8B7355]/30 tracking-widest">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 页码指示 */}
      <div className="absolute bottom-8 left-8 md:left-16">
        <span className="font-art-display text-[10px] text-[#8B7355]/40 tracking-[0.4em]">
          03 / 05
        </span>
      </div>
    </div>
  );
}
