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

  let items = null;
  if (products.length) {
    items = products?.map((item, index) => (
      <div
        key={item.id}
        className={` flex flex-col relative items-center keen-slider__slide number-slide${index}`}
      >
        <div className="max-md:h-[407px] max-lg:h-[429px] h-[350px] 3xl:h-[470px] relative flex justify-center hover">
          <Link
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
            {item?.image[0] ? (
              <Image
                src={convertHttpToHttps(item?.image[0]?.toString())}
                width={500}
                height={500}
                className="h-full object-cover"
                priority={true}
                alt={`proizvod-${item?.basic_data?.name}`}
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
          </Link>
          <div className="absolute bg-white py-[2.5px] bottom-5 w-[70%] flex justify-center items-center divide-x divide-black hovered">
            <div className="flex items-center justify-center w-full">
              <Image
                src={Wishlist}
                width={28}
                height={28}
                alt="favorite"
                className="cursor-pointer hover:scale-110 transition-all duration-200"
                onClick={() => {
                  globalAddToWishlist(item?.basic_data?.id_product);
                  toast.success("Proizvod je dodat u listu želja!", {
                    position: "top-center",
                  });
                }}
              />
            </div>
            <div className="flex items-center justify-center w-full">
              <Image
                src={Cart}
                width={32}
                height={32}
                alt="cart"
                className="cursor-pointer hover:scale-110 transition-all duration-200"
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
        </div>
        <p className="text-black self-start font-sm text-lg mt-2 uppercase">
          <Link
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
          </Link>
        </p>
        {renderPrices(item)}
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
