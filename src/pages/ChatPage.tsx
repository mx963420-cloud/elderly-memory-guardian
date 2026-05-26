import React, { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { ArrowLeft, Mic } from 'lucide-react'

interface ChatPageProps {
  onNavigate: (page: string) => void
}

const presetDialogues = [
  {
    role: 'ai',
    text: '王奶奶，今天感觉怎么样？昨天您说想起了小时候在上海的事，要不要继续聊聊？',
    en: 'Grandma Wang, how are you feeling today? You mentioned yesterday about your childhood in Shanghai, would you like to continue?'
  },
  {
    role: 'user',
    text: '好啊，我想起我妈妈以前带我去城隍庙...',
    en: 'Sure, I remember my mother taking me to the City God Temple...'
  },
  {
    role: 'ai',
    text: '城隍庙啊！那里一定很热闹吧。您妈妈最喜欢带您吃什么？',
    en: 'The City God Temple! It must have been very lively. What did your mother like to take you to eat?'
  },
  {
    role: 'user',
    text: '她最喜欢买南翔小笼包给我吃',
    en: 'She loved buying me Nanxiang xiaolongbao (soup dumplings)'
  },
  {
    role: 'ai',
    text: '这段记忆真美好。我已经帮您记录到家庭记忆地图里了 🌳 您的家人也能看到这个故事哦。',
    en: 'What a beautiful memory. I\'ve recorded this to your family memory map 🌳 Your family can see this story too.'
  },
]

export function ChatPage({ onNavigate }: ChatPageProps) {
  const { t, language } = useLanguage()
  const [dialogues, setDialogues] = useState<typeof presetDialogues>([presetDialogues[0]])
  const [isListening, setIsListening] = useState(false)
  const [chatTime, setChatTime] = useState(23)

  useEffect(() => {
    const timer = setInterval(() => {
      setChatTime(prev => prev + 1)
    }, 60000)
    return () => clearInterval(timer)
  }, [])

  const handleMicClick = () => {
    setIsListening(true)
    setTimeout(() => {
      setIsListening(false)
      if (dialogues.length < presetDialogues.length) {
        setDialogues([...dialogues, presetDialogues[dialogues.length]])
      }
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-white pb-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 py-6 flex items-center justify-between">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-2 text-primary hover:text-opacity-80 transition text-xl"
        >
          <ArrowLeft size={28} />
          <span>{t('chat.back')}</span>
        </button>
        <h1 className="text-2xl font-bold text-text">{t('chat.title')}</h1>
        <div className="text-right">
          <p className="text-lg text-gray-600">{t('chat.time')}</p>
          <p className="text-2xl font-bold text-primary">{chatTime} {t('chat.minutes')}</p>
        </div>
      </div>

      {/* AI Avatar */}
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
            <span className="text-6xl">🧓</span>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-text mb-4">小护</h2>

        {/* Wave Animation */}
        {isListening && (
          <div className="flex justify-center items-end space-x-1 h-12 mb-6">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="wave-bar bg-primary rounded-full"
                style={{
                  width: '8px',
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Chat Bubbles */}
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {dialogues.map((dialogue, idx) => (
          <div
            key={idx}
            className={`flex ${dialogue.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-2xl px-6 py-4 rounded-2xl text-xl ${
                dialogue.role === 'user'
                  ? 'bg-primary text-white rounded-br-none'
                  : 'bg-gray-100 text-text rounded-bl-none'
              }`}
            >
              {language === 'zh' ? dialogue.text : dialogue.en}
            </div>
          </div>
        ))}
      </div>

      {/* Microphone Button */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={handleMicClick}
          disabled={isListening}
          className={`w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-xl transition transform hover:scale-110 ${
            isListening
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-primary hover:bg-opacity-90 shadow-lg'
          }`}
        >
          {isListening ? (
            <span>{t('chat.listening')}</span>
          ) : (
            <Mic size={48} />
          )}
        </button>
      </div>
    </div>
  )
}
