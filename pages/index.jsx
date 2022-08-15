import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import ProductSlider from "../components/layout/ProductSlider";
import SliderBanners from "../components/layout/SliderBanners";
import styles from "../styles/Home.module.scss";

//data
import products from "../data/products.json";
const banners = [
  {
    subtitle: "We celebrate",
    title: "New in.",
    button: "Explore more.",
    image: "/images/banners/hp-banner-1.jpg",
    subButton: "Summer '22",
  },
  {
    subtitle: "We celebrate2",
    title: "New in.2",
    button: "Explore more2",
    image: "/images/banners/hp-banner-2.jpg",
    subButton: "New collection",
  },
  {
    subtitle: "",
    title: "",
    button: "Explore more3",
    image: "/images/banners/hp-banner-3.jpg",
    subButton: "Bedding",
  },
];

export default function Home() {
  const [shownBanner, setShownBanner] = useState(0);

  const nextBanner = () => {
    setShownBanner((shownBanner) => {
      if (shownBanner === banners.length - 1) {
        return 0;
      } else {
        return shownBanner + 1;
      }
    });
  };

  const prevBanner = () => {
    setShownBanner((shownBanner) => {
      if (shownBanner === 0) {
        return banners.length - 1;
      } else {
        return shownBanner - 1;
      }
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerImgContainer}>
          <button
            onClick={prevBanner}
            className={`${styles.bannerControl} ${styles.bannerPrevButton}`}
          ></button>
          <img src={banners[shownBanner].image} />
          <div className={styles.imgBannerContent}>
            <span className={styles.imgBannerContentTop}>
              {banners[shownBanner].subtitle}
            </span>
            <span className={styles.imgBannerContentMiddle}>
              {banners[shownBanner].title}
            </span>
            <button className={styles.imgBannerContentButton}>
              {banners[shownBanner].button}
            </button>
          </div>
          <button
            onClick={nextBanner}
            className={`${styles.bannerControl} ${styles.bannerNextButton}`}
          ></button>
        </div>

        <div className={styles.bannerButtons}>
          {banners.map((banner, index) => {
            return (
              <button
                type="button"
                key={index}
                onClick={() => {
                  setShownBanner(index);
                }}
              >
                {banner.subButton}
              </button>
            );
          })}
        </div>
      </div>
      <ProductSlider products={products} />
      <SliderBanners />
      <ProductSlider products={products} />
    </div>
  );
}
