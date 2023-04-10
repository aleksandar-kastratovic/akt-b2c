import { get, list } from "@/app/api/api";
import ProductDetailsSlider from "@/components/ProductDetailsSlider/ProductDetailsSlider";
import GenerateBreadCrumbsServer from "@/helpers/generateBreadCrumbsServer";
import ProductInfo from "@/components/ProductPrice/ProductPrice";
import ProductsSlider from "@/components/ProductsSlider/ProductsSlider";

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

const ProductPage = async ({ params: { path } }) => {
  const products = await fetchProduct(path[path?.length - 1]);
  const productGallery = await fetchProductGallery(path[path?.length - 1]);
  const relatedProducts = await fetchRelated();
  const description = await fetchDescription(path[path?.length - 1]);
  return (
    <>
      <div className="bg-[#f5f5f6] mt-3.5">
        <div className="py-1 w-[95%] lg:w-[85%] mx-auto">
          <GenerateBreadCrumbsServer />
        </div>
      </div>
      <div className="mt-10 w-[95%] lg:w-[85%] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-10">
          <div className="col-span-2 lg:col-span-3">
            <ProductDetailsSlider gallery={productGallery} />
          </div>
          <ProductInfo products={products} description={description} />
        </div>
      </div>
      <div className="mt-[7.688rem]">
        <ProductsSlider
          products={relatedProducts}
          text="Možda će Vas zanimati i sledeći proizvodi"
        />
      </div>
    </>
  );
};

export default ProductPage;
