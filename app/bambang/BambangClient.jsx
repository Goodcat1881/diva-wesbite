'use client'
import Link from 'next/link'

const credentials = [
  {
    period: '2001 – 2005',
    title: 'European Training',
    body: "Trained intensively across Mannheim, London and Vienna — five years building a foundation that most hairdressers never get.",
  },
  {
    period: '2003 – 2006',
    title: 'Trainer, Headquarters Academy',
    body: "Worked as a trainer at one of Vienna's most respected hair academies before returning to Malaysia.",
  },
  {
    period: '2007 – present',
    title: 'Founder, Hairkunst',
    body: "Built Hairkunst from a single location at The Curve into Malaysia's premier hairdressing brand, with salons in KLCC, Mont Kiara and Shah Alam.",
  },
  {
    period: '2010 – 2012',
    title: 'Schwarzkopf Brand Ambassador',
    body: "Selected as the only Bumiputera hairdresser to represent Schwarzkopf across Asia — Malaysia, Shanghai, Vietnam, Jakarta, Hong Kong and Macau.",
  },
  {
    period: '2013 – present',
    title: 'Founder, BUHA',
    body: "Established the Bumiputera Hairdressing Association to ensure Malay hairdressers have a fair stake in the industry.",
  },
  {
    period: '2018 – 2020',
    title: "L'Oréal Ambassador",
    body: "Appointed as L'Oréal Malaysia ambassador — one of the most recognised roles in the local hair industry.",
  },
]

const pressLogos = [
  { src: '/images/press/press-nona.png',        alt: 'Majalah Nona',   h: 36 },
  { src: '/images/press/press-cleo.png',         alt: 'CLEO Malaysia',  h: 32 },
  { src: '/images/press/press-rapi.png',         alt: 'Majalah Rapi',   h: 34 },
  { src: '/images/press/press-harian-metro.png', alt: 'Harian Metro',   h: 48 },
  { src: '/images/press/press-impiana.png',      alt: 'Majalah Impiana',h: 36 },
  { src: '/images/press/press-astro.png',        alt: 'Astro',          h: 32 },
  { src: '/images/press/press-sunsilk.png',      alt: 'Sunsilk',        h: 38 },
]

export default function BambangPage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section style={{ background: 'var(--warm-dark)', overflow: 'hidden' }}>
        <div className="rg-bambang" style={{ maxWidth: '1100px', margin: '0 auto', minHeight: '520px' }}>

          {/* Hero photo */}
          <div style={{ overflow: 'hidden', minHeight: '520px' }}>
            <img
              src="/images/bambang-5.jpeg"
              alt="Bambang Soteto"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
          </div>

          {/* Copy */}
          <div className="sp" style={{ paddingTop: '72px', paddingBottom: '72px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="section-label section-label-light">Our Founder</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 6vw, 80px)', letterSpacing: '0.02em', textTransform: 'uppercase', color: '#FFFFFF', lineHeight: 0.92, marginBottom: '8px' }}>
              BAMBANG{' '}
              <span style={{ color: 'var(--pink)' }}>SOTETO</span>
            </h1>
            <p style={{ fontFamily: 'var(--font-label)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--muted-lt)', marginBottom: '24px' }}>
              Founder, Hairkunst &amp; Dashing Diva
            </p>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(255,255,255,0.60)', maxWidth: '400px' }}>
              Malaysia's most recognised hairstylist, with over two decades in the industry and training across Germany, the UK and Austria. The standard Dashing Diva is built on is his.
            </p>
          </div>

        </div>
      </section>

      {/* ── CREDENTIALS ── */}
      <section className="sp" style={{ background: 'var(--cream)', paddingTop: '64px', paddingBottom: '64px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="section-label">Career</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 48px)', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--warm-dark)', lineHeight: 0.93, marginBottom: '40px' }}>
            Credentials
          </h2>
          <div className="rg-3" style={{ gap: '16px' }}>
            {credentials.map((c) => (
              <div key={c.title} className="card" style={{ padding: '28px 24px' }}>
                <p style={{ fontFamily: 'var(--font-label)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--pink-deep)', marginBottom: '10px' }}>
                  {c.period}
                </p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--warm-dark)', marginBottom: '10px', lineHeight: 1.1 }}>
                  {c.title}
                </h3>
                <p style={{ fontSize: '13px', lineHeight: 1.7, color: 'var(--muted)' }}>
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="sp" style={{ background: 'var(--cream-warm)', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="rg-2" style={{ maxWidth: '1100px', margin: '0 auto', gap: '80px', alignItems: 'start' }}>

          {/* Photo */}
          <div style={{ position: 'sticky', top: '88px' }}>
            <div style={{ borderRadius: 'var(--r-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-soft)', aspectRatio: '3/4' }}>
              <img
                src="/images/bambang-6.jpeg"
                alt="Bambang Soteto"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
            </div>
          </div>

          {/* Story copy */}
          <div>
            <div className="section-label">The Story</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '44px', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--warm-dark)', lineHeight: 0.93, marginBottom: '28px' }}>
              A Career Built on Craft
            </h2>

            {[
              "Most hairstylists learn what works locally, for local clients, in local salons. Bambang went the other way. Between 2001 and 2005 he trained across Mannheim, London and Vienna, then stayed on to teach at one of Vienna's academies before coming home. Not to collect experience on a CV. To understand the underlying science that most hairdressers here had no access to: what the hair shaft actually responds to, why a colour holds for months instead of weeks, what a cut needs to do before it needs to look good.",
              "That knowledge is what came back with him. Hairkunst opened in 2007 and became the salon other salons measured themselves against. His methods are why.",
              "In 2013 he founded BUHA, the Bumiputera Hairdressing Association, because Malay hairdressers were being cut out of an industry they helped build. That tells you something about how he operates.",
              "Dashing Diva is what he built next, and he built it specifically for you. Not a rebrand, not a side project. A salon designed around what Muslimah women actually need: a fully private space, an all-women team, and the same standard of work he spent two decades refining. Every stylist here trains to his curriculum. When you sit in that chair, that's what you're getting.",
            ].map((para, i) => (
              <p key={i} style={{ fontSize: '15px', lineHeight: 1.85, color: 'var(--muted)', marginBottom: '20px' }}>{para}</p>
            ))}
          </div>

        </div>
      </section>

      {/* ── FEATURED IN MARQUEE ── */}
      <section style={{ background: 'var(--white)', padding: '40px 0', overflow: 'hidden', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <p style={{ fontFamily: 'var(--font-label)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted-lt)', marginBottom: '24px', textAlign: 'center' }}>
          As Seen In
        </p>
        <style>{`
          @keyframes marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            display: flex;
            align-items: center;
            width: max-content;
            animation: marquee 28s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
          .press-logo {
            filter: grayscale(100%);
            opacity: 0.45;
            transition: filter 300ms, opacity 300ms;
          }
          .press-logo:hover {
            filter: grayscale(0%);
            opacity: 1;
          }
        `}</style>
        <div style={{ overflow: 'hidden' }}>
          <div className="marquee-track">
            {[...pressLogos, ...pressLogos].map((logo, i) => (
              <div key={i} style={{
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 48px',
                borderRight: '1px solid var(--border)',
              }}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="press-logo"
                  style={{ height: `${logo.h}px`, width: 'auto', display: 'block' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <section className="sp" style={{ background: 'var(--blush)', paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--pink-mid)', paddingLeft: '32px' }}>
            <p style={{ fontSize: 'clamp(17px, 2.5vw, 22px)', lineHeight: 1.7, color: 'var(--warm-dark)', fontStyle: 'italic', marginBottom: '20px' }}>
              &ldquo;Muslim women were stuck navigating a choice that shouldn&rsquo;t exist — go somewhere good, and feel out of place, or go somewhere that felt right, and the quality wasn&rsquo;t there. That&rsquo;s not acceptable to me. So I built a third option.&rdquo;
            </p>
            <p style={{ fontFamily: 'var(--font-label)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--pink-deep)' }}>
              Bambang Soteto — on why he created Dashing Diva
            </p>
          </div>
        </div>
      </section>

      {/* ── HAIRKUNST FLAGSHIP ── */}
      <section className="sp" style={{ background: 'var(--warm-dark)', borderRadius: '0 0 var(--r-lg) var(--r-lg)', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="rg-2" style={{ maxWidth: '1100px', margin: '0 auto', gap: '64px', alignItems: 'center' }}>

          {/* Copy */}
          <div>
            <div className="section-label section-label-light">His Flagship Brand</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '56px', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--pink)', lineHeight: 0.93, marginBottom: '20px' }}>
              Hairkunst
            </h2>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(255,255,255,0.55)', marginBottom: '28px' }}>
              Before Dashing Diva, there was Hairkunst — the salon Bambang built from the ground up in 2007 at The Curve, Mutiara Damansara. It became the benchmark for premium hairdressing in Malaysia, and the standard every Dashing Diva stylist is trained to.
            </p>
            <a
              href="https://hairkunst.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              style={{ color: 'rgba(255,255,255,0.75)', borderColor: 'rgba(255,255,255,0.25)' }}
            >
              Visit Hairkunst →
            </a>
          </div>

          {/* Photo */}
          <div style={{ borderRadius: 'var(--r-md)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.10)', aspectRatio: '4/3', boxShadow: '0 8px 32px rgba(0,0,0,0.30)' }}>
            <img
              src="/images/hairkunst-1.avif"
              alt="Hairkunst Salon"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
          </div>

        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="sp" style={{ background: 'var(--cream)', paddingTop: '72px', paddingBottom: '72px' }}>
        <div className="rg-cta" style={{ maxWidth: '1100px', margin: '0 auto', gap: '48px' }}>
          <p style={{ fontSize: '17px', lineHeight: 1.7, color: 'var(--warm-dark)', maxWidth: '540px' }}>
            The standard Bambang built Hairkunst on is the same standard Dashing Diva holds itself to — at a price point that works for everyone.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            <a href="https://linktr.ee/dashingdivaMY" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Book Your Appointment
            </a>
            <Link href="/about" className="btn btn-ghost">
              About Dashing Diva
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
