import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'עדיאל כהן - יועץ משכנתאות',
    short_name: 'עדיאל כהן',
    description: 'יועץ משכנתאות המתמחה בליווי אישי ומקצועי',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#0f172a',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    dir: 'rtl',
    lang: 'he-IL',
  }
}
