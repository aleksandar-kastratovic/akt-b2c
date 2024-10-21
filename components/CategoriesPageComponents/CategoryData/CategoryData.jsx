"use client";

import { useCategory } from "@/hooks/akt.hooks";
import Link from "next/link";
import Image from "next/image";
import { convertHttpToHttps } from "@/helpers/convertHttpToHttps";
import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CategoryChildren } from "@/_components/category-children";
import { generateBreadcrumbSchema } from "@/_functions";

export const CategoryData = ({ slug, base_url, num_of_products, path }) => {
  const {
    data: {
      basic_data: { name, short_description, description },
      images: { image },
      seo: { meta_description, meta_image },
      parents,
    },
    data,
  } = useCategory({ slug });

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
              slug: parent?.link?.link_path,
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

  const prod_num = num_of_products ?? "0";

  const breadcrumbs_schema = generateBreadcrumbSchema(
    parents,
    name,
    path,
    base_url,
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs_schema) }}
      />

      <div className="w-full bg-croonus-5">
        <div className="w-[85%] mx-auto mt-4 pb-1 pt-1 ">
          <div className="text-[0.875rem]  font-light">
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
                <p className="text-[0.85rem] font-normal text-black">{name}</p>
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
                <p className="text-[0.85rem] font-normal text-black">{name}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={`mt-4 max-md:mt-4 w-[95%] lg:w-[80%] mx-auto`}>
        {meta_image || image ? (
          <Image
            width={0}
            height={0}
            src={convertHttpToHttps(meta_image ?? image) ?? ""}
            className={`w-full !h-auto`}
            sizes={`100vw`}
            priority={true}
            alt={meta_description ?? name ?? "Stefan Tekstil"}
          />
        ) : null}
      </div>

      <div className="w-full flex-col flex items-center justify-center mt-10">
        <div className={`flex items-center gap-2 flex-wrap`}>
          <h1 className="font-medium uppercase text-2xl max-lg:text-xl max-lg:text-center">
            {name}
          </h1>

          <span className="text-lg lowercase max-md:text-[11px]">
            &nbsp;({prod_num} proizvoda)
          </span>
        </div>

        <p className="text-[1rem] prose !text-black max-w-full max-md:text-[0.8rem] text-center max-md:mt-5 mt-[1rem] font-light w-[95%] lg:w-[80%] max-lg:text-left">
          {short_description}
        </p>
        <div
          className="text-[1rem] prose max-w-full !text-black max-md:text-[0.8rem] text-center max-md:mt-5 mt-1 font-light w-[95%] lg:w-[80%] max-lg:text-left"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        ></div>
        <Suspense
          fallback={
            <div
              className={`mt-[2rem] w-full h-10 bg-slate-300 animate-pulse`}
            />
          }
        >
          <CategoryChildren slug={slug} name={name} />
        </Suspense>
      </div>
    </>
  );
};
