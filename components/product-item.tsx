import ProductCard from "@/components/product-card";
import ProductListItem from "@/components/product-list-item";
import { Product } from "@/models/product";

interface ProductItemProps {
    view: 'list' | 'card';
    product: Product;
  }

export default function ProductItemComponent({ view, product }: ProductItemProps) {
    return view === 'list' ? (
        <ProductListItem key={product.productId} product={product} />
      ) : (
        <ProductCard key={product.productId} product={product} />
      )
}
