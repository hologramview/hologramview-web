import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import '../globals.css'
import { locales } from '@/lib/constants'

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Navigation locale={locale} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
