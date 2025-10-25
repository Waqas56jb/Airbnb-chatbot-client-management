'use client'

import Image from 'next/image'

export default function MessageList({ messages, isTyping }) {
  return (
    <div className="space-y-3 sm:space-y-4 lg:space-y-6">
      {messages.map((message, index) => (
        <div
          key={message.id}
          className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div
            className={`max-w-[85%] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 rounded-2xl shadow-premium hover-lift ${
              message.sender === 'user'
                ? 'gradient-primary text-white'
                : 'bg-white text-gray-900 border border-gray-200/50 backdrop-blur-sm'
            }`}
          >
            {message.type === 'property_card' ? (
              <PropertyCard listing={message.content} />
            ) : (
              <p className="text-sm sm:text-base lg:text-lg break-words leading-relaxed">{message.content}</p>
            )}
            <p className={`text-xs sm:text-sm mt-2 ${
              message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
            }`}>
              {new Date(message.timestamp).toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </p>
          </div>
        </div>
      ))}
      
      {isTyping && (
        <div className="flex justify-start animate-fade-in-left">
          <div className="bg-white text-gray-900 border border-gray-200/50 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 rounded-2xl shadow-premium">
            <div className="flex space-x-1 items-center">
              <span className="text-xs sm:text-sm text-gray-500 mr-2">Typing</span>
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function PropertyCard({ listing }) {
  // Generate different house images based on location
  const getHouseImage = (location) => {
    if (location.toLowerCase().includes('barcelona')) {
      return 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop&crop=center'
    } else if (location.toLowerCase().includes('paris')) {
      return 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=300&fit=crop&crop=center'
    } else if (location.toLowerCase().includes('new york')) {
      return 'https://images.unsplash.com/photo-1527030280862-64139dba98f4?w=400&h=300&fit=crop&crop=center'
    } else {
      return 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop&crop=center'
    }
  }

  return (
    <div className="bg-white border border-gray-200/50 rounded-2xl p-3 sm:p-4 lg:p-6 max-w-sm lg:max-w-md shadow-premium hover-lift backdrop-blur-sm animate-scale-in">
      <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl mb-3 sm:mb-4 lg:mb-6 overflow-hidden">
        <div className="w-full h-24 sm:h-32 lg:h-40 rounded-xl relative overflow-hidden">
          <Image 
            src={getHouseImage(listing.location)}
            alt={listing.title}
            fill
            className="object-cover"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
          {/* Fallback icon if image fails to load */}
          <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center absolute inset-0" style={{ display: 'none' }}>
            <span className="text-gray-500 text-2xl sm:text-3xl lg:text-4xl">🏠</span>
          </div>
          <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
            <span className="text-xs sm:text-sm font-semibold text-gray-700">⭐ {listing.rating}</span>
          </div>
        </div>
      </div>
      <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base lg:text-lg leading-tight">{listing.title}</h3>
      <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-3 sm:mb-4 flex items-center">
        <span className="mr-1">📍</span>
        {listing.location}
      </p>
      <div className="flex justify-between items-center mb-3 sm:mb-4">
        <span className="text-base sm:text-lg lg:text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          ${listing.price_per_night}/night
        </span>
        <div className="flex items-center space-x-1">
          <span className="text-yellow-500">⭐</span>
          <span className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">{listing.rating}</span>
        </div>
      </div>
      <button className="w-full bg-gradient-primary text-white py-2.5 sm:py-3 lg:py-4 px-3 sm:px-4 lg:px-6 rounded-xl hover:shadow-glow transition-all duration-300 font-semibold text-sm sm:text-base lg:text-lg touch-manipulation hover-scale">
        Book Now
      </button>
    </div>
  )
}
