"use client";
import { currencyFormat } from "@/helpers/functions";
import { useState, useEffect } from "react";
import PlusMinusInputOne from "../PlusMinusInputOne";
import { useGlobalAddToCart, useGlobalAddToWishList } from "@/app/api/globals";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import Cart from "../../assets/Icons/shopping-bag.png";
import Wishlist from "../../assets/Icons/bookmark.png";
import Variants from "../Variants/Variants";
import { usePathname, useRouter } from "next/navigation";

const ProductInfo = ({ products, description }) => {
  const router = useRouter();
  const pathname = usePathname();
  const segments = pathname.split("/");
  let id = segments.pop();
  const [productVariant, setProductVariant] = useState(null);
  const [productPrice, setProductPrice] = useState(null);
  const [newURL, setNewURL] = useState(null);

  useEffect(() => {
    if (newURL) {
      window.history.replaceState(null, null, `/proizvod/${newURL}`);
    }
  }, [newURL]);

  const updateProductVariant = (newProduct) => {
    setProductVariant(newProduct);
  };
  const updateProductPrice = (newPrice) => {
    setProductPrice(newPrice);
  };
  const handleURLChange = (newURL) => {
    setNewURL(newURL);
  };
  const [productAmount, setProductAmount] = useState(1);
  const globalAddToCart = useGlobalAddToCart();
  const globalAddToWishList = useGlobalAddToWishList();

  const addToWishlist = (e) => {
    if (products.product_type === "single") {
      globalAddToWishList(products.data.item.basic_data?.id_product);
      toast.success("Proizvod dodat u listu želja!", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      if (!productVariant) {
        toast.warn("Morate izabrati varijantu proizvoda!", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        globalAddToWishList(productVariant?.basic_data?.id_product);
        toast.success("Proizvod dodat u listu želja!", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }
  };
  const addToCart = (e) => {
    if (products.product_type === "single") {
      globalAddToCart(products.data.item.basic_data.id_product, productAmount);
      toast.success("Proizvod dodat u korpu!", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      if (!productVariant) {
        toast.warn("Morate izabrati varijantu proizvoda!", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        globalAddToCart(productVariant?.basic_data?.id_product, productAmount);
        toast.success("Proizvod dodat u korpu!", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }
    setProductAmount(1);
    if (process?.env?.GTM_ENABLED === "true") {
      window?.dataLayer?.push({ ecommerce: null });
      window?.dataLayer?.push({
        event: "addToCart",
        ecommerce: {
          currencyCode: "RSD",
          add: {
            products: [
              {
                name: products?.data?.item?.basic_data?.name,
                id: products?.data?.item?.basic_data?.id_product,
                price: products?.data?.item?.price?.price?.original,
                brand: products?.data?.item?.basic_data?.brand,
                category: products?.data?.item?.categories[0]?.name,
                variant: productVariant?.basic_data?.name,
                quantity: productAmount,
              },
            ],
          },
        },
      });
    }
  };
  useEffect(() => {
    if (process?.env?.GTM_ENABLED === "true") {
      window?.dataLayer?.push({
        ecommerce: {
          detail: {
            products: [
              {
                name: products?.data?.item?.basic_data?.name,
                id: products?.data?.item?.basic_data?.id_product,
                price: products?.data?.item?.price?.price?.original,
                brand: products?.data?.item?.basic_data?.brand,
                category: products?.data?.item?.categories[0]?.name,
                variant: productVariant?.basic_data?.name,
              },
            ],
          },
        },
      });
    }
  });
  return (
    <div className="col-span-2 max-md:mt-10 max-lg:mt-6 lg:col-span-3 text-croonus-1">
      <div className="flex items-center justify-between">
        <h1 className="uppercase max-md:text-[0.9rem] text-[1.35rem] text-croonus-1 font-bold max-md:max-w-[59%] self-start hyphens">
          {productVariant ? (
            <>{productVariant?.basic_data?.name}</>
          ) : (
            <> {products?.data?.item?.basic_data?.name}</>
          )}{" "}
        </h1>
        <div className=" flex flex-col max-[280px]:max-[130px] min-w-[145px] max-w-[146px] md:hidden self-start float-right text-right text-[0.9rem] text-croonus-1 font-semibold">
          {productVariant ? (
            <h1 className="pr-2">
              {currencyFormat(productVariant?.price?.price?.original)}{" "}
            </h1>
          ) : (
            <h1 className="pr-2">{currencyFormat(20000)}</h1>
          )}
          <div className="flex items-center mt-[2px] justify-between px-2 py-1 font-medium bg-[#eddd9e] text-[0.9rem]">
            <span>-10%</span>
            <span>3.200 RSD</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-10 max-md:mt-3">
        <p className="text-sm mt-0 font-bold">
          Šifra:{" "}
          <span className="font-normal">
            {productVariant ? (
              <>{productVariant?.basic_data?.sku}</>
            ) : (
              <> {products?.data?.item?.basic_data?.sku}</>
            )}{" "}
          </span>
        </p>
        <p className="font-bold mt-0 text-sm">
          Dostupno:{" "}
          <span className="font-medium">
            {productVariant ? (
              productVariant?.inventory?.status === "Dostupno" ? (
                <>Da</>
              ) : (
                <>Ne</>
              )
            ) : products?.data?.item?.inventory?.status === "Dostupno" ? (
              <>Da</>
            ) : (
              <>Ne</>
            )}
          </span>
        </p>
      </div>
      <div className="flex flex-row items-center gap-10 mt-4 py-5 max-md:hidden">
        <p className="font-normal text-[1rem]">
          {products?.data?.item?.price?.min?.price?.original &&
          products?.data?.item?.price?.max?.price?.original ? (
            <>
              {currencyFormat(
                products?.data?.item?.price?.min?.price?.original
              )}{" "}
              -{" "}
              {currencyFormat(
                products?.data?.item?.price?.max?.price?.original
              )}
            </>
          ) : (
            currencyFormat(products?.data?.item?.price?.price?.original)
          )}
        </p>

        {/* <p className="bg-croonus-3 px-2.5 py-1.5 text-[1.2rem]">
          -10% 3.200RSD
        </p> */}
      </div>
      <div>
        <h1 className="font-bold max-sm:hidden">
          <p className="text-[1rem] font-normal">
            {products?.data?.item?.basic_data?.short_description}
          </p>
        </h1>
      </div>

      {products?.product_type === "single" ? null : (
        <div className="py-10 max-md:py-7">
          <Variants
            firstVariantOption={false}
            product={products}
            productSlug={id}
            handleURLChange={handleURLChange}
            updateProductVariant={updateProductVariant}
            updateProductPrice={updateProductPrice}
          />
        </div>
      )}

      <h1 className="text-[1.5rem] font-bold max-lg:text-left max-md:hidden">
        {" "}
        {productVariant ? (
          <>{currencyFormat(productVariant?.price?.price?.original)}</>
        ) : (
          <>
            {products?.data?.item?.price?.min?.price?.original &&
            products?.data?.item?.price?.max?.price?.original ? (
              <>
                {currencyFormat(
                  products?.data?.item?.price?.min?.price?.original
                )}{" "}
                -&nbsp;
                {currencyFormat(
                  products?.data?.item?.price?.max?.price?.original
                )}
              </>
            ) : (
              currencyFormat(products?.data?.item?.price?.price?.original)
            )}
          </>
        )}
      </h1>
      <div className="flex items-center max-lg:justify-center max-md:mt-3 flex-row lg:flex-row gap-5 mt-6">
        <div className="col-span-1 max-lg:col-span-3">
          <PlusMinusInputOne
            amount={productAmount}
            setCount={setProductAmount}
          />
        </div>
        <div className="col-span-4 max-md:h-full self-stretch flex items-center gap-2">
          <button
            className="relative max-md:h-full hover:bg-opacity-80 flex items-center gap-2 max-[361px]:pr-5 min-[375px]:px-5 justify-center py-1 bg-croonus-1 text-white font-medium"
            onClick={() => addToCart()}
          >
            <Image
              className="invert"
              width={40}
              height={40}
              src={Cart}
              alt="cart"
            />
            Dodaj u korpu
          </button>
          <div className="lg:hover:bg-red-500 p-2 max-md:h-full max-md:border max-md:border-[#919191] max-md:bg-[#fbfbfb] lg:rounded-full">
            <Image
              src={Wishlist}
              alt="wishlist"
              width={30}
              height={30}
              onClick={() => addToWishlist()}
              className="cursor-pointer lg:hover:invert"
            />
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
