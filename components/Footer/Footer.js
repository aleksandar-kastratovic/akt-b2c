"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { post } from "@/app/api/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import Image1 from "../../assets/Icons/american.png";
import Image2 from "../../assets/Icons/visa.png";
import Image3 from "../../assets/Icons/master.png";
import Image4 from "../../assets/Icons/bancaIntesa.png";
import Image5 from "../../assets/Icons/img.png";
import Image6 from "../../assets/Icons/img1.png";
import Image7 from "../../assets/Icons/img3.png";
import Image8 from "../../assets/Icons/img4.png";
const Footer = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    post("/newsletter", {
      email: data.email,
    })
      .then((response) => {
        reset();
        toast.success(response?.payload?.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setLoading(false);
      })
      .catch((error) => console.warn(error));
  };
  return (
    <>
      <div className="max-lg:mt-0 mt-40 w-[95%] lg:w-[60%] mx-auto border-t border-t-black max-lg:border-t-0 ">
        <div className="grid grid-cols-2 gap-x-20 items-center justify-center lg:justify-around max-lg:mt-0 mt-10 ">
          <div className="flex flex-col col-span-2 lg:col-span-1 max-lg:items-center gap-5 border-r-black border-r max-lg:border-r-0 max-lg:pr-0 pr-20 3xl:pr-32">
            <div className="max-lg:mt-10">
              <Image src={Logo} width={350} height={350} />
            </div>
            <div className="flex flex-col max-lg:items-center gap-1 ">
              <div className="flex max-lg:flex-col items-center gap-5">
                <span className="uppercase text-sm font-normal">
                  {process.env.COMPANY} |
                </span>
                <span className="text-sm font-normal">
                  {process.env.ADDRESS} |
                </span>
                <span className=" text-sm ffont-normal">
                  {process.env.TOWN}
                </span>
              </div>
              <div className="flex max-lg:flex-col items-center gap-5">
                <span className=" text-sm font-normal">
                  PIB: {process.env.PIB} |
                </span>
                <span className=" text-sm font-normal">
                  MB: {process.env.MB} |
                </span>
                <span className="text-sm font-normal">
                  e-mail: {process.env.EMAIL}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <i className="fa-brands fa-facebook-f text-3xl text-black hover:text-croonus-1 cursor-pointer"></i>
              <i className="fa-brands fa-instagram text-3xl text-black hover:text-croonus-1 cursor-pointer"></i>
              <i className="fa-brands fa-twitter text-3xl text-black hover:text-croonus-1 cursor-pointer"></i>
            </div>
          </div>
          <div className="flex max-lg:border-b max-lg:border-b-black max-lg:py-10 col-span-2 max-lg:row-start-1 lg:col-span-1 flex-col gap-5 self-start max-lg:items-center max-lg:mt-10">
            <h1 className="text-2xl font-medium">Newsletter</h1>
            <p>Pratite dešavanja iz našeg svakodnevnog poslovanja.</p>
            {loading ? (
              <div>
                <i className="fa-solid fa-spinner text-xl animate-spin"></i>
              </div>
            ) : (
              <>
                <form
                  className="flex flex-col justify-center lg:flex-row items-center w-full"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Vaša e-mail adresa"
                    {...register("email", {
                      required: true,
                      validate: {
                        validEmail: (value) => {
                          const currentEmails = value
                            .split(",")
                            .filter((e) => e && e.trim());
                          const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/i;
                          for (let i = 0; i < currentEmails.length; i++) {
                            if (
                              !regex.test(currentEmails[i].replace(/\s/g, ""))
                            ) {
                              return false;
                            }
                          }
                        },
                        emailLength: (value) => {
                          const currentEmails = value
                            .split(",")
                            .filter((e) => e && e.trim());
                          if (currentEmails.length > 10) {
                            return false;
                          }
                        },
                      },
                    })}
                    className="max-lg:w-full max-lg:py-2 w-full pl-5 placeholder:text-black placeholder:text-sm border border-black self-stretch focus:ring-0 focus:outline-none focus:border-black"
                  />
                  <button className="bg-black max-lg:mt-2 max-lg:w-full max-lg:py-2 px-12 text-base py-3 text-white hover:bg-opacity-80">
                    Prijavi
                  </button>
                </form>
                <div className="flex items-center gap-5">
                  <input type="checkbox"></input> Slažem se sa pravilima
                  privatnosti.
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="max-lg:hidden lg:w-[90%] mt-8 text-white text-base py-3 mx-auto bg-croonus-4 flex max-lg:flex-col justify-center items-center gap-10">
        <Link href="/pomoc-pri-kupovini">Pomoć pri kupovini</Link>
        <Link href="/uslovi">Uslovi korišćenja</Link>
        <Link href="/kolacici">Politika o kolačićima</Link>
        <Link href="/podesavanje-kolacica">Podešavanje kolačića</Link>
        <Link href="/politika-privatnosti">Politika privatnosti</Link>
        <Link href="/nacini-placanja">Načini plaćanja</Link>
        <Link href="/o-nama">O nama</Link>
        <Link href="/kontakt">Kontakt</Link>
      </div>
      <div
        className="bg-croonus-4 py-5 justify-center text-white text-center font-normal flex items-center gap-5 lg:hidden mt-10"
        onClick={() => setOpen(!open)}
      >
        <span className="text-center">Dodatne informacije</span>
        <i className="fa-solid fa-chevron-down text-white"></i>
      </div>
      {open && (
        <div className="bg-croonus-4 translate-y-0 transition-all  justify-center text-white pb-5 text-center font-normal flex flex-col items-center gap-5 lg:hidden">
          <Link href="/pomoc-pri-kupovini">Pomoć pri kupovini</Link>
          <Link href="/uslovi">Uslovi korišćenja</Link>
          <Link href="/kolacici">Politika o kolačićima</Link>
          <Link href="/podesavanje-kolacica">Podešavanje kolačića</Link>
          <Link href="/politika-privatnosti">Politika privatnosti</Link>
          <Link href="/nacini-placanja">Načini plaćanja</Link>
          <Link href="/o-nama">O nama</Link>
          <Link href="/kontakt">Kontakt</Link>
        </div>
      )}
      <div className="flex items-center justify-center py-5 gap-5">
        <div className="">
          <Image
            src={Image1}
            className="w-[60%] lg:w-[70%] object-scale-down"
          />
        </div>
        <div className="">
          <Image
            src={Image2}
            className="w-[60%] lg:w-[70%] object-scale-down"
          />
        </div>
        <div className="">
          <Image
            src={Image3}
            className="w-[60%] lg:w-[70%] object-scale-down"
          />
        </div>
        <div className="w-[60%] lg:w-[10%]">
          <Image src={Image4} className=" object-scale-down" />
        </div>
        <div className="">
          <Image
            src={Image5}
            className="w-[60%] lg:w-[70%] object-scale-down"
          />
        </div>
        <div className="">
          <Image
            src={Image6}
            className="w-[60%] lg:w-[70%] object-scale-down"
          />
        </div>
        <div className="">
          <Image
            src={Image7}
            className="w-[60%] lg:w-[70%] object-scale-down"
          />
        </div>
        <div className="">
          <Image
            src={Image8}
            className="w-[60%] lg:w-[70%] object-scale-down"
          />
        </div>
      </div>
      <div className="w-[50%] mx-auto"></div>
      <div className="w-[95%] lg:w-[80%] mx-auto">
        <p className="text-xs mt-5">
          Cene na sajtu su iskazane u dinarima sa uračunatim porezom, a plaćanje
          se vrši isključivo u dinarima, isporuka se vrši samo na teritoriji
          Republike Srbije. Nastojimo da budemo što precizniji u opisu
          proizvoda, prikazu slika i samih cena, ali ne možemo garantovati da su
          sve informacije kompletne i bez grešaka. Svi artikli prikazani na
          sajtu su deo naše ponude i ne podrazumeva se da su dostupni u svakom
          trenutku. Raspoloživost robe možete proveriti pozivanjem call centra
          po ceni lokalnog poziva.
        </p>
        <div className="text-sm text-center mt-6">
          2023 AKT DOO | Sva prava zadržana. Powered by{" "}
          <a className="underline font-medium" href="https://croonus.com">
            Croonus Technologies
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
