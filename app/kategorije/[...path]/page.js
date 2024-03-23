import { Suspense } from "react";
import { get, list, post } from "@/app/api/api";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

const CategoriesPageDisplay = dynamic(
  () =>
    import(
      "@/components/CategoriesPageComponents/CategoriesPageDisplay/CategoriesPageDisplay"
    ),
  {
    ssr: true,
    loading: () => null,
    modules: [
      "@/components/CategoriesPageComponents/CategoriesPageDisplay/CategoriesPageDisplay",
    ],
  }
);

const fetchCategory = async (slug) => {
  const fetchCategory = await get(`/categories/product/single/${slug}`).then(
    (response) => response?.payload
  );
  return fetchCategory;
};

const fetchCategoryChildren = async (slug) => {
  const fetchCategoryChildren = await get(
    `/categories/product/tree/branch/parent/${slug}`
  ).then((response) => response?.payload);
  return fetchCategoryChildren;
};

const fetchFilters = async (slug) => {
  const fetchFilters = await post(`/products/category/filters/${slug}`).then(
    (response) => response?.payload
  );
  return fetchFilters;
};

const fetchProducts = async (slug) => {
  const fetcProducts = await list(`/products/category/list/${slug}`, {
    limit: 16,
    page: 1,
    sort: {
      field: "price",
      direction: "asc",
    },
    filters: [],
  }).then((response) => response?.payload);
  return fetcProducts;
};


const fetchNewProducts = async () => {
  const fetchNewProducts = await list("/products/new-in/list").then(
    (response) => response?.payload?.items
  );
  return fetchNewProducts;
};

export async function generateMetadata({ params: { path } }) {
  const category = await fetchCategory(path[path?.length - 1]);
  return {
    title: `${category?.seo?.title}` ?? "",
    description: category?.seo?.description ?? "",
    keywords: category?.seo?.keywords ?? "",
    type: category?.seo?.type ?? "",
    image: category?.seo?.image ?? "",
    openGraph: {
      title: `${category?.seo?.title}` ?? "",
      description: category?.seo?.description ?? "",
      url: category?.seo?.url ?? "",
      type: category?.seo?.type ?? "",
      images: [
        {
          url: category?.seo?.image ?? "",
          width: 800,
          height: 600,
          alt: category?.seo?.title ?? "",
          title: category?.seo?.title ?? "",
          description: category?.seo?.description ?? "",
        },
      ],
    },
  };
}

const CategoryPage = async ({ params: { path } }) => {
  const categoryDataa = await fetchCategory(path[path?.length - 1]);
  const filters = await fetchFilters(path[path?.length - 1]);
  const newProducts = await fetchNewProducts();
  const products = await fetchProducts(path[path?.length - 1]);
  const categories = await fetchCategoryChildren(path[path?.length - 1]);
  return (
    <>
      {categoryDataa ? (
        <CategoriesPageDisplay
          filtersMap={filters}
          categoryDataa={categoryDataa}
          query={path[path?.length - 1]}
          id={path[path?.length - 1]}
          newProducts={newProducts}
          productsDataResponse={products}
          categories={categories}
        />
      ) : (
        notFound()
      )}
    </>
  );
};

export default CategoryPage;

export const revalidate = 30;
