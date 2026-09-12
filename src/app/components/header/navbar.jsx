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
    <nav className='hidden w-full items-center gap-1 rounded-xl bg-black px-4 py-3 text-sm text-white lg:flex xl:text-base' aria-label='منوی اصلی'>
        { navLinks.map((val)=>{
               return <Link
                key={val.href}
                className={`inline-block whitespace-nowrap rounded-lg px-4 py-1.5 transition hover:bg-white/10 hover:text-sorkhabi ${pathname === val.href ? "text-sorkhabi" : ""}`}
                href={val.href} >{val.title}</Link>
            })}
    </nav>
  )
}
