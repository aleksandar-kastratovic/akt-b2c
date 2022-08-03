import classes from "../../styles/CartPage.module.scss";
import CartProduct from "../../components/layout/CartProduct";

const CartPage = () => {
  return (
    <>
      <div className={classes["heading-container"] + " pad-container-1600"}>
        <h3 className={"sub-heading"}>Checkout</h3>
        <p className={"regular-text"}>
          Discover this season's new dresses, tops, knits, denim and tailoring -
          all in signature Reiss style, adapted for the moment.
        </p>
      </div>
      <div className={classes["form-container"] + " row pad-container-1600"}>
        <div className={classes["left-side"] + " col-lg-6"}>
            <div className={`${classes['input-row']} row`}>
            <div
                className={
                  classes["input-container"] + " col-6 form-floating mb-3"
                }
              >
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Ime*</label>
              </div>
            <div
                className={
                  classes["input-container"] + " col-6 form-floating mb-3"
                }
              >
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Prezime*</label>
              </div>
            <div
                className={
                  classes["input-container"] + " col-3 form-floating mb-3"
                }
              >
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Pozivni broj*</label>
              </div>
            <div
                className={
                  classes["input-container"] + " col-3 form-floating mb-3"
                }
              >
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Telefon*</label>
              </div>
            <div
                className={
                  classes["input-container"] + " col-6 form-floating mb-3"
                }
              >
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Email*</label>
              </div>
            <div
                className={
                  classes["input-container"] + " col-6 form-floating mb-3"
                }
              >
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Adresa za dostavu*</label>
              </div>
            <div
                className={
                  classes["input-container"] + " col-6 form-floating mb-3"
                }
              >
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Država*</label>
              </div>
            <div
                className={
                  classes["input-container"] + " col-6 form-floating mb-3"
                }
              >
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Poštanski broj*</label>
              </div>
            <div
                className={
                  classes["input-container"] + " col-6 form-floating mb-3"
                }
              >
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Grad*</label>
              </div>
            </div>
        
            <div className={classes["text-area-container"]}>
              <textarea
                className={classes["textarea"]}
                rows="5"
                placeholder="NAPOMENA"
              />
            </div>
            <div className={classes["right-side-item-container"]}>
            <span className={classes["underlined"]}>
              Odaberite nacin dostave
            </span>
            <div className={classes["radio-container"]}>
              <input id='delivery' type="radio" name={classes["delivery-radio"]} />
              <label htmlFor='delivery'>Dostava kurirskom sluzbom na adresu</label>
            </div>
          </div>
          <div className={classes["right-side-item-container"]}>
            <span className={classes["underlined"]}>
              Odaberite nacin placanja
            </span>
            <div className={classes["radio-container"]}>
              <input id='delivery2'type="radio" name={"payement-radio"} />
              <label htmlFor="delivery2">Dostava kurirskom službom na adresu</label>
            </div>
            <div className={classes["radio-container"]}>
              <input id="courier" type="radio" name={"payement-radio"} />
              <label htmlFor="courier">Plaćanje prilikom preuzimanja robe od kurira</label>
            </div>
            <div className={classes["radio-container"]}>
              <input id="account" type="radio" name={"payement-radio"} />
              <label htmlFor="account">Uplata na tekući račun</label>
            </div>
            <div className={classes["radio-container"]}>
              <input id="card" type="radio" name={"payement-radio"} />
              <label htmlFor="card">Plaćanje platnom karticom</label>
            </div>
            <div className={classes["radio-container"]}>
              <input id="ips" type="radio" name={"payement-radio"} />
              <label htmlFor="ips">IPS skeniraj (instant plaćanje)</label>
            </div>
          </div>
        </div>
        <div className={classes["right-side"] + " col-lg-6"}>
        <div className={classes["products"] + " row"}>
            <div className={classes["product-box"] + "  col-12"}>
              <CartProduct/>
            </div>
            <div className={classes["product-box"] + "  col-12"}>
              <CartProduct/>
            </div>
            <div className={classes["product-box"] + "  col-12"}>
              <CartProduct/>
            </div>
            <div className={classes["product-box"] + "  col-12"}>
              <CartProduct/>
            </div>
            <div className={classes["product-box"] + "  col-12"}>
              <CartProduct/>
            </div>
            <div className={classes["product-box"] + "  col-12"}>
              <CartProduct/>
            </div>
            <div className={classes["product-box"] + "  col-12"}>
              <CartProduct/>
            </div>
            <div className={classes["product-box"] + "  col-12"}>
              <CartProduct/>
            </div>
            <div className={classes["product-box"] + "  col-12"}>
              <CartProduct />
            </div>
            <div className={classes["product-box"] + "  col-12"}>
              <CartProduct />
            </div>
          </div>
          
          <div className={classes["right-side-item-container"]}>
            <span className={classes["underlined"]}>Kupon</span>
            <div className={classes["coupon-container"]}>
              <div
                className={
                  classes["coupon-input"] + " col-6 form-floating mb-3"
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
              <p className={classes["read-manual"]}>
                *Pogledajte uputstvo za koristenje kupona
              </p>
            </div>
            <button
              type="button"
              className={classes["coupon-button"] + " basic-button-black"}
            >
              Aktiviraj kupon
            </button>
          </div>
          <div className={classes["right-side-item-container"]}>
            <span className={classes["underlined"]}>Vrednost vaše korpe</span>
            <div className={classes["coupon-container"]}>
              <span className={classes["value-label"]}>
                Ukupna vrednost korpe: <span> 185.450,00 RSD</span>
              </span>
              <span className={classes["value-label"]}>
                Iznos dodatnog popusta u korpi: <span> -1.000,00 RSD</span>
              </span>
              <span className={classes["value-label"]}>
                Iznos koštanja dostave: <span> 250,00 RSD</span>
              </span>
              <span className={classes["value-label"]}>
                Ukupno za plaćanje: <span> 184.200,00 RSD</span>
              </span>
            </div>
          </div>
          <div className={classes['agree']}>
                <input type='checkbox' id='agreement'/>
                <label htmlFor='agreement'>Saglasan sam sa opštim uslovima korišćenja AKT shop-a</label>
          </div>
          <button
              type="button"
              className={classes["end-button"] + " basic-button-black"}
            >
              Završi kupovinu
            </button>
        </div>
      </div>
    </>
  );
};

export default CartPage;
