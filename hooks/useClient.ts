import { TokenContext } from "@/components/product-listing";
import { QueryKey, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useContext } from "react";

const useClient = (id: QueryKey, endpoint: string, options?: UseQueryOptions) => {
    const token = useContext(TokenContext);

    return useQuery(id, () => fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(r => r.json()), options)
}

export default useClient;