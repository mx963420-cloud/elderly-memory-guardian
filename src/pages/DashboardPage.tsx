import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { ArrowLeft, TrendingUp } from 'lucide-react'

interface DashboardPageProps {
  onNavigate: (page: string) => void
}

const emotionData = [
  { day: 'Mon', score: 6 },
  { day: 'Tue', score: 7 },
  { day: 'Wed', score: 7 },
  { day: 'Thu', score: 8 },
  { day: 'Fri', score: 8 },
  { day: 'Sat', score: 9 },
  { day: 'Sun', score: 8 },
]

const elderlyList = [
  { name: '王秀兰', age: 78, emotion: '😊 开心', chatTime: '23min', status: '正常' },
  { name: '李建国', age: 82, emotion: '😐 平静', chatTime: '15min', status: '正常' },
  { name: '张美华', age: 75, emotion: '😢 低落', chatTime: '8min', status: '⚠️ 需关注' },
  { name: '陈大明', age: 80, emotion: '😊 开心', chatTime: '28min', status: '正常' },
]

export function DashboardPage({ onNavigate }: DashboardPageProps) {
  const { t, language } = useLanguage()
  const [activeTab, setActiveTab] = useState<'family' | 'institution'>('family')
  const [expandedWarning, setExpandedWarning] = useState(false)

  const maxScore = Math.max(...emotionData.map(d => d.score))

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
        <h1 className="text-4xl font-bold text-text">{t('nav.dashboard')}</h1>
      </div>

      {/* Tab Switcher */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex space-x-4 border-b-2 border-gray-200">
          <button
            onClick={() => setActiveTab('family')}
            className={`px-6 py-3 text-xl font-bold transition ${
              activeTab === 'family'
                ? 'text-primary border-b-4 border-primary -mb-2'
                : 'text-gray-600 hover:text-text'
            }`}
          >
            {t('dashboard.family')}
          </button>
          <button
            onClick={() => setActiveTab('institution')}
            className={`px-6 py-3 text-xl font-bold transition ${
              activeTab === 'institution'
                ? 'text-primary border-b-4 border-primary -mb-2'
                : 'text-gray-600 hover:text-text'
            }`}
          >
            {t('dashboard.institution')}
          </button>
        </div>
      </div>

      {/* Family View */}
      {activeTab === 'family' && (
        <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
          <h2 className="text-3xl font-bold text-text">{t('dashboard.status')}</h2>

          {/* Emotion Chart */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-text mb-6">{t('dashboard.emotion')}</h3>
            <div className="flex items-end justify-around h-64 space-x-4">
              {emotionData.map((data, idx) => (
                <div key={idx} className="flex flex-col items-center flex-1">
                  <div
                    className="w-full bg-gradient-to-t from-primary to-secondary rounded-t-lg transition hover:opacity-80"
                    style={{
                      height: `${(data.score / maxScore) * 100}%`,
                    }}
                  />
                  <p className="text-lg font-bold text-text mt-4">{data.day}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Today's Summary */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <p className="text-gray-600 text-lg mb-2">{t('dashboard.chattime')}</p>
              <p className="text-4xl font-bold text-primary">23 {t('chat.minutes')}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <p className="text-gray-600 text-lg mb-2">{t('dashboard.emotion_status')}</p>
              <p className="text-4xl font-bold text-green-500">😊 {language === 'zh' ? '开心' : 'Happy'}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <p className="text-gray-600 text-lg mb-2">{t('dashboard.new_memory')}</p>
              <p className="text-4xl font-bold text-secondary">1 {language === 'zh' ? '段' : ''}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <p className="text-gray-600 text-lg mb-2">{t('dashboard.medicine')}</p>
              <p className="text-4xl font-bold text-green-500">{t('dashboard.taken')}</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6">
            <button className="bg-primary text-white rounded-2xl p-6 text-xl font-bold hover:bg-opacity-90 transition">
              {t('dashboard.message')}
            </button>
            <button
              onClick={() => onNavigate('memory')}
              className="bg-secondary text-white rounded-2xl p-6 text-xl font-bold hover:bg-opacity-90 transition"
            >
              {t('dashboard.view_memory')}
            </button>
            <button className="bg-orange-500 text-white rounded-2xl p-6 text-xl font-bold hover:bg-opacity-90 transition">
              {t('dashboard.set_reminder')}
            </button>
          </div>
        </div>
      )}

      {/* Institution View */}
      {activeTab === 'institution' && (
        <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
          <h2 className="text-3xl font-bold text-text">{t('dashboard.institution_title')}</h2>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <p className="text-gray-600 text-lg mb-2">{t('dashboard.online')}</p>
              <p className="text-4xl font-bold text-primary">18/24</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <p className="text-gray-600 text-lg mb-2">{t('dashboard.avg_chat')}</p>
              <p className="text-4xl font-bold text-secondary">31 min</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <p className="text-gray-600 text-lg mb-2">{t('dashboard.warning')}</p>
              <p className="text-4xl font-bold text-red-500">2</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <p className="text-gray-600 text-lg mb-2">{t('dashboard.weekly_memory')}</p>
              <p className="text-4xl font-bold text-orange-500">56</p>
            </div>
          </div>

          {/* Elderly List */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-bold text-text">{t('dashboard.name')}</th>
                    <th className="px-6 py-4 text-left text-lg font-bold text-text">{t('dashboard.age')}</th>
                    <th className="px-6 py-4 text-left text-lg font-bold text-text">{t('dashboard.today_emotion')}</th>
                    <th className="px-6 py-4 text-left text-lg font-bold text-text">{t('dashboard.chat_duration')}</th>
                    <th className="px-6 py-4 text-left text-lg font-bold text-text">{t('dashboard.status_label')}</th>
                  </tr>
                </thead>
                <tbody>
                  {elderlyList.map((elderly, idx) => (
                    <tr
                      key={idx}
                      className={`border-t-2 border-gray-100 hover:bg-gray-50 transition ${
                        elderly.status.includes('⚠️') ? 'bg-red-50' : ''
                      }`}
                      onClick={() => {
                        if (elderly.status.includes('⚠️')) {
                          setExpandedWarning(!expandedWarning)
                        }
                      }}
                    >
                      <td className="px-6 py-4 text-lg font-bold text-text">{elderly.name}</td>
                      <td className="px-6 py-4 text-lg text-text">{elderly.age}</td>
                      <td className="px-6 py-4 text-lg text-text">{elderly.emotion}</td>
                      <td className="px-6 py-4 text-lg text-text">{elderly.chatTime}</td>
                      <td className="px-6 py-4 text-lg font-bold">
                        <span className={elderly.status.includes('⚠️') ? 'text-red-600' : 'text-green-600'}>
                          {elderly.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Warning Details */}
          {expandedWarning && (
            <div className="bg-red-50 rounded-2xl p-6 border-2 border-red-200">
              <p className="text-lg text-red-800">
                {language === 'zh'
                  ? '张美华今日多次提到"想老伴"，建议安排社工探访'
                  : 'Zhang Meihua mentioned "missing her husband" multiple times today. Recommend social worker visit.'}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
