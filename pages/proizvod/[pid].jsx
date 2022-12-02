import ProductSlider from '../../components/layout/ProductSlider';
import ProductDetailsSlider from '../../components/layout/ProductDetailsSlider';
import ProductDetails from '../../components/layout/ProductDetails';
import PlusMinusInput from '../../components/UI/PlusMinusInput';
import CustomSelect3 from '../../components/UI/CustomSelect3';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getProductByID } from '../../data/Products/services';
import { ApiHandler } from '../api/api';
//styles
import styles from '../../styles/ProductPage.module.scss';
//data
// import products from "../../data/products.json";

const ProductPage = ({
  basic_data,
  gallery,
  specifications,
  newArrivalProducts,
}) => {
  return (
    // data !== undefined &&
    // pid !== undefined && (
    <>
      {/* <Breadcrumbs
        crumbs={generateBreadcrumbs(
          { label: 'Početna', path: '/' },
          '/kategorije',
          breadcrumbs.steps,
          { label: breadcrumbs.end.name, path: asPath }
        )}
      /> */}
      <ProductDetails
        productData={basic_data.data.item}
        gallery={gallery}
        specifications={specifications}
      />
      <ProductSlider
        title={'Možda će vas zanimati i sledeći proizvodi'}
        products={newArrivalProducts}
      />
    </>
    // )
  );
};

export default ProductPage;

export const getServerSideProps = async (context) => {
  const api = ApiHandler();
  const { pid } = context.query;
  return {
    props: {
      basic_data: await api
        .get(`product-details/basic-data/${pid}`)
        .then((response) => response?.payload),
      // breadcrumbs: await api
      //   .get(`/product-details/breadcrumbs/${pid}`)
      //   .then((response) => response?.payload),
      gallery: await api
        .get(`product-details/gallery/${pid}`)
        .then((response) => response?.payload),
      specifications: await api
        .get(`/product-details/specification/${pid}`)
        .then((response) => response?.payload),
      newArrivalProducts: await api
        .list('products/section/list/new_arrival')
        .then((response) => response?.payload?.items),
    },
  };
};
