"use client";
import { Suspense, useState } from "react";
import { CategoryData } from "@/components/CategoriesPageComponents/CategoryData/CategoryData";
import { CategoryProducts } from "@/components/CategoriesPageComponents/CategoryProducts/CategoryProducts";

const CategoryPage = ({
  params: { path },
  base_url,
  searchParams,
  category_id,
}) => {
  const { sort: sortURL, viewed, filteri } = searchParams;
  const slug_path = path[path?.length - 1];
  //vadimo sort iz URL
  const sort = (sortURL ?? "_")?.split("_");
  const sortField = sort[0];
  const sortDirection = sort[1];

  //vadimo filtere iz URL
  const selected_filters = filteri?.split("::")?.map((filter) => {
    const [column, selected] = filter?.split("=");
    const selectedValues = selected?.split("_");
    return {
      column,
      value: {
        selected:
          column === "pv-r|cena"
            ? [Number(selectedValues[0]), Number(selectedValues[1])]
            : selectedValues,
      },
    };
  });

  const [numOfProducts, setNumOfProducts] = useState();

  return (
    <>
      <Suspense
        fallback={
          <>
            <div
              className={`w-[80%] mx-auto h-[2rem] bg-slate-300 animate-pulse mt-10`}
            ></div>
            <div
              className={`w-[80%] mx-auto h-[1.3rem] mt-5 bg-slate-300 animate-pulse`}
            ></div>
            <div
              className={`w-[80%] mx-auto h-[4rem] mt-3 bg-slate-300 animate-pulse`}
            ></div>
            <div
              className={`w-[80%] mx-auto h-[2rem] mt-6 bg-slate-300 animate-pulse`}
            ></div>
          </>
        }
      >
        <CategoryData
          slug={category_id}
          num_of_products={numOfProducts}
          base_url={base_url}
          path={path}
        />
      </Suspense>

      <CategoryProducts
        category_id={category_id}
        slug={slug_path}
        handleNumOfProducts={(num) => {
          setNumOfProducts(num);
        }}
        sortField={sortField}
        sortDirection={sortDirection}
        viewed={viewed}
        allFilters={[]}
        filters={selected_filters}
        params={{ sortURL, viewed, filteri }}
      />
    </>
  );
};

export default CategoryPage;
