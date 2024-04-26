import { get, list } from "./api/api";
import HomepageBanners from "@/components/HomepageBanners/HomepageBanners";
import ProductsSlider from "@/components/ProductsSlider/ProductsSlider";
import BannerSlider from "@/components/BannerSlider/BannerSlider";

const fetchBanners = () => {
  return get("/banners/index_slider").then((response) => response?.payload);
};

const fetchMobileBanners = () => {
  return get("/banners/index_slider_mobile").then(
    (response) => response?.payload
  );
};

const fetchBannersBanners = () => {
  return get("/banners/banners").then((res) => res?.payload);
};

const getTopSellers = () => {
  return list("/products/section/list/top_sellers", {
    render: false,
  }).then((response) => response?.payload?.items);
};

const Index = async () => {
  const [banners, mobileBanners, homeBanners, top_sellers] = await Promise.all([
    fetchBanners(),
    fetchMobileBanners(),
    fetchBannersBanners(),
    getTopSellers(),
  ]);

  return (
    <>
      <HomepageBanners banners={banners} mobileBanners={mobileBanners} />
      <ProductsSlider text="Najpopularnije" data={top_sellers}/>
      <BannerSlider banners={homeBanners} />
      {/* <Instagram /> */}
    </>
  );
};

export default Index;

export const revalidate = 30;
