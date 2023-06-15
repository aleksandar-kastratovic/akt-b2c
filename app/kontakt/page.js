"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { get, post } from "@/app/api/api";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";
import Image from "next/image";
import Map from "../../assets/mapa.png";
import { toast, ToastContainer } from "react-toastify";
const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState();
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);
  const [error, setError] = useState(true);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [open, setOpen] = useState(false);

  const verifyCaptcha = useCallback((token) => {
    setToken(token);
  }, []);

  const [formData, setFormData] = useState({
    page_section: "contact_page",
    customer_name: "",
    phone: "",
    email: "",
    mail_to: "",
    subject: "",
    company_sector: "",
    message: "",
    gcaptcha: token,
  });

  const formChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await post("/contact/contact_page", formData);
    if (res?.code === 200) {
      toast.success("Uspešno ste poslali poruku!", {
        autoClose: 3000,
        position: "top-center",
      });
      setLoading(false);
      setFormData({
        page_section: "contact_page",
        customer_name: "",
        phone: "",
        email: "",
        mail_to: "",
        subject: "",
        company_sector: "",
        message: "",
        gcaptcha: token,
      });
    } else {
      toast.error("Došlo je do greške, molimo Vas pokušajte ponovo!", {
        autoClose: 3000,
        position: "top-center",
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    setFormData({ ...formData, gcaptcha: token });
  }, [token]);

  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.CAPTCHAKEY}>
      <ToastContainer />
      <GoogleReCaptcha
        onVerify={verifyCaptcha}
        refreshReCaptcha={refreshReCaptcha}
      />
      <div className="w-[85%] mx-auto max-lg:w-[95%] ">
        <div className="text-xl font-normal text-white bg-croonus-1 max-lg:w-full w-1/4 pl-5 py-1 mt-4">
          <h1 className="">Budite u kontaktu sa nama</h1>
        </div>
        <div className="grid grid-cols-2  max-lg:divide-y lg:divide-x mt-8 gap-x-20">
          <div className="col-span-1 max-lg:col-span-2 w-full lg:pl-5">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <h1 className="text-xl font-normal">Pošaljite poruku.</h1>
                <p className="text-sm font-light">
                  Popunite formu ispod i kontaktiraćemo Vas u najkraćem roku.
                </p>
              </div>
              {error ? (
                <>
                  {" "}
                  <form
                    onSubmit={(e) => onSubmitHandler(e)}
                    className="grid grid-cols-2 max-lg:gap-x-5 lg:gap-x-10 gap-y-5 mt-10 lg:ml-5"
                  >
                    {" "}
                    <input
                      type="text"
                      value={formData.customer_name}
                      name="customer_name"
                      className="infoForm col-span-1 h-12 border-b border-b-black   border-l-0 border-t-0 border-r-0  placeholder:absolute placeholder:top-0 placeholder:left-2 placeholder:text-sm placeholder:font-medium placeholder:text-black focus:outline-none focus:ring-0"
                      placeholder="Ime i prezime*"
                      onChange={formChangeHandler}
                    />
                    <input
                      type="text"
                      value={formData.email}
                      name="email"
                      className="placeholder:top-0 col-span-1 h-12 border-b border-b-black   border-l-0 border-t-0 border-r-0  placeholder:absolute placeholder:left-2 placeholder:text-sm placeholder:font-medium placeholder:text-black focus:outline-none focus:ring-0"
                      placeholder="E-mail*"
                      onChange={formChangeHandler}
                    />
                    <input
                      type="text"
                      value={formData.phone}
                      name="phone"
                      className="h-12 border-b border-b-black   border-l-0 border-t-0 border-r-0 col-span-1  placeholder:absolute placeholder:top-0 placeholder:left-2 placeholder:text-sm placeholder:font-medium placeholder:text-black focus:outline-none focus:ring-0"
                      placeholder="Broj telefona*"
                      onChange={formChangeHandler}
                    />
                    <input
                      type="text"
                      value={formData.subject}
                      name="subject"
                      className="h-12 border-b border-b-black   border-l-0 border-t-0 border-r-0 col-span-1  placeholder:absolute placeholder:top-0 placeholder:left-2 placeholder:text-sm placeholder:font-medium placeholder:text-black focus:outline-none focus:ring-0"
                      placeholder="Naslov poruke*"
                      onChange={formChangeHandler}
                    />
                    <textarea
                      type="text"
                      value={formData.message}
                      name="message"
                      className="messageForm  col-span-2  placeholder:absolute placeholder:top-0 placeholder:left-2 placeholder:text-sm placeholder:font-medium placeholder:text-black focus:outline-none focus:ring-0 max-lg:w-full  border-b border-b-black border-l-0 border-t-0 border-r-0"
                      placeholder="Poruka*"
                      rows={"4"}
                      onChange={formChangeHandler}
                    />
                  </form>
                  <div className="mt-5 flex w-full items-center justify-end rounded-lg pb-5 uppercase">
                    {loading ? (
                      <i className="fas fa-spinner fa-spin text-croonus-1 text-2xl"></i>
                    ) : (
                      <button
                        onClick={onSubmitHandler}
                        className="flex items-center gap-3  bg-croonus-1 px-8 py-2 text-base  text-white"
                      >
                        Pošalji poruku
                      </button>
                    )}
                  </div>
                </>
              ) : (
                <div className=" messHolder col-span-2 h-[100%]">
                  <img
                    src="/icons/successmessage.png"
                    alt={process.env.COMPANY}
                    className="mt-10 h-[60px]"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="col-span-1 max-lg:col-span-2 w-full max-lg:pt-5 lg:pl-20">
            <div className="flex flex-col max-lg:items-center max-lg:justify-center max-lg:text-center gap-10">
              <div className="flex flex-col">
                <h1 className="text-xl font-normal">Pozovite nas</h1>
                <p className="text-sm font-light">
                  Popunite formu ispod i kontaktiraćemo Vas u najkraćem roku.
                </p>
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-normal">Pozovite nas</h1>
                <p className="text-sm font-light">
                  Popunite formu ispod i kontaktiraćemo Vas u najkraćem roku.
                </p>
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-normal">Pozovite nas</h1>
                <p className="text-sm font-light">
                  Popunite formu ispod i kontaktiraćemo Vas u najkraćem roku.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-10 mt-16 ">
          <div className="col-span-1 max-lg:col-span-2 w-full max-lg:pt-5 lg:pl-20 h-[450px]">
            <Image
              src={Map}
              alt={process.env.COMPANY}
              width={22000}
              height={22000}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1  pl-10 pt-3 bg-[#f5f5f6] max-lg:col-span-2 w-full max-lg:pt-5 flex flex-col justify-around">
            <div className="flex flex-col max-lg:items-center max-lg:justify-center max-lg:text-center gap-0">
              <h1 className="text-base font-medium">Arilje</h1>
              <p className="text-sm font-light">
                Put 22. avgusta bb, 31230 Arilje
              </p>
              <p className="text-sm font-light">031 / 3894 222</p>
              <p className="text-sm font-light">031 / 3891 946</p>
              <p className="text-sm font-light">prodaja@stefantekstil.rs</p>
            </div>
            <div className="flex flex-col max-lg:items-center max-lg:justify-center max-lg:text-center gap-0">
              <h1 className="text-base font-medium">Arilje</h1>
              <p className="text-sm font-light">
                Put 22. avgusta bb, 31230 Arilje
              </p>
              <p className="text-sm font-light">031 / 3894 222</p>
              <p className="text-sm font-light">031 / 3891 946</p>
              <p className="text-sm font-light">prodaja@stefantekstil.rs</p>
            </div>
            <div className="flex flex-col max-lg:items-center max-lg:justify-center max-lg:text-center gap-0">
              <h1 className="text-base font-medium">Arilje</h1>
              <p className="text-sm font-light">
                Put 22. avgusta bb, 31230 Arilje
              </p>
              <p className="text-sm font-light">031 / 3894 222</p>
              <p className="text-sm font-light">031 / 3891 946</p>
              <p className="text-sm font-light">prodaja@stefantekstil.rs</p>
            </div>
          </div>
        </div>
      </div>
    </GoogleReCaptchaProvider>
  );
};
export default ContactPage;
