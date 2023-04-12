"use client";
import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { convertHttpToHttps } from "@/helpers/convertHttpToHttps";

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}
function ImageMagnifier({
  src,
  width,
  height,
  magnifierHeight = 300,
  magnifierWidth = 300,
  zoomLevel = 2,
}) {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);
  return (
    <div
      style={{
        position: "relative",
        height: height,
        width: width,
      }}
      className="rounded-2xl object-cover h-full"
    >
      <Image
        src={src}
        style={{ height: height, width: width }}
        width={500}
        height={500}
        className="object-cover h-full rounded-2xl"
        onMouseEnter={(e) => {
          const elem = e.currentTarget;
          const { width, height } = elem.getBoundingClientRect();
          setSize([width, height]);
          setShowMagnifier(true);
        }}
        onMouseMove={(e) => {
          const elem = e.currentTarget;
          const { top, left } = elem.getBoundingClientRect();
          const x = e.pageX - left - window.pageXOffset;
          const y = e.pageY - top - window.pageYOffset;
          setXY([x, y]);
        }}
        onMouseLeave={() => {
          setShowMagnifier(false);
        }}
        alt={src.alt}
      />

      <div
        style={{
          display: showMagnifier ? "" : "none",
          position: "absolute",
          pointerEvents: "none",
          height: `${magnifierHeight}px`,
          width: `${magnifierWidth}px`,
          top: `${y - magnifierHeight / 2}px`,
          left: `${x - magnifierWidth / 2}px`,
          opacity: "1",
          border: "1px solid lightgray",
          borderRadius: "50%",
          backgroundColor: "white",
          backgroundImage: `url('${src}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: `${imgWidth * zoomLevel}px ${
            imgHeight * zoomLevel
          }px`,
          backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
        }}
      ></div>
    </div>
  );
}

const ItemGallery = ({ gallery, description }) => {
  const [modal, setModal] = useState({ show: false, image: null });
  const [isGrabbing, setIsGrabbing] = useState(false);
  const isViewportWide = useMediaQuery({ query: "(min-width: 1024px)" });
  console.log(isViewportWide);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      loop: true,

      breakpoints: {
        "(max-width: 1024px)": {
          vertical: false,
          slides: {
            spacing: 10,
            perView: 3,
          },
        },
        "(min-width: 1025px": {
          vertical: true,
          slides: {
            perView: 4,
            spacing: 1,
          },
        },
      },
    },

    [ThumbnailPlugin(instanceRef)]
  );

  const images = gallery?.map((item, index) => (
    <div
      key={item.id}
      className={`keen-slider__slide relative flex items-center justify-center number-slide${index} `}
    >
      <Image
        width={1200}
        height={1200}
        className="relative z-[50] h-full object-cover cursor-pointer"
        src={convertHttpToHttps(item?.image)}
        alt={item?.id}
        onClick={() => {
          setModal({ show: true, image: item?.image });
        }}
      />
    </div>
  ));

  const thumbImages = gallery?.map((item, index) => (
    <div
      key={item.id}
      className={`keen-slider__slide p-0  mb-4 number-slide${index + 1} `}
      style={{ marginTop: 0 }}
    >
      <Image
        width={150}
        height={150}
        className={`relative z-[50] h-full object-cover ${
          isGrabbing ? "cursor-grabbing" : "cursor-grab"
        }`}
        src={convertHttpToHttps(item?.image)}
        alt={item?.id}
        onMouseDown={() => setIsGrabbing(true)}
        onMouseUp={() => setIsGrabbing(false)}
        onClick={() => {
          instanceRef.current.moveToIdx(index);
        }}
      />
    </div>
  ));
  return (
    <div className=" relative lg:mt-1 max-lg:col-span-2 lg:col-span-2 3xl:col-span-3 max-lg:mt-0 lg:w-full max-lg:flex-col-reverse max-lg:flex lg:flex">
      {isViewportWide ? (
        <div
          ref={thumbnailRef}
          className="keen-slider max-lg:mt-5 thumbnail lg:h-[550px] 2xl:h-[400px] 4xl:h-[550px] relative mr-4 z-0"
          style={{ width: 150 }}
        >
          {thumbImages}
          {thumbImages?.length > 3 && (
            <div>
              <i
                className="absolute max-lg:hidden bottom-0 left-[40%] px-2 py-0.5 rounded-full fa-solid fa-chevron-down text-xl bg-croonus-2 text-white animate-bounce cursor-pointer"
                onClick={() =>
                  ThumbnailPlugin(
                    instanceRef.current.next() &&
                      thumbnailRef.initial.moveToIdx(0)
                  )
                }
              ></i>
            </div>
          )}
        </div>
      ) : (
        <div
          ref={thumbnailRef}
          className="keen-slider max-lg:mt-5 thumbnail lg:h-[550px] 2xl:h-[400px] 4xl:h-[550px] relative mr-4 z-0"
          style={{ width: "100%" }}
        >
          {thumbImages}
        </div>
      )}

      <div
        ref={sliderRef}
        className="keen-slider relative max-lg:h-[300px] lg:h-[550px] 2xl:h-[400px] 4xl:h-[550px]"
      >
        {images}
      </div>

      <div className="flex flex-col gap-3 absolute z-[0] top-7 -right-3 ">
        {gallery?.stickers?.map((sticker) => (
          <div className="bg-croonus-3 py-2 px-4 rounded-l-md">
            <p className="font-medium text-sm uppercase">{sticker?.name}</p>
          </div>
        ))}
      </div>
      {modal.show && (
        <div
          onClick={() => setModal({ show: false })}
          className="fixed translate-x-0 flex items-center justify-center top-0 left-0 h-screen w-screen bg-black bg-opacity-40 z-[100]"
        >
          <div className="relative flex items-center justify-center h-[650px]">
            <ImageMagnifier src={convertHttpToHttps(modal.image)} />
            <i
              className="absolute top-2 right-4 text-xl fa-solid fa-xmark hover:text-red-500 cursor-pointer"
              onClick={() => setModal({ show: false })}
            ></i>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemGallery;
