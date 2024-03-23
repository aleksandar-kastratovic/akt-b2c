import { get } from "@/app/api/api";
import CategoryPage from "@/app/kategorije/[...path]/page";
import ProductPage from "@/app/proizvod/[...path]/page";
import { notFound } from "next/navigation";

const handleData = async (slug) => {
  return await get(`/slugs/product-categories?slug=${slug}`).then(
    (res) => res?.payload
  );
};

const fetchCategory = async (slug) => {
  return await get(`/categories/product/single/${slug}`).then(
    (response) => response?.payload
  );
};

const getProductSEO = async (id) => {
  return await get(`/product-details/seo/${id}`).then(
    (response) => response?.payload
  );
};

export async function generateMetadata({ params: { path } }) {
  const data = await handleData(path[path?.length - 1]);
  switch (true) {
    case data?.type === "category" && data?.status:
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

    case data?.type === "product" && data?.status:
      const productSEO = await getProductSEO(path[path?.length - 1]);
      return {
        title: productSEO?.meta_title ?? "",
        description: productSEO?.meta_description ?? "",
        keywords: productSEO?.meta_keywords ?? "",
        openGraph: {
          title: productSEO?.meta_title ?? "",
          description: productSEO?.meta_description ?? "",
          type: "website",
          images: [
            {
              url: productSEO?.meta_image,
              width: 800,
              height: 600,
              alt: productSEO?.meta_title ?? productSEO?.meta_description,
            },
          ],
        },
      };
    default:
      break;
  }
}

const CategoryProduct = async ({ params: { path }, params }) => {
  const data = await handleData(path[path?.length - 1]);
  switch (true) {
    case data?.type === "category" && data?.status === true:
      return <CategoryPage params={params} />;
    case data?.type === "product" && data?.status === true:
      return <ProductPage params={params} />;
    default:
      notFound();
  }
};

export default CategoryProduct;
