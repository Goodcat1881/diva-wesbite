import AboutClient from './AboutClient'

export const metadata = {
  title: 'About Us',
  description: 'Dashing Diva was built from the ground up for Muslimah women — no compromises, no retrofitted private rooms. Every branch runs under the training and craft of Bambang Soteto.',
  alternates: {
    canonical: '/about',
    languages: {
      'en-MY': '/about',
      'x-default': '/about',
    },
  },
  openGraph: {
    title: 'About Dashing Diva — Muslimah Hair Salon KL',
    description: 'Built from day one for Muslimah women. Every stylist trained to Bambang Soteto\'s curriculum. 3 branches across KL, Shah Alam, and Damansara.',
    url: 'https://www.dashingdiva.my/about',
  },
}

export default function AboutPage() {
  return <AboutClient />
}
