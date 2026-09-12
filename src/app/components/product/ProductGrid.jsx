import ProductCard from './ProductCard'

export default function ProductGrid({ products, basePath = '' }) {
  return (
    <ul className='grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5'>
      {products.map((product) => {
        const slug = `${product.id}-${product.title.replace(/\s+/g, '-')}`
        return <ProductCard key={product.id} product={product} href={`${basePath}/${slug}`} />
      })}
    </ul>
  )
}
