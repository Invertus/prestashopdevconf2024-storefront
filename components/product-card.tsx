'use client'

import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Product } from '@/models/product'
import ImageCarousel from '@/components/image-carousel'
import { formatImage } from '@/lib/utils'

interface ProductCardProps {
  product: Product
}

export default function ProductCardComponent({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardContent className="p-4 flex-grow">
        <div className="aspect-square relative mb-4">
          <ImageCarousel
            images={product.images.length > 0 ? product.images.map(({ imageUrl }) => formatImage(imageUrl, 'medium_default')) : ['/placeholder.svg']}
            alt={product.name || 'Product image'}
            className="w-full h-full"
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
