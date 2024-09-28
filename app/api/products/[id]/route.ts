import { ResponseMany } from '@/models/apiResponse';
import { Product } from '@/models/product';
import { NextResponse } from 'next/server'

export async function GET(request: Request,  { params: { id } }: { params: { id: string } }) {
  const token = request.headers.get('x-access-token') as string;

  const [productResponse, imageResponse] = await Promise.all([
    fetch(`${process.env.API_URL}product/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }),
    fetch(`${process.env.API_URL}product/${id}/images`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  ])
  const product: Product = await productResponse.json();
  const images = await imageResponse.json();

  console.log(product, images)

  return NextResponse.json({
    ...product,
    images
  })
}
