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

function extractYoutubeId(url) {
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

const ImageSliderLoop = ({ bannerimages, updateImage }) => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const renderSlideContent = (item, index) => {
    switch (item?.type) {
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

      case "video_link":
          const videoProvider = item?.video_provider;
          const videoUrl = item?.video_url;
    
          const src =
      videoProvider === "youtube"
        ? `https://www.youtube.com/embed/${extractYoutubeId(videoUrl)}?autoplay=1&mute=1&loop=1&playsinline=1&controls=0&playlist=${extractYoutubeId(videoUrl)}`
        : `${videoUrl}?autoplay=1&muted=1&loop=1&background=1&playsinline=1}`;
    
          return (
            <SwiperSlide
            key={index}
            className={`w-full relative flex items-center flex-col`}
          >
            <Link href={item?.url ?? "/"}>
            <iframe
              className="w-full h-full object-cover aspect-[960/1550] md:aspect-[1920/800] pointer-events-none"
              width={item.width}
              height={item.height}
              src={src}
              frameborder="0"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
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
