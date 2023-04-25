"use client";
import { get } from "@/app/api/api";
import Image from "next/image";
import { useState, useEffect } from "react";
import Cart from "../../assets/Icons/shopping-bag.png";
import Logo from "../../assets/logo.png";
import Wishlist from "../../assets/Icons/favorite.png";
import Link from "next/link";
import Search from "../../assets/Icons/search.png";
import User from "../../assets/Icons/user.png";
import { useRouter } from "next/navigation";
import Burger from "../../assets/Icons/burger.png";
const NavigationMobile = () => {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [subCategory, setSubcategory] = useState({ isOpen: false, data: [] });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchCategories = async () => {
      const data = await get("/categories/product/tree").then((response) =>
        setCategories(response?.payload)
      );
    };
    fetchCategories();
  }, []);
  const { push: navigate, asPath } = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event) => {
    setLoading(true);
    event.preventDefault();
    navigate(`/search?search=${searchTerm}`);
    setSearchTerm("");
    setSearchOpen(false);
    setOpen(false);
  };
  const [view, setView] = useState("");
  console.log(view);
  return (
    <>
      <div className="lg:hidden bg-white sticky top-0 z-[200] bg-opacity-80 backdrop-blur">
        <div className="flex w-[95%] py-2.5 mx-auto items-center justify-between relative">
          <div className="mt-0.5">
            <Image
              src={Burger}
              width={33}
              height={33}
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="pl-10 pb-2">
            <Link href="/">
              <Image src={Logo} width={150} height={150} />
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <Image
              src={Search}
              width={25}
              height={25}
              onClick={() => setSearchOpen(!searchOpen)}
            />
            <Link href="/korpa">
              <Image src={Cart} width={35} height={35} />
            </Link>
          </div>
        </div>
        <div
          className={
            searchOpen
              ? "absolute w-full flex items-center justify-center py-2 translate-y-0  bg-white shadow duration-500 transition-all"
              : "absolute w-full flex items-center justify-center py-2 -translate-y-[500%]  bg-white shadow duration-[700ms] transition-all"
          }
        >
          <form className="relative" onSubmit={handleSearch}>
            <input
              type="text"
              className="w-full p-3 border-l-0 border-t-0 border-r-0 border-b border-b-croonus-1 h-3 border-black focus:ring-0 focus:outline-none focus:border-b-croonus-1"
              placeholder="Pretraga"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <Image
              src={Search}
              width={18}
              height={18}
              className="absolute right-0 top-0.5"
              onClick={handleSearch}
            />
          </form>
        </div>
      </div>
      <div
        className={
          open
            ? "lg:hidden overflow-y-auto translate-x-0 transition-all duration-[550ms] bg-white fixed top-0 w-[85%] h-full left-0 z-[300]"
            : "lg:hidden -translate-x-full transition-all duration-[550ms] bg-white fixed top-0 w-[85%] h-full left-0 z-[300]"
        }
      >
        <div className="flex flex-col h-full">
          <div className="flex p-4 flex-row items-center justify-between">
            <i
              className="fa-solid fa-xmark text-2xl"
              onClick={() => setOpen(false)}
            ></i>
            <div className="flex items-center gap-5 mr-5">
              <Link href="/lista-zelja">
                {" "}
                <Image src={Wishlist} width={30} height={30} />
              </Link>
              <Image src={User} width={35} height={35} />
            </div>
          </div>
          <div className=" bg-[#f8f8fa] py-3">
            <div className="w-[90%] mx-auto flex flex-col gap-[20px]">
              <Link
                href="/novo"
                className="text-xl font-medium uppercase"
                onClick={() => {
                  setOpen(false);
                  setView("");
                }}
              >
                Novo
              </Link>
              <Link
                href="/akcija"
                className="text-xl font-medium uppercase"
                onClick={() => {
                  setOpen(false);
                  setView("");
                }}
              >
                Akcija
              </Link>
            </div>
          </div>
          <form
            className="w-[90%] mx-auto mt-10 relative"
            onSubmit={handleSearch}
          >
            <input
              type="text"
              className="w-full p-3 border focus:outline-none placeholder:uppercase focus:ring-0 focus:border-black border-black"
              placeholder="Pretražite kategoriju"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <Image
              src={Search}
              width={18}
              height={18}
              className="absolute right-4 top-4"
              onClick={handleSearch}
            />
          </form>
          <div className="pb-5 w-full flex flex-col gap-3 mx-auto mt-10 overflow-y-auto">
            {view === "" &&
              categories?.map((category) =>
                category?.children ? (
                  <div className=" w-full hover:bg-croonus-1 hover:text-white py-3 ">
                    <div
                      className="w-[90%] mx-auto flex justify-between items-center"
                      onClick={() => {
                        setSubcategory({
                          isOpen: true,
                          data: category?.children,
                        });
                        setView("subcategories");
                      }}
                    >
                      <p className="uppercase text-xl font-medium ">
                        {category?.name}
                      </p>

                      <i className="text-sm fa-solid fa-chevron-right"></i>
                    </div>
                  </div>
                ) : (
                  <div className="w-full hover:bg-croonus-1 hover:text-white py-3 ">
                    <div className=" w-[90%] mx-auto ">
                      <Link
                        href={`/kategorije/${category?.slug_path}`}
                        className="uppercase text-xl font-medium"
                        onClick={() => {
                          setOpen(false);
                          setView("");
                        }}
                      >
                        {category?.name}
                      </Link>
                    </div>
                  </div>
                )
              )}
            {view === "subcategories" && (
              <>
                <div className="bg-white sticky top-0">
                  <div
                    className="w-[90%] mx-auto   flex items-center justify-start gap-3"
                    onClick={() => setView("")}
                  >
                    <i className="fa-solid fa-chevron-left text-base"></i>
                    <h1 className="text-xl uppercase font-medium">Nazad</h1>
                  </div>
                </div>

                {subCategory.isOpen &&
                  subCategory?.data?.map((item) => (
                    <div className="flex flex-col">
                      {item?.children ? (
                        <div className="bg-croonus-2 pl-8 py-2 pr-5 flex items-center justify-between">
                          <Link
                            href={`/kategorije/${item?.slug_path}`}
                            className="text-xl font-medium hover:underline"
                            onClick={() => {
                              setOpen(false);
                              setView("");
                            }}
                          >
                            {item?.name}
                          </Link>
                          <i className="fa-solid fa-chevron-right text-sm"></i>
                        </div>
                      ) : (
                        <div className="bg-croonus-2 pl-8 py-2 pr-5 flex items-center justify-between">
                          <Link
                            href={`/kategorije/${item?.slug_path}`}
                            onClick={() => {
                              setOpen(false);
                              setView("");
                            }}
                          >
                            <h1 className="text-xl font-medium hover:underline">
                              {item?.name}
                            </h1>
                          </Link>
                          <i className="fa-solid fa-chevron-right text-sm"></i>
                        </div>
                      )}

                      <div className="mt-5 pl-2 ">
                        {item?.children
                          ? item?.children?.map((child) => (
                              <Link
                                href={`/kategorije/${child?.slug_path}`}
                                key={child?.id}
                                onClick={() => {
                                  setOpen(false);
                                  setView("");
                                }}
                              >
                                <div className="text-lg py-1 px-1 hover:bg-croonus-2 hover:font-medium">
                                  <p className="pl-12">{child?.name}</p>
                                </div>
                              </Link>
                            ))
                          : null}
                      </div>
                    </div>
                  ))}
              </>
            )}
          </div>
          <div className="w-full mt-auto bg-croonus-4 grid grid-cols-2 divide-x">
            <div className="flex items-center justify-center gap-3 py-4">
              <i className="fa-solid text-white fa-phone text-2xl"></i>
              <p className="uppercase font-normal text-white">Pozovite nas</p>
            </div>
            <div className="flex items-center justify-center gap-3 py-4">
              <i className="fa-solid text-white fa-envelope text-2xl"></i>
              <p className="uppercase font-normal text-white text-center">
                Pišite nam
              </p>
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="fixed top-0 left-0 bg-black bg-opacity-30 z-[2000] w-screen h-screen flex items-center justify-center">
          <div className="flex flex-col items-center justify-center bg-white rounded-lg p-10">
            <h1 className="text-black text-xl font-normal mb-5">
              Pretražujemo...
            </h1>
            <i className="fa-solid fa-spinner animate-spin text-4xl text-black"></i>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default NavigationMobile;
