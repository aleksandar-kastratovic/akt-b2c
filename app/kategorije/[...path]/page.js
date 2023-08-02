import { get, list, post } from "@/app/api/api";
import dynamic from "next/dynamic";
import { notFound } from 'next/navigation'

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
    sort: null,
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
    title: `${process.env.COMPANY} ${category?.basic_data?.name}`,
    description: category?.basic_data?.description,
  };
}

export async function generateStaticParams() {
  const categories = await get("/categories/product/tree").then((res) => {
    return res.payload;
  });

  return categories.slice(0, 4).map((category) => ({
    path: category?.slug_path.split('/'),
  }));
}

const CategoryPage = async ({ params: { path } }) => {
  const categoryDataa = await fetchCategory(path[path?.length - 1]);
  const filters = await fetchFilters(path[path?.length - 1]);
  const newProducts = await fetchNewProducts();
  const products = await fetchProducts(path[path?.length - 1]);

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
        />
      ) : notFound()}
    </>
  );
};

export default CategoryPage;

export const dynamicParams = true;
export const revalidate = 30;
