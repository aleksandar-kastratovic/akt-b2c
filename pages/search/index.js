import CategoriesPageDisplay from "../../components/CategoriesPageComponents/CategoriesPageDisplay/CategoriesPageDisplay";
import { useRouter } from "next/router";
import { list, post, get } from "@/app/api/api";
import { useState, useEffect, useCallback } from "react";
import { queryKeys, sortKeys } from "../../helpers/const";
import Image from "next/image";
import Image1 from "../../assets/Icons/no-results.png";
import Link from "next/link";
const SearchPage = ({ productItems, categories, filters }) => {
  const router = useRouter();
  const { search } = router.query;
  const { asPath, query } = router;
  const [isOpen, setIsOpen] = useState(false);
  const [productsData, setProductsData] = useState(productItems);

  const getProductList = useCallback(
    (limit, sort, page, selectedFilters) => {
      if (search) {
        list(`/products/search/list`, {
          limit,
          page,
          sort,
          search,
          filters: selectedFilters,
        })
          .then((response) => setProductsData(response?.payload))
          .catch((error) => console.warn(error));
      }
    },
    [search]
  );

  const replaceQuery = (newQuery) => {
    router.replace({
      pathname: asPath.split("?")[0],
      query: { ...query, ...newQuery },
    });
  };

  const [limit, setLimit] = useState(
    query[queryKeys.limit] != null ? Number(query[queryKeys.limit]) : 24
  );

  const newSort = Object.keys(sortKeys).find(
    (key) => sortKeys[key].query === query[queryKeys.sort]
  );

  const [sort, setSort] = useState(
    newSort
      ? { field: newSort.split("_")[0], direction: newSort.split("_")[1] }
      : null
  );

  const [page, setPage] = useState(
    query[queryKeys.page] != null ? Number(query[queryKeys.page]) : 1
  );

  const newSelected = [];
  for (const item in query) {
    if (item !== "search" && !Object.values(queryKeys).includes(item))
      newSelected.push({
        column: item,
        value: { selected: query[item].split(",") },
      });
  }
  const [selectedFilters, setSelectedFilters] = useState(newSelected);
  const [availableFilters, setAvailableFilters] = useState([]);
  const [changeFilters, setChangeFilters] = useState(true);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    if (changeFilters) {
      post(`/products/search/filters/`, {
        search,
        filters: selectedFilters,
      }).then((response) => {
        if (selectedFilters.length > 0) {
          const newFilters = response.payload;
          let ret = availableFilters;
          for (const filter of newFilters) {
            if (
              selectedFilters.filter((item) => item.column === filter.key)
                .length === 0
            ) {
              ret = ret.map((item) => {
                if (item.key === filter.key) {
                  return filter;
                }
                return item;
              });
            }
          }
          setAvailableFilters(ret);
        } else {
          setAvailableFilters(response.payload);
        }
      });

      const arr = selectedFilters.reduce((obj, item) => {
        return {
          ...obj,
          [item.column]: String([item.value.selected]),
        };
      }, {});
      setPage(1);

      let newQuery = {};
      if (queryKeys.page in query) {
        newQuery[queryKeys.page] = 1;
      }

      if (queryKeys.limit in query) {
        newQuery[queryKeys.limit] = query[queryKeys.limit];
      }

      if (queryKeys.sort in query) {
        newQuery[queryKeys.sort] = query[queryKeys.sort];
      }

      newQuery = { ...newQuery, ...arr };

      replaceQuery(newQuery);
    }
  }, [selectedFilters]);

  useEffect(() => {
    setSelectedFilters([]);
    setPage(1);
  }, [search]);

  useEffect(() => {
    if (!showSearch) {
      getProductList(limit, sort, page, selectedFilters);
    }
  }, [getProductList, limit, sort, page, selectedFilters, showSearch]);

  const searchProducts = () => {
    getProductList(limit, sort, page, selectedFilters);
  };

  useEffect(() => {
    setPage(query[queryKeys.page] != null ? Number(query[queryKeys.page]) : 1);
  }, [asPath, query]);

  const onSortChange = ({ target }) => {
    if (target.value != "none") {
      const newQuery = query;
      newQuery[queryKeys.sort] = sortKeys[target.value].query;
      newQuery[queryKeys.page] = 1;
      replaceQuery(newQuery);
      const [field, direction] = target.value.split("_");
      setSort({ field, direction });
    } else {
      const newQuery = query;
      delete newQuery[queryKeys.sort];
      newQuery[queryKeys.page] = 1;
      replaceQuery(newQuery);
      setSort(null);
    }
    setPage(1);
  };

  const onLimitChange = ({ target }) => {
    const newQuery = query;
    newQuery[queryKeys.limit] = target.value;
    newQuery[queryKeys.page] = 1;
    replaceQuery(newQuery);

    setLimit(target.value);
    setPage(1);
  };

  const onPageChange = (num) => {
    const newQuery = query;
    newQuery[queryKeys.page] = num;
    replaceQuery(newQuery);

    setPage(num);
  };

  const products = productsData.items;
  const pagination = productsData.pagination;

  return (
    <div className="mx-auto 4xl:container">
      {productsData && productsData.items && productsData.items.length > 0 ? (
        <>
          <CategoriesPageDisplay
            products={products}
            pagination={pagination}
            page={page}
            filtersMap={filters}
            filters={availableFilters}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
            changeFilters={changeFilters}
            setChangeFilters={setChangeFilters}
            showSearch={showSearch}
            setShowSearch={setShowSearch}
            searchProducts={searchProducts}
            onPageChange={onPageChange}
            onLimitChange={onLimitChange}
            onSortChange={onSortChange}
            sort={sort}
            sortKeys={sortKeys}
            limit={limit}
          />
        </>
      ) : (
        <>
          <div className="flex items-center justify-center py-10 text-center">
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-croonus-5 p-6">
              <div>
                <Image src={Image1} alt="404" width={130} height={130} />
              </div>
              <div>
                <p className="text-lg font-medium">
                  Vaša pretraga nije dala nikakve rezultate.
                </p>
                <p className="text-sm">
                  Trenutno ne postoji rezultat za Vašu pretragu "{search}".
                </p>
                <p className="mt-4 text-lg font-medium">Pomoć u pretrazi:</p>
                <ul className="text-sm">
                  <li>• Proverite greške u kucanju.</li>
                  <li>• Koristite više generčkih termina za pretragu.</li>
                  <li>
                    • Proizvod ili kategorija koju tražite možda nisu još uvek
                    dostupni na našoj online prodavnici.
                  </li>
                  <li>
                    • Ukoliko Vam je potrebna pomoć, u svakom trenutku nas
                    možete kontaktirati pozivom na broj call centra{" "}
                    {process.env.TELEPHONE}
                  </li>
                </ul>
              </div>
              <div>
                <Link href="/">
                  <button className="border border-croonus-5 bg-croonus-5 px-4 py-2 text-sm text-black">
                    Idi na početnu
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchPage;

export const getServerSideProps = async (context) => {
  const { search } = context.query;

  return {
    props: {
      productItems: await list("/products/search/list", { search }).then(
        (response) => response.payload
      ),
      categories: await get("/categories/product/tree").then(
        (response) => response.payload
      ),
      filters: await post("/products/search/filters/", { search }).then(
        (response) => response.payload
      ),
    },
  };
};
