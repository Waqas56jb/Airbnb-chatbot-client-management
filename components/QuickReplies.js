'use client'

export default function QuickReplies({ replies, onSelect }) {
  return (
    <div className="py-2 sm:py-3">
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {replies.map((reply, index) => (
          <button
            key={index}
            onClick={() => onSelect(reply)}
            className="px-3 py-2 sm:px-4 sm:py-2.5 lg:px-6 lg:py-3 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-full text-xs sm:text-sm lg:text-base text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:border-indigo-300/50 transition-all duration-300 touch-manipulation min-h-[36px] sm:min-h-[40px] lg:min-h-[44px] hover-lift hover-glow font-medium animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {reply}
          </button>
        ))}
      </div>
    </div>
  )
}
