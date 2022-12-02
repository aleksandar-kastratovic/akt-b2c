import { useRouter } from 'next/router';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { ApiHandler, generateCustomerToken } from '../api/api';
import Cookies from 'js-cookie';
import classes from "../../styles/CartPage.module.scss"

function FinishShoping() {
  const { query } = useRouter();
  const { push: navigate } = useRouter();
  const [checkoutInfo, setCheckoutInfo] = useState([]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate('/');
  //   }, 5000);
  // }, [navigate]);

  useEffect(() => {
    const api = ApiHandler();
    let token = Cookies.get('order_token');
    api
      .get(`checkout/info/${token}`)
      .then((response) => setCheckoutInfo(response?.payload))
      .catch((error) => console.warn(error));
  }, []);

  return (
    <div className={classes['heading-container']}>
      <h3>Uspešno kreirana porudžbenica!</h3>
      <p>
        Hvala <b>{checkoutInfo.order ? checkoutInfo.order[0].ship_to_name : ''}</b> na
        ukazanom poverenju.
      </p>
      <p>
        Vaša porudžbenica je uspešno evidentirana pod brojem{' '}
        <b>{checkoutInfo.order ? checkoutInfo.order[0].slug : ''}</b>.
      </p>
    </div>
  );
}

export default FinishShoping;
