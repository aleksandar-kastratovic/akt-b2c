"use client";
import { list } from "@/app/api/api";
import WishlistItems from "../WishlistItems/WishlistItems";
import { useEffect, useState, Suspense } from "react";
import { useCartContext } from "@/app/api/cartContext";
import Link from "next/link";
import Loader from "@/components/Loader";

const Wishlist = () => {
  const [wishListData, setWishListData] = useState();
  const [, , wishlist] = useCartContext();

  useEffect(() => {
    list("/wishlist")
      .then((response) => setWishListData(response?.payload))
      .catch((error) => console.warn(error));
  }, [wishlist]);

  const wishListProducts = wishListData?.items ?? [];
  return (
    <div className="mx-auto 4xl:container">
      <div className="w-[95%] lg:w-[85%] mx-auto">
      
      {wishListData && wishListData.items && wishListData.items.length > 0 ? (
        <Suspense fallback={<Loader />}>
          <div className="mt-10 grid grid-cols-2 gap-x-5 lg:grid-cols-4">
            {wishListProducts.map((item) => (
              <div key={item?.wishlist?.id}>
                <WishlistItems
                  items={item?.wishlist?.id}
                  product={item?.product}
                />
              </div>
            ))}
          </div>
          </Suspense>
        ) : (
          <div className="mt-10 flex flex-col items-center justify-center  py-5 text-center">
            <div className=" border p-10">
              <h1 className="text-lg font-medium">
                Vaša lista želja je prazna!
              </h1>{" "}
              <p>Kada dodate artikle u listu želja, oni će se pojaviti ovde.</p>
              <button className="rounded-[5rem] mt-10 bg-croonus-1 px-4 py-2 text-white hover:bg-opacity-80">
                <a href="/">Vrati se na početnu stranu.</a>
              </button>            </div>
          </div>
        )}
      
      </div>
    </div>
  );
};

export default Wishlist;
