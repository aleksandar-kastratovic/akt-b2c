import { ApiHandler } from '../api/api';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import ProductBox from '../../components/layout/ProductBox';
import styles from '../../styles/CategoryPage.module.scss';
// import CustomSelect2 from '../../components/UI/CustomSelect2';
// import CustomSelect from '../../components/UI/CustomSelect';

import { isLoadMore, loadMoreItems } from '../../helpers/searchItems';

const SearchPage = () => {
  const router = useRouter();
  const { search } = router.query;
  const { asPath } = router;

  const [productsData, setProductsData] = useState({
    items: [],
    pagination: {},
  });

  const [limit, setLimit] = useState(4);
  const [items, setItems] = useState([]);
  const [sort, setSort] = useState(null);
  const limitIncrement = 4;

  const getProductList = useCallback(
    (sort) => {
      const api = ApiHandler();
      api
        .list(`products/search/list?search=${search}`, {
          sort,
        })
        .then((response) => {
          setItems(response?.payload.items);
        })
        .catch((error) => console.warn(error));
    },
    [search]
  );

  useEffect(() => {
    getProductList(sort);
  }, [getProductList, sort]);

  const products = loadMoreItems(limit, items) ?? [];

  return (
    <div className={styles.container}>
      <div>
        <h4>Pretraga: &quot;{search}&quot;</h4>
      </div>
      {/* {products.length > 0 ? (
        <> */}
      {/* <div className={styles.filtersContainer + ' row'}>
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
          </div> */}
      {/* <div className={styles.sortingContainer}>
            <button type="button" className="col-2">
              Poništi filtere <span>X</span>
            </button>
            <div className={styles.sortSelect}>
              <label>Sortiraj po</label>
              <CustomSelect2 def="Izaberi" options={['Rastuće', 'Opadajuće']} />
            </div>
          </div> */}
      {/* </>
       ) : null} */}

      <div className={styles.productsContainer + ' row'}>
        {products.map((product) => (
          <div
            className={'col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-6 col-12'}
            key={product.id}
          >
            <ProductBox
              id={product.id}
              img={product.image[0]}
              title={product.basic_data.name}
              oldPrice={
                product.price.price.original + ' ' + product.price.currency
              }
              newPrice={
                product.price.price.original + ' ' + product.price.currency
              }
            />
          </div>
        ))}
        {products.length === 0 && <p>Nema podataka za unesenu pretragu!</p>}
      </div>

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

export default SearchPage;
