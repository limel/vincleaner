"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

function Partners() {
  return (
    <section className="mb-12 lg:mb-24 ">
      <div className="container">
        <Swiper
          // slidesPerView={5}
          modules={[Navigation]}
          navigation
          loop
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1220: {
              slidesPerView: 4,
            },
            1440: {
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide>
            <Image className="m-auto" src="/partner1.jpg" alt="partner" width={169} height={57} />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="m-auto" src="/partner2.jpg" alt="partner" width={157} height={68} />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="m-auto" src="/partner3.jpg" alt="partner" width={140} height={73} />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="m-auto" src="/partner4.jpg" alt="partner" width={80} height={75} />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="m-auto" src="/partner5.jpg" alt="partner" width={108} height={66} />
          </SwiperSlide>
          {/*  */}
          <SwiperSlide>
            <Image className="m-auto" src="/partner3.jpg" alt="partner" width={140} height={73} />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Partners;
