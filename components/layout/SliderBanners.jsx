import Link from "next/link";
import { useState } from "react";
import Slider from "react-slick";
import styles from "../../styles/SliderBanners.module.scss";
import ProductBox from "./ProductBox";

const SliderBanners = () => {
  const [slide, setSlide] = useState(0);

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
        <div>
          <div className={styles.productBoxContainer + " row"}>
            <div className={styles.leftSide + " col-6"}>
              <h2>Kakve su naše posteljine?</h2>
              <p>
                Širok asortiman tekstilnih materijala je ono što razlikuje naš
                brend od ostalih. Pamučni šifon, krep, saten, flanel ili samast,
                samo su neki od materijala, čija gustina tkanja zapravo
                odredjuje naš kvalitet i udobnost, po kom smo i prepoznatljivi.
              </p>
              <Link href="/">
                <a>Saznajte više</a>
              </Link>
            </div>
            <div className={styles.rightSide + " col-6"}>
              <img src={"/images/banners/bed1.jpg"} />
            </div>
          </div>
        </div>

        <div>
          <div className={styles.productBoxContainer + " row"}>
            <div className={styles.leftSide + " col-6"}>
              <h2>Kakve su naše posteljine?</h2>
              <p>
                Širok asortiman tekstilnih materijala je ono što razlikuje naš
                brend od ostalih. Pamučni šifon, krep, saten, flanel ili samast,
                samo su neki od materijala, čija gustina tkanja zapravo
                odredjuje naš kvalitet i udobnost, po kom smo i prepoznatljivi.
              </p>
              <Link href="/">
                <a>Saznajte više</a>
              </Link>
            </div>
            <div className={styles.rightSide + " col-6"}>
              <img src={"/images/banners/bed1.jpg"} />
            </div>
          </div>
        </div>
        <div>
          <div className={styles.productBoxContainer + " row"}>
            <div className={styles.leftSide + " col-6"}>
              <h2>Kakve su naše posteljine?</h2>
              <p>
                Širok asortiman tekstilnih materijala je ono što razlikuje naš
                brend od ostalih. Pamučni šifon, krep, saten, flanel ili samast,
                samo su neki od materijala, čija gustina tkanja zapravo
                odredjuje naš kvalitet i udobnost, po kom smo i prepoznatljivi.
              </p>
              <Link href="/">
                <a>Saznajte više</a>
              </Link>
            </div>
            <div className={styles.rightSide + " col-6"}>
              <img src={"/images/banners/bed1.jpg"} />
            </div>
          </div>
        </div>
        <div>
          <div className={styles.productBoxContainer + " row"}>
            <div className={styles.leftSide + " col-6"}>
              <h2>Kakve su naše posteljine?</h2>
              <p>
                Širok asortiman tekstilnih materijala je ono što razlikuje naš
                brend od ostalih. Pamučni šifon, krep, saten, flanel ili samast,
                samo su neki od materijala, čija gustina tkanja zapravo
                odredjuje naš kvalitet i udobnost, po kom smo i prepoznatljivi.
              </p>
              <Link href="/">
                <a>Saznajte više</a>
              </Link>
            </div>
            <div className={styles.rightSide + " col-6"}>
              <img src={"/images/banners/bed1.jpg"} />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderBanners;
