"use client";
import React, { useState } from "react";
import Image from "next/image";
import { convertHttpToHttps } from "@/helpers/convertHttpToHttps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const BannerSlider = ({ banners }) => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const items = banners?.map((item, index) => (
    <SwiperSlide key={index} className={`!grid !grid-cols-2`}>
      <div className="col-span-2 max-lg:py-8 lg:col-span-1 w-full h-full flex max-lg:items-start items-center justify-start bg-[#eeefe1] ">
        {/*<h2 className="text-[1.661rem] text-black font-semibold pb-5 max-md:text-[1.1rem] absolute top-0 z-[20] lg:hidden">*/}
        {/*  {item?.title}*/}
        {/*</h2>*/}
        <div className="flex flex-col max-lg:items-start gap-5 lg:gap-10 max-lg:w-full max-md:px-2 max-lg:pr-5 w-[80%] mx-auto px-0 md:px-5">
          <h2 className="text-[1.661rem] max-md:text-[1.1rem] text-croonus-1 font-medium text-center lg:text-left">
            {item?.title}
          </h2>
          <p className="text-[1rem] max-md:text-[0.8rem] font-normal text-black text-left max-lg:py-4 max-md:py-0">
            {item?.text}
          </p>
          <Link
            href={`${item?.url}`}
            className="bg-croonus-1 text-white text-xs md:text-base font-normal px-4 py-2 max-w-max"
          >
            {item?.button}
          </Link>
        </div>
      </div>
      <div className="col-span-2  relative max-lg:row-start-1 lg:col-span-1 max-lg:h-[300px] max-h-[600px]  h-[600px]">
        <Image
          src={convertHttpToHttps(item?.image)}
          fill
          alt="AKT"
          className="object-cover max-md:pt-[3rem]"
        />
      </div>
    </SwiperSlide>
  ));

  return (
    <>
      <div className="mt-24 max-lg:mt-16 navigation-wrapper w-[95%] lg:w-[65%] mx-auto ">
        <Swiper
          onSlideChange={(swiper) => setActiveIndex(swiper?.activeIndex)}
          onSwiper={(swiper) => setSwiper(swiper)}
        >
          {items}
        </Swiper>
      </div>
      <div className="dots2 mt-3">
        {banners?.map((idx, i) => {
          return (
            <button
              key={i}
              onClick={() => {
                swiper?.slideTo(i);
              }}
              className={"dot2" + (activeIndex === i ? " active" : "")}
            ></button>
          );
        })}
      </div>
    </>
  );
};

export default BannerSlider;
