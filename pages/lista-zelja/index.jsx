import { useEffect, useState } from 'react';
import ProductBox from '../../components/layout/ProductBox';
import styles from '../../styles/WishListPage.module.scss';
import { useCartContext } from '../api/cartContext';
import { ApiHandler } from '../api/api';
import { loadMoreItems, isLoadMore } from '../../helpers/searchItems';

const WishListPage = () => {
  const [wishListData, setWishListData] = useState();
  const [, , wishlist] = useCartContext();
  const [limit, setLimit] = useState(4);
  const limitIncrement = 4;

  useEffect(() => {
    const api = ApiHandler();
    api
      .list('wishlist')
      .then((response) => {
        setWishListData(response?.payload);
        console.log(response?.payload);
      })
      .catch((error) => console.warn(error));
  }, [wishlist]);

  const wishListProducts = loadMoreItems(limit, wishListData?.items) ?? [];

  return (
    <div className={styles.container}>
      <h3>Lista želja</h3>
      <p>
        Ovo je neki tekst liste zelja koji predstavlja da je lista zelja
        stranica koja sadrzi listu zelja. Ovo je neki tekst liste zelja koji
        predstavlja da je lista zelja stranica koja sadrzi listu zelja.
      </p>
      <div className={styles.productsContainer + ' row'}>
        {wishListProducts.map((product) => {
          return (
            <div
              className={styles.productColumn + ' col-xxl-3 col-lg-4 col-sm-6'}
              key={product.product.id}
            >
              <ProductBox
                title={product.product.basic_data.name}
                oldPrice={product.product.price.price.original + " " + product.product.price.currency.toUpperCase()}
                newPrice={product.product.price.price.original + " " + product.product.price.currency.toUpperCase()}
                img={product.product.image[0]}
                id={product.wishlist.id}
                isDelete={true}
                inventory={product.product.inventory}
              />
            </div>
          );
        })}
        {wishListProducts.length === 0 && <p>Vaša lista želja je prazna!</p>}
        {isLoadMore(limit, wishListData?.items) ? (
          <button
            type="button"
            className={styles.loadMore}
            onClick={() => setLimit(limit + limitIncrement)}
          >
            Učitaj još proizvoda...
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default WishListPage;
