'use client'

import Image from 'next/image'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Product } from '@/models/product'

interface ProductCardProps {
  product: Product
}

export default function ProductCardComponent({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardContent className="p-4 flex-grow">
        <div className="aspect-square relative mb-4">
          <Image
            src=""
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        <p className="font-bold text-xl">${Number(product.price).toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4">
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}
