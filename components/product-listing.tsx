'use client'

import { createContext, useState } from 'react'
import { ApiResponse, Product } from '@/services/api/apiGetProductsServer'
import ProductItem from '@/components/product-item'
interface ProductListingProps {
  //todo: never do this in production application. Either use full proxie server or regenerate token on client side
  accessToken: string;
  productsResponse: ApiResponse<Product>;
}

export const TokenContext = createContext('');

export default function ProductListingComponent({ accessToken, productsResponse: { items }  }: ProductListingProps) {
  const [ view, setView ] = useState<'card'| 'list'>('card')

  return (
    <TokenContext.Provider value={accessToken}>
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
    </TokenContext.Provider>
  )
}