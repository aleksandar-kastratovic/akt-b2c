import Slider from "react-slick";
import styles from "../../styles/ProductSlider.module.scss";
import ProductBox from "./ProductBox";

const ProductSlider = () => {
  return (
    <div className={styles.container}>
      <h5 className={styles.subheading}>Lorem ipsum</h5>
      <Slider
        dots={false}
        arrows={true}
        infinite={true}
        speed={500}
        slidesToShow={4}
        slidesToScroll={1}
      >
         <div className={styles.productBoxContainer}>
            <ProductBox/>
         </div>
         <div className={styles.productBoxContainer}>
            <ProductBox/>
         </div>
         <div className={styles.productBoxContainer}>
            <ProductBox/>
         </div>
         <div className={styles.productBoxContainer}>
            <ProductBox/>
         </div>
         <div className={styles.productBoxContainer}>
            <ProductBox/>
         </div>
         <div className={styles.productBoxContainer}>
            <ProductBox/>
         </div>
         <div className={styles.productBoxContainer}>
            <ProductBox/>
         </div>
      </Slider>
    </div>
  );
};

export default ProductSlider;
