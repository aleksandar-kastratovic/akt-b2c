import Link from "next/link";
import styles from "../../styles/ProductBox.module.scss";

const ProductBox = ({
  remove,
  title = "",
  oldPrice = "",
  newPrice = "",
  img = "",
  id = 0,
}) => {
  return (
    <div className={styles.container}>
      <Link href={`/proizvod/${id}`} scroll>
        <a className={styles.imageContainer}>
          <img src={img} />
        </a>
      </Link>
      <span className={styles.name}>{title}</span>
      <span className={styles.oldPrice}>{oldPrice}</span>
      <span className={styles.newPrice}>{newPrice}</span>
      {remove && (
        <button type="button" className={styles.closeButton}>
          <img src={img} />
        </button>
      )}
      <div className={styles.buttonsContainer}>
        <button type="button">
          <img src={"/images/icons/favorite.png"} alt="fav-heart" />
        </button>
        <button type="button">
          <img src={"/images/icons/shopping-bag.png"} alt="shopping-bag" />
        </button>
      </div>
    </div>
  );
};

export default ProductBox;
