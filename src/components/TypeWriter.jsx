import React, { useState, useEffect } from 'react'

export default function TypewriterText({ text, speed = 100, delay = 0, className = "" }) {
  const [displayText, setDisplayText] = useState('')
  const [index, setIndex] = useState(0)
  const [cursor, setCursor] = useState(true)

  useEffect(() => {
    const start = setTimeout(() => {
      if (index < text.length) {
        const t = setTimeout(() => {
          setDisplayText(prev => prev + text[index])
          setIndex(prev => prev + 1)
        }, speed)
        return () => clearTimeout(t)
      }
    }, delay)

    return () => clearTimeout(start)
  }, [index, text, speed, delay])

  useEffect(() => {
    const blink = setInterval(() => setCursor(prev => !prev), 500)
    return () => clearInterval(blink)
  }, [])

  return (
    <span className={className}>
      {displayText}
      <span className={`inline-block ${cursor ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}>
        |
      </span>
    </span>
  )
}
