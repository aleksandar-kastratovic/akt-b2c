import { get, list, post } from "@/app/api/api";
import dynamic from "next/dynamic";

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

export async function generateMetadata({ params: { slug } }) {
  const category = await fetchCategory(slug);
  return {
    title: `${process.env.COMPANY} ${category?.basic_data?.name}`,
    description: category?.basic_data?.description,
  };
}

export async function generateStaticParams() {
  const categories = await get("/categories/product/tree").then((res) => {
    return res.payload;
  });

  return categories.map((category) => ({
    slug: category?.slug,
  }));
}

export const dynamicParams = true;

const CategoryPage = async ({ params: { slug } }) => {
  const categoryDataa = await fetchCategory(slug);
  const filters = await fetchFilters(slug);
  const newProducts = await fetchNewProducts();
  const products = await fetchProducts(slug);

  return (
    <>
      {categoryDataa === undefined ? null : (
        <CategoriesPageDisplay
          filtersMap={filters}
          categoryDataa={categoryDataa}
          query={slug}
          id={slug}
          newProducts={newProducts}
          productsDataResponse={products}
        />
      )}
    </>
  );
};

export default CategoryPage;
