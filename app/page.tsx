'use client'
import ProductListing from "@/components/product-listing";
import { useState } from "react";

export default function Home() {
  const [view, setView] = useState<'list' | 'card'>('card')
  return (
    <>
      <div className="mb-4 flex justify-end">
          <button
            onClick={() => setView(view === 'list' ? 'card' : 'list')}
            className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
          >
            {view === 'list' ? 'Card View' : 'List View'}
          </button>
      </div>
      <ProductListing view={view} />
    </>
  );
}
