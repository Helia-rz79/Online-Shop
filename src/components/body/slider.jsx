'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function HeroSlider(){
  return (
    <div className="w-[95%] mx-auto mt-5 ">
      <Swiper
      className='w-full h-full *:cursor-pointer'
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img src="/slider/1.jpeg" alt="slide 1" className="w-full object-cover" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/slider/2.jpeg" alt="slide 2" className="w-full object-cover" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/slider/3.jpeg" alt="slide 3" className="w-full h-auto object-cover" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/slider/4.jpeg" alt="slide 4" className="w-full h-auto object-cover" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/slider/5.jpeg" alt="slide 5" className="w-full h-auto object-cover" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/slider/6.jpeg" alt="slide 6" className="w-full h-auto object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slider/7.jpeg" alt="slide 7" className="w-full h-auto object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};



