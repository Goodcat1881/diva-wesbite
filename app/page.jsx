import HomeClient from './HomeClient'

export const metadata = {
  title: 'Muslimah Hair Salon KL — Dashing Diva',
  description: 'Dashing Diva is a women-only Muslimah hair salon with branches in Plaza Damas (KL), Shah Alam, and Damansara. Trained under Bambang Soteto. Quality hair care at honest prices.',
  openGraph: {
    title: 'Muslimah Hair Salon KL — Dashing Diva',
    description: 'Women-only salon built for Muslimah women. Haircut, colour, balayage, keratin, rebonding & more. 3 branches across the Klang Valley.',
    url: 'https://www.dashingdiva.my',
  },
}

export default function HomePage() {
  return <HomeClient />
}
