'use client'

import Container from '../components/container'
import BackButton from '../components/BackButton'
import useBasket from '../store/store'
import { useRouter } from 'next/navigation'
import ProductImage from '../components/product/ProductImage'

const formatPrice = (price) => Number(price || 0).toLocaleString('fa-IR')

function QuantityButton({ label, onClick, children }) {
  return (
    <button type='button' onClick={onClick} className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-sorkhabi transition hover:bg-pink-50' aria-label={label}>
      {children}
    </button>
  )
}

export default function BasketPage() {
  const { data, del, plus, minus } = useBasket()
  const router = useRouter()

  const totalPrice = data.reduce((sum, item) => sum + item.count * item.price, 0)
  const totalDiscount = data.reduce((sum, item) => sum + item.count * (item.price - item.newprice), 0)
  const finalPrice = data.reduce((sum, item) => sum + item.count * item.newprice, 0)

  const handleCheckout = () => {
    const orderCode = `KH-${Date.now().toString().slice(-8)}`
    router.push(`/order-success?code=${orderCode}`)
  }

  if (data.length === 0) {
    return (
      <main>
        <Container>
          <div className='py-5 sm:py-8'>
            <BackButton />
            <div className='flex min-h-[420px] flex-col items-center justify-center text-center'>
              <span className='text-4xl' aria-hidden='true'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart-minus"><path d="M16 5h6"/><path d="m2.05 2.05 1.099-.028a1 1 0 011.008.815l2.69 14.347A1 1 0 007.83 18H18"/><path d="M4.564 5H12"/><path d="M6.25 14h12.712a2 2 0 001.991-1.57l.514-3.113"/><circle cx="18" cy="20" r="2"/><circle cx="8" cy="20" r="2"/></svg>
              </span>
              <h2 className='mt-4 text-base font-bold sm:text-lg'>سبد خرید شما خالی است</h2>
              <p className='mt-2 text-sm text-gray-500'>محصولات مورد علاقه‌تان را به سبد خرید اضافه کنید.</p>
            </div>
          </div>
        </Container>
      </main>
    )
  }

  return (
    <main>
      <Container>
        <div className='py-5 sm:py-8'>
          <div className='flex items-center gap-3'>
            <BackButton />
            <div>
              <h2 className='text-base font-bold sm:text-lg text-sorkhabi'>سبد خرید</h2>
              <p className='mt-0.5 text-xs text-gray-500'>{data.length.toLocaleString('fa-IR')} نوع کالا</p>
            </div>
          </div>

          <div className='mt-5 grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-7'>
            <ul className='space-y-3'>
              {data.map((item) => (
                <li className='grid grid-cols-[88px_minmax(0,1fr)] gap-3 rounded-xl border border-gray-200 bg-white p-3 sm:grid-cols-[112px_minmax(0,1fr)_170px] sm:gap-4 sm:px-4' key={item.id}>
                  <figure className='flex h-24 items-center justify-center rounded-xl bg-gray-50 p-2 sm:h-28'>
                    <ProductImage className='h-full w-full object-contain' src={item.img} productId={item.id} alt={item.title} />
                  </figure>

                  <section className='min-w-0'>
                    <p className='line-clamp-2 text-sm font-medium leading-6'>{item.title}</p>
                    {item.size && <p className='mt-1 text-xs text-gray-500'>سایز: {item.size}</p>}
                    <div className='mt-3 inline-flex items-center rounded-xl border border-gray-200 bg-white p-0.5'>
                      <QuantityButton label='افزایش تعداد' onClick={() => plus(item.id)}>
                        <svg className='h-4 w-4' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'><path strokeLinecap='round' d='M12 5v14M5 12h14' /></svg>
                      </QuantityButton>
                      <span className='min-w-7 text-center text-sm font-bold'>{item.count.toLocaleString('fa-IR')}</span>
                      <QuantityButton label='کاهش تعداد' onClick={() => minus(item.id)}>
                        <svg className='h-4 w-4' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'><path strokeLinecap='round' d='M5 12h14' /></svg>
                      </QuantityButton>
                    </div>
                  </section>

                  <section className='col-span-2 flex items-end gap-1 border-t border-gray-100 pt-3 sm:col-span-1 sm:flex-col sm:items-end sm:border-r sm:border-t-0 sm:pr-4 sm:pt-0'>
                    <button type='button' onClick={() => del(item.id)} className='order-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-gray-400 transition hover:bg-red-50 hover:text-red-500 sm:order-none' aria-label={`حذف ${item.title}`}>
                      <svg className='h-5 w-5' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.7'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M4 7h16m-10 4v6m4-6v6M9 7l1-3h4l1 3m2 0-1 13H8L7 7' />
                      </svg>
                    </button>
                    <div className='text-left'>
                      {item.price > item.newprice && <s className='text-xs text-gray-400'>{formatPrice(item.price * item.count)}</s>}
                      <p className='mt-1 whitespace-nowrap text-sm font-bold'>{formatPrice(item.newprice * item.count)} <span className='text-[11px] font-normal'>تومان</span></p>
                      {item.discount && <span className='mt-1 inline-flex rounded-full bg-pink-50 px-2 py-0.5 text-[11px] text-sorkhabi'>{item.discount} تخفیف</span>}
                    </div>
                  </section>
                </li>
              ))}
            </ul>

            <aside className='rounded-2xl border border-gray-200 bg-gray-50 p-4 lg:sticky lg:top-4'>
              <h2 className='text-sm font-bold'>خلاصه سفارش</h2>
              <dl className='my-4 space-y-3 text-sm'>
                <div className='flex items-center justify-between gap-4 text-gray-500'>
                  <dt>قیمت کالاها</dt>
                  <dd className='whitespace-nowrap'>{formatPrice(totalPrice)} تومان</dd>
                </div>
                <div className='flex items-center justify-between gap-4 text-sorkhabi'>
                  <dt>سود شما از خرید</dt>
                  <dd className='whitespace-nowrap'>{formatPrice(totalDiscount)} تومان</dd>
                </div>
                <div className='flex items-center justify-between gap-4 border-t border-gray-200 pt-3 font-bold'>
                  <dt>مبلغ قابل پرداخت</dt>
                  <dd className='whitespace-nowrap'>{formatPrice(finalPrice)} تومان</dd>
                </div>
              </dl>
              <button type='button' onClick={handleCheckout} className='mt-5 h-10 w-full cursor-pointer rounded-xl bg-sorkhabi text-sm font-bold text-white transition hover:bg-pink-700'>
                ثبت سفارش
              </button>
            </aside>
          </div>
        </div>
      </Container>
    </main>
  )
}
