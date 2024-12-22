'use client'

import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input' 

export function HeroSection() {
  return (
    <section className="relative min-h-[500px] bg-gradient-to-b from-[#001B3F] to-[#003399] py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold">Find Used Cars in Pakistan</h1>
        <p className="mb-8 text-lg">With thousands of cars, we have just the right one for you</p>
        
        <div className="mx-auto max-w-4xl">
          <div className="flex gap-2">
            <Input 
              placeholder="Car Make or Model" 
              className="bg-white text-black"
            />
            <Select>
              <SelectTrigger className="w-[180px] bg-white text-black">
                <SelectValue placeholder="All Cities" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="karachi">Karachi</SelectItem>
                <SelectItem value="lahore">Lahore</SelectItem>
                <SelectItem value="islamabad">Islamabad</SelectItem>
                <SelectItem value="rawalpindi">Rawalpindi</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px] bg-white text-black">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-500000">Under 5 Lacs</SelectItem>
                <SelectItem value="500000-1000000">5-10 Lacs</SelectItem>
                <SelectItem value="1000000-1500000">10-15 Lacs</SelectItem>
                <SelectItem value="1500000-2000000">15-20 Lacs</SelectItem>
                <SelectItem value="2000000+">Above 20 Lacs</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-green-600 px-8 hover:bg-green-700">
              <Search className="mr-2" />
              Search
            </Button>
          </div>
          <Button variant="link" className="mt-4 text-white hover:text-gray-300">
            Advanced Filter
          </Button>
        </div>
      </div>
    </section>
  )
}

