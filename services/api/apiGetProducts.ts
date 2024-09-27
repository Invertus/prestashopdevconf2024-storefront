import apiFetch from "@/services/api/apiFetch";

export interface ApiResponse<Entity> {
    totalItems: number;
    order_by: string;
    sortOrder: "asc" | "desc";
    limit: number;
    items: Entity[];
}

export interface Product {
    productId: number;
    active: boolean;
    name: string;
    quantity: number;
    price: string;
    category: string;
}

async function getProducts(): Promise<ApiResponse<Product>> {
    const response = await apiFetch(`${process.env.API_URL}products`)
    return response.json()
}

export default getProducts;