import BambangClient from './BambangClient'

export const metadata = {
  title: 'Bambang Soteto — Our Founder',
  description: 'Bambang Soteto is one of Malaysia\'s most recognised hair professionals, with 25 years in the craft and training across Germany, UK, and Austria. The name behind Dashing Diva.',
  openGraph: {
    title: 'Bambang Soteto — The Stylist Behind Dashing Diva',
    description: '25 years in the craft. Trained in Europe. Founder of Hairkunst and Creative Director of Dashing Diva — Muslimah hair salon in KL.',
    url: 'https://www.dashingdiva.my/bambang',
  },
}

export default function BambangPage() {
  return <BambangClient />
}
