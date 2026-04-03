import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Code2, Server, Sparkles, Layers } from 'lucide-react';

const achievements = [
  {
    icon: Code2,
    title: "前端技术体系成熟",
    description: "拥有40+前端项目实战经验，熟练掌握 React、Vue 等主流前端技术，具备完整的前端工程化与业务落地能力。",
    tag: "前端"
  },
  {
    icon: Server,
    title: "全栈独立交付能力",
    description: "独立完成7+服务端项目，覆盖产品设计、架构开发、运维部署与技术对接，具备从0到1打造完整产品的全栈能力。",
    tag: "全栈"
  },
  {
    icon: Sparkles,
    title: "AI应用开发能力",
    description: "深度参与 Openclaw、AutoSpace 等 AI 项目，精通大模型应用开发，持续探索新一代产品技术范式。",
    tag: "AI"
  },
  {
    icon: Layers,
    title: "认同凹凸时空文化，融入团队大家庭",
    description: "深度认同凹凸时空的企业文化与价值观，把团队当作共同成长的家庭，注重协作、责任与归属感，用软实力为团队创造长期价值。",
    tag: "文化"
  }
];

export function Slide2() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-texture">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[40%] h-full bg-gradient-to-r from-[#F5F0E8]/80 to-transparent" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#8B7355]/5 rounded-full blur-3xl" />
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
            02
          </span>

          <div className="art-line mb-8" />

          <h2 className="font-art text-3xl md:text-4xl lg:text-5xl text-[#2D2A26] leading-[1.2] mb-6">
            工作成果<br />
            <span className="text-[#8B7355] italic">回溯</span>
          </h2>

          <p className="font-['Source_Serif_4'] text-[#5C554A] leading-relaxed mb-6">
            统计成果，展示技术体系
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
                {/* 标签 */}
                <span className="inline-block font-art-display text-[9px] text-[#8B7355]/70 tracking-[0.2em] mb-4 px-3 py-1 border border-[#8B7355]/20 rounded-full">
                  {item.tag}
                </span>

                {/* 图标 */}
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
          02 / 05
        </span>
      </div>
    </div>
  );
}
