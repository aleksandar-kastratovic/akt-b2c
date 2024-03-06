"use client";

import {
  useAddToWishlist,
  useAddToCart,
  useIsInWishlist,
  useProductThumb,
  useRemoveFromWishlist,
  useProductSticker,
} from "@/hooks/akt.hooks";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import RenderPriceDiscount from "@/shared/RenderPrice/RenderPriceDiscount";
import RenderPrice from "@/shared/RenderPrice/RenderPrice";
import { config } from "@/lib/akt.config";
import Cart from "@/assets/Icons/shopping-bag.png";
import { currencyFormat } from "@/helpers/functions";
import { convertHttpToHttps } from "@/helpers/convertHttpToHttps";

const ThumbSuspense = ({
  className,
  id,
  thumbKey,
  refreshWishlist = () => {},
  
}) => {
  const {
    isPending: isWishlistPending,
    mutate: addToWishlist,
    isSuccess: isAdded,
  } = useAddToWishlist();
  const { data, refetch } = useIsInWishlist({ id });
  const { mutate: removeFromWishlist, isSuccess: isRemoved } =
    useRemoveFromWishlist();
  const { base64_placeholder } = config;

  const isInWishlist = data?.exist;
  const wishlist_id = data?.wishlist_item_id;


  const [isPriceAvailable, setIsPriceAvailable] = useState(true);
  const {
    data: product,
    data: {
      slug_path,
      inventory,
      price,
      image,
      basic_data: { name, id_product },
    },
  } = useProductThumb({ id: id,slug:id });


  const slug = slug_path;

  //fetchujemo podatke o stickeru
  const {
    data:sticker,
  } = useProductSticker({ slug:id });
  
  useEffect(() => {
    if (isAdded || isRemoved) {
      refetch();
      refreshWishlist();
    }
  }, [isAdded, isRemoved]);

  const { mutate: addToCart, isPending } = useAddToCart();

  const handleAddToCart = (id) => {
      addToCart({ id: id_product, quantity: 1 });
  };
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
                    <div className="absolute top-2 right-5 px-3 bg-croonus-3 w-fit text-[1rem] z-[10] rounded-lg z-100">
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
                    <div className="absolute top-2 right-3 px-3 bg-croonus-3 w-fit text-[1rem] z-[10] rounded-lg z-100">
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
                <div className="absolute top-2 right-5 px-3 bg-croonus-3 w-fit text-[1rem] z-[10] rounded-lg z-100">
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

  return (
    <div key={thumbKey || id_product}>
   
      <div className="col-span-1">
        <a href={`/proizvod/${product?.slug}`}>
          <div className="relative w-full">
                {product?.image[0] ? (
                  <>
                  {product?.image[1] ? (
                    <div className="relative  w-full min-h-full max-md:w-[94%] mx-auto hoverThumbImage">
                        <Image
                          src={convertHttpToHttps(product?.image[0])}
                          alt={product?.basic_data?.name}
                          width={0}
                          height={0}
                          sizes={`100vw`}
                          style={{ objectFit: "cover" }}
                          className={`transition-all aspect-2/3 duration-200 opacity-100 object-cover w-full h-full firstImage`}
                          loading="lazy"
                        />
                        <Image
                          src={convertHttpToHttps(product?.image[1])}
                          alt={product?.basic_data?.name}
                          width={0}
                          height={0}
                          sizes={`100vw`}
                          style={{ objectFit: "cover" }}
                          className={`absolute top-0 transition-all aspect-2/3 duration-200 opacity-0 object-cover w-full h-full secondImage`}
                          loading="lazy"
                        />
                      </div>
                  ) : (
                    <div className="relative w-full min-h-full max-md:w-[94%] mx-auto">
                    <Image
                      src={convertHttpToHttps(product?.image[0])}
                      alt={product?.basic_data?.name}
                      width={0}
                      height={0}
                      sizes={`100vw`}
                      style={{ objectFit: "cover" }}
                      className={`aspect-2/3 opacity-100 object-cover w-full `}
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
                  alt={`proizvod-${item?.basic_data?.name}`}

                  />
                )}
          </div>
          
        </a>
        <div className="text-start w-full pt-1">
          <div className=" py-[3px] w-[70%] flex justify-center items-center w-full border-b border-black">
            
            <div className="flex items-center justify-end w-full">
           <div
         onClick={() => {
          if (isInWishlist) {
            removeFromWishlist({ id: wishlist_id });
          } else {
            addToWishlist({ id });
          }
        }}
          className={`flex min-w-[25px] items-center justify-center transition-all cursor-pointer duration-300 hover:bg-[#f3f3f3] mr-[23%]`}
        >
              <p className="text-[20px]">X</p>
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
                    handleAddToCart(id_product);
                  }}
                />
              </div>
          </div>
          <p className="text-black self-start font-sm text-lg mt-2 uppercase">
            <a
              className="font-normal text-sm clamp"
              href={`/proizvod/${product?.slug_path}`}
              onClick={() => {
                process?.env?.GTM_ENABLED === "true" &&
                  window?.dataLayer?.push({ ecommerce: null });
                window?.dataLayer?.push({
                  event: "productClick",
                  ecommerce: {
                    click: {
                      products: [
                        {
                          name: product?.basic_data?.name,
                          id: product?.basic_data?.id_product,
                          price: product?.price?.price?.original,
                          brand: product?.basic_data?.brand,
                          category: product?.basic_data?.category,
                          variant: product?.basic_data?.variant,
                          list: "Search Results",
                          position: index + 1,
                        },
                      ],
                    },
                  },
                });
              }}
            >
              {product?.basic_data?.name}
            </a>
          </p>
          {product?.price?.price?.original == 0 || product?.price?.price?.original == null ? (
            
            <button
              className="relative hover:bg-opacity-80 h-fit flex py-1 px-3 bg-croonus-1 text-white font-medium mr-auto"
              onClick={() => {
                router?.push(`/kontakt?slug=${product?.slug}`);
              }}
            >
              <span className="text-[0.8rem]">Pošaljite upit</span>
            </button>
          ) : (
            <>{renderPrices(product)}</>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThumbSuspense;
