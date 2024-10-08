"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { post } from "@/app/api/api";
import { format } from "date-fns";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../../public/logo.png";
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
  const currentYear = format(new Date(), "yyyy");
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setError,
    formState: {
      errors,
      isSubmitting: isSubmitted,
      isSubmitSuccessful,
      isValid,
    },
  } = useForm();

  const onSubmit = (data) => {
    setError();
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

  const handleError = () => {
    toast.error("Unesite validnu e-mail adresu.", {
      position: "top-center",
    });
  };

  return (
    <>
      <div className="max-lg:mt-0 mt-[5rem] w-[95%] lg:w-[60%] mx-auto border-t border-t-black max-lg:border-t-0 text-croonus-1">
        <div className="grid grid-cols-2 gap-x-20 items-center justify-center lg:justify-around max-lg:mt-0 mt-10 ">
          <div className="flex flex-col col-span-2 lg:col-span-1 max-lg:items-center gap-5 border-r-black border-r max-lg:border-r-0 max-lg:pr-0 pr-20 3xl:pr-32">
            <div className="max-lg:mt-10">
              <Image src={Logo} width={250} height={250} />
            </div>
            <div className="flex flex-col max-lg:items-center gap-1 max-md:text-sm">
              <div className="flex max-lg:flex-row items-center gap-5">
                <span className="uppercase text-sm font-normal">
                  {process.env.COMPANY} |
                </span>
                <div className="text-sm font-normal">
                  <Link
                    href={`https://www.google.com/maps/place/Stefan+ku%C4%87ni+tekstil+Arilje+-+AKT+d.o.o./@43.7588672,20.06973,14z/data=!4m10!1m2!2m1!1s22+avgusta+arilje!3m6!1s0x475783202233eed5:0x350be1a19d9fe701!8m2!3d43.7627428!4d20.0954014!15sChEyMiBhdmd1c3RhIGFyaWxqZVoTIhEyMiBhdmd1c3RhIGFyaWxqZZIBDmNsb3RoaW5nX3N0b3Jl4AEA!16s%2Fg%2F11c1p2kh6x?entry=ttu`}
                    target={`_blank`}
                  >
                    {" "}
                    {process.env.ADDRESS} |
                  </Link>
                </div>
                <span className=" text-sm ffont-normal">
                  {process.env.TOWN}
                </span>
              </div>
              <div className="flex max-lg:flex-row items-center gap-2">
                <span className=" text-sm font-normal">
                  PIB: {process.env.PIB} |
                </span>
                <span className=" text-sm font-normal">
                  MB: {process.env.MB} |
                </span>
              </div>
              <Link
                href={`mailto:${process.env.EMAIL}`}
                className="text-sm font-normal"
              >
                e-mail: {process.env.EMAIL}
              </Link>
            </div>
            <div className="flex items-center gap-10">
              <Link
                href={`https://www.facebook.com/STEFAN.DOO.ARILJE`}
                rel={`noopener noreferrer nofollow`}
                target={`_blank`}
              >
                {" "}
                <i className="fa-brands fa-facebook-f text-3xl text-croonus-1 cursor-pointer"></i>
              </Link>
              <Link
                href={`https://www.instagram.com/stefantekstil.rs/`}
                rel={`noopener noreferrer nofollow`}
                target={`_blank`}
              >
                {" "}
                <i className="fa-brands fa-instagram text-3xl text-croonus-1 cursor-pointer"></i>
              </Link>
            </div>
          </div>
          <div className="flex  max-lg:py-0  col-span-2 max-lg:row-start-1 lg:col-span-1 flex-col gap-5 self-start max-lg:items-center max-lg:mt-10">
            <h3 className="text-2xl font-medium text-croonus-1">Newsletter</h3>
            <p className="max-lg:text-center text-croonus-1 max-md:text-sm">
              Pratite dešavanja iz našeg svakodnevnog poslovanja.
            </p>
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
                  <button
                    onClick={() => {
                      if (!isValid && !isSubmitted && !isSubmitSuccessful) {
                        handleError();
                      }
                    }}
                    className="bg-croonus-1 max-lg:mt-2 max-lg:w-full max-lg:py-2 w-[16rem] text-base py-3 text-white hover:bg-opacity-80"
                  >
                    Prijavite se!
                  </button>
                </form>
                <div className="md:hidden w-[80%] mx-auto border border-l-0 border-t-0 border-r-0 border-b-croonus-1 pt-6"></div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="max-lg:hidden lg:w-[90%] mt-8 text-white text-base py-3 mx-auto bg-croonus-4 flex max-lg:flex-col justify-center items-center gap-10">
        <Link className={`hover:underline`} href="/strana/pomoc-pri-kupovini">
          Pomoć pri kupovini
        </Link>
        <Link className={`hover:underline`} href="/strana/uslovi-koriscenja">
          Uslovi korišćenja
        </Link>
        <Link
          className={`hover:underline`}
          href="/strana/politika-o-kolacicima"
        >
          Politika o kolačićima
        </Link>
        <Link className={`hover:underline`} href="/strana/politika-privatnosti">
          Politika privatnosti
        </Link>
        <Link
          className={`hover:underline`}
          href="/strana/uslovi-koriscenja#nacin-placanja"
        >
          Načini plaćanja
        </Link>
        <Link className={`hover:underline`} href="/strana/o-nama">
          O nama
        </Link>
        <Link className={`hover:underline`} href="/kontakt">
          Kontakt
        </Link>
      </div>

      {/*<div*/}
      {/*  className={`flex flex-wrap items-center gap-2 w-[95%] mx-auto lg:w-[90%] justify-center mt-5`}*/}
      {/*>*/}
      {/*  <Link*/}
      {/*    className={`block px-2 py-1 bg-croonus-4 text-white hover:bg-opacity-80 font-light text-sm`}*/}
      {/*    href={`/spavaca-soba/jastucnice-4`}*/}
      {/*  >*/}
      {/*    Jastučnice*/}
      {/*  </Link>*/}
      {/*  <Link*/}
      {/*    className={`block px-2 py-1 bg-croonus-4 text-white hover:bg-opacity-80 font-light text-sm`}*/}
      {/*    href={`/spavaca-soba/posteljine-5/satenska-posteljina`}*/}
      {/*  >*/}
      {/*    Satenska posteljina*/}
      {/*  </Link>*/}
      {/*  <Link*/}
      {/*    className={`block px-2 py-1 bg-croonus-4 text-white hover:bg-opacity-80 font-light text-sm`}*/}
      {/*    href={`/spavaca-soba/posteljine-5/pamucne-posteljine`}*/}
      {/*  >*/}
      {/*    Pamučne posteljine*/}
      {/*  </Link>*/}
      {/*  <Link*/}
      {/*    className={`block px-2 py-1 bg-croonus-4 text-white hover:bg-opacity-80 font-light text-sm`}*/}
      {/*    href={`/spavaca-soba/prekrivaci-za-krevet/step-deka-4`}*/}
      {/*  >*/}
      {/*    Štep deka*/}
      {/*  </Link>*/}
      {/*  <Link*/}
      {/*    className={`block px-2 py-1 bg-croonus-4 text-white hover:bg-opacity-80 font-light text-sm`}*/}
      {/*    href={`/spavaca-soba/prekrivaci-za-krevet/frotirski-prekrivaci`}*/}
      {/*  >*/}
      {/*    Frotirski prekrivači*/}
      {/*  </Link>*/}
      {/*  <Link*/}
      {/*    className={`block px-2 py-1 bg-croonus-4 text-white hover:bg-opacity-80 font-light text-sm`}*/}
      {/*    href={`/deca/decije-posteljine`}*/}
      {/*  >*/}
      {/*    Dečije posteljine*/}
      {/*  </Link>*/}
      {/*  <Link*/}
      {/*    className={`block px-2 py-1 bg-croonus-4 text-white hover:bg-opacity-80 font-light text-sm`}*/}
      {/*    href={`/spavaca-soba`}*/}
      {/*  >*/}
      {/*    Spavaća soba*/}
      {/*  </Link>*/}
      {/*  <Link*/}
      {/*    className={`block px-2 py-1 bg-croonus-4 text-white hover:bg-opacity-80 font-light text-sm`}*/}
      {/*    href={`/kupatilski-tekstil`}*/}
      {/*  >*/}
      {/*    Kupatilski tekstil*/}
      {/*  </Link>*/}
      {/*  <Link*/}
      {/*    className={`block px-2 py-1 bg-croonus-4 text-white hover:bg-opacity-80 font-light text-sm`}*/}
      {/*    href={`/spavaca-soba/carsavi`}*/}
      {/*  >*/}
      {/*    Čaršavi*/}
      {/*  </Link>*/}
      {/*  <Link*/}
      {/*    className={`block px-2 py-1 bg-croonus-4 text-white hover:bg-opacity-80 font-light text-sm`}*/}
      {/*    href={`/spavaca-soba/carsavi/navlake-za-dusek-2`}*/}
      {/*  >*/}
      {/*    Navlake za dušek*/}
      {/*  </Link>*/}
      {/*</div>*/}

      <div
        className="bg-croonus-1 py-5 justify-center text-white text-center font-normal flex items-center gap-5 lg:hidden mt-10"
        onClick={() => setOpen(!open)}
      >
        <span className="text-center font-semibold">Dodatne informacije</span>
        <i className="fa-solid fa-chevron-down text-white"></i>
      </div>
      {open && (
        <div className="bg-[#2e2524] translate-y-0 transition-all max-md:text-xs justify-center text-white pb-5 text-center font-normal flex flex-col items-center gap-5 lg:hidden pt-3">
          <Link href="/strana/pomoc-pri-kupovini">Pomoć pri kupovini</Link>
          <Link href="/strana/uslovi-koriscenja">Uslovi korišćenja</Link>
          <Link href="/strana/politika-o-kolacicima">
            Politika o kolačićima
          </Link>
          <Link href="/strana/politika-privatnosti">Politika privatnosti</Link>
          <Link href="/strana/uslovi-koriscenja#nacin-placanja">
            Načini plaćanja
          </Link>
          <Link href="/strana/o-nama">O nama</Link>
          <Link href="/kontakt">Kontakt</Link>
        </div>
      )}

      <div className="flex flex-row justify-center items-center gap-5 w-full flex-wrap 3xl:w-[100%] xl:mt-[2rem]">
        <div className="w-[44px] h-[44px] relative">
          <Image
            src={Image5}
            alt="AKT"
            fill={true}
            style={{ objectFit: "contain" }}
            className="object-scale-down"
          />
        </div>
        <div className="w-[44px] h-[44px] relative">
          <Image
            src={Image6}
            alt="AKT"
            fill={true}
            style={{ objectFit: "contain" }}
            className="object-scale-down"
          />
        </div>
        <div className="w-[50px] h-[50px] relative">
          <Image
            src={Image7}
            alt="AKT"
            fill={true}
            style={{ objectFit: "contain" }}
            className="object-scale-down"
          />
        </div>
        <div className="w-[50px] h-[50px] relative">
          <Image
            src={Image8}
            alt="AKT"
            fill={true}
            style={{ objectFit: "contain" }}
            className="object-scale-down"
          />
        </div>

        <div className="w-[40px] h-[40px] relative">
          <Image
            src={Image1}
            alt="AKT"
            fill={true}
            style={{ objectFit: "contain" }}
            className="object-scale-down"
          />
        </div>

        <Link
          href="https://www.bancaintesa.rs"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <div className="w-[160px] h-[40px] relative">
            <Image
              src={Image4}
              alt="AKT"
              fill={true}
              style={{ objectFit: "contain" }}
              className="object-scale-down"
            />
          </div>
        </Link>
        <Link
          href="http://www.mastercard.com/rs/consumer/credit-cards.html"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <div className="w-[80px] h-[50px] relative">
            <Image
              src={Image3}
              alt="AKT"
              fill={true}
              style={{ objectFit: "contain" }}
              className="object-scale-down max-sm:w-[100%]"
            />
          </div>
        </Link>
        <Link
          href="https://rs.visa.com/pay-with-visa/security-and-assistance/protected-everywhere.html"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <div className="w-[50px] h-[50px] relative">
            <Image
              src={Image2}
              alt="AKT"
              fill={true}
              style={{ objectFit: "contain" }}
              className="object-scale-down"
            />
          </div>
        </Link>
      </div>
      <div className="w-[50%] mx-auto"></div>
      <div className="w-[95%] lg:w-[80%] mx-auto">
        <p className="text-xs mt-5 max-md:hidden">
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
          &copy; {currentYear} AKT DOO | Sva prava zadržana. Powered by{" "}
          <Link className="underline font-medium" href="https://croonus.com">
            Croonus Technologies
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
