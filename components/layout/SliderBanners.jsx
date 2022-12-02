import Link from 'next/link';
import { useState } from 'react';
import Slider from 'react-slick';
import styles from '../../styles/SliderBanners.module.scss';
import { convertHttpToHttps } from '../../helpers/convertHttpToHttps';

const SliderBanners = ({ recommendedCategories = [] }) => {
  const [slide, setSlide] = useState(0);

  console.log(recommendedCategories)

  return (
    <div className={styles.container}>
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        dotsClass={`slick-dots slick-thumb ${styles.customDots}`}
        appendDots={(dots) => {
          return (
            <div className={styles.customDots}>
              <ul> {dots} </ul>
            </div>
          );
        }}
        customPaging={(i) => {
          return (
            <div
              className={`${styles.dot} ${i == slide && styles.selectedDot}`}
            ></div>
          );
        }}
        beforeChange={(current, next) => {
          setSlide(next);
        }}
      >
        {recommendedCategories.length > 0
          ? recommendedCategories.map((item) => (
              <div key={item.id}>
                <div className={styles.productBoxContainer + ' row'}>
                  <div className={styles.leftSide + ' col-md-6'}>
                    <h2>{item.basic_data.name}</h2>
                    <p>{item.basic_data.description}</p>
                    <Link href={`kategorije/${item.id}`}>
                      <a>Saznajte više</a>
                    </Link>
                  </div>
                  <div className={styles.rightSide + ' col-md-6'}>
                    <img src={convertHttpToHttps(item.images.image)} />
                  </div>
                </div>
              </div>
            ))
          : null}
      </Slider>
    </div>
  );
};

export default SliderBanners;
