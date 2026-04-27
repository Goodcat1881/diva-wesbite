'use client'
import { useState } from 'react'

const filters = ['All', 'Cuts', 'Colour', 'Highlights', 'Treatments', 'Blowout']

const items = [
  { id: 1,  category: 'Colour',       aspect: '3/4',  bg: 'var(--pink)',       photo: '/images/gallery-colour-01.jpg' },
  { id: 2,  category: 'Highlights',   aspect: '4/3',  bg: 'var(--blush)',      photo: '/images/gallery-highlights-01.jpg' },
  { id: 3,  category: 'Colour',       aspect: '3/4',  bg: 'var(--pink-mid)',   photo: '/images/gallery-colour-02.jpg' },
  { id: 4,  category: 'Blowout',      aspect: '1/1',  bg: 'var(--cream-warm)', photo: '/images/gallery-blowout-01.jpg' },
  { id: 5,  category: 'Treatments',   aspect: '3/4',  bg: 'var(--pink)',       photo: '/images/gallery-treatments-01.jpg' },
  { id: 6,  category: 'Colour',       aspect: '4/3',  bg: 'var(--blush)',      photo: '/images/gallery-colour-04.jpg' },
  { id: 7,  category: 'Cuts',         aspect: '3/4',  bg: 'var(--pink-light)', photo: '/images/gallery-cuts-01.jpg' },
  { id: 8,  category: 'Highlights',   aspect: '4/3',  bg: 'var(--pink)',       photo: '/images/gallery-highlights-04.jpg' },
  { id: 9,  category: 'Blowout',      aspect: '3/4',  bg: 'var(--blush)',      photo: '/images/gallery-blowout-02.jpg' },
  { id: 10, category: 'Treatments',   aspect: '4/3',  bg: 'var(--cream-warm)', photo: '/images/gallery-treatments-04.jpg' },
  { id: 11, category: 'Colour',       aspect: '3/4',  bg: 'var(--pink-mid)',   photo: '/images/gallery-colour-08.jpg' },
  { id: 12, category: 'Cuts',         aspect: '1/1',  bg: 'var(--blush)',      photo: '/images/gallery-cuts-02.jpg' },
  { id: 13, category: 'Highlights',   aspect: '3/4',  bg: 'var(--pink-light)', photo: '/images/gallery-highlights-05.jpg' },
  { id: 14, category: 'Blowout',      aspect: '4/3',  bg: 'var(--pink)',       photo: '/images/gallery-blowout-03.jpg' },
  { id: 15, category: 'Treatments',   aspect: '3/4',  bg: 'var(--blush)',      photo: '/images/gallery-treatments-02.jpg' },
  { id: 16, category: 'Colour',       aspect: '1/1',  bg: 'var(--cream-warm)', photo: '/images/gallery-colour-10.jpg' },
  { id: 17, category: 'Highlights',   aspect: '3/4',  bg: 'var(--pink)',       photo: '/images/gallery-highlights-08.jpg' },
  { id: 18, category: 'Blowout',      aspect: '4/3',  bg: 'var(--blush)',      photo: '/images/gallery-blowout-05.jpg' },
]

export default function GalleryPage() {
  const [active, setActive] = useState('All')

  const grid = active === 'All' ? items : items.filter(i => i.category === active)

  return (
    <main>

      {/* ── PAGE HEADER ── */}
      <section className="page-hero">
        <div className="section-label">The Work</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(52px, 8vw, 88px)', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--warm-dark)', lineHeight: 0.93, marginTop: '8px' }}>
          GALLERY
        </h1>
      </section>

      {/* ── FILTER TABS ── */}
      <nav className="sp" style={{ background: 'var(--white)', borderBottom: '1px solid var(--border)', paddingTop: 0, paddingBottom: 0, overflowX: 'auto' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '0' }}>
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={active === f ? 'filter-tab-active' : ''}
              style={{
                fontFamily: 'var(--font-label)',
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.10em',
                textTransform: 'uppercase',
                color: active === f ? 'var(--pink-deep)' : 'var(--muted)',
                background: 'transparent',
                border: 'none',
                borderBottom: active === f ? '2px solid var(--pink-deep)' : '2px solid transparent',
                padding: '16px 20px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'color 150ms',
                marginBottom: '-1px',
              }}
              onMouseEnter={e => { if (active !== f) e.currentTarget.style.color = 'var(--pink-deep)' }}
              onMouseLeave={e => { if (active !== f) e.currentTarget.style.color = 'var(--muted)' }}
            >
              {f}
            </button>
          ))}
        </div>
      </nav>

      {/* ── MASONRY GRID ── */}
      <section className="sp" style={{ background: 'var(--cream)', paddingTop: '48px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          <style>{`
            .gallery-masonry {
              columns: 3;
              column-gap: 14px;
            }
            .gallery-tile {
              break-inside: avoid;
              margin-bottom: 14px;
              display: block;
              border-radius: var(--r-md);
              overflow: hidden;
              cursor: pointer;
              position: relative;
              box-shadow: var(--shadow-card);
              transition: transform 200ms cubic-bezier(.34,1.56,.64,1), box-shadow 200ms;
            }
            .gallery-tile:hover {
              transform: scale(1.02);
              box-shadow: var(--shadow-soft);
            }
            .gallery-tile-label {
              position: absolute;
              bottom: 0; left: 0; right: 0;
              background: linear-gradient(to top, rgba(42,21,32,0.80) 0%, transparent 100%);
              padding: 28px 16px 12px;
              font-family: var(--font-label);
              font-size: 10px;
              font-weight: 700;
              letter-spacing: 0.10em;
              text-transform: uppercase;
              color: #fff;
              border-radius: 0 0 var(--r-md) var(--r-md);
              opacity: 0;
              transition: opacity 200ms;
            }
            .gallery-tile:hover .gallery-tile-label {
              opacity: 1;
            }
            .gallery-tile-ph {
              position: absolute;
              top: 50%; left: 50%;
              transform: translate(-50%, -50%);
              font-family: var(--font-label);
              font-size: 9px;
              font-weight: 700;
              letter-spacing: 0.10em;
              text-transform: uppercase;
              color: rgba(42,21,32,0.20);
            }
            @media (max-width: 768px) {
              .gallery-masonry { columns: 2; }
            }
            @media (max-width: 480px) {
              .gallery-masonry { columns: 1; }
            }
          `}</style>

          <div className="gallery-masonry">
            {grid.map(item => (
              <div
                key={item.id}
                className="gallery-tile"
                style={{ aspectRatio: item.aspect, background: item.bg }}
              >
                {item.photo
                  ? <img src={item.photo} alt={`Dashing Diva ${item.category}`} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', position: 'absolute', inset: 0 }} />
                  : <span className="gallery-tile-ph">[ Photo ]</span>
                }
                <span className="gallery-tile-label">{item.category}</span>
              </div>
            ))}
          </div>

          {grid.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '32px', textTransform: 'uppercase', color: 'var(--pink-mid)' }}>
                Coming Soon
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="sp" style={{ background: 'var(--blush)', paddingTop: '64px', paddingBottom: '64px', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Book a Session</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--warm-dark)', lineHeight: 0.93, marginBottom: '14px' }}>
            WANT THIS FOR YOURSELF?
          </h2>
          <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--muted)', marginBottom: '28px' }}>
            Book a session and let us show you what we can do.
          </p>
          <a href="https://linktr.ee/dashingdivaMY" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Book Now
          </a>
        </div>
      </section>

    </main>
  )
}
