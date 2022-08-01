import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/Footer.module.scss";
import HamburgerButton from "../UI/HamburgerButton";
import HeaderInput from "../UI/HeaderInput";
import MainContainer from "./MainContainer";


const Footer = () => {
  
  return (
   <footer className={styles.footerContainer}>
    <div className={styles.footerTop+ ' row'}>
        <div className={styles.footerTopLeft+' col-6'}>
            <Link href="/">
                <a className={styles.logoContainer}> 
                    <img alt='logo' src={'/images/logo/logo.png'}/>
                </a>
            </Link>
            <div className={styles.footerInfo}>
                <span>
                    AKT DOO
                </span>
                <span>
                    Put 22. avgust bb
                </span>
                <span>
                    31230 Arilje
                </span>
            </div>
            <div className={styles.footerInfo}>
                <span>
                   PIB: 112833547
                </span>
                <span>
                    MB: 21748854
                </span>
                <span>
                    e-mail: prodaja@stefantekstil.rs
                </span>
            </div>
            <div className={styles.socials}>
                <a href='https://facebook.com'>
                    <img src={'/images/icons/fb.png'} alt='social-facebook'/>
                </a>
                <a href='https://instagram.com'>
                    <img src={'/images/icons/ig.png'} alt='social-instagram'/></a>
                <a href='https://twitter.com'>
                    <img src={'/images/icons/tw.png'} alt='social-twitter'/></a>
            </div>
        </div>
        <div className={styles.footerTopRight+' col-6'}>
            <div className={styles.newsletter}>
                <h2>Newsletter:</h2>
                <span>
                    Pratite dešvanja iz našeg svakodnevnog poslovanja.
                </span>
                <div className={styles.newsletterInputContainer}>
                    <input type='text' placeholder="Unesite e-mail adresu."/>
                    <button type='button'>
                        Prijavite se!
                    </button>
                </div>
                <div className={styles.newsletterCheckbox}>
                    <input type='checkbox'/>
                    <label>Slažem se sa pravilima privatnosti.</label>
                </div>
            </div>
        </div>
    </div>        
   </footer>
  );
};

export default Footer;
