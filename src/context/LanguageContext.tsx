import React, { createContext, useContext, useState } from 'react'

type Language = 'zh' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  // Navigation
  'nav.logo': { zh: '记忆守护者', en: 'Memory Guardian' },
  'nav.home': { zh: '首页', en: 'Home' },
  'nav.chat': { zh: '对话', en: 'Chat' },
  'nav.memory': { zh: '记忆地图', en: 'Memory Map' },
  'nav.dashboard': { zh: '仪表盘', en: 'Dashboard' },
  'nav.pricing': { zh: '定价', en: 'Pricing' },
  'nav.start': { zh: '开始对话', en: 'Start Chat' },

  // Home Page
  'home.title': { zh: '让每一段记忆，都被温柔守护', en: 'Every Memory, Gently Guarded' },
  'home.subtitle': { zh: 'AI 情感陪伴 · 家庭记忆地图 · 健康关怀提醒', en: 'AI Companion · Family Memory Map · Health Care Reminders' },
  'home.cta': { zh: '点击开始语音对话', en: 'Start Voice Chat' },
  'home.feature1.title': { zh: 'AI 语音陪伴', en: 'AI Voice Companion' },
  'home.feature1.desc': { zh: '随时倾听，像老朋友一样陪您聊天', en: 'Always listening, chatting like an old friend' },
  'home.feature2.title': { zh: '家庭记忆地图', en: 'Family Memory Map' },
  'home.feature2.desc': { zh: '自动记录您的故事，留给家人最珍贵的礼物', en: 'Auto-record your stories, precious gifts for family' },
  'home.feature3.title': { zh: '健康关怀', en: 'Health Care' },
  'home.feature3.desc': { zh: '吃药提醒、情绪关注、紧急联系家人', en: 'Medicine reminders, mood tracking, family alerts' },
  'home.footer': { zh: '© 2025 Elderly Memory Guardian | Group 16', en: '© 2025 Elderly Memory Guardian | Group 16' },

  // Chat Page
  'chat.title': { zh: '与小护对话中...', en: 'Chatting with Care Assistant...' },
  'chat.back': { zh: '返回', en: 'Back' },
  'chat.time': { zh: '今日已陪伴', en: 'Today\'s chat time' },
  'chat.minutes': { zh: '分钟', en: 'minutes' },
  'chat.listening': { zh: '正在聆听...', en: 'Listening...' },
  'chat.recorded': { zh: '已记录到家庭记忆地图', en: 'Recorded to memory map' },

  // Memory Map
  'memory.title': { zh: '王奶奶的记忆地图', en: 'Grandma Wang\'s Memory Map' },
  'memory.recorded': { zh: '已记录记忆', en: 'Memories Recorded' },
  'memory.viewed': { zh: '家人已查看', en: 'Family Viewed' },
  'memory.monthly': { zh: '本月新增', en: 'This Month' },
  'memory.share': { zh: '分享给家人', en: 'Share with Family' },
  'memory.shared': { zh: '已通知家人查看 ✓', en: 'Family notified ✓' },
  'memory.family': { zh: '家人留言', en: 'Family Messages' },

  // Dashboard
  'dashboard.family': { zh: '家人视角', en: 'Family View' },
  'dashboard.institution': { zh: '机构视角', en: 'Institution View' },
  'dashboard.status': { zh: '妈妈今天的状态', en: 'Mom\'s Status Today' },
  'dashboard.emotion': { zh: '情绪趋势', en: 'Emotion Trend' },
  'dashboard.summary': { zh: '今日摘要', en: 'Today\'s Summary' },
  'dashboard.chattime': { zh: '今日对话时长', en: 'Chat Duration' },
  'dashboard.emotion_status': { zh: '情绪状态', en: 'Emotion Status' },
  'dashboard.new_memory': { zh: '新记忆', en: 'New Memory' },
  'dashboard.medicine': { zh: '健康提醒', en: 'Health Reminder' },
  'dashboard.taken': { zh: '已按时服药 ✓', en: 'Medicine taken ✓' },
  'dashboard.message': { zh: '给妈妈留言', en: 'Leave Message' },
  'dashboard.view_memory': { zh: '查看记忆地图', en: 'View Memory Map' },
  'dashboard.set_reminder': { zh: '设置提醒', en: 'Set Reminder' },
  'dashboard.institution_title': { zh: '阳光社区养老中心 — 管理面板', en: 'Sunshine Community Care Center - Dashboard' },
  'dashboard.online': { zh: '在线老人', en: 'Online Elders' },
  'dashboard.avg_chat': { zh: '今日平均对话时长', en: 'Avg Chat Time' },
  'dashboard.warning': { zh: '情绪预警', en: 'Emotion Alert' },
  'dashboard.weekly_memory': { zh: '本周新增记忆', en: 'Weekly New Memories' },
  'dashboard.name': { zh: '姓名', en: 'Name' },
  'dashboard.age': { zh: '年龄', en: 'Age' },
  'dashboard.today_emotion': { zh: '今日情绪', en: 'Today\'s Emotion' },
  'dashboard.chat_duration': { zh: '对话时长', en: 'Chat Duration' },
  'dashboard.status_label': { zh: '状态', en: 'Status' },
  'dashboard.normal': { zh: '正常', en: 'Normal' },
  'dashboard.attention': { zh: '需关注', en: 'Needs Attention' },

  // Pricing
  'pricing.title': { zh: '选择适合您的方案', en: 'Choose Your Plan' },
  'pricing.personal': { zh: '个人版', en: 'Personal' },
  'pricing.family': { zh: '家庭版', en: 'Family' },
  'pricing.institution': { zh: '机构版', en: 'Institution' },
  'pricing.personal_price': { zh: '$9.90/月', en: '$9.90/month' },
  'pricing.family_price': { zh: '$19.90/月', en: '$19.90/month' },
  'pricing.institution_price': { zh: '$299/年', en: '$299/year' },
  'pricing.popular': { zh: '最受欢迎 ⭐', en: 'Most Popular ⭐' },
  'pricing.trial': { zh: '免费试用7天', en: 'Free 7-day trial' },
  'pricing.contact': { zh: '联系我们', en: 'Contact Us' },
  'pricing.faq': { zh: '常见问题', en: 'FAQ' },
  'pricing.faq1': { zh: '老人不会用手机怎么办？', en: 'What if elderly can\'t use phones?' },
  'pricing.faq1_ans': { zh: '我们的系统完全语音控制，只需说话即可，无需打字或点击复杂按钮。', en: 'Our system is fully voice-controlled, just speak - no typing or complex clicks needed.' },
  'pricing.faq2': { zh: '数据安全吗？', en: 'Is data secure?' },
  'pricing.faq2_ans': { zh: '所有数据加密存储于澳大利亚本地服务器，符合隐私法规。', en: 'All data encrypted on Australian servers, compliant with privacy laws.' },
  'pricing.faq3': { zh: '可以用微信访问吗？', en: 'Can I access via WeChat?' },
  'pricing.faq3_ans': { zh: '可以。我们支持微信小程序、手机浏览器和电脑网页三种方式。', en: 'Yes. We support WeChat mini-app, mobile browser, and web.' },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh')

  const t = (key: string): string => {
    const trans = translations[key as keyof typeof translations]
    if (!trans) return key
    return trans[language]
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
