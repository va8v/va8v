export const VIDEO_CONFIG = {
  Important: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=1&rel=0',
  Secret: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=1&rel=0',
  Special: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=1&rel=0'
}

export const VIDEO_SETTINGS = {
  youtube: {
    allowFullScreen: true,
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  },
  vimeo: {
    allowFullScreen: true,
    allow: "autoplay; fullscreen; picture-in-picture"
  },
  mp4: {
    controls: true,
    autoPlay: true,
    loop: false
  }
}

export function getVideoType(url) {
  if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube'
  if (url.includes('vimeo.com')) return 'vimeo'
  if (url.includes('twitch.tv')) return 'twitch'
  if (url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg')) return 'mp4'
  return 'iframe'
}
