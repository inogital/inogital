import Header from '@/components/common/Header'
import './globals.css'
import Footer from '@/components/common/Footer'
import { siteConfig } from '@/config/site'
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "inOgital",
    "website",
    "Technology",
    "Entrepreneurship",
    "Solutions Provider",
  ],
  authors: [
    {
      name: "de-mawo",
      url: "https://github.com/de-mawo",
    },
  ],
  creator: "Prince De Mawo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.png`],
    creator: "@de-mawo",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
      <Toaster />
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
