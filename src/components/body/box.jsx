import React from 'react'
import Link from 'next/link'

async function getData() {
  const data = await fetch('https://6826186c397e48c91314f9d9.mockapi.io/api/store?category=best');
  const x = await data.json();
  return x;
}

export default async function Box() {
  const data = await getData();

  return (
    <div className='w-[95%] mx-auto bg-sorkhabi mt-10 p-2 flex h-[300px] md:h-[380px] gap-3 overflow-hidden'>
      <div className='w-1/6 flex flex-wrap justify-center'>
        <img className='object-contain' src="/logo/box-text.webp" alt="Box Text" />
        <img className='object-contain animate-pulse' src="/logo/box-img.webp" alt="Box Image" />
      </div>
      <ul className='w-5/6 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ml-2 my-2 overflow-hidden'>
        {data && data.map((val) => {
          let path = `/${val.id}-${val.title.replace(/\s+/g, "-")}`;
          return (
            <li className='border border-gray-200 p-2 md:p-8 bg-white' key={val.id}>
              <Link href={path}>
                <img className='h-[38%] mx-auto object-contain flex -mt-3' src={val.img} alt={val.title} />
                <div className='w-[90%] h-[40%] mt-2'>
                  <span className='text-gray-500 my-2 flex'>{val.brand}</span>
                  <h3 className='text-[13px] xl:text-[16px] xl:mb-1'>{val.title}</h3>
                  <div className='flex flex-wrap justify-center -mt-3 xl:mt-0'>
                    <s className='flex xl:text-lg pr-1 text-gray-500 lg:mt-5'>{val.price}</s>
                    <span className='bg-sorkhabi text-white rounded-lg flex justify-center items-center w-[50px] h-[30px] xl:text-lg -translate-x-6 xl:translate-y-5'>{val.discount}</span>
                    <h6 className='flex xl:text-xl justify-center mt-2'>{val.newprice} تومان</h6>
                  </div>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

