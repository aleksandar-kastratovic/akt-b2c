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
import {ToastContainer} from "react-toastify";
const CategoriesPageDisplay = ({
  filtersMap,
  filters,
  id,
  query,
  newProducts,
  categoryDataa,
  productsDataResponse,
}) => {
  const [open, setOpen] = useState(false);
  const { push: navigate, asPath } = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const updateFilterState = (newState) => {
    setFiltersOpen(newState);
  };

  const router = useRouter();
  const [productNum, setProductNum] = useState(6);
  function handleClick() {
    setLoading(true);
    setProductNum((prevProductNum) => prevProductNum + 6);
    setLoading(false);
  }

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
  const products = productsData?.items;
  const pagination = productsData?.pagination;
  const [newProductsArray, setNewProductsArray] = useState(products);
  console.log("proizvodi", products);

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
  console.log(categoryDataa);
  return (
    <>
      <div className="w-full bg-croonus-5">
        {router?.pathname?.includes("search") ? null : (
          <div className="w-[85%] mx-auto mt-4 pb-1 pt-1 max-md:hidden">
            <div className="text-[0.875rem] max-lg:hidden font-light">
              {breadcrumbs?.length > 0 && (
                <div className="flex items-center gap-1 py-2flex-wrap">
                  <Link
                    href={`/`}
                    className="text-[#191919] text-[0.85rem] font-normal hover:text-black"
                  >
                    Početna
                  </Link>{" "}
                  <span className="text-[#191919] text-[0.85rem]">/</span>
                  {uniqueBreadcrumbs.map((slug, index) => {
                    const breadcrumb = breadcrumbs.find(
                      (bc) => bc.slug === slug
                    );
                    return (
                      <div key={index} className="flex items-center gap-1">
                        <Link
                          href={`/kategorije/${slug}`}
                          className="text-[#191919] text-[0.851rem] font-normal hover:text-black"
                        >
                          {breadcrumb?.name}
                        </Link>
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
           <h5 className="font-medium max-lg:text-center mt-3 uppercase text-[#a6a6a6]">
           {categoryDataa?.basic_data?.short_description}
           </h5>
          <p
            className="text-[1rem] max-md:text-[0.8rem] text-center max-md:mt-5 mt-[1.4rem] font-light w-[95%] lg:w-[80%] max-lg:text-left"
            dangerouslySetInnerHTML={{
              __html: categoryDataa.basic_data.description,
            }}
          ></p>
          </>
        )}
      </div>
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

      {loading ? (
        <div className="w-full flex items-center justify-center mt-10">
          <i className="fa-solid fa-spinner animate-spin text-3xl "></i>
        </div>
      ) : (
        pagination?.selected_page < pagination?.total_pages && (
          <div className="w-full flex justify-center items-center uppercase font-medium mt-10 lg:col-span-4 2xl:col-span-3 3xl:col-span-4">
            <button
              onClick={() => {
                onPageChange(pagination?.selected_page + 1);
              }}
              className="uppercase"
            >
              Prikaži još proizvoda
            </button>
          </div>
        )
      )}
      <ToastContainer />
    </>
    // <div className="py-12">
    //   <div className="relative z-10 flex flex-col items-center justify-between max-lg:gap-3 lg:flex-row">
    //     <form className="max-lg:hidden" onSubmit={handleSearch}>
    //       <input
    //         type="text"
    //         placeholder="Pretraži proizvode"
    //         className="border  border-croonus-2 bg-croonus-1 focus:border-croonus-4 focus:outline-0 focus:ring-0"
    //         value={searchTerm}
    //         onChange={({ target }) => setSearchTerm(target.value)}
    //       />
    //     </form>
    //     <div className="flex flex-row w-full items-center justify-between max-lg:gap-3 lg:w-1/2">
    //       <div className="flex flex-row items-center justify-between rounded-md border-[1px] border-croonus-1 px-2">
    //         <div className="flex items-center">
    //           <span>Prikaži:</span>
    //           <div className="flex flex-row gap-2">
    //             <select
    //               name="limit"
    //               id="limit"
    //               className="h-10 cursor-pointer border-none focus:ring-[1px] focus:ring-croonus-4"
    //               onChange={onLimitChange}
    //               value={limit}
    //             >
    //               <option value={6} key="6">
    //                 6
    //               </option>
    //               <option value={9} key="9">
    //                 9
    //               </option>
    //               <option value={12} key="12">
    //                 12
    //               </option>
    //               <option value={15} key="15">
    //                 15
    //               </option>
    //             </select>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="flex items-center">
    //         <span className="h-full">
    // <select
    //   name="sort"
    //   id="sort"
    //   className="h-full w-full cursor-pointer self-stretch rounded-md border-[1px] border-croonus-1 bg-white text-base text-croonus-3 focus:border-[1px] focus:border-croonus-4 focus:outline-none focus:ring-0 max-lg:w-full"
    //   onChange={onSortChange}
    //   value={sort ? sort.field + "_" + sort.direction : "none"}
    // >
    //   <option value="none">Sortirajte</option>
    //   {Object.entries(sortKeys).map((item) => (
    //     <option value={item[0]} key={item[0]}>
    //       {item[1].label}
    //     </option>
    //   ))}
    // </select>
    //         </span>
    //       </div>
    //     </div>
    //     <div
    //       onClick={() => setFiltersOpen(!filtersOpen)}
    //       className="w-full rounded-md border border-croonus-1 bg-croonus-3 py-1.5 text-center text-white lg:hidden"
    //     >
    //       FILTERI
    //     </div>
    //     <div
    //       className={
    //         filtersOpen
    //           ? `block w-full rounded-md bg-white lg:hidden`
    //           : `hidden lg:hidden`
    //       }
    //     >
    //       <Filters
    //         filters={availableFilters}
    //         filtersMap={filtersMap}
    //         selectedFilters={selectedFilters}
    //         setSelectedFilters={setSelectedFilters}
    //         changeFilters={changeFilters}
    //         setChangeFilters={setChangeFilters}
    //         showSearch={showSearch}
    //         setShowSearch={setShowSearch}
    //         searchProducts={searchProducts}
    //       />
    //     </div>
    //   </div>
    //   <div className="grid grid-cols-2 gap-x-4 gap-y-5 bg-white pt-12 lg:grid-cols-4 2xl:grid-cols-4 4xl:grid-cols-5 ">
    //     <div className="row-span-6 max-lg:hidden">
    //       <Filters
    //         filters={availableFilters}
    //         filtersMap={filtersMap}
    //         selectedFilters={selectedFilters}
    //         setSelectedFilters={setSelectedFilters}
    //         changeFilters={changeFilters}
    //         setChangeFilters={setChangeFilters}
    //         showSearch={showSearch}
    //         setShowSearch={setShowSearch}
    //         searchProducts={searchProducts}
    //       />
    //     </div>
    //     <Products products={products} />
    //     <div className="col-span-2 flex flex-row justify-end gap-2 2xl:col-span-4 4xl:col-span-5">
    //       {pagination?.selected_page && (
    //         <div>
    //           {Array.from(
    //             {
    //               length: Math.min(
    //                 5,
    //                 pagination?.total_pages - pagination?.selected_page + 3,
    //                 pagination?.total_pages
    //               ),
    //             },
    //             (x, i) => i + Math.max(pagination?.selected_page - 2, 1)
    //           ).map((num) => (
    //             <span
    //               key={num}
    //               className={`${
    //                 num === pagination?.selected_page
    //                   ? "cursor-pointer select-none bg-croonus-1 py-1 px-2 text-croonus-3"
    //                   : "cursor-pointer select-none py-1 px-2"
    //               }`}
    //               onClick={() => onPageChange(num)}
    //             >
    //               {num}
    //             </span>
    //           ))}
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};

export default CategoriesPageDisplay;
