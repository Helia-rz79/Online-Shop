import React from 'react'

function First() {
  return (
    <div className='w-1/3 md:w-1/4 mt-3 mr-10'>
      <h6 className='font-bold text-lg'>خدمات مشتریان</h6>
      <ul className='mt-10 *:cursor-pointer *:hover:text-sorkhabi' >
        <li className='mb-3'>پرسش‌های متداول</li>
        <li className='mb-3'>راهنمای خرید و پرداخت</li>
        <li className='mb-3'>شرایط مرجوعی</li>
        <li className='mb-3'>خرید کالای شانس</li>
        <li>ارتباط با پشتیبانی</li>
      </ul>
    </div>
  )
}
///////////////////
function Contact() {
  return (
    <div className='w-1/3 md:w-1/4 mt-3 mr-16'>
      <h6 className='font-bold text-lg'>راه های ارتباطی</h6>
      <ul className='mt-10'>
        <li className='mb-4 flex gap-3'>
          <img className='w-[20px] h-[20px]' src="/icon/instagram.svg" alt="" />
          <a className='text-lg hover:text-sorkhabi' href="http://www.instagram.com/helia.web" target='_blank'>Instagram</a>
        </li>
        <li className='mb-4 flex gap-3'>
          <img className='w-[20px]' src="/icon/linkedin.svg" alt="" />
          <a className='text-lg hover:text-sorkhabi' href="http://linkdin.com/in/helia-rezaie-web" target='_blank'>LinkedIn</a>
        </li>
        <li className='mb-3 flex gap-3'>
          <img className='w-[20px]' src="/icon/github.svg" alt="" />
          <a className='text-lg hover:text-sorkhabi' href="https://github.com/Helia-rz79" target='_blank'>GitHub</a>
        </li>

      </ul>
    </div>
  )
}
////////////////////////////
function Follow() {
  return (
    <div className='w-full md:w-1/4 mt-3 mr-5 md:mr-0'>
      <h6 className='font-bold text-lg my-3'>ما را در شبکه‌های اجتماعی دنبال کنید!</h6>
      <p className='text-gray-300 my-5'>هفت روز هفته، از ساعت 8 الی 24 پاسخگوی سوالات شما هستیم.</p>
      <a className='text-lg hover:text-sorkhabi' href="">ایمیل : h.rezaie2479@gmail.com</a>
    </div>
  )
}
/////////////////////////
function End() {
  return (
    <h6 className='w-full text-center text-white mt-10 text-xl border-t-1 pt-5 border-t-gray-400'>🩷Coded By Helia Rezaie</h6>
  )
}

//////////////////////////////////////

export default function Footer() {
  return (
    <div className='w-full 2xl:container mx-auto bg-[#292929] text-white p-2 mt-10 md:p-10'>
      <div className='flex flex-wrap gap-1 md:gap-10 lg:gap-20'>
        <First />
        <Contact />
        <Follow />
      </div>
      <End />
    </div>
  )
}
