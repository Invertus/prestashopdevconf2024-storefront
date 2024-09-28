'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import ImageCarousel from './image-carousel'
import { Product } from '@/models/product'
import { formatImage } from '@/lib/utils'

export default function ProductPage({ data }: { data: Product }) {
  const [quantity, setQuantity] = useState(1)

  const incrementQuantity = () => setQuantity(prev => prev + 1)
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1))

  const getName = (name: any) => {
    if (typeof name === 'object' && name !== null) {
      return Object.values(name)[0]
    }
    return name
  }

  const name = getName(data.names)
  const description = getName(data.descriptions)

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-square relative">
              <ImageCarousel
                images={data.images.map(({ imageUrl }) => formatImage(imageUrl, 'large_default'))}
                alt={name}
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-4">{name}</h1>
                <div className="text-gray-600 mb-6" dangerouslySetInnerHTML={{ __html: description }}/>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Button onClick={decrementQuantity} variant="outline" size="icon">-</Button>
                  <span className="text-xl font-semibold">{quantity}</span>
                  <Button onClick={incrementQuantity} variant="outline" size="icon">+</Button>
                </div>
                <Button className="w-full">Add to Cart</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
