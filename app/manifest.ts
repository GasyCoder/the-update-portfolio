import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'GasyCoder - Full Stack Developer Portfolio',
    short_name: 'GasyCoder',
    description: 'Modern and futuristic portfolio showcasing web development projects and skills',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/profile.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
