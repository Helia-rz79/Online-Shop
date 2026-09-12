'use client'
import React, { Suspense } from 'react'
import BurgerMenu from './burgrManu'
import SearchBox from '@/app/search/search'
import Link from 'next/link'
import useBasket from '../../store/store'


export default function Headertop() {
  const basketCount = useBasket((state) => state.basketCount())

  return (
    <div className='flex min-h-14 w-full flex-wrap items-center gap-3 py-3 sm:flex-nowrap lg:gap-6'>
      <div className='flex min-w-0 flex-1 items-center gap-2 '>
        <BurgerMenu />
        <Link href='/' className='flex w-[80px] shrink-0 items-center sm:w-[100px] lg:w-[120px]' aria-label='صفحه اصلی'>
        <figure className='w-full p-1 lg:p-4'>
          <img src="/logo/logo.svg" alt="فروشگاه خانومی" />
        </figure>
        </Link>
        <div className='hidden min-w-0 flex-1 sm:block'>
          <Suspense fallback={<div className='h-11 w-full rounded-xl bg-gray-100' />}>
            <SearchBox />
          </Suspense>
        </div>
      </div>
      <div className='flex shrink-0 items-center gap-2 sm:gap-3'>
        <button type='button' className='flex h-9 items-center justify-center gap-1 rounded-lg border-2 border-sorkhabi px-2 text-sorkhabi sm:px-3' aria-label='ورود به حساب کاربری'>
          <img className='h-5 w-5' src="/icon/login.svg" alt="" />
          <span className='hidden sm:inline text-sm'>ورود</span>
        </button>
        <Link className='relative flex h-10 w-10 items-center justify-center rounded-lg' href='/basket' aria-label={`سبد خرید، ${basketCount} کالا`}>
            <img className='h-7 w-7' src="/icon/basket.svg" alt="" />
            {basketCount > 0 && (
              <span className="absolute -left-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-sorkhabi px-1 text-[11px] text-white">
                {basketCount}
              </span>)}
        </Link>
      </div>
      <div className='w-full sm:hidden'>
        <Suspense fallback={<div className='h-10 w-full rounded-xl bg-gray-100' />}>
          <SearchBox />
        </Suspense>
      </div>
    </div>
  )
}
