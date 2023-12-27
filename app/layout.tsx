import Header from '@/components/common/Header'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/common/Footer'

export const metadata: Metadata = {
  title: 'inOgital',
  description: '...tech & entrepreneurship',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
