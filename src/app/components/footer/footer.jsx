import React from 'react'

function First() {
  return (
    <div>
      <h2 className='font-bold text-lg'>خدمات مشتریان</h2>
      <ul className='mt-5 space-y-3 text-sm text-gray-300 *:cursor-pointer *:hover:text-sorkhabi sm:text-base' >
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
    <div>
      <h2 className='font-bold text-lg'>راه‌های ارتباطی</h2>
      <ul className='mt-5'>
        <li className='mb-4 flex gap-3'>
          <img className='w-[20px] h-[20px]' src="/icon/instagram.svg" alt="" />
          <a className='hover:text-sorkhabi' href="https://www.instagram.com/helia.web" target='_blank' rel='noreferrer'>Instagram</a>
        </li>
        <li className='mb-4 flex gap-3'>
          <img className='w-[20px]' src="/icon/linkedin.svg" alt="" />
          <a className='hover:text-sorkhabi' href="https://www.linkedin.com/in/helia-rezaie-web" target='_blank' rel='noreferrer'>LinkedIn</a>
        </li>
        <li className='mb-3 flex gap-3'>
          <img className='w-[20px]' src="/icon/github.svg" alt="" />
          <a className='hover:text-sorkhabi' href="https://github.com/Helia-rz79" target='_blank' rel='noreferrer'>GitHub</a>
        </li>

      </ul>
    </div>
  )
}
////////////////////////////
function Follow() {
  return (
    <div className='col-span-2 md:col-span-1'>
      <h2 className='font-bold text-lg'>ما را در شبکه‌های اجتماعی دنبال کنید!</h2>
      <p className='my-5 text-sm leading-7 text-gray-300 sm:text-base'>هفت روز هفته، از ساعت ۸ الی ۲۴ پاسخگوی سوالات شما هستیم.</p>
      <a className='break-all hover:text-sorkhabi' href="mailto:h.rezaie2479@gmail.com">ایمیل: h.rezaie2479@gmail.com</a>
    </div>
  )
}
/////////////////////////
function End() {
  return (
    <p className='mt-8 w-full border-t border-t-gray-600 pt-5 text-center text-sm text-gray-300 sm:text-base'>🩷 Coded By Helia Rezaie</p>
  )
}

//////////////////////////////////////

export default function Footer() {
  return (
    <footer className='mt-10 w-full bg-[#292929] px-4 py-8 text-white sm:px-6 lg:px-8 lg:py-12'>
      <div className='mx-auto grid w-full max-w-[1396px] gap-9 grid-cols-2 lg:grid-cols-3 lg:gap-16'>
        <First />
        <Contact />
        <Follow />
      </div>
      <End />
    </footer>
  )
}
