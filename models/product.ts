import { ProductImage } from "@/models/productImage";

export interface Product {
  names?: string[]
  descriptions?: string[];
  productId: number;
  active: boolean;
  name: string;
  quantity: number;
  price: string;
  category: string;
  images: ProductImage[];
}
