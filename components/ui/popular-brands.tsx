import Image from 'next/image'
import Link from 'next/link'

const brands = [
  { name: 'Toyota', logo: '/placeholder.svg?height=60&width=60' },
  { name: 'Honda', logo: '/placeholder.svg?height=60&width=60' },
  { name: 'Suzuki', logo: '/placeholder.svg?height=60&width=60' },
  { name: 'KIA', logo: '/placeholder.svg?height=60&width=60' },
  { name: 'Hyundai', logo: '/placeholder.svg?height=60&width=60' },
  { name: 'BMW', logo: '/placeholder.svg?height=60&width=60' },
  { name: 'Mercedes', logo: '/placeholder.svg?height=60&width=60' },
  { name: 'Audi', logo: '/placeholder.svg?height=60&width=60' },
  { name: 'Nissan', logo: '/placeholder.svg?height=60&width=60' },
  { name: 'MG', logo: '/placeholder.svg?height=60&width=60' },
  { name: 'Changan', logo: '/placeholder.svg?height=60&width=60' },
  { name: 'Proton', logo: '/placeholder.svg?height=60&width=60' },
]

export function PopularBrands() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-2xl font-bold">Popular Brands</h2>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12">
          {brands.map((brand) => (
            <Link
              key={brand.name}
              href={`/cars/${brand.name.toLowerCase()}`}
              className="flex flex-col items-center gap-2 rounded-lg border p-4 hover:shadow-md"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={60}
                height={60}
                className="rounded-full"
              />
              <span className="text-center text-sm font-medium">{brand.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

