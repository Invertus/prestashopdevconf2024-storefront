import ProductListing from "@/components/product-listing";

export default async function Home() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}products`).then((res) => res.json());

  console.info(data)

  return (
    <>
      <ProductListing productsResponse={data} />
    </>
  );
}
