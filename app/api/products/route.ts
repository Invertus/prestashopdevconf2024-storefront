import { ResponseMany } from '@/models/apiResponse';
import { Product } from '@/models/product';
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const token = request.headers.get('x-access-token') as string;
  const response = await fetch(`${process.env.API_URL}products`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const data: ResponseMany<Product> = await response.json()

  const productImages = await Promise
      .all(data.items.map(({ productId }) => fetch(`${process.env.API_URL}product/${productId}/images`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => res.json()).then(images => ({ productId, images }))
))

  const indexedImages = productImages.reduce((acc, { productId, images }) => {
    // @ts-expect-error I dont know why this is not working
    acc[productId] = images;
    return acc;
  }, {});

  return NextResponse.json({
    ...data,
        // @ts-expect-error I dont know why this is not working
    items: data.items.map(product => ({ ...product, images: indexedImages[product.productId] || [] }))
  })
}
