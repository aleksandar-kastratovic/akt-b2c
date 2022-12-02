import Link from 'next/link';
import Newsletter from './Newsletter/Newsletter';

import styles from '../../styles/Footer.module.scss';

import listsFooterMiddle from '../../data/Footer/footerMiddle.json';
import listsBankCard from '../../data/Footer/footerBanks.json';
import listsSocialIcons from '../../data/Footer/footerSocialIcons.json';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerTop + ' row'}>
        <div className={styles.footerTopLeft + ' col-xl-6'}>
          <Link href="/">
            <a className={styles.logoContainer}>
              <img alt="logo" src={'/images/logo/logo.png'} />
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
            {listsSocialIcons.map((list) => {
              return (
                <a key={list.id} href={list.path}>
                  <img src={list.src} alt={list.alt} />
                </a>
              );
            })}
          </div>
        </div>
        <div className={styles.footerTopRight + ' col-xl-6'}>
          <Newsletter />
        </div>
      </div>
      <div className={styles.footerMiddle}>
        <ul>
          {listsFooterMiddle.map((list) => {
            return (
              <li key={list.id}>
                <Link href={list.path}>
                  <a>{list.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.footerBanks}>
        {listsBankCard.map((list) => {
          return <img key={list.id} src={list.src} alt={list.alt} />;
        })}
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
          &copy; {year} AKT DOO | Sva prava zadržana. Powered by{' '}
          <a href="https://croonus.com">Croonus Technologies</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
