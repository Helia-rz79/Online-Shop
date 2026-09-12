'use client'

import { useEffect, useState } from 'react'

const productsWithBrokenImages = new Set(['26', '30'])

export default function ProductImage({ src, alt, productId, className = '', fallbackSrc = '/logo/product.jpg' }) {
  const shouldUseFallback = !src || productsWithBrokenImages.has(String(productId))
  const [imageSrc, setImageSrc] = useState(shouldUseFallback ? fallbackSrc : src)

  useEffect(() => {
    setImageSrc(shouldUseFallback ? fallbackSrc : src)
  }, [src, fallbackSrc, shouldUseFallback])

  return (
    <img
      className={className}
      src={imageSrc}
      alt={alt}
      loading='lazy'
      onError={() => {
        if (imageSrc !== fallbackSrc) setImageSrc(fallbackSrc)
      }}
      onLoad={(event) => {
        if (imageSrc !== fallbackSrc && (event.currentTarget.naturalWidth < 2 || event.currentTarget.naturalHeight < 2)) {
          setImageSrc(fallbackSrc)
        }
      }}
    />
  )
}
