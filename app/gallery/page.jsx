import GalleryClient from './GalleryClient'

export const metadata = {
  title: 'Hair Gallery',
  description: 'Browse hair transformations from Dashing Diva — colour, highlights, balayage, blowouts, and treatments. See what our stylists can do for you.',
  openGraph: {
    title: 'Hair Gallery — Colour, Highlights & Treatments | Dashing Diva',
    description: 'Hair colour, balayage, highlights, blowouts and treatment results from our Muslimah hair salon branches in KL, Shah Alam, and Damansara.',
    url: 'https://www.dashingdiva.my/gallery',
  },
}

export default function GalleryPage() {
  return <GalleryClient />
}
