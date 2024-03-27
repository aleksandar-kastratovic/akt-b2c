"use client";
import { useCategoryFilters, useCategoryProducts } from "@/hooks/akt.hooks";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ThumbSuspense from "@/shared/Thumb/ThumbSuspense";
import Filters from "@/components/Filters/Filters";
import { sortKeys } from "@/helpers/const";
import { currencyFormat } from "@/helpers/functions";

export const CategoryProducts = ({
  slug,
  className,
  sortDirection,
  sortField,
  filters,
  strana,
  allFilters,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const filterKey = params?.get("filteri");
  const pageKey = Number(params?.get("strana"));
  const sortKey = params?.get("sort");

  const elementRef = useRef(null);

  const [page, setPage] = useState(strana ?? 1);
  const [limit, setLimit] = useState(
    Number(params?.get("viewed")) > 10 ? Number(params?.get("viewed")) : 10
  );
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
    slug,
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
    slug,
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
    let viewed_tmp;
    let prod_num_tmp;
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

    if (pagination?.total_items - pagination?.items_per_page < 10) {
      viewed_tmp = pagination?.total_items;
    } else {
      viewed_tmp = page === 1 ? limit : limit + 10;
    }

    prod_num_tmp = pagination?.total_items > 0 ? pagination?.total_items : "";

    return { sort_tmp, filters_tmp, viewed_tmp, prod_num_tmp };
  };

  useEffect(() => {
    const { sort_tmp, filters_tmp, viewed_tmp, prod_num_tmp } = updateURLQuery(
      sort,
      selectedFilters,
      page
    );

    let queryString = "";

    const generateQueryString = (
      sort_tmp,
      filters_tmp,
      viewed_tmp,
      prod_num_tmp
    ) => {
      let queryString = `?${filters_tmp ? `filteri=${filters_tmp}` : ""}${
        filters_tmp && (sort_tmp || viewed_tmp) ? "&" : ""
      }${sort_tmp ? `sort=${sort_tmp}` : ""}${
        sort_tmp && viewed_tmp ? "&" : ""
      }${viewed_tmp ? `viewed=${viewed_tmp}` : ""}${
        viewed_tmp && prod_num_tmp ? "&" : ""
      }${prod_num_tmp ? `prod_num=${prod_num_tmp}` : ""}`;

      router.push(queryString, { scroll: false });
    };

    generateQueryString(sort_tmp, filters_tmp, viewed_tmp, prod_num_tmp);
  }, [sort, selectedFilters, limit, pagination?.total_items]);

  const mutateFilters = useCategoryFilters({
    slug,
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
        slug,
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
      slug,
      selectedFilters,
      lastSelectedFilterKey,
      setAvailableFilters,
      availableFilters,
    });
  }, [selectedFilters?.length]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage =
        (window.scrollY + window.innerHeight) /
        document.documentElement.scrollHeight;

      if (scrollPercentage >= 0.8) {
        const { items_per_page, total_items } = pagination;
        if (items_per_page < total_items) {
          setLimit(limit + 10);
        }
      }
    };

    // const observer = new IntersectionObserver(onIntersection);
    //
    // if (observer && elementRef.current) {
    //   observer.observe(elementRef.current);
    // }

    window.addEventListener("scroll", handleScroll);

    return () => {
      // if (observer) {
      //   observer.disconnect();
      // }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [data]);

  //pamtimo scroll position u session storage, da mozemo da se vratimo na isto mesto
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const pos = window.scrollY;
      setScrollPosition(pos);
      sessionStorage.setItem("scrollPosition", pos.toString());
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const storedScrollPosition =
      parseInt(sessionStorage.getItem("scrollPosition")) || 0;
    setScrollPosition(storedScrollPosition);
    if (isFetched && limit > 10) {
      const timeout = setTimeout(() => {
        window.scrollTo(0, storedScrollPosition);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [isFetched]);

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
                  item?.price?.min?.price?.discount
                )} - ${currencyFormat(item?.price?.max?.price?.discount)}`;
          case false:
            return item?.price?.min?.price?.original ===
              item?.price?.max?.price?.original
              ? currencyFormat(item?.price?.min?.price?.original)
              : `${currencyFormat(
                  item?.price?.min?.price?.original
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
      process?.env?.GTM_ENABLED === "true" &&
        window?.dataLayer?.push({
          event: "view_item_list",
          ecommerce: {
            currencyCode: "RSD",
            impressions: [
              gtm_data?.items?.map((item, index) => {
                return {
                  id: item?.basic_data?.id_product,
                  name: item?.basic_data?.name,
                  price: `${renderPrices(item)}`,
                  list: `Kategorija ${item?.categories?.[0]?.name ?? ""}`,
                  discount:
                    item?.price?.discount?.active &&
                    item?.price?.discount?.amount,
                };
              }),
            ],
          },
        });
    }
  }, [gtm_data?.pagination, isLoadingGTM]);

  return (
    <>
      <div className="max-lg:w-[95%] w-[85%] mx-auto mt-10">
        <Filters
          filters={availableFilters}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          changeFilters={changeFilters}
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
        {products?.map(({ id }) => {
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
    </>
  );
};
