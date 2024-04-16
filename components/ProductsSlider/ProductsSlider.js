"use client";
import React, { Suspense, useState } from "react";
import { list } from "@/app/api/api";
import { ToastContainer } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ThumbSuspense from "@/shared/Thumb/ThumbSuspense";

const ProductsSlider = ({ text }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["top-sellers"],
    queryFn: async () => {
      return await list(`/products/section/list/top_sellers`, {
        render: false,
      }).then((res) => res?.payload?.items);
    },
  });
  const [swiper, setSwiper] = useState(null);

  return (
    <>
      {" "}
      <ToastContainer />
      <div className="mt-[3.688rem] max-md:mt-[1rem] navigation-wrapper w-[95%] lg:w-[85%] mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-[1.1rem] font-semibold">{text}</h1>
          <div className="md:hidden">
            <i
              className="fa-solid md:hidden fa-chevron-right text-white text-xl bg-croonus-1 px-3 py-1.5"
              onClick={() => {
                swiper?.slideNext();
              }}
            ></i>
          </div>
        </div>

        <Swiper
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
          {data?.map(({ id }) => {
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
                    refreshWishlist={() => {}}
                  />
                </SwiperSlide>
              </Suspense>
            );
          })}
          <div
            onClick={() => swiper?.slideNext()}
            className={`max-sm:hidden cursor-pointer absolute right-2 -top-32 bottom-0 h-fit py-6 px-2 my-auto z-20 bg-white/80 flex flex-col justify-center items-center`}
          >
            <i className={`fa fa-solid fa-chevron-right`} />
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default ProductsSlider;
