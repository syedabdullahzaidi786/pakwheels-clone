import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '../components/ui/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PakWheels Clone - Buy & Sell Cars in Pakistan',
  description: 'Find used cars, new cars, bikes, auto parts and more',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}

