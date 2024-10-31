// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation"
import "swiper/css/pagination"


import Card from '../Card/Card';



export default () => {
  return (
    <>
        <Swiper
      spaceBetween={100}
      slidesPerView={3}
        
    >
      <SwiperSlide><Card/></SwiperSlide>
      <SwiperSlide><Card/></SwiperSlide>
      <SwiperSlide><Card/></SwiperSlide>
      <SwiperSlide><Card/></SwiperSlide>
      <SwiperSlide><Card/></SwiperSlide>
      <SwiperSlide><Card/></SwiperSlide>
      <SwiperSlide><Card/></SwiperSlide>

    </Swiper>

    </>

  );
};