import apiFetch from "@/services/api/apiFetchServer";

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

async function getProducts(): Promise<{ token: string, response: ApiResponse<Product> }> {
    const result = await apiFetch(`${process.env.API_URL}products`)

    return {
        token: result.token as string,
        response: await result.response.json()
    }
}

export default getProducts;