import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../styles/Header.module.scss";
import HamburgerButton from "../UI/HamburgerButton";
import HeaderInput from "../UI/HeaderInput";
import MainContainer from "./MainContainer";

const Header = () => {
  const [showBurgerDiv, setShowBurgerDiv] = useState(false);
  const [burgerCategory, setBurgerCategory] = useState("");
  const router = useRouter();
  const burgerDivHandler = () => {
    if (!showBurgerDiv) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "auto";
    setShowBurgerDiv((prev) => !prev);
  };
  return (
    <>
      <div
        className={`${styles.burgerDiv} ${
          showBurgerDiv ? styles.burgerDivActive : styles.burgerDivInactive
        }`}
      >
        <MainContainer>
          <div className={styles.burgerLeft}>
            <Link href="/">
              <a onClick={burgerDivHandler}>Novo</a>
            </Link>
            <Link href="/">
              <a onClick={burgerDivHandler}>Akcija</a>
            </Link>
            <ul>
              <li
                className={
                  burgerCategory === "spavaca" ? styles.burgerCatActive : ""
                }
                onClick={() => setBurgerCategory("spavaca")}
              >
                Spavaća soba
              </li>
              <li
                className={
                  burgerCategory === "kuhinja" ? styles.burgerCatActive : ""
                }
                onClick={() => setBurgerCategory("kuhinja")}
              >
                Kuhinja
              </li>
              <li
                className={
                  burgerCategory === "kupatilo" ? styles.burgerCatActive : ""
                }
                onClick={() => setBurgerCategory("kupatilo")}
              >
                Kupatilo
              </li>
              <li
                className={
                  burgerCategory === "licenciran" ? styles.burgerCatActive : ""
                }
                onClick={() => setBurgerCategory("licenciran")}
              >
                Licencirani program
              </li>
              <li
                className={
                  burgerCategory === "hotelski" ? styles.burgerCatActive : ""
                }
                onClick={() => setBurgerCategory("hotelski")}
              >
                Hotelski program
              </li>
            </ul>
          </div>
          <div className={styles.burgerRight + " row"}>
            <div className={styles.categoryColumn + " col-4"}>
              <h6>Spavaća soba za odrasle</h6>
              <ul>
                <li>
                  <Link href="/kategorije">
                    <a onClick={burgerDivHandler}>Posteljine</a>
                  </Link>
                </li>
                <li>
                  <Link href="/kategorije">
                    <a onClick={burgerDivHandler}>Pokrivači</a>
                  </Link>
                </li>
                <li>
                  <Link href="/kategorije">
                    <a onClick={burgerDivHandler}>Jorgani</a>
                  </Link>
                </li>
                <li>
                  <Link href="/kategorije">
                    <a onClick={burgerDivHandler}>Jastuci</a>
                  </Link>
                </li>
                <li>
                  <Link href="/kategorije">
                    <a onClick={burgerDivHandler}>Ćebad</a>
                  </Link>
                </li>
                <li>
                  <Link href="/kategorije">
                    <a onClick={burgerDivHandler}>Poseljni delovi</a>
                  </Link>
                </li>
                <li>
                  <Link href="/kategorije">
                    <a onClick={burgerDivHandler}>Prostirke za nameštaj</a>
                  </Link>
                </li>
                <li>
                  <Link href="/kategorije">
                    <a onClick={burgerDivHandler}>Dekorativne jastučnice</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.categoryColumn + " col-4"}>
              <h6>Spavaća soba za bebe</h6>
              <ul>
                <li>
                  <Link href="/kategorije">
                    <a onClick={burgerDivHandler}>Posteljine</a>
                  </Link>
                </li>
                <li>
                  <Link href="/kategorije">
                    <a onClick={burgerDivHandler}>Pokrivači</a>
                  </Link>
                </li>
                <li>
                  <Link href="/kategorije">
                    <a onClick={burgerDivHandler}>Ogradice</a>
                  </Link>
                </li>
                <li>
                  <Link href="/kategorije">
                    <a onClick={burgerDivHandler}>Ćebad za bebe</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </MainContainer>
      </div>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <MainContainer>
            <span>Call Center: 031 / 3894 222</span>
            <Link href="/login">
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
                <button className={styles.headerButton + ' ' + styles.mobileSearch} >
                  <img src={'/images/icons/search.png'}/>

                </button>
                <Link href="/lista-zelja">
                  <a className={styles.headerButton}>
                    <img src={"/images/icons/favorite.png"} alt="fav-heart" />
                  </a>
                </Link>
                <Link href="/korpa">
                  <a className={styles.headerButton}>
                    <img
                      src={"/images/icons/shopping-bag.png"}
                      alt="shopping-bag"
                    />
                    <span>0</span>
                  </a>
                </Link>
              </div>
            </div>
          </MainContainer>
        </div>
        {(router.pathname.startsWith("/kategorije") ||
          router.pathname.startsWith("/proizvod")) && (
          <div className={styles.breadcrumbs}>
            <MainContainer>
              <ul>
                <li>
                  <Link href="/">
                    <a>Početna</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Bademantil</a>
                  </Link>
                </li>
              </ul>
            </MainContainer>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
