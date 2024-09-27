import ProductListing from "@/components/product-listing";
import getProducts from "@/services/api/apiGetProductsServer";

export default async function Home() {
  const data = await getProducts();

  return (
    <>
      <ProductListing accessToken={data.token} productsResponse={data.response} />
    </>
  );
}
