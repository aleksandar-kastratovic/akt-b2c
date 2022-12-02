import Link from 'next/link';
import { ApiHandler } from '../../../pages/api/api';
import styles from './LoginSection.module.scss';

const LoginSection = ({
  title = '',
  subtitle = '',
  button = '',
  buttonurl = '',
  link = '',
  url = '#',
  children,
  classes = {},
}) => {
  const registerUser = () => {  const api = ApiHandler(); 

    if (button === 'NAPRAVI NALOG') {
      // alert('NAPRAVI NALOG');
      const ret = {
        id: null,
        slug: 'ssss',
        name: 'Ruza Ruza',
        customer_token: 25122,
        customer_type: 'fizicko',
        first_name: 'Ruza',
        last_name: 'Vasilijevic',
        phone: '2373737373',
        email: 'vasilijevic.ruza.test@gmail.com',
        password: '123456',
        gender: 'female',
        birth_date: '1990-10-14',
        accept_terms: 1,
        accept_newsletter: 1,
        ip_address: '123.22.33.22',
        company_name: 'neko ime',
        pib: 'ssss',
        maticni_broj: '23445666666',
        note: '1',
        order: 1,
        status: 'on',
        active: 1,
      };

    
      // api
      //   .post('/profile/registration', ret)
      //   .then((response) => {
      
      //   })
      //   .catch((error) => console.warn(error));
    }
  //   else{
  //     const ret = {
  //       email:"ivanovicivana1999@gmail.com",
	// password:"123456"
  //     }
  //     api
  //     .post('/profile/login', ret)
  //     .then((response) => {
    
  //     })
  //     .catch((error) => console.warn(error));
  //   }
  };
  return (
    <div className={classes['section']}>
      <h2 className={`${styles['section-title']} ${classes['section-title']}`}>
        {title}
      </h2>
      <p
        className={`${styles['section-subtitle']} ${classes['section-subtitle']}`}
      >
        {subtitle}
      </p>
      <div
        className={`${styles['section-children']} ${classes['section-children']}`}
      >
        {children}
      </div>
      <div
        className={`${styles['section-bottom']} ${classes['section-bottom']}`}
      >
        {link !== '' ? (
          <Link href={url}>
            <a
              className={`${styles['section-link']} ${classes['section-lnik']}`}
            >
              {link}
            </a>
          </Link>
        ) : (
          ''
        )}
        {button !== '' ? (
          buttonurl === '' ? (
            <button
              className={`${styles['section-button']} ${classes['section-button']}`}
              onClick={registerUser}
            >
              {button}
            </button>
          ) : (
            <Link href={buttonurl}>
              <button
                className={`${styles['section-button']} ${classes['section-button']}`}
              >
                {button}
              </button>
            </Link>
          )
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default LoginSection;
