import Link from "next/link";
import styles from "../../styles/ProductBox.module.scss";

const ProductBox = ({ remove }) => {
  return (
    <div className={styles.container}>
      <Link href='/proizvod/id'><a className={styles.imageContainer}></a></Link>
      <span className={styles.name}>POSTELJINA OD PAMUČNOG ŠIFONA 1314</span>
      <span className={styles.oldPrice}>3.560 - 7500 RSD</span>
      <span className={styles.newPrice}>3.560 - 7500 RSD</span>
      {remove && (
        <button type="button" className={styles.closeButton}>
          <img src="/images/icons/close.png" />
        </button>
      )}
      <div className={styles.buttonsContainer}>
        <button type='button'>
            <img src={"/images/icons/favorite.png"} alt="fav-heart" />
        </button>
        <button type='button'>
            <img src={"/images/icons/shopping-bag.png"} alt="shopping-bag" />
        </button>
      </div>
    </div>
  );
};

export default ProductBox;
