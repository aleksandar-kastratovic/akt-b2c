import Head from 'next/head'
import Image from 'next/image'
import ProductSlider from '../components/layout/ProductSlider'
import SliderBanners from '../components/layout/SliderBanners'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerImgContainer}>
          <img src={'/images/banners/hp-banner-1.png'}/>
          <div className={styles.imgBannerContent}>
            <span className={styles.imgBannerContentTop}>
              We celebrate
            </span>
            <span className={styles.imgBannerContentMiddle}>
              New in.
            </span>
            <button className={styles.imgBannerContentButton}>
              Explore more.
            </button>
          </div>
        </div>
        <div className={styles.bannerButtons}>
          <button type='button'>
            Summer `&apos;`22
          </button>
          <button type='button'>
            New collection
          </button>
          <button type='button'>
            Bedding
          </button>
        </div>
      </div>
        <ProductSlider/>
        <SliderBanners/>
        <ProductSlider/>
    </div>
  )
}
