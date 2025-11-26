import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'עדיאל כהן - יועץ משכנתאות',
    short_name: 'עדיאל כהן',
    description: 'יועץ משכנתאות המתמחה בליווי אישי ומקצועי',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/front.webp',
        sizes: '512x512',
        type: 'image/webp',
      }
    ],
    dir: 'rtl',
    lang: 'he-IL',
  }
}
