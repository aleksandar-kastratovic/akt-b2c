import {get, list} from "./api/api";
import HomepageBanners from "@/components/HomepageBanners/HomepageBanners";
import ProductsSlider from "@/components/ProductsSlider/ProductsSlider";
import BannerSlider from "@/components/BannerSlider/BannerSlider";

const fetchBanners = async () => {
  fetch = get;
  const banners = await fetch("/banners/index_slider", {
    next: { revalidate: 60 },
  }).then((response) => response?.payload);
  return banners;
};

const fetchMobileBanners = async () => {
  fetch = get;
  const banners = await fetch("/banners/index_slider_mobile", {
    next: { revalidate: 60 },
  }).then((response) => response?.payload);
  return banners;
};

const fetchBannersBanners = async () => {
  fetch = get;
  const banners = await fetch("/banners/banners", {
    next: { revalidate: 60 },
  }).then((response) => response?.payload);
  return banners;
};

const Index = async () => {
  const banners = await fetchBanners();

  const mobileBanners = await fetchMobileBanners();
  const homeBanners = await fetchBannersBanners();
  return (
    <>
      <HomepageBanners banners={banners} mobileBanners={mobileBanners} />

      <ProductsSlider text="Najpopularnije" />

      <BannerSlider banners={homeBanners} />
      {/* <Instagram /> */}
    </>
  );
};

export default Index;

export const revalidate = 30;
