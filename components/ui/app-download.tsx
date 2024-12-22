import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function AppDownload() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
          <div className="text-center lg:text-left">
            <h2 className="mb-4 text-3xl font-bold">Get The PakWheels App</h2>
            <p className="mb-8 text-lg text-gray-600">
              Buy & Sell Cars, Bikes and Auto Parts faster and easier with our mobile app
            </p>
            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <Button variant="outline" className="h-14 w-40">
                <Image
                  src="/appstore.png"
                  alt="Download on App Store"
                  width={140}
                  height={60}
                />
              </Button>
              <Button variant="outline" className="h-14 w-40">
                <Image
                  src="/playstore.png"
                  alt="Get it on Google Play"
                  width={180}
                  height={80}
                />
              </Button>
            </div>
            <div className="mt-6 flex items-center justify-center gap-4 lg:justify-start">
              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold text-green-600">4.7</span>
                <div className="text-sm">
                  <p className="font-semibold">App Store</p>
                  <p className="text-gray-500">Rating</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold text-green-600">4.5</span>
                <div className="text-sm">
                  <p className="font-semibold">Play Store</p>
                  <p className="text-gray-500">Rating</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] w-full max-w-[600px]">
            <Image
              src="/app.jpeg"
              alt="PakWheels App Preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

