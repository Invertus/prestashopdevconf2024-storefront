'use client'

import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import ProductCard from './product-card'
import ProductListItem from './product-list-item'
import { ApiResponse, Product } from '@/services/api/apiGetProducts'
interface ProductListingProps {
  productsResponse: ApiResponse<Product>;
}

export default function ProductListingComponent({ productsResponse: { items }  }: ProductListingProps) {
  const [ref, inView] = useInView()
  const [ view, setView ] = useState('card')


  // useEffect(() => {
  //   if (inView) {
  //     fetchProducts()
  //   }
  // }, [inView])

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
        {items.map((product) =>
          view === 'list' ? (
            <ProductListItem key={product.productId} product={product} />
          ) : (
            <ProductCard key={product.productId} product={product} />
          )
        )}
      </div>
      {<p className="text-center mt-4">Loading more products...</p>}
      <div ref={ref} className="h-10" />
    </div>
  )
}