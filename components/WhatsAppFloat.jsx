'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const allSalons = [
  { name: 'Plaza Damas',  number: '60123096125', dot: 'var(--blush)' },
  { name: 'Shah Alam',    number: '60125889073', dot: 'var(--pink)' },
  { name: 'Damansara',    number: '60163541201', dot: 'var(--cream-warm)' },
]

/* Per-page salon overrides — key is a pathname substring */
const salonsByPage = {
  '/salons/shah-alam':   [{ name: 'Shah Alam', number: '60125889073', dot: 'var(--pink)' }],
  '/salons/plaza-damas': [{ name: 'Plaza Damas', number: '60123096125', dot: 'var(--blush)' }],
}

const socialButtons = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/dashingdivamalaysia/',
    bg: 'radial-gradient(circle at 30% 110%, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@dashingdivamy',
    bg: '#010101',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
      </svg>
    ),
  },
]

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  /* Use page-specific salon list if defined, otherwise show all */
  const matchedKey = Object.keys(salonsByPage).find(k => pathname.includes(k))
  const salons = matchedKey ? salonsByPage[matchedKey] : allSalons

  return (
    <div style={{
      position: 'fixed',
      bottom: '28px',
      right: '28px',
      zIndex: 999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '10px',
    }}>

      {/* Expanded salon options */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        alignItems: 'flex-end',
        transition: 'all 250ms cubic-bezier(.34,1.56,.64,1)',
        opacity: open ? 1 : 0,
        transform: open ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.95)',
        pointerEvents: open ? 'auto' : 'none',
      }}>
        {salons.map(s => (
          <a
            key={s.name}
            href={`https://wa.me/${s.number}?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20Dashing%20Diva%20${encodeURIComponent(s.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: 'var(--warm-dark)',
              borderRadius: 'var(--r-pill)',
              padding: '9px 16px 9px 12px',
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
              transition: 'transform 150ms, box-shadow 150ms',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.30)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'none'
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.25)'
            }}
          >
            {/* Colour dot */}
            <span style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: s.dot,
              flexShrink: 0,
              border: '1.5px solid rgba(255,255,255,0.20)',
            }} />
            <span style={{
              fontFamily: 'var(--font-label)',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#ffffff',
            }}>
              {s.name}
            </span>
          </a>
        ))}
      </div>

      {/* Social icon buttons — Instagram & TikTok */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
        {socialButtons.map(s => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow us on ${s.label}`}
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: s.bg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(0,0,0,0.30)',
              transition: 'transform 200ms cubic-bezier(.34,1.56,.64,1), box-shadow 200ms',
              textDecoration: 'none',
              flexShrink: 0,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.10)'
              e.currentTarget.style.boxShadow = '0 6px 22px rgba(0,0,0,0.38)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'none'
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.30)'
            }}
          >
            {s.icon}
          </a>
        ))}
      </div>

      {/* Main WhatsApp button */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Chat with us on WhatsApp"
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: '#25D366',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37,211,102,0.45)',
          transition: 'transform 200ms cubic-bezier(.34,1.56,.64,1), box-shadow 200ms',
          transform: open ? 'rotate(45deg)' : 'none',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = open ? 'rotate(45deg) scale(1.08)' : 'scale(1.08)'
          e.currentTarget.style.boxShadow = '0 6px 28px rgba(37,211,102,0.55)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = open ? 'rotate(45deg)' : 'none'
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.45)'
        }}
      >
        {open ? (
          /* Close X */
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          /* WhatsApp icon */
          <svg width="26" height="26" viewBox="0 0 32 32" fill="#fff">
            <path d="M16 2C8.268 2 2 8.268 2 16c0 2.52.688 4.877 1.888 6.898L2 30l7.302-1.858A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.56 11.56 0 0 1-5.902-1.614l-.424-.252-4.334 1.104 1.14-4.216-.278-.44A11.54 11.54 0 0 1 4.4 16C4.4 9.59 9.59 4.4 16 4.4S27.6 9.59 27.6 16 22.41 27.6 16 27.6zm6.338-8.64c-.348-.174-2.06-1.016-2.38-1.132-.32-.116-.552-.174-.784.174-.232.348-.9 1.132-1.104 1.364-.203.232-.406.26-.754.086-.348-.174-1.47-.542-2.798-1.727-1.034-.922-1.732-2.061-1.936-2.409-.203-.348-.022-.536.153-.71.157-.156.348-.406.522-.61.174-.202.232-.348.348-.58.116-.232.058-.436-.029-.61-.087-.174-.784-1.89-1.074-2.588-.283-.68-.57-.587-.784-.598l-.668-.012c-.232 0-.61.087-.928.435-.32.348-1.218 1.19-1.218 2.904s1.247 3.37 1.42 3.602c.174.232 2.454 3.748 5.945 5.258.831.358 1.48.572 1.986.732.834.265 1.594.228 2.194.138.67-.1 2.06-.842 2.35-1.656.29-.814.29-1.512.203-1.656-.087-.144-.319-.232-.667-.406z"/>
          </svg>
        )}
      </button>
    </div>
  )
}
