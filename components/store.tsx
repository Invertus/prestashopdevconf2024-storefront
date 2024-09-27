'use client'

import { useState } from 'react'
import Header from './header'
import ProductListing from './product-listing'

export function Store() {
  const [view, setView] = useState<'list' | 'card'>('card')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-background">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-4 flex justify-end">
          <button
            onClick={() => setView(view === 'list' ? 'card' : 'list')}
            className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
          >
            {view === 'list' ? 'Card View' : 'List View'}
          </button>
        </div>
        <ProductListing view={view} />
      </main>
    </div>
  )
}