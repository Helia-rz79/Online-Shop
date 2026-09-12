'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import useBasket from '../../store/store'
import BackButton from '../BackButton'
import ProductImage from './ProductImage'

const services = [
  { icon: '/icon/warranty.svg', alt: 'ضمانت', text: 'ضمانت اصالت و سلامت کالا' },
  { icon: '/icon/box.svg', alt: 'مرجوعی', text: 'بازگشت کالا تا ۷ روز طبق شرایط مرجوعی' },
  { icon: '/icon/truck.svg', alt: 'ارسال', text: 'ارسال رایگان برای خرید بیش از ۲ میلیون تومان' },
]

export default function ProductDetails({ data }) {
  const addToBasket = useBasket((state) => state.addToBasket)
  const [showModal, setShowModal] = useState(false)
  const [usageOpen, setUsageOpen] = useState(true)
  const router = useRouter()

  const handleAdd = () => {
    addToBasket(data)
    setShowModal(true)
  }

  return (
    <article className='mx-auto w-full max-w-6xl py-5'>
      <BackButton className='mb-2' />

      <div className='grid gap-5 md:grid-cols-[240px_minmax(0,1fr)] lg:grid-cols-[260px_minmax(0,1fr)_280px] lg:gap-7'>
        <figure className='flex min-h-48 items-center justify-center rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:min-h-56'>
          <ProductImage className='h-52 w-1/2 object-contain sm:h-60 md:w-full' src={data.img} productId={data.id} alt={data.title} />
        </figure>

        <section className='min-w-0 py-1'>
          <p className='text-sm text-gray-500'>{data.brand}</p>
          <h2 className='mt-3 text-base font-bold leading-7 sm:text-xl'>{data.title}</h2>
          {data.size && (
            <p className='mt-5 inline-flex rounded-lg bg-gray-50 px-3 py-2 text-sm text-gray-600'>سایز: {data.size}</p>
          )}

          <div className='mt-6 flex flex-wrap items-center gap-y-3 border-y border-gray-200 py-3 text-xs text-gray-500 sm:text-sm'>
            <div className='flex items-center gap-1.5 border-l border-gray-200 px-3 first:pr-0'>
              <span className='text-base text-orange-400' aria-hidden='true'>★</span>
              <span><b className='font-medium text-gray-700'>۴.۷</b> امتیاز</span>
            </div>
            <div className='flex items-center gap-1.5 border-l border-gray-200 px-3'>
              <svg className='h-5 w-5 text-gray-400' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.7' aria-hidden='true'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M21 11.5a8.4 8.4 0 0 1-9 8.5 9.6 9.6 0 0 1-4-.9L3 21l1.8-4.3A8.2 8.2 0 0 1 3 11.5 8.5 8.5 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5Z' />
              </svg>
              <span>۱۸۰ دیدگاه</span>
            </div>
            <div className='flex items-center gap-1.5 px-3'>
              <span className='text-xl leading-none text-sorkhabi' aria-hidden='true'>♥</span>
              <span>۱.۲K علاقه‌مندی</span>
            </div>
          </div>
        </section>

        <aside className='rounded-xl border border-gray-200 bg-gray-50 px-3 py-4 md:col-span-2 lg:col-span-1'>
          <div className='mb-4 space-y-3 border-b border-gray-200 pb-4'>
            {services.map((service) => (
              <figure className='flex items-center gap-2 text-xs text-gray-500' key={service.text}>
                <img className='h-4 w-4 shrink-0' src={service.icon} alt={service.alt} />
                <figcaption>{service.text}</figcaption>
              </figure>
            ))}
          </div>

          <div className='flex items-center justify-center gap-1'>
            <div>
              <s className='text-xs text-gray-400 sm:text-sm text-left'>{data.price}</s>
              <p className='mt-1 text-base font-bold sm:text-lg'>{data.newprice} <span className='text-xs font-normal'>تومان</span></p>
            </div>
            <span className='rounded-full bg-sorkhabi px-2.5 py-1 text-xs text-white'>{data.discount}</span>
          </div>

          <div className='mt-5 flex items-center gap-3 rounded-lg bg-blue-50 px-3 py-1 mb-2'>
            <img className='h-9 w-9 shrink-0 rounded-lg object-contain' src='/logo/snappay.png' alt='اسنپ‌پی' />
            <p className='text-sm font-semibold text-blue-600'>۴ قسط ماهانه با اسنپ‌پی</p>
          </div>

          <button onClick={handleAdd} className='mt-4 h-10 w-full cursor-pointer rounded-lg bg-sorkhabi px-4 text-sm font-bold text-white transition hover:bg-pink-700'>
            افزودن به سبد خرید
          </button>
        </aside>
      </div>

      <section className='mt-7 rounded-2xl border border-gray-200 p-4 sm:p-5'>
        <h2 className='text-sm font-bold sm:text-base'>معرفی محصول</h2>
        <p className='mt-3 text-sm leading-7 text-gray-500'>{data.description}</p>
      </section>

      <section className='mt-4 rounded-2xl border border-gray-200 bg-white p-4 sm:p-5'>
        <button
          type='button'
          onClick={() => setUsageOpen((open) => !open)}
          className='flex w-full cursor-pointer flex-nowrap items-center justify-between gap-3 text-sm font-bold sm:text-base'
          aria-expanded={usageOpen}
          aria-controls='usage-content'
        >
          <span className='min-w-0 flex-1 text-right font-bold'>نحوه مصرف</span>
          <svg className={`h-4 w-4 shrink-0 transition-transform ${usageOpen ? 'rotate-180' : ''}`} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' aria-hidden='true'>
            <path strokeLinecap='round' strokeLinejoin='round' d='m6 9 6 6 6-6' />
          </svg>
        </button>

        {usageOpen && <div id='usage-content' className='mt-5 text-sm leading-7 text-gray-500'>
          <ul className='list-disc space-y-1 pr-5 marker:text-gray-400'>
            <li>پیش از مصرف، راهنمای درج‌شده روی بسته‌بندی محصول را مطالعه کنید.</li>
            <li>محصول را به مقدار مناسب و روی پوست یا موی تمیز استفاده کنید.</li>
            <li>برای اطمینان از سازگاری، ابتدا مقدار کمی از محصول را روی بخش کوچکی امتحان کنید.</li>
            <li>تعداد دفعات و شیوه استفاده را مطابق دستور درج‌شده روی محصول ادامه دهید.</li>
          </ul>

          <h3 className='mt-5 font-bold text-gray-500'>هشدار استفاده</h3>
          <ul className='mt-2 list-disc space-y-1 pr-5 marker:text-gray-400'>
            <li>فقط برای استعمال خارجی استفاده شود و دور از دسترس کودکان قرار گیرد.</li>
            <li>از تماس مستقیم با چشم و استفاده روی پوست ملتهب یا آسیب‌دیده خودداری کنید.</li>
            <li>در صورت مشاهده حساسیت یا تحریک، مصرف را متوقف کنید.</li>
          </ul>
        </div>}
      </section>

      {showModal && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4' role='dialog' aria-modal='true'>
          <div className='w-full max-w-sm rounded-2xl bg-white p-5 text-center shadow-xl'>
            <h2 className='text-base font-bold text-sorkhabi'>محصول به سبد خرید اضافه شد</h2>
            <p className='mt-2 text-sm text-gray-600'>{data.title}</p>
            <div className='mt-5 flex justify-center gap-3 text-sm'>
              <button onClick={() => setShowModal(false)} className='cursor-pointer rounded-lg bg-gray-100 px-3 py-2 hover:bg-gray-200'>ادامه خرید</button>
              <button onClick={() => router.push('/basket')} className='cursor-pointer rounded-lg bg-sorkhabi px-3 py-2 text-white hover:bg-pink-700'>مشاهده سبد خرید</button>
            </div>
          </div>
        </div>
      )}
    </article>
  )
}
