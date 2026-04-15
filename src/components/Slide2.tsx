import { motion } from 'framer-motion';
import type { ComponentType } from 'react';
import { useEffect, useState } from 'react';
import { CalendarDays, Flag, Rocket, Sparkles, Wrench, ShieldCheck, Users, Gauge } from 'lucide-react';
import { useRef } from 'react';

type TimelineItem = {
  id: string;
  time: string;
  shortTitle: string;
  title: string;
  points: string[];
  icon?: ComponentType<{ className?: string; strokeWidth?: number }>;
  imageSrc?: string;
};

const timeline: TimelineItem[] = [
  {
    id: '2025-0520',
    time: '25/05/20',
    shortTitle: '梦开始',
    title: '职业梦开始（2025/05/20）',
    points: [
      '职业旅程启程，成为凹凸人',
      '快速熟悉业务与协作方式，担起业务开发',
      '目标与定位：界面架构师为核心、全栈开发工程师为支撑、空间交互与图形架构专家为长期发展目标',
    ],
    imageSrc:
      'https://7472-tryonapi-9g4f859qef540221-1395010318.tcb.qcloud.la/zygh/11.png',
  },
  {
    id: '2025-05-seekrec',
    time: '25/05',
    shortTitle: 'Seekrec',
    title: '按时完成 Seekrec 需求（5 月中旬）',
    points: [
      '精准对接需求，高效完成前端功能开发与页面实现，确保节点如期交付',
      '建立移动端样式质量基线，强化需求理解与高效交付能力',
      '反思项目未上线原因，后续将主动前后端联动，确保项目完整落地闭环',
    ],
    imageSrc: 'https://7472-tryonapi-9g4f859qef540221-1395010318.tcb.qcloud.la/zygh/logo.gif',
  },
  {
    id: '2025-0827',
    time: '25/08/27',
    shortTitle: '团建',
    title: '团建（8/27）',
    points: [
      '积极参与团队团建，增进同事交流，感受团队氛围，提升凝聚力与协作默契',
      '进一步强化团队意识，后续更好地融入集体、高效协同，共同推进项目目标',
    ],
    imageSrc: 'https://7472-tryonapi-9g4f859qef540221-1395010318.tcb.qcloud.la/zygh/0293f50045d5ea5d035012a505961495.jpg',
  },
  {
    id: '2025-10-ai-eng',
    time: '25/10',
    shortTitle: 'AI工程师',
    title: '按预计时间完成 AI 工程师相关工作（10 月）',
    points: [
      '按计划完成前端模块开发、联调与迭代，按期交付 AI 工程师相关功能',
      '积累了 AI 接口对接、全栈联调与复杂功能拆解的实战经验',
      '反思产品效果不足，后续将坚持质量优先，保障功能效果与可用性达标',
    ],
    imageSrc: 'https://7472-tryonapi-9g4f859qef540221-1395010318.tcb.qcloud.la/zygh/logo.png',
  },
  {
    id: '2025-11-ai-matrix',
    time: '25/11',
    shortTitle: 'AI 产品出海',
    title: 'AI 出海产品产品（11 月）',
    points: [
      '负责AI出海产品全栈开发与项目交付',
      '掌握出海产品开发规范，形成流程化、标准化的开发模式',
      '提升产品化思维与多模块整合能力，深化AI产品整体认知',
      '后续持续优化流程，实现更高效、稳定、可复制的交付能力',
    ],
    icon: Sparkles,
  },
  {
    id: '2025-12-filing',
    time: '25/12',
    shortTitle: '备案',
    title: '备案产品（12 月）',
    points: [
      '完成备案相关功能调整与页面适配，保障产品合规上线交付',
      '沉淀备案类产品标准化开发流程，实现前端快速交付',
      '后续将持续梳理规范与技能体系，形成可复用技术资产',
    ],
    icon: ShieldCheck,
  },
  {
    id: '2025-1217',
    time: '25/12/17',
    shortTitle: '冬至',
    title: '冬至团建（12/17）',
    points: [
      '参与冬至团建活动，与同事深度交流，增进团队默契',
      '在协作配合中提升多角度解决问题的能力，强化团队协作意识',
    ],
    imageSrc: 'https://7472-tryonapi-9g4f859qef540221-1395010318.tcb.qcloud.la/zygh/3bbdcbd001303729a7ea353dd56f74fc.jpg',
  },
  {
    id: '2026-02-yiwo',
    time: '26/02',
    shortTitle: '衣我',
    title: '衣我试衣',
    points: [
      '独立主导衣我项目全流程开发，完成功能闭环并按时交付',
      '项目运行稳定，满足实际业务场景需求',
      '沉淀端到端全链路开发能力，强化从产品设计到前后端及运维的整体思维',
      '后续将在同类项目中强化用户体验设计，进一步提升产品品质',
    ],
    imageSrc: 'https://7472-tryonapi-9g4f859qef540221-1395010318.tcb.qcloud.la/zygh/logo%20(1).png',
  },
  {
    id: '2026-03-ai-app',
    time: '26/03',
    shortTitle: 'Openclaw',
    title: 'AI 应用产品（3 月）',
    points: [
      '参与 AI 应用产品核心功能研发，完成 OpenClaw 二次开发与 Agent 协作空间开发',
      '快速补充 AI 相关技术知识，在高效迭代节奏下按期完成交付',
      '提升新技术落地能力，保持技术敏感度与 AI 工程化实践能力',
    ],
    icon: Rocket,
  },
  {
    id: '2026-04-jingwei-3d',
    time: '26/04',
    shortTitle: '经纬3D',
    title: '经纬：三维新功能（4 月）',
    points: [
      '负责经纬项目 Web 及 App 端前端开发，同步实现 3D 可视化新功能与三维交互扩展',
      '保障三维模块按预期落地，满足工业场景展示与交互需求',
      '沉淀 Three.js 实战、复杂渲染优化与多端适配经验，强化新技术落地能力',
    ],
    icon: CalendarDays,
  },
  {
    id: 'dreams-come-true',
    time: 'NOW',
    shortTitle: '梦想成真',
    title: '梦想成真（持续前行）',
    points: [
      '持续复盘与迭代，把经验沉淀为方法与资产',
      '让个人贡献更可见、交付更稳定、协作更顺滑',
      '围绕“界面架构/全栈/空间交互与图形架构”持续深耕，推动更多可规模化的价值落地',
    ],
    imageSrc: 'https://7472-tryonapi-9g4f859qef540221-1395010318.tcb.qcloud.la/zygh/6430680529bb8c2a9ed067f2838beb5d.jpg',
  },
];

function buildWavyPath(width: number, height: number, turns: number) {
  const paddingX = 26;
  const leftX = paddingX;
  const rightX = Math.max(paddingX, width - paddingX);
  const topY = 18;
  const bottomY = Math.max(topY + 1, height - 18);

  const segments = Math.max(3, turns * 2);
  const stepY = (bottomY - topY) / segments;

  let d = `M ${leftX} ${topY}`;
  for (let i = 0; i < segments; i++) {
    const y1 = topY + stepY * i;
    const y2 = topY + stepY * (i + 1);
    const isToRight = i % 2 === 0;
    const x0 = isToRight ? leftX : rightX;
    const x1 = isToRight ? rightX : leftX;
    const cx1 = x0 + (x1 - x0) * 0.75;
    const cx2 = x0 + (x1 - x0) * 0.25;
    d += ` C ${cx1} ${y1 + stepY * 0.3}, ${cx2} ${y2 - stepY * 0.3}, ${x1} ${y2}`;
  }
  return d;
}

function buildOrthogonalRoundedPath(width: number, height: number, turns: number, radius: number) {
  const paddingX = 34;
  const leftX = paddingX;
  const rightX = Math.max(paddingX, width - paddingX);
  const topY = 18;
  const bottomY = Math.max(topY + 1, height - 18);

  // “水平直线 + 竖向连接”的蛇形路线：每一行一条水平线，行尾下接到下一行
  const rows = Math.max(3, turns * 2);
  const stepY = (bottomY - topY) / rows;
  const r = Math.max(6, Math.min(radius, stepY * 0.35));

  let d = `M ${leftX} ${topY}`;
  for (let row = 0; row < rows; row++) {
    const y = topY + stepY * row;
    const yNext = topY + stepY * (row + 1);
    const toRight = row % 2 === 0;
    const xEnd = toRight ? rightX : leftX;
    const xBeforeCorner = toRight ? xEnd - r : xEnd + r;

    // 本行水平段
    d += ` L ${xBeforeCorner} ${y}`;

    // 最后一行不需要再向下连接
    if (row === rows - 1) {
      d += ` L ${xEnd} ${y}`;
      break;
    }

    // 圆角转向：水平 -> 竖直向下
    d += ` Q ${xEnd} ${y} ${xEnd} ${y + r}`;

    // 竖直段（留出下一个圆角）
    const yBeforeNextCorner = yNext - r;
    d += ` L ${xEnd} ${yBeforeNextCorner}`;

    // 圆角转向：竖直 -> 下一行水平（方向相反）
    const xAfterCorner = toRight ? xEnd - r : xEnd + r;
    d += ` Q ${xEnd} ${yNext} ${xAfterCorner} ${yNext}`;
  }

  return d;
}

type Point = { x: number; y: number };

function getTimelineLayout(count: number, width: number, height: number) {
  // 左右更宽：更小的 padding，让水平线段更长
  const paddingX = 10;
  const leftX = paddingX;
  const rightX = Math.max(paddingX, width - paddingX);

  // 纵向更松弛且更上提
  const topY = 8;
  const bottomY = Math.max(topY + 1, height - 52);

  const safeCount = Math.max(2, count);
  const rows = safeCount - 1; // rows 条水平线段，对应 n 个节点
  const stepY = (bottomY - topY) / rows;

  // 节点放在“水平线中段”，用不同 alpha 做轻微变化，避免机械
  const points: Point[] = [];
  for (let i = 0; i < safeCount; i++) {
    const y = topY + stepY * i;
    const wave = Math.sin(i * 0.85) * 0.08; // -0.08~0.08
    const alphaBase = i % 2 === 0 ? 0.32 : 0.68;
    const alpha = Math.max(0.18, Math.min(0.82, alphaBase + wave));
    const x = leftX + (rightX - leftX) * alpha;
    points.push({ x, y });
  }

  return { points, leftX, rightX, topY, bottomY, rows, stepY };
}

function buildSerpentineRoundedPath(width: number, height: number, rows: number, radius: number, leftX: number, rightX: number, topY: number, bottomY: number) {
  const safeRows = Math.max(1, rows);
  const stepY = (bottomY - topY) / safeRows;
  const r = Math.max(6, Math.min(radius, stepY * 0.35));

  let d = `M ${leftX} ${topY}`;
  for (let row = 0; row <= safeRows; row++) {
    const y = topY + stepY * row;
    const yNext = topY + stepY * (row + 1);
    const toRight = row % 2 === 0;
    const xEnd = toRight ? rightX : leftX;
    const xBeforeCorner = toRight ? xEnd - r : xEnd + r;

    // 本行水平段：到拐角前 r 的位置（不直角撞到角点）
    d += ` L ${xBeforeCorner} ${y}`;

    if (row === safeRows) {
      // 最后一行只需要走到端点
      d += ` L ${xEnd} ${y}`;
      break;
    }

    // 圆角转向：水平 -> 竖直向下（直接从拐角前过渡，不产生直角）
    d += ` Q ${xEnd} ${y} ${xEnd} ${y + r}`;
    const yBeforeNextCorner = yNext - r;
    d += ` L ${xEnd} ${yBeforeNextCorner}`;
    const xAfterCorner = toRight ? xEnd - r : xEnd + r;
    d += ` Q ${xEnd} ${yNext} ${xAfterCorner} ${yNext}`;
  }
  return d;
}

export function Slide2() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [pinnedId, setPinnedId] = useState<string | null>(null);
  const viewW = 520;
  const viewH = 520;
  const layout = getTimelineLayout(timeline.length, viewW, viewH);
  const points = layout.points;
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const activeId = pinnedId ?? hoveredId;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!pinnedId) return;

    const onPointerDown = (e: PointerEvent) => {
      const el = timelineRef.current;
      if (!el) return;
      const target = e.target as Node | null;
      if (!target) return;
      // 点击时间线容器之外：关闭
      if (!el.contains(target)) {
        setPinnedId(null);
        setHoveredId(null);
        return;
      }

      // 点击时间线容器内的“卡片/节点”以外区域：关闭
      const targetEl = target as Element;
      if (!targetEl.closest('[data-popover-root="true"]')) {
        setPinnedId(null);
        setHoveredId(null);
      }
    };

    document.addEventListener('pointerdown', onPointerDown, { capture: true });
    return () => document.removeEventListener('pointerdown', onPointerDown, { capture: true } as any);
  }, [pinnedId]);

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
            成果<br />
            <span className="text-[#8B7355] italic">回顾</span>
          </h2>


          <div className="flex items-center gap-3">
            <span className="w-6 h-[1px] bg-[#8B7355]/40" />
            <span className="w-1 h-1 rounded-full bg-[#8B7355]/60" />
            <span className="w-6 h-[1px] bg-[#8B7355]/40" />
          </div>
        </motion.div>

        {/* 右侧 - 线条式时间路径图 */}
        <motion.div 
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 60 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-[65%] pl-10"
        >
          <div
            ref={timelineRef}
            className="relative"
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* 路径画布（无卡片背景，直接铺在页面上） */}
            <div className="relative h-[460px] md:h-[600px]">
              <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 520 520" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="pathGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(139,115,85,0.12)" />
                    <stop offset="50%" stopColor="rgba(139,115,85,0.55)" />
                    <stop offset="100%" stopColor="rgba(139,115,85,0.14)" />
                  </linearGradient>
                </defs>

                <motion.path
                  d={buildSerpentineRoundedPath(viewW, viewH, layout.rows, 18, layout.leftX, layout.rightX, layout.topY, layout.bottomY)}
                  fill="none"
                  stroke="url(#pathGrad)"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: isVisible ? 1 : 0, opacity: isVisible ? 1 : 0 }}
                  transition={{ duration: 1.2, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                />
              </motion.svg>

              {/* 节点：沿高度均匀分布，左右交替 */}
              {timeline.map((item, index) => {
                const p = points[index] ?? points[points.length - 1]!;
                const xPct = (p.x / viewW) * 100;
                const yPct = (p.y / viewH) * 100;
                const isRight = index % 2 === 1;
                const Icon = item.icon;
                const isActive = activeId === item.id;

                return (
                  <motion.div
                    key={item.id}
                    className="absolute"
                    style={{
                      left: `${xPct}%`,
                      top: `${yPct}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.55 + index * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <button
                      type="button"
                      onMouseEnter={() => setHoveredId(item.id)}
                      onFocus={() => setHoveredId(item.id)}
                      onBlur={() => setHoveredId(null)}
                      onClick={(e) => {
                        // 点击节点：固定打开；再次点击同一节点：关闭（点击必弹框）
                        e.stopPropagation();
                        setPinnedId((prev) => (prev === item.id ? null : item.id));
                      }}
                      className="group relative"
                      data-popover-root="true"
                      aria-label={`${item.time}：${item.title}`}
                    >
                      <span className="absolute -inset-3 rounded-full bg-[#8B7355]/[0.06] opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity" />
                      <span className="relative w-10 h-10 rounded-full bg-white/30 backdrop-blur-md border border-[#8B7355]/30 flex items-center justify-center shadow-sm">
                        {item.imageSrc ? (
                          <img
                            src={item.imageSrc}
                            alt={item.shortTitle}
                            className="w-full h-full rounded-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        ) : Icon ? (
                          <Icon strokeWidth={1.6} className="w-4.5 h-4.5 text-[#8B7355]" />
                        ) : null}
                      </span>
                      <span className="mt-2 flex items-center justify-center gap-2 whitespace-nowrap">
                        <span className="inline-flex items-center font-art-display text-[10px] md:text-[11px] text-[#2D2A26] tracking-[0.18em] px-2.5 py-1 rounded-full bg-white/55 backdrop-blur-md border border-[#8B7355]/25 shadow-sm">
                          {item.time}
                        </span>
                        <span className="font-art-display text-[10px] md:text-[11px] text-[#8B7355]/90 tracking-[0.18em]">
                          {item.shortTitle}
                        </span>
                      </span>
                    </button>

                    {/* 悬浮详情弹框 */}
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 0 : 6,
                        scale: isActive ? 1 : 0.98,
                        pointerEvents: isActive ? 'auto' : 'none',
                      }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className={[
                        'absolute top-1/2 -translate-y-1/2 z-20 w-72 md:w-80',
                        isRight ? 'right-[calc(100%+14px)]' : 'left-[calc(100%+14px)]',
                      ].join(' ')}
                      onPointerDown={(e) => {
                        // 点击弹框内部不应触发关闭
                        e.stopPropagation();
                      }}
                      data-popover-root="true"
                    >
                      <div className="liquid-card rounded-xl p-5 md:p-6 border border-[#8B7355]/10">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="inline-flex items-center font-art-display text-[9px] text-[#8B7355]/75 tracking-[0.22em] px-3 py-1 border border-[#8B7355]/20 rounded-full">
                            {item.time} {item.shortTitle}
                          </span>
                          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#8B7355]/15 to-transparent" />
                        </div>
                        <h3 className="font-art text-lg text-[#2D2A26] mb-3">{item.title}</h3>
                        {item.imageSrc && (
                          <div className="mb-4 flex justify-center">
                            <img
                              src={item.imageSrc}
                              alt={item.shortTitle}
                              className="w-24 h-24 rounded-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        )}
                        <ul className="space-y-2">
                          {item.points.map((p) => (
                            <li key={p} className="flex items-start gap-3">
                              <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#8B7355]/60" />
                              <span className="font-['Source_Serif_4'] text-sm text-[#5C554A] leading-relaxed">
                                {p}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      {/* 页码指示 */}
      <div className="absolute bottom-8 left-8 md:left-16">
        <span className="font-art-display text-[10px] text-[#8B7355]/40 tracking-[0.4em]">
          02 / 07
        </span>
      </div>
    </div>
  );
}
