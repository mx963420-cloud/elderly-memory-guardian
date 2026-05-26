import React from 'react'
import { useLanguage } from '../context/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-100 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-text text-lg">{t('home.footer')}</p>
      </div>
    </footer>
  )
}
