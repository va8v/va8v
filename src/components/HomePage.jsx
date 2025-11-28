import { useContext, useEffect } from 'react'
import ProfileCard from './ProfileCard'
import TerminalCard from './TerminalCard'
import MusicPlayer from './MusicPlayer'
import DiscordRPC from './MottoCard'
import StarField from './StarField'
import FooterBanner from './FooterBanner'
import { useLocalTime } from '../hooks/useLocalTime'
import { MusicContext } from '../context/MusicContext'
import { useTranslation } from 'react-i18next'

const USER = {
  nick: 'va8v',
  role: 'Developer & Minecraft Modder',
  location: { country: 'South Africa', city: 'Port Elizabeth', timezone: 'Africa/Johannesburg' },
  modrinth: '',
  socials: {
    youtube: '',
    discord: '',
    instagram: '',
    github: '',
    email: ''
  }
}

export default function HomePage() {
  const { t } = useTranslation()
  const time = useLocalTime(USER.location.timezone)
  const { playlist, currentIndex, setPlaylist, setCurrentIndex } = useContext(MusicContext)

  useEffect(() => {
    const playlist = [
      { title: 'Ginuwine-So Anxious', src: '/music/so_anxious.mp3', cover: '/music/covers/so_anxious.png' },
    ]
    
    setPlaylist(playlist)
    setCurrentIndex(0)
  }, [setPlaylist, setCurrentIndex])

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-gray-100 p-6 relative"
      style={{ backgroundImage: "url('/backgrounds/mybg.gif')" }}
    >
      <StarField />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">

        {/* LEFT COLUMN */}
        <div className="md:col-span-1 flex flex-col gap-6">
          <ProfileCard user={USER} />
          <MusicPlayer />
          <DiscordRPC />
        </div>

        {/* RIGHT COLUMN (TERMINAL) */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <TerminalCard user={USER}>
            <div>
              <div className="mb-3">
                <span className="text-green-400">$</span>
                <span className="text-gray-200"> {t('aboutCommand')}</span>
              </div>

              <pre className="bg-gray-50 text-black p-4 rounded-xl mt-3 text-sm border border-gray-200 shadow-sm">
{`const skills = [
  "Minecraft Dev",
  "Web Designing",
];`}
              </pre>

              <div className="mt-4 text-sm text-gray-400">
                {t('musicPlaying')}: <span className="text-gray-200">{playlist[currentIndex]?.title || '—'}</span>
              </div>

              <div className="mt-2 text-xs text-gray-500">
                {t('localTime')} {time}
              </div>
            </div>
          </TerminalCard>

          {/* ===========================
              RENDERS RIGHT UNDER LOCAL TIME
             =========================== */}
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

      {/* FOOTER */}
      <div className="max-w-6xl mx-auto relative z-10">
        <FooterBanner />
      </div>

    </div>
  )
}
