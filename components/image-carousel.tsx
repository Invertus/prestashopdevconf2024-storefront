'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ImageCarouselProps {
  images: string[]
  alt: string
  className?: string
  size?: 'small' | 'large'
}

export default function ImageCarousel({ images, alt, size = 'large', className = '' }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  if (images.length === 0) {
    return null
  }

  return (
    <div className={`relative ${className}`}>
      <Image
        src={images[currentIndex]}
        alt={`${alt} - Image ${currentIndex + 1}`}
        layout="fill"
        objectFit="cover"
        className="rounded-md"
      />
      {images.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className={`absolute ${size === 'small' ? 'left-1' : 'left-2'} top-1/2 transform -translate-y-1/2 bg-background/80 ${size === 'small' ? 'h-6 w-6' : ''}`}
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            <ChevronLeft className={`h-4 w-4 ${size === 'small' ? 'h-3 w-3' : ''}`} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={`absolute ${size === 'small' ? 'right-1' : 'right-2'} top-1/2 transform -translate-y-1/2 bg-background/80 ${size === 'small' ? 'h-6 w-6' : ''}`}
            onClick={goToNext}
            aria-label="Next image"
          >
            <ChevronRight className={`h-4 w-4 ${size === 'small' ? 'h-3 w-3' : ''}`} />
          </Button>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 w-1.5 rounded-full ${
                  index === currentIndex ? 'bg-primary' : 'bg-primary/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
