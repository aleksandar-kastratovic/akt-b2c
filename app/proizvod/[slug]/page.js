import { get, list } from "@/app/api/api";
import ProductDetailsSlider from "@/components/ProductDetailsSlider/ProductDetailsSlider";
import GenerateBreadCrumbsServer from "@/helpers/generateBreadCrumbsServer";
import ProductInfo from "@/components/ProductPrice/ProductPrice";
import ProductsSlider from "@/components/ProductsSlider/ProductsSlider";
import MobileImageSlider from "@/components/MobileImageSlider/MobileImageSlider";

export async function generateStaticParams() {
  const categories = await get("/categories/product/tree").then(
    (res) => res?.payload
  );
  const products = await list(
    `/products/category/list/${categories[0]?.slug}`
  ).then((res) => res?.payload?.items);
  const trimmedProducts = products;

  return trimmedProducts?.map((product) => ({
    slug: product?.slug,
  }));
}

export const revalidate = 30;

const fetchProduct = async (slug) => {
  fetch = get;
  const response = await fetch(`/product-details/basic-data/${slug}`, {
    cache: "force-cache",
  }).then((response) => response?.payload);
  return response;
};

const fetchProductGallery = async (slug) => {
  fetch = get;
  const response = await fetch(`/product-details/gallery/${slug}`, {
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

const fetchDescription = async (slug) => {
  const fetchDescription = await get(`/product-details/description/${slug}`).then(
    (response) => response?.payload
  );
  return fetchDescription;
};
export async function generateMetadata({ params: { slug } }) {
  const product = await fetchProduct(slug);
  return {
    title: `${process.env.COMPANY} ${product?.data?.item?.basic_data?.name}`,
    description: product?.data?.item?.basic_data?.description,
  };
}
const ProductPage = async ({ params: { slug } }) => {
  const products = await fetchProduct(slug);

  const productGallery = await fetchProductGallery(slug);
  const relatedProducts = await fetchRelated();
  const description = await fetchDescription(slug);
  return (
    <>
      <div className="bg-[#f5f5f6] mt-3.5">
        <div className="py-1 w-[95%] lg:w-[85%] mx-auto max-md:hidden">
          <GenerateBreadCrumbsServer />
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
          <ProductInfo products={products} description={description} />
        </div>
      </div>
      {description?.description && (
        <div className="w-[95%] lg:w-[85%] mx-auto mt-10 ">
          <h1 className="text-[1.1rem] font-bold max-lg:text-left">
            Opis proizvoda
          </h1>
          <p
            className="text-[.8rem] mt-3 font-normal roboto bg-[#fbfbfb] px-[24px] py-3"
            dangerouslySetInnerHTML={{ __html: description?.description }}
          ></p>
        </div>
      )}

      <div className="mt-[3rem] sm:mt-[7.688rem]">
        <ProductsSlider
          products={relatedProducts}
          text="Možda će Vas zanimati i sledeći proizvodi"
        />
      </div>
    </>
  );
};

export default ProductPage;
