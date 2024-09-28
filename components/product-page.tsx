'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import ImageCarousel from './image-carousel'

interface Product {
  id: number
  title: string
  price: number
  description: string
  images: string[]
}

// In a real application, you would fetch this data from an API
const product: Product = {
  id: 1,
  title: "Premium Leather Jacket",
  price: 199.99,
  description: "A high-quality leather jacket that combines style and durability. Perfect for any casual or semi-formal occasion.",
  images: [
    "/placeholder.svg?text=Leather+Jacket+1",
    "/placeholder.svg?text=Leather+Jacket+2",
    "/placeholder.svg?text=Leather+Jacket+3",
  ]
}

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1)

  const incrementQuantity = () => setQuantity(prev => prev + 1)
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1))

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-square relative">
              <ImageCarousel
                images={product.images}
                alt={product.title}
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                <p className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</p>
                <p className="text-gray-600 mb-6">{product.description}</p>
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
