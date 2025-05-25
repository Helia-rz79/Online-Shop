'use client'
import Link from 'next/link'
import useBasket from '../store/store'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function Pro({ data }) {
  const { addToBasket } = useBasket()

  /////////////////
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleAdd = () => {
    addToBasket(data);
    setShowModal(true);
  };



  return (
    <ul>
      <li className='flex flex-wrap justify-between'>
        <Link className='-mt-10' href='/'>
          <img className='w-[40px] h-[40px]' src="/icon/back.svg" alt="بازگشت" />
        </Link>

        <figure className='shadow mt-4 w-full md:w-1/3 xl:w-1/4'>
          <img className='mx-auto' src={data.img} alt={data.title} />
        </figure>

        <div className='w-full md:w-1/3 mt-4'>
          <h6 className='text-gray-500 my-2'>{data.brand}</h6>
          <h2 className='text-[18px] my-7'>{data.title}</h2>
          <p>سایز : {data.size}</p>
        </div>

        <div className='w-full md:w-1/4 flex flex-wrap justify-center mb-2 shadow bg-gray-50 p-2 mt-3 md:mt-0'>
          <div className='mt-3 p-1'>
            <figure className='flex gap-1 mb-1'>
              <img className='w-[20px] h-[20px]' src="/icon/warranty.svg" alt="ضمانت" />
              <figcaption className='text-gray-500'>ضمانت اصالت و سلامت کالا</figcaption>
            </figure>

            <figure className='flex gap-1 mb-1'>
              <img className='w-[20px] h-[20px]' src="/icon/box.svg" alt="مرجوعی" />
              <figcaption className='text-gray-500'>بازگشت کالا تا ۷ روز طبق شرایط مرجوعی</figcaption>
            </figure>

            <figure className='flex gap-1'>
              <img className='w-[20px] h-[20px]' src="/icon/truck.svg" alt="ارسال" />
              <figcaption className='text-gray-500'>ارسال رایگان با خرید بیش از 2 میلیون تومان</figcaption>
            </figure>
          </div>

          <div>
            <s className='flex text-lg justify-center text-gray-500'>{data.price.toLocaleString()}</s>
            <span className='bg-sorkhabi text-white rounded-lg flex justify-center items-center w-[50px] h-[30px] text-xl text-left -translate-x-28'>{data.discount.toLocaleString()}</span>
            <h6 className='flex text-xl justify-center mt-2'>{data.newprice.toLocaleString()} تومان</h6>
            <button onClick={handleAdd} className='w-[170px] lg:w-[180px] h-[40px] font-bold rounded-lg bg-sorkhabi text-white btn cursor-pointer hover:bg-pink-700'>افزودن به سبد خرید</button>
            {/* Modal */}
            {showModal && (
              <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
                <div className="bg-white rounded-xl shadow-xl w-[90%] max-w-md p-6 text-center">
                  <h3 className="text-xl font-bold text-sorkhabi mb-4">🎉 محصول به سبد خرید اضافه شد!</h3>
                  <p className="text-gray-600 mb-6">{data.title}</p>
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={() => setShowModal(false)}
                      className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg"
                    >
                      ادامه خرید
                    </button>
                    <button
                      onClick={() => router.push('/basket')}
                      className="bg-sorkhabi text-white hover:bg-pink-700 px-4 py-2 rounded-lg"
                    >
                      مشاهده سبد خرید
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

        <div className='w-full border mt-10 p-5'>
          <h4>معرفی محصول :</h4>
          <p className='text-gray-500 my-3'>{data.description}</p>
        </div>
      </li>
    </ul>
  )
}
