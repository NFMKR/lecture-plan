import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Lightbulb, MessageSquare, ShieldCheck, Repeat2, Compass, Users } from 'lucide-react';

const reflections = [
  {
    icon: Compass,
    title: '对岗位价值的理解',
    description: '当前前端入门更加容易，我也主动从传统开发思维完成升级转型，注重最优方案与规范沉淀，强化问题解决、项目稳定性保障与细节把控能力，持续深耕前端架构设计，探索前沿技术与 3D、AI 等新场景应用，然后赋能市场做出更好的Demo，和在未来不管做到多大的项目，前端能力永无上限，永不掉队，这才是现代前端的价值。',
  },
  {
    icon: Lightbulb,
    title: '工作思路：复杂问题的解决思路',
    description: '面对复杂技术问题，我坚持先独立思考拆解，然后AI无干扰形况下输出方案，再借助 AI 结合出方案，最终以 “人 + AI” 协同推导最优方案，在保证高质量输出的同时，持续提升自身能力上限。',
  },
  {
    icon: Compass,
    title: '方向先于速度',
    description: '先对齐目标与验收标准，再推进实现，避免“做得很快但不对”的返工成本。',
  },
  {
    icon: MessageSquare,
    title: '对工作方法的总结',
    description: '凡事提前规划，分清轻重缓急，避免被动应对。重视沟通闭环，确保信息准确传递，减少误解与返工。注重复盘总结，在每一次任务后梳理得失，持续迭代改进。',
  },
  {
    icon: Users,
    title: '对团队与业务的思考',
    description: '团队效率来自每个人的专业、靠谱与主动。未来工作中，我会继续站在团队角度思考问题，不只关注自己的一亩三分地，更主动为整体目标贡献力量。',
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
            04
          </span>

          <div className="art-line mb-8" />

          <h2 className="font-art text-3xl md:text-4xl lg:text-5xl text-[#2D2A26] leading-[1.2] mb-6">
            工作中的
            <span className="text-[#8B7355] italic">思考</span>
          </h2>

          <p className="font-['Source_Serif_4'] text-[#5C554A] leading-relaxed mb-6">
            方法论与心智模式的沉淀
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
            {reflections.map((item, index) => (
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
          04 / 07
        </span>
      </div>
    </div>
  );
}
