# ACL康复训练图标生成项目

## 📋 项目概述

### 基本信息
- **项目名称**: ACL康复训练动作图标生成
- **启动日期**: 2026年2月27日
- **状态**: 进行中
- **负责人**: 铮哥
- **协助**: 大胖（AI助手）

### 项目目标
为ACL康复软件生成40个统一风格的训练动作图标，覆盖7个康复阶段。

### 技术栈
- **生成工具**: Google Gemini Pro
- **风格**: 简约黑白线条 + 大地色背景
- **格式**: PNG, 512x512像素
- **背景色**: #F5E8D0 (浅米色)

## 🎨 设计规范

### 颜色方案
- **背景色**: #F5E8D0 (RGB: 245, 232, 208)
- **线条色**: 纯黑色
- **对比度**: 确保在小尺寸下清晰可辨

### 风格要求
1. **简约线条**: 医疗插图风格，无阴影
2. **动作清晰**: 一眼能识别训练动作
3. **科学准确**: 符合ACL康复生物力学
4. **一致性**: 40个图标风格统一
5. **实用性**: 64x64小尺寸下仍可识别

### 技术规格
- **尺寸**: 512x512像素（源文件）
- **使用尺寸**: 64x64, 128x128（APP内）
- **格式**: PNG with alpha channel（实际带背景）
- **线条粗细**: 一致，约2-3像素（512x512下）

## 📊 动作清单（40个）

### Phase 1: 急性期（7个动作）
1. **髌骨轻柔活动** - Patella Mobility
2. **被动伸膝（Heel Prop）** - Heel Prop
3. **俯卧悬吊（Prone Hang）** - Prone Hang
4. **股四头肌等长收缩（Quad Set）** - Quad Set
5. **踝泵练习** - Ankle Pump ✓（已测试）
6. **直腿抬高（SLR）** - Straight Leg Raise
7. **脚跟滑动屈膝（Heel Slide）** - Heel Slide

### Phase 2: 早期康复（8个动作）
8. **步态分解练习** - Gait Training
9. **左右重心转移** - Weight Shift LR
10. **靠墙微蹲** - Wall Squat Basic
11. **双脚提踵** - Double Calf Raise
12. **前后重心移动** - Weight Shift FB
13. **支撑下单脚站立** - Single Leg Stand Supported
14. **低台阶上下（Step-up）** - Step Up
15. **后退走/侧向走** - Backward Lateral Walk

### Phase 3: 中期康复（7个动作）
16. **靠墙蹲进阶** - Wall Squat Progression
17. **固定自行车** - Stationary Bike
18. **蚌式开合** - Clamshell
19. **桥式（Glute Bridge）** - Glute Bridge
20. **站姿髋外展/后伸** - Band Hip Abduction
21. **腘绳肌轻阻力弯曲** - Hamstring Curl Light
22. **单腿平衡初探** - Single Leg Balance Basic

### Phase 4: 力量建立（9个动作）
23. **低台阶下蹲（Step-down）** - Step Down
24. **腿举机（Leg Press）** - Leg Press
25. **罗马尼亚硬拉（RDL）** - RDL
26. **深蹲/哈克深蹲** - Squat
27. **箭步蹲（Lunge）** - Lunge
28. **保加利亚单腿蹲** - Bulgarian Split Squat
29. **坐姿腿伸（受限范围）** - Leg Extension Limited
30. **单脚站立平衡** - Single Leg Balance
31. **平衡垫/BOSU平衡训练** - BOSU Balance

### Phase 5: 跳跃准备（7个动作）
32. **核心稳定训练** - Core Plank
33. **跑步分解练习** - Run Drill Walk
34. **双脚原地小跳（Pogo）** - Pogo Jump
35. **低台阶跳下落地** - Drop Landing
36. **敏捷梯脚步练习** - Agility Ladder
37. **前后/侧向双脚小跳** - Multi-direction Jump
38. **轻度跳绳** - Light Jump Rope

### Phase 6: 动态训练（8个动作）
39. **轻度弓步跳** - Split Jump Light
40. **走跑结合慢跑** - Walk Run Program
41. **单腿前跳并稳住** - Single Leg Hop Stick
42. **侧向滑步（Shuffle）** - Shuffle
43. **交叉步（Carioca）** - Carioca
44. **深蹲跳** - Jump Squat
45. **多方向单腿小跳** - Single Leg Multi Hop
46. **壶铃摆荡** - Kettlebell Swing

### Phase 7: 重返运动（6个动作）
47. **专项直线动作** - Sport Specific Linear
48. **变向跑** - Change of Direction Run
49. **T型跑/5-10-5穿梭跑** - T Test
50. **专项模拟动作** - Sport Specific Drill
51. **反应性敏捷训练** - Reactive Agility
52. **轻度对抗动作练习** - Light Contact Drill
53. **高强度间歇跑** - HIIT Run

## 🛠️ 工作流程

### 生成流程
1. **提示词优化**：为每个动作编写专用Gemini提示词
2. **批量生成**：利用API或手动生成
3. **质量检查**：一致性、科学性、实用性
4. **整理交付**：按阶段分类，提供规范文档

### 质量控制
#### 一致性检查
- [ ] 背景颜色统一（#F5E8D0）
- [ ] 线条粗细一致
- [ ] 人物比例协调
- [ ] 风格统一（简约医疗插图）

#### 科学性检查
- [ ] 动作符合ACL康复指南
- [ ] 关节角度合理
- [ ] 肌肉 engagement 正确
- [ ] 无生物力学错误

#### 实用性检查
- [ ] 小尺寸（64x64）可识别
- [ ] 动作意图清晰
- [ ] 适合APP界面使用

## 📝 提示词模板

### 基础模板
```
Create a minimalist line drawing icon for a physical therapy exercise app.

SPECIFICATIONS:
- Exercise: [动作英文名称] for ACL Rehabilitation
- Style: Clean medical illustration, simple thin lines, no shading
- Line Color: Solid black lines
- Background Color: Warm earth tone #F5E8D0 (light beige/sand color)
- Focus: [关键部位] movement and muscle engagement
- Pose: [详细动作描述]
- View: Side view showing proper body alignment
- Detail Level: Simplified human silhouette, anatomical accuracy
- Safety: Controlled, therapeutic movement
- Technical: 512x512 pixels, consistent line weight
- Emotion: Professional, safe, encouraging, rehabilitation-focused

IMPORTANT: Solid #F5E8D0 background. Black lines contrast clearly. Easily recognizable at small sizes (64x64).
```

### 已验证的示例：踝泵练习
```
Create a minimalist line drawing icon for a physical therapy exercise app.

SPECIFICATIONS:
- Exercise: Ankle Pump Exercise for ACL Rehabilitation
- Style: Clean medical illustration, simple thin lines, no shading
- Line Color: Solid black lines
- Background Color: Warm earth tone #F5E8D0 (light beige/sand color)
- Focus: Ankle joint movement and calf muscle engagement
- Pose: Person sitting with leg extended, foot actively pointing toes forward (plantarflexion) and then pulling toes back toward shin (dorsiflexion)
- View: Side view showing full leg from hip to toes
- Detail Level: Simplified human silhouette, anatomical accuracy for rehabilitation context
- Key Elements: Show slight muscle definition in calf during movement, neutral knee position
- Safety: Controlled, rhythmic movement, relaxed upper body
- Technical: 512x512 pixels, vector-style lines, consistent line weight
- Emotion: Professional, safe, therapeutic, encouraging

IMPORTANT: Solid #F5E8D0 background. Black lines contrast clearly. Show dynamic pumping action. Easily recognizable at small sizes (64x64).
```

## 📅 项目进度

### Day 1 (2026-02-27)
- ✅ 确定图标风格：简约黑白线条 + 大地色背景
- ✅ 测试第一个图标（踝泵练习）
- ✅ 确认背景颜色：#F5E8D0
- ✅ 创建项目文档
- 🔄 生成Phase 1的7个图标（进行中）

### 后续计划
- **Day 2**: 完成Phase 1，开始Phase 2
- **Day 3**: 完成Phase 2-3
- **Day 4**: 完成Phase 4-5
- **Day 5**: 完成Phase 6-7
- **Day 6**: 质量检查和整理交付

## 📁 文件结构

```
ACL_Icons_Project/
├── 01_Phase1_Acute/
│   ├── 01_patella_mobility.png
│   ├── 02_heel_prop.png
│   ├── 03_prone_hang.png
│   ├── 04_quad_set.png
│   ├── 05_ankle_pump.png ✓
│   ├── 06_straight_leg_raise.png
│   └── 07_heel_slide.png
├── 02_Phase2_Early/
├── 03_Phase3_Mid/
├── 04_Phase4_Strength/
├── 05_Phase5_JumpPrep/
├── 06_Phase6_Dynamic/
├── 07_Phase7_ReturnToSport/
├── prompts/
│   ├── phase1_prompts.md
│   ├── phase2_prompts.md
│   └── ...
├── specifications/
│   ├── style_guide.md
│   ├── color_palette.png
│   └── quality_checklist.md
└── project_management/
    ├── progress_tracker.md
    └── daily_reports/
```

## 🔧 技术实现

### 生成方式
1. **手动生成**：通过Gemini网页界面（当前方式）
2. **API批量生成**：使用Python脚本（如果提供API密钥）
3. **混合方式**：关键图标手动，其他批量

### 质量控制脚本
```python
# 计划中的质量检查脚本
def check_icon_quality(icon_path):
    # 1. 检查背景颜色一致性
    # 2. 检查线条对比度
    # 3. 检查尺寸规格
    # 4. 生成质量报告
    pass
```

## 📈 风险管理

### 技术风险
1. **API额度限制**：Gemini每日调用次数有限
   - 应对：分批生成，最大化利用每日额度
2. **风格不一致**：不同时间生成的图标可能有差异
   - 应对：严格遵循提示词模板，使用相同参数

### 质量风险
1. **动作不准确**：图标可能显示错误的生物力学
   - 应对：作为运动专家手动检查每个图标
2. **识别困难**：小尺寸下动作不清晰
   - 应对：生成后测试64x64尺寸的可识别性

### 进度风险
1. **时间延误**：API限制导致进度慢
   - 应对：制定合理的分批计划，不急于求成

## 👥 协作方式

### 沟通渠道
- 通过当前会话记录所有决策
- 关键节点截图确认
- 每日进度更新

### 决策记录
- 2026-02-27：确定使用#F5E8D0作为统一背景色
- 2026-02-27：确认踝泵练习图标作为风格基准
- 2026-02-27：决定先手动生成Phase 1测试质量

### 文件共享
- 图标文件通过会话附件发送
- 文档更新在第二大脑中记录
- 最终成果打包交付

## 🎯 成功标准

### 主要目标
- [ ] 40个图标全部完成
- [ ] 风格完全统一
- [ ] 动作科学准确
- [ ] 适合APP使用

### 次要目标
- [ ] 建立可复用的图标生成流程
- [ ] 创建完整的风格规范文档
- [ ] 积累提示词优化经验

## 📞 联系信息

- **项目负责人**: 铮哥
- **技术支持**: 大胖（通过当前AI会话）
- **更新频率**: 每日进度更新
- **文档位置**: 第二大脑 /knowledge/acl-icon-project.md

---

**最后更新**: 2026年2月27日  
**版本**: 1.0  
**状态**: 进行中