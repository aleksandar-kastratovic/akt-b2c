import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useCallback, useEffect } from 'react';
import styles from '../../styles/Header.module.scss';
import HamburgerButton from '../UI/HamburgerButton';
import HeaderInput from '../UI/HeaderInput';
import MainContainer from './MainContainer';
import { ApiHandler } from '../../pages/api/api';
import { useCartContext } from '../../pages/api/cartContext';
import { Breadcrumb } from 'react-bootstrap';
import Breadcrumbs from './Breadcrumbs';

const Header = () => {
  const [showBurgerDiv, setShowBurgerDiv] = useState(false);
  const [burgerCategory, setBurgerCategory] = useState('');
  const [categoryData, setCategoryData] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const router = useRouter();
  const [cart] = useCartContext();
  const context = useCartContext();

  const burgerDivHandler = () => {
    if (!showBurgerDiv) document.body.style.overflowY = 'hidden';
    else document.body.style.overflowY = 'auto';
    setShowBurgerDiv((prev) => !prev);
  };

  const getMenuCategories = useCallback(() => {
    const api = ApiHandler();
    api
      .get('categories/product/tree')
      .then((response) => {
        setCategoryData(response.payload);
      })

      .catch((error) => console.warn(error));
  }, []);

  const getCartCount = useCallback(() => {
    const api = ApiHandler();
    api
      .get('cart/badge-count')
      .then((response) => {
        setCartCount(response?.payload?.summary?.items_count ?? 0);
      })
      .catch((error) => console.warn(error));
  }, []);

  useEffect(() => {
    getMenuCategories();
  }, [getMenuCategories]);

  useEffect(() => {
    getCartCount();
  }, [getCartCount, cart]);

  useEffect(() => {
    if (categoryData.length > 0) {
      setSubCategories(categoryData[0].children);
    }
  }, [categoryData]);

  useEffect(() => {
    console.log(categoryData);

    setBurgerCategory(categoryData[0]?.slug);
  }, [categoryData]);

  return (
    <>
      <div
        className={`${styles.burgerDiv} ${
          showBurgerDiv ? styles.burgerDivActive : styles.burgerDivInactive
        }`}
      >
        <MainContainer>
          <div className={styles.burgerLeft}>
            <Link href="/novo">
              <a onClick={burgerDivHandler}>Novo</a>
            </Link>
            <Link href="/akcija">
              <a onClick={burgerDivHandler}>Akcija</a>
            </Link>
            <ul>
              {categoryData.length > 0
                ? categoryData.map((item) => {
                    return (
                      <li
                        key={item.id}
                        className={
                          burgerCategory === item.slug
                            ? styles.burgerCatActive
                            : ''
                        }
                        onClick={() => {
                          setBurgerCategory(item.slug);
                          setSubCategories(item.children);
                        }}
                      >
                        {item.name}
                      </li>
                    );
                  })
                : null}
            </ul>
          </div>
          <div className={styles.burgerRight + ' row'}>
            {subCategories.length > 0
              ? subCategories.map((subCategory) => {
                  return (
                    <div
                      key={subCategory.id}
                      className={styles.categoryColumn + ' col-4'}
                    >
                      <h6>{subCategory.name}</h6>
                      <ul>
                        {subCategory.children && subCategory.children.length > 0
                          ? subCategory.children.map((item) => {
                              return (
                                <li key={item.id}>
                                  <Link href={`/kategorije/${item.id}`}>
                                    <a onClick={burgerDivHandler}>
                                      {item.name}
                                    </a>
                                  </Link>
                                </li>
                              );
                            })
                          : null}
                      </ul>
                    </div>
                  );
                })
              : null}
          </div>
        </MainContainer>
      </div>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <MainContainer>
            <span>
              Call Center: <a href="tel:0313894222">031 / 3894 222</a>
            </span>
            <Link href="/login">
              <a>Moj profil</a>
            </Link>
          </MainContainer>
        </div>
        <div className={styles.headerBottom}>
          <MainContainer className={styles.headerBottomContainer}>
            <div className={styles.burgerLogoContainer}>
              <HamburgerButton
                active={showBurgerDiv}
                handleActive={burgerDivHandler}
              />
              <Link href="/">
                <a className={styles.logoContainer}>
                  <img src={'/images/logo/logo.png'} />
                </a>
              </Link>
            </div>
            <div className={styles.headerRight}>
              <HeaderInput />
              <div className={styles.headerButtonsContainer}>
                <button
                  className={styles.headerButton + ' ' + styles.mobileSearch}
                >
                  <img src={'/images/icons/search.png'} />
                </button>
                <Link href="/lista-zelja">
                  <a className={styles.headerButton}>
                    <img src={'/images/icons/favorite.png'} alt="fav-heart" />
                  </a>
                </Link>
                <Link href="/korpa">
                  <a className={styles.headerButton}>
                    <img
                      src={'/images/icons/shopping-bag.png'}
                      alt="shopping-bag"
                    />
                    <span>{cartCount}</span>
                  </a>
                </Link>
              </div>
            </div>
          </MainContainer>
        </div>
        {(router.pathname.startsWith('/kategorije') ||
          router.pathname.startsWith('/proizvod')) && (
          <div className={styles.breadcrumbs}>
            <MainContainer>
              <ul>
                <li>
                  <Link href="/">
                    <a>Početna</a>
                  </Link>
                </li>
                <span>/</span>
                {context[4].length > 0
                  ? context[4].map((link) => {
                      return (
                        <Breadcrumbs key={Math.random()}>{link}</Breadcrumbs>
                      );
                    })
                  : null}
                {/* <li>
                  <Link href="/">
                    <a>Početna</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Bademantil</a>
                  </Link>
                </li> */}
              </ul>
            </MainContainer>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;

export const getServerSideProps = async (context) => {
  const { path } = context.query;
  const id = path[path.length - 1];
  const api = ApiHandler();
  return {
    props: {
      categoryDataBreadcrumbs: await api
        .get(`/categories/product/single/${id}`)
        .then((response) => response.payload),
    },
  };
};
