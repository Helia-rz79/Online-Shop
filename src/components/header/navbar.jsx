'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Navbar() {

    const pathname = usePathname()

    const navLinks =[
        {
            href:"/",
            title:"صفحه اصلی",
        },
        {
            href:"/shop",
            title:"فروشگاه",
        },
        {
            href:'/makeup',
            title:'آرایشی',
        },
        {
            href:'/skin',
            title:'مراقبت پوست',
        },
        {
            href:'/hair',
            title:'زیبایی مو',
        },
        {
            href:'/perfume',
            title:'عطر و اسپری',
        },
    ]
 

  return (
    <nav className='w-full bg-black text-white mt-2 p-4 gap-1 hidden lg:flex '>
        { navLinks.map((val)=>{
               return <Link
                key={val.href} 
                className={`mx-4 inline-block whitespace-nowrap ${pathname === val.href ? "text-sorkhabi" : ""}`}
                href={val.href} >{val.title}</Link>
            })}
    </nav>
  )
}