import React, { useRef, useState } from 'react';
import axios from 'axios';
import styles from '../../../styles/Newsletter.module.scss';
import {openAlertBox} from "../../../helpers/tostify"
import { isValidEmail, validEmailLength } from '../../../helpers/validate';

const Newsletter = () => {
  const [isNewsletterBoxOpen, setIsNewsletterBoxOpen] = useState(true);
  const emailRef = useRef();
  const agreedTermsdRef = useRef();

  const subscribeToNewsletter = async (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    if (validateSubscribeForm()) {
      const result = await axios.post(
        'https://api.akt.croonus.com/api/v1/b2c/newsletter/',
        { id: null, email: emailRef.current.value },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(result.data);
      emailRef.current.value = '';
      openAlertBox('Uspešno ste se prijavili na naš newsletter.', 'success');
      setIsNewsletterBoxOpen(false);
      setTimeout(() => {
        setIsNewsletterBoxOpen(true);
      }, 2200);
    }
  };

  const validateSubscribeForm = () => {
    let agreedTerms = agreedTermsdRef.current;
    let myEmail = emailRef.current;
    if (!isValidEmail(myEmail.value)) {
      openAlertBox('Popunite sva obavezna polja.', 'error');
      return false;
    }
    if (!validEmailLength(myEmail.value)) {
      openAlertBox('Minimalan broj karaktera je 10.', 'error');
      return false;
    }
    if (agreedTerms.checked) {
      return true;
    }
    openAlertBox('Molimo, prihvatite naša pravila privatnosti.', 'error');
    return false;
  };

  

  return (
    <div className={styles.newsletter}>
      <h2>Newsletter:</h2>
      <span>Pratite dešvanja iz našeg svakodnevnog poslovanja.</span>
      
      {isNewsletterBoxOpen ? (
        <form onSubmit={(e) => subscribeToNewsletter(e)}>
          <div className={`${styles.newsletterInputContainer} custom`}>
            <input
              type="text"
              placeholder="Unesite e-mail adresu."
              ref={emailRef}
            />
            <button type="submit">Prijavite se!</button>
          </div>
          <div className={styles.newsletterCheckbox}>
            <input type="checkbox" ref={agreedTermsdRef} />
            <label>Slažem se sa pravilima privatnosti.</label>
          </div>
        </form>
      ) : null}
    </div>
  );
};

export default Newsletter;
