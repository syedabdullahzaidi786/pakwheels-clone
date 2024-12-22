import Image from 'next/image'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const featuredCars = [
  {
    id: 1,
    title: 'Toyota Corolla GLi 1.3',
    year: 2020,
    price: 3850000,
    location: 'Lahore',
    mileage: '45,000 km',
    image: '/gli1.3.jpeg',
  },
  {
    id: 2,
    title: 'Honda Civic Oriel',
    year: 2021,
    price: 5200000,
    location: 'Karachi',
    mileage: '32,000 km',
    image: '/oreal.jpg',
  },
  {
    id: 3,
    title: 'Suzuki Cultus VXL',
    year: 2019,
    price: 2300000,
    location: 'Islamabad',
    mileage: '58,000 km',
    image: '/cultus.jpeg',
  },
  {
    id: 4,
    title: 'Toyota Yaris ATIV X',
    year: 2021,
    price: 3950000,
    location: 'Rawalpindi',
    mileage: '28,000 km',
    image: '/yaris.jpg',
  },
]

export function FeaturedListings() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Featured Used Cars</h2>
          <a href="/used-cars" className="text-blue-600 hover:underline">
            View All Used Cars
          </a>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredCars.map((car) => (
            <Card key={car.id} className="overflow-hidden hover:shadow-lg">
              <CardContent className="p-0">
                <Image
                  src={car.image}
                  alt={car.title}
                  width={300}
                  height={200}
                  className="h-48 w-full object-cover"
                />
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-2 p-4">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{car.year}</Badge>
                  <h3 className="font-semibold">{car.title}</h3>
                </div>
                <p className="text-lg font-bold">
                  PKR {car.price.toLocaleString()}
                </p>
                <div className="flex w-full items-center justify-between text-sm text-gray-500">
                  <span>{car.location}</span>
                  <span>{car.mileage}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

