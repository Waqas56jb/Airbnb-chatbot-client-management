'use client'

import ChatInterface from '../components/ChatInterface'
import { LanguageProvider } from '../contexts/LanguageContext'

function HomeContent() {
  return (
    <div className="h-screen h-[100dvh] bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Premium Header - Enhanced Responsiveness */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 p-3 sm:p-4 lg:p-6 flex-shrink-0 relative z-10 shadow-premium">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow animate-scale-in">
              <span className="text-white text-sm sm:text-lg lg:text-xl font-bold">🏠</span>
            </div>
            <div>
              <h1 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Airbnb Assistant
              </h1>
              <p className="text-xs sm:text-sm text-gray-500">Powered by AI</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm text-gray-600 font-medium">Online</span>
          </div>
        </div>
      </header>
      
      {/* Full-screen Chat Interface - Enhanced Responsiveness */}
      <div className="flex-1 overflow-hidden relative z-10 max-w-7xl mx-auto w-full">
        <ChatInterface />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  )
}
