import HomeClient from './HomeClient'

export const metadata = {
  alternates: {
    canonical: '/',
    languages: {
      'en-MY': '/',
      'x-default': '/',
    },
  },
}

export default function HomePage() {
  return <HomeClient />
}
