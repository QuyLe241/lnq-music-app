"use client";
import React, { FC } from "react";
import "./style.scss";
// import Slider from "react-slick";
import next from "next";
import CarouselImg1 from "../../../Img/carousel-img1.png";
import CarouselImg2 from "../../../Img/carousel-img2.png";
import CarouselImg3 from "../../../Img/carousel-img3.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

const CarouselHome: React.FC = () => {
  // console.log("React version:", React.version);
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSlideChange={() => console.log("By Lê Nhất Quý")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="">
            <Image
              style={{ borderRadius: "10px" }}
              src={CarouselImg1}
              alt="img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <Image
              src={CarouselImg2}
              alt="img"
              style={{ borderRadius: "10px" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <Image
              src={CarouselImg3}
              alt="img"
              style={{ borderRadius: "10px" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <Image
              src={CarouselImg1}
              alt="img"
              style={{ borderRadius: "10px" }}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="">
            <Image
              src={CarouselImg2}
              alt="img"
              style={{ borderRadius: "10px" }}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    // <div className="">test</div>
  );
};

export default CarouselHome;
