import { get } from "@/app/api/api";
import CategoryPage from "@/app/kategorije/[...path]/page";
import ProductPage from "@/app/proizvod/[...path]/page";

const handleData = async (slug) => {
  return await get(`/slugs/product-categories?slug=${slug}`).then(
    (res) => res?.payload
  );
};

const CategoryProduct = async ({ params: { path }, params }) => {
  const data = await handleData(path[path?.length - 1]);
  switch (data?.type) {
    case "category":
      return <CategoryPage params={params} />;
    case "product":
      return <ProductPage params={params} />;
  }
};

export default CategoryProduct;
