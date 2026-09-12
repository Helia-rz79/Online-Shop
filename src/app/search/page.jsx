import Container from '../components/container'
import ProductGrid from '../components/product/ProductGrid'

async function getAllProducts() {
  const response = await fetch('https://6826186c397e48c91314f9d9.mockapi.io/api/store', { cache: 'no-store' })
  return response.json()
}

export default async function SearchPage({ searchParams }) {
  const params = await searchParams
  const query = params.query?.trim().toLowerCase() || ''

  if (!query) return null

  const products = await getAllProducts()
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query) || product.brand.toLowerCase().includes(query)
  )

  return (
    <main className='py-7 sm:py-10'>
      <Container>
        <h1 className='mb-5 text-lg font-bold sm:text-xl'>نتایج جستجو برای «{query}»</h1>
        {filteredProducts.length ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className='flex min-h-72 items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center'>
            <p className='text-sm text-gray-500'>محصولی با این عنوان یا برند پیدا نشد.</p>
          </div>
        )}
      </Container>
    </main>
  )
}
