import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { MusicProvider } from './context/MusicContext'
import HomePage from './components/HomePage'
import VideoPage from './components/VideoPage'

export default function App() {
  return (
    <MusicProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:videoId" element={<VideoPage />} />
        </Routes>
      </Router>
      <Analytics />
    </MusicProvider>
  )
}