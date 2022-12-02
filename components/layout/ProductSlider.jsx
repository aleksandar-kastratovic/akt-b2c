import Slider from 'react-slick';
import { useWindowSize } from '../../helpers/functions';
import styles from '../../styles/ProductSlider.module.scss';
import ProductBox from './ProductBox';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.arrows} ${styles['arrows-next']}`}
      style={{ display: 'block' }}
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
      className={`${className} ${styles.arrows} ${styles['arrows-prev']}`}
      style={{ display: 'block' }}
      onClick={onClick}
    >
      <img src="/images/icons/prev2.png" />
    </div>
  );
}

const ProductSlider = ({ products = [], title }) => {
  const size = useWindowSize();
  console.log(products)
  return (
    <div className={styles.container}>
      <h5 className={styles.subheading}>{title || 'Lorem ipsum'}</h5>
      <Slider
        dots={false}
        infinite={true}
        speed={500}
        slidesToShow={
          size.width > 1199
            ? products.length > 4
              ? 4
              : products.length
            : size.width > 768
            ? products.length > 3
              ? 3
              : products.length
            : size.width > 576
            ? products.length > 2
              ? 2
              : products.length
            : 1
        }
        slidesToScroll={1}
        nextArrow={<SampleNextArrow />}
        prevArrow={<SamplePrevArrow />}
        className={styles.sliderContainer}
      >
        {products.map((product) => {
          return (
            <div className={styles.productBoxContainer} key={product.id}>
              <ProductBox
                title={product.basic_data.name}
                oldPrice={product.price.price.original + " " + product.price.currency.toUpperCase()}
                newPrice={product.price.price.original + " " + product.price.currency.toUpperCase()}
                img={product.image[0]}
                id={product.basic_data.id_product}
                inventory={product.inventory}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProductSlider;
