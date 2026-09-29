// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/api/health'],
    },
    sitemap: 'https://loplatforms.com/sitemap.xml',
  }
}