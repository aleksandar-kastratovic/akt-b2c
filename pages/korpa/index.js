import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";
const CartProductBox = dynamic(
  () => import("../../components/CartProductBox"),
  { loading: () => <p>Loading...</p> }
);
const GenerateBreadcrumb = dynamic(
  () => import("../../helpers/GenerateBreadCrumbs"),
  { loading: () => <p>Loading...</p> }
);
import { useCartContext } from "@/app/api/cartContext";
import { useRouter } from "next/router";
import Footer from "../../components/Footer/Footer";
import { get, list, post } from "@/app/api/api";
import classes from "./Cart.module.css";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";
import Breadcrumbs from "../../helpers/GenerateBreadCrumbs";
import { currencyFormat } from "../../helpers/functions";

const CheckoutPage = ({ paymentoptions, deliveryoptions, categories }) => {
  const router = useRouter();
  const { asPath } = router;
  function handleClick() {
    router.back();
  }
  const [cart, mutateCart] = useCartContext();
  const [cartData, setCartData] = useState([]);
  const [secondAddress, setSecondAddress] = useState(false);
  const [token, setToken] = useState();
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);
  const [loading, setLoading] = useState(false);
  const verifyCaptcha = useCallback((token) => {
    setToken(token);
  }, []);
  const [formData, setFormData] = useState({
    type: "personal",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    object_number: "",
    address: "",
    zip_code: "",
    town: "",
    note: "",
    company_name: "",
    pib: "",
    maticni_broj: "",
    agreed: null,
    shipping_first_name: "",
    shipping_last_name: "",
    shipping_email: "",
    shipping_phone: "",
    shipping_address: "",
    shipping_object_number: "",
    shipping_zip_code: "",
    shipping_town: "",
    shipping_note: "",
    shipping_company_name: "",
    gcaptcha: token,
    delivery: null,
    payment: null,
  });

  const required = [
    "first_name",
    "last_name",
    "email",
    "phone",
    "address",
    "zip_code",
    "object_number",
    "town",
    "agreed",
    "shipping_first_name",
    "shipping_last_name",
    "shipping_email",
    "shipping_phone",
    "shipping_address",
    "shipping_object_number",
    "shipping_address",
    "shipping_zip_code",
    "shipping_town",
    "delivery",
    "payment",
  ];

  const companyrequired = [
    "company_name",
    "pib",
    "maticni_broj",
    "shipping_company_name",
  ];
  const errorMsg = "Polje je obavezno";
  const errorSelect = "Morate izabrati jednu opciju";
  const errorCheck = "Morate prihvatiti uslove";

  const [errors, setErrors] = useState([]);

  const getCart = useCallback(() => {
    list("/cart")
      .then((response) => {
        setCartData(response?.payload);
      })
      .catch((error) => console.warn(error));
  }, []);
  useEffect(() => {
    getCart();
  }, [getCart, cart]);

  const cartItems = cartData.items ?? [];
  const cartCost = cartData.summary?.total ?? 0;
  console.log(cartItems);
  const formChangeHandler = ({ target }) => {
    setErrors(errors.filter((item) => item != target.name));

    if (target.type === "radio" && target.checked) {
      setFormData({ ...formData, [target.name]: target.value });
    } else {
      setFormData({ ...formData, [target.name]: target.value });
    }
  };

  const formSubmitHandler = () => {
    setRefreshReCaptcha((r) => !r);
    const err = [];
    for (const key in formData) {
      const item = formData[key];
      if (
        (formData.type === "company" &&
          companyrequired.includes(key) &&
          (item === "" || item == null)) ||
        (required.includes(key) && (item === "" || item == null))
      ) {
        if (key.includes("shipping")) {
          if (secondAddress) {
            err.push(key);
          }
        } else {
          err.push(key);
        }
      }
    }
    if (err.length > 0) {
      setErrors(err);
      console.log(err);
    } else {
      const ret = {
        customer_type_billing: formData.type,
        id_company_shipping: null,
        id_company_address_shipping: null,
        company_name_shipping:
          formData.type === "company"
            ? secondAddress
              ? formData.shipping_company_name
              : formData.company_name
            : null,
        pib_shipping: formData.type === "company" ? formData.pib : null,
        maticni_broj_shipping:
          formData.type === "company" ? formData.maticni_broj : null,
        first_name_shipping: secondAddress
          ? formData.shipping_first_name
          : formData.first_name,
        last_name_shipping: secondAddress
          ? formData.shipping_last_name
          : formData.last_name,
        phone_shipping: secondAddress
          ? formData.shipping_phone
          : formData.phone,
        email_shipping: secondAddress
          ? formData.shipping_email
          : formData.email,
        address_shipping: secondAddress
          ? formData.shipping_address
          : formData.address,
        object_number_shipping: secondAddress
          ? formData.shipping_object_number
          : formData.object_number,
        floor_shipping: "",
        apartment_number_shipping: "",
        id_town_shipping: null,
        town_name_shipping: secondAddress
          ? formData.shipping_town
          : formData.town,
        zip_code_shipping: secondAddress
          ? formData.shipping_zip_code
          : formData.zip_code,
        id_municipality_shipping: null,
        municipality_name_shipping: "",
        id_country_shipping: null,
        country_name_shipping: "Srbija",
        note_shipping: secondAddress ? formData.shipping_note : formData.note,
        id_company_billing: null,
        id_company_address_billing: null,
        company_name_billing:
          formData.type === "company" ? formData.company_name : null,
        pib_billing: formData.type === "company" ? formData.pib : null,
        maticni_broj_billing:
          formData.type === "company" ? formData.maticni_broj : null,
        first_name_billing: formData.first_name,
        last_name_billing: formData.last_name,
        phone_billing: formData.phone,
        email_billing: formData.email,
        address_billing: formData.address,
        object_number_billing: "",
        floor_billing: "",
        apartment_number_billing: "",
        id_town_billing: null,
        town_name_billing: formData.town,
        zip_code_billing: formData.zip_code,
        id_municipality_billing: null,
        municipality_name_billing: "",
        id_country_billing: null,
        country_name_billing: "Srbija",
        note_billing: formData.note,

        delivery_method: formData.delivery,
        delivery_method_options: [],

        payment_method: formData.payment,
        payment_method_options: [],

        promo_code: null,
        promo_code_options: [],

        note: formData.note,
        gcaptcha: token,

        accept_rules: 1,
      };
      if (errors.length === 0) {
        setLoading(true);
      } else {
        setLoading(false);
      }
      post("/checkout/one-page", ret)
        .then((response) => {
          const creditCardForm = response?.payload?.payment_provider_data?.form;

          if (response?.code === 200 && creditCardForm) {
            const dom = document.createElement("div");
            dom.innerHTML = creditCardForm;
            document.body.appendChild(dom);

            const formData = document.getElementById("bank_send_form");
            formData.submit();
            mutateCart();
          } else {
            router.push(`/korpa/${response?.payload?.order?.order_token}`);
          }

          if (response?.code === 500 || response?.code === 400) {
            return (
              <div className="flex flex-row items-center justify-center rounded-2xl border border-croonus-1">
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-2xl font-medium">Greška</h1>
                  <p className="text-base">
                    Došlo je do nepoznate greške pri obrađivanju Vašeg zahteva.
                  </p>
                </div>
              </div>
            );
          }
          setLoading(false);
        })
        .catch((error) => console.warn(error));
    }
  };
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.CAPTCHAKEY}>
      <GoogleReCaptcha
        onVerify={verifyCaptcha}
        refreshReCaptcha={refreshReCaptcha}
      />
      <div className="mx-auto text-sm 4xl:container">
        <div className="mt-5 max-xl:w-[95%] mx-auto">
          <div className="mx-auto flex w-full justify-between uppercase font-medium xl:w-[90%]">
            <Breadcrumbs asPath={asPath} />
          </div>
        </div>
        {cartItems.length > 0 ? (
          <div className="mx-auto grid grid-cols-5 gap-y-3 gap-x-3 w-[95%] xl:w-[85%] ">
            <div className="col-span-5 bg-white p-1 xl:col-span-3 max-xl:row-start-1">
              <div className="flex flex-row items-center gap-5 pt-7">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="type"
                    value="personal"
                    id="personal"
                    onChange={formChangeHandler}
                    checked={formData.type === "personal"}
                    className="h-3 w-3 text-blue-500 focus:ring-0"
                  />
                  <label htmlFor="personal">Fizičko lice</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="type"
                    id="company"
                    value="company"
                    onChange={formChangeHandler}
                    checked={formData.type === "company"}
                    className="h-3 w-3 text-blue-500 focus:ring-0"
                  />
                  <label htmlFor="company">Pravno lice</label>
                </div>
              </div>
              {formData.type === "personal" && (
                <div className="mt-4 grid grid-cols-2 gap-x-10 pb-4 max-xl:mx-3 max-xl:text-base ">
                  <div className="flex flex-col gap-3 max-xl:col-span-3 xl:col-start-1 xl:col-end-2">
                    <div className="flex flex-col gap-2  ">
                      <label htmlFor="name">
                        Ime:{" "}
                        <span className="snap-mandatory text-red-500">*</span>
                      </label>
                      <input
                        className={`ml-2 h-[37px] rounded-md ${
                          errors.includes("first_name")
                            ? "border-red-500 focus:border-red-500"
                            : "border-none focus:border-none"
                        }  focus:ring-0 bg-croonus-5 max-xl:mx-3`}
                        type="text"
                        id="name"
                        name="first_name"
                        value={formData.first_name}
                        onChange={formChangeHandler}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="surname">
                        Prezime:{" "}
                        <span className="snap-mandatory text-red-500">*</span>
                      </label>
                      <input
                        className={`ml-2 h-[37px] rounded-md ${
                          errors.includes("last_name")
                            ? "border-red-500 focus:border-red-500"
                            : "border-none focus:border-none"
                        }  focus:ring-0 bg-croonus-5 max-xl:mx-3`}
                        type="text"
                        id="surname"
                        name="last_name"
                        value={formData.last_name}
                        onChange={formChangeHandler}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="email">
                        Email:
                        <span className="snap-mandatory text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={formChangeHandler}
                        className={`ml-2 h-[37px] rounded-md ${
                          errors.includes("email")
                            ? "border-red-500 focus:border-red-500"
                            : "border-none focus:border-none"
                        }  focus:ring-0 bg-croonus-5 max-xl:mx-3`}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 max-xl:col-span-3 xl:col-span-1 xl:col-start-2 xl:col-end-3">
                    <div className="flex flex-col gap-2 max-xl:mt-2">
                      <label htmlFor="phone">
                        Telefon:
                        <span className="snap-mandatory text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={formChangeHandler}
                        className={`ml-2 h-[37px] rounded-md ${
                          errors.includes("phone")
                            ? "border-red-500 focus:border-red-500"
                            : "border-none focus:border-none"
                        }  focus:ring-0 bg-croonus-5 max-xl:mx-3`}
                      />
                    </div>
                    <div className="xl:grid xl:grid-cols-2 xl:gap-x-3">
                      <div className="flex flex-col gap-2 max-xl:mt-2">
                        <label htmlFor="address">
                          Adresa dostave:
                          <span className="snap-mandatory text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="address"
                          id="address"
                          value={formData.address}
                          onChange={formChangeHandler}
                          className={`ml-2 h-[37px] rounded-md ${
                            errors.includes("address")
                              ? "border-red-500 focus:border-red-500"
                              : "border-none focus:border-none"
                          }  focus:ring-0 bg-croonus-5 max-xl:mx-3`}
                        />
                      </div>
                      <div className="flex flex-col gap-2 max-xl:mt-2">
                        <label htmlFor="object_number">
                          Broj{" "}
                          <span className="snap-mandatory text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="object_number"
                          id="object_number"
                          value={formData.object_number}
                          onChange={formChangeHandler}
                          className={`ml-2 h-[37px] rounded-md ${
                            errors.includes("object_number")
                              ? "border-red-500 focus:border-red-500"
                              : "border-none focus:border-none"
                          }  focus:ring-0 bg-croonus-5 max-xl:mx-3`}
                        />
                      </div>
                    </div>
                    <div className="xl:grid xl:grid-cols-2 xl:gap-x-3">
                      <div className="flex flex-col gap-2 max-xl:mt-2">
                        <label htmlFor="zip_code">
                          Poštanski broj:
                          <span className="snap-mandatory text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="zip_code"
                          id="zip_code"
                          value={formData.zip_code}
                          onChange={formChangeHandler}
                          className={`ml-2 h-[37px] rounded-md ${
                            errors.includes("zip_code")
                              ? "border-red-500 focus:border-red-500"
                              : "border-none focus:border-none"
                          }  focus:ring-0 bg-croonus-5 max-xl:mx-3`}
                        />
                      </div>
                      <div className="flex flex-col gap-2 max-xl:mt-2">
                        <label htmlFor="town">
                          Grad{" "}
                          <span className="snap-mandatory text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="town"
                          id="town"
                          value={formData.town}
                          onChange={formChangeHandler}
                          className={`ml-2 h-[37px] rounded-md ${
                            errors.includes("town")
                              ? "border-red-500 focus:border-red-500"
                              : "border-none focus:border-none"
                          }  focus:ring-0 bg-croonus-5 max-xl:mx-3`}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="note">Napomena:</label>
                      <textarea
                        type="text"
                        name="note"
                        rows="2"
                        id="note"
                        value={formData.note}
                        onChange={formChangeHandler}
                        className="ml-2 rounded-md border-none focus:border-none focus:ring-0 bg-croonus-5 max-xl:mx-3"
                      />
                    </div>
                  </div>
                </div>
              )}
              {formData.type === "company" && (
                <div className="mt-4 grid grid-cols-2 gap-x-10 pb-4 max-xl:mx-3 max-xl:text-base">
                  <div className="flex flex-col gap-3 max-xl:col-span-3 xl:col-start-1 xl:col-end-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="company_name">
                        Naziv firme:
                        <span className="snap-mandatory text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="company_name"
                        id="company_name"
                        value={formData.company_name}
                        onChange={formChangeHandler}
                        className={`ml-2 h-[37px] rounded-md ${
                          errors.includes("company_name")
                            ? "border-red-500 focus:border-red-500"
                            : "border-none focus:border-none"
                        }  focus:ring-0 bg-croonus-5 max-xl:mx-3`}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="pib">
                        PIB:{" "}
                        <span className="snap-mandatory text-red-500">*</span>
                      </label>
                      <input
                        className={`ml-2 h-[37px] rounded-md ${
                          errors.includes("pib")
                            ? "border-red-500 focus:border-red-500"
                            : "border-none focus:border-none"
                        }  focus:ring-0 bg-croonus-5 max-xl:mx-3`}
                        type="text"
                        name="pib"
                        id="pib"
                        value={formData.pib}
                        onChange={formChangeHandler}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="maticni_broj">
                        Matični broj:{" "}
                        <span className="snap-mandatory text-red-500">*</span>
                      </label>
                      <input
                        className={`ml-2 h-[37px] rounded-md ${
                          errors.includes("maticni_broj")
                            ? "border-red-500 focus:border-red-500"
                            : "border-none focus:border-none"
                        }  focus:ring-0 bg-croonus-5 max-xl:mx-3`}
                        type="text"
                        name="maticni_broj"
                        id="maticni_broj"
                        value={formData.maticni_broj}
                        onChange={formChangeHandler}
                      />
                    </div>
                    <div className="flex flex-col gap-2  ">
                      <label htmlFor="name">
                        Ime:{" "}
                        <span className="snap-mandatory text-red-500">*</span>
                      </label>
                      <input
                        className={`ml-2 h-[37px] rounded-md ${
                          errors.includes("first_name")
                            ? "border-red-500 focus:border-red-500"
                            : "border-none focus:border-none"
                        }  focus:ring-0 bg-croonus-5 max-xl:mx-3`}
                        type="text"
                        id="name"
                        name="first_name"
                        value={formData.first_name}
                        onChange={formChangeHandler}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="surname">
                        Prezime:{" "}
                        <span className="snap-mandatory text-red-500">*</span>
                      </label>
                      <input
                        className={`ml-2 h-[37px] rounded-md ${
                          errors.includes("last_name")
                            ? "border-red-500 focus:border-red-500"
                            : "border-none focus:border-none"
                        }  focus:ring-0 bg-croonus-5 max-xl:mx-3`}
                        type="text"
                        id="surname"
                        name="last_name"
                        value={formData.last_name}
                        onChange={formChangeHandler}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 max-xl:col-span-3 xl:col-span-1 xl:col-start-2 xl:col-end-3">
                    <div className="flex flex-col gap-2 max-xl:mt-2">
                      <label htmlFor="email">
                        Email:
                        <span className="snap-mandatory text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={formChangeHandler}
                        className={`ml-2 h-[37px] rounded-md ${
                          errors.includes("email")
                            ? "border-red-500 focus:border-red-500"
                            : "border-none focus:border-none"
                        }  focus:ring-0 bg-croonus-5 max-xl:mx-3`}
                      />
                    </div>
                    <div className="flex flex-col gap-2 max-xl:mt-2">
                      <label htmlFor="phone">
                        Telefon:
                        <span className="snap-mandatory text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={formChangeHandler}
                        className={`ml-2 h-[37px] rounded-md ${
                          errors.includes("phone")
                            ? "border-red-500 focus:border-red-500"
                            : "border-none focus:border-none"
                        }  focus:ring-0 bg-croonus-5 max-xl:mx-3`}
                      />
                    </div>
                    <div className="xl:grid xl:grid-cols-2 xl:gap-x-3">
                      <div className="flex flex-col gap-2 max-xl:mt-2">
                        <label htmlFor="address">
                          Adresa dostave:
                          <span className="snap-mandatory text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="address"
                          id="address"
                          value={formData.address}
                          onChange={formChangeHandler}
                          className={`ml-2 h-[37px] rounded-md ${
                            errors.includes("address")
                              ? "border-red-500 focus:border-red-500"
                              : "border-none focus:border-none"
                          }  focus:ring-0 bg-croonus-5 max-xl:mx-3`}
                        />
                      </div>
                      <div className="flex flex-col gap-2 max-xl:mt-2">
                        <label htmlFor="object_number">
                          Broj{" "}
                          <span className="snap-mandatory text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="object_number"
                          id="object_number"
                          value={formData.object_number}
                          onChange={formChangeHandler}
                          className={`ml-2 h-[37px] rounded-md ${
                            errors.includes("object_number")
                              ? "border-red-500 focus:border-red-500"
                              : "border-none focus:border-none"
                          }  focus:ring-0 bg-croonus-5 max-xl:mx-3`}
                        />
                      </div>
                    </div>
                    <div className="xl:grid xl:grid-cols-2 xl:gap-x-3">
                      <div className="flex flex-col gap-2 max-xl:mt-2">
                        <label htmlFor="zip_code">
                          Poštanski broj:
                          <span className="snap-mandatory text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="zip_code"
                          id="zip_code"
                          value={formData.zip_code}
                          onChange={formChangeHandler}
                          className={`ml-2 h-[37px] rounded-md ${
                            errors.includes("zip_code")
                              ? "border-red-500 focus:border-red-500"
                              : "border-none focus:border-none"
                          }  focus:ring-0 bg-croonus-5 max-xl:mx-3`}
                        />
                      </div>
                      <div className="flex flex-col gap-2 max-xl:mt-2">
                        <label htmlFor="town">
                          Grad{" "}
                          <span className="snap-mandatory text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="town"
                          id="town"
                          value={formData.town}
                          onChange={formChangeHandler}
                          className={`ml-2 h-[37px] rounded-md ${
                            errors.includes("town")
                              ? "border-red-500 focus:border-red-500"
                              : "border-none focus:border-none"
                          }  focus:ring-0 bg-croonus-5 max-xl:mx-3`}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="note">Napomena:</label>
                      <textarea
                        type="text"
                        name="note"
                        rows="2"
                        id="note"
                        value={formData.note}
                        onChange={formChangeHandler}
                        className="ml-2 rounded-md border-none focus:border-none focus:ring-none bg-croonus-5 max-xl:mx-3"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
            {cartItems.length > 0 && (
              <>
                <div className="grid grid-cols-1 col-span-3 max-xl:row-start-3 max-xl:col-span-5 gap-y-3">
                  <span className="text-xl uppercase font-bold">
                    Odaberite način dostave:
                  </span>
                  <div className="bg-croonus-5 pt-7 pl-5 pb-5">
                    <div className="flex flex-col gap-2 relative">
                      {errors.includes("delivery") && (
                        <span
                          className={`${classes.errorMsg} absolute -top-5 text-red-500`}
                        >
                          {errorSelect}
                        </span>
                      )}
                      <div className="flex flex-col gap-1 max-xl:text-base">
                        {deliveryoptions.map((option) => (
                          <div
                            className="flex flex-row items-center gap-1"
                            key={option.type}
                          >
                            <input
                              type="radio"
                              name="delivery"
                              value={option.id}
                              id={"delivery" + option.id}
                              onChange={formChangeHandler}
                              className="h-3 w-3"
                            />
                            <label htmlFor={"delivery" + option.id}>
                              {option.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="text-xl uppercase font-bold">
                    Odaberite način plaćanja:
                  </span>
                  <div className="bg-croonus-5 pt-7 pl-5 pb-5">
                    <div className="flex flex-col gap-2 relative">
                      {errors.includes("payment") && (
                        <span
                          className={`${classes.errorMsg} absolute -top-5 text-red-500`}
                        >
                          {errorSelect}
                        </span>
                      )}
                      <div className="flex flex-col gap-1">
                        {(paymentoptions ?? []).map((option) => (
                          <div
                            className="flex flex-row items-center gap-1 text-base xl:text-sm"
                            key={option.id}
                          >
                            <input
                              type="radio"
                              name="payment"
                              value={option.id}
                              id={"payment" + option.id}
                              onChange={formChangeHandler}
                              className="h-3 w-3"
                            />
                            <label htmlFor={"payment" + option.id}>
                              {option.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* <div className="bg-white pt-7 pl-5 pb-5 pr-5">
                <div className="flex flex-col gap-2">
                  <h1 className="text-lg font-medium">Kupon:</h1>
                  <input
                    id="coupon"
                    type="text"
                    placeholder="-- Ovde unesite kupon"
                    className="h-[37px] w-full rounded-md border border-slate-300 bg-[#f7f8fa] px-2"
                  />
                  <button className="h-[37px] w-full rounded-md bg-[#333e48] font-medium text-white">
                    Aktiviraj kupon
                  </button>
                </div>
              </div> */}
                </div>
                <div></div>
              </>
            )}
            <div className="overflow-y-scroll max-h-[411px] col-span-5 bg-white max-xl:row-start-2 xl:col-span-2 xl:col-start-4 xl:col-end-6 xl:row-start-1 ">
              <span className="font-bold uppercase text-2xl">Korpa</span>
              <CartProductBox cartItems={cartItems} />
            </div>{" "}
            <div className="flex flex-col col-span-2 max-xl:row-start-4 max-xl:row-end-5 row-start-2 max-xl:col-span-5 row-end-3 col-start-4 gap-4 bg-croonus-5 px-3 mt-0 pt-7 pb-5">
              {" "}
              <span className=" text-xl font-bold uppercase">
                Vrednost Vaše korpe:
              </span>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center justify-between border-b-[1px] border-b-slate-100 py-1 max-xl:text-base">
                  <span className="text-sm font-medium max-xl:text-base">
                    Ukupna vrednost korpe:{" "}
                  </span>
                  <span className="mr-3 text-sm font-medium max-xl:text-base">
                    {currencyFormat(cartCost)}
                  </span>
                </div>
                <div className="flex flex-row items-center justify-between border-b-[1px] border-b-slate-100 py-1 max-xl:text-base">
                  <span className="text-sm font-medium max-xl:text-base">
                    Iznos dodatnog popusta u korpi:{" "}
                  </span>
                  <span className="mr-3 text-sm font-medium max-xl:text-base">
                    0,00 RSD
                  </span>
                </div>
                <div className="flex flex-row items-center justify-between border-b-[1px] border-b-slate-100 py-1">
                  <span className="text-sm font-medium max-xl:text-base">
                    Iznos koštanja transporta:{" "}
                  </span>
                  <span className="mr-3 text-sm font-medium max-xl:text-base">
                    0,00 RSD
                  </span>
                </div>{" "}
                <div className="flex flex-row items-center justify-between border-b-[1px] border-b-slate-100 py-1">
                  <span className="text-sm font-medium max-xl:text-base">
                    Ukupna vrednost korpe:
                  </span>
                  <span className="mr-3 text-xl font-medium max-xl:text-base">
                    {currencyFormat(cartCost)}
                  </span>
                </div>
                <div className="mt-2 flex gap-3 py-3 relative">
                  <input
                    type="radio"
                    id="agreed"
                    name="agreed"
                    onChange={formChangeHandler}
                    value={formData.agreed === "1" ? "" : "1"}
                    className="focus:ring-0 focus:border-none focus:outline-none text-croonus-2"
                  />
                  <label htmlFor="agreed">
                    Saglasan sam sa opštim uslovima korišćenja AKT ONLINE
                    SHOP-a.
                  </label>
                  {errors.includes("agreed") && (
                    <span
                      className={`${classes.errorMsg} text-red-500 -top-3.5 absolute `}
                    >
                      {errorCheck}
                    </span>
                  )}
                  <br />
                </div>
                <button
                  onClick={formSubmitHandler}
                  className="rounded-md border uppercase border-slate-300 bg-croonus-1 px-4 py-2 text-sm font-medium text-white hover:opacity-90"
                >
                  Potvrdi porudžbenicu{" "}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="nocontent-holder m-24">
              <div className="text-center">
                <span className="text-2xl font-medium">Vaša korpa</span>
              </div>
              <div className="mt-6 text-center text-lg font-medium">
                Trenutno ne postoji sadržaj u Vašoj korpi.
              </div>
              <div className="mt-10 text-center">
                <button className="rounded-[5rem] bg-croonus-1 px-4 py-2 text-white hover:bg-opacity-80">
                  <a href="/">Vrati se na početnu stranu.</a>
                </button>
              </div>
              <div className="help-container mt-10 text-center">
                <p className="font-medium">Pomoć pri kupovini:</p>
                <ul className="mt-2">
                  <li>
                    - Ukoliko Vam je potrebna pomoć u svakom trenutku nas možete
                    kontaktirati pozivom na broj call centra{" "}
                    {process.env.TELEPHONE}.
                  </li>
                  <li>- Pogledajte uputstvo za pomoć pri kupovini.</li>
                </ul>
              </div>
            </div>
          </>
        )}
        {loading && (
          <div className="fixed top-0 left-0 bg-black bg-opacity-40 h-screen w-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-3">
              <h1 className="text-xl text-white uppercase">
                Vaš zahtev se obrađuje...
              </h1>
              <i className="fa-solid fa-spinner animate-spin text-6xl text-white"></i>
            </div>
          </div>
        )}
      </div>
    </GoogleReCaptchaProvider>
  );
};

export default CheckoutPage;

export const getServerSideProps = async () => {
  return {
    props: {
      paymentoptions: await get("/checkout/payment-options").then(
        (response) => response?.payload
      ),
      deliveryoptions: await get("/checkout/delivery-options").then(
        (response) => response?.payload
      ),
    },
  };
};
