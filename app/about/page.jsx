'use client'
import Link from 'next/link'

const pillars = [
  {
    number: '01',
    title: 'Women-Only Space',
    body: 'Every corner of Dashing Diva is designed for Muslimah comfort. No men on the floor — ever. You can let your hair down, literally.',
  },
  {
    number: '02',
    title: 'Rooted in Craft',
    body: "Our techniques come directly from Bambang Soteto's decades of professional training. Every stylist in our network is trained to his standard.",
  },
  {
    number: '03',
    title: 'Quality Without the Wait',
    body: "Premium results shouldn't mean waiting weeks for an appointment. We built Dashing Diva so great hair is always within reach.",
  },
]

const timeline = [
  { year: '[YEAR]', event: "Bambang Soteto establishes his reputation as one of Malaysia's leading hair professionals.", last: false },
  { year: '[YEAR]', event: 'The idea for a Muslimah-first, women-only salon concept takes shape.', last: false },
  { year: '[YEAR]', event: 'Dashing Diva opens its first branch under the Bambang Soteto license.', last: false },
  { year: 'Today',  event: 'Multiple branches serving thousands of clients across Malaysia.', last: true },
]

export default function AboutPage() {
  return (
    <main>

      {/* ── PAGE HEADER ── */}
      <section className="page-hero">
        <div className="section-label">Our Story</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(52px, 8vw, 88px)', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--warm-dark)', lineHeight: 0.93, marginTop: '8px' }}>
          BUILT FOR<br />
          <span style={{ color: 'var(--pink-deep)' }}>YOU.</span> ONLY YOU.
        </h1>
      </section>

      {/* ── OPENING STATEMENT ── */}
      <section style={{ background: 'var(--cream)', padding: '80px 48px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

          {/* Salon interior photo */}
          <div style={{
            aspectRatio: '4/5',
            borderRadius: 'var(--r-lg)',
            boxShadow: 'var(--shadow-soft)',
            overflow: 'hidden',
            background: 'var(--blush)',
          }}>
            <img
              src="/images/salon-interior-1.jpg"
              alt="Inside Dashing Diva — Damansara"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
            />
          </div>

          {/* Copy */}
          <div>
            <div className="section-label">Who We Are</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '44px', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--warm-dark)', lineHeight: 0.93, marginBottom: '24px' }}>
              A Salon That Gets It
            </h2>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--muted)', marginBottom: '18px' }}>
              Dashing Diva started from a simple truth: Muslimah women deserve a salon that actually works for them. Not one where you have to plan around the floor layout, worry about who might walk in, or compromise on privacy.
            </p>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--muted)', marginBottom: '18px' }}>
              We built a women-only space from the ground up — where letting your hair down isn't just a phrase. Where you can relax, take your time, and trust that the person working on your hair knows exactly what they're doing.
            </p>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--muted)' }}>
              Every Dashing Diva branch runs under the license and training of Bambang Soteto — one of Malaysia's most respected hairstylists. His craft is the foundation. Your comfort is the brief.
            </p>
          </div>

        </div>
      </section>

      {/* ── THREE PILLARS ── */}
      <section style={{ background: 'var(--cream-warm)', padding: '64px 48px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="section-label">What We Stand For</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '48px', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--warm-dark)', lineHeight: 0.93, marginBottom: '40px' }}>
            Our Pillars
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {pillars.map((p) => (
              <div key={p.number} className="card" style={{ padding: '32px 28px' }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '56px',
                  color: 'var(--blush)',
                  lineHeight: 1,
                  marginBottom: '12px',
                }}>
                  {p.number}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--warm-dark)', marginBottom: '12px', lineHeight: 1.1 }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '13px', lineHeight: 1.75, color: 'var(--muted)' }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BAMBANG CALLOUT ── */}
      <section style={{ background: 'var(--blush)', padding: '80px 48px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

          {/* Copy */}
          <div>
            <div className="section-label">The Name Behind the Brand</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '48px', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--warm-dark)', lineHeight: 0.93, marginBottom: '20px' }}>
              Bambang Soteto
            </h2>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--warm-mid)', marginBottom: '28px' }}>
              Bambang Soteto is one of Malaysia's most recognisable names in professional hair. With decades of experience — on-set, in competition, and in the salon — his techniques are the backbone of everything we do at Dashing Diva.
            </p>
            <Link href="/bambang" className="btn btn-primary">
              Read Bambang's Story →
            </Link>
          </div>

          {/* Photo */}
          <div style={{ borderRadius: 'var(--r-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-soft)', aspectRatio: '1/1' }}>
            <img
              src="/images/bambang-8.jpeg"
              alt="Bambang Soteto"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
          </div>

        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section style={{ background: 'var(--warm-dark)', borderRadius: '0 0 var(--r-lg) var(--r-lg)', padding: '80px 48px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div className="section-label section-label-light">How We Got Here</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '48px', letterSpacing: '0.02em', textTransform: 'uppercase', color: '#FFFFFF', lineHeight: 0.93, marginBottom: '56px' }}>
            Our Journey
          </h2>
          <div style={{ position: 'relative' }}>
            {/* Vertical line */}
            <div style={{ position: 'absolute', left: '72px', top: 0, bottom: 0, width: '1px', background: 'rgba(255,255,255,0.10)' }} />

            {timeline.map((t, i) => (
              <div key={i} style={{ display: 'flex', gap: '32px', marginBottom: i < timeline.length - 1 ? '48px' : '0', alignItems: 'flex-start' }}>
                {/* Year */}
                <div style={{ flexShrink: 0, width: '144px', textAlign: 'right', paddingRight: '32px' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '22px', letterSpacing: '0.05em', color: t.last ? 'var(--pink)' : 'rgba(255,255,255,0.35)' }}>
                    {t.year}
                  </span>
                </div>
                {/* Dot */}
                <div style={{
                  flexShrink: 0, width: '12px', height: '12px',
                  borderRadius: '50%',
                  background: t.last ? 'var(--pink-deep)' : 'var(--pink-mid)',
                  marginTop: '5px', position: 'relative', zIndex: 1,
                }} />
                {/* Text */}
                <p style={{ fontSize: '14px', lineHeight: 1.7, color: t.last ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.45)', paddingTop: '2px' }}>
                  {t.event}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{ background: 'var(--cream)', padding: '80px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Come Visit</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--warm-dark)', lineHeight: 0.93, marginBottom: '16px' }}>
            COME SEE<br />
            <span style={{ color: 'var(--pink-deep)' }}>FOR YOURSELF</span>
          </h2>
          <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--muted)', marginBottom: '32px' }}>
            Find your nearest Dashing Diva branch and book your first appointment.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://linktr.ee/dashingdivaMY" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Book Now
            </a>
            <Link href="/salons" className="btn btn-ghost">
              Find a Salon →
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
