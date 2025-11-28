import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function TerminalCard({ user, children }) {
  const { t } = useTranslation()
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.08 }}
      className="bg-white p-6 rounded-2xl border border-gray-300 text-black"
    >
      {/* Window buttons */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <div className="ml-auto text-xs text-gray-400">~/about-me</div>
      </div>

      {/* Terminal text */}
      <div className="font-mono text-sm text-gray-200 relative">
        {children}
        <span className="inline-block w-2 h-4 bg-green-400 ml-1 animate-pulse"></span>
      </div>
    </motion.div>
  )
}
