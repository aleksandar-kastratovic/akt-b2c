import { get } from "@/app/api/api";
import CategoryPage from "@/app/kategorije/[...path]/page";
import ProductPage from "@/app/proizvod/[...path]/page";
import { Suspense } from "react";
import { convertHttpToHttps } from "@/helpers/convertHttpToHttps";

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
  const str = path?.join("/");
  const data = await handleData(str);
  switch (true) {
    case data?.type === "category" && data?.status:
      const category = await fetchCategory(path[path?.length - 1]);
      const image_category =
        convertHttpToHttps(category?.seo?.image) ??
        "https://api.akt.croonus.com/croonus-uploads/config/b2c/logo-bcca26522da09b0cfc1a9bd381ec4e99.jpg";
      return {
        title: `${category?.seo?.title}` ?? "",
        description: category?.seo?.description ?? "",
        keywords: category?.seo?.keywords ?? "",
        type: category?.seo?.type ?? "",
        image: image_category ?? "",
        openGraph: {
          title: `${category?.seo?.title}` ?? "",
          description: category?.seo?.description ?? "",
          url: category?.seo?.url ?? "",
          type: category?.seo?.type ?? "",
          images: [
            {
              url: image_category ?? "",
              width: 800,
              height: 600,
              alt: category?.seo?.description ?? "",
              title: category?.seo?.title ?? "",
              description: category?.seo?.description ?? "",
            },
          ],
        },
      };

    case data?.type === "product" && data?.status:
      const productSEO = await getProductSEO(path[path?.length - 1]);
      const image =
        convertHttpToHttps(productSEO?.meta_image) ??
        "https://api.akt.croonus.com/croonus-uploads/config/b2c/logo-bcca26522da09b0cfc1a9bd381ec4e99.jpg";
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
              url: image,
              width: 800,
              height: 800,
              alt: productSEO?.meta_title ?? productSEO?.meta_description,
            },
          ],
        },
      };
  }
}

const CategoryProduct = async ({ params: { path }, params, searchParams }) => {
  const str = path?.join("/");
  const data = await handleData(str);
  switch (true) {
    case data?.type === "category" && data?.status === true:
      return <CategoryPage params={params} searchParams={searchParams} />;
    case data?.type === "product" && data?.status === true:
      return (
        <Suspense
          fallback={
            <div className="w-[85%] max-md:mt-[2rem] mt-[5rem] mx-auto grid grid-cols-2 lg:grid-cols-6 gap-x-10">
              <div className="col-span-2 lg:col-span-3 h-[40rem] bg-slate-300 animate-pulse"></div>

              <div
                className={`flex flex-col gap-5 max-md:mt-5 col-span-2 lg:col-span-3`}
              >
                <div
                  className={`w-full h-[40px] bg-slate-300 animate-pulse`}
                ></div>
                <div
                  className={`w-full h-[40px] bg-slate-300 animate-pulse`}
                ></div>
                <div
                  className={`w-full h-[40px] bg-slate-300 animate-pulse`}
                ></div>
                <div
                  className={`w-full h-[40px] bg-slate-300 animate-pulse`}
                ></div>
                <div
                  className={`w-full h-[40px] bg-slate-300 animate-pulse`}
                ></div>
                <div
                  className={`w-full h-[40px] bg-slate-300 animate-pulse`}
                ></div>
                <div
                  className={`w-full h-[40px] bg-slate-300 animate-pulse`}
                ></div>
              </div>
            </div>
          }
        >
          <ProductPage params={params} />
        </Suspense>
      );
    default:
      break;
  }
};

export default CategoryProduct;
