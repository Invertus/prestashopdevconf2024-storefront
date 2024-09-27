'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface ProductListItemProps {
  product: {
    id: number
    title: string
    price: number
    description: string
    image: string
  }
}

export default function ProductListItemComponent({ product }: ProductListItemProps) {
  return (
    <div className="flex items-center space-x-4 p-4 bg-background rounded-lg shadow">
      <div className="flex-shrink-0 w-24 h-24 relative">
        <Image
          src={product.image}
          alt={product.title}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className="flex-grow">
        <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
        <p className="text-muted-foreground mb-2 line-clamp-2">{product.description}</p>
        <p className="font-bold text-xl">${product.price.toFixed(2)}</p>
      </div>
      <Button>Add to Cart</Button>
    </div>
  )
}