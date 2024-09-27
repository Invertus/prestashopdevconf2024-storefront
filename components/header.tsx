'use client'

import { Search } from 'lucide-react'
import { useState } from 'react'

export default function HeaderComponent() {
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <header className="bg-primary py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="relative w-full max-w-2xl">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>
      </div>
    </header>
  )
}