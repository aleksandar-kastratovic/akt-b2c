import styles from "../../styles/ProductBox.module.scss";

const ProductBox = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}></div>
      <span className={styles.name}>POSTELJINA OD PAMUČNOG ŠIFONA 1314</span>
      <span className={styles.oldPrice}>3.560 - 7500 RSD</span>
      <span className={styles.newPrice}>3.560 - 7500 RSD</span>
    </div>
  );
};

export default ProductBox;
