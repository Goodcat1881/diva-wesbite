import Link from 'next/link'

export const metadata = {
  title: 'Our Salon Locations',
  description: 'Find your nearest Dashing Diva branch — Plaza Damas (Sri Hartamas, KL), Shah Alam, and Damansara. Book via Fresha or WhatsApp us directly.',
  openGraph: {
    title: 'Our Salon Locations — KL, Shah Alam & Damansara | Dashing Diva',
    description: 'Dashing Diva has 3 Muslimah hair salon branches: Plaza Damas KL, Shah Alam, and Mutiara Damansara. Women-only, walk-ins welcome.',
    url: 'https://www.dashingdiva.my/salons',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const salons = [
  {
    bg: 'var(--blush)',
    photo: '/images/salon-plazadamas-waiting.webp',
    photoPosition: 'center center',
    name: 'Plaza Damas',
    area: 'Sri Hartamas, KL',
    hours: 'Mon – Sun: 10am – 7pm',
    address: 'M-0-13, Block M, Plaza Damas, Jalan Sri Hartamas 1, Taman Sri Hartamas, 50480 Kuala Lumpur',
    slug: '/salons/plaza-damas',
    maps: 'https://www.google.com/maps/search/?api=1&query=M-0-13+Block+M+Plaza+Damas+Jalan+Sri+Hartamas+1+Taman+Sri+Hartamas+50480+Kuala+Lumpur',
    fresha: 'https://www.fresha.com/a/dashing-diva-plaza-damas-kuala-lumpur-plaza-damas-no-60-jalan-sri-hartamas-1-hyt9ekup/all-offer?venue=true&utm_source=website&utm_medium=referral&utm_campaign=plaza-damas',
  },
  {
    bg: 'var(--pink)',
    photo: '/images/salon-shahalam.webp',
    photoPosition: 'center center',
    name: 'Shah Alam',
    area: 'Shah Alam, Selangor',
    hours: 'Mon – Sat: 10am – 7pm',
    address: 'Kompleks PKNS Shah Alam, Lot G-13A Mezzanine Floor, 40000 Shah Alam, Selangor',
    maps: 'https://www.google.com/maps/search/?api=1&query=Kompleks+PKNS+Shah+Alam+Lot+G-13A+Mezzanine+Floor+40000+Shah+Alam+Selangor',
    fresha: 'https://www.fresha.com/ms/a/dashing-diva-shah-alam-shah-alam-kompleks-pkns-kqb0kre7/all-offer?venue=true&utm_source=website&utm_medium=referral&utm_campaign=shah-alam',
  },
  {
    bg: 'var(--cream-warm)',
    photo: '/images/salon-interior-1.jpg',
    photoPosition: 'center center',
    name: 'Damansara',
    area: 'Mutiara Damansara, PJ',
    hours: 'Mon – Sat: 11am – 8pm',
    address: 'Hair Library, 21, Jalan PJU 7/7a, Mutiara Damansara, 47800 Petaling Jaya, Selangor',
    maps: 'https://www.google.com/maps/search/?api=1&query=Hair+Library+21+Jalan+PJU+7+7a+Mutiara+Damansara+47800+Petaling+Jaya+Selangor',
    fresha: 'https://www.fresha.com/a/dashing-diva-damansara-petaling-jaya-hair-library-bangunan-sterling-group-21-jalan-pju-7-7a-o9dwyt9p/all-offer?venue=true&utm_source=website&utm_medium=referral&utm_campaign=damansara',
  },
]

export default function SalonsPage() {
  return (
    <main>

      {/* ── PAGE HEADER ── */}
      <section className="page-hero">
        <div className="section-label">Locations</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(52px, 8vw, 88px)', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--warm-dark)', lineHeight: 0.93, marginTop: '8px', marginBottom: '16px' }}>
          FIND YOUR<br />
          <span style={{ color: 'var(--pink-deep)' }}>NEAREST SALON</span>
        </h1>
        <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--muted)', maxWidth: '460px' }}>
          Three branches across Kuala Lumpur and Selangor. Women-only. Walk-ins welcome.
        </p>
      </section>

      {/* ── SALON CARDS ── */}
      <section className="sp" style={{ background: 'var(--cream)', paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="rg-3" style={{ maxWidth: '1100px', margin: '0 auto', gap: '20px' }}>
          {salons.map((s, i) => (
            <div key={i} className="card" style={{ overflow: 'hidden', padding: 0 }}>
              {/* Image */}
              <div style={{ height: '300px', background: s.bg, overflow: 'hidden', position: 'relative' }}>
                {s.photo
                  ? <img src={s.photo} alt={`Dashing Diva ${s.name}`} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: s.photoPosition || 'center', display: 'block' }} />
                  : <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontFamily: 'var(--font-label)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)' }}>Photo Coming Soon</span>
                    </div>
                }
              </div>
              {/* Info */}
              <div style={{ padding: '22px 22px 26px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', textTransform: 'uppercase', color: 'var(--warm-dark)', lineHeight: 1.05, marginBottom: '4px' }}>
                  DASHING DIVA<br />{s.name}
                </div>
                <div style={{ fontFamily: 'var(--font-label)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--pink-deep)', marginBottom: '14px' }}>
                  {s.area}
                </div>
                <div style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '4px' }}>
                  <span style={{ fontWeight: 600, color: 'var(--warm-mid)' }}>Hours: </span>{s.hours}
                </div>
                <div style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '18px' }}>
                  {s.address}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a href={s.fresha} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
                    Book at This Salon
                  </a>
                  <a href={s.maps} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
                    Get Directions
                  </a>
                  {s.slug && (
                    <Link href={s.slug} className="text-link" style={{ textAlign: 'center', fontSize: '12px', paddingTop: '4px' }}>
                      View full branch page →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


    </main>
  )
}
