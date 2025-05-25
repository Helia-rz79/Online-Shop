'use client'
import React from 'react';
import useBasket from '../store/store';
import Link from 'next/link';
import Container from '../../components/container';

export default function Page() {
    const { data, del, plus, minus } = useBasket();
    console.log(data);

    // محاسبه مجموع قیمت‌ها

    const totalPrice = data.reduce((sum, item) => sum + item.count * item.price, 0);
    const totalDiscount = data.reduce((sum, item) => sum + item.count * (item.price - item.newprice), 0);
    const finalPrice = data.reduce((sum, item) => sum + item.count * item.newprice, 0);


    if (data.length === 0) {
        return (
            <Container>
                <Link className="mt-5 flex mr-5" href="./">
                    <img className="w-[40px] h-[40px]" src="/icon/back.svg" alt="بازگشت" />
                </Link>
                <div className="w-[90%] mx-auto min-h-[600px] mt-8 flex items-center justify-center">
                    <div className="text-center text-gray-500 text-xl">🛒 سبد خرید شما خالی است.</div>
                </div>
            </Container>
        );
    }

    return (
        <Container>
            <div className="mt-8 mb-4">
                <div className="flex">
                    <Link className="-mt-3" href="./">
                        <img className="w-[40px] h-[40px]" src="/icon/back.svg" alt="بازگشت" />
                    </Link>
                    <h3 className="text-sorkhabi mr-4">سبد خرید</h3>
                </div>
                <div className="w-full mx-auto flex flex-wrap justify-between">
                    <ul className="w-full lg:w-3/5 mx-auto">
                        {data.map((val) => (
                            <li className="flex flex-wrap w-full h-[200px] shadow mt-6 lg:mr-6" key={val.id}>
                                <img className="w-[20%] h-full object-contain" src={val.img} alt={val.title} />
                                <section className="w-[50%] p-10">
                                    <h3 className="mb-2">{val.title}</h3>
                                    <h6 className="text-gray-500">سایز: {val.size}</h6>
                                    <div className="flex justify-around items-center mt-2 md:mt-6 border border-sorkhabi w-[150px] md:w-[200px] h-[50px] rounded-lg">
                                        <div className="flex">
                                            <span className="cursor-pointer" onClick={() => plus(val.id)}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="size-6"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                </svg>
                                            </span>
                                            <h3 className="text-xl font-bold mx-1">{val.count}</h3>
                                            <span className="cursor-pointer" onClick={() => minus(val.id)}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="size-6"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                                </svg>
                                            </span>
                                        </div>
                                        <b className="cursor-pointer" onClick={() => del(val.id)}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                                />
                                            </svg>
                                        </b>
                                    </div>
                                </section>
                                <section className="w-[25%] md:w-[20%] mt-28">
                                    <s className="flex justify-center text-gray-500">
                                        {val.price} تومان
                                    </s>
                                    <span className="bg-sorkhabi text-white rounded-lg flex justify-center items-center w-[40px] h-[25px]  translate-y-1 -translate-x-20 md:-translate-x-32">
                                        {val.discount}
                                    </span>
                                    <h6 className="flex justify-center mt-2">{val.newprice} تومان</h6>
                                </section>
                            </li>
                        ))}
                    </ul>

                    <div className="w-full lg:w-[30%] h-[350px] shadow bg-gray-50 p-6 rounded-lg mt-6">
                        <div className='flex justify-between border-b border-b-gray-300 mt-2'>
                            <h4 className="mb-2 text-gray-500">قیمت کالاها (بدون تخفیف):</h4>
                            <p className='text-gray-500'>{totalPrice.toLocaleString()} تومان</p>
                        </div>

                        <div className='flex justify-between border-b border-b-gray-300 items-center mt-3'>
                            <h4 className="my-2 text-sorkhabi">تخفیف کالاها:</h4>
                            <p className='text-sorkhabi'>{totalDiscount.toLocaleString()} تومان</p>
                        </div>

                        <div className='flex justify-between mb-20 mt-6'>
                            <h4 className=" text-black">جمع سبدخرید:</h4>
                            <p className=" text-black">{finalPrice.toLocaleString()} تومان</p>
                        </div>

                        <button
                            onClick={() => alert('ثبت سفارش انجام شد!')}
                            className="w-full mt-7 bg-sorkhabi text-white py-3 rounded-lg hover:bg-pink-700 transition"
                        >
                            ثبت سفارش
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    );
}
