import React from 'react'
import Container from '../../components/container'
import Link from 'next/link'


async function getData() {
  const data = await fetch('https://6826186c397e48c91314f9d9.mockapi.io/api/store?category=makeup')
  const x = await data.json()
  return x

}

export default async function Main() {
  const data = await getData()
  return (
    <Container>
      <ul className='w-[90%] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 my-10 overflow-hidden'>
        {data && data.map((val) => {
          let path = `/makeup/${val.id}.${val.title}`
          return (
            <li className='border border-gray-200 p-3 md:p-8' key={val.id}>
              <Link href={path}>
                <img className='h-[50%] mx-auto object-cover' src={val.img} alt="" />
                <div className='w-[90%] h-[40%] mt-5'>
                  <span className='text-gray-500 my-2 flex'>{val.brand}</span>
                  <h3 className='xl:text-[18px]'>{val.title}</h3>
                  <div className='flex flex-wrap justify-center mb-2'>
                    <s className='flex w-full justify-center xl:text-xl text-gray-500 pr-1 lg:pr-5 lg:mt-5'>{val.price}</s>
                    <span className='bg-sorkhabi text-white rounded-lg flex justify-center items-center w-[30px] h-[20px] xl:w-[50px] xl:h-[30px] xl:text-xl -translate-x-24 xl:-translate-x-36 xl:-translate-y-5 lg:-translate-x-28 -translate-y-4  '>{val.discount}</span>
                    <h6 className='flex xl:text-xl justify-center mt-2'>{val.newprice} تومان</h6>
                  </div>
                </div>

              </Link>
            </li>
          )
        })}

      </ul>
    </Container>
  )
}
