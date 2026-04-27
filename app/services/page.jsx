'use client'

/* ─────────────────────────────────────────────
   Services & Pricing — Dashing Diva
   All prices in MYR (RM).
   ───────────────────────────────────────────── */

const categories = [
  {
    id: 'haircut',
    emoji: '✂️',
    title: 'Haircut',
    subtitle: 'Precision cuts for every length and texture',
    services: [
      { name: 'Kids — Cut Only',                   price: 'RM 20' },
      { name: 'Kids — Cut + Wash',                 price: 'RM 30' },
      { name: 'Junior Stylist — Fringe Only',      price: 'RM 15' },
      { name: 'Junior Stylist — Cut Only',         price: 'RM 45' },
      { name: 'Junior Stylist — Wash + Blow + Cut', price: 'RM 60' },
      { name: 'Senior Stylist — Fringe Only',      price: 'RM 20' },
      { name: 'Senior Stylist — Cut Only',         price: 'RM 55' },
      { name: 'Senior Stylist — Wash + Blow + Cut', price: 'RM 70' },
    ],
  },
  {
    id: 'blowdry',
    emoji: '💦',
    title: 'Wash, Blow & Style',
    subtitle: 'Salon finish every time — no commitment required',
    services: [
      { name: 'Kids Blow Dry',                     price: 'RM 20' },
      { name: 'Short — Wash, Blow & Curl',         price: 'RM 45' },
      { name: 'Medium — Wash, Blow & Curl',        price: 'RM 50' },
      { name: 'Long — Wash, Blow & Curl',          price: 'RM 55' },
      { name: 'Extra Long — Wash, Blow & Curl',    price: 'RM 60' },
      { name: 'Iron & Tong — Short',               price: 'RM 15' },
      { name: 'Iron & Tong — Medium / Long',       price: 'RM 20' },
      { name: 'Iron & Tong — Extra Long',          price: 'RM 25' },
      { name: 'Blow Dry — Straight',               price: 'RM 25' },
      { name: 'Blow Dry — Wave / Curl',            price: 'RM 35' },
      { name: 'Updo — Simple',                     price: 'RM 40' },
      { name: 'Updo — Moderate',                   price: 'RM 70' },
      { name: 'Updo — Complex',                    price: 'RM 100' },
    ],
  },
  {
    id: 'colouring',
    emoji: '🌈',
    title: 'Hair Colouring',
    subtitle: 'From subtle glazes to full transformation',
    services: [
      { name: 'Free Consultation',                  price: 'Free' },
      { name: 'Glazing',                            price: 'RM 120' },
      { name: 'Single Colour (No Bleach)',          price: 'From RM 150' },
      { name: 'Single Colour (Bleach)',             price: 'From RM 250' },
      { name: 'High Lift',                          price: 'From RM 250' },
      { name: 'Colour Correction',                  price: 'From RM 599' },
    ],
    note: 'Colour correction pricing varies by condition, history, and time required. Consultation required.',
  },
  {
    id: 'highlights',
    emoji: '✨',
    title: 'Highlights & Balayage',
    subtitle: 'Dimension, depth, and that sun-kissed look',
    services: [
      { name: 'Classic Highlights',                price: 'From RM 180' },
      { name: 'Ombré',                             price: 'From RM 250' },
      { name: 'Balayage — Classic',                price: 'From RM 300' },
      { name: 'Balayage — Airtouch',               price: 'From RM 390' },
    ],
  },
  {
    id: 'chemical',
    emoji: '👩🏽‍🦱',
    title: 'Chemical Treatments',
    subtitle: 'Rebonding, perms, and keratin — expertly applied',
    services: [
      { name: 'Korean Perm',                        price: 'From RM 240' },
      { name: 'Cold Perm',                          price: 'From RM 170' },
      { name: 'Relaxing / Rebonding',              price: 'From RM 170' },
      { name: 'Keratin Treatment',                  price: 'From RM 299' },
      { name: 'Keratin — 4C Hair',                 price: 'RM 699' },
    ],
    note: 'Pricing depends on hair length and density. Final price confirmed at consultation.',
  },
  {
    id: 'treatments',
    emoji: '🍎',
    title: 'Hair Treatments',
    subtitle: 'Restore, strengthen, and deeply condition',
    services: [
      { name: 'Nanomist + Apple Stem Cell Treatment', price: 'RM 140' },
      { name: 'Olaplex Repair Treatment',           price: 'From RM 140' },
      { name: 'Monzone Cool Scalp Purifying Treatment', price: 'RM 150' },
      { name: 'Nosu Caramel Repair Treatment',      price: 'RM 180' },
      { name: 'Nosu Scalp Renewal Treatment',       price: 'RM 180' },
      { name: 'Monzone Hair Loss Treatment',        price: 'RM 230' },
      { name: 'Nosu Scalp + Hair Growth Treatment', price: 'RM 300' },
    ],
  },
]

const weekdayPromos = [
  { label: 'Hair Treatment', price: 'RM 89', note: 'Weekdays only' },
  { label: 'Scalp Treatment', price: 'RM 99', note: 'Weekdays only' },
  { label: 'Treatment + Cut', price: 'RM 149', note: 'Weekdays only' },
  { label: 'Colour + Treatment', price: 'RM 199', note: 'Weekdays only' },
]

const addons = [
  { name: 'Premium Gumash Hair Colour (Add-On)',   price: 'RM 50' },
  { name: 'Olaplex (Add-On to any service)',       price: 'RM 50' },
  { name: 'First Bleaching (Add-On)',              price: 'RM 100' },
  { name: 'Subsequent Bleaching (Add-On)',         price: 'RM 60' },
  { name: 'Length Surcharge (Add-On)',             price: 'RM 50' },
  { name: 'Thickness Surcharge (Add-On)',          price: 'From RM 10' },
]

export default function ServicesPage() {
  return (
    <main>

      {/* ── PAGE HEADER ── */}
      <section className="page-hero">
        <div className="section-label">What We Do</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(52px, 8vw, 88px)', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--warm-dark)', lineHeight: 0.93, marginTop: '8px', marginBottom: '16px' }}>
          SERVICES &amp;<br />
          <span style={{ color: 'var(--pink-deep)' }}>PRICING</span>
        </h1>
        <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--muted)', maxWidth: '520px' }}>
          All prices are starting from — your stylist will confirm the final quote at consultation.
        </p>
      </section>

      {/* ── WEEKDAY PROMOS ── */}
      <section style={{ background: 'var(--yellow-soft)', padding: '48px 48px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="section-label">Limited Time</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '36px', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--warm-dark)', lineHeight: 0.93, marginBottom: '28px' }}>
            Weekday Promos
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {weekdayPromos.map(p => (
              <div key={p.label} className="card" style={{ padding: '22px 24px' }}>
                <p style={{ fontFamily: 'var(--font-label)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--pink-deep)', marginBottom: '6px' }}>
                  {p.note}
                </p>
                <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--warm-dark)', marginBottom: '8px' }}>
                  {p.label}
                </p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '28px', letterSpacing: '0.02em', color: 'var(--warm-dark)' }}>
                  {p.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORY ANCHOR STRIP ── */}
      <nav style={{ background: 'var(--white)', borderBottom: '1px solid var(--border)', padding: '0 48px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '0' }}>
          {categories.map(c => (
            <a
              key={c.id}
              href={`#${c.id}`}
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-label)',
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.10em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                textDecoration: 'none',
                padding: '16px 18px',
                transition: 'color 150ms',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--pink-deep)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)' }}
            >
              {c.emoji} {c.title}
            </a>
          ))}
        </div>
      </nav>

      {/* ── SERVICE CATEGORIES ── */}
      <section style={{ background: 'var(--cream-warm)', padding: '64px 48px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '64px' }}>

          {categories.map((cat) => (
            <div key={cat.id} id={cat.id} style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '40px', alignItems: 'start' }}>

              {/* Sticky sidebar */}
              <div style={{ position: 'sticky', top: '80px' }}>
                <div className="card" style={{ padding: '28px 24px' }}>
                  <div style={{ fontSize: '28px', marginBottom: '12px' }}>{cat.emoji}</div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--warm-dark)', lineHeight: 1, marginBottom: '10px' }}>
                    {cat.title}
                  </h2>
                  <p style={{ fontSize: '13px', lineHeight: 1.65, color: 'var(--muted)' }}>
                    {cat.subtitle}
                  </p>
                </div>
              </div>

              {/* Pricing table */}
              <div className="card" style={{ overflow: 'hidden', padding: 0 }}>
                {cat.services.map((svc, j) => (
                  <div
                    key={svc.name}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '17px 24px',
                      borderBottom: j < cat.services.length - 1 ? '1px solid var(--border)' : 'none',
                    }}
                  >
                    <span style={{ fontSize: '14px', color: 'var(--warm-mid)' }}>
                      {svc.name}
                    </span>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '20px', letterSpacing: '0.02em', color: 'var(--pink-deep)', whiteSpace: 'nowrap', marginLeft: '24px' }}>
                      {svc.price}
                    </span>
                  </div>
                ))}

                {cat.note && (
                  <div style={{
                    padding: '14px 24px',
                    background: 'var(--yellow-soft)',
                    borderTop: '1px solid rgba(245,197,24,0.35)',
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'flex-start',
                  }}>
                    <span style={{ fontSize: '14px', flexShrink: 0 }}>ℹ️</span>
                    <p style={{ fontSize: '12px', color: 'var(--warm-mid)', lineHeight: 1.6 }}>
                      {cat.note}
                    </p>
                  </div>
                )}

                <div style={{ padding: '18px 24px', borderTop: '1px solid var(--border)', background: 'var(--cream)' }}>
                  <a
                    href="https://linktr.ee/dashingdivaMY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Book {cat.title} →
                  </a>
                </div>
              </div>

            </div>
          ))}

          {/* Add-ons */}
          <div>
            <div className="section-label">Add-ons</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '36px', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--warm-dark)', lineHeight: 0.93, marginBottom: '20px' }}>
              Enhancements
            </h2>
            <div className="card" style={{ overflow: 'hidden', padding: 0 }}>
              {addons.map((a, j) => (
                <div key={a.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '17px 24px', borderBottom: j < addons.length - 1 ? '1px solid var(--border)' : 'none' }}>
                  <span style={{ fontSize: '14px', color: 'var(--warm-mid)' }}>{a.name}</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '18px', letterSpacing: '0.02em', color: 'var(--pink-deep)', whiteSpace: 'nowrap', marginLeft: '24px' }}>{a.price}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── SATISFACTION GUARANTEE ── */}
      <section style={{ background: 'var(--warm-dark)', padding: '56px 48px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '80px 1fr', gap: '32px', alignItems: 'center' }}>
          {/* Shield icon */}
          <div style={{
            width: '80px', height: '80px', borderRadius: '50%',
            background: 'rgba(204,138,158,0.15)',
            border: '1px solid rgba(204,138,158,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--pink)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="m9 12 2 2 4-4"/>
            </svg>
          </div>
          {/* Copy */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', textTransform: 'uppercase', color: '#fff', letterSpacing: '0.02em', lineHeight: 1 }}>
                7-Day Satisfaction Guarantee
              </div>
              <span style={{
                fontFamily: 'var(--font-label)', fontSize: '9px', fontWeight: 700,
                letterSpacing: '0.10em', textTransform: 'uppercase',
                background: 'var(--yellow-soft)', color: 'var(--warm-dark)',
                padding: '4px 12px', borderRadius: 'var(--r-pill)',
                border: '1px solid rgba(245,197,24,0.35)', whiteSpace: 'nowrap',
              }}>
                No questions asked
              </span>
            </div>
            <p style={{ fontSize: '15px', lineHeight: 1.75, color: 'rgba(255,255,255,0.50)', margin: 0, maxWidth: '580px' }}>
              Not happy with your result? Come back within 7 days and we'll redo it — no awkward conversations, no extra charge. We stand behind every service we do.
            </p>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{ background: 'var(--cream)', padding: '72px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Ready?</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--warm-dark)', lineHeight: 0.93, marginBottom: '16px' }}>
            READY TO BOOK?
          </h2>
          <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--muted)', marginBottom: '32px' }}>
            Book via Fresha — pick your branch, your stylist, and your slot. Walk in, relax, and walk out looking like yourself, only better.
          </p>
          <a
            href="https://linktr.ee/dashingdivaMY"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Book Now on Fresha
          </a>
        </div>
      </section>

    </main>
  )
}
