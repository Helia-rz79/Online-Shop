import Container from '../components/container'
import ProductGrid from '../components/product/ProductGrid'

async function getData() {
  const response = await fetch('https://6826186c397e48c91314f9d9.mockapi.io/api/store?category=makeup', { next: { revalidate: 300 } })
  return response.json()
}

export default async function MakeupPage() {
  const data = await getData()
  return (
    <main className='py-7 sm:py-10'>
      <Container>
        <h1 className='mb-5 text-lg font-bold sm:text-xl'>محصولات آرایشی</h1>
        <ProductGrid products={data} basePath='/makeup' />
      </Container>
    </main>
  )
}
