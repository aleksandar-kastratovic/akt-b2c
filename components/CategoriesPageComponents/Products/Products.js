import Link from "next/link";
import Image from "next/image";
import Wishlist from "../../../assets/Icons/favorite.png";
import { useGlobalAddToWishList } from "../../../app/api/globals";
import { currencyFormat } from "../../../helpers/functions";
import { useGlobalAddToCart } from "../../../app/api/globals";
import { convertHttpToHttps } from "@/helpers/convertHttpToHttps";
import Cart from "../../../assets/Icons/shopping-bag.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import React from "react";
const Products = ({ products = [] }) => {
  const globalAddToWishlist = useGlobalAddToWishList();
  const globalAddToCart = useGlobalAddToCart();
  const router = useRouter();

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

  let items = null;
  if (products.length) {
    items = products?.map((item, index) => (
      <div key={item.id} className={`col-span-1 group`}>
        <div className="w-full relative flex justify-center">
          <a
            className={`w-full`}
            href={`/proizvod/${item?.slug_path}`}
            onClick={() => {
              process?.env?.GTM_ENABLED === "true" &&
                window?.dataLayer?.push({ ecommerce: null });
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
              <div className="relative w-full overflow-hidden">
                {item?.image[0] ? (
                  <Image
                    src={convertHttpToHttps(item?.image[0])}
                    alt={item?.basic_data?.name}
                    width={0}
                    height={0}
                    sizes={`100vw`}
                    style={{ objectFit: "cover" }}
                    className={`transition-all aspect-2/3 duration-200 opacity-100 object-cover w-full h-full firstImage group-hover:scale-110 `}
                    loading="lazy"
                  />
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
              {item?.stickers[0]?.name ? (
                <div className="px-3 py-2 absolute top-1 left-1 bg-yellow-200 w-fit text-croonus-1 text-[0.8rem] z-[10] rounded-lg z-100">
                  <p>{item?.stickers[0]?.name}</p>
                </div>
              ) : null}
              {item?.price?.discount?.active && (
                <div
                  className={`absolute top-2 right-5 px-3 bg-croonus-3 w-fit text-[0.8rem] z-[10] rounded-lg z-100`}
                >
                  <p className={`text-black`}>
                    {renderDiscountPercentage(item)}
                  </p>
                </div>
              )}
            </div>
          </a>
        </div>
        <div className="text-start w-full pt-1">
          <div className=" py-[3px] w-[70%] flex justify-center items-center w-full border-b border-black">
            
            <div className="flex items-center justify-end w-full">
              <Image
                src={Wishlist}
                width={32}
                height={32}
                alt="favorite"
                className="cursor-pointer hover:scale-110 transition-all duration-200 mr-[20%]"
                onClick={() => {
                  globalAddToWishlist(item?.basic_data?.id_product);
                  toast.success("Proizvod je dodat u listu želja!", {
                    position: "top-center",
                  });
                }}
              />
            </div>
            <div className="w-[2px] h-[26px] bg-[#000]"></div>
            <div className="flex items-center justify-start w-full">
              <Image
                src={Cart}
                width={38}
                height={38}
                alt="cart"
                className="cursor-pointer hover:scale-110 transition-all duration-200 ml-[20%]"
                onClick={() => {
                  if (item?.product_type === "single") {
                    globalAddToCart(item?.basic_data?.id_product, 1, false);
                    toast.success("Proizvod je dodat u korpu!", {
                      position: "top-center",
                    });
                    if (process?.env?.GTM_ENABLED === "true") {
                      window?.dataLayer?.push({ ecommerce: null });
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
                    router.push(`/proizvod/${item?.slug_path}`);
                  }
                }}
              />
            </div>
          </div>
          <p className="text-black self-start font-sm text-lg mt-2 uppercase">
            <a
              className="font-normal text-sm clamp"
              href={`/proizvod/${item?.slug_path}`}
              onClick={() => {
                process?.env?.GTM_ENABLED === "true" &&
                  window?.dataLayer?.push({ ecommerce: null });
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
            </a>
          </p>
          {item?.price?.price?.original !== 0 ? (
            <>{renderPrices(item)}</>
          ) : (
            <button
              className="relative hover:bg-opacity-80 h-fit flex py-1 px-3 bg-croonus-1 text-white font-medium mr-auto"
              onClick={() => {
                router?.push(`/kontakt?slug=${item?.slug}`);
              }}
            >
              <span className="text-[0.8rem]">Pošaljite upit</span>
            </button>
          )}
        </div>
      </div>
    ));
  } else {
    if (products?.length === 0) {
      <div>Nema proizvoda za prikaz.</div>;
    } else {
      items = (
        <>
          {[...Array(5)].map((_, index) => (
            <div key={index} className="col-span-1 flex flex-col gap-2">
              <div className="h-[470px] w-[375px] animate-pulse bg-croonus-2"></div>
              <div className="h-[15px] w-[375px] animate-pulse bg-croonus-2"></div>
            </div>
          ))}
        </>
      );
    }
  }
  return <>{items}</>;
};

export default Products;
