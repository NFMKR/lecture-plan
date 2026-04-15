import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Code2, Server, Sparkles, TrendingUp } from 'lucide-react';

const achievements = [
  {
    icon: Code2,
    title: '交付质量与工程化',
    description: '通过工程化规范、组件沉淀与体验打磨，提升交付一致性与迭代效率。',
  },
  {
    icon: Sparkles,
    title: 'AI 能力落地与提效',
    description: '探索并落地大模型应用方案，把“可用”推进到“可复用、可规模化”。',
  },
  {
    icon: Server,
    title: '全栈协同与端到端闭环',
    description: '从需求理解到上线交付形成闭环，降低联调成本与沟通损耗。',
  },
  {
    icon: TrendingUp,
    title: '业务价值表达与可量化',
    description: '把成果与指标挂钩，用“问题-方案-收益”展示价值，让贡献更可见。',
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
          className="w-[35%] pr-10"
        >
          <span className="font-art-display text-xs text-[#8B7355]/60 tracking-[0.4em] block mb-8">
            03
          </span>

          <div className="art-line mb-8" />

          <h2 className="font-art text-3xl md:text-4xl lg:text-5xl text-[#2D2A26] leading-[1.2] mb-6">
            工作成果与<br />
            <span className="text-[#8B7355] italic">价值体现</span>
          </h2>

          <p className="font-['Source_Serif_4'] text-[#5C554A] leading-relaxed mb-6">
            以结果为导向，沉淀可复用能力
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
          className="w-[65%] pl-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="liquid-card liquid-card-hover rounded-xl p-6 md:p-8"
              >
                <div className="mb-4">
                  <item.icon strokeWidth={1.5} className="w-8 h-8 text-[#8B7355]" />
                </div>

                {/* 标题 */}
                <h3 className="font-art text-lg md:text-xl text-[#2D2A26] mb-3">
                  {item.title}
                </h3>

                {/* 描述 */}
                <p className="font-['Source_Serif_4'] text-sm text-[#5C554A] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 页码指示 */}
      <div className="absolute bottom-8 left-8 md:left-16">
        <span className="font-art-display text-[10px] text-[#8B7355]/40 tracking-[0.4em]">
          03 / 07
        </span>
      </div>
    </div>
  );
}
