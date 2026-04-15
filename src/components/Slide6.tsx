import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Target, TrendingUp, Lightbulb, Users, Cpu, Award } from 'lucide-react';

const plans = [
  {
    icon: Target,
    title: '前端体系持续深耕',
    description: '完善工程化与组件体系，提升交付一致性与可维护性，持续拉高体验上限。',
  },
  {
    icon: Cpu,
    title: 'AI 能力产品化落地',
    description: '把可复用的提示词/工具链沉淀成能力组件，形成“可复制、可扩展、可度量”的提效方案。',
  },
  {
    icon: TrendingUp,
    title: '全栈协同与性能治理',
    description: '以端到端视角打通链路，聚焦性能、稳定性与可观测性，减少联调成本与返工。',
  },
  {
    icon: Users,
    title: '跨团队协作与影响力',
    description: '在关键项目里承担 owner 角色，主动推动共识与规范，让团队协作更顺滑。',
  },
  {
    icon: Lightbulb,
    title: '业务理解与产品思维',
    description: '更靠近用户与业务指标，用“问题-方案-收益”的方式做决策，提升价值表达能力。',
  },
  {
    icon: Award,
    title: '持续复盘与自我迭代',
    description: '建立复盘机制与成长计划，确保能力增长可持续、可验证。',
  },
];

export function Slide6() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-texture">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[55%] h-[60%] bg-gradient-to-t from-[#F5F0E8]/60 to-transparent" />
        <div className="absolute top-16 right-0 w-80 h-80 bg-[#8B7355]/4 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24 flex items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -40 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-[30%] pr-10"
        >
          <span className="font-art-display text-xs text-[#8B7355]/60 tracking-[0.4em] block mb-8">
            06
          </span>

          <div className="art-line mb-8" />

          <h2 className="font-art text-3xl md:text-4xl lg:text-5xl text-[#2D2A26] leading-[1.2] mb-6">
            未来规划与
            <br />
            <span className="text-[#8B7355] italic">提升方向</span>
          </h2>

          <p className="font-['Source_Serif_4'] text-[#5C554A] leading-relaxed mb-6">
            从能力沉淀到价值输出
          </p>

          <div className="flex items-center gap-3">
            <span className="w-6 h-[1px] bg-[#8B7355]/40" />
            <span className="w-1 h-1 rounded-full bg-[#8B7355]/60" />
            <span className="w-6 h-[1px] bg-[#8B7355]/40" />
          </div>
        </motion.div>

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
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#8B7355]/10 flex items-center justify-center">
                  <item.icon strokeWidth={1.5} className="w-5 h-5 text-[#8B7355]" />
                </div>

                <div className="flex-1">
                  <h3 className="font-art text-base md:text-lg text-[#2D2A26] mb-1">
                    {item.title}
                  </h3>
                  <p className="font-['Source_Serif_4'] text-sm text-[#5C554A] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <span className="flex-shrink-0 font-art-display text-[10px] text-[#8B7355]/30 tracking-widest">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-8 md:left-16">
        <span className="font-art-display text-[10px] text-[#8B7355]/40 tracking-[0.4em]">
          06 / 07
        </span>
      </div>
    </div>
  );
}
