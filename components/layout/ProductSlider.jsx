import Slider from "react-slick";
import styles from "../../styles/ProductSlider.module.scss";
import ProductBox from "./ProductBox";
const ProductSlider = ({ title = "", products = [] }) => {
  return (
    <div className={styles.container}>
      <h5 className={styles.subheading}>{title || "Lorem ipsum"}</h5>
      <Slider
        dots={false}
        arrows={true}
        infinite={true}
        speed={500}
        slidesToShow={4}
        slidesToScroll={1}
      >
        {products.map((product) => {
          return (
            <div className={styles.productBoxContainer} key={product.id}>
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
      </Slider>
    </div>
  );
};

export default ProductSlider;
