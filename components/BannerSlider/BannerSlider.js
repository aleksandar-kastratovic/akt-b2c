"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { convertHttpToHttps } from "@/helpers/convertHttpToHttps";
import Link from "next/link";
import { currencyFormat } from "@/helpers/functions";

const BannerSlider = ({ banners }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 1,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          perView: 1,
        },
      },
      "(min-width:1024px)": {
        slides: {
          perView: 1,
        },
      },
      "(min-width:1680px)": {
        slides: {
          perView: 1,
        },
      },
    },
    loop: true,

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const items = banners.map((item, index) => (
    <div
      key={index}
      className={`grid grid-cols-2 keen-slider__slide number-slide${index} `}
    >
      <div className="col-span-2 max-lg:py-8 lg:col-span-1 w-full h-full flex max-lg:items-start items-center justify-start bg-[#eeefe1] ">
        <div className="flex flex-col max-lg:items-start gap-5 lg:gap-10 max-lg:w-full max-md:px-2 max-lg:pr-5 w-[80%] mx-auto px-0 md:px-5">
          <h1 className="text-[1.661rem] max-md:text-[1.1rem] max-lg:hidden text-croonus-1 font-medium text-center lg:text-left">
            {item?.title}
          </h1>
          <p className="text-[1rem] max-md:text-[0.8rem] font-normal text-black text-left max-lg:py-4 max-md:py-0">
            {item?.text}
          </p>
          <a href={`${item?.url}`} className="bg-croonus-1 text-white text-xs md:text-base font-normal px-4 py-2 max-w-max">
              {item?.button}
          </a>
        </div>
      </div>
      <div className="col-span-2  relative max-lg:row-start-1 lg:col-span-1 max-lg:h-[300px] max-h-[600px]  h-[600px]">
        <Image
          src={convertHttpToHttps(item?.image)}
          fill
          className="object-cover"
        />
      </div>
    </div>
  ));

  return (
    <>
      <div className="mt-24 max-lg:mt-16 navigation-wrapper w-[95%] lg:w-[65%] mx-auto ">
        <h1 className="text-[1.661rem] font-semibold lg:hidden pb-5 max-md:text-[1.1rem]">
          Kakve su naše posteljine?
        </h1>
        <div ref={sliderRef} className="keen-slider">
          {items}
        </div>
        {/* {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )} */}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots2 mt-3">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot2" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
};

export default BannerSlider;
