import React, { useState } from 'react'
import { LanguageProvider } from './context/LanguageContext'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { ChatPage } from './pages/ChatPage'
import { MemoryMapPage } from './pages/MemoryMapPage'
import { DashboardPage } from './pages/DashboardPage'
import { PricingPage } from './pages/PricingPage'
import './index.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />
      case 'chat':
        return <ChatPage onNavigate={setCurrentPage} />
      case 'memory':
        return <MemoryMapPage onNavigate={setCurrentPage} />
      case 'dashboard':
        return <DashboardPage onNavigate={setCurrentPage} />
      case 'pricing':
        return <PricingPage onNavigate={setCurrentPage} />
      default:
        return <HomePage onNavigate={setCurrentPage} />
    }
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
        {renderPage()}
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
