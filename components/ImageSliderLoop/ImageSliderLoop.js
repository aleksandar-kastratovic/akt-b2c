"use client";
import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { convertHttpToHttps } from "@/helpers/convertHttpToHttps";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/autoplay";

const ImageSliderLoop = ({ bannerimages, updateImage }) => {
  const [swiper, setSwiper] = useState(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const images = bannerimages?.map((item, index) => (
    <SwiperSlide
      key={index}
      className={`w-full relative flex items-center flex-col`}
    >
      <Link href={item?.url ?? "/"}>
        <Image
          width={1300}
          height={600}
          className="relative object-cover h-full w-full"
          src={convertHttpToHttps(item?.image)}
          alt={item?.name ?? "AKT"}
          priority={true}
        />
      </Link>
      <div className="absolute flex flex-col gap-3 items-center top-[60%] ">
        <h2 className="text-3xl text-croonus-1 text-center text-white">
          {item?.title}
        </h2>
        <div className={`w-[80%] mx-auto`}>
          <p className="text-base text-center text-croonus-1">{item?.text}</p>
        </div>
        {item?.button && (
          <Link href={`${item?.url}`}>
            <button className="px-6 py-2 text-xl bg-croonus-1 text-white hover:bg-opacity-80">
              {item?.button}
            </button>
          </Link>
        )}
      </div>
    </SwiperSlide>
  ));
  return (
    <>
      <div className="mx-auto w-[95%] lg:w-[80%] overflow-visible max-md:mt-0 mt-[1.313rem]">
        <Swiper
          onSlideChange={(swiper) => setActiveIndex(swiper?.activeIndex)}
          modules={[Autoplay]}
          autoplay={{
            delay: 3500,
            pauseOnMouseEnter: true,
          }}
          onSwiper={(swiper) => setSwiper(swiper)}
          className="h-[550px] 2xl:h-[550px] 3xl:h-[620px] w-full"
        >
          {images}
        </Swiper>
        {bannerimages?.length > 0 ? (
          <div className="dots3 relative flex max-md:justify-center items-center max-md:gap-[3rem] gap-[4.688rem] ml-auto justify-end mt-[1.875rem] text-[1.25rem]">
            {bannerimages?.map((idx, index) => {
              return (
                <button
                  key={index}
                  onClick={() => {
                    swiper.slideTo(index);
                    setActiveIndex(index);
                  }}
                  className={
                    activeIndex === index
                      ? "underline max-md:text-base"
                      : "max-md:text-base"
                  }
                >
                  {idx?.name}
                </button>
              );
            })}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default ImageSliderLoop;
