const brands = Array.from({ length: 12 }, (_, index) => `/brands/${index + 1}${index === 3 ? '.jpeg' : '.png'}`)

export default function Brands() {
  return (
    <section aria-labelledby='brands-title'>
        <h2 id='brands-title' className='mb-5 text-lg font-bold sm:text-xl'>برندهای برتر</h2>
        <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
            {brands.map((brand, index) => (
              <figure className='flex min-h-20 items-center justify-center rounded-xl border border-gray-100 bg-white p-3 shadow-sm' key={brand}>
                <img className='max-h-12 w-full object-contain' src={brand} alt={`برند برتر ${index + 1}`} />
              </figure>
            ))}
        </div>
    </section>
  )
}
