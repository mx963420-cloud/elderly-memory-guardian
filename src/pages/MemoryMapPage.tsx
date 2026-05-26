import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { ArrowLeft, Share2 } from 'lucide-react'

interface MemoryMapPageProps {
  onNavigate: (page: string) => void
}

const memories = [
  {
    date: '2025年1月15日',
    title: '小时候在上海城隍庙的故事',
    summary: '妈妈带我去城隍庙，买了南翔小笼包给我吃，那是我最美好的回忆。',
    emoji: '🏮',
    emotion: '开心',
  },
  {
    date: '2025年1月12日',
    title: '和老伴第一次见面的回忆',
    summary: '那是在工厂的舞蹈会上，他穿着整洁的衣服，笑容很温暖。',
    emoji: '💕',
    emotion: '感动',
  },
  {
    date: '2025年1月10日',
    title: '教孙女包饺子的下午',
    summary: '小雨学得很认真，虽然包得不太整齐，但我们一起笑了很久。',
    emoji: '🥟',
    emotion: '开心',
  },
  {
    date: '2025年1月8日',
    title: '年轻时在工厂工作的日子',
    summary: '那时候我们都很年轻，每天都充满了希望和梦想。',
    emoji: '🏭',
    emotion: '怀念',
  },
  {
    date: '2025年1月5日',
    title: '最喜欢的一首老歌：《茉莉花》',
    summary: '这首歌陪伴了我一生，每次听到都能想起青春年代。',
    emoji: '🎵',
    emotion: '怀念',
  },
]

const familyMessages = [
  {
    name: '女儿（李芳）',
    message: '妈，我也记得城隍庙！下次我带您再去。❤️',
  },
  {
    name: '孙女（小雨）',
    message: '奶奶的饺子最好吃了！我要学会！',
  },
]

export function MemoryMapPage({ onNavigate }: MemoryMapPageProps) {
  const { t, language } = useLanguage()
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null)
  const [sharedIdx, setSharedIdx] = useState<number | null>(null)

  const handleShare = (idx: number) => {
    setSharedIdx(idx)
    setTimeout(() => setSharedIdx(null), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-white pb-12">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 py-6 flex items-center space-x-4">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-2 text-primary hover:text-opacity-80 transition text-xl"
        >
          <ArrowLeft size={28} />
        </button>
        <h1 className="text-4xl font-bold text-text">{t('memory.title')}</h1>
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <p className="text-gray-600 text-lg mb-2">{t('memory.recorded')}</p>
            <p className="text-4xl font-bold text-primary">47</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <p className="text-gray-600 text-lg mb-2">{t('memory.viewed')}</p>
            <p className="text-4xl font-bold text-secondary">32</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <p className="text-gray-600 text-lg mb-2">{t('memory.monthly')}</p>
            <p className="text-4xl font-bold text-orange-500">8</p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="space-y-6">
          {memories.map((memory, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition cursor-pointer"
              onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="text-4xl">{memory.emoji}</span>
                    <div>
                      <p className="text-gray-500 text-lg">{memory.date}</p>
                      <h3 className="text-2xl font-bold text-text">{memory.title}</h3>
                    </div>
                  </div>
                  <p className="text-xl text-gray-600 ml-20">{memory.summary}</p>
                  {expandedIdx === idx && (
                    <div className="mt-4 ml-20 p-4 bg-gray-50 rounded-lg">
                      <p className="text-lg text-gray-700">
                        {language === 'zh' ? '完整记忆：' : 'Full Memory: '}{memory.summary}
                      </p>
                    </div>
                  )}
                  <div className="mt-4 ml-20 flex items-center space-x-4">
                    <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-lg font-medium">
                      {memory.emotion}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleShare(idx)
                      }}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-full transition text-lg font-medium ${
                        sharedIdx === idx
                          ? 'bg-green-100 text-green-700'
                          : 'bg-primary bg-opacity-10 text-primary hover:bg-opacity-20'
                      }`}
                    >
                      <Share2 size={20} />
                      <span>
                        {sharedIdx === idx ? t('memory.shared') : t('memory.share')}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Family Messages */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-text mb-6">{t('memory.family')}</h2>
        <div className="space-y-4">
          {familyMessages.map((msg, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg">
              <p className="text-lg font-bold text-primary mb-2">{msg.name}</p>
              <p className="text-xl text-text">{msg.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
