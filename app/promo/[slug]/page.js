import LandingPage from "@/components/PromoPage/PromoPage";

const Promo = ({ params: { slug } }) => {
  return <LandingPage slug={slug} />;
};

export default Promo;
