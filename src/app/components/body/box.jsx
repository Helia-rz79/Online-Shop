import Link from 'next/link'
import ProductImage from '../product/ProductImage'

async function getData() {
  try {
    const [offersResponse, replacementResponse] = await Promise.all([
      fetch('https://6826186c397e48c91314f9d9.mockapi.io/api/store?category=best', { next: { revalidate: 300 } }),
      fetch('https://6826186c397e48c91314f9d9.mockapi.io/api/store/3', { next: { revalidate: 300 } }),
    ])

    if (!offersResponse.ok) throw new Error('Failed to load offers')

    const offers = await offersResponse.json()
    const replacement = replacementResponse.ok ? await replacementResponse.json() : null

    return replacement ? [...offers, replacement] : offers
  } catch {
    return []
  }
}

function ProductCard({ product }) {
  const path = `/${product.id}-${product.title.replace(/\s+/g, '-')}`

  return (
    <li className='w-[165px] shrink-0 snap-start rounded-xl border border-gray-100 bg-white p-2.5 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:w-[210px] lg:w-auto lg:min-w-0 lg:p-3'>
      <Link className='flex h-full flex-col' href={path}>
        <ProductImage className='h-28 w-full object-contain sm:h-32 lg:h-36' src={product.img} productId={product.id} alt={product.title} />
        <span className='mt-3 text-xs text-gray-500 sm:text-sm'>{product.brand}</span>
        <h3 className='mt-1 line-clamp-2 min-h-10 text-sm leading-5'>{product.title}</h3>
        <div className='mt-auto flex items-center justify-end gap-2 pt-3'>
          <div className='flex min-w-0 flex-col items-end gap-1 text-left'>
            <s className='text-xs text-gray-400 sm:text-sm'>{product.price}</s>
            <p className='whitespace-nowrap text-sm font-bold sm:text-base'>{product.newprice} <span className='text-xs font-normal'>تومان</span></p>
          </div>
          <span className='shrink-0 rounded-full bg-sorkhabi px-2 py-1 text-xs text-white'>{product.discount}</span>
        </div>
      </Link>
    </li>
  )
}

export default async function Box() {
  const data = await getData()
  const products = data.filter((product) => String(product.id) !== '26').slice(0, 4)

  if (!products.length) return null

  return (
    <section className='rounded-xl bg-sorkhabi p-3 md:p-5 lg:flex lg:gap-5' aria-labelledby='special-offers-title'>
      <div className='mb-2 flex items-center justify-between lg:justify-center  gap-4 text-white lg:mb-0 lg:w-44 lg:shrink-0 lg:flex-col'>
        <img className='h-10 w-auto object-contain brightness-0 invert sm:h-12 lg:h-auto lg:max-h-28' src='/logo/box-text.webp' alt='پیشنهاد شگفت‌انگیز' />
        <img className='hidden! max-h-32 object-contain lg:block!' src='/logo/box-img.webp' alt='' />
        <h2 id='special-offers-title' className='lg:hidden flex items-center gap-0 text-sm font-bold text-left'>مشاهده همه 
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
        </h2>
      </div>
      <ul className='flex snap-x snap-mandatory gap-3 overflow-x-auto px-1 pb-2 lg:grid lg:flex-1 lg:grid-cols-4 lg:overflow-visible lg:pb-0'>
        {products.map((product) => <ProductCard product={product} key={product.id} />)}
      </ul>
    </section>
  )
}
