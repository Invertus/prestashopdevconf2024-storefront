import { ProductImage } from "@/models/productImage";

export interface Product {
  productId: number;
  active: boolean;
  name: string;
  quantity: number;
  price: string;
  category: string;
  images: ProductImage[];
}
