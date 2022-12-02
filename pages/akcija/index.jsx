import ProductBox from '../../components/layout/ProductBox';
import { useEffect, useState } from 'react';
import styles from '../../styles/WishListPage.module.scss';
import { ApiHandler } from '../api/api';
import { isLoadMore, loadMoreItems } from '../../helpers/searchItems';

function ActionProducts({ actionProducts }) {
  const [limit, setLimit] = useState(4);
  const [items, setItems] = useState([]);
  // const [sort, setSort] = useState(null);
  const limitIncrement = 4;

  return (
    <div className={styles.container}>
      <h1>Proizvodi na akciji</h1>
      {/* <p>
      Ovo je neki tekst liste zelja koji predstavlja da je lista zelja
      stranica koja sadrzi listu zelja. Ovo je neki tekst liste zelja koji
      predstavlja da je lista zelja stranica koja sadrzi listu zelja.
    </p> */}
      <div className={styles.productsContainer + ' row'}>
        {actionProducts.map((product) => {
          return (
            <div
              className={styles.productColumn + ' col-xxl-3 col-lg-4 col-sm-6'}
              key={product.id}
            >
              <ProductBox
                title={product.basic_data.name}
                oldPrice={product.price.price.original}
                newPrice={product.price.price.original}
                img={product.image[0]}
                id={product.id}
                // isDelete={true}
                inventory={product.inventory}
              />
            </div>
          );
        })}
        {actionProducts.length === 0 && (
          <p>Trenutno ne postoje proizvodi na akciji!</p>
        )}
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
}

export default ActionProducts;

export const getServerSideProps = async () => {
  const api = ApiHandler();
  return {
    props: {
      actionProducts: await api
        .list('products/section/list/action')
        .then((response) => response?.payload?.items),
    },
  };
};
