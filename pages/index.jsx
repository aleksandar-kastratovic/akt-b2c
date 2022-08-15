import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import ProductSlider from "../components/layout/ProductSlider";
import SliderBanners from "../components/layout/SliderBanners";
import styles from "../styles/Home.module.scss";

//data
import products from "../data/products.json";
import HomeBanner from "../components/layout/HomeBanner/HomeBanner";

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
  return (
    <div className={styles.container}>
      <HomeBanner banners={banners} />
      <ProductSlider products={products} />
      <SliderBanners />
      <ProductSlider products={products} />
    </div>
  );
}
