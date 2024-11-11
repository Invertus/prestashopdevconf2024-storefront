import ProductListing from "@/components/product-listing";

export default async function Home() {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}products`);
  const data = await response.json();

  return (
    <>
      <ProductListing data={data} />
    </>
  );
}
