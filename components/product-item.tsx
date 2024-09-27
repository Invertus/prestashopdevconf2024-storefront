'use client'

import ProductCard from "@/components/product-card";
import ProductListItem from "@/components/product-list-item";
import useClient from "@/hooks/useClient";
import { Product } from "@/services/api/apiGetProductsServer";

interface ProductItemProps {
    view: 'list' | 'card';
    product: Product;
  }

export default function ProductItemComponent({ view, product }: ProductItemProps) {
    const { data, isLoading } = useClient([ 'images', product.productId ], `product/${product.productId}/images`, { 
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5
     })

    return view === 'list' ? (
        <ProductListItem key={product.productId} product={product} />
      ) : (
        <ProductCard key={product.productId} product={product} />
      )
}