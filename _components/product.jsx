import {
  get,
  list
} from "@/app/api/api";
import ProductDetailsSlider from "@/components/ProductDetailsSlider/ProductDetailsSlider";
import MobileImageSlider from "@/components/MobileImageSlider/MobileImageSlider";
import { Breadcrumbs } from "@/_components/breadcrumbs";
import { Suspense } from "react";
import { Description } from "@/_components/desc";
import ProductInfo from "@/components/ProductPrice/ProductPrice";
import ProductsSlider
  from "@/components/ProductsSlider/ProductsSlider";

const getRecommendedProducts = async (slug) => {
    return await list(`/product-details/cross-sell/${slug}`,{render:false}).then(
        (response) => response?.payload
    );
}

const ProductPage = async ({ params: { path } }) => {
    const cross_sell = await getRecommendedProducts(path[path?.length - 1]);

  return (
    <>
      <Suspense>
        <Breadcrumbs
          slug={path[path?.length - 1]}
          categoryId={path[path?.length - 2]}
        />
      </Suspense>
      <div className="mt-5 sm:mt-10 w-[95%] lg:w-[85%] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-10">
          <div className="col-span-2 lg:col-span-3 max-md:hidden">
            <Suspense
              fallback={
                <div
                  className={`h-[40rem] bg-slate-300 w-full aspect-square animate-pulse`}
                />
              }
            >
              <ProductDetailsSlider slug={path[path?.length - 1]} />
            </Suspense>
          </div>
          <div className="col-span-2 md:hidden">
            <Suspense
              fallback={
                <div
                  className={`h-[20rem] bg-slate-300 w-full aspect-square animate-pulse`}
                />
              }
            >
              <MobileImageSlider slug={path[path?.length - 1]} />
            </Suspense>
          </div>
          <ProductInfo
            slug={path[path?.length - 1]}
            categoryId={path[path?.length - 2]}
          />
          <Suspense>
            <Description slug={path[path?.length - 1]} />
          </Suspense>
        </div>
      </div>
      {cross_sell?.items?.length > 0 && (
        <div className="mt-[3rem] sm:mt-[7.688rem]">
          <ProductsSlider
            data={cross_sell?.items}
            text="Možda će Vas zanimati i sledeći proizvodi"
          />
        </div>
      )}
    </>
  );
};

export default ProductPage;
