export interface UpdateItem {
  version: string;
  date: string;
  features: {
    type: 'new' | 'fix' | 'optimize';
    content: string;
  }[];
}

export const updates: UpdateItem[] = [
  {
    version: 'v3.0.1',
    date: '2026/03/25',
    features: [
      { type: 'new', content: '新增结构化纯数据同步：SOUL、USER、MEMORY、TOOLS、日记统一序列化上传' },
      { type: 'new', content: '新增增量同步与离线重试：仅同步变更数据，弱网自动恢复' },
      { type: 'new', content: '新增冲突检测与自动保留冲突副本，避免数据覆盖丢失' },
      { type: 'optimize', content: '提升云端拉取兼容性与数据一致性校验，跨设备恢复更稳定' }
    ]
  },
  {
    version: 'v2.1.0',
    date: '2026/03/01',
    features: [
      { type: 'new', content: '新增云端同步服务，支持多设备数据互通' },
      { type: 'new', content: '新增直接对接 🦞OpenClaw 服务，让你的宠物成为你的智能助手' },
      { type: 'optimize', content: '优化同步链路的重试与错误提示，提升弱网可用性' }
    ]
  },
  {
    version: 'v2.0.0',
    date: '2026/02/28',
    features: [
      { type: 'new', content: 'Memu 记忆系统核心上线，灵绒拥有了更长久的记忆' },
      { type: 'new', content: '全面适配深色模式 (Dark Mode)，夜晚陪伴更护眼' },
      { type: 'optimize', content: '提升大模型对话的稳定性与响应速度' },
      { type: 'fix', content: '修复部分场景下同步状态显示异常的问题' }
    ]
  },
  {
    version: 'v1.2.0',
    date: '2026/02/25',
    features: [
      { type: 'new', content: '新增 MBTI 性格分析维度，支持 E/I、S/N、T/F、J/P 八大动态维度实时调整' },
      { type: 'optimize', content: '优化日记生成逻辑，更准确地捕捉当天情绪' },
      { type: 'fix', content: '修复偶尔无法读取配置文件的问题' }
    ]
  },
  {
    version: 'v1.1.0',
    date: '2026/02/10',
    features: [
      { type: 'new', content: '新增“打工”系统，让宠物也能赚取金币' },
      { type: 'new', content: '新增 macOS 菜单栏常驻模式' },
      { type: 'optimize', content: '大幅降低待机时的内存占用' }
    ]
  },
  {
    version: 'v1.0.0',
    date: '2026/01/01',
    features: [
      { type: 'new', content: '灵绒陪伴精灵正式发布' },
      { type: 'new', content: '支持 macOS (Intel & Apple Silicon) 和 Windows 10/11' }
    ]
  }
];

