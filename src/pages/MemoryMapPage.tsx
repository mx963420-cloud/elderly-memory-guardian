import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { ArrowLeft, Share2 } from 'lucide-react'

interface MemoryMapPageProps {
  onNavigate: (page: string) => void
}

const memories = [
  {
    date: 'January 15, 2025',
    title: 'Childhood Memories at the City God Temple in Shanghai',
    summary: 'My mother took me to the City God Temple and bought me Nanxiang xiaolongbao. Those were my most beautiful memories.',
    emoji: '🏮',
    emotion: 'Happy',
  },
  {
    date: 'January 12, 2025',
    title: 'First Meeting with My Husband',
    summary: 'We met at a factory dance party. He was wearing neat clothes and had a warm smile.',
    emoji: '💕',
    emotion: 'Touched',
  },
  {
    date: 'January 10, 2025',
    title: 'Teaching Granddaughter to Make Dumplings',
    summary: 'Little Rain learned very carefully. Although her dumplings weren\'t perfectly shaped, we laughed together for a long time.',
    emoji: '🥟',
    emotion: 'Happy',
  },
  {
    date: 'January 8, 2025',
    title: 'Working Days at the Factory in My Youth',
    summary: 'We were all young then, full of hope and dreams every day.',
    emoji: '🏭',
    emotion: 'Nostalgic',
  },
  {
    date: 'January 5, 2025',
    title: 'My Favorite Old Song: Jasmine Flower',
    summary: 'This song has accompanied me throughout my life. Every time I hear it, I remember my youth.',
    emoji: '🎵',
    emotion: 'Nostalgic',
  },
]

const familyMessages = [
  {
    name: 'Daughter (Li Fang)',
    message: 'Mom, I also remember the City God Temple! I\'ll take you there again next time. ❤️',
  },
  {
    name: 'Granddaughter (Xiao Yu)',
    message: 'Grandma\'s dumplings are the best! I want to learn how to make them!',
  },
]

export function MemoryMapPage({ onNavigate }: MemoryMapPageProps) {
  const { t } = useLanguage()
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
                        Full Memory: {memory.summary}
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
