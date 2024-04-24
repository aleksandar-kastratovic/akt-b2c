import React, { Suspense, useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { list } from "@/app/api/api";
import { Swiper, SwiperSlide } from "swiper/react";
import ThumbSuspense from "@/shared/Thumb/ThumbSuspense";

export const Slider = () => {
  const [swiper, setSwiper] = useState(null);
  const [initSlides, setInitSlides] = useState(true);
  const { data } = useSuspenseQuery({
    queryKey: ["topsell"],
    queryFn: async () => {
      return await list("/products/section/list/top_sellers", {
        render: false,
      }).then((response) => response?.payload?.items);
    },
    refetchOnWindowFocus: false,
  });
  return (
    <Swiper
        rewind
      onInit={(swiper) => {
        setSwiper(swiper);
        setInitSlides(false);
      }}
      onSwiper={(swiper) => setSwiper(swiper)}
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
        {swiper && !initSlides
            ? data?.map(({id}) => {
                return (
                    <Suspense
                        fallback={
                            <div
                                className={`aspect-2/3 bg-slate-300 animate-pulse w-full h-full`}
                            />
                        }
                    >
                        <SwiperSlide key={id}>
                            <ThumbSuspense
                                id={id}
                                categoryId={`*`}
                                refreshWishlist={() => {
                                }}
                            />
                        </SwiperSlide>
                    </Suspense>
                );
            })
            : <div
                className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`}
            >
                {[1, 2, 3, 4].map((i) => (
                    <div
                        key={i}
                        className={`aspect-2/3 col-span-1 bg-slate-300 animate-pulse w-full h-full`}
                    />
                ))}
            </div>}
        <div
            onClick={() => swiper?.slideNext()}
            className={`max-sm:hidden cursor-pointer absolute right-2 -top-32 bottom-0 h-fit py-6 px-2 my-auto z-20 bg-white/80 flex flex-col justify-center items-center`}
        >
            <i className={`fa fa-solid fa-chevron-right`}/>
        </div>
    </Swiper>
  );
};
