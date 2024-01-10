import { get, list } from "@/app/api/api";
import ProductDetailsSlider from "@/components/ProductDetailsSlider/ProductDetailsSlider";
import GenerateBreadCrumbsServer from "@/helpers/generateBreadCrumbsServer";
import ProductInfo from "@/components/ProductPrice/ProductPrice";
import ProductsSlider from "@/components/ProductsSlider/ProductsSlider";
import MobileImageSlider from "@/components/MobileImageSlider/MobileImageSlider";
import { notFound } from "next/navigation";
import Link from "next/link";

const fetchProduct = async (id) => {
  fetch = get;
  const response = await fetch(`/product-details/basic-data/${id}`, {
    cache: "force-cache",
  }).then((response) => response?.payload);
  return response;
};
const getBadge = async (id) => {
  const getBadge = await get(`/product-details/gallery/${id}`).then(
    (response) => response?.payload?.stickers
  );
  return getBadge;
};

const fetchProductGallery = async (id) => {
  fetch = get;
  const response = await fetch(`/product-details/gallery/${id}`, {
    cache: "force-cache",
  }).then((response) => response?.payload?.gallery);
  return response;
};

const fetchRelated = async () => {
  fetch = list;
  const response = await fetch("/products/new-in/list", {
    cache: "force-cache",
  }).then((response) => response?.payload?.items);
  return response;
};

const fetchDescription = async (id) => {
  const fetchDescription = await get(`/product-details/description/${id}`).then(
    (response) => response?.payload
  );
  return fetchDescription;
};
const getProductSEO = async (id) => {
  const getProductSEO = await get(`/product-details/seo/${id}`).then(
    (response) => response?.payload
  );
  return getProductSEO;
};

const getBreadcrumbs = async (slug) => {
  return await get(`/product-details/breadcrumbs/${slug}`).then(
    (res) => res?.payload
  );
};

export async function generateMetadata({ params: { path } }) {
  const product = await fetchProduct(path[path?.length - 1]);
  const productImage = await fetchProductGallery(path[path?.length - 1]);
  const productSEO = await getProductSEO(path[path?.length - 1]);
  return {
    title: productSEO?.meta_title ?? product?.data?.item?.basic_data?.name,
    description:
      productSEO?.meta_description ??
      product?.data?.item?.basic_data?.short_description,
    keywords:
      productSEO?.meta_keywords ?? product?.data?.item?.basic_data?.name,
    openGraph: {
      title: productSEO?.meta_title ?? product?.data?.item?.basic_data?.name,
      description:
        productSEO?.meta_description ??
        product?.data?.item?.basic_data?.short_description,
      type: "website",
      images: [
        {
          url: productImage[0]?.image,
          width: 800,
          height: 600,
          alt: product?.data?.item?.basic_data?.name,
        },
      ],
    },
  };
}

const crosssellProductsList = async (id) => {
  const crosssellProducts = await list(`product-details/cross-sell/${id}`).then(
    (response) => response?.payload?.items
  );
  return crosssellProducts;
};

const ProductPage = async ({ params: { path } }) => {
  const products = await fetchProduct(path[path?.length - 1]);
  const productGallery = await fetchProductGallery(path[path?.length - 1]);
  // const relatedProducts = await fetchRelated();
  const description = await fetchDescription(path[path?.length - 1]);
  const breadcrumbs = await getBreadcrumbs(path[path?.length - 1]);
  const recommended = await crosssellProductsList(path[path?.length - 1]);
  const badge = await getBadge(path[path?.length - 1]);
  return (
    <>
      {products ? (
        <>
          <div className="bg-[#f5f5f6] mt-3.5">
            <div className="py-1 w-[95%] lg:w-[85%] mx-auto max-md:hidden">
              <div className="flex items-center gap-[0.3rem] flex-wrap">
                <Link
                  href={`/`}
                  className="text-[#191919] text-[0.85rem] font-normal hover:text-black"
                >
                  Početna
                </Link>{" "}
                <span className="text-[#191919] text-[0.85rem]">/</span>
                {breadcrumbs?.steps?.map((breadcrumb, index, arr) => {
                  return (
                    <div className="flex items-center gap-[0.1rem]">
                      <Link
                        href={
                          index === arr.length - 1
                            ? `/kategorije/${breadcrumb?.slug}`
                            : `/kategorije/${breadcrumb?.slug}`
                        }
                        className="text-[#191919] text-[0.85rem] font-normal hover:text-black"
                      >
                        {breadcrumb?.name}
                      </Link>
                      {index !== arr.length - 1 && (
                        <span className="text-[#191919] text-[0.85rem]">/</span>
                      )}
                    </div>
                  );
                })}
                <span className="text-[#191919] text-[0.85rem]">/</span>
                <h1 className="text-[0.85rem] font-normal text-black">
                  {breadcrumbs?.end?.name}
                </h1>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-10 w-[95%] lg:w-[85%] mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-10">
              <div className="col-span-2 lg:col-span-3 max-md:hidden">
                <ProductDetailsSlider
                  productGallery={productGallery}
                  description={description}
                />
              </div>
              <div className="col-span-2 md:hidden">
                <MobileImageSlider images={productGallery} />
              </div>
              <ProductInfo products={products} description={description} badge={badge}/>
              <div
                className={`flex flex-col max-md:mt-5 col-span-2 lg:col-span-6 `}
              >
                <h1 className={`font-medium text-[1.4rem`}>Opis proizvoda</h1>
                <div
                  className={`p-3 bg-croonus-2 prose !max-w-full prose:!max-w-full prose:!w-full w-full roboto nobg`}
                  dangerouslySetInnerHTML={{ __html: description?.description }}
                ></div>
              </div>
            </div>
          </div>
          {recommended?.length > 0 && (
            <div className="mt-[3rem] sm:mt-[7.688rem]">
              <ProductsSlider
                products={recommended}
                text="Možda će Vas zanimati i sledeći proizvodi"
              />
            </div>
          )}
        </>
      ) : (
        notFound()
      )}
    </>
  );
};

export default ProductPage;

export const revalidate = 30;
