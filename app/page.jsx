'use client'
import Link from 'next/link'

/* ── Data ── */
const services = [
  { num: '01', icon: '✂️', name: 'HAIRCUT &\nSTYLING',   price: 'From RM 15',   desc: 'Precision cuts and finish styling tailored to your face shape and hijab lifestyle.',  bg: 'var(--blush)',      accent: 'var(--pink-deep)' },
  { num: '02', icon: '🌈', name: 'HAIR\nCOLOURING',      price: 'From RM 120',  desc: 'Subtle highlights to full transformations — halal-friendly Gumash colour available.',  bg: 'var(--pink)',       accent: 'var(--warm-dark)' },
  { num: '03', icon: '🍎', name: 'HAIR\nTREATMENTS',     price: 'From RM 140',  desc: 'Repair, hydrate and strengthen — customised to your hair type and condition.',         bg: 'var(--cream-warm)', accent: 'var(--pink-deep)' },
  { num: '04', icon: '👩🏽‍🦱', name: 'REBONDING\n& PERMING', price: 'From RM 170',  desc: "Long-lasting texture services — rebonding, keratin, and perms done with care.",       bg: 'var(--pink-light)', accent: 'var(--warm-dark)' },
]

const reviews = [
  { quote: "Love love love this gem of a salon ❤️ Prices are super reasonable and quality of service is top-notch!! Will definitely be coming back again.", author: 'Debra C.', source: 'Google' },
  { quote: "On vacation in KL and a fan of keratin straightening, I took the opportunity to come to the salon. I am more than satisfied with the result which is simply sublime. Kristina knew how to listen and above all had a gentleness. I recommend this salon to everyone.", author: 'Sonia El M.', source: 'Google' },
  { quote: "Always love how they colour my hair here! My go-to place for hair colouring. Reasonably priced with amazing results — the colour lasts for months. One of my favourite salons.", author: 'Alisa Z.', source: 'Google' },
  { quote: "AMAZING service — they provide complimentary drinks and snacks, they are so gentle with your hair. Ask for Tina as your hairstylist, she's so particular about your hair and will give you the best service.", author: 'Lavender', source: 'Google' },
  { quote: "This place is just wow! I had a beautiful experience with their keratin treatment and hair colouring. Past few years I had bad experiences with salons and this place fixed all that. This will be my forever go-to salon.", author: 'Sandi J.', source: 'Google' },
  { quote: "Just recently had my hair done and the ladies did an amazing job on the colour and highlights. They were really kind and friendly, supportive of my choice of colour and explained the aftercare for my hair.", author: 'Alyssa S.', source: 'Google' },
  { quote: "I did colour & keratin here, the result is the best 😍 Environment also comfortable & beautiful! Recommended!", author: 'Ainaa', source: 'Google' },
  { quote: "Ask for Kak Tina — she was gentle and friendly throughout the whole process, gave me the exact dark brown shade I wanted. Thank you so much ❤️", author: 'Rania E.', source: 'Google' },
  { quote: "Comfy environment and Dila the hairstylist was really friendly! I liked my haircut as well.", author: 'Zi Ling T.', source: 'Google' },
]

const galleryItems = [
  { bg: 'var(--pink)',       label: 'Colour',          photo: '/images/gallery-colour-01.jpg' },
  { bg: 'var(--blush)',      label: 'Highlights',      photo: '/images/gallery-highlights-04.jpg' },
  { bg: 'var(--cream-warm)', label: 'Fashion Colour',  photo: '/images/gallery-colour-08.jpg' },
  { bg: 'var(--blush)',      label: 'Blowout & Style', photo: '/images/gallery-blowout-02.jpg' },
  { bg: 'var(--pink)',       label: 'Treatment',       photo: '/images/gallery-treatments-01.jpg' },
  { bg: 'var(--cream-warm)', label: 'Colour',          photo: '/images/gallery-colour-02.jpg' },
]

const salons = [
  { bg: 'var(--blush)',      photo: '/images/damas-1.avif',       name: 'Plaza Damas',  area: 'Sri Hartamas, KL',      hours: 'Mon – Sat: 10am – 8pm', address: 'M-0-13, Block M, Plaza Damas, Jalan Sri Hartamas 1, Taman Sri Hartamas, 50480 Kuala Lumpur' },
  { bg: 'var(--pink)',       photo: '/images/shahalam-1.avif',    name: 'Shah Alam',    area: 'Shah Alam, Selangor',   hours: 'Mon – Sat: 10am – 8pm', address: 'Kompleks PKNS Shah Alam, Lot G-13A Mezzanine Floor, 40000 Shah Alam, Selangor' },
  { bg: 'var(--cream-warm)', photo: '/images/hairlibrary-1.avif', name: 'Damansara',    area: 'Mutiara Damansara, PJ', hours: 'Mon – Sat: 10am – 8pm', address: 'Hair Library, 21, Jalan PJU 7/7a, Mutiara Damansara, 47800 Petaling Jaya, Selangor' },
]

export default function HomePage() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="rg-2" style={{ minHeight: '560px', background: 'var(--cream)' }}>

        {/* Left: copy */}
        <div className="sp" style={{ paddingTop: '64px', paddingBottom: '64px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '22px' }}>

          {/* Eyebrow badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'var(--yellow-soft)', border: '1px solid rgba(245,197,24,0.40)',
            borderRadius: 'var(--r-pill)', padding: '6px 16px',
            fontFamily: 'var(--font-label)', fontSize: '12px', fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--warm-dark)',
            width: 'fit-content',
          }}>
            ✦ Ladies Only
          </div>

          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(38px, 7vw, 72px)', lineHeight: 0.93, textTransform: 'uppercase', color: 'var(--warm-dark)', letterSpacing: '0.02em', margin: 0 }}>
            The Muslimah Salon<br />
            <span style={{ color: 'var(--pink-deep)' }}>You've Been Looking For</span>
          </h1>

          <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--muted)', maxWidth: '380px', margin: 0 }}>
            Most salons give you one private room if you're lucky enough to book it in time, and no guarantee the stylist available is a woman. At Dashing Diva, the whole salon is private. Every stylist is a woman. And the price covers what you came for, nothing else.
          </p>

          {/* CTA buttons */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="https://www.fresha.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Book Your Appointment
            </a>
            <Link href="/services" className="btn btn-ghost">
              Our Services
            </Link>
          </div>

        </div>

        {/* Right: hero image panel */}
        <div className="hero-img-panel" style={{
          position: 'relative', overflow: 'hidden',
          background: 'var(--blush)',
          borderRadius: '0 0 0 var(--r-lg)',
          minHeight: '560px',
        }}>
          <img
            src="/images/hero-02.png"
            alt="Dashing Diva — beautiful hair transformation"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', position: 'absolute', inset: 0 }}
          />
        </div>
      </section>

      {/* ══ PILLARS ══ */}
      <section className="rg-4 sp" style={{ gap: '16px', background: 'var(--cream)', paddingTop: '40px', paddingBottom: '40px' }}>
        {[
          { icon: '🔒', title: 'Fully Women Only', body: "From the person who cuts your hair to the one who makes your tea, every staff member here is a woman. You don't need to call ahead and ask. It's the whole point." },
          { icon: '✂️', title: 'Craft You Can See in Every Result', body: 'Bambang Soteto built his name doing the work properly. Every service here follows the same approach. No rushing, no shortcuts. You\'ll see it in the result.' },
          { icon: '💛', title: 'Honest Prices Shown Upfront', body: 'Before you sit down, you know what it costs. No private room fee on top, no surprise at checkout.' },
          { icon: '🛡️', title: 'Fixed Within 7 Days, No Charge', body: "Not happy with how it turned out? Tell us within 7 days. We'll sort it. No awkward conversation required." },
        ].map((p, i) => (
          <div key={i} className="card" style={{ padding: '28px 24px' }}>
            <div style={{
              width: '40px', height: '40px', borderRadius: '12px',
              background: 'var(--blush)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '18px', marginBottom: '16px',
            }}>
              {p.icon}
            </div>
            <h3 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--warm-dark)', marginBottom: '8px', lineHeight: 1.4 }}>{p.title}</h3>
            <p style={{ fontSize: '12px', lineHeight: 1.75, color: 'var(--muted)', margin: 0 }}>{p.body}</p>
          </div>
        ))}
      </section>

      {/* ══ SERVICES ══ */}
      <section className="sp" style={{ paddingTop: '64px', paddingBottom: '64px', background: 'var(--cream-warm)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div className="section-label">What we offer</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 0.93, textTransform: 'uppercase', color: 'var(--warm-dark)', letterSpacing: '0.02em' }}>
              SERVICES &<br />PRICING
            </div>
          </div>
          <Link href="/services" className="text-link">See all services →</Link>
        </div>
        <div className="rg-4" style={{ gap: '16px' }}>
          {services.map((s, i) => (
            <div key={i} style={{
              background: s.bg,
              borderRadius: 'var(--r-md)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 'var(--shadow-card)',
            }}>
              {/* Top: number + icon */}
              <div style={{ padding: '28px 24px 0', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '72px',
                  lineHeight: 1,
                  color: s.accent,
                  opacity: 0.12,
                  letterSpacing: '-0.02em',
                  userSelect: 'none',
                }}>
                  {s.num}
                </span>
                <span style={{ fontSize: '28px', marginTop: '6px' }}>{s.icon}</span>
              </div>

              {/* Service name */}
              <div style={{ padding: '0 24px 0', marginTop: '-16px' }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '26px',
                  textTransform: 'uppercase',
                  color: 'var(--warm-dark)',
                  lineHeight: 1.0,
                  whiteSpace: 'pre-line',
                  letterSpacing: '0.01em',
                }}>
                  {s.name}
                </div>
              </div>

              {/* Divider */}
              <div style={{ margin: '18px 24px', height: '1px', background: 'rgba(42,21,32,0.08)' }} />

              {/* Price + desc */}
              <div style={{ padding: '0 24px 26px', display: 'flex', flexDirection: 'column', gap: '10px', flexGrow: 1 }}>
                <div style={{
                  alignSelf: 'flex-start',
                  background: 'var(--yellow-soft)',
                  borderRadius: 'var(--r-pill)',
                  padding: '4px 14px',
                  fontFamily: 'var(--font-label)',
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  color: 'var(--warm-dark)',
                  border: '1px solid rgba(245,197,24,0.40)',
                }}>
                  {s.price}
                </div>
                <p style={{ fontSize: '13px', lineHeight: 1.65, color: 'var(--muted)', margin: 0 }}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ FOUNDER ══ */}
      <section className="rg-founder" style={{
        background: 'var(--warm-dark)',
        borderRadius: '0 0 var(--r-lg) var(--r-lg)',
        overflow: 'hidden',
      }}>
        {/* Photo col */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '52px 28px' }}>
          <div style={{
            width: '200px', height: '260px',
            borderRadius: 'var(--r-md)',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
            background: 'rgba(255,255,255,0.05)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <img
              src="/images/bambang-9.jpeg"
              alt="Bambang Soteto"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
            />
            <div style={{ display: 'none', flexDirection: 'column', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.25)' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Text col */}
        <div style={{ padding: '64px 40px 64px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '14px', borderRight: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="section-label section-label-light">Our Creative Director</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 44px)', lineHeight: 0.93, textTransform: 'uppercase', color: '#FFFFFF' }}>
            THE MIND<br />BEHIND<br /><span style={{ color: 'var(--pink)' }}>DASHING DIVA</span>
          </div>
          <div style={{ fontFamily: 'var(--font-label)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted-lt)' }}>
            Bambang Soteto — Founder &amp; Creative Director
          </div>
          <p style={{ fontSize: '14px', lineHeight: 1.8, color: 'rgba(255,255,255,0.50)', margin: 0 }}>
            Bambang Soteto founded Hairkunst and spent years as one of Malaysia's most booked hairstylists. Dashing Diva came from something he kept seeing: women who couldn't get that standard of work done in a space that actually worked for them. So he built one, from the ground up, with you in mind.
          </p>
          <div style={{ marginTop: '4px' }}>
            <Link href="/bambang" className="btn btn-ghost" style={{ color: 'rgba(255,255,255,0.75)', borderColor: 'rgba(255,255,255,0.25)' }}>
              Meet Bambang →
            </Link>
          </div>
        </div>

        {/* Stats col */}
        <div style={{ padding: '64px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0' }}>
          {[
            { num: '25',  label: 'Years in the craft' },
            { num: '5',   label: 'Years trained across Europe — Germany, UK & Austria' },
            { num: '9',   label: 'Salon locations built across his brands' },
          ].map((stat, i, arr) => (
            <div key={i} style={{
              padding: '28px 0',
              borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              display: 'flex', flexDirection: 'column', gap: '4px',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '52px',
                lineHeight: 1,
                letterSpacing: '-0.01em',
                color: 'var(--pink)',
              }}>
                {stat.num}
              </div>
              <div style={{
                fontFamily: 'var(--font-label)',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.40)',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ GALLERY ══ */}
      <section className="sp" style={{ paddingTop: '64px', paddingBottom: '64px', background: 'var(--cream)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '28px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div className="section-label">Portfolio</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 0.93, textTransform: 'uppercase', color: 'var(--warm-dark)', letterSpacing: '0.02em' }}>
              THE WORK
            </div>
          </div>
          <Link href="/gallery" className="text-link">See full gallery →</Link>
        </div>
        <div className="rg-3" style={{ gap: '16px' }}>
          {galleryItems.map((g, i) => (
            <GalleryItem key={i} bg={g.bg} label={g.label} photo={g.photo} />
          ))}
        </div>
      </section>

      {/* ══ REVIEWS ══ */}
      <section style={{ paddingTop: '64px', paddingBottom: '64px', background: 'var(--blush)', overflow: 'hidden' }}>
        {/* Header */}
        <div className="sp" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '36px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div className="section-label">Client Reviews</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 0.93, textTransform: 'uppercase', color: 'var(--warm-dark)', letterSpacing: '0.02em' }}>
              WHAT OUR<br />CLIENTS SAY
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--yellow)', fontSize: '18px', letterSpacing: '3px' }}>★★★★★</span>
            <span style={{ fontFamily: 'var(--font-label)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)' }}>Google Reviews</span>
          </div>
        </div>

        {/* Marquee ribbon */}
        <div className="reviews-ribbon-outer">
          <div className="reviews-ribbon-track">
            {[...reviews, ...reviews].map((r, i) => (
              <div key={i} className="reviews-ribbon-card">
                <div style={{ color: 'var(--yellow)', fontSize: '12px', letterSpacing: '2px', marginBottom: '12px' }}>★★★★★</div>
                <p style={{ fontSize: '13px', lineHeight: 1.75, color: 'var(--warm-mid)', fontStyle: 'italic', marginBottom: '16px', flexGrow: 1 }}>
                  "{r.quote}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                  <span style={{ fontFamily: 'var(--font-label)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--warm-dark)' }}>
                    {r.author}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-label)', fontSize: '9px', fontWeight: 700,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    background: 'var(--yellow-soft)', color: 'var(--warm-dark)',
                    padding: '3px 10px', borderRadius: 'var(--r-pill)',
                    border: '1px solid rgba(245,197,24,0.35)',
                    whiteSpace: 'nowrap',
                  }}>
                    {r.source}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SALONS ══ */}
      <section className="sp" style={{ paddingTop: '64px', paddingBottom: '64px', background: 'var(--cream-warm)' }}>
        <div style={{ marginBottom: '32px' }}>
          <div className="section-label">Locations</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 0.93, textTransform: 'uppercase', color: 'var(--warm-dark)', letterSpacing: '0.02em' }}>
            FIND YOUR<br />NEAREST SALON
          </div>
        </div>
        <div className="rg-3" style={{ gap: '16px' }}>
          {salons.map((s, i) => (
            <SalonCard key={i} salon={s} />
          ))}
        </div>
      </section>

      <style>{`
        /* ── Review ribbon ── */
        @keyframes ribbon-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .reviews-ribbon-outer {
          width: 100%;
          overflow: hidden;
          cursor: default;
        }
        .reviews-ribbon-track {
          display: flex;
          gap: 16px;
          width: max-content;
          animation: ribbon-scroll 40s linear infinite;
        }
        .reviews-ribbon-outer:hover .reviews-ribbon-track {
          animation-play-state: paused;
        }
        .reviews-ribbon-card {
          width: 320px;
          flex-shrink: 0;
          background: var(--white);
          border-radius: var(--r-md);
          box-shadow: var(--shadow-card);
          padding: 24px 22px;
          display: flex;
          flex-direction: column;
        }

        /* ── Gallery items ── */
        .gallery-item-label {
          opacity: 0;
          transition: opacity 200ms;
        }
        .gallery-item:hover .gallery-item-label {
          opacity: 1;
        }
        .gallery-item {
          transition: transform 200ms cubic-bezier(.34,1.56,.64,1);
        }
        .gallery-item:hover {
          transform: scale(1.02);
        }
        .salon-book-btn {
          display: block; width: 100%; margin-top: 14px;
          border-radius: var(--r-pill);
          background: transparent; color: var(--pink-deep);
          font-family: var(--font-body); font-size: 13px; font-weight: 600;
          padding: 11px 0; text-align: center;
          border: 1.5px solid var(--pink-mid);
          text-decoration: none;
          transition: all 200ms cubic-bezier(.34,1.56,.64,1);
          cursor: pointer;
        }
        .salon-book-btn:hover {
          background: var(--pink-deep);
          color: #fff;
          border-color: var(--pink-deep);
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(181,99,122,0.30);
        }

        /* ── Mobile overrides ── */
        @media (max-width: 768px) {
          /* Founder section: remove column divider on mobile */
          .rg-founder > *:nth-child(2) { border-right: none !important; }
          /* Founder stats: remove top padding on first stat when stacked */
          .rg-founder > *:last-child { padding-top: 0; }
        }
      `}</style>
    </>
  )
}

function GalleryItem({ bg, label, photo }) {
  return (
    <div className="gallery-item" style={{
      aspectRatio: '3/4',
      background: bg,
      borderRadius: 'var(--r-md)',
      position: 'relative', overflow: 'hidden',
      boxShadow: 'var(--shadow-card)',
      cursor: 'pointer',
    }}>
      {photo && (
        <img
          src={photo}
          alt={label}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', position: 'absolute', inset: 0 }}
        />
      )}
      <div className="gallery-item-label" style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: 'linear-gradient(to top, rgba(42,21,32,0.75) 0%, transparent 60%)',
        padding: '40px 18px 16px',
        fontFamily: 'var(--font-label)', fontSize: '10px', fontWeight: 700,
        letterSpacing: '0.1em', textTransform: 'uppercase',
        color: '#FFFFFF',
        borderRadius: '0 0 var(--r-md) var(--r-md)',
      }}>
        {label}
      </div>
    </div>
  )
}

function SalonCard({ salon: s }) {
  return (
    <div className="card" style={{ overflow: 'hidden' }}>
      {/* Image area */}
      <div style={{ height: '300px', background: s.bg, overflow: 'hidden', position: 'relative', borderRadius: 'var(--r-md) var(--r-md) 0 0' }}>
        {s.photo
          ? <img src={s.photo} alt={`Dashing Diva ${s.name}`} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
          : <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'var(--font-label)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)' }}>Photo Coming Soon</span>
            </div>
        }
      </div>
      {/* Card body */}
      <div style={{ padding: '20px 20px 24px' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', textTransform: 'uppercase', color: 'var(--warm-dark)', lineHeight: 1.05, marginBottom: '4px' }}>
          DASHING DIVA<br />{s.name}
        </div>
        <div style={{ fontFamily: 'var(--font-label)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--pink-deep)', marginBottom: '12px' }}>
          {s.area}
        </div>
        <div style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '2px' }}>{s.hours}</div>
        <div style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.65 }}>{s.address}</div>
        <a href="https://www.fresha.com" target="_blank" rel="noopener noreferrer" className="salon-book-btn">
          Book at This Salon
        </a>
      </div>
    </div>
  )
}
