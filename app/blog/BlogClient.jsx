'use client'
import { useState } from 'react'
import { urlFor } from '@/lib/sanity'
import Image from 'next/image'

/* ─────────────────────────────────────────────
   Blog — client component (filter tabs + grid)
   ───────────────────────────────────────────── */

const categories = ['All', 'Hair Tips', 'Colour', 'Treatments', 'Style Guide', 'Behind the Scenes']

function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-MY', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}

export default function BlogClient({ posts = [] }) {
  const [active, setActive] = useState('All')

  const featured = posts.find(p => p.featured)
  const grid = active === 'All'
    ? posts.filter(p => !p.featured)
    : posts.filter(p => p.category === active && !p.featured)

  return (
    <main>

      {/* ── PAGE HEADER ── */}
      <section className="page-hero">
        <div className="section-label">Hair Talk</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(52px, 8vw, 88px)', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--warm-dark)', lineHeight: 0.93, marginTop: '8px' }}>
          THE <span style={{ color: 'var(--pink-deep)' }}>BLOG</span>
        </h1>
      </section>

      {/* ── FEATURED POST ── */}
      {active === 'All' && featured && (
        <section style={{ background: 'var(--cream)', padding: '48px 48px 0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div className="card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', overflow: 'hidden', padding: 0 }}>
              {/* Image */}
              <div style={{ background: 'var(--pink)', minHeight: '340px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {featured.image ? (
                  <Image
                    src={urlFor(featured.image).width(600).height(340).url()}
                    alt={featured.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                ) : (
                  <span style={{ fontFamily: 'var(--font-label)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                    Cover Image
                  </span>
                )}
              </div>
              {/* Copy */}
              <div style={{ padding: '44px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '16px', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-label)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', background: 'var(--yellow-soft)', color: 'var(--warm-dark)', padding: '4px 12px', borderRadius: 'var(--r-pill)', border: '1px solid rgba(245,197,24,0.35)' }}>
                    Featured
                  </span>
                  <span style={{ fontFamily: 'var(--font-label)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--pink-deep)' }}>
                    {featured.category}
                  </span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '30px', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--warm-dark)', lineHeight: 1.05, marginBottom: '14px' }}>
                  {featured.title}
                </h2>
                <p style={{ fontSize: '13px', lineHeight: 1.75, color: 'var(--muted)', marginBottom: '24px' }}>
                  {featured.excerpt}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: 'var(--font-label)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted-lt)' }}>
                    {featured.readTime}
                  </span>
                  <a href={`/blog/${featured.slug?.current}`} className="btn btn-primary btn-sm">
                    Read →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── FILTER TABS ── */}
      <nav style={{ background: 'var(--cream)', padding: '0 48px', borderBottom: '1px solid var(--border)', overflowX: 'auto' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex' }}>
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setActive(c)}
              style={{
                fontFamily: 'var(--font-label)',
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.10em',
                textTransform: 'uppercase',
                color: active === c ? 'var(--pink-deep)' : 'var(--muted)',
                background: 'transparent',
                border: 'none',
                borderBottom: active === c ? '2px solid var(--pink-deep)' : '2px solid transparent',
                padding: '16px 18px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'color 150ms',
                marginBottom: '-1px',
              }}
              onMouseEnter={e => { if (active !== c) e.currentTarget.style.color = 'var(--pink-deep)' }}
              onMouseLeave={e => { if (active !== c) e.currentTarget.style.color = 'var(--muted)' }}
            >
              {c}
            </button>
          ))}
        </div>
      </nav>

      {/* ── POST GRID ── */}
      <section style={{ background: 'var(--cream)', padding: '48px 48px 80px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {grid.map(post => (
              <article key={post._id} className="card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', padding: 0, cursor: 'pointer' }}>
                {/* Thumbnail */}
                <div style={{ background: 'var(--blush)', height: '180px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {post.image ? (
                    <Image
                      src={urlFor(post.image).width(400).height(180).url()}
                      alt={post.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  ) : (
                    <span style={{ fontFamily: 'var(--font-label)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                      Image
                    </span>
                  )}
                </div>
                {/* Body */}
                <div style={{ padding: '22px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontFamily: 'var(--font-label)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--pink-deep)', marginBottom: '8px', display: 'block' }}>
                    {post.category}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '19px', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--warm-dark)', lineHeight: 1.1, marginBottom: '10px', flex: 1 }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: '13px', lineHeight: 1.7, color: 'var(--muted)', marginBottom: '16px' }}>
                    {post.excerpt}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                    <span style={{ fontFamily: 'var(--font-label)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted-lt)' }}>
                      {post.readTime}
                    </span>
                    <a href={`/blog/${post.slug?.current}`} className="text-link">
                      Read →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {grid.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '28px', textTransform: 'uppercase', color: 'var(--pink-mid)' }}>
                {posts.length === 0 ? 'No posts yet — add some in the Studio!' : 'No posts in this category yet'}
              </p>
            </div>
          )}
        </div>
      </section>

    </main>
  )
}
