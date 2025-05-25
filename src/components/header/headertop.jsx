'use client'
import React, { Suspense } from 'react'
import BurgerMenu from './burgrManu'
import SearchBox from '@/app/search/search'
import Link from 'next/link'
import useBasket from '../../app/store/store'


export default function Headertop() {
  const basketCount = useBasket((state) => state.basketCount())

  return (
    <div className='w-[100%] mx-auto flex items-center  h-[70px] justify-between'>
      <div className='flex w-1/2 h-full items-center'>
        <BurgerMenu />
        <Link href='/' className='w-[30%] md:w-[25%] lg:w-[20%] xl:w-[18%] lg:p-3 mx-1 lg:mr-3 flex items-center'>
        <figure className='w-full flex items-center'>
          <img src="/logo/logo.svg" alt="" />
        </figure>
        </Link>
        <Suspense fallback={null}>
           <SearchBox />
        </Suspense>
       
      </div>
      <div className='w-1/6 lg:w-[10%] h-[40%] lg:h-[50%] flex ml-0'>
        <figure className='w-[70%] h-full flex justify-center border-2 px-2 p-1 rounded-xl border-sorkhabi *:text-sorkhabi' >
          <img src="/icon/login.svg" alt="" />
          <figcaption className='-mt-1 xl:mt-0 pr-1 md:pr-2'>ورود</figcaption>
        </figure>
        <Link className='w-[35%]' href='/basket'>
          <figure className='w-full h-full flex relative'>
            <img className='w-full' src="/icon/basket.svg" alt="" />
            {basketCount > 0 && (
              <span className="absolute top-4 left-1 bg-sorkhabi text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {basketCount}
              </span>)}
          </figure>
        </Link>
      </div>
    </div>
  )
}
