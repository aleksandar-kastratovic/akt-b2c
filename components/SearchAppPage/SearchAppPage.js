"use client";
import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { list } from "@/app/api/api";

import GenerateBreadCrumbsServer from "@/helpers/generateBreadCrumbsServer";
import Products from "@/components/CategoriesPageComponents/Products/Products";

const SearchAppPage = () => {
  const params = useSearchParams();
  const search = params.get("query");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async (search) => {
      return await list(`/products/search/list`, { search }).then((res) => {
        setProducts(res?.payload?.items);
      });
    };
    getProducts(search);
  }, [search]);
  console.log(products);
  return (
    <>
      <div className="w-full bg-croonus-5">
        <div className="w-[85%] mx-auto mt-4 pb-1 pt-1">
          <GenerateBreadCrumbsServer />
        </div>
      </div>
      <div className="mx-auto w-[95%] lg:w-[84%]">
        <div className="flex flex-col gap-8 py-5 font-medium  max-lg:gap-8">
          <h1 className="text-xl font-light ">
            Pretražili ste: <span className="font-medium">{search}</span>
          </h1>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-x-5 gap-y-5 md:grid-cols-2 lg:mt-12 xl:grid-cols-3 3xl:grid-cols-4">
          <Products products={products} />
        </div>
      </div>
    </>
  );
};

export default SearchAppPage;
