import { client, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { notFound } from 'next/navigation'

/* ─────────────────────────────────────────────
   Blog Post — Dashing Diva
   Dynamic route: /blog/[slug]
   ───────────────────────────────────────────── */

export const revalidate = 60

async function getPost(slug) {
  return client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      category,
      excerpt,
      readTime,
      publishedAt,
      image,
      body
    }`,
    { slug }
  )
}

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug)
  if (!post) return {}
  const slugPath = `/blog/${post.slug?.current}`
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: slugPath,
      languages: {
        'en-MY': slugPath,
        'x-default': slugPath,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.dashingdiva.my${slugPath}`,
    },
  }
}

/* ── Portable Text component overrides ── */
const ptComponents = {
  block: {
    normal: ({ children }) => (
      <p style={{ fontSize: '15px', lineHeight: 1.85, color: 'var(--muted)', marginBottom: '20px' }}>
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--warm-dark)', marginTop: '40px', marginBottom: '12px' }}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '17px', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--warm-dark)', marginTop: '32px', marginBottom: '10px' }}>
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote style={{ borderLeft: '3px solid var(--pink-deep)', paddingLeft: '20px', margin: '28px 0', fontStyle: 'italic', color: 'var(--muted)' }}>
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong style={{ color: 'var(--warm-dark)', fontWeight: 600 }}>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => (
      <a href={value?.href} style={{ color: 'var(--pink-deep)', textDecoration: 'underline' }} target={value?.blank ? '_blank' : undefined} rel={value?.blank ? 'noopener noreferrer' : undefined}>
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => (
      <figure style={{ margin: '36px 0' }}>
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: 'var(--r-md)', overflow: 'hidden' }}>
          <Image
            src={urlFor(value).width(900).url()}
            alt={value.alt || ''}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        {value.caption && (
          <figcaption style={{ textAlign: 'center', fontSize: '11px', color: 'var(--muted-lt)', marginTop: '8px', fontFamily: 'var(--font-label)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },
}

function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-MY', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}

export default async function BlogPostPage({ params }) {
  const post = await getPost(params.slug)
  if (!post) notFound()

  return (
    <main>
      {/* ── HERO ── */}
      <section className="page-hero" style={{ paddingBottom: '40px' }}>
        <div style={{ maxWidth: '720px' }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '16px' }}>
            <a href="/blog" style={{ fontFamily: 'var(--font-label)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>
              ← Blog
            </a>
            {post.category && (
              <>
                <span style={{ color: 'var(--border)' }}>·</span>
                <span style={{ fontFamily: 'var(--font-label)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--pink-deep)' }}>
                  {post.category}
                </span>
              </>
            )}
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 52px)', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--warm-dark)', lineHeight: 1.0, marginBottom: '20px' }}>
            {post.title}
          </h1>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            {post.publishedAt && (
              <span style={{ fontFamily: 'var(--font-label)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted-lt)' }}>
                {formatDate(post.publishedAt)}
              </span>
            )}
            {post.readTime && (
              <span style={{ fontFamily: 'var(--font-label)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted-lt)' }}>
                {post.readTime}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* ── COVER IMAGE ── */}
      {post.image && (
        <section style={{ background: 'var(--cream)', paddingBottom: '0' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 var(--sp-md)' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: 'var(--r-md)', overflow: 'hidden' }}>
              <Image
                src={urlFor(post.image).width(900).height(506).url()}
                alt={post.title}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* ── BODY ── */}
      <section className="sp" style={{ background: 'var(--cream)', paddingTop: '48px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          {post.body ? (
            <PortableText value={post.body} components={ptComponents} />
          ) : (
            <p style={{ color: 'var(--muted)', fontStyle: 'italic' }}>No content yet.</p>
          )}

          {/* ── CTA ── */}
          <div style={{ marginTop: '56px', padding: '36px 40px', background: 'var(--blush)', borderRadius: 'var(--r-md)', textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '18px', textTransform: 'uppercase', letterSpacing: '0.02em', color: 'var(--warm-dark)', marginBottom: '8px' }}>
              Ready to book a treatment?
            </p>
            <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '20px' }}>
              All three Dashing Diva branches are open for bookings — Plaza Damas, Shah Alam, and Damansara.
            </p>
            <a href="https://www.fresha.com/a/dashing-diva-plaza-damas-kuala-lumpur-plaza-damas-no-60-jalan-sri-hartamas-1-hyt9ekup/all-offer?venue=true" className="btn btn-primary btn-sm">Find your nearest branch →</a>
          </div>
        </div>
      </section>
    </main>
  )
}
