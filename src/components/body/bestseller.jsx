import React from 'react'
import Link from 'next/link'

async function getSelectedProducts() {
  const ids = [3, 6, 10, 16, 22];
  const fetches = ids.map(id =>
    fetch(`https://6826186c397e48c91314f9d9.mockapi.io/api/store/${id}`)
  );

  const responses = await Promise.all(fetches);
  const data = await Promise.all(responses.map(res => res.json()));
  return data;
}

export default async function Bestseller() {
  const data = await getSelectedProducts();

  return (
    <div className='w-[95%] mx-auto mt-10 p-2'>
      <h2 className='my-4 font-bold mr-3 text-[18px]'>پرفروش ترین ها</h2>
      <ul className='w-full grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 ml-2 overflow-hidden'>
        {data && data.map((val) => {
          // لینک درست: روت اصلی + id-title
          let path = `/${val.id}-${val.title.replace(/\s+/g, "-")}`;
          return (
            <li className='border border-gray-200 p-2 md:p-8 bg-white' key={val.id}>
              <Link href={path}>
                <img className='h-[45%] mx-auto object-contain flex' src={val.img} alt={val.title} />
                <div className='w-[90%] h-[60%] md:mt-2 lg:-mb-5'>
                  <span className='text-[12px] lg:text-[16px] text-gray-500 my-2 flex'>{val.brand}</span>
                  <h3 className='text-[12px] md:text-[14px] xl:text-[16px]'>{val.title}</h3>
                  <div className='flex flex-wrap justify-center xl:mt-2 lg:-mb-16'>
                    <s className='flex text-[13px] md:text-lg pr-1 text-gray-500 lg:mt-5'>{val.price}</s>
                    <span className='bg-sorkhabi text-[13px] text-white rounded-lg flex justify-center items-center w-[30px] h-[20px] md:w-[50px] md:h-[30px] md:text-lg -translate-x-4 lg:translate-y-5'>{val.discount}</span>
                    <h6 className='flex text-[13px] md:text-xl justify-center mt-2'>{val.newprice} تومان</h6>
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
