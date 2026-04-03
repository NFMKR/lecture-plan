# 述职演讲网页 - 深度设计思考文档

## 一、设计理念与定位

### 1.1 核心设计哲学
本次设计追求**「静谧优雅」**的美学理念，在极简主义的基础上融入艺术质感。如同一场精心策划的个人展览，每一页幻灯片都是一件独立艺术品，通过留白、字体韵律和微妙动效传递专业深度与个人魅力。

### 1.2 视觉语言定义
设计语言从**高端艺术画廊**与**精品杂志排版**中汲取灵感，强调：
- 大面积留白创造呼吸感
- 衬线字体的优雅韵律
- 克制的装饰元素
- 流畅的过渡动效
- 沉浸式的全屏体验

---

## 二、字体系统设计

### 2.1 主标题字体：Playfair Display
**选择理由：** 经典衬线体，拥有优雅的衬线细节和强烈的视觉个性，非常适合演讲开场和核心标题使用。

```
font-family: 'Playfair Display', 'Noto Serif SC', Georgia, serif;
```

**应用场景：**
- Hero页主标题
- 章节标题
- 能力卡片标题
- 愿景页主标题

### 2.2 正文字体：Source Serif 4
**选择理由：** 高度可读的衬线体，在保持优雅的同时确保长时间阅读的舒适性。

```
font-family: 'Source Serif 4', 'Noto Serif SC', Georgia, serif;
```

**应用场景：**
- 正文描述文字
- 副标题
- 按钮与标签文字

### 2.3 辅助字体：Cormorant Garamond
**选择理由：** 极度优雅的衬线体，适合装饰性使用和英文字符展示。

**应用场景：**
- 英文装饰性文字
- 页码指示器
- 特殊强调

### 2.4 中文字体：Noto Serif SC
**选择理由：** 与西文衬线体完美匹配的中文衬线字体，Google Fonts 官方字体包。

---

## 三、色彩系统设计

### 3.1 主题色板：深邃墨黑 + 暖金点缀

```
主色调（Primary）
--color-bg-primary: #0A0A0A        /* 近乎纯黑的深色背景 */
--color-bg-secondary: #141414     /* 卡片与分层背景 */
--color-bg-elevated: #1A1A1A      /* 悬浮元素背景 */

强调色（Accent）
--color-accent-gold: #C9A962      /* 暖金色强调 - 用于关键元素 */
--color-accent-warm: #D4A574      /* 温暖米色 - 辅助强调 */
--color-accent-subtle: #8B7355    /* 低调褐色 - 装饰线条 */

中性色（Neutral）
--color-text-primary: #F5F5F0     /* 近白色主文字 */
--color-text-secondary: #A8A8A3   /* 灰白色次要文字 */
--color-text-muted: #5C5C5C       /* 低对比度辅助文字 */
--color-border: #2A2A2A           /* 微妙的边界线 */

功能性色（Functional）
--color-divider: #333333          /* 分隔线 */
--color-overlay: rgba(0,0,0,0.6)  /* 内容叠加遮罩 */
```

### 3.2 色彩情绪分析

| 色彩 | 情绪 | 应用 |
|------|------|------|
| 深墨黑 | 专业、沉稳、专注 | 全局背景 |
| 暖金色 | 高端、温暖、强调 | 关键数字、装饰元素 |
| 近白色 | 清晰、高雅、易读 | 主标题文字 |
| 灰白色 | 温和、辅助、平衡 | 正文与描述 |

---

## 四、布局系统设计

### 4.1 幻灯片架构

采用**全屏幻灯片（Full-Screen Slides）**模式，每个页面占据完整的视口高度和宽度，彻底移除垂直滚动。

```
┌─────────────────────────────────────────┐
│  [页码指示器]              [右侧固定]   │
│                                         │
│                                         │
│            [幻灯片内容区域]             │
│            居中对齐                     │
│            最大宽度 1200px              │
│                                         │
│                                         │
│  [导航控制]           [底部进度条]       │
└─────────────────────────────────────────┘
```

### 4.2 网格系统

**内容容器宽度：** 1200px（桌面）/ 100%（移动端）
**内容安全边距：** 80px（桌面）/ 24px（移动端）
**元素间距基准：** 8px 网格系统

### 4.3 页面内容布局

**Hero页面：**
- 全屏背景图（带渐变叠加）
- 居中文字布局
- 主标题 + 副标题 + 汇报人信息

**核心能力页面：**
- 2行 x 3列网格布局（桌面）
- 2行 x 2列（平板）/ 单列（手机）
- 卡片内：图标 + 标题 + 描述

**FutureVision页面：**
- 全屏背景图
- 居中大段文字
- 结束语与感谢词

---

## 五、动效系统设计

### 5.1 幻灯片切换动效

**核心机制：水平滑动 + 内容淡入**

```javascript
// 切换动画参数
{
  direction: 'horizontal',
  duration: 0.8,
  easing: [0.25, 0.1, 0.25, 1], // cubic-bezier
  content: {
    fadeIn: { delay: 0.3, duration: 0.6 },
    stagger: 0.1
  }
}
```

**交互方式：**
- 键盘左右箭头切换
- 鼠标滚轮/触控滑动切换
- 点击左右区域切换
- 底部页码点击跳转

### 5.2 内容入场动效

**Hero页面：**
- 背景图：scale(1.05) → scale(1)，持续 1.5s
- 主标题：从 opacity: 0, y: 30 → 正常，delay: 0.5s
- 副标题：从 opacity: 0, y: 20 → 正常，delay: 0.7s
- 汇报人：从 opacity: 0, y: 20 → 正常，delay: 0.9s

**能力卡片：**
- 依次入场：每卡片 delay 0.1s
- 卡片入场：从 opacity: 0, y: 40 → 正常
- 悬浮效果：轻微上浮 + 边框发光

**愿景页面：**
- 标签：从 opacity: 0 → 正常，delay: 0s
- 主标题：从 opacity: 0, y: 30 → 正常，delay: 0.2s
- 结束语：从 opacity: 0 → 正常，delay: 0.6s

### 5.3 微交互动效

- 导航指示器：当前页高亮 + hover 缩放
- 卡片悬浮：transform: translateY(-4px) + 边框渐变
- 按钮交互：背景色渐变 + 轻微缩放

---

## 六、导航系统设计

### 6.1 页码指示器

**位置：** 屏幕右侧垂直排列
**样式：** 圆点 + 数字标签
**状态：**
- 默认：4px 圆点，灰色
- 当前：6px 圆点，暖金色 + 数字显示
- Hover：放大 + 显示页面名称

### 6.2 进度指示器

**位置：** 屏幕底部
**样式：** 细线进度条
**功能：** 显示当前进度，可点击跳转

### 6.3 键盘导航

| 按键 | 动作 |
|------|------|
| ← 左箭头 | 上一页 |
| → 右箭头 | 下一页 |
| Home | 首页 |
| End | 末页 |

---

## 七、技术实现方案

### 7.1 架构选择

基于现有技术栈（React + Vite + Tailwind CSS + Framer Motion），采用：

**状态管理：** React useState + useRef 管理当前幻灯片索引
**动画库：** Framer Motion 的 AnimatePresence 实现切换动画
**布局引擎：** CSS Grid/Flexbox 实现响应式布局
**触控支持：** 集成触控滑动事件处理

### 7.2 核心组件结构

```
src/
├── components/
│   ├── Presentation.tsx      # 主幻灯片容器
│   ├── Slide.tsx              # 单页幻灯片组件
│   ├── Navigation.tsx        # 导航指示器
│   ├── Progress.tsx          # 进度条
│   ├── Hero.tsx              # Hero页面
│   ├── Capabilities.tsx      # 核心能力页面
│   └── FutureVision.tsx      # 愿景页面
├── hooks/
│   └── useSlideNavigation.ts  # 幻灯片导航Hook
├── styles/
│   └── presentation.css      # 幻灯片专用样式
└── App.tsx                    # 主入口
```

### 7.3 左右滑动实现

**关键实现点：**

1. **容器设置：**
```css
.presentation-container {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}
```

2. **幻灯片定位：**
```css
.slide {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translateX(100%);
  transition: transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.slide.active {
  transform: translateX(0);
}

.slide.prev {
  transform: translateX(-100%);
}
```

3. **Framer Motion 实现：**
```tsx
<AnimatePresence mode="wait">
  <motion.div
    key={currentSlide}
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
  >
    {children}
  </motion.div>
</AnimatePresence>
```

### 7.4 触控滑动检测

```typescript
const handleTouchStart = (e: TouchEvent) => {
  touchStartX.current = e.touches[0].clientX;
};

const handleTouchEnd = (e: TouchEvent) => {
  const touchEndX = e.changedTouches[0].clientX;
  const diff = touchStartX.current - touchEndX;
  
  if (Math.abs(diff) > 50) { // 阈值
    if (diff > 0) goToNext();
    else goToPrev();
  }
};
```

---

## 八、响应式适配策略

### 8.1 断点设计

| 断点 | 宽度 | 布局变化 |
|------|------|----------|
| Mobile | < 640px | 单列卡片，缩小字号 |
| Tablet | 640px - 1024px | 2列卡片，中等字号 |
| Desktop | > 1024px | 3列卡片，完整布局 |

### 8.2 移动端优化

- 禁用悬停效果
- 增大触控目标
- 简化动画复杂度
- 优化字体加载

---

## 九、视觉资源规划

### 9.1 背景图处理

Hero与Vision页面使用高质量背景图：
- 添加渐变叠加层（确保文字可读）
- 使用模糊或降低饱和度处理
- 图像比例：16:9 或 4:3

### 9.2 图标系统

使用 Lucide React 图标库：
- 统一 stroke-width: 1.5
- 暖金色或近白色填充
- 尺寸：32px（卡片）/ 24px（其他）

---

## 十、设计验收标准

### 10.1 功能性验收
- [ ] 页面可左右切换，无垂直滚动
- [ ] 键盘导航正常工作
- [ ] 触控滑动切换流畅
- [ ] 页码指示器正确显示
- [ ] 进度条实时更新

### 10.2 视觉效果验收
- [ ] 字体正确加载（衬线体）
- [ ] 色彩方案符合设计稿
- [ ] 动画流畅无卡顿
- [ ] 响应式布局正常
- [ ] 移动端体验良好

### 10.3 性能验收
- [ ] 首屏加载 < 3s
- [ ] 动画帧率 ≥ 60fps
- [ ] 无布局偏移（CLS < 0.1）
