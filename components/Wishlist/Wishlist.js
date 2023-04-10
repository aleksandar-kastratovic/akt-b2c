"use client";
import { list } from "@/app/api/api";
import WishlistItems from "../WishlistItems/WishlistItems";
import { useEffect, useState } from "react";
import { useCartContext } from "@/app/api/cartContext";

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
        {wishListProducts.length > 0 ? (
          <div className="mt-10 grid grid-cols-2 gap-x-5 lg:grid-cols-5">
            {wishListProducts.map((item) => (
              <div key={item?.wishlist?.id}>
                <WishlistItems
                  items={item?.wishlist?.id}
                  product={item?.product}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-10 flex flex-col items-center justify-center  py-5 text-center">
            <div className="rounded-lg border p-10">
              <h1 className="text-lg font-medium">
                Vaša lista želja je prazna!
              </h1>{" "}
              <p>Kada dodate artikle u listu želja, oni će se pojaviti ovde.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
