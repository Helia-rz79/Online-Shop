import React from "react"
import Link from "next/link"

async function getAllProducts() {
  const res = await fetch("https://6826186c397e48c91314f9d9.mockapi.io/api/store", { cache: "no-store" })
  return await res.json()
}

export default async function SearchPage({ searchParams }) {
  const query = searchParams.query?.toLowerCase() || ""
  const products = await getAllProducts()

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(query) || p.brand.toLowerCase().includes(query)
  )

  if (!query) {
    return null 
  }

  return (
    <div className="w-[95%] mx-auto mt-10">
      <h2 className="mb-4 font-bold text-[18px]">نتایج جست‌وجو برای: "{query}"</h2>
      {filtered.length === 0 ? (
        <p className="text-gray-500">محصولی یافت نشد.</p>
      ) : (
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map(val => {
            const path = `/${val.id}-${val.title.replace(/\s+/g, "-")}`
            return (
              <li key={val.id} className="border border-gray-200 p-2 md:p-4 bg-white ">
                <Link href={path}>
                  <img className="h-[45%] mx-auto object-contain flex" src={val.img} alt={val.title} />
                  <div className="w-[90%] h-[30%] mt-2 -mb-16 lg:-mb-20">
                    <span className="text-gray-500 my-2 flex">{val.brand}</span>
                    <h3 className="text-[14px] lg:text-[16px] mb-1">{val.title}</h3>
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
      )}
    </div>
  )
}
