"use client";
import { useState } from "react";
import Image from "next/image";
import { convertHttpToHttps } from "@/helpers/convertHttpToHttps";
import { useProductGallery } from "@/hooks/akt.hooks";
import { Swiper, SwiperSlide } from "swiper/react";

const MobileImageSlider = ({ slug }) => {
  const { data: images } = useProductGallery({ slug: slug });

  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperData, setSwiperData] = useState(null);

  console.log(swiperData);

  return (
    <div className={`relative h-full`}>
      <Swiper
          autoHeight={true}
        rewind
        onSwiper={(swiper) => setSwiperData(swiper)}
        onSlideChange={(swiper) => {
          setSwiperData(swiper);
          setActiveIndex(swiper?.activeIndex);
        }}
        className={`!relative`}
        direction={`vertical`}
        slidesPerView={1}
      >
        {images?.map(({ image, id }) => {
          return (
            <SwiperSlide key={id} className={`!h-auto`}>
              <Image
                src={convertHttpToHttps(image)}
                alt={`Stefan Tekstil`}
                width={0}
                height={0}
                sizes={`100vw`}
                className={`w-full h-auto aspect-2/3 object-cover`}
              />
            </SwiperSlide>
          );
        })}
        {swiperData && (
          <div
            className={`absolute z-10 top-0 bottom-0 right-2 my-auto flex flex-col gap-3 justify-center`}
          >
            {images?.map((i, x) => {
              return (
                <span
                  key={x}
                  onClick={() => {
                    swiperData?.slideTo(x);
                  }}
                  className={`rounded-full p-1 border-2 border-croonus-1 ${
                    activeIndex === x ? "bg-white" : "bg-croonus-1"
                  }`}
                />
              );
            })}
          </div>
        )}
      </Swiper>
      <div
        onClick={() => {
          swiperData?.slideNext();
        }}
        className={`border px-16 py-1 text-center w-fit mx-auto absolute -bottom-5 left-0 z-10 right-0 bg-white`}
      >
        <i className="fa fa-solid fa-play fa-rotate-90 text-croonus-1 text-lg"></i>
      </div>
    </div>
  );
};

export default MobileImageSlider;
