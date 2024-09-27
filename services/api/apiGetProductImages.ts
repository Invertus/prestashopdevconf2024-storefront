import apiFetch from "@/services/api/apiFetch";

export interface Image {
    imageId: number;
    imageUrl: string;
    cover: boolean;
}

async function getProductImages(productId: number): Promise<Image[]> {
    const response = await apiFetch(`${process.env.API_URL}product/${productId}/images`)
    return response.json()
}

export default getProductImages