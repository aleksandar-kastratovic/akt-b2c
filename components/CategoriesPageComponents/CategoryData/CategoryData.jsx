"use client";

import { useCategory } from "@/hooks/akt.hooks";
import Link from "next/link";
import Image from "next/image";
import { convertHttpToHttps } from "@/helpers/convertHttpToHttps";
import React, { Suspense, useEffect, useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { get } from "@/app/api/api";
import { useSearchParams } from "next/navigation";

export const CategoryData = ({ slug }) => {
  const {
    data: {
      basic_data: { name, short_description, description },
      seo: { image },
      parents,
    },
    data,
  } = useCategory({ slug });

  const { data: categories } = useSuspenseQuery({
    queryKey: ["products", { slug }],
    queryFn: async () => {
      return await get(`/categories/product/tree/branch/parent/${slug}`).then(
        (response) => response?.payload
      );
    },
    refetchOnWindowFocus: false,
  });

  const currentSlug = categories?.slug;

  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    const generateBreadcrumbs = (data) => {
      data?.parents?.forEach((parent) => {
        if (
          !breadcrumbs.some((breadcrumb) => breadcrumb.name === parent?.name)
        ) {
          setBreadcrumbs((prevBreadcrumbs) => [
            ...prevBreadcrumbs,
            {
              name: parent?.name,
              slug: parent?.slug_path,
            },
          ]);
        }
      });
    };

    if (parents) {
      generateBreadcrumbs(data);
    }
  }, [breadcrumbs]);

  const uniqueBreadcrumbs = [
    ...new Set(breadcrumbs?.map((breadcrumb) => breadcrumb?.slug)),
  ];

  const params = useSearchParams();

  const prod_num = params?.get("prod_num") ?? "0";

  return (
    <>
      <div className="w-full bg-croonus-5">
        <div className="w-[85%] mx-auto mt-4 pb-1 pt-1 max-md:hidden">
          <div className="text-[0.875rem] max-lg:hidden font-light">
            {breadcrumbs?.length > 0 ? (
              <div className="flex items-center gap-1 flex-wrap">
                <Link
                  href={`/`}
                  className="text-[#191919] text-[0.85rem] font-normal hover:text-black"
                >
                  Početna
                </Link>{" "}
                <span className="text-[#191919] text-[0.85rem]">/</span>
                {uniqueBreadcrumbs.map((slug, index) => {
                  const breadcrumb = breadcrumbs.find((bc) => bc.slug === slug);
                  return (
                    <div key={index} className="flex items-center gap-1">
                      <Link
                        href={`/${slug}`}
                        className="text-[#191919] text-[0.851rem] font-normal hover:text-black"
                      >
                        {breadcrumb?.name}
                      </Link>
                      {index !== uniqueBreadcrumbs.length - 1 && (
                        <span className="text-[#191919] text-[0.85rem]">/</span>
                      )}
                    </div>
                  );
                })}
                <span className="text-[#191919] text-[0.85rem]">/</span>
                <h1 className="text-[0.85rem] font-normal text-black">
                  {name}
                </h1>
              </div>
            ) : (
              <div className="flex items-center gap-1">
                <Link
                  href={`/`}
                  className="text-[#191919] text-[0.85rem] font-normal hover:text-black"
                >
                  Početna
                </Link>{" "}
                <span className="text-[#191919] text-[0.85rem]">/</span>
                <h1 className="text-[0.85rem] font-normal text-black">
                  {name}
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className={
          image
            ? `mt-4 max-md:mt-0 w-[95%] lg:w-[80%] mx-auto h-[23.125rem] 3xl:h-[28.125rem]`
            : `mt-4 max-md:mt-0 w-[95%] lg:w-[80%] mx-auto`
        }
      >
        {" "}
        {image ? (
          <Image
            width={22200}
            height={22200}
            src={convertHttpToHttps(image)}
            className="w-full h-full object-cover"
            priority={true}
            alt="AKT"
          />
        ) : null}
      </div>

      <div className="w-full flex-col flex items-center justify-center mt-10">
        <h1 className="font-medium uppercase text-2xl max-lg:text-xl max-lg:text-center max-md:hidden">
          {name}
          <Suspense fallback={`loading`}>
            <span className="text-lg lowercase max-md:text-[11px]">
              &nbsp;({prod_num} proizvoda)
            </span>
          </Suspense>
        </h1>
        <h1 className="font-medium uppercase text-2xl max-lg:text-xl max-lg:text-center md:hidden">
          {name}
        </h1>
        <Suspense fallback={`loading`}>
          <span className="text-lg lowercase max-md:text-[11px] md:hidden">
            &nbsp;({prod_num} proizvoda)
          </span>
        </Suspense>

        <h5 className="text-[1rem] max-md:text-[0.8rem] text-center max-md:mt-5 mt-[1rem] font-light w-[95%] lg:w-[80%] max-lg:text-left">
          {short_description}
        </h5>
        <div
          className="text-[1rem] max-md:text-[0.8rem] text-center max-md:mt-5 mt-1 font-light w-[95%] lg:w-[80%] max-lg:text-left"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        ></div>

        {name !== "Akcija" &&
        name !== "Novo" &&
        name !== "OUTLET" &&
        name !== "Hotelski program" ? (
          <div className="mt-[2rem] pl-2 flex flex-wrap justify-center md:gap-y-2">
            {categories?.childrens &&
              (categories?.childrens ?? [])?.map((child) => (
                <div
                  className="max-md:mx-[2px] mx-1 max-md:my-1"
                  key={child?.id}
                >
                  <Link href={`/${child?.slug_path}`}>
                    <div
                      className={`max-md:text-xs text-sm font-light py-2 max-md:px-2 px-4 hover:bg-croonus-1 hover:text-white whitespace-nowrap w-max border border-black ${
                        currentSlug === child?.slug
                          ? "bg-croonus-1 text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      <p className="">{child?.basic_data?.name}</p>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        ) : null}
      </div>
    </>
  );
};
