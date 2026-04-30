import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export const metadata = {
  metadataBase: new URL('https://www.dashingdiva.my'),
  title: {
    default: 'Dashing Diva Malaysia — Muslimah Hair Salon in KL, PJ & Shah Alam',
    template: '%s | Dashing Diva Malaysia',
  },
  description: 'A women-only Muslimah hair salon with branches in Kuala Lumpur, Petaling Jaya, and Shah Alam. Quality hair care at honest prices. Book now on Fresha.',
  alternates: {
    canonical: '/',
    languages: {
      'en-MY': '/',
      'x-default': '/',
    },
  },
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    url: 'https://www.dashingdiva.my',
    siteName: 'Dashing Diva Malaysia',
    title: 'Dashing Diva Malaysia — Muslimah Hair Salon in KL, PJ & Shah Alam',
    description: 'A women-only Muslimah hair salon with branches in Kuala Lumpur, Petaling Jaya, and Shah Alam. Quality hair care at honest prices.',
    images: [
      {
        url: '/images/hero-02.png',
        width: 1200,
        height: 630,
        alt: 'Dashing Diva Malaysia — Muslimah Hair Salon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dashing Diva Malaysia — Muslimah Hair Salon in KL, PJ & Shah Alam',
    description: 'Women-only Muslimah hair salon in KL, Shah Alam & PJ. Honest prices. 7-day satisfaction guarantee.',
    images: ['/images/hero-02.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: 'Dashing Diva',
  description: 'Women-only Muslimah hair salon in Kuala Lumpur, Shah Alam, and Damansara. Quality hair care at honest prices under the training of Bambang Soteto.',
  url: 'https://www.dashingdiva.my',
  logo: 'https://www.dashingdiva.my/logo.png',
  image: 'https://www.dashingdiva.my/images/hero-02.png',
  priceRange: 'RM 15 – RM 700+',
  currenciesAccepted: 'MYR',
  paymentAccepted: 'Cash, Credit Card',
  openingHours: 'Mo-Sa 10:00-20:00',
  email: 'dashingdivadamas1@gmail.com',
  sameAs: [
    'https://www.instagram.com/dashingdivamalaysia/',
    'https://www.tiktok.com/@dashingdivamy',
  ],
  hasMap: 'https://maps.google.com',
  department: [
    {
      '@type': 'HairSalon',
      name: 'Dashing Diva — Plaza Damas',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'M-0-13, Block M, Plaza Damas, Jalan Sri Hartamas 1, Taman Sri Hartamas',
        addressLocality: 'Kuala Lumpur',
        postalCode: '50480',
        addressCountry: 'MY',
      },
      telephone: '+60123096125',
      openingHours: 'Mo-Sa 10:00-20:00',
    },
    {
      '@type': 'HairSalon',
      name: 'Dashing Diva — Shah Alam',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Kompleks PKNS Shah Alam, Lot G-13A Mezzanine Floor',
        addressLocality: 'Shah Alam',
        addressRegion: 'Selangor',
        postalCode: '40000',
        addressCountry: 'MY',
      },
      telephone: '+60125889073',
      openingHours: 'Mo-Sa 10:00-20:00',
    },
    {
      '@type': 'HairSalon',
      name: 'Dashing Diva — Damansara',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Hair Library, 21, Jalan PJU 7/7a, Mutiara Damansara',
        addressLocality: 'Petaling Jaya',
        addressRegion: 'Selangor',
        postalCode: '47800',
        addressCountry: 'MY',
      },
      telephone: '+60163541201',
      openingHours: 'Mo-Sa 10:00-20:00',
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-MY">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
