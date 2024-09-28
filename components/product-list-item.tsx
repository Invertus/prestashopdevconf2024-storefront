'use client'

import { Product } from '@/models/product';
import ImageCarousel from '@/components/image-carousel';
import { formatImage } from '@/lib/utils';

interface ProductListItemProps {
  product: Product;
}

export default function ProductListItemComponent({ product }: ProductListItemProps) {
  return (
    <div className="flex items-center space-x-4 p-4 bg-background rounded-lg shadow">
      <div className="flex-shrink-0 w-24 h-24 relative">
        <ImageCarousel
              images={product.images.length > 0 ? product.images.map(({ imageUrl }) => formatImage(imageUrl, 'home_default')) : ['/placeholder.svg']}
              alt={product.name || 'Product image'}
              className="w-full h-full"
              size="small"
        />
      </div>
      <div className="flex-grow">
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        <p className="font-bold text-xl">${Number(product.price).toFixed(2)}</p>
      </div>
    </div>
  )
}
