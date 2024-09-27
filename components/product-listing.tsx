'use client'

import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import ProductCard from './product-card'
import ProductListItem from './product-list-item'

interface Product {
  id: number
  title: string
  price: number
  description: string
  image: string
}

interface ProductListingProps {
  view: 'list' | 'card'
  searchQuery?: string
}

export default function ProductListingComponent({ view }: ProductListingProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [ref, inView] = useInView()

  const fetchProducts = async () => {
    if (loading) return
    setLoading(true)
    try {
      // In a real application, you would fetch from your API here
      // This is a mock API call
      const response = await fetch(`https://fakestoreapi.com/products?limit=10&page=${page}`)
      const newProducts = await response.json()
      setProducts((prevProducts) => [...prevProducts, ...newProducts])
      setPage((prevPage) => prevPage + 1)
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (inView) {
      fetchProducts()
    }
  }, [inView])

  return (
    <div>
      <div className={view === 'list' ? 'space-y-4' : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'}>
        {products.map((product) =>
          view === 'list' ? (
            <ProductListItem key={product.id} product={product} />
          ) : (
            <ProductCard key={product.id} product={product} />
          )
        )}
      </div>
      {loading && <p className="text-center mt-4">Loading more products...</p>}
      <div ref={ref} className="h-10" />
    </div>
  )
}