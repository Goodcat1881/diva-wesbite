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

export const revalidate = 60 // re-fetch every 60 seconds

export default async function BlogPage() {
  const posts = await client.fetch(QUERY)
  return <BlogClient posts={posts} />
}
