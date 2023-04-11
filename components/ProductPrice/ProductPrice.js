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
  let id = pathname.split("/")[2];
  const [productVariant, setProductVariant] = useState(null);
  const [productPrice, setProductPrice] = useState(null);
  const [newURL, setNewURL] = useState(null);
  useEffect(() => {
    if (newURL) {
      router.replace(`/proizvod/${newURL}`, undefined, {
        scroll: false,
      });
      id = newURL;
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
  };
  return (
    <div className="col-span-2 max-lg:mt-6 lg:col-span-3">
      <h1 className="uppercase text-[1.2rem] font-medium">
        {productVariant ? (
          <>{productVariant?.basic_data?.name}</>
        ) : (
          <> {products?.data?.item?.basic_data?.name}</>
        )}{" "}
      </h1>
      <div className="flex flex-row gap-10">
        <p className="text-base mt-2 font-medium">
          Šifra:{" "}
          <span className="font-normal">
            {productVariant ? (
              <>{productVariant?.basic_data?.sku}</>
            ) : (
              <> {products?.data?.item?.basic_data?.sku}</>
            )}{" "}
          </span>
        </p>
        <p className="font-medium mt-2 text-base">
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
      <div className="flex flex-row items-center gap-10 mt-2 py-5">
        <p className="font-normal text-[1.125rem]">
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
        <h1 className="font-bold text-base">
          <p className="text-base font-normal">
            {products?.data?.item?.basic_data?.short_description}
            {description?.description}
          </p>
        </h1>
      </div>

      {products?.product_type === "single" ? null : (
        <div className="py-10">
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

      <h1 className="text-[1.5rem] font-medium max-lg:text-center">
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
      <div className="flex items-center max-lg:justify-center flex-row lg:flex-row gap-5 mt-6">
        <div className="col-span-1 max-lg:col-span-3">
          <PlusMinusInputOne
            amount={productAmount}
            setCount={setProductAmount}
          />
        </div>
        <div className="col-span-4 self-stretch flex items-center gap-2">
          <button
            className="relative  hover:bg-opacity-80 flex items-center gap-2 px-5 justify-center  bg-croonus-1 text-white font-medium"
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
          <div className="hover:bg-red-500 p-2 rounded-full">
            <Image
              src={Wishlist}
              alt="wishlist"
              width={30}
              height={30}
              onClick={() => addToWishlist()}
              className="cursor-pointer hover:invert"
            />
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
