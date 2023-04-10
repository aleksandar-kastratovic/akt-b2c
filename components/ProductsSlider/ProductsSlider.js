"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { convertHttpToHttps } from "@/helpers/convertHttpToHttps";
import Link from "next/link";
import { currencyFormat } from "@/helpers/functions";
import Wishlist from "../../assets/Icons/favorite.png";
import Cart from "../../assets/Icons/shopping-bag.png";
import { useGlobalAddToCart, useGlobalAddToWishList } from "@/app/api/globals";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProductsSlider = ({ products, text }) => {
  const globalAddToCart = useGlobalAddToCart();
  const globalAddToWishlist = useGlobalAddToWishList();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 4,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          perView: 1,
        },
      },
      "(min-width:1024px)": {
        slides: {
          perView: 4,
          spacing: 20,
        },
      },
      "(min-width:1680px)": {
        slides: {
          perView: 4,
          spacing: 30,
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

  const product = products.map((item, index) => (
    <div
      key={item.id}
      className={` flex flex-col relative items-center keen-slider__slide number-slide${index}`}
    >
      <div className="max-lg:h-[429px] h-[360px] 3xl:h-[32.563rem] relative flex justify-center hover">
        <Link href={`/proizvod/${item?.slug}`}>
          <Image
            src={convertHttpToHttps(item?.image[0]?.toString())}
            width={500}
            height={500}
            className="h-full object-cover"
          />
        </Link>
        <div className="absolute bg-white bottom-5 w-[60%] flex justify-center items-center divide-x-2 hovered">
          <div className="pr-10">
            <Image
              src={Wishlist}
              width={35}
              height={35}
              alt=""
              className="cursor-pointer"
              onClick={() => {
                globalAddToWishlist(item?.basic_data?.id_product);
                toast.success("Proizvod je dodat u listu želja!", {
                  position: "top-center",
                });
              }}
            />
          </div>
          <div className="pl-10">
            <Image
              src={Cart}
              width={35}
              height={35}
              alt=""
              className="cursor-pointer"
              onClick={() => {
                globalAddToCart(item?.basic_data?.id_product, 1, false);
                toast.success("Proizvod je dodat u korpu!", {
                  position: "top-center",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              }}
            />
          </div>
        </div>
      </div>
      <p className="text-black clamp self-start font-sm text-lg mt-2 uppercase">
        <Link
          className="font-normal text-[1rem]"
          href={`/proizvod/${item?.slug}`}
        >
          {item?.basic_data?.name}
        </Link>
      </p>
      <div className=" self-start w-1/3">
        <p className="text-[0.875rem] self-start text-black font-normal py-1 line-through">
          {currencyFormat(item?.price?.price?.original)}
        </p>
      </div>
      <div className=" bg-croonus-3 self-start w-1/3">
        <p className="text-[1rem] self-start text-black font-normal py-2 pl-2">
          {currencyFormat(item?.price?.price?.original)}
        </p>
      </div>
    </div>
  ));

  return (
    <>
      {" "}
      <ToastContainer />
      <div className="mt-[3.688rem] navigation-wrapper w-[95%] lg:w-[85%] mx-auto">
        <h1 className="text-xl font-medium">{text}</h1>

        <div ref={sliderRef} className="keen-slider mt-[2.875rem]">
          {product}
        </div>
        {loaded && instanceRef?.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef?.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef?.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef?.current?.track?.details?.slides?.length - 1
              }
            />
          </>
        )}
      </div>
      {/* {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )} */}
    </>
  );
};

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

export default ProductsSlider;
