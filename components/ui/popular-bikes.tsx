import Image from 'next/image'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

const bikes = [
  {
    id: 1,
    name: 'Honda CD 70',
    price: 120000,
    image: '/placeholder.svg?height=200&width=300',
    brand: 'Honda',
    year: 2023,
  },
  {
    id: 2,
    name: 'Yamaha YBR 125G',
    price: 310000,
    image: '/placeholder.svg?height=200&width=300',
    brand: 'Yamaha',
    year: 2023,
  },
  {
    id: 3,
    name: 'Suzuki GS 150',
    price: 285000,
    image: '/placeholder.svg?height=200&width=300',
    brand: 'Suzuki',
    year: 2023,
  },
  {
    id: 4,
    name: 'Honda CB 150F',
    price: 335000,
    image: '/placeholder.svg?height=200&width=300',
    brand: 'Honda',
    year: 2023,
  },
]

export function PopularBikes() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Popular New Bikes</h2>
          <a href="/bikes" className="text-blue-600 hover:underline">
            View All Bikes
          </a>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bikes.map((bike) => (
            <Card key={bike.id} className="overflow-hidden hover:shadow-lg">
              <CardContent className="p-0">
                <Image
                  src={bike.image}
                  alt={bike.name}
                  width={300}
                  height={200}
                  className="h-48 w-full object-cover"
                />
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-2 p-4">
                <div className="flex w-full items-center justify-between">
                  <h3 className="font-semibold">{bike.name}</h3>
                  <span className="text-sm text-gray-500">{bike.year}</span>
                </div>
                <p className="text-lg font-bold">
                  PKR {bike.price.toLocaleString()}
                </p>
                <span className="text-sm text-gray-500">{bike.brand}</span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

