import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/Footer.module.scss";
import HamburgerButton from "../UI/HamburgerButton";
import HeaderInput from "../UI/HeaderInput";
import MainContainer from "./MainContainer";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerTop + " row"}>
        <div className={styles.footerTopLeft + " col-xl-6"}>
          <Link href="/">
            <a className={styles.logoContainer}>
              <img alt="logo" src={"/images/logo/logo.png"} />
            </a>
          </Link>
          <div className={styles.footerInfo}>
            <span>AKT DOO</span>
            <span>Put 22. avgust bb</span>
            <span>31230 Arilje</span>
          </div>
          <div className={styles.footerInfo}>
            <span>PIB: 112833547</span>
            <span>MB: 21748854</span>
            <span>e-mail: prodaja@stefantekstil.rs</span>
          </div>
          <div className={styles.socials}>
            <a href="https://facebook.com">
              <img src={"/images/icons/fb2.png"} alt="social-facebook" />
            </a>
            <a href="https://instagram.com">
              <img src={"/images/icons/ig2.png"} alt="social-instagram" />
            </a>
            <a href="https://twitter.com">
              <img src={"/images/icons/tw.png"} alt="social-twitter" />
            </a>
          </div>
        </div>
        <div className={styles.footerTopRight + " col-xl-6"}>
          <div className={styles.newsletter}>
            <h2>Newsletter:</h2>
            <span>Pratite dešvanja iz našeg svakodnevnog poslovanja.</span>
            <div className={styles.newsletterInputContainer}>
              <input type="text" placeholder="Unesite e-mail adresu." />
              <button type="button">Prijavite se!</button>
            </div>
            <div className={styles.newsletterCheckbox}>
              <input type="checkbox" />
              <label>Slažem se sa pravilima privatnosti.</label>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerMiddle}>
        <ul>
          <li>
            <Link href="/">
              <a>Pomoć pri kupovini</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Uslovi korišćenja</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Politika o kolačićima</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Podešavanje kolačića</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Politika privatnosti</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Načini plaćanja</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>O nama</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Kontakt</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.footerBanks}>
        <img src="/images/icons/payment/mastercard-logo.png" />
        <img src="/images/icons/payment/mastercard-secure.png" />
        <img src="/images/icons/payment/visa.png" />
        <img src="/images/icons/payment/visa-secure.png" />
        <img src="/images/icons/payment/banca-intesa.png" />
        <img src="/images/icons/payment/maestro.png" />
        <img src="/images/icons/payment/dina-card.png" />
        <img src="/images/icons/payment/american-express.png" />
      </div>
      <div className={styles.footerBottom}>
        <p>
          Cene na sajtu su iskazane u dinarima sa uračunatim porezom, a plaćanje
          se vrši isključivo u dinarima. Nastojimo da budemo što precizniji u
          opisu proizvoda, prikazu slika i samih cena, ali ne možemo garantovati
          da su sve informacije kompletne i bez grešaka. Svi artikli prikazani
          na sajtu su deo naše ponude i ne podrazumeva da su dostupni u svakom
          trenutku. Raspoloživost robe možete proveriti pozivanjem Call Centra
          na 031 / 3894 222 (po ceni lokalnog poziva)
        </p>
      </div>
      <div className={styles.footerCopyright}>
        <p>
          &copy; 2022 AKT DOO | Sva prava zadržana. Powered by{" "}
          <a href="https://croonus.com">Croonus Technologies</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
