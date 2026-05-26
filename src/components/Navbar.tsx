import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { Menu, X } from 'lucide-react'

interface NavbarProps {
  currentPage: string
  onNavigate: (page: string) => void
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const { language, setLanguage, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const pages = [
    { id: 'home', label: t('nav.home') },
    { id: 'chat', label: t('nav.chat') },
    { id: 'memory', label: t('nav.memory') },
    { id: 'dashboard', label: t('nav.dashboard') },
    { id: 'pricing', label: t('nav.pricing') },
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => onNavigate('home')}
              className="text-2xl font-bold text-primary hover:text-opacity-80 transition"
            >
              {t('nav.logo')}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {pages.map(page => (
              <button
                key={page.id}
                onClick={() => onNavigate(page.id)}
                className={`text-lg font-medium transition ${
                  currentPage === page.id
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-text hover:text-primary'
                }`}
              >
                {page.label}
              </button>
            ))}
          </div>

          {/* Right side controls */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
              className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition text-lg font-medium"
            >
              {language === 'zh' ? 'EN' : '中文'}
            </button>
            <button
              onClick={() => onNavigate('chat')}
              className="px-6 py-3 bg-primary text-white rounded-full font-bold text-lg hover:bg-opacity-90 transition animate-pulse"
            >
              {t('nav.start')}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
              className="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition text-sm font-medium"
            >
              {language === 'zh' ? 'EN' : '中文'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-text"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {pages.map(page => (
              <button
                key={page.id}
                onClick={() => {
                  onNavigate(page.id)
                  setMobileMenuOpen(false)
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg transition ${
                  currentPage === page.id
                    ? 'bg-primary text-white'
                    : 'text-text hover:bg-gray-100'
                }`}
              >
                {page.label}
              </button>
            ))}
            <button
              onClick={() => {
                onNavigate('chat')
                setMobileMenuOpen(false)
              }}
              className="w-full px-4 py-3 bg-primary text-white rounded-lg font-bold mt-4"
            >
              {t('nav.start')}
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
