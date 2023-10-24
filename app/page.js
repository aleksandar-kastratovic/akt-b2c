import { get, list } from "./api/api";
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

const fetchTopSellProducts = async () => {
  fetch = list;
  const products = await fetch("/products/section/list/top_sellers", {}).then(
    (response) => response?.payload?.items
  );
  return products;
};

const fetchRecommendedProducts = async () => {
  fetch = list;
  const products = await fetch(
    "/products/section/list/recommendation",
    {}
  ).then((response) => response?.payload?.items);
  return products;
};

const fetchBannersBanners = async () => {
  fetch = get;
  const banners = await fetch("/banners/banners", {
    next: { revalidate: 60 },
  }).then((response) => response?.payload);
  return banners;
};

const getInstagramPost = async () => {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`;
  const data = await fetch(url);
  return await data.json();
};

const Index = async () => {
  const banners = await fetchBanners();
  const topSellers = await fetchTopSellProducts();
  const recommended = await fetchRecommendedProducts();
  const mobileBanners = await fetchMobileBanners();
  const homeBanners = await fetchBannersBanners();
  // const instagramPosts = await getInstagramPost();

  return (
    <>
      <HomepageBanners banners={banners} mobileBanners={mobileBanners} />
      <ProductsSlider products={topSellers} text="Najpopularnije" />
      <BannerSlider banners={homeBanners} />
    </>
  );
};

export default Index;

export const revalidate = 30;
