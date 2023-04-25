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

const CartProductItem = ({ item }) => {
  const [productAmount, setProductAmount] = useState(
    Number(item.cart.quantity)
  );

  const removeFromCart = useGlobalRemoveFromCart();

  const addToCart = useGlobalAddToCart(true);

  useEffect(() => {
    if (productAmount != item.cart.quantity) {
      addToCart(item?.product?.id, productAmount, true);
    }
  }, [productAmount, addToCart, item.cart.quantity, item?.product?.id]);

  const per_item = item?.product?.price?.per_item;
  const total = item?.product?.price?.cost;
  const currency = item?.product?.price?.currency;
  return (
    <>
      <div className="col-span-2 grid grid-cols-3 gap-x-10 mt-1 relative">
        <div className="relative col-span-1 w-full flex items-center ">
          <div className="">
            <Link href={`/proizvod/${item?.product?.slug}`}>
              <Image
                src={convertHttpToHttps(item?.product?.image[0])}
                width={250}
                height={250}
                alt=""
                className="object-cover h-full w-full"
              />
            </Link>
          </div>
        </div>
        <div className="col-span-2 flex justify-evenly flex-col ">
          <Link href={`/proizvod/${item?.product?.slug}`}>
            <span className="text-base font-medium">
              {item?.product?.basic_data?.name}
            </span>
          </Link>
          <span>Šifra: {item?.product?.basic_data?.sku}</span>
          <div className="flex items-center gap-3 max-md:hidden">
            <span>Količina</span>
            <PlusMinusInputOne
              amount={productAmount}
              setCount={setProductAmount}
            />
          </div>
          <div className="flex items-center gap-3 md:hidden">
            <span>Količina:</span>
            {productAmount}
          </div>
          <span>
            Ukupan iznos: {currencyFormat(total?.with_vat, currency)} sa PDV
          </span>
        </div>
        <span
          className="absolute -top-4 right-2 cursor-pointer"
          onClick={() => removeFromCart(item?.product?.id)}
        >
          X
        </span>
      </div>
    </>
  );
};

export default CartProductItem;
