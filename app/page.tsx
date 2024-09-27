import ProductListing from "@/components/product-listing";
import getProducts from "@/services/api/apiGetProducts";

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <ProductListing />
    </>
  );
}
