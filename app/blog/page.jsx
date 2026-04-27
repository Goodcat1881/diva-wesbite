import { client } from '@/lib/sanity'
import BlogClient from './BlogClient'

/* ─────────────────────────────────────────────
   Blog — Dashing Diva
   Fetches posts from Sanity at request time.
   ───────────────────────────────────────────── */

const QUERY = `*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  category,
  excerpt,
  readTime,
  featured,
  publishedAt,
  image
}`

export const metadata = {
  title: 'Hair Tips & Guides',
  description: 'Hair care tips, style guides, and treatment explainers from the stylists at Dashing Diva — Muslimah hair salon in KL, Shah Alam, and Damansara.',
  openGraph: {
    title: 'Hair Tips & Guides — Dashing Diva Blog',
    description: 'Colour guides, treatment explainers, and hair care tips for Muslimah women from the team at Dashing Diva.',
    url: 'https://www.dashingdiva.my/blog',
  },
}

export const revalidate = 60 // re-fetch every 60 seconds

export default async function BlogPage() {
  const posts = await client.fetch(QUERY)
  return <BlogClient posts={posts} />
}
