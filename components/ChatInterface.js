'use client'

import { useState, useRef, useEffect } from 'react'
import MessageList from './MessageList'
import MessageComposer from './MessageComposer'
import QuickReplies from './QuickReplies'
import { useChat } from '../hooks/useChat'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../lib/translations'

export default function ChatInterface() {
  const { uiLanguage, userLanguage } = useLanguage()
  const {
    messages,
    sendMessage,
    quickReplies,
    isTyping,
    sessionId
  } = useChat(uiLanguage, userLanguage)

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <div className="flex flex-col h-full bg-white/90 backdrop-blur-sm relative mx-2 sm:mx-4 lg:mx-6">
      {/* Messages - Premium Styling with Enhanced Responsiveness */}
      <div className="flex-1 overflow-y-auto p-2 sm:p-4 lg:p-6 bg-gradient-to-b from-gray-50 to-white custom-scrollbar">
        <MessageList 
          messages={messages} 
          isTyping={isTyping}
        />
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Replies - Premium Design with Enhanced Responsiveness */}
      {quickReplies && quickReplies.length > 0 && (
        <div className="px-2 sm:px-4 lg:px-6 py-3 bg-white/80 backdrop-blur-sm border-t border-gray-100/50">
          <QuickReplies 
            replies={quickReplies}
            onSelect={sendMessage}
          />
        </div>
      )}

      {/* Composer - Premium Design with Enhanced Responsiveness */}
      <div className="border-t border-gray-200/50 p-2 sm:p-4 lg:p-6 bg-white/90 backdrop-blur-sm">
        <MessageComposer onSendMessage={sendMessage} />
      </div>
    </div>
  )
}
