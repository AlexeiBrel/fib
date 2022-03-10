import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./slider.css";
import { Navigation } from "swiper";
export default function slider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <img src="/img/slider/item1.png" alt=""/> </SwiperSlide>
        <SwiperSlide> <img src="/img/slider/item2.png" alt=""/> </SwiperSlide>
        <SwiperSlide> <img src="/img/slider/item3.png" alt=""/> </SwiperSlide>
        <SwiperSlide> <img src="/img/slider/item4.png" alt=""/> </SwiperSlide>
        <SwiperSlide> <img src="/img/slider/item5.png" alt=""/> </SwiperSlide>
        <SwiperSlide> <img src="/img/slider/item6.png" alt=""/> </SwiperSlide>
      </Swiper>
    </>
  );
}
