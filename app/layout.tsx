import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BackToTop } from '@/components/back-to-top'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: 'MSA BEE Foundation | Holistic Development & Educational Excellence',
  description: 'Providing educational opportunity through sports. Cultivating a society that values physical, social, cognitive, and emotional growth in Nigeria.',
  generator: 'v0.app',
  metadataBase: new URL('https://msabeefoundation.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'MSA BEE Foundation | Holistic Development & Educational Excellence',
    description: 'Providing educational opportunity through sports. Cultivating a society that values physical, social, cognitive, and emotional growth in Nigeria.',
    url: 'https://msabeefoundation.com',
    siteName: 'MSA BEE Foundation',
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MSA BEE Foundation | Holistic Development & Educational Excellence',
    description: 'Providing educational opportunity through sports. Cultivating a society that values physical, social, cognitive, and emotional growth in Nigeria.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'NGO',
              name: 'MSA BEE Foundation',
              url: 'https://msabeefoundation.com',
              logo: 'https://msabeefoundation.com/icon.svg',
              description: 'Providing educational opportunity through sports. Cultivating a society that values physical, social, cognitive, and emotional growth in Nigeria.',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'Nigeria',
              },
              sameAs: [
                'https://twitter.com/msabeefoundation',
                'https://facebook.com/msabeefoundation',
                'https://instagram.com/msabeefoundation',
              ],
            }),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <Analytics />
      </body>
    </html>
  )
}

