// import type { MetadataRoute } from 'next';

// export const dynamic = 'force-static';

// export default function sitemap(): MetadataRoute.Sitemap {
//   const baseUrl = 'https://kundanprasadyadav.com.np';

//   return [
//     {
//       url: baseUrl,
//       lastModified: new Date(),
//       changeFrequency: 'weekly',
//       priority: 1,
//     },
//   ];
// }
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kundanprasadyadav.com.np'

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Example additional routes (uncomment/add your actual pages):
    
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    
  ]
}