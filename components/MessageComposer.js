'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../lib/translations'

export default function MessageComposer({ onSendMessage }) {
  const [message, setMessage] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const { uiLanguage } = useLanguage()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim()) {
      onSendMessage(message.trim())
      setMessage('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 sm:space-x-3">
      <div className="flex-1 relative">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={getTranslation('type_message', uiLanguage)}
          className={`w-full p-3 sm:p-4 border rounded-2xl focus:outline-none text-sm sm:text-base resize-none transition-all duration-300 touch-manipulation ${
            isFocused 
              ? 'border-indigo-400 bg-white shadow-glow' 
              : 'border-gray-200/50 bg-white/80 backdrop-blur-sm shadow-premium'
          }`}
          style={{ fontSize: '16px' }} // Prevents zoom on iOS
        />
        {/* Focus gradient overlay */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 transition-opacity duration-300 pointer-events-none ${
          isFocused ? 'opacity-100' : 'opacity-0'
        }`}></div>
      </div>
      
      {/* Premium Send Button */}
      <button
        type="submit"
        disabled={!message.trim()}
        className={`relative overflow-hidden rounded-2xl transition-all duration-300 touch-manipulation flex items-center justify-center group ${
          message.trim()
            ? 'bg-black text-white shadow-glow hover:bg-green-500 hover:shadow-glow-green hover-scale'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        } ${
          message.trim() ? 'min-w-[48px] min-h-[48px] sm:min-w-[56px] sm:min-h-[56px]' : 'min-w-[48px] min-h-[48px] sm:min-w-[56px] sm:min-h-[56px]'
        }`}
      >
        {/* Button content */}
        <div className={`p-3 sm:p-4 transition-transform duration-200 ${
          message.trim() ? 'group-hover:scale-110' : ''
        }`}>
          <Send className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        
        {/* Ripple effect */}
        {message.trim() && (
          <div className="absolute inset-0 rounded-2xl bg-white/20 scale-0 group-active:scale-100 transition-transform duration-150"></div>
        )}
        
        {/* Shimmer effect */}
        {message.trim() && (
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        )}
      </button>
    </form>
  )
}
