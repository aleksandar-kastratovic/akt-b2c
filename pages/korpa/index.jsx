import classes from '../../styles/CartPage.module.scss';
import CartProduct from '../../components/layout/CartProduct';
import { useCallback, useEffect, useState } from 'react';
import { ApiHandler } from '../api/api';
import { currencyFormat } from '../../helpers/functions';
import { useCartContext } from '../api/cartContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const CartPage = ({ paymentoptions, deliveryoptions }) => {
  const [cart, mutateCart] = useCartContext();
  const [cartData, setCartData] = useState([]);
  // const [secondAddress, setSecondAddress] = useState(false);
  const { push: navigate } = useRouter();
  

  const [formData, setFormData] = useState({
    type: 'personal',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address: '',
    // object_number: '',
    zip_code: '',
    town: '',
    note: '',
    agreed: null,

    // company_name: '',
    // pib: '',
    // maticni_broj: '',

    // shipping_first_name: '',
    // shipping_last_name: '',
    // shipping_email: '',
    // shipping_phone: '',
    // shipping_address: '',
    // shipping_object_number: '',
    // shipping_zip_code: '',
    // shipping_town: '',
    // shipping_note: '',
    // shipping_company_name: '',

    delivery: null,
    payment: null,
  });

  const required = [
    'first_name',
    'last_name',
    'email',
    'phone',
    'object_number',
    'address',
    'zip_code',
    'town',
    'agreed',
    'shipping_first_name',
    'shipping_last_name',
    'shipping_email',
    'shipping_phone',
    'shipping_address',
    'shipping_object_number',
    'shipping_address',
    'shipping_zip_code',
    'shipping_town',
    'delivery',
    'payment',
  ];

  const errorMsg = 'Polje je obavezno.';
  const errorSelect = 'Morate izabrati jednu opciju.';

  const [errors, setErrors] = useState([]);

  const getCart = useCallback(() => {
    const api = ApiHandler();
    api
      .list('cart')
      .then((response) => setCartData(response?.payload))
      .catch((error) => console.warn(error));
  }, []);

  useEffect(() => {
    getCart();
  }, [getCart, cart]);

  const cartItems = cartData.items ?? [];
  const cartCost = cartData.summary;
  console.log(cartItems, cartCost);

  const formChangeHandler = ({ target }) => {
    setErrors(errors.filter((item) => item != target.name));
    if (
      (target.type === 'checkbox' && target.checked) ||
      (target.type === 'radio' && target.checked) ||
      (target.type === 'text' && target.value.length > 0) ||
      (target.type === 'textarea' && target.value.length > 0)
    ) {
      setFormData({ ...formData, [target.name]: target.value });
    } else {
      if (target.type === 'text' || target.type === 'checkbox') {
        setFormData({ ...formData, [target.name]: target.value });
      }
      if (target.type === 'textarea') {
        setFormData({ ...formData, [target.name]: target.value });
        return;
      }
      setErrors([...errors, target.name]);
    }
  };

  const formSubmitHandler = () => {
    const err = [];
    for (const key in formData) {
      const item = formData[key];
      if (key !== 'note') {
        if (
          item === '' ||
          item == null ||
          (required.includes(key) && (item === '' || item == null))
        ) {
          if (key.includes('shipping')) {
            // if (!secondAddress) {
            err.push(key);
            // }
          } else {
            err.push(key);
          }
        }
      }
    }

    if (err.length > 0) {
      setErrors(err);
    } else {
      const api = ApiHandler();
      const ret = {
        customer_type_billing: formData.type,
        id_company_shipping: null,
        id_company_address_shipping: null,
        company_name_shipping: null,
        pib_shipping: null,
        maticni_broj_shipping: null,
        first_name_shipping: formData.first_name,
        last_name_shipping: formData.last_name,
        phone_shipping: formData.phone,
        email_shipping: formData.email,
        address_shipping: formData.address,
        object_number_shipping: +new Date(),
        floor_shipping: '',
        apartment_number_shipping: '',
        id_town_shipping: null,
        town_name_shipping: formData.town,
        zip_code_shipping: formData.zip_code,
        id_municipality_shipping: null,
        municipality_name_shipping: '',
        id_country_shipping: null,
        country_name_shipping: 'Srbija',
        note_shipping: formData.note,
        id_company_billing: null,
        id_company_address_billing: null,
        company_name_billing: null,
        pib_billing: null,
        maticni_broj_billing: null,
        first_name_billing: formData.first_name,
        last_name_billing: formData.last_name,
        phone_billing: formData.phone,
        email_billing: formData.email,
        address_billing: formData.address,
        object_number_billing: '',
        floor_billing: '',
        apartment_number_billing: '',
        id_town_billing: null,
        town_name_billing: formData.town,
        zip_code_billing: formData.zip_code,
        id_municipality_billing: null,
        municipality_name_billing: '',
        id_country_billing: null,
        country_name_billing: 'Srbija',
        note_billing: formData.note,
        accept_rules: +formData.agreed,

        delivery_method: formData.delivery,
        delivery_method_options: [],

        payment_method: formData.payment,
        payment_method_options: [],

        promo_code: null,
        promo_code_options: [],

        note: formData.note,
      };

      api
        .post('/checkout/one-page', ret)
        .then((response) => {
          mutateCart();
          Cookies.set('order_token', response.payload.order[0].order_token, {
            expires: 365,
          });
          navigate(`/zavrsna-kupovina`);
        })
        .catch((error) => console.warn(error));
    }
  };

  const onDeleteHandler = (id) => {
    let products = cartItems.filter((item) => item.product.id !== id);
    setCartData({ ...cartData, items: products });
  };

  return (
    <>
      <div className={classes['heading-container'] + ' pad-container-1600'}>
        <h3 className={'sub-heading'}>Checkout</h3>
        <p className={'regular-text'}>
          Discover this season&apos;s new dresses, tops, knits, denim and
          tailoring - all in signature Reiss style, adapted for the moment.
        </p>
      </div>
      {cartItems.length > 0 ? (
        <div className={classes['form-container'] + ' row pad-container-1600'}>
          <div className={classes['left-side'] + ' col-lg-6'}>
            <div className={`${classes['input-row']} row`}>
              {/* <>
              <input
                  type="radio"
                  className={'basic-radio'}
                  name="type"
                  value="personal"
                  id="personal"
                  onChange={formChangeHandler}
                  checked={'}
                />
                <label htmlFor={'personal'}>Poručujem kao fizičko lice</label>
                <input
                  type="radio"
                  className={'basic-radio'}
                  name="type"
                  value="company"
                  id="company"
                  onChange={formChangeHandler}
                />
                <label htmlFor={'company'}>Poručujem kao pravno lice</label>
              </> */}
              <div
                className={
                  classes['input-container'] + ' col-sm-6 form-floating mb-3'
                }
              >
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  name="first_name"
                  placeholder="Ime*"
                  value={formData.first_name}
                  onChange={formChangeHandler}
                />
                <label htmlFor="name">Ime*</label>
                {errors.includes('first_name') && (
                  <span className={classes.errorMsg}>{errorMsg}</span>
                )}
              </div>

              <div
                className={
                  classes['input-container'] + ' col-sm-6 form-floating mb-3 '
                }
              >
                <input
                  className="form-control"
                  id="surname"
                  type="text"
                  name="last_name"
                  placeholder="Prezime*"
                  value={formData.last_name}
                  onChange={formChangeHandler}
                />
                <label htmlFor="surname">Prezime*</label>
                {errors.includes('last_name') && (
                  <span className={classes.errorMsg}>{errorMsg}</span>
                )}
              </div>
              <div
                className={
                  classes['input-container'] +
                  ' col-6 col-sm-3 form-floating mb-3'
                }
              >
                <input
                  type="email"
                  className="form-control"
                  id="numberCountry"
                  placeholder="Pozivni broj"
                />
                <label htmlFor="numberCountry">Pozivni broj</label>
              </div>
              <div
                className={
                  classes['input-container'] +
                  ' col-6 col-sm-3 form-floating mb-3'
                }
              >
                <input
                  className="form-control"
                  id="phone"
                  type="text"
                  name="phone"
                  placeholder="Telefon*"
                  value={formData.phone}
                  onChange={formChangeHandler}
                />
                <label htmlFor="phone">Telefon*</label>
                {errors.includes('phone') && (
                  <span className={classes.errorMsg}>{errorMsg}</span>
                )}
              </div>
              <div
                className={
                  classes['input-container'] + ' col-sm-6 form-floating mb-3'
                }
              >
                <input
                  className="form-control"
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={formChangeHandler}
                />
                <label htmlFor="email">Email*</label>
                {errors.includes('email') && (
                  <span className={classes.errorMsg}>{errorMsg}</span>
                )}
              </div>
              <div
                className={
                  classes['input-container'] + ' col-6 form-floating mb-3'
                }
              >
                <input
                  className="form-control"
                  id="address"
                  type="text"
                  name="address"
                  placeholder="Adresa za dostavu"
                  value={formData.address}
                  onChange={formChangeHandler}
                />
                <label htmlFor="address">Adresa za dostavu*</label>
                {errors.includes('address') && (
                  <span className={classes.errorMsg}>{errorMsg}</span>
                )}
              </div>
              <div
                className={
                  classes['input-container'] + ' col-6 form-floating mb-3'
                }
              >
                <input
                  type="email"
                  className="form-control"
                  id="country"
                  placeholder="Država"
                />
                <label htmlFor="country">Država</label>
              </div>
              <div
                className={
                  classes['input-container'] + ' col-6 form-floating mb-3'
                }
              >
                <input
                  className="form-control"
                  id="zip_code"
                  type="text"
                  name="zip_code"
                  placeholder="Poštanski broj*"
                  value={formData.zip_code}
                  onChange={formChangeHandler}
                />
                <label htmlFor="zip_code">Poštanski broj*</label>
                {errors.includes('zip_code') && (
                  <span className={classes.errorMsg}>{errorMsg}</span>
                )}
              </div>
              <div
                className={
                  classes['input-container'] + ' col-6 form-floating mb-3'
                }
              >
                <input
                  className="form-control"
                  id="town"
                  type="text"
                  name="town"
                  placeholder="Grad*"
                  value={formData.town}
                  onChange={formChangeHandler}
                />
                <label htmlFor="town">Grad*</label>
                {errors.includes('town') && (
                  <span className={classes.errorMsg}>{errorMsg}</span>
                )}
              </div>
            </div>

            <div className={classes['text-area-container']}>
              <textarea
                className={classes['textarea']}
                rows="5"
                placeholder="NAPOMENA"
                id="note"
                type="text"
                name="note"
                value={formData.note}
                onChange={formChangeHandler}
              />
            </div>
            <div className={classes['right-side-item-container']}>
              <span className={classes['underlined']}>
                Odaberite nacin dostave
              </span>
              {(deliveryoptions ?? []).map((item) => (
                <div key={item.type} className={classes['radio-container']}>
                  <input
                    type="radio"
                    className={'basic-radio'}
                    name="delivery"
                    value={item.id}
                    id={'delivery' + item.type}
                    onChange={formChangeHandler}
                  />
                  <label htmlFor={'delivery' + item.id}>{item.name}</label>
                </div>
              ))}
              {errors.includes('delivery') && (
                <span className={classes.errorMsg}>{errorSelect}</span>
              )}
            </div>
            <div className={classes['right-side-item-container']}>
              <span className={classes['underlined']}>
                Odaberite nacin placanja
              </span>
              {(paymentoptions ?? []).map((item) => (
                <div className={classes['radio-container']} key={item.id}>
                  <input
                    type="radio"
                    className={'basic-radio'}
                    name="payment"
                    value={item.id}
                    id={'payment' + item.id}
                    onChange={formChangeHandler}
                  />
                  <label htmlFor={'payment' + item.id}>{item.name}</label>
                </div>
              ))}
              {errors.includes('payment') && (
                <span className={classes.errorMsg}>{errorSelect}</span>
              )}
            </div>
          </div>
          <div className={classes['right-side'] + ' col-lg-6'}>
            <div className={classes['products'] + ' row'}>
              {cartItems.map((item) => {
                return (
                  <CartProduct
                    key={item.product.id}
                    product={item.product}
                    deleteProduct={onDeleteHandler}
                  />
                );
              })}
            </div>

            {/* <div className={classes['right-side-item-container']}>
              <span className={classes['underlined']}>Kupon</span>
              <div className={classes['coupon-container']}>
                <div
                  className={
                    classes['coupon-input'] + ' col-6 form-floating mb-3'
                  }
                >
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Unos kupona</label>
                </div>
                <p className={classes['read-manual']}>
                  *Pogledajte uputstvo za koristenje kupona
                </p>
              </div>
              <button
                type="button"
                className={classes['coupon-button'] + ' basic-button-black'}
              >
                Aktiviraj kupon
              </button>
            </div> */}

            <div className={classes['right-side-item-container']}>
              <span className={classes['underlined']}>Vrednost vaše korpe</span>
              <div className={classes['coupon-container']}>
                <span className={classes['value-label']}>
                  Ukupna vrednost korpe:
                  <span>
                    {currencyFormat(
                      cartCost?.totals?.with_vat ?? 0,
                      cartCost?.currency
                    )}
                  </span>
                </span>
                <span className={classes['value-label']}>
                  Iznos dodatnog popusta u korpi:
                  <span>
                    {currencyFormat(
                      -(cartCost?.options?.discount?.active
                        ? cartCost?.totals?.discount
                        : 0),
                      cartCost?.currency
                    )}
                  </span>
                </span>
                <span className={classes['value-label']}>
                  Iznos koštanja dostave:
                  <span>
                    {currencyFormat(
                      cartCost?.options?.delivery?.active
                        ? cartCost?.totals?.delivery
                        : 0,
                      cartCost?.currency
                    )}
                  </span>
                </span>
                <span className={classes['value-label']}>
                  Ukupno za plaćanje:
                  <span>
                    {currencyFormat(
                      cartCost?.totals?.total ?? 0,
                      cartCost?.currency
                    )}
                  </span>
                </span>
              </div>
            </div>
            <div className={classes['agree']}>
              <div>
                <input
                  type="checkbox"
                  id="agreed"
                  name="agreed"
                  onChange={formChangeHandler}
                  value={formData.agreed === '1' ? '' : '1'}
                />
                <label htmlFor="agreed">
                  Saglasan sam sa opštim uslovima korišćenja AKT shop-a
                </label>
              </div>

              {errors.includes('agreed') && (
                <span className={classes.errorMsg}>{errorMsg}</span>
              )}
            </div>
            <button
              type="button"
              className={classes['end-button'] + ' basic-button-black'}
              onClick={formSubmitHandler}
            >
              Završi kupovinu
            </button>
            {errors.length > 0 && (
              <p className={classes.errorMsg}>
                Nisu popunjena sva obavezna polja.
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className={classes.continueShopping}>
          <h3 className="sub-heading">Vaša korpa je prazna!</h3>
          <Link href="/">Nastavite kupovinu</Link>
        </div>
      )}
    </>
  );
};

export default CartPage;

export const getServerSideProps = async () => {
  const api = ApiHandler();

  return {
    props: {
      paymentoptions: await api
        .get('checkout/payment-options')
        .then((response) => response?.payload),
      deliveryoptions: await api
        .get('checkout/delivery-options')
        .then((response) => response?.payload),
    },
  };
};
