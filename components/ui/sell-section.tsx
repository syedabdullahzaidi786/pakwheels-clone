import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export function SellSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-2xl font-bold">
          Sell Your Car on PakWheels and Get the Best Price
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-4 text-xl font-bold">Post your Ad on PakWheels</h3>
              <ul className="mb-6 space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  Post your Ad for Free in 3 Easy Steps
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  Get Genuine offers from Verified Buyers
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  Sell your car Fast at the Best Price
                </li>
              </ul>
              <Button className="w-full bg-red-600 hover:bg-red-700">
                Post Your Ad
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-4 text-xl font-bold">Try PakWheels Sell It For Me</h3>
              <ul className="mb-6 space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  Dedicated Sales Expert to Sell your Car
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  We Bargain for you and share the Best Offer
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  We ensure Safe & Secure Transaction
                </li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Register Your Car
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

