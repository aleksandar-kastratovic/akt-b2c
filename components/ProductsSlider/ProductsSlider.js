"use client";
import React, { useEffect, useState } from "react";
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
import ArrowPic from "../../assets/Icons/arrow.png";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
const ProductsSlider = ({ products, text }) => {
  const globalAddToCart = useGlobalAddToCart();
  const globalAddToWishlist = useGlobalAddToWishList();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 4,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          perView: 1.2,
          spacing: 20,
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

  const renderPrices = (item) => {
    switch (item?.product_type) {
      case "variant":
        switch (item?.price?.discount?.active) {
          case true:
            switch (
              item?.price?.min?.price?.original ===
              item?.price?.max?.price?.original
            ) {
              case true:
                return (
                  <>
                    <p
                      className={`text-[0.875rem] self-start text-black font-semibold py-1 line-through`}
                    >
                      {currencyFormat(item?.price?.price?.original)}
                    </p>
                    <div className="bg-croonus-3  self-start w-fit ">
                      <p className="text-[1rem] self-start text-black font-normal py-2 px-2">
                        {currencyFormat(item?.price?.price?.discount)}
                      </p>
                    </div>
                  </>
                );
                break;
              case false:
                return (
                  <>
                    <p
                      className={`text-[0.875rem] self-start text-black font-semibold py-1 line-through`}
                    >
                      {currencyFormat(item?.price?.min?.price?.original)} -{" "}
                      {currencyFormat(item?.price?.max?.price?.original)}
                    </p>
                    <div className="bg-croonus-3  self-start w-fit ">
                      <p className="text-[1rem] self-start text-black font-normal py-2 px-2">
                        {currencyFormat(item?.price?.min?.price?.discount)} -{" "}
                        {currencyFormat(item?.price?.max?.price?.discount)}
                      </p>
                    </div>
                  </>
                );
                break;
            }
          case false:
            switch (
              item?.price?.min?.price?.original ===
              item?.price?.max?.price?.original
            ) {
              case true:
                return (
                  <>
                    <p
                      className={`text-[0.875rem] self-start text-black font-semibold py-1`}
                    >
                      {currencyFormat(item?.price?.min?.price?.original)}
                    </p>
                  </>
                );
                break;
              case false:
                return (
                  <>
                    <p
                      className={`text-[0.875rem] self-start text-black font-semibold py-1`}
                    >
                      {currencyFormat(item?.price?.min?.price?.original)} -{" "}
                      {currencyFormat(item?.price?.max?.price?.original)}
                    </p>
                  </>
                );
                break;
            }
        }
        break;
      case "single":
        switch (item?.price?.discount?.active) {
          case true:
            return (
              <>
                <p
                  className={`text-[0.875rem] self-start text-black font-semibold py-1 line-through`}
                >
                  {currencyFormat(item?.price?.price?.original)}
                </p>
                <div className="bg-croonus-3 self-start w-fit ">
                  <p className="text-[1rem] self-start text-black font-normal py-2 px-2">
                    {currencyFormat(item?.price?.price?.discount)}
                  </p>
                </div>
              </>
            );
            break;
          case false:
            return (
              <>
                <p
                  className={`text-[0.875rem] self-start text-black font-semibold py-1`}
                >
                  {currencyFormat(item?.price?.price?.original)}
                </p>
              </>
            );
            break;
        }
    }
  };

  const product = products.map((item, index) => (
    <div
      key={item.id}
      className={` flex flex-col !relative items-center keen-slider__slide number-slide${index}`}
    >
      <div className="max-lg:h-[429px] w-full h-[360px] 3xl:h-[30.563rem] relative flex justify-center hover">
        <Link
          href={`/proizvod/${item?.slug}`}
          className={`w-full`}
          onClick={() => {
            process?.env?.GTM_ENABLED === "true"
              ? dataLayer.push({
                  event: "productClick",
                  ecommerce: {
                    click: {
                      actionField: {
                        list: "Homepage",
                      },
                      products: [
                        {
                          name: item?.basic_data?.name,
                          id: item?.basic_data?.id_product,
                          price: item?.basic_data?.price,
                          brand: item?.basic_data?.brand,
                          category: item?.basic_data?.category,
                          variant: item?.basic_data?.variant,
                          list: "Homepage",
                          position: index + 1,
                        },
                      ],
                    },
                  },
                })
              : null;
          }}
        >
          <div className={`!relative h-full w-full`}>
            <Image
              src={convertHttpToHttps(item?.image[0]?.toString())}
              fill
              priority={true}
              className="h-full !z-50 "
              alt="akt"
            />
          </div>
        </Link>
        <div className="absolute bg-white py-0.5 bottom-5 w-[70%] flex justify-center divide-x items-center  divide-black hovered">
          <div className="flex items-center justify-center w-full">
            <Image
              src={Wishlist}
              width={28}
              height={28}
              alt=""
              className="cursor-pointer hover:scale-110 transition-all duration-300"
              onClick={() => {
                if (item?.product_type === "single") {
                  globalAddToWishlist(item?.basic_data?.id_product);
                  toast.success("Proizvod je dodat u listu želja!", {
                    position: "top-center",
                  });
                } else {
                  router.push(`/proizvod/${item?.slug}`);
                }
              }}
            />
          </div>

          <div className="flex items-center justify-center w-full">
            <Image
              src={Cart}
              width={30}
              height={30}
              alt=""
              className="cursor-pointer hover:scale-110 transition-all duration-300"
              onClick={() => {
                if (item?.product_type === "single") {
                  globalAddToCart(item?.basic_data?.id_product, 1, false);
                  toast.success("Proizvod je dodat u korpu!", {
                    position: "top-center",
                  });
                } else {
                  router.push(`/proizvod/${item?.slug}`);
                }
              }}
            />
          </div>
        </div>
      </div>
      <p className="text-black clamp self-start font-sm text-lg mt-2 uppercase">
        <Link
          className="font-normal text-[.9rem]"
          href={`/proizvod/${item?.slug}`}
        >
          {item?.basic_data?.name}
        </Link>
      </p>
      {renderPrices(item)}
    </div>
  ));

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
                instanceRef?.current?.next();
              }}
            ></i>
          </div>
        </div>
        <div ref={sliderRef} className="keen-slider mt-[1.625rem]">
          {product}
        </div>
        {loaded && instanceRef?.current && (
          <div className="max-md:hidden">
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
          </div>
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
    <div
      onClick={props.onClick}
      className={`flex flex-col items-center justify-center arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
    >
      {props.left && (
        <Image
          src={ArrowPic}
          width={35}
          height={35}
          alt=""
          className="cursor-pointer rotate-90"
        />
      )}
      {!props.left && (
        <Image
          src={ArrowPic}
          width={35}
          height={35}
          alt=""
          className="cursor-pointer -rotate-90"
        />
      )}
    </div>
  );
}

export default ProductsSlider;
