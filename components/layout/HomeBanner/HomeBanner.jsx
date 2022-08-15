import { useState } from "react";

import styles from "./HomeBanner.module.scss";

const HomeBanner = ({ banners = [] }) => {
  const [shownBanner, setShownBanner] = useState(0);

  const nextBanner = () => {
    setShownBanner((shownBanner) => {
      if (shownBanner === banners.length - 1) {
        return 0;
      } else {
        return shownBanner + 1;
      }
    });
  };

  const prevBanner = () => {
    setShownBanner((shownBanner) => {
      if (shownBanner === 0) {
        return banners.length - 1;
      } else {
        return shownBanner - 1;
      }
    });
  };

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerImgContainer}>
        <button
          onClick={prevBanner}
          className={`${styles.bannerControl} ${styles.bannerPrevButton}`}
        ></button>
        <img src={banners[shownBanner].image} />
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
          onClick={nextBanner}
          className={`${styles.bannerControl} ${styles.bannerNextButton}`}
        ></button>
      </div>

      <div className={styles.bannerButtons}>
        {banners.map((banner, index) => {
          return (
            <button
              type="button"
              key={index}
              onClick={() => {
                setShownBanner(index);
              }}
            >
              {banner.subButton}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default HomeBanner;
