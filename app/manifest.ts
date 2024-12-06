import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'עדיאל כהן - יועץ משכנתאות',
    short_name: 'עדיאל כהן',
    description: 'יועץ משכנתאות מוסמך המתמחה בליווי אישי ומקצועי',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        // TODO- change
        src: '/1.png',
        sizes: '512x512',
        type: 'image/png',
      }
    ],
    dir: 'rtl',
    lang: 'he-IL',
  }
}
