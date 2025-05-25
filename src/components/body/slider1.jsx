'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function MySlider(){
  return (
    <div className="w-[95%] mx-auto mt-10 ">
      <Swiper
      className='w-full h-full *:cursor-pointer'
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img src="/slider1/1.jpeg" alt="slide 1" className="w-full object-cover" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/slider1/2.jpeg" alt="slide 2" className="w-full object-cover" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/slider1/3.jpeg" alt="slide 3" className="w-full h-auto object-cover" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/slider1/4.jpeg" alt="slide 4" className="w-full h-auto object-cover" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/slider1/5.jpeg" alt="slide 5" className="w-full h-auto object-cover" />
        </SwiperSlide>

      </Swiper>
    </div>
  );
};


