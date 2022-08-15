import Slider from "react-slick";
import styles from "../../styles/ProductSlider.module.scss";
import ProductBox from "./ProductBox";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.arrows} ${styles["arrows-next"]}`}
      style={{ display: "block" }}
      onClick={onClick}
    >
      <img src="/images/icons/next2.png" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.arrows} ${styles["arrows-prev"]}`}
      style={{ display: "block" }}
      onClick={onClick}
    >
      <img src="/images/icons/prev2.png" />
    </div>
  );
}

const ProductSlider = ({ title = "", products = [] }) => {
  return (
    <div className={styles.container}>
      <h5 className={styles.subheading}>{title || "Lorem ipsum"}</h5>
      <Slider
        dots={false}
        arrows
        infinite={true}
        speed={500}
        slidesToShow={4}
        slidesToScroll={1}
        nextArrow={<SampleNextArrow />}
        prevArrow={<SamplePrevArrow />}
        className={styles.sliderContainer}
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
