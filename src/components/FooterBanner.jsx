import React from 'react'
import { motion } from 'framer-motion'

export default function FooterBanner() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 1 }}
      className="relative mt-12 h-64 rounded-2xl overflow-hidden"
    >
      {/* GIF background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('/mybanner.gif')`,
          backgroundSize: "cover"
        }}
      />

      {/* Dark overlay for text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />

      {/* TOP LEFT CONTENT */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-3 text-white">

        {/* Contact title */}
        <div className="text-gray-200 text-sm font-semibold drop-shadow">
          Contact Me
        </div>

        {/* Discord only */}
        <a 
          href="https://discord.com/users/411267061936029696"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 text-white hover:text-purple-300 transition-colors duration-300 text-lg font-semibold drop-shadow"
        >
          {/* Discord Icon */}
          <svg 
            className="w-6 h-6" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.07.07 0 00-.074.035c-.21.375-.444.864-.608 1.249a18.27 18.27 0 00-5.43 0 12.64 12.64 0 00-.617-1.249.07.07 0 00-.074-.035 19.736 19.736 0 00-4.885 1.515.064.064 0 00-.03.025C2.02 9.04 1.37 13.58 1.674 18.061a.08.08 0 00.031.056 19.9 19.9 0 005.993 3.03.07.07 0 00.075-.027c.46-.63.873-1.295 1.226-1.994a.07.07 0 00-.038-.1 13.1 13.1 0 01-1.882-.9.07.07 0 01-.007-.116c.126-.094.252-.192.372-.291a.07.07 0 01.073-.01c3.927 1.793 8.18 1.793 12.062 0a.07.07 0 01.074.009c.12.1.246.198.372.292a.07.07 0 01-.006.116c-.6.35-1.226.657-1.883.9a.07.07 0 00-.037.1c.36.698.773 1.364 1.225 1.994a.07.07 0 00.075.028 19.9 19.9 0 005.994-3.03.07.07 0 00.03-.055c.5-5.177-.838-9.684-3.548-13.667a.05.05 0 00-.03-.027zM8.02 15.33c-1.183 0-2.157-1.095-2.157-2.438 0-1.342.955-2.438 2.157-2.438 1.213 0 2.177 1.106 2.157 2.438 0 1.343-.955 2.438-2.157 2.438zm7.975 0c-1.183 0-2.157-1.095-2.157-2.438 0-1.342.955-2.438 2.157-2.438 1.213 0 2.177 1.106 2.157 2.438 0 1.343-.944 2.438-2.157 2.438z"/>
          </svg>

          My Discord
        </a>
      </div>

      {/* Floating particles */}
      <div className="absolute top-4 right-8 w-2 h-2 bg-white/40 rounded-full animate-ping" />
      <div className="absolute top-12 right-16 w-1 h-1 bg-purple-400/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-8 right-24 w-1.5 h-1.5 bg-violet-400/50 rounded-full animate-ping" style={{ animationDelay: '1.5s' }} />

    </motion.div>
  )
}
