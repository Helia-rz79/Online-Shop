'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function MySlider(){
  return (
    <section className="overflow-hidden rounded-xl sm:rounded-2xl" aria-label="کمپین‌های فروش">
      <Swiper
      className='w-full *:cursor-pointer'
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img src="/slider1/1.jpeg" alt="کمپین فروش ۱" className="aspect-[2/1] w-full object-cover object-[70%_center] sm:aspect-[3/1] sm:object-center" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/slider1/2.jpeg" alt="کمپین فروش ۲" className="aspect-[2/1] w-full object-cover object-[70%_center] sm:aspect-[3/1] sm:object-center" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/slider1/3.jpeg" alt="کمپین فروش ۳" className="aspect-[2/1] w-full object-cover object-[70%_center] sm:aspect-[3/1] sm:object-center" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/slider1/4.jpeg" alt="کمپین فروش ۴" className="aspect-[2/1] w-full object-cover object-[70%_center] sm:aspect-[3/1] sm:object-center" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/slider1/5.jpeg" alt="کمپین فروش ۵" className="aspect-[2/1] w-full object-cover object-[70%_center] sm:aspect-[3/1] sm:object-center" />
        </SwiperSlide>

      </Swiper>
    </section>
  );
};
