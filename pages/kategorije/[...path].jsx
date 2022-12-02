// import Filters from '../components/Filters'
// import classes from '../../assets/css/CategoriesPage.module.scss'
// import Accordion from 'react-bootstrap/Accordion'
// import ProductBoxComplexSmall from '../components/ProductBoxComplexSmall'
import { ApiHandler } from '../api/api';
// import { generateBreadcrumbs } from '../../helpers/generateBreadCrumbs'
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import ProductBox from '../../components/layout/ProductBox';
import CustomSelect2 from '../../components/UI/CustomSelect2';
import CustomSelect from '../../components/UI/CustomSelect';
import styles from '../../styles/CategoryPage.module.scss';
// import products from '../../data/products.json';
import { convertHttpToHttps } from '../../helpers/convertHttpToHttps';
import {
  isLoadMore,
  getLimitNumberOfItems,
  loadMoreItems,
} from '../../helpers/searchItems';
import Link from 'next/link';
import { useCartContext } from '../api/cartContext';

const CategoriesPage = ({ categoryData }) => {
  const router = useRouter();
  const { asPath } = router;
  // const [productsData, setProductsData] = useState({
  //   items: [],
  //   // pagination: {},
  // });

  const isCat = router.pathname.startsWith('/kategorije');
  const [sort, setSort] = useState(null);
  const [limit, setLimit] = useState(4);
  const [items, setItems] = useState([]);
  const context = useCartContext();
  const limitIncrement = 4;

  const getProductList = useCallback(
    (sort) => {
      const api = ApiHandler();
      api
        .list(`products/category/list/${categoryData.id}`, {
          sort,
          // filters: selectedFilters,
        })
        .then((response) => setItems(response?.payload.items))
        .catch((error) => console.warn(error));
    },
    [categoryData.id]
  );

  useEffect(() => {
    getProductList(sort);
  }, [getProductList, sort]);

  useEffect(() => {
    const breadcrumbsText = categoryData.breadcrumb_text.split('>');
    let breadcrumbsTextDone = [];
    breadcrumbsText.map((text, i) =>
      i < breadcrumbsText.length - 1
        ? breadcrumbsTextDone.push(
            <>
              <li>{text}</li>
              <span>/</span>
            </>
          )
        : breadcrumbsTextDone.push(<li>{text}</li>)
    );
    console.log(breadcrumbsTextDone);

    let finish = breadcrumbsTextDone;
    context[5](finish);
  }, [categoryData.id, categoryData.breadcrumb_text, context]);

  // const products = productsData.items;

  const products = loadMoreItems(limit, items) ?? [];

  return (
    <div className={styles.container}>
      <div className={styles.bannerContainer}>
        <div className={styles.img}>
          {categoryData.images.image ? (
            <img src={convertHttpToHttps(categoryData.images.image)} />
          ) : null}
        </div>
        <h2 className={styles.subheading}>
          {categoryData.basic_data.name}{' '}
          {items.length > 0 ? <span>({items.length} proizvoda)</span> : null}
        </h2>
        <p className={styles.description}>
          {categoryData.basic_data.description}
        </p>
      </div>
      {products.length !== 0 ? (
        <>
          <div className={styles.filtersContainer + ' row'}>
            <div className={styles.filterColumns + ' col-2'}>
              <input type="checkbox" id="aaa" />
              <label htmlFor={'aaa'}>Akcijski proizvodi</label>
            </div>
            <div className={styles.filterColumns + ' col-2'}>
              <CustomSelect options={['1', '2']} def="BOJA" />
            </div>
            <div className={styles.filterColumns + ' col-2'}>
              <CustomSelect options={['1', '2']} def="VELIČINA" />
            </div>
            <div className={styles.filterColumns + ' col-2'}>
              <CustomSelect options={['1', '2']} def="KOLEKCIJA" />
            </div>
            <div className={styles.filterColumns + ' col-2'}>
              <CustomSelect options={['1', '2']} def="MATERIJAL" />
            </div>
            <div className={styles.filterColumns + ' col-2'}>
              <button type="button">Još filtera</button>
            </div>
          </div>
          <div className={styles.sortingContainer}>
            <button type="button" className="col-2">
              Poništi filtere <span>X</span>
            </button>
            <div className={styles.sortSelect}>
              <label>Sortiraj po</label>
              <CustomSelect2 def="Izaberi" options={['Rastuće', 'Opadajuće']} />
            </div>
          </div>
          <div className={styles.productsContainer + ' row'}>
            {products.map((product) => (
              <div
                className={
                  styles.productColumn + ' col-xxl-3 col-lg-4 col-sm-6'
                }
                key={product.id}
              >
                <ProductBox
                  title={product.basic_data.name}
                  oldPrice={
                    product.price.price.original +
                    ' ' +
                    product.price.currency.toUpperCase()
                  }
                  newPrice={
                    product.price.price.original +
                    ' ' +
                    product.price.currency.toUpperCase()
                  }
                  img={convertHttpToHttps(product.image[0])}
                  id={product.id}
                />
              </div>
            ))}
          </div>{' '}
        </>
      ) : (
        <p className="text-center">Trenutno nema podataka za prikaz!</p>
      )}
      {isLoadMore(limit, items) ? (
        <button
          type="button"
          className={styles.loadMore}
          onClick={() => setLimit(limit + limitIncrement)}
        >
          Učitaj još proizvoda...
        </button>
      ) : null}
    </div>
  );
};

export default CategoriesPage;

export const getServerSideProps = async (context) => {
  const { path } = context.query;
  const id = path[path.length - 1];
  const api = ApiHandler();
  return {
    props: {
      categoryData: await api
        .get(`/categories/product/single/${id}`)
        .then((response) => response.payload),
    },
  };
};
