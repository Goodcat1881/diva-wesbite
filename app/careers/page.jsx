import CareersClient from './CareersClient'

export const metadata = {
  title: 'Join Our Team',
  description: 'We\'re growing. Join the Dashing Diva team as a hair stylist in our KL, Shah Alam, or Damansara branches. Training under Bambang Soteto\'s curriculum.',
  alternates: {
    canonical: '/careers',
    languages: {
      'en-MY': '/careers',
      'x-default': '/careers',
    },
  },
  openGraph: {
    title: 'Careers at Dashing Diva — Join Our Styling Team',
    description: 'Hair stylist roles at our Muslimah salon branches in KL, Shah Alam, and Damansara. Train under Bambang Soteto\'s curriculum.',
    url: 'https://www.dashingdiva.my/careers',
  },
}

export default function CareersPage() {
  return <CareersClient />
}
