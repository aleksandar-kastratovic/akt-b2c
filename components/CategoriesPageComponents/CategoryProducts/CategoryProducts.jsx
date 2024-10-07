"use client";
import { useCategoryFilters, useCategoryProducts } from "@/hooks/akt.hooks";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ThumbSuspense from "@/shared/Thumb/ThumbSuspense";
import Filters from "@/components/Filters/Filters";
import { sortKeys } from "@/helpers/const";
import { currencyFormat } from "@/helpers/functions";
import { CategoryLongDescription } from "@/_components/category-long-description";
import { Pagination } from "@/_components/pagination";
import Link from "next/link";

export const CategoryProducts = ({
  slug,
  className,
  sortDirection,
  sortField,
  filters,
  strana,
  allFilters,
  category_id,
  handleNumOfProducts,
}) => {
  const router = useRouter();
  const params = useSearchParams();
  const filterKey = params?.get("filteri");
  const pageKey = Number(params?.get("strana"));
  const sortKey = params?.get("sort");

  const elementRef = useRef(null);

  const [page, setPage] = useState(pageKey ?? 1);
  const [limit, setLimit] = useState(8);
  const [sort, setSort] = useState({
    field: sortField ?? "",
    direction: sortDirection ?? "",
  });

  const [selectedFilters, setSelectedFilters] = useState(filters ?? []);

  const [availableFilters, setAvailableFilters] = useState(allFilters ?? []);
  const [changeFilters, setChangeFilters] = useState(false);
  const [lastSelectedFilterKey, setLastSelectedFilterKey] = useState("");

  //dobijamo proizvode za kategoriju sa api-ja
  const {
    data: { items: products, pagination },
    data,
    isFetched,
    isFetching,
  } = useCategoryProducts({
    slug: category_id,
    page: pageKey ?? 1,
    limit: limit,
    sort: sortKey ?? "_",
    setSelectedFilters,
    filterKey,
    setSort,
    setPage: setPage,
    render: false,
  });

  const { data: gtm_data, isLoading: isLoadingGTM } = useCategoryProducts({
    slug: category_id,
    page: pageKey ?? 1,
    limit: limit,
    sort: sortKey ?? "_",
    setSelectedFilters,
    filterKey,
    setSort,
    setPage: setPage,
    render: true,
    isGTM: true,
  });

  // azuriramo query parametre sa selektovanim sortom, stranicom i filterima
  const updateURLQuery = (sort, selectedFilters, page) => {
    let sort_tmp;
    let filters_tmp;
    let page_tmp;

    if (sort?.field !== "" && sort?.direction !== "") {
      sort_tmp = `${sort?.field}_${sort?.direction}`;
    }

    if (selectedFilters?.length > 0) {
      filters_tmp = selectedFilters
        ?.map((filter) => {
          const selectedValues = filter?.value?.selected?.join("_");
          return `${filter?.column}=${selectedValues}`;
        })
        .join("::");
    } else {
      filters_tmp = "";
    }

    if (page > 1) {
      page_tmp = page;
    } else {
      page_tmp = 1;
    }

    return { sort_tmp, filters_tmp, page_tmp };
  };

  const generateQueryString = (sort_tmp, filters_tmp, page_tmp) => {
    let queryString = `?${filters_tmp ? `filteri=${filters_tmp}` : ""}${
      filters_tmp && (sort_tmp || page_tmp) ? "&" : ""
    }${sort_tmp ? `sort=${sort_tmp}` : ""}${
      sort_tmp && page_tmp ? "&" : ""
    }${page_tmp > 1 ? `strana=${page_tmp}` : ""}`;

    router.push(queryString, { scroll: false });
    return queryString;
  };

  useEffect(() => {
    const { sort_tmp, filters_tmp, page_tmp } = updateURLQuery(
      sort,
      selectedFilters,
      page,
    );

    handleNumOfProducts(pagination?.total_items);
    generateQueryString(sort_tmp, filters_tmp, page_tmp);
  }, [sort, selectedFilters, page, pagination?.total_items]);

  const mutateFilters = useCategoryFilters({
    slug: category_id,
    page,
    limit: limit,
    sort,
    selectedFilters,
  });

  //ako je korisnik dosao na stranicu preko linka sa prisutnim filterima u URL,onda se ti filteri selektuju i okida se api da azurira dostupne filtere
  useEffect(() => {
    if (filters?.length > 0) {
      // setSelectedFilters(filters);
      mutateFilters.mutate({
        slug: category_id,
        selectedFilters,
        lastSelectedFilterKey,
        setAvailableFilters,
        availableFilters,
      });
    }
  }, []);

  //okidamo api za filtere na promenu filtera
  useEffect(() => {
    mutateFilters.mutate({
      slug: category_id,
      selectedFilters,
      lastSelectedFilterKey,
      setAvailableFilters,
      availableFilters,
    });
  }, [selectedFilters?.length]);

  //GTM
  const renderPrices = (item) => {
    switch (item?.product_type) {
      case "variant":
        switch (item?.price?.discount?.active) {
          case true:
            return item?.price?.min?.price?.original ===
              item?.price?.max?.price?.original
              ? currencyFormat(item?.price?.price?.discount)
              : `${currencyFormat(
                  item?.price?.min?.price?.discount,
                )} - ${currencyFormat(item?.price?.max?.price?.discount)}`;
          case false:
            return item?.price?.min?.price?.original ===
              item?.price?.max?.price?.original
              ? currencyFormat(item?.price?.min?.price?.original)
              : `${currencyFormat(
                  item?.price?.min?.price?.original,
                )} - ${currencyFormat(item?.price?.max?.price?.original)}`;
        }
        break;
      case "single":
        return item?.price?.discount?.active
          ? currencyFormat(item?.price?.price?.discount)
          : currencyFormat(item?.price?.price?.original);
    }
  };

  useEffect(() => {
    if (!isLoadingGTM) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        ecommerce: null,
      });
      process?.env?.GTM_ENABLED === "true" &&
        window?.dataLayer?.push({
          event: "view_item_list",
          ecommerce: {
            item_list_id: "related_products",
            item_list_name: "Related products",
            currency: "RSD",
            items: gtm_data?.items?.map((item, index) => {
              return {
                item_id: item?.basic_data?.id_product,
                item_name: item?.basic_data?.name,
                price: `${renderPrices(item)}`,
                item_category1: item?.categories?.[0]?.name ?? "",
                discount:
                  item?.price?.discount?.active &&
                  item?.price?.discount?.amount,
              };
            }),
          },
        });
    }
  }, [gtm_data?.pagination, isLoadingGTM]);

  const getPaginationArray = (selectedPage, totalPages) => {
    const start = Math.max(1, selectedPage - 2);
    const end = Math.min(totalPages, start + 4);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <>
      <div className="max-lg:w-[95%] w-[85%] mx-auto mt-10">
        <Filters
          filters={availableFilters}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          changeFilters={changeFilters}
          setPage={setPage}
          setChangeFilters={setChangeFilters}
          sort={sort}
          setSort={setSort}
          setLastSelectedFilterKey={setLastSelectedFilterKey}
          sortKeys={sortKeys}
          limit={limit}
        />
      </div>
      <div
        ref={elementRef}
        className={`max-lg:w-[95%] lg:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2  gap-x-10 gap-y-10 bg-white pt-12 lg:grid-cols-3 2xl:grid-cols-4`}
      >
        {(products ?? [])?.map(({ id }) => {
          return (
            <Suspense
              key={id}
              fallback={
                <div
                  className={`col-span-1 aspect-2/3 h-full w-full animate-pulse bg-slate-300`}
                />
              }
            >
              <ThumbSuspense
                id={id}
                refreshWishlist={() => {}}
                categoryId={slug}
              />
            </Suspense>
          );
        })}
      </div>
      <Pagination
        generateQueryString={() => {
          const { sort_tmp, filters_tmp, page_tmp } = updateURLQuery(
            sort,
            selectedFilters,
            page,
          );
          return generateQueryString(sort_tmp, filters_tmp, page_tmp);
        }}
        data={data}
        page={page}
        slug={slug}
        setPage={setPage}
        getPaginationArray={getPaginationArray}
      />
      <Suspense
        fallback={
          <div className={`mt-10 w-full h-10 bg-slate-200 animate-pulse`} />
        }
      >
        <CategoryLongDescription category_id={category_id} />
      </Suspense>
    </>
  );
};
