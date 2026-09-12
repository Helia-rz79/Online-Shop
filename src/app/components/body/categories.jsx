const categories = [
  { src: '/iconimg/1.webp', title: 'مراقبت پوستی' },
  { src: '/iconimg/2.webp', title: 'ضدآفتاب' },
  { src: '/iconimg/3.webp', title: 'آرایش چشم' },
  { src: '/iconimg/4.webp', title: 'آرایش لب' },
  { src: '/iconimg/5.webp', title: 'مراقبت مو' },
  { src: '/iconimg/6.webp', title: 'تخصصی آقایان' },
]

const banners = ['/iconimg/7.png', '/iconimg/8.png', '/iconimg/9.png', '/iconimg/10.png']

export default function Categories() {
  return (
    <section aria-labelledby='categories-title'>
      <h2 id='categories-title' className='mb-5 text-lg font-bold sm:text-xl'>دسته‌بندی‌های محبوب</h2>
      <div className='grid grid-cols-3 gap-4 sm:grid-cols-6 sm:gap-6 lg:mx-auto lg:max-w-5xl'>
        {categories.map((category) => (
          <figure className='min-w-0 text-center' key={category.title}>
            <img className='mx-auto aspect-square w-16 rounded-full object-contain sm:w-20 lg:w-24' src={category.src} alt='' />
            <figcaption className='mt-2 text-xs font-bold leading-5 sm:text-sm lg:text-base'>{category.title}</figcaption>
          </figure>
        ))}
      </div>
      <div className='mt-12 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4'>
        {banners.map((src, index) => (
          <figure className='overflow-hidden rounded-xl' key={src}>
            <img className='w-full h-full object-cover transition duration-300 hover:scale-105' src={src} alt={`پیشنهاد منتخب ${index + 1}`} />
          </figure>
        ))}
      </div>
    </section>
  )
}
