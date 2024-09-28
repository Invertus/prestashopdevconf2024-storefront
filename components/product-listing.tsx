'use client'

import { useState } from 'react'
import ProductItem from '@/components/product-item'
import { ResponseMany } from '@/models/apiResponse';
import { Product } from '@/models/product';
interface ProductListingProps {
  data: ResponseMany<Product>;
}

export default function ProductListingComponent({ data: { items  }  }: ProductListingProps) {
  const [ view, setView ] = useState<'card'| 'list'>('card')

  return (
    <div>
      <div className="mb-4 flex justify-end">
          <button
            onClick={() => setView(view === 'list' ? 'card' : 'list')}
            className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
          >
            {view === 'list' ? 'Card View' : 'List View'}
          </button>
      </div>
      <div className={view === 'list' ? 'space-y-4' : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'}>
        {items.map((product) => <ProductItem key={product.productId} product={product} view={view}/>)}
      </div>
    </div>
  )
}
