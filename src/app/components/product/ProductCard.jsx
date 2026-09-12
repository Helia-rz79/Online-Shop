import Link from 'next/link'
import ProductImage from './ProductImage'

export default function ProductCard({ product, href }) {
  return (
    <li className='min-w-0 rounded-xl border border-gray-200 bg-white p-2.5 transition hover:-translate-y-1 hover:shadow-md sm:p-3'>
      <Link className='flex h-full flex-col' href={href}>
        <ProductImage className='h-28 w-full object-contain sm:h-36' src={product.img} productId={product.id} alt={product.title} />
        <span className='mt-3 text-xs text-gray-500 sm:text-sm'>{product.brand}</span>
        <h2 className='mt-1 line-clamp-2 min-h-10 text-xs leading-5 sm:text-sm'>{product.title}</h2>
        <div className='mt-auto flex items-center justify-end gap-2 pt-3'>
          <div className='flex min-w-0 flex-col items-end gap-1 text-left'>
            <s className='truncate text-[11px] text-gray-400 sm:text-sm'>{product.price}</s>
            <p className='whitespace-nowrap text-xs font-bold sm:text-base'>{product.newprice} <span className='text-[10px] font-normal sm:text-xs'>تومان</span></p>
          </div>
          <span className='shrink-0 rounded-full bg-sorkhabi px-2 py-1 text-[11px] text-white sm:text-xs'>{product.discount}</span>
        </div>
      </Link>
    </li>
  )
}
