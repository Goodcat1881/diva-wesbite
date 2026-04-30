import ServicesClient from './ServicesClient'

export const metadata = {
  title: 'Hair Services & Pricing',
  description: 'Full services and pricing for Dashing Diva — haircuts from RM 15, hair colour from RM 120, balayage, rebonding, keratin, and hair treatments. Weekday promos available.',
  alternates: {
    canonical: '/services',
    languages: {
      'en-MY': '/services',
      'x-default': '/services',
    },
  },
  openGraph: {
    title: 'Hair Services & Pricing — Dashing Diva Muslimah Salon',
    description: 'Haircuts, colour, balayage, rebonding, keratin and treatments. Transparent pricing — no surprises. Women-only, all branches in KL & Selangor.',
    url: 'https://www.dashingdiva.my/services',
  },
}

export default function ServicesPage() {
  return <ServicesClient />
}
