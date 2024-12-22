import Image from 'next/image'
import Link from 'next/link'

const autoParts = [
  {
    name: 'Engine Parts',
    image: '/placeholder.svg?height=64&width=64',
    count: '25,420',
  },
  {
    name: 'Suspension',
    image: '/placeholder.svg?height=64&width=64',
    count: '12,350',
  },
  {
    name: 'Body Parts',
    image: '/placeholder.svg?height=64&width=64',
    count: '18,670',
  },
  {
    name: 'Brake System',
    image: '/placeholder.svg?height=64&width=64',
    count: '9,840',
  },
  {
    name: 'Lights',
    image: '/placeholder.svg?height=64&width=64',
    count: '15,230',
  },
  {
    name: 'Interior',
    image: '/placeholder.svg?height=64&width=64',
    count: '21,450',
  },
  {
    name: 'Wheels & Tires',
    image: '/placeholder.svg?height=64&width=64',
    count: '8,920',
  },
  {
    name: 'Car Care',
    image: '/placeholder.svg?height=64&width=64',
    count: '5,680',
  },
]

export function AutoParts() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Auto Parts & Accessories</h2>
          <Link href="/auto-parts" className="text-blue-600 hover:underline">
            View All Parts
          </Link>
        </div>
        
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
          {autoParts.map((part) => (
            <Link
              key={part.name}
              href={`/auto-parts/${part.name.toLowerCase().replace(' ', '-')}`}
              className="group flex flex-col items-center gap-2 rounded-lg border p-4 transition-all hover:shadow-md"
            >
              <div className="relative h-16 w-16">
                <Image
                  src={part.image}
                  alt={part.name}
                  fill
                  className="rounded-full object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <span className="text-center text-sm font-medium">{part.name}</span>
              <span className="text-xs text-gray-500">{part.count} items</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

