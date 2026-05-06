import Link from 'next/link'

/* ── SEO Metadata ── */
export const metadata = {
  title: 'Muslimah Hair Salon in Shah Alam | Dashing Diva PKNS',
  description: 'Dashing Diva Shah Alam at Kompleks PKNS. Women-only Muslimah hair salon serving Seksyen 6, 7, 9, 14 and surrounding Shah Alam areas. Book via Fresha.',
  openGraph: {
    title: 'Dashing Diva Shah Alam: Muslimah Hair Salon at Kompleks PKNS',
    description: 'Women-only Muslimah hair salon at Kompleks PKNS Shah Alam. Quality cuts, colour, keratin & treatments for hijab wearers and all women in Selangor.',
    url: 'https://www.dashingdiva.my/salons/shah-alam',
    images: [{ url: '/images/salon-shahalam.webp', width: 1400, height: 972, alt: 'Dashing Diva Shah Alam Muslimah Hair Salon Interior, Kompleks PKNS' }],
  },
  alternates: {
    canonical: 'https://www.dashingdiva.my/salons/shah-alam',
  },
}

/* ── Branch JSON-LD ── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: 'Dashing Diva Shah Alam',
  description: 'Women-only Muslimah hair salon at Kompleks PKNS, Shah Alam. Haircuts, colouring, keratin, rebonding, and scalp treatments for hijab wearers and all women in Shah Alam and surrounding Selangor areas.',
  url: 'https://www.dashingdiva.my/salons/shah-alam',
  image: 'https://www.dashingdiva.my/images/salon-shahalam.webp',
  priceRange: 'RM 15 – RM 700+',
  currenciesAccepted: 'MYR',
  paymentAccepted: 'Cash, Credit Card',
  openingHours: 'Mo-Su 10:00-19:00',
  telephone: '+60125889073',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kompleks PKNS Shah Alam, Lot G-13A Mezzanine Floor',
    addressLocality: 'Shah Alam',
    addressRegion: 'Selangor',
    postalCode: '40000',
    addressCountry: 'MY',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 3.0707,
    longitude: 101.5170,
  },
  hasMap: 'https://www.google.com/maps/search/?api=1&query=Kompleks+PKNS+Shah+Alam+Lot+G-13A+Mezzanine+Floor+40000+Shah+Alam+Selangor',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '263',
  },
  sameAs: [
    'https://www.instagram.com/dashingdivamalaysia/',
    'https://www.fresha.com/ms/a/dashing-diva-shah-alam-shah-alam-kompleks-pkns-kqb0kre7/all-offer?venue=true',
  ],
  parentOrganization: {
    '@type': 'Organization',
    name: 'Dashing Diva Malaysia',
    url: 'https://www.dashingdiva.my',
  },
}

/* ── FAQ JSON-LD ── */
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Dashing Diva Shah Alam a women-only salon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dashing Diva Shah Alam is a fully women-only salon. Every stylist and staff member is a woman. No mixed-gender sections, no private room bookings required. The entire salon is women-only at all times.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Dashing Diva Shah Alam located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are located at Lot G-13A, Mezzanine Floor, Kompleks PKNS Shah Alam, 40000 Shah Alam, Selangor. Kompleks PKNS is a central landmark in Shah Alam and is accessible from the surrounding residential and commercial areas.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the opening hours at Shah Alam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Shah Alam branch is open Monday to Sunday, 10am to 7pm. We are open every day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you accept walk-ins at Shah Alam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, walk-ins are welcome. To avoid waiting, you can book in advance via Fresha or WhatsApp us directly before coming in.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which areas near Shah Alam do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are in central Shah Alam at Kompleks PKNS, a short drive from Seksyen 6, Seksyen 7, Seksyen 9, and Seksyen 14. Clients also come in from Setia Alam, Kota Kemuning, Klang, Subang Jaya, and USJ.',
      },
    },
    {
      '@type': 'Question',
      name: 'What services are available at the Shah Alam branch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Shah Alam branch offers the full range of Dashing Diva services: haircuts, hair colouring, balayage, highlights, keratin treatments, rebonding, scalp treatments, Olaplex, and blowouts. All services are performed by female stylists in a fully women-only environment.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the difference between a Muslimah salon and a regular salon?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A Muslimah salon is women-only. No male staff, no male clients, no mixed-gender sections. For hijab wearers, that means you can remove your headscarf freely throughout your appointment. At Dashing Diva Shah Alam, the entire space operates this way, not just a private room at the back.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can non-Muslims visit Dashing Diva Shah Alam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The salon is open to all women regardless of religion or background. The women-only policy is about privacy and comfort for everyone. If you want a good salon where you can relax without being bothered, you are welcome here.',
      },
    },
  ],
}

/* ── Breadcrumb JSON-LD ── */
const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',       item: 'https://www.dashingdiva.my' },
    { '@type': 'ListItem', position: 2, name: 'Salons',     item: 'https://www.dashingdiva.my/salons' },
    { '@type': 'ListItem', position: 3, name: 'Shah Alam',  item: 'https://www.dashingdiva.my/salons/shah-alam' },
  ],
}

/* ── Data ── */
const pillars = [
  { icon: '🔒', title: 'Fully Women Only',             body: "Every stylist and every staff member here is a woman. You don't need to call ahead and ask. It's the whole point." },
  { icon: '✂️', title: 'Craft You Can See',            body: "Ameera has been doing this for eleven years. Every service at Shah Alam follows the same standard. No rushing, no shortcuts." },
  { icon: '💛', title: 'Honest Prices, Shown Upfront', body: 'Before you sit down, you know what it costs. No private room fee on top. No surprise at checkout.' },
  { icon: '🛡️', title: 'Fixed Within 7 Days',         body: "Not happy with the result? Tell us within 7 days and we'll sort it. No awkward conversation required." },
]

const services = [
  { icon: '✂️', name: 'Haircut & Styling',       price: 'From RM 15',  desc: 'Precision cuts tailored to your face shape and hijab lifestyle.',                                bg: 'var(--blush)',      accent: 'var(--pink-deep)' },
  { icon: '🌈', name: 'Hair Colouring',           price: 'From RM 120', desc: 'A tonal refresh or a full colour change, your call. Halal-friendly Gumash colour available.',   bg: 'var(--pink)',       accent: 'var(--warm-dark)' },
  { icon: '🍎', name: 'Keratin & Rebonding',      price: 'From RM 170', desc: 'Long-lasting smoothing and straightening treatments, done with care and no shortcuts.',          bg: 'var(--cream-warm)', accent: 'var(--pink-deep)' },
  { icon: '💆', name: 'Scalp & Hair Treatments',  price: 'From RM 140', desc: 'Repair, hydrate and strengthen. Customised to your hair type and condition.',                   bg: 'var(--pink-light)', accent: 'var(--warm-dark)' },
]

const galleryItems = [
  { bg: 'var(--pink)',       label: 'Colour',          photo: '/images/gallery-colour-03.jpg' },
  { bg: 'var(--blush)',      label: 'Highlights',      photo: '/images/gallery-highlights-02.jpg' },
  { bg: 'var(--cream-warm)', label: 'Fashion Colour',  photo: '/images/gallery-colour-07.jpg' },
  { bg: 'var(--blush)',      label: 'Blowout & Style', photo: '/images/gallery-blowout-03.jpg' },
  { bg: 'var(--pink)',       label: 'Treatment',       photo: '/images/gallery-treatments-02.jpg' },
  { bg: 'var(--cream-warm)', label: 'Highlights',      photo: '/images/gallery-highlights-05.jpg' },
]

const reviews = [
  { quote: "Had a great experience at Dashing Diva Salon! I booked through ClassPass and went for a scalp treatment, wash, cut, and blow. Everything was done so professionally. It's also a Muslimah-friendly salon, which made me feel even more comfortable and at ease. My hairstylist, Mera, was amazing. Her service was top-notch, and she explained every step clearly, which made me feel really comfortable and confident throughout the session. Highly recommended, and I will definitely come again!", author: 'n.hazwani izzati' },
  { quote: "I just did a wash and cut at this salon with stylist Aisya. She was really skilled, highly experienced and sweet! Will book for another appointment soon. Hehe", author: 'Deanna Abdul Halim' },
  { quote: "Coloured my hair here, love the services! Staffs are friendly, approachable and helpful advising what's best to take care of my hair. Definitely will come back again!", author: 'nisa nawar' },
  { quote: "Pleasant experience with hair stylist Amira, gave insights on a suitable length for my hair as my hair was thinning from repeated layered cuts. My hair is now back to looking healthy and easy to style. Haircut, wash and blow was RM40 and took around 30-40 minutes. Great price and hassle free.", author: 'Hanim Suhaila' },
]

const stylists = [
  {
    name: 'Yien',
    photo: '/images/yien-profile-pic.webp',
    alt: 'Yien, senior stylist at Dashing Diva Shah Alam, butterfly haircut and balayage specialist at Kompleks PKNS',
    years: 'Senior Stylist',
    joined: 'With Dashing Diva Since Year Two',
    personality: "She knew what she wanted at 19 and hasn't stopped since. Her regulars come back partly for the hair and partly because she already knows what they want before they sit down.",
    bio: "Yien got into hair at 19 and has not looked back. She joined Dashing Diva Shah Alam in the salon's second year, early enough to have shaped what it became. Butterfly cuts and blowouts are her signature, and she reads balayage the way some people read a map: without having to think about it.",
    specialisms: ['Butterfly Cut', 'Blowout', 'Balayage'],
    bg: 'var(--blush)',
  },
  {
    name: 'Aisyah',
    photo: '/images/aisyah-sa-final.webp',
    alt: 'Aisyah, hairstylist at Dashing Diva Shah Alam, blowout and styling specialist at Kompleks PKNS',
    years: '5 Years Experience',
    joined: null,
    personality: "Detail-driven and quietly confident. Her clients leave looking like they always looked that good. She just helped them get there.",
    bio: "Aisyah comes to Shah Alam with five years in the industry: four at Hanarich Salon and a year at Hannan Medispa, where she built a sharp eye for styling that works day-to-day, not just on the day. Blowouts and personalised styling are her calling card: practical, polished, and built to last. She believes great hairstyling starts with listening, understanding what a client needs before picking up a comb.",
    specialisms: ['Blowout', 'Styling', 'Client Consultation'],
    bg: 'var(--cream-warm)',
  },
  {
    name: 'Ameera',
    photo: '/images/ameera-sa-v3.webp',
    alt: 'Ameera, senior hairstylist at Dashing Diva Shah Alam, hair colour and treatment specialist at Kompleks PKNS',
    years: '11 Years Experience',
    joined: null,
    photoPos: 'center center',
    personality: "Eleven years in. She has regulars who have followed her from salon to salon. That does not happen by accident.",
    bio: "Ameera started her training at GIATMARA Shah Alam before building her career across some of the area's most established names: three years at Anggerik Saloon, five at Manjasari, then three years here at Dashing Diva Shah Alam. She is fluent in cuts, treatments and colour, and her loyal clients have been following her work for years. When you have that kind of track record, the results speak for themselves.",
    specialisms: ['Haircut', 'Hair Colour', 'Treatment'],
    bg: 'var(--pink-light)',
  },
]

const faqs = [
  { q: 'Is this a women-only salon?',                      a: 'Yes, entirely. Every stylist and staff member at Dashing Diva Shah Alam is a woman. No private room needed, no booking ahead to check. The whole space is women-only, all the time.' },
  { q: 'Where exactly is Dashing Diva Shah Alam?',         a: 'We are at Lot G-13A, Mezzanine Floor, Kompleks PKNS Shah Alam, 40000 Shah Alam, Selangor. Kompleks PKNS is a well-known landmark in the city centre. Most clients find us without any trouble.' },
  { q: 'What are your opening hours?',                     a: 'Monday to Sunday, 10am to 7pm. We are open every day.' },
  { q: 'Do you accept walk-ins?',                          a: "Walk-ins are welcome. If you want to avoid waiting, book ahead via Fresha or drop us a WhatsApp before coming in." },
  { q: 'Which areas near Shah Alam do you serve?',         a: "We are in central Shah Alam, so most clients come from nearby sections: Seksyen 6, Seksyen 7, Seksyen 9, and Seksyen 14. Clients also travel in from Setia Alam, Kota Kemuning, Klang, Subang Jaya, and USJ. Most are within 15 to 20 minutes of the salon." },
  { q: 'What services do you offer?',                      a: 'Full range: haircuts, colouring, balayage, highlights, keratin, rebonding, scalp treatments, Olaplex, and blowouts. All done by female stylists in a fully women-only space.' },
  { q: 'Is there a satisfaction guarantee?',               a: "Yes. Not happy with the result? Let us know within 7 days and we'll fix it at no charge." },
  { q: "What's the difference between a Muslimah salon and a regular salon?", a: "A Muslimah salon is women-only. No male staff, no male clients, no mixed-gender sections. For hijab wearers, that means you can remove your headscarf freely and be fully yourself throughout your appointment. At Dashing Diva, the entire space operates this way, not just a private room at the back." },
  { q: 'Can non-Muslims visit Dashing Diva?',              a: "Absolutely. The salon is open to all women regardless of religion or background. The women-only policy is about privacy and comfort for everyone, not exclusivity. If you want a good salon where you won't be bothered, you're welcome here." },
]

/* ══════════════════════════════════════════════════════ */

export default function ShahAlamPage() {
  return (
    <main>

      {/* ── JSON-LD ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* ══ 1. HERO ══ */}
      <section className="page-hero">
        <div className="section-label" style={{ marginBottom: '16px' }}>Shah Alam · Kompleks PKNS, Selangor</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(52px, 8vw, 88px)', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--warm-dark)', lineHeight: 0.93, marginBottom: '24px' }}>
          MUSLIMAH HAIR<br />
          <span style={{ color: 'var(--pink-deep)' }}>SALON SHAH ALAM</span>
        </h1>
        <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--muted)', maxWidth: '520px', marginBottom: '32px' }}>
          Dashing Diva Shah Alam is a fully women-only Muslimah hair salon at Kompleks PKNS. No private rooms, no booking ahead to check, no compromises. Every stylist is a woman. The whole space is yours.
        </p>
        {/* Trust strip */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span style={{ fontFamily: 'var(--font-label)', fontSize: '11px', fontWeight: 700, color: 'var(--warm-dark)' }}>4.9</span>
            <span style={{ color: 'var(--yellow)', fontSize: '11px', letterSpacing: '1px' }}>★★★★★</span>
            <span style={{ fontFamily: 'var(--font-label)', fontSize: '10px', color: 'var(--muted)' }}>(263)</span>
          </div>
          <span style={{ color: 'var(--border)', fontSize: '12px' }}>·</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <img src="/images/logo-fresha.png" alt="Fresha" style={{ height: '16px', width: 'auto', display: 'block' }} />
            <span style={{ fontFamily: 'var(--font-label)', fontSize: '11px', fontWeight: 700, color: 'var(--warm-dark)' }}>4.9</span>
            <span style={{ color: 'var(--yellow)', fontSize: '11px', letterSpacing: '1px' }}>★★★★★</span>
          </div>
          <span style={{ color: 'var(--border)', fontSize: '12px' }}>·</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <img src="/images/logo-classpass.png" alt="ClassPass" style={{ height: '16px', width: 'auto', display: 'block' }} />
            <span style={{ fontFamily: 'var(--font-label)', fontSize: '11px', fontWeight: 700, color: 'var(--warm-dark)' }}>4.8</span>
            <span style={{ color: 'var(--yellow)', fontSize: '11px', letterSpacing: '1px' }}>★★★★★</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href="https://www.fresha.com/ms/a/dashing-diva-shah-alam-shah-alam-kompleks-pkns-kqb0kre7/all-offer?venue=true&utm_source=website&utm_medium=referral&utm_campaign=shah-alam" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Book Now on Fresha
          </a>
          <a href="https://wa.me/60125889073" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            WhatsApp Us
          </a>
        </div>
      </section>

      {/* ══ 2. PILLARS — trust layer ══ */}
      <section className="sp" style={{ background: 'var(--cream)', paddingTop: '40px', paddingBottom: '40px' }}>
        <div className="rg-4" style={{ maxWidth: '1100px', margin: '0 auto', gap: '16px' }}>
          {pillars.map((p, i) => (
            <div key={i} className="card" style={{ padding: '28px 24px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--blush)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', marginBottom: '16px' }}>
                {p.icon}
              </div>
              <h3 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--warm-dark)', marginBottom: '8px', lineHeight: 1.4 }}>{p.title}</h3>
              <p style={{ fontSize: '12px', lineHeight: 1.75, color: 'var(--muted)', margin: 0 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ 3. BRANCH ESSENTIALS ══ */}
      <section className="sp" style={{ background: 'var(--cream-warm)', paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="rg-2" style={{ maxWidth: '1100px', margin: '0 auto', gap: '40px', alignItems: 'start' }}>

          {/* Left: info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="card" style={{ padding: '28px 28px 32px' }}>
              <div className="section-label" style={{ marginBottom: '20px' }}>Find Us</div>

              <InfoRow icon="📍" label="Address">
                Lot G-13A, Mezzanine Floor,<br />
                Kompleks PKNS Shah Alam,<br />
                40000 Shah Alam, Selangor
              </InfoRow>

              <InfoRow icon="🕐" label="Hours">
                Monday – Sunday: 10am – 7pm<br />
                <span style={{ color: 'var(--muted)', fontSize: '12px' }}>Open every day</span>
              </InfoRow>

              <InfoRow icon="📞" label="Phone">
                <a href="tel:+60125889073" style={{ color: 'var(--pink-deep)', fontWeight: 600 }}>+60 12-588 9073</a>
              </InfoRow>

              {/* Primary CTA — singular and clear */}
              <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="https://www.fresha.com/ms/a/dashing-diva-shah-alam-shah-alam-kompleks-pkns-kqb0kre7/all-offer?venue=true&utm_source=website&utm_medium=referral&utm_campaign=shah-alam"
                  target="_blank" rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Book via Fresha
                </a>
                <a
                  href="https://wa.me/60125889073"
                  target="_blank" rel="noopener noreferrer"
                  className="btn btn-ghost btn-sm"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  WhatsApp to Book
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Kompleks+PKNS+Shah+Alam+Lot+G-13A+Mezzanine+Floor+40000+Shah+Alam+Selangor"
                  target="_blank" rel="noopener noreferrer"
                  style={{ display: 'block', textAlign: 'center', fontSize: '12px', color: 'var(--muted)', padding: '8px 0', textDecoration: 'underline', textDecorationColor: 'var(--border)' }}
                >
                  Get directions →
                </a>
              </div>
            </div>

            {/* Catchment callout */}
            <div style={{ background: 'var(--blush)', borderRadius: 'var(--r-md)', padding: '20px 22px' }}>
              <div style={{ fontFamily: 'var(--font-label)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--pink-deep)', marginBottom: '8px' }}>
                Serving This Area
              </div>
              <p style={{ fontSize: '13px', lineHeight: 1.75, color: 'var(--warm-mid)', margin: 0 }}>
                We are right in central Shah Alam. Most clients come from <strong>Seksyen 6</strong>, <strong>Seksyen 7</strong>, <strong>Seksyen 9</strong>, and <strong>Seksyen 14</strong>. Clients also make the trip from <strong>Setia Alam</strong>, <strong>Kota Kemuning</strong>, <strong>Klang</strong>, and <strong>Subang Jaya</strong>.
              </p>
            </div>
          </div>

          {/* Right: salon photo */}
          <div style={{ borderRadius: 'var(--r-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-soft)', background: 'var(--blush)', aspectRatio: '4/5', position: 'relative', minHeight: '360px' }}>
            <img
              src="/images/salon-shahalam-interior.webp"
              alt="Dashing Diva Shah Alam waiting area and product shelves, Muslimah hair salon at Kompleks PKNS Selangor"
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block', position: 'absolute', inset: 0 }}
            />
            <div style={{
              position: 'absolute', top: '20px', left: '20px',
              background: 'rgba(255,255,255,0.92)', borderRadius: 'var(--r-pill)',
              padding: '6px 16px',
              fontFamily: 'var(--font-label)', fontSize: '10px', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--warm-dark)',
              boxShadow: '0 2px 12px rgba(42,21,32,0.12)',
            }}>
              ✦ Ladies Only
            </div>
          </div>
        </div>
      </section>

      {/* ══ 4. STYLISTS ══ */}
      <section style={{ background: 'var(--cream)' }}>
        {/* Section header */}
        <div className="sp" style={{ paddingTop: '64px', paddingBottom: '36px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div className="section-label">Meet the Team</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 0.93, textTransform: 'uppercase', color: 'var(--warm-dark)', letterSpacing: '0.02em', margin: 0 }}>
              YOUR STYLISTS AT<br />
              <span style={{ color: 'var(--pink-deep)' }}>SHAH ALAM</span>
            </h2>
          </div>
        </div>

        {/* Stylist cards — full width, alternating bg */}
        {stylists.map((s, i) => {
          const flip = i % 2 !== 0
          return (
            <div key={i} style={{ background: s.bg }}>
              <div style={{
                maxWidth: '1100px', margin: '0 auto',
                display: 'flex',
                flexDirection: flip ? 'row-reverse' : 'row',
                minHeight: '420px',
              }}
              className="stylist-row"
              >
                {/* Photo col */}
                <div style={{ flex: '0 0 42%', position: 'relative', overflow: 'hidden', minHeight: '480px' }}>
                  {s.photo ? (
                    <img
                      src={s.photo}
                      alt={s.alt || `${s.name}, stylist at Dashing Diva Shah Alam`}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: s.photoPos || 'center top', display: 'block', position: 'absolute', inset: 0 }}
                    />
                  ) : (
                    <div style={{ height: '100%', minHeight: '380px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                      <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--pink-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px' }}>
                        ✂️
                      </div>
                      <span style={{ fontFamily: 'var(--font-label)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                        Photo Coming Soon
                      </span>
                    </div>
                  )}
                  {/* Experience badge */}
                  <div style={{
                    position: 'absolute', bottom: '20px', left: flip ? 'auto' : '20px', right: flip ? '20px' : 'auto',
                    background: 'rgba(255,255,255,0.92)', borderRadius: 'var(--r-pill)',
                    padding: '6px 16px',
                    fontFamily: 'var(--font-label)', fontSize: '10px', fontWeight: 700,
                    letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--warm-dark)',
                    boxShadow: '0 2px 12px rgba(42,21,32,0.12)',
                  }}>
                    {s.years}
                  </div>
                </div>

                {/* Content col */}
                <div style={{
                  flex: '1', padding: '52px 48px',
                  display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '16px',
                }}>
                  {/* Name */}
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 60px)', textTransform: 'uppercase', color: 'var(--warm-dark)', lineHeight: 0.95, letterSpacing: '0.01em' }}>
                      {s.name}
                    </div>
                    {s.joined && (
                      <div style={{ fontFamily: 'var(--font-label)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--pink-deep)', marginTop: '8px' }}>
                        {s.joined}
                      </div>
                    )}
                  </div>

                  {/* Divider */}
                  <div style={{ height: '1px', background: 'var(--border)', width: '60px' }} />

                  {/* Specialism tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {s.specialisms.map((tag, j) => (
                      <span key={j} style={{
                        background: 'var(--yellow-soft)', borderRadius: 'var(--r-pill)',
                        padding: '5px 14px',
                        fontFamily: 'var(--font-label)', fontSize: '10px', fontWeight: 700,
                        letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--warm-dark)',
                        border: '1px solid rgba(245,197,24,0.40)',
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Personality */}
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--pink-deep)', fontStyle: 'italic', margin: 0, fontWeight: 500 }}>
                    "{s.personality}"
                  </p>

                  {/* Bio */}
                  <p style={{ fontSize: '13px', lineHeight: 1.85, color: 'var(--warm-mid)', margin: 0 }}>
                    {s.bio}
                  </p>
                </div>
              </div>
            </div>
          )
        })}

        <style>{`
          @media (max-width: 768px) {
            .stylist-row {
              flex-direction: column !important;
            }
            .stylist-row > div:first-child {
              min-height: 360px !important;
              flex: 0 0 360px !important;
            }
          }
        `}</style>
      </section>

      {/* ══ 5. SERVICES ══ */}
      <section className="sp" style={{ background: 'var(--cream)', paddingTop: '64px', paddingBottom: '64px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ marginBottom: '32px' }}>
            <div className="section-label">What we offer</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 0.93, textTransform: 'uppercase', color: 'var(--warm-dark)', letterSpacing: '0.02em', margin: 0 }}>
              MUSLIMAH HAIR<br />
              <span style={{ color: 'var(--pink-deep)' }}>SERVICES AT SHAH ALAM</span>
            </h2>
          </div>
          <div className="rg-4" style={{ gap: '16px', marginBottom: '24px' }}>
            {services.map((s, i) => (
              <div key={i} style={{
                background: s.bg, borderRadius: 'var(--r-md)', padding: '28px 24px',
                boxShadow: 'var(--shadow-card)', display: 'flex', flexDirection: 'column', gap: '12px',
              }}>
                <div style={{ fontSize: '28px' }}>{s.icon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', textTransform: 'uppercase', color: 'var(--warm-dark)', lineHeight: 1.05 }}>
                  {s.name}
                </div>
                <div style={{
                  alignSelf: 'flex-start', background: 'var(--yellow-soft)', borderRadius: 'var(--r-pill)',
                  padding: '4px 14px', fontFamily: 'var(--font-label)', fontSize: '10px', fontWeight: 700,
                  letterSpacing: '0.06em', color: 'var(--warm-dark)', border: '1px solid rgba(245,197,24,0.40)',
                }}>
                  {s.price}
                </div>
                <p style={{ fontSize: '13px', lineHeight: 1.65, color: 'var(--muted)', margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link href="/services" className="text-link">See full services &amp; pricing →</Link>
          </div>
        </div>
      </section>

      {/* ══ 6. GALLERY ══ */}
      <section className="sp" style={{ background: 'var(--cream-warm)', paddingTop: '64px', paddingBottom: '64px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '28px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <div className="section-label">The Work</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 0.93, textTransform: 'uppercase', color: 'var(--warm-dark)', letterSpacing: '0.02em', margin: 0 }}>
                RESULTS FROM<br />OUR STYLISTS
              </h2>
            </div>
            <Link href="/gallery" className="text-link">See full gallery →</Link>
          </div>
          <div className="rg-3" style={{ gap: '16px' }}>
            {galleryItems.map((g, i) => (
              <div key={i} style={{
                aspectRatio: '3/4', background: g.bg, borderRadius: 'var(--r-md)',
                position: 'relative', overflow: 'hidden', boxShadow: 'var(--shadow-card)',
              }}>
                <img
                  src={g.photo}
                  alt={`${g.label}, Dashing Diva Shah Alam Muslimah hair salon`}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', position: 'absolute', inset: 0 }}
                />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(to top, rgba(42,21,32,0.70) 0%, transparent 60%)',
                  padding: '40px 18px 16px',
                  fontFamily: 'var(--font-label)', fontSize: '10px', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FFFFFF',
                }}>
                  {g.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 7. REVIEWS ══ */}
      <section className="sp" style={{ background: 'var(--blush)', paddingTop: '64px', paddingBottom: '64px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <div className="section-label">Client Reviews</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 0.93, textTransform: 'uppercase', color: 'var(--warm-dark)', letterSpacing: '0.02em', margin: 0 }}>
                WHAT OUR<br />CLIENTS SAY
              </h2>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--yellow)', fontSize: '18px', letterSpacing: '3px' }}>★★★★★</span>
              <span style={{ fontFamily: 'var(--font-label)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)' }}>4.9 on Google · 263 reviews</span>
            </div>
          </div>
          <div className="rg-2" style={{ gap: '16px' }}>
            {reviews.map((r, i) => (
              <div key={i} className="card" style={{ padding: '24px 22px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ color: 'var(--yellow)', fontSize: '12px', letterSpacing: '2px' }}>★★★★★</div>
                <p style={{ fontSize: '13px', lineHeight: 1.75, color: 'var(--warm-mid)', fontStyle: 'italic', flexGrow: 1, margin: 0 }}>
                  "{r.quote}"
                </p>
                <div style={{ fontFamily: 'var(--font-label)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--warm-dark)' }}>
                  {r.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 8. FAQ ══ */}
      <section className="sp" style={{ background: 'var(--cream)', paddingTop: '64px', paddingBottom: '64px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ maxWidth: '720px' }}>
          <div className="section-label" style={{ marginBottom: '8px' }}>FAQ</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 44px)', lineHeight: 0.93, textTransform: 'uppercase', color: 'var(--warm-dark)', letterSpacing: '0.02em', marginBottom: '36px' }}>
            COMMON<br />QUESTIONS
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {faqs.map((f, i) => (
              <div key={i} style={{
                borderBottom: i < faqs.length - 1 ? '1px solid var(--border)' : 'none',
                padding: '22px 0',
              }}>
                <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--warm-dark)', marginBottom: '10px', lineHeight: 1.4 }}>
                  {f.q}
                </div>
                <p style={{ fontSize: '13px', lineHeight: 1.75, color: 'var(--muted)', margin: 0 }}>
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* ══ 9. MAP — after all persuasion ══ */}
      <section style={{ background: 'var(--cream-warm)', padding: 0 }}>
        <div className="sp" style={{ paddingTop: '48px', paddingBottom: '24px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div className="section-label" style={{ marginBottom: '8px' }}>Getting Here</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: 0.93, textTransform: 'uppercase', color: 'var(--warm-dark)', letterSpacing: '0.02em', marginBottom: '4px' }}>
              FIND US AT<br />KOMPLEKS PKNS
            </h2>
            <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.7, marginTop: '12px', marginBottom: '20px', maxWidth: '480px' }}>
              Lot G-13A, Mezzanine Floor, Kompleks PKNS Shah Alam, 40000 Shah Alam, Selangor.
              Close to Seksyen 6, Seksyen 7, Seksyen 9, and Seksyen 14.
            </p>
          </div>
        </div>
        <iframe
          title="Dashing Diva Shah Alam Map"
          src="https://maps.google.com/maps?q=Dashing+Diva+Shah+Alam+Kompleks+PKNS&t=&z=17&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="320"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      {/* ══ 10. BOTTOM CTA ══ */}
      <section className="sp" style={{ background: 'var(--warm-dark)', paddingTop: '64px', paddingBottom: '64px', textAlign: 'center' }}>
        <div style={{ maxWidth: '520px', margin: '0 auto' }}>
          <div className="section-label section-label-light" style={{ justifyContent: 'center', marginBottom: '12px' }}>Ready to book?</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '0.02em', textTransform: 'uppercase', color: '#FFFFFF', lineHeight: 0.93, marginBottom: '16px' }}>
            BOOK AT<br /><span style={{ color: 'var(--pink)' }}>SHAH ALAM</span>
          </h2>
          <p style={{ fontSize: '14px', lineHeight: 1.75, color: 'rgba(255,255,255,0.50)', marginBottom: '32px' }}>
            Women-only. Walk-ins welcome. Or book ahead via Fresha. It takes less than a minute.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://www.fresha.com/ms/a/dashing-diva-shah-alam-shah-alam-kompleks-pkns-kqb0kre7/all-offer?venue=true&utm_source=website&utm_medium=referral&utm_campaign=shah-alam" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Book via Fresha
            </a>
            <a href="https://wa.me/60125889073" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ color: 'rgba(255,255,255,0.75)', borderColor: 'rgba(255,255,255,0.25)' }}>
              WhatsApp Us
            </a>
          </div>
          <div style={{ marginTop: '32px', paddingTop: '28px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <Link href="/salons" className="text-link" style={{ color: 'rgba(255,255,255,0.35)', fontSize: '12px' }}>
              ← View all Dashing Diva locations
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}

/* ── Helper ── */
function InfoRow({ icon, label, children }) {
  return (
    <div style={{ display: 'flex', gap: '14px', marginBottom: '18px', alignItems: 'flex-start' }}>
      <div style={{
        width: '36px', height: '36px', flexShrink: 0,
        background: 'var(--blush)', borderRadius: 'var(--r-sm)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px',
      }}>
        {icon}
      </div>
      <div>
        <div style={{ fontFamily: 'var(--font-label)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--pink-deep)', marginBottom: '4px' }}>
          {label}
        </div>
        <div style={{ fontSize: '13px', lineHeight: 1.65, color: 'var(--warm-mid)' }}>
          {children}
        </div>
      </div>
    </div>
  )
}
