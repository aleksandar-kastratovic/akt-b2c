"use client";
import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { convertHttpToHttps } from "@/helpers/convertHttpToHttps";
import Link from "next/link";
import { useState } from "react";

const ImageSliderLoop = ({ bannerimages, updateImage }) => {
  const [newArray, setNewArray] = useState(bannerimages);

  useEffect(() => {
    if (updateImage) {
      setNewArray((prevArray) => {
        const updatedIndex = prevArray.findIndex(
          (item) => item.id === updateImage.id
        );
        const newArray = [
          ...prevArray.slice(0, updatedIndex),
          { ...prevArray[updatedIndex], image: updateImage.image },
          ...prevArray.slice(updatedIndex + 1),
        ];
        return newArray;
      });
    } else {
      setNewArray(bannerimages);
    }
  }, [updateImage]);

  if (bannerimages?.length >= 2) {
    const [loaded, setLoaded] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const [sliderRef, instanceRef] = useKeenSlider(
      {
        loop: true,
        slideChanged(slider) {
          setCurrentSlide(slider.track.details.rel);
        },
        created() {
          setLoaded(true);
        },
      },
      [
        (slider) => {
          let timeout;
          let mouseOver = false;
          function clearNextTimeout() {
            clearTimeout(timeout);
          }
          function nextTimeout() {
            clearTimeout(timeout);
            // if (mouseOver) return;
            timeout = setTimeout(() => {
              slider.next();
            }, 3000);
          }
          // slider.on("created", () => {
          //   slider.container.addEventListener("mouseover", () => {
          //     mouseOver = true;
          //     clearNextTimeout();
          //   });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
          // });
          slider.on("dragStarted", clearNextTimeout);
          slider.on("animationEnded", nextTimeout);
          slider.on("updated", nextTimeout);
        },
      ]
    );
    const images = newArray?.map((item, index) => (
      <div
        key={index}
        className={` w-full relative flex items-center flex-col keen-slider__slide number-slide${index}`}
      >
        <Image
          width={1222}
          height={1222}
          className="relative object-cover h-full w-full"
          src={convertHttpToHttps(item?.image)}
          alt={item?.name}
        />
        <div className="absolute flex flex-col gap-3 items-center top-[50%] ">
          <h1 className="text-xl text-croonus-1">{item?.subtitle}</h1>
          <h1 className="text-6xl text-croonus-1 uppercase">{item?.title}</h1>
          <Link href={`${item?.url}`}>
            <button className="px-6 py-2 text-xl bg-croonus-1 text-white hover:bg-opacity-80">
              {item?.button}
            </button>
          </Link>
        </div>
      </div>
    ));

    return (
      <>
        <div className="mx-auto w-[95%] lg:w-[80%] overflow-visible max-md:mt-0 mt-[1.313rem]">
          <div
            ref={sliderRef}
            className="keen-slider h-[550px] 2xl:h-[550px] 3xl:h-[620px] w-full"
          >
            {images}
          </div>
          {loaded && instanceRef.current && bannerimages?.length > 0 ? (
            <div className="dots3 relative flex max-md:justify-center items-center max-md:gap-[3rem] gap-[4.688rem] ml-auto justify-end mt-[1.875rem] text-[1.25rem]">
              {bannerimages?.map((idx, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(index);
                    }}
                    className={
                      currentSlide === index
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
  } else {
    const images = bannerimages?.map((item, index) => (
      <div key={index} className={`keen-slider__slide number-slide${index}`}>
        <Image
          width={1222}
          height={1222}
          className="relative z-50 h-auto w-full max-lg:h-[10%] max-lg:w-full"
          src={item?.image}
          alt={item.id}
        />
      </div>
    ));

    return (
      <>
        <div className="mx-auto w-full relative -z-10 mt-[1.313rem]">
          <div className="">{images}</div>
        </div>
      </>
    );
  }
};

export default ImageSliderLoop;
