import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { convertHttpToHttps } from "@/helpers/convertHttpToHttps";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";

const ImageSliderLoop = ({ bannerimages, updateImage }) => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const renderSlideContent = (item, index) => {
    switch (item?.file_data?.type) {
      case "video":
        return (
          <SwiperSlide
            key={index}
            className={`w-full relative flex items-center flex-col`}
          >
            <Link href={item?.url ?? "/"}>
              <video
                width={item?.file_data?.banner_position?.width}
                height={item?.file_data?.banner_position?.height}
                className="relative object-cover h-full w-full"
                autoPlay
                muted
                loop
              >
                <source
                  src={convertHttpToHttps(item?.file_data?.url)}
                  type="video/mp4"
                />
              </video>
            </Link>
            <div className="absolute flex flex-col gap-3 items-center top-[60%]">
              <h2 className="text-3xl text-croonus-1 text-center text-white">
                {item?.title}
              </h2>
              <div className={`w-[80%] mx-auto`}>
                <p className="text-base text-center text-croonus-1">
                  {item?.text}
                </p>
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
        );
      default:
        return (
          <SwiperSlide
            key={index}
            className={`w-full relative flex items-center flex-col`}
          >
            <Link href={item?.url ?? "/"}>
              <Image
                width={0}
                height={0}
                className="relative h-auto w-full"
                src={convertHttpToHttps(item?.file_data?.url)}
                alt={item?.file_data?.descriptions?.alt ?? "AKT"}
                priority={true}
              />
            </Link>
            <div className="absolute flex flex-col gap-3 items-center top-[60%]">
              <h2 className="text-3xl text-croonus-1 text-center text-white">
                {item?.title}
              </h2>
              <div className={`w-[80%] mx-auto`}>
                <p className="text-base text-center text-croonus-1">
                  {item?.text}
                </p>
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
        );
    }
  };

  const slides = bannerimages?.map((item, index) =>
    renderSlideContent(item, index),
  );

  return (
    <div className="mx-auto w-[95%] lg:w-[80%] overflow-visible max-md:mt-0 mt-[1.313rem]">
      <Swiper
        onSlideChange={(swiper) => setActiveIndex(swiper?.activeIndex)}
        modules={[Autoplay]}
        autoplay={{
          delay: 3500,
          pauseOnMouseEnter: true,
        }}
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {slides}
      </Swiper>
      {bannerimages?.length > 0 && (
        <div className="dots3 relative flex max-md:justify-center items-center max-md:gap-[3rem] gap-[4.688rem] ml-auto justify-end mt-[1.875rem] text-[1.25rem]">
          {(bannerimages ?? [])?.map((idx, index) => (
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
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSliderLoop;
