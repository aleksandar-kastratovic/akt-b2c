import {useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ThumbSuspense from "@/shared/Thumb/ThumbSuspense";

export const Slider = ({ setSwiperData, data }) => {
  const [swiper, setSwiper] = useState(null);
  const [loading, setLoading] = useState(true);


  return (
      <Swiper
          rewind
          onInit={(swiper) => {
            setSwiper(swiper);
            setSwiperData(swiper);
          }}
          onSwiper={(swiper) => {
            setSwiper(swiper);
            setSwiperData(swiper);
          }}
          className="mt-[1.625rem] !relative"
          slidesPerView={4}
          breakpoints={{
            0: {
              slidesPerView: 1.3,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            800: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          spaceBetween={30}
      >
        <div
            onClick={() => swiper?.slidePrev()}
            className={`max-sm:hidden cursor-pointer absolute left-2 -top-32 bottom-0 h-fit py-6 px-2 my-auto z-20 bg-white/80 flex flex-col justify-center items-center`}
        >
          <i className={`fa fa-solid fa-chevron-left`} />
        </div>
        {data?.map(({ id }) => {
          return (
              <SwiperSlide key={id}>
                <ThumbSuspense
                    id={id}
                    categoryId={`*`}
                    refreshWishlist={() => {}}
                />
              </SwiperSlide>
          );
        })}
        <div
            onClick={() => swiper?.slideNext()}
            className={`max-sm:hidden cursor-pointer absolute right-2 -top-32 bottom-0 h-fit py-6 px-2 my-auto z-20 bg-white/80 flex flex-col justify-center items-center`}
        >
          <i className={`fa fa-solid fa-chevron-right`} />
        </div>
      </Swiper>
  );
};
