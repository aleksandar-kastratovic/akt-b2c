import ProductBox from "../../components/layout/ProductBox";
import styles from "../../styles/WishListPage.module.scss";

import products from "../../data/products.json";

const WishListPage = () => {
  return (
    <div className={styles.container}>
      <h1>Lista želja</h1>
      <p>
        Ovo je neki tekst liste zelja koji predstavlja da je lista zelja
        stranica koja sadrzi listu zelja. Ovo je neki tekst liste zelja koji
        predstavlja da je lista zelja stranica koja sadrzi listu zelja.
      </p>
      <div className={styles.productsContainer + " row"}>
        {products.map((product) => {
          return (
            <div className={styles.productColumn + " col-3"} key={product.id}>
              <ProductBox
                title={product.title}
                oldPrice={product.oldPrice}
                newPrice={product.newPrice}
                img={product.image}
                id={product.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WishListPage;
