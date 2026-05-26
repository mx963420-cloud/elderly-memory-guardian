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
  'nav.logo': { zh: 'Memory Guardian', en: 'Memory Guardian' },
  'nav.home': { zh: 'Home', en: 'Home' },
  'nav.chat': { zh: 'Chat', en: 'Chat' },
  'nav.memory': { zh: 'Memory Map', en: 'Memory Map' },
  'nav.dashboard': { zh: 'Dashboard', en: 'Dashboard' },
  'nav.pricing': { zh: 'Pricing', en: 'Pricing' },
  'nav.start': { zh: 'Start Chat', en: 'Start Chat' },

  // Home Page
  'home.title': { zh: 'Every Memory, Gently Guarded', en: 'Every Memory, Gently Guarded' },
  'home.subtitle': { zh: 'AI Companion · Family Memory Map · Health Care Reminders', en: 'AI Companion · Family Memory Map · Health Care Reminders' },
  'home.cta': { zh: 'Start Voice Chat', en: 'Start Voice Chat' },
  'home.feature1.title': { zh: 'AI Voice Companion', en: 'AI Voice Companion' },
  'home.feature1.desc': { zh: 'Always listening, chatting like an old friend', en: 'Always listening, chatting like an old friend' },
  'home.feature2.title': { zh: 'Family Memory Map', en: 'Family Memory Map' },
  'home.feature2.desc': { zh: 'Auto-record your stories, precious gifts for family', en: 'Auto-record your stories, precious gifts for family' },
  'home.feature3.title': { zh: 'Health Care', en: 'Health Care' },
  'home.feature3.desc': { zh: 'Medicine reminders, mood tracking, family alerts', en: 'Medicine reminders, mood tracking, family alerts' },
  'home.footer': { zh: '© 2025 Elderly Memory Guardian | Group 16', en: '© 2025 Elderly Memory Guardian | Group 16' },

  // Chat Page
  'chat.title': { zh: 'Chatting with Care Assistant...', en: 'Chatting with Care Assistant...' },
  'chat.back': { zh: 'Back', en: 'Back' },
  'chat.time': { zh: 'Today\'s chat time', en: 'Today\'s chat time' },
  'chat.minutes': { zh: 'minutes', en: 'minutes' },
  'chat.listening': { zh: 'Listening...', en: 'Listening...' },
  'chat.recorded': { zh: 'Recorded to memory map', en: 'Recorded to memory map' },

  // Memory Map
  'memory.title': { zh: 'Grandma Wang\'s Memory Map', en: 'Grandma Wang\'s Memory Map' },
  'memory.recorded': { zh: 'Memories Recorded', en: 'Memories Recorded' },
  'memory.viewed': { zh: 'Family Viewed', en: 'Family Viewed' },
  'memory.monthly': { zh: 'This Month', en: 'This Month' },
  'memory.share': { zh: 'Share with Family', en: 'Share with Family' },
  'memory.shared': { zh: 'Family notified ✓', en: 'Family notified ✓' },
  'memory.family': { zh: 'Family Messages', en: 'Family Messages' },

  // Dashboard
  'dashboard.family': { zh: 'Family View', en: 'Family View' },
  'dashboard.institution': { zh: 'Institution View', en: 'Institution View' },
  'dashboard.status': { zh: 'Mom\'s Status Today', en: 'Mom\'s Status Today' },
  'dashboard.emotion': { zh: 'Emotion Trend', en: 'Emotion Trend' },
  'dashboard.summary': { zh: 'Today\'s Summary', en: 'Today\'s Summary' },
  'dashboard.chattime': { zh: 'Chat Duration', en: 'Chat Duration' },
  'dashboard.emotion_status': { zh: 'Emotion Status', en: 'Emotion Status' },
  'dashboard.new_memory': { zh: 'New Memory', en: 'New Memory' },
  'dashboard.medicine': { zh: 'Health Reminder', en: 'Health Reminder' },
  'dashboard.taken': { zh: 'Medicine taken ✓', en: 'Medicine taken ✓' },
  'dashboard.message': { zh: 'Leave Message', en: 'Leave Message' },
  'dashboard.view_memory': { zh: 'View Memory Map', en: 'View Memory Map' },
  'dashboard.set_reminder': { zh: 'Set Reminder', en: 'Set Reminder' },
  'dashboard.institution_title': { zh: 'Sunshine Community Care Center - Dashboard', en: 'Sunshine Community Care Center - Dashboard' },
  'dashboard.online': { zh: 'Online Elders', en: 'Online Elders' },
  'dashboard.avg_chat': { zh: 'Avg Chat Time', en: 'Avg Chat Time' },
  'dashboard.warning': { zh: 'Emotion Alert', en: 'Emotion Alert' },
  'dashboard.weekly_memory': { zh: 'Weekly New Memories', en: 'Weekly New Memories' },
  'dashboard.name': { zh: 'Name', en: 'Name' },
  'dashboard.age': { zh: 'Age', en: 'Age' },
  'dashboard.today_emotion': { zh: 'Today\'s Emotion', en: 'Today\'s Emotion' },
  'dashboard.chat_duration': { zh: 'Chat Duration', en: 'Chat Duration' },
  'dashboard.status_label': { zh: 'Status', en: 'Status' },
  'dashboard.normal': { zh: 'Normal', en: 'Normal' },
  'dashboard.attention': { zh: 'Needs Attention', en: 'Needs Attention' },

  // Pricing
  'pricing.title': { zh: 'Choose Your Plan', en: 'Choose Your Plan' },
  'pricing.personal': { zh: 'Personal', en: 'Personal' },
  'pricing.family': { zh: 'Family', en: 'Family' },
  'pricing.institution': { zh: 'Institution', en: 'Institution' },
  'pricing.personal_price': { zh: '$9.90/month', en: '$9.90/month' },
  'pricing.family_price': { zh: '$19.90/month', en: '$19.90/month' },
  'pricing.institution_price': { zh: '$299/year', en: '$299/year' },
  'pricing.popular': { zh: 'Most Popular ⭐', en: 'Most Popular ⭐' },
  'pricing.trial': { zh: 'Free 7-day trial', en: 'Free 7-day trial' },
  'pricing.contact': { zh: 'Contact Us', en: 'Contact Us' },
  'pricing.faq': { zh: 'FAQ', en: 'FAQ' },
  'pricing.faq1': { zh: 'What if elderly can\'t use phones?', en: 'What if elderly can\'t use phones?' },
  'pricing.faq1_ans': { zh: 'Our system is fully voice-controlled, just speak - no typing or complex clicks needed.', en: 'Our system is fully voice-controlled, just speak - no typing or complex clicks needed.' },
  'pricing.faq2': { zh: 'Is data secure?', en: 'Is data secure?' },
  'pricing.faq2_ans': { zh: 'All data encrypted on Australian servers, compliant with privacy laws.', en: 'All data encrypted on Australian servers, compliant with privacy laws.' },
  'pricing.faq3': { zh: 'Can I access via WeChat?', en: 'Can I access via WeChat?' },
  'pricing.faq3_ans': { zh: 'Yes. We support WeChat mini-app, mobile browser, and web.', en: 'Yes. We support WeChat mini-app, mobile browser, and web.' },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language] = useState<Language>('en')

  const t = (key: string): string => {
    const trans = translations[key as keyof typeof translations]
    if (!trans) return key
    return trans[language]
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: () => {}, t }}>
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
