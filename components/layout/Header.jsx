import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/Header.module.scss";
import HamburgerButton from "../UI/HamburgerButton";
import HeaderInput from "../UI/HeaderInput";
import MainContainer from "./MainContainer";

const Header = () => {
  const [showBurgerDiv, setShowBurgerDiv] = useState(false);
  const burgerDivHandler = () => {
    if (!showBurgerDiv) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "auto";
    setShowBurgerDiv((prev) => !prev);
  };
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <MainContainer>
          <span>Call Center: 031 / 3894 222</span>
          <Link href="/">
            <a>Moj profil</a>
          </Link>
        </MainContainer>
      </div>
      <div className={styles.headerBottom}>
        <MainContainer className={styles.headerBottomContainer}>
          <div className={styles.burgerLogoContainer}>
            <HamburgerButton
              active={showBurgerDiv}
              handleActive={burgerDivHandler}
            />
            <Link href="/">
              <a className={styles.logoContainer}>
                <img src={"/images/logo/logo.png"} />
              </a>
            </Link>
          </div>
          <div className={styles.headerRight}>
            <HeaderInput />
            <div className={styles.headerButtonsContainer}>
              <button className={styles.headerButton}>
                <img src={"/images/icons/favorite.png"} alt="fav-heart" />
              </button>
              <button className={styles.headerButton}>
                <img src={"/images/icons/shopping-bag.png"} alt="fav-heart" />
                <span>0</span>
              </button>
            </div>
          </div>
        </MainContainer>
      </div>
    </header>
  );
};

export default Header;
