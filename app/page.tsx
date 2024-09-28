import ProductListing from "@/components/product-listing";
import { cookies } from 'next/headers';

const getCookie = async (name: string) => {
    return cookies().get(name)?.value;
}

export default async function Home() {
  const accessToken = await getCookie('access_token');
  const headers = accessToken ? { Cookie: `access_token=${accessToken};` } : undefined;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}products`, {
    headers
  });
  const data = await response.json();

  return (
    <>
      <ProductListing productsResponse={data} />
    </>
  );
}
