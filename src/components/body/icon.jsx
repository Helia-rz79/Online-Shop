import React from 'react'
export default function Icon(){
    return(
        <div className='w-full mt-10'>
            <Myicon />
            <Box />
        </div>
    )
}

function Myicon() {
  return (
    <div className='w-[80%] mx-auto flex my-10 gap-20 justify-center'>
        <figure className='w-1/12 text-center'>
            <img className='w-[80%] mx-auto' src="/iconimg/1.webp" alt="" />
            <figcaption className='pt-3 font-bold text-[18px]'>مراقبت پوستی</figcaption>
        </figure>
        <figure className='w-1/12 text-center'>
            <img className='w-[80%] mx-auto' src="/iconimg/2.webp" alt="" />
            <figcaption className='pt-3 font-bold text-[18px]'>ضدآفتاب</figcaption>
        </figure>
        <figure className='w-1/12 text-center'>
            <img className='w-[80%] mx-auto' src="/iconimg/3.webp" alt="" />
            <figcaption className='pt-3 font-bold text-[18px]'>آرایش چشم</figcaption>
        </figure>
        <figure className='w-1/12 text-center'>
            <img className='w-[80%] mx-auto' src="/iconimg/4.webp" alt="" />
            <figcaption className='pt-3 font-bold text-[18px]'>آرایش لب</figcaption>
        </figure>
        <figure className='w-1/12 text-center'>
            <img className='w-[80%] mx-auto' src="/iconimg/5.webp" alt="" />
            <figcaption className='pt-3 font-bold text-[18px]'>مراقبت مو</figcaption>
        </figure>
        <figure className='w-1/12 text-center'>
            <img className='w-[80%] mx-auto' src="/iconimg/6.webp" alt="" />
            <figcaption className='pt-3 font-bold text-[18px]'>تخصصی آقایان</figcaption>
        </figure>
    </div>
  )
}

function Box(){
    return(
        <div className='w-full flex flex-wrap mt-3 justify-center *:cursor-pointer'>
            <figure className='w-1/3 lg:w-1/4'>
                <img src="/iconimg/7.png" alt="" />
            </figure>
            <figure className='w-1/3 lg:w-1/4'>
                <img src="/iconimg/8.png" alt="" />
            </figure>
            <figure className='w-1/3 lg:w-1/4'>
                <img src="/iconimg/9.png" alt="" />
            </figure>
            <figure className='w-1/3 lg:w-1/4'>
                <img src="/iconimg/10.png" alt="" />
            </figure>
        </div>
    )
}
