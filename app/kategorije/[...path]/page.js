import { get, list, post } from "@/app/api/api";
import dynamic from "next/dynamic";

const CategoriesPageDisplay = dynamic(
  () =>
    import(
      "@/components/CategoriesPageComponents/CategoriesPageDisplay/CategoriesPageDisplay"
    ),
  {
    ssr: false,
    loading: () => null,
    modules: [
      "@/components/CategoriesPageComponents/CategoriesPageDisplay/CategoriesPageDisplay",
    ],
  }
);

const fetchProducts = async (id) => {
  const fetchProducts = await get(`/categories/product/single/${id}`).then(
    (response) => response?.payload
  );
  return fetchProducts;
};

const fetchFilters = async (id) => {
  const fetchFilters = await post(`/products/category/filters/${id}`).then(
    (response) => response?.payload
  );
  return fetchFilters;
};

const fetchNewProducts = async () => {
  const fetchNewProducts = await list("/products/new-in/list").then(
    (response) => response?.payload?.items
  );
  return fetchNewProducts;
};

const CategoryPage = async ({ params: { path } }) => {
  const products = await fetchProducts(path[path.length - 1]);
  const filters = await fetchFilters(path[path.length - 1]);
  const newProducts = await fetchNewProducts();
  return (
    <>
      {products === undefined ? null : (
        <CategoriesPageDisplay
          filtersMap={filters}
          categoryDataa={products}
          query={path[path.length - 1]}
          id={path[path.length - 1]}
          newProducts={newProducts}
        />
      )}
    </>
  );
};

export default CategoryPage;
