'use client'
import Link from 'next/link'

const pillars = [
  {
    number: '01',
    title: 'Purpose Built, Not Adapted',
    body: 'Most salons that offer a "Muslimah option" retrofit it. A curtain here, a private room if you book ahead. Dashing Diva was designed from day one with Muslimah women as the only brief. Nothing was added on later.',
  },
  {
    number: '02',
    title: 'The Same Standard Every Visit',
    body: "Every stylist trains to Bambang's curriculum before she works on a client. You don't get a great experience one visit and an inconsistent one the next depending on who's rostered.",
  },
  {
    number: '03',
    title: 'Close to Where You Already Are',
    body: "Quality hair shouldn't mean driving across the city or waiting three weeks for a slot. We're building a network so that the standard you'd expect from a flagship is available near you.",
  },
]

const timeline = [
  { year: '2005', event: 'Bambang Soteto establishes himself as one of Malaysia\'s leading hair professionals.', last: false },
  { year: '2007', event: 'Flagship Hairkunst Curve salon is built — the foundation of Bambang\'s legacy brand.', last: false },
  { year: '2017', event: 'The ladies-only concept takes shape — a Muslimah-first salon built from the ground up.', last: false },
  { year: '2018', event: 'Dashing Diva Shah Alam opens its doors as the first branch.', last: false },
  { year: '2019', event: 'Dashing Diva Damansara follows, expanding the network to PJ.', last: false },
  { year: '2021', event: 'Dashing Diva Plaza Damas opens in Sri Hartamas, KL.', last: false },
  { year: '2025', event: 'Hairkunst Hijabis Luxe is ready to serve in Bangi.', last: false },
  { year: 'Today', event: 'Multiple outlets across the Klang Valley — with more to come.', last: true },
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
      <section className="sp" style={{ background: 'var(--cream)', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="rg-2" style={{ maxWidth: '1100px', margin: '0 auto', gap: '80px', alignItems: 'center' }}>

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
              Dashing Diva is a muslimah salon in KL built around one brief: give Muslimah women a space that actually works for them. Not one where you plan around the floor layout, worry about who might walk in, or settle for a private room if one happens to be free.
            </p>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--muted)', marginBottom: '18px' }}>
              So we built the whole salon around you. Every corner, every hire, every decision made with one person in mind.
            </p>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--muted)' }}>
              Every branch runs under the license and training of Bambang Soteto. His techniques, his standards, his curriculum. You get that whether you walk into Plaza Damas or Shah Alam.
            </p>
          </div>

        </div>
      </section>

      {/* ── THREE PILLARS ── */}
      <section className="sp" style={{ background: 'var(--cream-warm)', paddingTop: '64px', paddingBottom: '64px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="section-label">What We Stand For</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 48px)', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--warm-dark)', lineHeight: 0.93, marginBottom: '40px' }}>
            Our Pillars
          </h2>
          <div className="rg-3" style={{ gap: '20px' }}>
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
      <section className="sp" style={{ background: 'var(--blush)', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="rg-2" style={{ maxWidth: '1100px', margin: '0 auto', gap: '80px', alignItems: 'center' }}>

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
      <section className="sp" style={{ background: 'var(--warm-dark)', borderRadius: '0 0 var(--r-lg) var(--r-lg)', paddingTop: '80px', paddingBottom: '80px' }}>
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
      <section className="sp" style={{ background: 'var(--cream)', paddingTop: '80px', paddingBottom: '80px', textAlign: 'center' }}>
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
