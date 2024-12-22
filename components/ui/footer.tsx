import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-[#001B3F] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div>
            <h3 className="mb-4 text-lg font-bold">About PakWheels</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
              <li><a href="/team" className="hover:text-gray-300">Our Team</a></li>
              <li><a href="/contact" className="hover:text-gray-300">Contact Us</a></li>
              <li><a href="/careers" className="hover:text-gray-300">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-bold">Popular Cities</h3>
            <ul className="space-y-2">
              <li><a href="/cars/karachi" className="hover:text-gray-300">Cars in Karachi</a></li>
              <li><a href="/cars/lahore" className="hover:text-gray-300">Cars in Lahore</a></li>
              <li><a href="/cars/islamabad" className="hover:text-gray-300">Cars in Islamabad</a></li>
              <li><a href="/cars/rawalpindi" className="hover:text-gray-300">Cars in Rawalpindi</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-bold">Popular Makes</h3>
            <ul className="space-y-2">
              <li><a href="/toyota" className="hover:text-gray-300">Toyota Cars</a></li>
              <li><a href="/honda" className="hover:text-gray-300">Honda Cars</a></li>
              <li><a href="/suzuki" className="hover:text-gray-300">Suzuki Cars</a></li>
              <li><a href="/kia" className="hover:text-gray-300">KIA Cars</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-bold">Popular Models</h3>
            <ul className="space-y-2">
              <li><a href="/toyota-corolla" className="hover:text-gray-300">Toyota Corolla</a></li>
              <li><a href="/honda-civic" className="hover:text-gray-300">Honda Civic</a></li>
              <li><a href="/suzuki-cultus" className="hover:text-gray-300">Suzuki Cultus</a></li>
              <li><a href="/toyota-yaris" className="hover:text-gray-300">Toyota Yaris</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-bold">Connect With Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-300"><Facebook /></a>
              <a href="#" className="hover:text-gray-300"><Twitter /></a>
              <a href="#" className="hover:text-gray-300"><Instagram /></a>
              <a href="#" className="hover:text-gray-300"><Youtube /></a>
            </div>
            <div className="mt-6">
              <h4 className="mb-2 font-semibold">Download Our App</h4>
              <div className="flex gap-2">
                <a href="#" className="hover:opacity-80">
                  <Image
                    src="/appstore.png"
                    alt="Download on App Store"
                    width={120}
                    height={40}
                  />
                </a>
                <a href="#" className="hover:opacity-80">
                  <Image
                    src="/playstore.png"
                    alt="Get it on Google Play"
                    width={120}
                    height={40}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} PakWheels. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

