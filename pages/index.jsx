// import Head from 'next/head';
// import Image from 'next/image';
// import { useState } from 'react';
import ProductSlider from '../components/layout/ProductSlider';
import SliderBanners from '../components/layout/SliderBanners';
import HomeBanner from '../components/layout/HomeBanner/HomeBanner';
import styles from '../styles/Home.module.scss';
import { ApiHandler } from './api/api';
import { useEffect } from 'react';
// import { convertHttpToHttps } from '../helpers/convertHttpToHttps';

//data
// import products from '../data/products.json';
const Home = ({
  banners,
  mobileBanners,
  recommendedCategories,
  superActionProducts,
  newArrivalProducts,
}) => {
  return (
    <div className={styles.container}>
      <HomeBanner banners={banners} mobileBanners={mobileBanners} />
      <ProductSlider
        products={superActionProducts}
        title={'Proizvodi na super akciji'}
      />
      <SliderBanners recommendedCategories={recommendedCategories} />
      <ProductSlider
        products={newArrivalProducts}
        title={'Najnoviji proizvodi'}
      />
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const api = ApiHandler();
  
  return {
    props: {
      banners: await api
        .get('banners/index_slider')
        .then((response) => response?.payload),
      mobileBanners: await api
        .get('banners/index_slider_mobile')
        .then((response) => response?.payload),
      newArrivalProducts: await api
        .list('products/section/list/new_arrival')
        .then((response) => response?.payload?.items),
      superActionProducts: await api
        .list('products/section/list/super_action')
        .then((response) => response?.payload?.items),
      recommendedCategories: await api
        .list('categories/section/recommended')
        .then((response) => response?.payload),
      // provera baza
    },
  };
};
