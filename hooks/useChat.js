'use client'

import { useState, useEffect, useCallback } from 'react'

// Dummy responses for testing
const DUMMY_RESPONSES = {
  'hello': {
    content: "Hi! 👋 I'm your Airbnb travel assistant. How can I help you find the perfect place to stay?",
    quick_replies: ["Find places in Barcelona", "Show me Paris options", "I need inspiration", "Book a room"]
  },
  'barcelona': {
    content: "Great choice! Barcelona is amazing! Here are some fantastic places I found for you:",
    type: 'search_results',
    listings: [
      {
        title: "Cozy Apartment in Gothic Quarter",
        location: "Barcelona, Spain",
        price_per_night: 89,
        rating: 4.8
      },
      {
        title: "Modern Loft near Sagrada Familia",
        location: "Barcelona, Spain", 
        price_per_night: 125,
        rating: 4.9
      },
      {
        title: "Beachfront Studio in Barceloneta",
        location: "Barcelona, Spain",
        price_per_night: 95,
        rating: 4.7
      }
    ]
  },
  'paris': {
    content: "Paris, the city of love! Here are some beautiful accommodations I found:",
    type: 'search_results',
    listings: [
      {
        title: "Charming Studio near Eiffel Tower",
        location: "Paris, France",
        price_per_night: 120,
        rating: 4.8
      },
      {
        title: "Historic Apartment in Le Marais",
        location: "Paris, France",
        price_per_night: 150,
        rating: 4.9
      }
    ]
  },
  'book': {
    content: "I'd be happy to help you book! Please let me know which property you're interested in and your dates.",
    quick_replies: ["Book the Gothic Quarter apartment", "Check availability", "Need help with dates"]
  },
  'default': {
    content: "That's interesting! I'm here to help you find the perfect Airbnb. Try asking about destinations like Barcelona, Paris, or New York!",
    quick_replies: ["Show me Barcelona", "Paris options", "New York stays", "I need help"]
  }
}

export function useChat(uiLanguage, userLanguage) {
  const [messages, setMessages] = useState([])
  const [quickReplies, setQuickReplies] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  const [sessionId, setSessionId] = useState('dummy-session-' + Date.now())

  useEffect(() => {
    // Initial welcome message
    const welcomeMessage = {
      id: Date.now(),
      sender: 'assistant',
      content: "Hi! 👋 I'm your Airbnb travel assistant. How can I help you find the perfect place to stay?",
      timestamp: new Date().toISOString(),
      type: 'text'
    }
    setMessages([welcomeMessage])
    setQuickReplies(["Find places in Barcelona", "Show me Paris options", "I need inspiration", "Book a room"])
  }, [])

  const sendMessage = useCallback(async (content) => {
    const userMessage = {
      id: Date.now(),
      sender: 'user',
      content,
      timestamp: new Date().toISOString(),
      type: 'text'
    }

    setMessages(prev => [...prev, userMessage])
    setIsTyping(true)
    setQuickReplies(null)

    // Simulate API delay
    setTimeout(() => {
      const lowerContent = content.toLowerCase()
      let response = DUMMY_RESPONSES.default

      // Simple keyword matching for dummy responses
      if (lowerContent.includes('hello') || lowerContent.includes('hi')) {
        response = DUMMY_RESPONSES.hello
      } else if (lowerContent.includes('barcelona')) {
        response = DUMMY_RESPONSES.barcelona
      } else if (lowerContent.includes('paris')) {
        response = DUMMY_RESPONSES.paris
      } else if (lowerContent.includes('book')) {
        response = DUMMY_RESPONSES.book
      }

      const assistantMessage = {
        id: Date.now() + 1,
        sender: 'assistant',
        content: response.content,
        timestamp: new Date().toISOString(),
        type: response.type || 'text'
      }

      setMessages(prev => [...prev, assistantMessage])

      // Add property cards if it's a search result
      if (response.type === 'search_results' && response.listings) {
        response.listings.forEach((listing, index) => {
          setTimeout(() => {
            setMessages(prev => [...prev, {
              id: Date.now() + 2 + index,
              sender: 'assistant',
              content: listing,
              timestamp: new Date().toISOString(),
              type: 'property_card'
            }])
          }, (index + 1) * 500)
        })
      }

      // Set quick replies
      if (response.quick_replies) {
        setQuickReplies(response.quick_replies)
      }

      setIsTyping(false)
    }, 1000 + Math.random() * 1000) // Random delay between 1-2 seconds
  }, [])

  return {
    messages,
    sendMessage,
    quickReplies,
    isTyping,
    sessionId
  }
}
