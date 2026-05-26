import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react'

interface PricingPageProps {
  onNavigate: (page: string) => void
}

export function PricingPage({ onNavigate }: PricingPageProps) {
  const { t } = useLanguage()
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const faqs = [
    {
      q: t('pricing.faq1'),
      a: t('pricing.faq1_ans'),
    },
    {
      q: t('pricing.faq2'),
      a: t('pricing.faq2_ans'),
    },
    {
      q: t('pricing.faq3'),
      a: t('pricing.faq3_ans'),
    },
  ]

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
        <h1 className="text-4xl font-bold text-text">{t('pricing.title')}</h1>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Personal Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-text mb-4">{t('pricing.personal')}</h3>
            <p className="text-4xl font-bold text-primary mb-6">{t('pricing.personal_price')}</p>
            <ul className="space-y-4 mb-8">
              <li className="text-lg text-text flex items-start">
                <span className="text-primary mr-3">✓</span>
                <span>AI Voice Companion</span>
              </li>
              <li className="text-lg text-text flex items-start">
                <span className="text-primary mr-3">✓</span>
                <span>Memory Records (20/month)</span>
              </li>
              <li className="text-lg text-text flex items-start">
                <span className="text-primary mr-3">✓</span>
                <span>Health Reminders</span>
              </li>
              <li className="text-lg text-text flex items-start">
                <span className="text-primary mr-3">✓</span>
                <span>Basic Emotion Report</span>
              </li>
            </ul>
            <button className="w-full px-6 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-opacity-90 transition">
              {t('pricing.trial')}
            </button>
          </div>

          {/* Family Plan - Most Popular */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-4 border-primary transform md:scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-6 py-2 rounded-full font-bold text-lg">
              {t('pricing.popular')}
            </div>
            <h3 className="text-2xl font-bold text-text mb-4 mt-4">{t('pricing.family')}</h3>
            <p className="text-4xl font-bold text-primary mb-6">{t('pricing.family_price')}</p>
            <ul className="space-y-4 mb-8">
              <li className="text-lg text-text flex items-start">
                <span className="text-primary mr-3">✓</span>
                <span>All Personal Features</span>
              </li>
              <li className="text-lg text-text flex items-start">
                <span className="text-primary mr-3">✓</span>
                <span>Unlimited Memory Records</span>
              </li>
              <li className="text-lg text-text flex items-start">
                <span className="text-primary mr-3">✓</span>
                <span>Family Sharing & Messages</span>
              </li>
              <li className="text-lg text-text flex items-start">
                <span className="text-primary mr-3">✓</span>
                <span>Emotion Trend Report</span>
              </li>
              <li className="text-lg text-text flex items-start">
                <span className="text-primary mr-3">✓</span>
                <span>Emergency Notifications</span>
              </li>
            </ul>
            <button className="w-full px-6 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-opacity-90 transition">
              {t('pricing.trial')}
            </button>
          </div>

          {/* Institution Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-text mb-4">{t('pricing.institution')}</h3>
            <p className="text-4xl font-bold text-primary mb-6">{t('pricing.institution_price')}</p>
            <ul className="space-y-4 mb-8">
              <li className="text-lg text-text flex items-start">
                <span className="text-primary mr-3">✓</span>
                <span>All Family Features</span>
              </li>
              <li className="text-lg text-text flex items-start">
                <span className="text-primary mr-3">✓</span>
                <span>Multi-user Management</span>
              </li>
              <li className="text-lg text-text flex items-start">
                <span className="text-primary mr-3">✓</span>
                <span>Data Dashboard</span>
              </li>
              <li className="text-lg text-text flex items-start">
                <span className="text-primary mr-3">✓</span>
                <span>Emotion Alert System</span>
              </li>
              <li className="text-lg text-text flex items-start">
                <span className="text-primary mr-3">✓</span>
                <span>Government Subsidy Integration</span>
              </li>
            </ul>
            <button className="w-full px-6 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-opacity-90 transition">
              {t('pricing.contact')}
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-text mb-8">{t('pricing.faq')}</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                className="w-full px-6 py-6 flex items-center justify-between hover:bg-gray-50 transition"
              >
                <p className="text-xl font-bold text-text text-left">{faq.q}</p>
                {expandedFaq === idx ? (
                  <ChevronUp size={28} className="text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown size={28} className="text-primary flex-shrink-0" />
                )}
              </button>
              {expandedFaq === idx && (
                <div className="px-6 pb-6 bg-gray-50">
                  <p className="text-lg text-text">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
