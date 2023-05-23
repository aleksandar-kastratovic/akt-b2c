import { get, list } from "./api/api";
const fetchBanners = async () => {
  fetch = get;
  const banners = await fetch("/banners/index_slider", {
    cache: "no-store",
    next: { revalidate: 0 },
  }).then((response) => response?.payload);
  return banners;
};

const fetchProducts = async () => {
  fetch = list;
  const products = await fetch("/products/new-in/list", {
    cache: "no-store",
  }).then((response) => response?.payload?.items);
  return products;
};

import HomepageBanners from "@/components/HomepageBanners/HomepageBanners";
import ProductsSlider from "@/components/ProductsSlider/ProductsSlider";
import BannerSlider from "@/components/BannerSlider/BannerSlider";
const Index = async () => {
  const banners = await fetchBanners();
  const products = await fetchProducts();
  return (
    <>
      <HomepageBanners banners={banners} />
      <ProductsSlider products={products} text="Najpopularnije" />
      <BannerSlider banners={banners} />
      <ProductsSlider products={products} text="Izdvajamo" />
    </>
  );
};

export default Index;

export const revalidate = 30;
