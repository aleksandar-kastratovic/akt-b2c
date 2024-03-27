"use client";
import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { deleteMethod, get, list, post } from "@/app/api/api";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { convertHttpToHttps } from "@/helpers/convertHttpToHttps";
import Link from "next/link";
import { currencyFormat } from "@/helpers/functions";
import Wishlist from "../../assets/Icons/favorite.png";
import wishlistactive from "../../assets/Icons/favorite-active.png";
import Cart from "../../assets/Icons/shopping-bag.png";
import { useCartContext } from "@/app/api/cartContext";
import { useGlobalAddToCart, useGlobalAddToWishList } from "@/app/api/globals";
import { toast, ToastContainer } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import ArrowPic from "../../assets/Icons/arrow.png";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useRemoveFromWishlist } from "@/hooks/akt.hooks";

const ProductsSlider = ({
  products,
  text,
  wishlistId,
  setWishlistId = () => {},
  isInWishlist = false,
}) => {
  const globalAddToCart = useGlobalAddToCart();
  const globalAddToWishlist = useGlobalAddToWishList();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
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

  const renderDiscountPercentage = (item) => {
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
                    <div className="absolute top-1 right-1 px-3 py-2 bg-croonus-3 w-fit text-croonus-1 text-[0.8rem] rounded-lg">
                      <p className="text-black">
                        -
                        {(
                          ((item?.price?.max?.price?.original -
                            item?.price?.max?.price?.discount) /
                            item?.price?.max?.price?.original) *
                          100
                        ).toFixed(0)}
                        %
                      </p>
                    </div>
                  </>
                );
                break;
              case false:
                return (
                  <>
                    <div className="absolute top-1 right-1 px-3 py-2 bg-croonus-3 w-fit text-croonus-1 text-[0.8rem] rounded-lg">
                      <p className="text-black">
                        -
                        {(
                          ((item?.price?.max?.price?.original -
                            item?.price?.max?.price?.discount) /
                            item?.price?.max?.price?.original) *
                          100
                        ).toFixed(0)}
                        %
                      </p>
                    </div>
                  </>
                );
                break;
            }
          case false:
            return null;
            break;
        }
        break;
      case "single":
        switch (item?.price?.discount?.active) {
          case true:
            return (
              <>
                <div className="absolute top-1 right-1 px-3 py-2 bg-croonus-3 w-fit text-croonus-1 text-[0.8rem] rounded-lg">
                  <p className="text-black">
                    -
                    {(
                      ((item?.price?.price?.original -
                        item?.price?.price?.discount) /
                        item?.price?.price?.original) *
                      100
                    ).toFixed(0)}
                    %
                  </p>
                </div>
              </>
            );
            break;
          case false:
            return null;
            break;
        }
    }
  };

  const [, , , mutateWishList] = useCartContext();

  const { data: wishlist, refetch } = useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      return await list(`/wishlist`).then((res) => res?.payload?.items);
    },
    refetchOnWindowFocus: false,
  });

  const { mutate: removeFromWishlist, isPending } = useRemoveFromWishlist();
  const product = products?.map((item, index) => {
    const isProductInWishlist = wishlist?.find(
      (product) => product?.product?.id === item?.basic_data?.id_product
    );

    const wishlist_item = wishlist?.filter(
      (item1) => item1?.product?.id === item?.basic_data?.id_product
    );

    const wishlist_id = wishlist_item?.[0]?.wishlist?.id;
    return (
      <div
        key={item.id}
        className={`col-span-1 !h-auto !relative items-center keen-slider__slide number-slide${index}`}
      >
        <div className={`flex flex-col h-full !gap-0`}>
          <div className="w-full !h-full relative flex justify-center">
            <Link
              className={`w-full`}
              href={`/${item?.slug_path}`}
              onClick={() => {
                process?.env?.GTM_ENABLED === "true" &&
                  window?.dataLayer?.push({
                    event: "productClick",
                    ecommerce: {
                      click: {
                        products: [
                          {
                            name: item?.basic_data?.name,
                            id: item?.basic_data?.id_product,
                            price: item?.price?.price?.original,
                            brand: item?.basic_data?.brand,
                            category: item?.basic_data?.category,
                            variant: item?.basic_data?.variant,
                            list: "Search Results",
                            position: index + 1,
                          },
                        ],
                      },
                    },
                  });
              }}
            >
              <div className="relative w-full">
                {item?.image[0] ? (
                  <>
                    {item?.image[1] ? (
                      <div className="relative w-full min-h-full max-md:w-[94%] mx-auto hoverThumbImage">
                        <Image
                          src={convertHttpToHttps(item?.image[0])}
                          alt={item?.basic_data?.name ?? "AKT"}
                          width={0}
                          height={0}
                          sizes={`70vw`}
                          className={`transition-all duration-200 opacity-100 w-full h-auto firstImage`}
                          loading="lazy"
                        />
                        <Image
                          src={convertHttpToHttps(item?.image[1])}
                          alt={item?.basic_data?.name ?? "AKT"}
                          width={0}
                          height={0}
                          sizes={`70vw`}
                          style={{ objectFit: "cover" }}
                          className={`absolute top-0 transition-all duration-200 opacity-0 w-full h-auto secondImage`}
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="relative w-full min-h-full max-md:w-[94%] mx-auto">
                        <Image
                          src={convertHttpToHttps(item?.image[0])}
                          alt={item?.basic_data?.name ?? "AKT"}
                          width={0}
                          height={0}
                          sizes={`70vw`}
                          style={{ objectFit: "cover" }}
                          className={`opacity-100 h-auto w-full `}
                          loading="lazy"
                        />
                      </div>
                    )}
                  </>
                ) : (
                  <Image
                    src="/placeholder.jpg"
                    width={500}
                    height={500}
                    className="h-full object-cover"
                    priority={true}
                    alt={`proizvod-${item?.basic_data?.name}` ?? "AKT"}
                  />
                )}
              </div>
              {item?.stickers?.length > 0 && (
                <div
                  className={`absolute top-1 left-1 w-fit z-[10] flex flex-col gap-2`}
                >
                  {item?.stickers?.map(({ name }) => {
                    if (name) {
                      return (
                        <div className="px-3 py-2 bg-croonus-3 w-fit text-croonus-1 text-[0.8rem] rounded-lg">
                          <p>{name}</p>
                        </div>
                      );
                    }
                  })}
                </div>
              )}

              {item?.price?.discount?.active && renderDiscountPercentage(item)}
            </Link>
          </div>
          <div className="text-start mt-auto w-full pt-1">
            <div className=" py-[3px] w-[70%] flex justify-center items-center w-full border-b border-black">
              <div className="flex items-center justify-end w-full">
                <div
                  onMouseEnter={() => {
                    setWishlistId(item?.basic_data?.id_product);
                  }}
                  onClick={async () => {
                    if (!isProductInWishlist) {
                      await post("/wishlist", {
                        id: null,
                        id_product: item?.basic_data?.id_product,
                        quantity: 1,
                        id_product_parent: null,
                        description: null,
                        status: null,
                      }).then((res) => {
                        if (res?.code === 200) {
                          toast.success("Uspešno dodato u želje.", {
                            autoClose: 2000,
                            position: "top-center",
                          });
                          mutateWishList();
                        }
                      });
                      refetch();
                    } else {
                      setTimeout(async () => {
                        await deleteMethod(`/wishlist/${wishlist_id}`).then(
                          (res) => {
                            if (res?.code === 200) {
                              toast.success("Uspešno uklonjeno iz želja.", {
                                autoClose: 2000,
                                position: "top-center",
                              });
                              mutateWishList();
                              refetch();
                            } else {
                              toast.error("Došlo je do greške.", {
                                autoClose: 2000,
                                position: "top-center",
                              });
                            }
                          }
                        );
                      }, 500);
                    }
                  }}
                  className={`flex min-w-[25px] mr-[20%] items-center justify-center ${
                    pathname !== "/zelje" && "hover:bg-[#f3f3f3]"
                  } transition-all duration-300`}
                >
                  {isInWishlist ? (
                    <i
                      className={`fa fa-solid fa-times cursor-pointer text-xl hover:text-red-500`}
                    ></i>
                  ) : isProductInWishlist ? (
                    <Image
                      alt="wishlist"
                      src={wishlistactive}
                      height={28}
                      width={28}
                      className="cursor-pointer hover:scale-110 transition-all duration-200 mr-[20%]"
                    />
                  ) : (
                    <Image
                      src={Wishlist}
                      alt="wishlist"
                      height={28}
                      width={28}
                      className={`cursor-pointer transition-all duration-500 hover:scale-110 ${
                        isProductInWishlist && "hidden"
                      }`}
                    />
                  )}
                </div>
              </div>

              <div className="w-[2px] h-[26px] bg-[#000]"></div>
              <div className="flex items-center justify-start w-full">
                <Image
                  src={Cart}
                  width={36}
                  height={36}
                  alt="cart"
                  className="cursor-pointer hover:scale-110 transition-all duration-200 ml-[20%]"
                  onClick={() => {
                    if (item?.product_type === "single") {
                      globalAddToCart(item?.basic_data?.id_product, 1, false);
                      toast.success("Proizvod je dodat u korpu!", {
                        position: "top-center",
                      });
                      if (process?.env?.GTM_ENABLED === "true") {
                        window?.dataLayer?.push({
                          event: "addToCart",
                          ecommerce: {
                            currencyCode: "RSD",
                            add: {
                              products: [
                                {
                                  name: item?.basic_data?.name,
                                  id: item?.basic_data?.id_product,
                                  price: item?.price?.price?.original,
                                  brand: item?.basic_data?.brand,
                                  category: item?.categories[0]?.name,
                                  variant: null,
                                  quantity: 1,
                                },
                              ],
                            },
                          },
                        });
                      }
                    } else {
                      router.push(`/${item?.slug_path}`);
                    }
                  }}
                />
              </div>
            </div>
            <p className="text-black self-start font-sm text-lg mt-2 uppercase">
              <Link
                className="font-normal text-sm clamp"
                href={`/${item?.slug_path}`}
                onClick={() => {
                  process?.env?.GTM_ENABLED === "true" &&
                    window?.dataLayer?.push({
                      event: "productClick",
                      ecommerce: {
                        click: {
                          products: [
                            {
                              name: item?.basic_data?.name,
                              id: item?.basic_data?.id_product,
                              price: item?.price?.price?.original,
                              brand: item?.basic_data?.brand,
                              category: item?.basic_data?.category,
                              variant: item?.basic_data?.variant,
                              list: "Search Results",
                              position: index + 1,
                            },
                          ],
                        },
                      },
                    });
                }}
              >
                {item?.basic_data?.name}
              </Link>
            </p>

          </div>
          {item?.price?.price?.original == 0 ||
          item?.price?.price?.original == null ? (
              <button
                  className="relative hover:bg-opacity-80 h-fit flex py-1 px-3 bg-croonus-1 text-white font-medium mr-auto"
                  onClick={() => {
                    router?.push(`/kontakt?slug=${item?.slug}`);
                  }}
              >
                <span className="text-[0.8rem]">Pošaljite upit</span>
              </button>
          ) : (
              <>{renderPrices(item)}</>
          )}
        </div>



      </div>
    );
  });

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
          alt="AKT"
          className="cursor-pointer rotate-90"
        />
      )}
      {!props.left && (
        <Image
          src={ArrowPic}
          width={35}
          height={35}
          alt="AKT"
          className="cursor-pointer -rotate-90"
        />
      )}
    </div>
  );
}

export default ProductsSlider;
