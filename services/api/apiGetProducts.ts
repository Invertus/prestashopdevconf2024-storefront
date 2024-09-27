import apiFetch from "@/services/api/apiFetch";

interface Response<Entity> {
    totalItems: number;
    order_by: string;
    sortOrder: "asc" | "desc";
    limit: number;
    items: Entity[];
}

interface Product {
    productId: number;
    active: boolean;
    name: string;
    quantity: number;
    price: string;
    category: string;
}

async function getProducts(): Promise<Response<Product>> {
    const response = await apiFetch(`${process.env.API_URL}products`)
    return response.json()
}

export default getProducts;