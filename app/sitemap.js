export default function sitemap() {
  const base = 'https://www.dashingdiva.my'
  const now = new Date()

  return [
    { url: base,                                lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/services`,                  lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/about`,                     lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/gallery`,                   lastModified: now, changeFrequency: 'weekly',  priority: 0.6 },
    { url: `${base}/bambang`,                   lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog`,                      lastModified: now, changeFrequency: 'daily',   priority: 0.8 },
    { url: `${base}/careers`,                   lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    // Location pages
    { url: `${base}/salons`,                    lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/salons/plaza-damas`,        lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    // Blog posts
    { url: `${base}/blog/hair-treatments-kl`,  lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ]
}
