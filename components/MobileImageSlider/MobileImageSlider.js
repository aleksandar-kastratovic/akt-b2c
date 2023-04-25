"use client";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { convertHttpToHttps } from "@/helpers/convertHttpToHttps";
const MobileImageSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 1,
      spacing: 0,
    },
    vertical: true,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const items = images?.map((item, index) => (
    <div className={`keen-slider__slide number-slide${index + 1}`}>
      <Image
        src={convertHttpToHttps(item?.image)}
        width={2000}
        height={2000}
        alt=""
      />
    </div>
  ));
  return (
    <>
      <div className="navigation-wrapper relative">
        <div
          ref={sliderRef}
          className="keen-slider overflow-hidden max-h-[370px]"
        >
          {items}
        </div>
        <div
          className="absolute max-[380px]:-bottom-1.5 max-[280px]:-bottom-10 w-[150px] py-2 flex items-center justify-center left-[30%] -bottom-5 bg-white border border-[#333]"
          onClick={() => {
            instanceRef.current?.next();
          }}
        >
          <i className="fa-solid fa-play fa-rotate-90 text-croonus-1 text-lg"></i>
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="dots5 mt-3">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot5" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
};

export default MobileImageSlider;
