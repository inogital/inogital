import { MetadataRoute } from 'next'

import { trainings } from '@/lib/data/training'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.inogital.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.inogital.com/software',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.inogital.com/gservices',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
        url: 'https://www.inogital.com/network',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      },
      {
        url: 'https://www.inogital.com/training',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      },
      {
        url: 'https://www.inogital.com/npos',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      },
      {
        url: 'https://www.inogital.com/about',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.4,
      },
      ...trainings.map((training) => ({
        url: `https://www.inogital.com/training/${training.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.5,
      })),
  ]
}