import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { MessageCircle, MapPin, Heart } from 'lucide-react'

interface HomePageProps {
  onNavigate: (page: string) => void
}

export function HomePage({ onNavigate }: HomePageProps) {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-text mb-6 leading-tight">
          {t('home.title')}
        </h1>
        <p className="text-2xl md:text-3xl text-gray-600 mb-12">
          {t('home.subtitle')}
        </p>
        <button
          onClick={() => onNavigate('chat')}
          className="px-12 py-6 bg-primary text-white rounded-full text-2xl font-bold hover:bg-opacity-90 transition transform hover:scale-105 animate-pulse"
        >
          {t('home.cta')}
        </button>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <div className="flex justify-center mb-6">
              <div className="bg-primary bg-opacity-10 p-6 rounded-full">
                <MessageCircle size={48} className="text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-text text-center mb-4">
              {t('home.feature1.title')}
            </h3>
            <p className="text-xl text-gray-600 text-center">
              {t('home.feature1.desc')}
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <div className="flex justify-center mb-6">
              <div className="bg-secondary bg-opacity-10 p-6 rounded-full">
                <MapPin size={48} className="text-secondary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-text text-center mb-4">
              {t('home.feature2.title')}
            </h3>
            <p className="text-xl text-gray-600 text-center">
              {t('home.feature2.desc')}
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <div className="flex justify-center mb-6">
              <div className="bg-red-100 p-6 rounded-full">
                <Heart size={48} className="text-red-500" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-text text-center mb-4">
              {t('home.feature3.title')}
            </h3>
            <p className="text-xl text-gray-600 text-center">
              {t('home.feature3.desc')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
