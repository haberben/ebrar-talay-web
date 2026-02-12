import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/', // Admin panelini Google'dan gizliyoruz
    },
    sitemap: 'https://www.ebrartalay.com/sitemap.xml',
  }
}