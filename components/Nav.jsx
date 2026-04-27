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
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 48px', height: '64px' }}>

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

        {/* CTA */}
        <a
          href="https://linktr.ee/dashingdivaMY"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm"
        >
          Book Now
        </a>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
