import ProductCard from '../product/ProductCard'

async function getSelectedProducts() {
  try {
    const ids = [3, 6, 10, 16, 17, 22]
    const responses = await Promise.all(ids.map((id) => fetch(`https://6826186c397e48c91314f9d9.mockapi.io/api/store/${id}`, { next: { revalidate: 300 } })))
    if (responses.some((response) => !response.ok)) throw new Error('Failed to load bestsellers')
    return Promise.all(responses.map((response) => response.json()))
  } catch {
    return []
  }
}

export default async function Bestseller() {
  const data = await getSelectedProducts()
  if (!data.length) return null

  return (
    <section aria-labelledby='bestseller-title'>
      <h2 id='bestseller-title' className='mb-5 text-lg font-bold sm:text-xl'>پرفروش‌ترین‌ها</h2>
      <ul className='grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6 lg:gap-4'>
        {data.map((product) => (
          <ProductCard key={product.id} product={product} href={`/${product.id}-${product.title.replace(/\s+/g, '-')}`} />
        ))}
      </ul>
    </section>
  )
}
