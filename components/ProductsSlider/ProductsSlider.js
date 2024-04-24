"use client";
import React, { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Swiper, SwiperSlide } from "swiper/react";
import ThumbSuspense from "@/shared/Thumb/ThumbSuspense";
import { useSuspenseQuery } from "@tanstack/react-query";
import { list } from "@/app/api/api";
import { Slider } from "@/_components/slider";

const ProductsSlider = ({ text }) => {
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
          <Slider />
      </div>
    </>
  );
};

export default ProductsSlider;
