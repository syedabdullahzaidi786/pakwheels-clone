'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="bg-[#001B3F] text-white">
      <div className="container mx-auto">
        {/* Top Bar */}
        <div className="flex items-center justify-between border-b border-gray-700 px-4 py-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4" />
              Download App via SMS
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/signup" className="hover:text-gray-300">Sign Up</Link>
            <Link href="/signin" className="hover:text-gray-300">Sign In</Link>
          </div>
        </div>
        
        {/* Main Navigation */}
        <nav className="flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex-shrink-0">
  <Image
    src="/logo.png"
    alt="PakWheels"
    width={700} // Increased width further
    height={150} // Increased height further
    className="h-40 w-auto" // Updated Tailwind class for larger height
    priority
  />
</Link>


          
          <div className="flex items-center gap-6">
            <Link href="/used-cars" className="hover:text-gray-300">Used Cars</Link>
            <Link href="/new-cars" className="hover:text-gray-300">New Cars</Link>
            <Link href="/bikes" className="hover:text-gray-300">Bikes</Link>
            <Link href="/auto-store" className="hover:text-gray-300">Auto Store</Link>
            <Link href="/videos" className="hover:text-gray-300">Videos</Link>
            <Link href="/forums" className="hover:text-gray-300">Forums</Link>
            <Link href="/blog" className="hover:text-gray-300">Blog</Link>
            <div className="relative">
              <span className="hover:text-gray-300">More</span>
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-[10px]">
                New
              </span>
            </div>
          </div>
          
          <Button className="bg-red-600 hover:bg-red-700">
            Post an Ad
          </Button>
        </nav>
      </div>
    </header>
  )
}

