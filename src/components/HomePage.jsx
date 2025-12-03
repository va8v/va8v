import { useContext, useEffect } from 'react'
import ProfileCard from './ProfileCard'
import TerminalCard from './TerminalCard'
import MusicPlayer from './MusicPlayer'
import DiscordRPC from './MottoCard'
import FooterBanner from './FooterBanner'
import { useLocalTime } from '../hooks/useLocalTime'
import { MusicContext } from '../context/MusicContext'

const USER = {
  nick: 'va8v',
  role: 'Developer & Cat Lover',
  socials: {
    youtube: '',
    discord: '',
    instagram: '',
    github: '',
    email: ''
  }
}

export default function HomePage() {
  const time = useLocalTime("Africa/Johannesburg")
  const { playlist, currentIndex, setPlaylist, setCurrentIndex } = useContext(MusicContext)

  useEffect(() => {
    setPlaylist([
      { title: 'Fukashigi No Carte', src: '/music/fukashigi_no_carte.mp3', cover: '/music/covers/fukashigi_no_carte.png' }
    ])
    setCurrentIndex(0)
  }, [setPlaylist, setCurrentIndex])

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-gray-100 p-6 relative"
      style={{
        backgroundImage: "url('/backgrounds/mybg.gif')",
        backgroundColor: "transparent"
      }}
    >
      {/* StarField removed */}

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">

        <div className="md:col-span-1 flex flex-col gap-6">
          <ProfileCard user={USER} />
          <MusicPlayer />
          <DiscordRPC />
        </div>

        <div className="md:col-span-2 flex flex-col gap-6">
          <TerminalCard user={USER}>
            <div>
              <div className="mb-3">
                <span className="text-green-400">$</span>
                <span className="text-gray-200"> cat skills.json</span>
              </div>

              <pre className="bg-gray-50 text-black p-4 rounded-xl mt-3 text-sm border border-gray-200 shadow-sm">
{`cat skills = [
  "sleeping on keyboard",
  "coding at 3am",
  "accidentally deleting system32",
  "breaking your site then fixing it",
  "btw Futaba, Mai and Shoko are my socials follow up (༼ つ ◕_◕ ༽つ)",
];`}
              </pre>

              <div className="mt-4 text-sm text-gray-400">
                Now Playing: <span className="text-gray-200">{playlist[currentIndex]?.title || '—'}</span>
              </div>

              <div className="mt-2 text-xs text-gray-500">
                Local Time: {time}
              </div>
            </div>
          </TerminalCard>

          <div className="render-wrapper">
            <a href="https://twitch.tv/va8v_" target="_blank">
              <img src="/renders/render1.png" className="render-img" />
            </a>

            <a href="https://youtube.com/@va8v" target="_blank">
              <img src="/renders/render2.png" className="render-img" />
            </a>

            <a href="https://www.roblox.com/users/578626/profile" target="_blank">
              <img src="/renders/render3.png" className="render-img" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-6 relative z-10">
        <FooterBanner />
      </div>
    </div>
  )
}
