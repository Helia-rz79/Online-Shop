'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function HeroSlider(){
  return (
    <section className="mt-2 overflow-hidden rounded-xl sm:mt-5 sm:rounded-2xl" aria-label="پیشنهادهای ویژه">
      <Swiper
      className='w-full *:cursor-pointer'
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img src="/slider/1.jpeg" alt="پیشنهاد ویژه ۱" className="aspect-[2/1] w-full object-cover object-[80%_center] sm:aspect-[3.2/1] sm:object-center" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/slider/2.jpeg" alt="پیشنهاد ویژه ۲" className="aspect-[2/1] w-full object-cover object-[80%_center] sm:aspect-[3.2/1] sm:object-center" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/slider/3.jpeg" alt="پیشنهاد ویژه ۳" className="aspect-[2/1] w-full object-cover object-[80%_center] sm:aspect-[3.2/1] sm:object-center" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/slider/4.jpeg" alt="پیشنهاد ویژه ۴" className="aspect-[2/1] w-full object-cover object-[80%_center] sm:aspect-[3.2/1] sm:object-center" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/slider/5.jpeg" alt="پیشنهاد ویژه ۵" className="aspect-[2/1] w-full object-cover object-[80%_center] sm:aspect-[3.2/1] sm:object-center" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/slider/6.jpeg" alt="پیشنهاد ویژه ۶" className="aspect-[2/1] w-full object-cover object-[80%_center] sm:aspect-[3.2/1] sm:object-center" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slider/7.jpeg" alt="پیشنهاد ویژه ۷" className="aspect-[2/1] w-full object-cover object-[80%_center] sm:aspect-[3.2/1] sm:object-center" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
