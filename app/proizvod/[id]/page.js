import { get, list } from "@/app/api/api";
import ProductDetailsSlider from "@/components/ProductDetailsSlider/ProductDetailsSlider";
import GenerateBreadCrumbsServer from "@/helpers/generateBreadCrumbsServer";
import ProductInfo from "@/components/ProductPrice/ProductPrice";
import ProductsSlider from "@/components/ProductsSlider/ProductsSlider";
import MobileImageSlider from "@/components/MobileImageSlider/MobileImageSlider";
import NotFoundd from "../not-found";

const fetchProduct = async (id) => {
  fetch = get;
  const response = await fetch(`/product-details/basic-data/${id}`, {
    cache: "force-cache",
  }).then((response) => response?.payload);
  return response;
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
export async function generateMetadata({ params: { id } }) {
  const product = await fetchProduct(id);
  return {
    title: `${process.env.COMPANY} ${product?.data?.item?.basic_data?.name}`,
    description: product?.data?.item?.basic_data?.description,
  };
}
const ProductPage = async ({ params: { id } }) => {
  const products = await fetchProduct(id);
  const productGallery = await fetchProductGallery(id);
  const relatedProducts = await fetchRelated();
  const description = await fetchDescription(id);
  return (
    <>
    {products ? 
 (     <><div className="bg-[#f5f5f6] mt-3.5">
          <div className="py-1 w-[95%] lg:w-[85%] mx-auto max-md:hidden">
            <GenerateBreadCrumbsServer />
          </div>
        </div><div className="mt-5 sm:mt-10 w-[95%] lg:w-[85%] mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-10">
              <div className="col-span-2 lg:col-span-3 max-md:hidden">
                <ProductDetailsSlider
                  productGallery={productGallery}
                  description={description} />
              </div>
              <div className="col-span-2 md:hidden">
                <MobileImageSlider images={productGallery} />
              </div>
              <ProductInfo products={products} description={description} />
            </div>
          </div><div className="mt-[3rem] sm:mt-[7.688rem]">
            <ProductsSlider
              products={relatedProducts}
              text="Možda će Vas zanimati i sledeći proizvodi" />
          </div></> ): <NotFoundd />
}
    </>
  );
};

export default ProductPage;

export async function generateStaticParams() {
  const categories = await get("/categories/product/tree").then(
    (res) => res?.payload
  );
  const products = await list(
    `/products/category/list/${categories[0]?.slug}`
  ).then((res) => res?.payload?.items);

  return products.slice(0, 2)?.map((product) => ({
    id: product?.id.toString(),
  }));
}

export const revalidate = 30;
