"use client";
import Products from "../Products/Products";
import React, { useState, useEffect, useCallback } from "react";
import Filters from "../../Filters/Filters";
import Breadcrumbs from "@/helpers/GenerateBreadCrumbs";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { convertHttpToHttps } from "@/helpers/convertHttpToHttps";
import { queryKeys, sortKeys } from "@/helpers/const";
import GenerateBreadCrumbsServer from "@/helpers/generateBreadCrumbsServer";
import { post, list, get } from "@/app/api/api";
import Link from "next/link";
import { ToastContainer } from "react-toastify";

const CategoriesPageDisplay = ({
  filtersMap,
  filters,
  id,
  query,
  newProducts,
  categoryDataa,
  productsDataResponse,
  categories,
}) => {
  const [open, setOpen] = useState(false);
  const { push: navigate, asPath } = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const updateFilterState = (newState) => {
    setFiltersOpen(newState);
  };
 
  const router = useRouter();




  const [filtersOpen, setFiltersOpen] = useState(false);
  const categoryData = { id: id };
  // const replaceQuery = useCallback(
  //   (newQuery) => {
  //     delete newQuery.path;
  //     router.replace({
  //       pathname: router.asPath.split("?")[0],
  //       query: newQuery,
  //     });
  //   },
  //   [router]
  // );
  const [loading, setLoading] = useState(false);
  const [productsData, setProductsData] = useState(productsDataResponse);

  const [limit, setLimit] = useState(16);

  const newSort = Object?.keys(sortKeys).find(
    (key) => sortKeys[key]?.query === query[queryKeys?.sort]
  );

  const [sort, setSort] = useState({
    field: "price",
    direction: "asc",
  });

  const [page, setPage] = useState(
    query[queryKeys?.page] != null ? Number(query[queryKeys?.page]) : 1
  );

  const newSelected = [];
  // for (const item in query) {
  //   if (item !== "path" && !Object?.values(queryKeys)?.includes(item))
  //     newSelected?.push({
  //       column: item,
  //       value: { selected: query[item]?.split(",") },
  //     });
  // }
  const [selectedFilters, setSelectedFilters] = useState(newSelected);
  const [availableFilters, setAvailableFilters] = useState(filters);
  const [changeFilters, setChangeFilters] = useState(true);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    if (changeFilters) {
      post(`/products/category/filters/${categoryData?.id}`, {
        filters: selectedFilters,
      }).then((response) => {
        const newFilters = response?.payload;
        if (newFilters) {
          let ret = availableFilters;
          for (const filter of newFilters) {
            if (
              selectedFilters.filter((item) => item?.column === filter?.key)
                .length === 0
            ) {
              ret = ret?.map((item) => {
                if (item?.key === filter?.key) {
                  return filter;
                }
                return item;
              });
            }
          }
          setAvailableFilters(newFilters);
          setPage(page);
        }
      });
    }

    const arr = selectedFilters?.reduce((obj, item) => {
      return {
        ...obj,
        [item?.column]: String([item?.value?.selected]),
      };
    }, {});
    setPage(1);

    let newQuery = {};

    if (query?.hasOwnProperty(queryKeys?.page) && query?.page !== undefined) {
      newQuery[queryKeys.page] = 1;
    }

    if (query?.hasOwnProperty(queryKeys?.limit) && query?.limit !== undefined) {
      newQuery[queryKeys.limit] = query[queryKeys.limit];
    }

    if (query?.hasOwnProperty(queryKeys?.sort) && query?.sort !== undefined) {
      newQuery[queryKeys?.sort] = query[queryKeys?.sort];
    }

    newQuery = { ...newQuery, ...arr };

    // replaceQuery(newQuery);
  }, [selectedFilters, categoryData.id]);
  const changeFilterOptions = (value) => {
    setChangeFilters(value);
  };

  const getProductList = useCallback(
    (limit, sort, page, selectedFilters) => {
      if (
        query?.hasOwnProperty(queryKeys?.page) ||
        query?.hasOwnProperty(queryKeys?.limit) ||
        query?.hasOwnProperty(queryKeys?.sort) ||
        selectedFilters?.length >= 0
      ) {
        setLoading(true);
        list(`products/category/list/${categoryData?.id}`, {
          limit: limit,
          page: page,
          sort: sort,
          filters: selectedFilters,
        })
          .then((response) => {
            if (page > 1) {
              setProductsData((prevData) => ({
                items:
                  prevData?.items?.length === 0
                    ? response?.payload?.items
                    : [
                        ...prevData?.items,
                        ...response?.payload?.items.filter(
                          (item) =>
                            !prevData?.items?.some((i) => i.id === item.id)
                        ),
                      ],
                pagination: response?.payload?.pagination,
              }));
            } else {
              setProductsData({
                items: response?.payload?.items,
                pagination: response?.payload?.pagination,
              });
            }
          })
          .finally(() => setLoading(false));
      }
    },
    [page, limit, sort, selectedFilters]
  );
  useEffect(() => {
    if (
      query?.hasOwnProperty(queryKeys?.page) ||
      query?.hasOwnProperty(queryKeys?.sort) ||
      query?.hasOwnProperty(queryKeys?.limit) ||
      selectedFilters?.length >= 0
    ) {
      getProductList(limit, sort, page, selectedFilters);
    }
  }, [selectedFilters, showSearch, page, limit, sort]);

  const searchProducts = () => {
    getProductList(limit, sort, page, selectedFilters);
  };

  useEffect(() => {
    setPage(
      query[queryKeys?.page] != null ? Number(query[queryKeys?.page]) : 1
    );
  }, [query]);

  const onSortChange = ({ target }) => {
    const sortValue = sortKeys[target?.value];
    if (sortValue) {
      const newQuery = {
        ...query,
        [queryKeys?.sort]: sortValue.query,
        [queryKeys?.page]: 1,
      };
      const [field, direction] = target?.value?.split("_");
      setSort({ field, direction });
    } else {
      const newQuery = { ...query };
      delete newQuery[queryKeys?.sort];
      newQuery[queryKeys?.page] = 1;
      setSort(null);
    }
    setPage(1);
  };

  const onLimitChange = ({ target }) => {
    const newQuery = query;
    newQuery[queryKeys?.limit] = target?.value;
    newQuery[queryKeys?.page] = 1;
    replaceQuery(newQuery);

    setLimit(target?.value);
    setPage(1);
  };

  const onPageChange = (num) => {
    setPage(num);
  };
  const currentSlug = categories?.slug;
  const products = productsData?.items;
  const pagination = productsData?.pagination;
  const [newProductsArray, setNewProductsArray] = useState(products);
  const [productNum, setProductNum] = useState(newProductsArray?.length);

  useEffect(() => {
    setNewProductsArray(products);
  }, [products]);
  const numPostsLoaded = Math.min(productNum, newProductsArray?.length);
  const allPostsLoaded = numPostsLoaded === newProductsArray?.length;
  useEffect(() => {
    process?.env?.GTM_ENABLED === "true" &&
      window?.dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
    window?.dataLayer.push({
      ecommerce: {
        currencyCode: "RSD",
        impressions: [
          products?.map((item) => {
            return {
              id: item?.basic_data?.id_product,
              name: item?.basic_data?.name,
              price: item?.price?.price?.original,
              list: `Kategorija ${item?.categories[0]?.name}`,
            };
          }),
        ],
      },
    });
  }, [pagination]);

  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    const generateBreadcrumbs = (categoryDataa) => {
      categoryDataa?.parents?.forEach((parent) => {
        if (
          !breadcrumbs.some((breadcrumb) => breadcrumb.name === parent?.name)
        ) {
          setBreadcrumbs((prevBreadcrumbs) => [
            ...prevBreadcrumbs,
            {
              name: parent?.name,
              slug: parent?.slug,
            },
          ]);
        }
      });
    };

    if (categoryDataa?.parents) {
      generateBreadcrumbs(categoryDataa);
    }
  }, [categoryDataa, breadcrumbs]);

  const uniqueBreadcrumbs = [
    ...new Set(breadcrumbs?.map((breadcrumb) => breadcrumb?.slug)),
  ];

  return (
    <>
      <div className="w-full bg-croonus-5">
        {router?.pathname?.includes("search") ? null : (
          <div className="w-[85%] mx-auto mt-4 pb-1 pt-1 max-md:hidden">
            <div className="text-[0.875rem] max-lg:hidden font-light">
              {breadcrumbs?.length > 0 && (
                <div className="flex items-center gap-1 py-2flex-wrap">
                  <a
                    href={`/`}
                    className="text-[#191919] text-[0.85rem] font-normal hover:text-black"
                  >
                    Početna
                  </a>{" "}
                  <span className="text-[#191919] text-[0.85rem]">/</span>
                  {uniqueBreadcrumbs.map((slug, index) => {
                    const breadcrumb = breadcrumbs.find(
                      (bc) => bc.slug === slug
                    );
                    return (
                      <div key={index} className="flex items-center gap-1">
                        <a
                          href={`/kategorije/${slug}`}
                          className="text-[#191919] text-[0.851rem] font-normal hover:text-black"
                        >
                          {breadcrumb?.name}
                        </a>
                        {index !== uniqueBreadcrumbs.length - 1 && (
                          <span className="text-[#191919] text-[0.85rem]">
                            /
                          </span>
                        )}
                      </div>
                    );
                  })}
                  <span className="text-[#191919] text-[0.85rem]">/</span>
                  <h1 className="text-[0.85rem] font-normal text-black">
                    {categoryDataa?.basic_data?.name}
                  </h1>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {router?.asPath?.includes("search") ? null : (
        <div
          className={
            categoryDataa?.seo?.image
              ? `mt-4 max-md:mt-0 w-[95%] lg:w-[80%] mx-auto h-[23.125rem] 3xl:h-[28.125rem]`
              : `mt-4 max-md:mt-0 w-[95%] lg:w-[80%] mx-auto`
          }
        >
          {" "}
          {categoryDataa?.seo?.image ? (
            <Image
              width={22200}
              height={22200}
              src={convertHttpToHttps(categoryDataa?.seo?.image)}
              className="w-full h-full object-cover"
              priority={true}
            />
          ) : null}
        </div>
      )}

      <div className="w-full flex-col flex items-center justify-center mt-10">
        <h1 className="font-medium uppercase text-2xl max-lg:text-xl max-lg:text-center">
          {router?.pathname?.includes("search") ? (
            <>Pretražili ste: {search}</>
          ) : (
            <>{categoryDataa?.basic_data?.name}</>
          )}

          <span className="text-lg lowercase max-md:text-[11px]">
            &nbsp;({pagination?.total_items} proizvoda)
          </span>
        </h1>{" "}
        {router?.asPath?.includes("search") ? null : (
          <>
            <h5 className="text-[1rem] max-md:text-[0.8rem] text-center max-md:mt-5 mt-[1rem] font-light w-[95%] lg:w-[80%] max-lg:text-left">
              {categoryDataa?.basic_data?.short_description}
            </h5>
            <p
              className="text-[1rem] max-md:text-[0.8rem] text-center max-md:mt-5 mt-1 font-light w-[95%] lg:w-[80%] max-lg:text-left"
              dangerouslySetInnerHTML={{
                __html: categoryDataa.basic_data.description,
              }}
            ></p>
          </>
        )}
        {categoryDataa?.basic_data?.name !== "Akcija" ? (
           <div className="mt-[2rem] pl-2 flex flex-wrap justify-center md:gap-y-2">
           {categories?.childrens &&
             categories.childrens.map((child) => (
               <div className="max-md:mx-[2px] mx-1 max-md:my-1" key={child?.id}>
                 <a
                   href={`/kategorije/${child?.slug_path}`}
                   key={child?.id}
                   onClick={() => setOpen(false)}
                 >
                   <div
                     className={`max-md:text-xs text-sm font-light py-2 max-md:px-2 px-4 hover:bg-croonus-1 hover:text-white whitespace-nowrap w-max border border-black ${
                       currentSlug === child?.slug
                         ? "bg-croonus-1 text-white"
                         : "bg-white text-black"
                     }`}
                   >
                     <p className="">{child?.basic_data?.name}</p>
                   </div>
                 </a>
               </div>
             ))}
         </div>
        ) : null}
       
        <div className="max-lg:w-[95%] w-[85%] mx-auto mt-10">
          <Filters
            filters={availableFilters}
            filtersMap={filtersMap}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
            changeFilters={changeFilters}
            setChangeFilters={setChangeFilters}
            showSearch={showSearch}
            setShowSearch={setShowSearch}
            searchProducts={searchProducts}
            onSortChange={onSortChange}
            sort={sort}
            sortKeys={sortKeys}
            onLimitChange={onLimitChange}
            limit={limit}
          />
        </div>
        {products?.length === 0 ? (
          <div className="my-[10rem] flex h-full text-lg font-medium items-center justify-center">
            Za ovu kategoriju trenutno nemamo proizvoda
          </div>
        ) : (
          <div className="max-lg:w-[95%] lg:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2  gap-x-10 gap-y-10 bg-white pt-12 lg:grid-cols-3 2xl:grid-cols-4 ">
            <Products products={products} />
          </div>
        )}
        
       
        <ToastContainer />
      </div>
    </>
   
  );
};

export default CategoriesPageDisplay;
