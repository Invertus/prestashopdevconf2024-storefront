'use client'

import Image from 'next/image'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface ProductCardProps {
  product: {
    id: number
    title: string
    price: number
    description: string
    image: string
  }
}

export default function ProductCardComponent({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardContent className="p-4 flex-grow">
        <div className="aspect-square relative mb-4">
          <Image
            src={product.image}
            alt={product.title}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{product.description}</p>
        <p className="font-bold text-xl">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4">
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}