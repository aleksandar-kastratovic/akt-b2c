import { useEffect, useRef, useState } from 'react';
import { convertHttpToHttps } from '../../../helpers/convertHttpToHttps';

import styles from './HomeBanner.module.scss';

const HomeBanner = ({ banners = [], delay = 1000, mobileBanners = [] }) => {
  const [shownBanner, setShownBanner] = useState(0);
  const [nextBanner, setNextBanner] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShownBanner(nextBanner);
      setIsChanging(false);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [nextBanner, delay]);

  const nextBannerHandler = () => {
    if (shownBanner === banners.length - 1) {
      next = 0;
    } else {
      next = shownBanner + 1;
    }
    setNextBanner(next);
    setIsChanging(true);
  };

  const prevBannerHandler = () => {
    let next;
    if (shownBanner === 0) {
      next = banners.length - 1;
    } else {
      next = shownBanner - 1;
    }
    setNextBanner(next);
    setIsChanging(true);
  };

  const bannerChangeHandler = (index) => {
    setNextBanner(index);
    setIsChanging(true);
  };



  return (
    <div className={styles.bannerContainer}>
      {/* {banners.length > 0 ? (
        <div className="desktop-hidden">
          <div className={styles.sliderContainer}>
            <div
              className={` ${
                !isChanging ? styles.bannerImgContainer : styles.hidden
              }`}
            >
              <button
                onClick={prevBannerHandler}
                className={`${styles.bannerControl} ${styles.bannerPrevButton}`}
                
              ></button>
              <img src={convertHttpToHttps('http://api.akt.croonus.com/croonus-uploads/b2c/banners/1/image-9e449eb950428c607b614c0d3b210390.jpeg')} alt="ruza"/>
              <div className={styles.imgBannerContent}>
                <span className={styles.imgBannerContentTop}>
                  {banners[shownBanner].subtitle}
                </span>
                <span className={styles.imgBannerContentMiddle}>
                  {banners[shownBanner].title}
                </span>
                <button className={styles.imgBannerContentButton}>
                  {banners[shownBanner].button}
                </button>
              </div>

              <button
                onClick={nextBannerHandler}
                className={`${styles.bannerControl} ${styles.bannerNextButton}`}
              ></button>
            </div>
            <div
              className={` ${
                isChanging ? styles.bannerImgContainerNext : styles.hidden
              }`}
            >
              <button
                onClick={prevBannerHandler}
                className={`${styles.bannerControl} ${styles.bannerPrevButton}`}
              ></button>

              <img src={convertHttpToHttps(banners[nextBanner].image)} />
              <div className={styles.imgBannerContent}>
                <span className={styles.imgBannerContentTop}>
                  {banners[nextBanner].subtitle}
                </span>
                <span className={styles.imgBannerContentMiddle}>
                  {banners[nextBanner].title}
                </span>
                <button className={styles.imgBannerContentButton}>
                  {banners[nextBanner].button}
                </button>
              </div>

              <button
                onClick={nextBannerHandler}
                className={`${styles.bannerControl} ${styles.bannerNextButton}`}
              ></button>
            </div>
          </div>
        </div>
      ) : null} */}

      {/* **** */}
      <div className="mobile-hidden">
        <div className={styles.sliderContainer}>
          <div
            className={` ${
              !isChanging ? styles.bannerImgContainer : styles.hidden
            }`}
          >
            <button
              onClick={prevBannerHandler}
              className={`${styles.bannerControl} ${styles.bannerPrevButton}`}
            ></button>

            <img src={convertHttpToHttps(banners[shownBanner].image)} />
            <div className={styles.imgBannerContent}>
              <span className={styles.imgBannerContentTop}>
                {banners[shownBanner].subtitle}
              </span>
              <span className={styles.imgBannerContentMiddle}>
                {banners[shownBanner].title}
              </span>
              <button className={styles.imgBannerContentButton}>
                {banners[shownBanner].button}
              </button>
            </div>

            <button
              onClick={nextBannerHandler}
              className={`${styles.bannerControl} ${styles.bannerNextButton}`}
            ></button>
          </div>
          <div
            className={` ${
              isChanging ? styles.bannerImgContainerNext : styles.hidden
            }`}
          >
            <button
              onClick={prevBannerHandler}
              className={`${styles.bannerControl} ${styles.bannerPrevButton}`}
            ></button>

            <img src={convertHttpToHttps(banners[nextBanner].image)} />
            <div className={styles.imgBannerContent}>
              <span className={styles.imgBannerContentTop}>
                {banners[nextBanner].subtitle}
              </span>
              <span className={styles.imgBannerContentMiddle}>
                {banners[nextBanner].title}
              </span>
              <button className={styles.imgBannerContentButton}>
                {banners[nextBanner].button}
              </button>
            </div>

            <button
              onClick={nextBannerHandler}
              className={`${styles.bannerControl} ${styles.bannerNextButton}`}
            ></button>
          </div>
        </div>
      </div>
      {/* **** */}

      <div className={styles.bannerButtons}>
        {banners.map((banner, index) => {
          return (
            <button
              type="button"
              key={index}
              onClick={() => {
                bannerChangeHandler(index);
              }}
            >
              {banner.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default HomeBanner;
