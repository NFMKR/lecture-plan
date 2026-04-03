import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Rocket, Sparkles, Globe, Lightbulb, ArrowUp, Crown } from 'lucide-react';

const visions = [
  {
    icon: Rocket,
    title: "技术专家",
    description: "持续深耕前端技术边界，探索AI与前端的深度融合，给公司创造更大价值"
  },
  {
    icon: Sparkles,
    title: "AI赋能业务",
    description: "将AI能力融入产品开发，用智能化工具提升团队效率与用户体验"
  },
  {
    icon: Globe,
    title: "全栈深化",
    description: "构建更完整的技术视野，打通从前端到后端的全链路能力"
  },
  {
    icon: Lightbulb,
    title: "创新引领",
    description: "保持技术敏感度，主动探索新趋势，为团队注入创新活力"
  },
  {
    icon: ArrowUp,
    title: "价值跃升",
    description: "从执行者向价值创造者转变，为业务增长贡献更多技术力量"
  },
  {
    icon: Crown,
    title: "技术影响力",
    description: "沉淀技术方法论，带动团队技术成长，建立个人技术品牌"
  }
];

export function Slide3() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-texture">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-[#F5F0E8]/60 to-transparent" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#8B7355]/4 rounded-full blur-3xl" />
        <div className="absolute top-20 right-20 w-48 h-48 bg-[#8B7355]/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24 flex items-center">
        {/* 左侧 - 简述区域 */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -40 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-[32%] pr-10"
        >
          <span className="font-art-display text-xs text-[#8B7355]/60 tracking-[0.4em] block mb-8">
            04
          </span>

          <div className="art-line mb-8" />

          <h2 className="font-art text-3xl md:text-4xl lg:text-5xl text-[#2D2A26] leading-[1.2] mb-6">
            未来<span className="text-[#8B7355] italic">可期</span>
          </h2>

          <p className="font-['Source_Serif_4'] text-[#5C554A] leading-relaxed mb-6">
            未来可期的未来畅想<br />描绘职业发展蓝图
          </p>

          <div className="flex items-center gap-3">
            <span className="w-6 h-[1px] bg-[#8B7355]/40" />
            <span className="w-1 h-1 rounded-full bg-[#8B7355]/60" />
            <span className="w-6 h-[1px] bg-[#8B7355]/40" />
          </div>
        </motion.div>

        {/* 右侧 - 液态卡片网格 */}
        <motion.div 
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 60 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-[68%] pl-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {visions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="liquid-card rounded-xl p-5 md:p-6 text-center cursor-default"
              >
                {/* 图标 */}
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#8B7355]/10 flex items-center justify-center">
                    <item.icon strokeWidth={1.5} className="w-5 h-5 text-[#8B7355]" />
                  </div>
                </div>

                {/* 标题 */}
                <h3 className="font-art text-base md:text-lg text-[#2D2A26] mb-2">
                  {item.title}
                </h3>

                {/* 描述 */}
                <p className="font-['Source_Serif_4'] text-xs md:text-sm text-[#5C554A] leading-relaxed">
                  {item.description}
                </p>

                {/* 底部装饰 */}
                <div className="mt-4 flex justify-center">
                  <div className="w-8 h-[1px] bg-[#8B7355]/20" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 页码指示 */}
      <div className="absolute bottom-8 left-8 md:left-16">
        <span className="font-art-display text-[10px] text-[#8B7355]/40 tracking-[0.4em]">
          04 / 05
        </span>
      </div>
    </div>
  );
}
