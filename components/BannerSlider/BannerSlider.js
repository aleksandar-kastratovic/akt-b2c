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
      className={`grid grid-cols-2 keen-slider__slide number-slide${index} `}
    >
      <div className="col-span-2 max-lg:py-10 lg:col-span-1 w-full h-full flex max-lg:items-start items-center justify-start bg-[#eeefe1] ">
        <div className="flex flex-col max-lg:items-start gap-5 lg:gap-10 max-lg:w-[95%] max-lg:pr-5 w-[80%] mx-auto">
          <h1 className="text-[1.575rem] max-lg:hidden text-croonus-1 font-medium text-center lg:text-left">
            Kakve su naše posteljine?
          </h1>
          <p className="text-[1rem] font-normal text-black text-left max-lg:py-4">
            Širok asortiman tekstilnih materijala je ono što razlikuje naš brend
            od ostalih. Pamučni šifon, krep, saten, flanel ili damast, samo su
            neki od materijala čija gustina tkanja zapravo određuje naš kvalitet
            i udobnost, po kom smo prepoznatljivi.
          </p>
          <button className="bg-croonus-1 text-white text-base font-normal px-4 py-2 max-md:w-2/3 w-1/3">
            Saznajte više
          </button>
        </div>
      </div>
      <div className="col-span-2 max-lg:row-start-1 lg:col-span-1 max-lg:h-[300px] max-h-[600px]  h-[600px]">
        <Image
          src={convertHttpToHttps(item?.image)}
          width={500}
          height={500}
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  ));

  return (
    <>
      <div className="mt-24 max-lg:mt-16 navigation-wrapper w-[95%] lg:w-[65%] mx-auto ">
        <h1 className="text-lg font-medium lg:hidden pb-5">
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
