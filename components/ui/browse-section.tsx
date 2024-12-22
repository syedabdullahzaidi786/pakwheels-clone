'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

const tabs = [
  { id: 'category', label: 'Category' },
  { id: 'city', label: 'City' },
  { id: 'make', label: 'Make' },
  { id: 'model', label: 'Model' },
  { id: 'budget', label: 'Budget' },
  { id: 'body-type', label: 'Body Type' },
]

export function BrowseSection() {
  const [activeTab, setActiveTab] = useState('category')

  return (
    <section className="border-t py-8">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-2xl font-bold">Browse Used Cars</h2>
        
        <div className="border-b">
          <div className="flex gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'border-b-2 px-4 py-2 text-sm font-medium transition-colors',
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="mt-6">
          {/* Content for each tab can be added here */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
            {/* Placeholder content */}
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="h-24 rounded-lg bg-gray-100 p-4 text-center"
              >
                Content {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

