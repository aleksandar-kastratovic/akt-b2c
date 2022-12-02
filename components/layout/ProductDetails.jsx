import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ProductDetailsSlider from '../../components/layout/ProductDetailsSlider';
import styles from '../../styles/ProductPage.module.scss';
import { currencyFormat } from '../../helpers/functions';
import { useGlobalAddToCart } from '../../pages/api/globals';
import CustomSelect3 from '../UI/CustomSelect3';
import PlusMinusInput from '../UI/PlusMinusInput';
import { openAlertBox } from '../../helpers/tostify';
import { ApiHandler } from '../../pages/api/api';
import { useCartContext } from '../../pages/api/cartContext';
import Link from 'next/link';

const ProductDetails = ({ productData, gallery }) => {
  const router = useRouter();
  const { asPath } = router;
  const [amount, setAmount] = useState(1);
  const addToCart = useGlobalAddToCart();
  const isAvelabile = Number(productData.inventory?.amount) > 0;
  const context = useCartContext();

  const isCat = router.pathname.startsWith('/kategorije');

  // const getBreadcrumbs = useCallback(
  //   (sort) => {
  //     const api = ApiHandler();
  //     api
  //       .list(`products/category/list/${categoryData.id}`, {
  //         sort,
  //         // filters: selectedFilters,
  //       })
  //       .then((response) => setItems(response?.payload.items))
  //       .catch((error) => console.warn(error));
  //   },
  //   [categoryData.id]
  // );

  useEffect(() => {
    const api = ApiHandler();
    api
      .get(`product-details/breadcrumbs/${productData.id}`)
      .then((response) => {
        const steps = response.payload.steps;
        let breadcrumbsTextDone = [];
        steps.map((text, i) =>
          i < steps.length - 1
            ? breadcrumbsTextDone.push(
                <>
                  <li>{text.name}</li>
                  <span>/</span>
                </>
              )
            : breadcrumbsTextDone.push(
                <li>   
                    <Link href={`/kategorije/${steps[steps.length-1].id.toString()}`}>{text.name}</Link>
                </li>
              )
        );

        breadcrumbsTextDone.push(
          <>
            <span>/</span>
            <li>{response.payload.end.name}</li>
          </>
        );

        let finish = breadcrumbsTextDone;
        context[5](finish);
      })
      .catch((error) => console.warn(error));
  }, [productData.id, context]);

  return (
    <div className={styles.productTop + ' row'}>
      <div className={styles.productTopLeft + ' col-6'}>
        <ProductDetailsSlider images={gallery.gallery} />
      </div>
      <div className={styles.productTopLeft + ' col-6'}>
        <h1 className={styles.name}>{productData?.basic_data.name}</h1>
        <div className={styles.codeInfo}>
          <span>
            Šifra #: <span>{productData?.basic_data.barcode}</span>
          </span>
          <span>
            Dostupno: <span>{productData?.inventory.status}</span>
          </span>
        </div>
        <div className={styles.priceContainer}>
          <span className={styles.oldPrice}>
            {currencyFormat(
              productData?.price.price.original,
              productData?.price.currency
            )}
          </span>
          <span className={styles.newPrice}>
            {currencyFormat(
              productData?.price.price.original,
              productData?.price.currency
            )}
            {productData?.basic_data.newPrice}
          </span>
        </div>
        <p className={styles.infoPara}>
          <span>Set sadrži:</span> {productData?.basic_data.short_description}
        </p>
        <p className={styles.infoPara}>
          <span>Sirovinski sastav:</span>{' '}
          {productData?.basic_data.short_description}
        </p>
        <div className={styles.setting}>
          <span>Boja: </span>
        </div>

        <div className={styles.setting}>
          <span>Veličina: </span>
          <CustomSelect3
            options={productData?.basic_data.size}
            def={
              Array.isArray(productData?.basic_data.size)
                ? productData?.basic_data.size[0]
                : 'Izaberite'
            }
          />
        </div>
        <h2 className={styles.finalPrice}>
          {productData.price.price.original +
            ' ' +
            productData.price.currency.toUpperCase()}
        </h2>

        <div className={styles.addBasketContainer}>
          <PlusMinusInput amount={amount} setCount={setAmount} />
          {isAvelabile}
          <button
            onClick={() => {
              !isAvelabile
                ? addToCart(productData.id, amount)
                : openAlertBox(productData.inventory.status, 'error');
              setAmount(1);
            }}
            type="button"
            className={`${styles.addToBasket} ${
              !isAvelabile ? '' : styles.disabled
            }`}
          >
            <img src={'/images/icons/shopping-bag.png'}></img>
            Dodaj u korpu
          </button>
          <button type="button" className={styles.bookmark}>
            <img src={'/images/icons/bookmark.png'} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
