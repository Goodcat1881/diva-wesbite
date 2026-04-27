'use client'
import Link from 'next/link'

const pages = [
  { label: 'About',        href: '/about' },
  { label: 'Our Founder',  href: '/bambang' },
  { label: 'Services',     href: '/services' },
  { label: 'Gallery',      href: '/gallery' },
  { label: 'Blog',         href: '/blog' },
  { label: 'Careers',      href: '/careers' },
  { label: 'Salons',       href: '/salons' },
]

const linkStyle = {
  fontFamily: 'var(--font-body)',
  fontSize: '13px',
  color: 'rgba(255,255,255,0.45)',
  textDecoration: 'none',
  transition: 'color 150ms',
}

const colHeadStyle = {
  fontFamily: 'var(--font-label)',
  fontSize: '10px',
  fontWeight: 700,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.30)',
  marginBottom: '16px',
}

export default function Footer() {
  return (
    <>
      <div className="footer-stripe" />

      <footer style={{ background: 'var(--warm-dark)', padding: '56px 48px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>

          {/* Brand col */}
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '32px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              lineHeight: 1,
              marginBottom: '14px',
            }}>
              DASHING <span style={{ color: 'var(--pink)' }}>DIVA</span>
            </div>
            <p style={{ fontSize: '13px', lineHeight: 1.7, color: 'rgba(255,255,255,0.45)', maxWidth: '240px', marginBottom: '24px' }}>
              A women-only Muslimah salon rooted in Bambang Soteto's craft. Quality hair care that feels like home.
            </p>
            <a
              href="https://linktr.ee/dashingdivaMY"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              Book Now
            </a>
          </div>

          {/* Pages col */}
          <div>
            <h4 style={colHeadStyle}>Pages</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {pages.map(p => (
                <li key={p.href} style={{ marginBottom: '9px' }}>
                  <Link
                    href={p.href}
                    style={linkStyle}
                    onMouseEnter={e => e.target.style.color = 'var(--pink-light)'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect col */}
          <div>
            <h4 style={colHeadStyle}>Connect</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { label: 'Instagram',               href: 'https://www.instagram.com/dashingdivamalaysia/' },
                { label: 'TikTok',                  href: 'https://www.tiktok.com/@dashingdivamy' },
                { label: 'Email',                   href: 'mailto:dashingdivadamas1@gmail.com' },
              ].map(c => (
                <li key={c.label} style={{ marginBottom: '9px' }}>
                  <a
                    href={c.href}
                    style={linkStyle}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={e => e.target.style.color = 'var(--pink-light)'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </footer>

      {/* Copyright bar */}
      <div style={{
        background: '#1d0f18',
        padding: '14px 48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}>
        <span style={{ fontFamily: 'var(--font-label)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.20)' }}>
          © 2025 Dashing Diva. All rights reserved.
        </span>
        <span style={{ fontFamily: 'var(--font-label)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.20)' }}>
          A brand under Bambang Soteto
        </span>
      </div>
    </>
  )
}
