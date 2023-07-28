import { get, list } from "./api/api";
const fetchBanners = async () => {
  fetch = get;
  const banners = await fetch("/banners/index_slider", {
    cache: "no-store",
    next: { revalidate: 0 },
  }).then((response) => response?.payload);
  return banners;
};

const fetchMobileBanners = async () => {
  fetch = get;
  const banners = await fetch("/banners/index_slider_mobile", {
    cache: "no-store",
    next: { revalidate: 0 },
  }).then((response) => response?.payload);
  return banners;
};

const fetchTopSellProducts = async () => {
  fetch = list;
  const products = await fetch("/products/section/list/top_sellers", {
    cache: "no-store",
  }).then((response) => response?.payload?.items);
  return products;
};

const fetchRecommendedProducts = async () => {
  fetch = list;
  const products = await fetch("/products/section/list/recommendation", {
    cache: "no-store",
  }).then((response) => response?.payload?.items);
  return products;
};

import HomepageBanners from "@/components/HomepageBanners/HomepageBanners";
import ProductsSlider from "@/components/ProductsSlider/ProductsSlider";
import BannerSlider from "@/components/BannerSlider/BannerSlider";
const Index = async () => {
  const banners = await fetchBanners();
  const topSellers = await fetchTopSellProducts();
  const recommended = await fetchRecommendedProducts();
  const mobileBanners = await fetchMobileBanners();
  return (
    <>
      <HomepageBanners banners={banners} mobileBanners={mobileBanners} />
      <ProductsSlider products={topSellers} text="Najpopularnije" />
      <BannerSlider banners={banners} />
      <ProductsSlider products={recommended} text="Izdvajamo" />
    </>
  );
};

export default Index;

export const revalidate = 30;
