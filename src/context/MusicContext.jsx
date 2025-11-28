import React, { createContext, useState } from 'react'

export const MusicContext = createContext(null)

export function MusicProvider({ children }) {
  const [playlist, setPlaylist] = useState([
    {
      title: "Ginuwine - So Anxious",
      src: "/music/so_anxious.mp3",
      cover: "/music/covers/so_anxious_cover.png"
    }
  ])

  const [currentIndex, setCurrentIndex] = useState(0)

  const value = { playlist, setPlaylist, currentIndex, setCurrentIndex }
  return <MusicContext.Provider value={value}>{children}</MusicContext.Provider>
}
