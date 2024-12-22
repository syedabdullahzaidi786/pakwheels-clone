import Image from 'next/image'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

const news = [
  {
    id: 1,
    title: 'New MG Models Coming to Pakistan in 2024',
    date: '2023-12-22',
    image: '/placeholder.svg?height=200&width=300',
    excerpt: 'MG Pakistan is planning to launch several new models in 2024...',
  },
  {
    id: 2,
    title: 'Toyota IMC Increases Car Prices',
    date: '2023-12-21',
    image: '/placeholder.svg?height=200&width=300',
    excerpt: 'Toyota Indus Motor Company has announced a price increase...',
  },
  {
    id: 3,
    title: 'Electric Vehicle Policy Update',
    date: '2023-12-20',
    image: '/placeholder.svg?height=200&width=300',
    excerpt: 'Government announces new incentives for electric vehicles...',
  },
]

export function NewsSection() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Automotive News</h2>
          <a href="/news" className="text-blue-600 hover:underline">
            View All News
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {news.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg">
              <CardContent className="p-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="h-48 w-full object-cover"
                />
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-2 p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.excerpt}</p>
                <p className="text-sm text-gray-500">
                  {new Date(item.date).toLocaleDateString()}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

