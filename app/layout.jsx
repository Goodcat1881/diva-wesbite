import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export const metadata = {
  title: 'Dashing Diva — Muslimah Hair Salon',
  description: 'A women-only Muslimah hair salon in KL, rooted in Bambang Soteto\'s craft. Quality hair care at honest prices.',
  keywords: 'muslimah salon, halal hair salon, women only salon, KL hair salon, Bambang Soteto',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
