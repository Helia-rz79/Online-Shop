import Link from 'next/link'
import Container from '../components/container'

export default async function OrderSuccessPage({ searchParams }) {
  const params = await searchParams
  const orderCode = params.code || 'KH-00000000'

  return (
    <main>
      <Container>
        <div className='flex min-h-[500px] items-center justify-center py-8'>
          <section className='w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm sm:p-8'>
            <div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600'>
              <svg className='h-8 w-8' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' aria-hidden='true'>
                <path strokeLinecap='round' strokeLinejoin='round' d='m5 12 4 4L19 6' />
              </svg>
            </div>

            <h2 className='mt-5 text-lg font-bold sm:text-xl'>سفارش شما با موفقیت ثبت شد</h2>
            <p className='mt-2 text-sm leading-7 text-gray-500'>از خرید شما متشکریم. سفارش شما ثبت شده و در حال بررسی است.</p>

            <div className='mt-6 rounded-xl border border-gray-50 px-4 py-3'>
              <p className='text-xs text-gray-500'>کد سفارش</p>
              <p className='mt-1 text-lg font-bold tracking-wider text-sorkhabi' dir='ltr'>{orderCode}</p>
            </div>

            <Link href='/' className='mt-6 flex h-10 w-full items-center justify-center rounded-xl bg-sorkhabi! text-sm font-bold text-white transition hover:bg-pink-700'>
              بازگشت به فروشگاه
            </Link>
          </section>
        </div>
      </Container>
    </main>
  )
}
