import { useEffect, useState } from "react";
import Image from "next/image";
import { useGlobalAddToCart } from "@/app/api/globals";
import { useGlobalRemoveFromCart } from "@/app/api/globals";
import { currencyFormat } from "../helpers/functions";
import PlusMinusInputTwo from "./PlusMinusInputTwo";
import classes from "./CartProductItem.module.css";
import PlusMinusInputOne from "./PlusMinusInputOne";
import { convertHttpToHttps } from "@/helpers/convertHttpToHttps";
import Link from "next/link";

const CartProductItem = ({ item, refresh, setRefresh }) => {
  const [productAmount, setProductAmount] = useState(
    Number(item.cart.quantity),
  );
  const [sureCheck, setSureCheck] = useState(false);

  const removeFromCart = useGlobalRemoveFromCart();

  const addToCart = useGlobalAddToCart(true);

  useEffect(() => {
    if (productAmount !== item.cart.quantity) {
      addToCart(item?.product?.id, productAmount, true);
      const timeout = setTimeout(() => {
        setRefresh(!refresh);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [productAmount, item?.product?.id]);

  const per_item = item?.product?.price?.per_item;
  const total = item?.product?.price?.cost;
  const currency = item?.product?.price?.currency;
  return (
    <>
      <div className="col-span-2 grid grid-cols-3 gap-x-10 mt-1 relative">
        <div className="relative col-span-1 w-full flex items-center ">
          <div className="">
            <Link href={`/${item?.product?.slug}`}>
              <Image
                src={convertHttpToHttps(item?.product?.image[0])}
                width={250}
                height={250}
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={true}
                fetchPriority={`high`}
                alt="AKT"
                className="object-cover h-full w-full"
              />
            </Link>
          </div>
        </div>
        <div className="col-span-2 flex justify-evenly flex-col ">
          <Link href={`/${item?.product?.slug}`}>
            <span className="text-base font-medium">
              {item?.product?.basic_data?.name}
            </span>
          </Link>
          <span>Šifra: {item?.product?.basic_data?.sku}</span>
          <div className="flex items-center gap-3 max-md:hidden">
            <span>Količina</span>
            <PlusMinusInputOne
              max={+item?.product?.inventory?.amount}
              amount={productAmount}
              setCount={setProductAmount}
              onClick={() => setRefresh(!refresh)}
            />
          </div>
          <div className="flex items-center gap-3 md:hidden">
            <span>Količina:</span>
            <PlusMinusInputOne
              max={+item?.product?.inventory?.amount}
              amount={productAmount}
              setCount={setProductAmount}
              onClick={() => setRefresh(!refresh)}
            />
          </div>
          <span>Ukupan iznos: {currencyFormat(total?.discount, currency)}</span>
        </div>
        <span
          className="absolute -top-4 right-2 cursor-pointer"
          onClick={() => {
            setSureCheck(true);
            if (process?.env?.GTM_ENABLED === "true") {
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                ecommerce: null,
              });
              window?.dataLayer?.push({
                event: "remove_from_cart",
                ecommerce: {
                  currency: "RSD",
                  value:
                    item?.cart?.quantity * item?.product?.price?.cost?.with_vat,
                  items: [
                    {
                      item_id: item?.product?.id,
                      item_name: item?.product?.basic_data?.name,
                      price: item?.product?.price?.cost?.with_vat,
                      item_brand: item?.product?.basic_data?.brand_name,
                      item_category: item?.product?.categories?.[0]?.name,
                      quantity: item?.cart?.quantity,
                    },
                  ],
                },
              });
            }
          }}
        >
          X
        </span>
      </div>
      {sureCheck && (
        <div
          className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
          onClick={() => setSureCheck(false)}
        >
          <div className="rounded-lg bg-white p-5">
            <span className="text-[15px] font-bold">
              Da li ste sigurni da želite da uklonite proizvod iz korpe?
            </span>
            <div className="mt-5 flex items-center justify-center gap-4">
              <button
                className="rounded-lg bg-[#E5E5E5] px-5 py-2 hover:bg-red-500 hover:text-white max-md:text-[15px]"
                onClick={() => setSureCheck(false)}
              >
                Ne
              </button>
              <button
                className="rounded-lg bg-[#E5E5E5] px-5 py-2 hover:bg-green-500 hover:text-white max-md:text-[15px]"
                onClick={() => {
                  removeFromCart(item?.product?.id);
                  const timeout = setTimeout(() => {
                    setRefresh(!refresh);
                  }, 500);
                  return () => clearTimeout(timeout);
                }}
              >
                Da
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartProductItem;
