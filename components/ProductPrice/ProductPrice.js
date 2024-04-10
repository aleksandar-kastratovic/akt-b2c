"use client";
import { currencyFormat } from "@/helpers/functions";
import React, { useState, useEffect, Suspense } from "react";
import PlusMinusInputOne from "../PlusMinusInputOne";
import { useGlobalAddToCart, useGlobalAddToWishList } from "@/app/api/globals";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { useCartContext } from "@/app/api/cartContext";
import Cart from "../../assets/Icons/shopping-bag.png";
import wishlist from "@/assets/Icons/favorite.png";
import wishlistactive from "../../assets/Icons/favorite-active.png";
import Variants from "../Variants/Variants";
import { usePathname, useRouter } from "next/navigation";
import { get, deleteMethod, post } from "@/app/api/api";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { Badges } from "@/_components/badges";
import { BasicData } from "@/_components/basic-data";

const ProductInfo = ({ slug, categoryId }) => {
  return (
    <div className="col-span-2 max-md:mt-10 max-lg:mt-6 lg:col-span-3 text-croonus-1">
      <div className="flex flex-col gap-4">
        <Suspense
          fallback={<div className={`h-5 w-full bg-slate-300 animate-pulse`} />}
        >
          <Badges slug={slug} />
        </Suspense>
      </div>
      <Suspense
        fallback={
          <>
            <div className={`h-5 w-full bg-slate-300 animate-pulse`} />
            <div className={`h-5 mt-2 w-full bg-slate-300 animate-pulse`} />
            <div className={`h-5 mt-10 w-full bg-slate-300 animate-pulse`} />
            <div className={`h-5 mt-10 w-full bg-slate-300 animate-pulse`} />
            <div className={`h-5 mt-10 w-full bg-slate-300 animate-pulse`} />
            <div className={`h-5 mt-10 w-full bg-slate-300 animate-pulse`} />
            <div className={`h-5 mt-10 w-full bg-slate-300 animate-pulse`} />
          </>
        }
      >
        <BasicData slug={slug} categoryId={categoryId} />
      </Suspense>
    </div>
  );
};

export default ProductInfo;
