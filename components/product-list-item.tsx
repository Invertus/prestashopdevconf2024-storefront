'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Product } from '@/services/api/apiGetProductsServer'

interface ProductListItemProps {
  product: Product;
}

export default function ProductListItemComponent({ product }: ProductListItemProps) {
  return (
    <div className="flex items-center space-x-4 p-4 bg-background rounded-lg shadow">
      <div className="flex-shrink-0 w-24 h-24 relative">
        <Image
          src={""}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className="flex-grow">
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        <p className="font-bold text-xl">${Number(product.price).toFixed(2)}</p>
      </div>
      <Button>Add to Cart</Button>
    </div>
  )
}