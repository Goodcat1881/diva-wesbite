'use client'
import Link from 'next/link'
import { useState } from 'react'

const links = [
  { label: 'About',        href: '/about' },
  { label: 'Services',     href: '/services' },
  { label: 'Gallery',      href: '/gallery' },
  { label: 'Our Founder',  href: '/bambang' },
  { label: 'Blog',         href: '/blog' },
  { label: 'Careers',      href: '/careers' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(253,248,245,0.92)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)',
    }}>
      {/* ── Main bar ── */}
      <div className="sp" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 0, paddingBottom: 0, height: '64px', maxWidth: '1196px', marginLeft: 'auto', marginRight: 'auto' }}>

        {/* Logo */}
        <Link href="/" style={{
          fontFamily: 'var(--font-display)',
          fontSize: '22px',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: 'var(--warm-dark)',
          lineHeight: 1,
          textDecoration: 'none',
        }}>
          DASHING <span style={{ color: 'var(--pink-deep)' }}>DIVA</span>
        </Link>

        {/* Desktop nav links */}
        <ul style={{ display: 'flex', gap: '28px', listStyle: 'none', margin: 0, padding: 0 }} className="nav-links-desktop">
          {links.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                style={{
                  fontFamily: 'var(--font-label)',
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.10em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  textDecoration: 'none',
                  transition: 'color 150ms',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--pink-deep)'}
                onMouseLeave={e => e.target.style.color = 'var(--muted)'}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="https://linktr.ee/dashingdivaMY"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm nav-book-desktop"
        >
          Book Now
        </a>

        {/* Hamburger — mobile only */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            flexDirection: 'column',
            gap: '5px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{
            display: 'block', width: '22px', height: '2px',
            background: 'var(--warm-dark)', borderRadius: '2px',
            transition: 'transform 200ms',
            transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
          }} />
          <span style={{
            display: 'block', width: '22px', height: '2px',
            background: 'var(--warm-dark)', borderRadius: '2px',
            transition: 'opacity 200ms',
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: 'block', width: '22px', height: '2px',
            background: 'var(--warm-dark)', borderRadius: '2px',
            transition: 'transform 200ms',
            transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
          }} />
        </button>

      </div>

      {/* ── Mobile dropdown menu ── */}
      {menuOpen && (
        <div style={{
          background: 'rgba(253,248,245,0.98)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderTop: '1px solid var(--border)',
          padding: '8px 24px 24px',
          display: 'flex',
          flexDirection: 'column',
        }}>
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '14px 0',
                fontFamily: 'var(--font-label)',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.10em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                borderBottom: '1px solid var(--border)',
                textDecoration: 'none',
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://linktr.ee/dashingdivaMY"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ marginTop: '18px', width: '100%', justifyContent: 'center' }}
            onClick={() => setMenuOpen(false)}
          >
            Book Now
          </a>
        </div>
      )}

    </nav>
  )
}
