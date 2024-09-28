import ProductPage from '@/components/product-page'

export default async function Page({ params: { id } }: { params: { id: string } }) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}products/${id}`);
  const data = await response.json();
  return <ProductPage data={data} />
}
