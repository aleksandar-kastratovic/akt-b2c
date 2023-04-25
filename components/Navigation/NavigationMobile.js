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
  const [category, setCategory] = useState({ id: null, data: [] });
  const [subCategory, setSubcategory] = useState({ id: null, data: [] });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchCategories = async () => {
      const data = await get("/categories/product/tree").then((response) =>
        setCategories(response?.payload)
      );
    };
    fetchCategories();
  }, []);
  useEffect(() => {
    const disableBodyScroll = () => {
      if (open) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    };
    disableBodyScroll();
  }, [open]);
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
              width={22}
              height={22}
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
          <div className="flex p-4 flex-row items-center h-[60.81px] justify-between">
            <i
              className="fa-solid fa-xmark text-2xl"
              onClick={() => {
                setOpen(false);
                setCategory({ id: null, data: [] });
              }}
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
                className="text-base font-medium uppercase"
                onClick={() => {
                  setOpen(false);
                  setView("");
                }}
              >
                Novo
              </Link>
              <Link
                href="/akcija"
                className="text-base font-medium uppercase"
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
              className="w-full p-3 border placeholder:text-xs text-xs focus:outline-none placeholder:uppercase focus:ring-0 focus:border-black border-black"
              placeholder="Pretražite kategoriju"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <Image
              src={Search}
              width={18}
              height={18}
              className="absolute right-4 top-3"
              onClick={handleSearch}
            />
          </form>
          <div className="pb-5 w-full flex flex-col gap-1 mx-auto mt-10 overflow-y-auto">
            {categories.map((item) => {
              const isActive = category?.id === item?.id;
              return item?.children ? (
                <>
                  <div
                    className={
                      isActive ? `w-full bg-croonus-1 text-white` : `w-full`
                    }
                    onClick={() => {
                      setCategory({
                        id: category?.id === item?.id ? null : item?.id,
                        data: item?.children,
                      });
                      setSubcategory({
                        id: null,
                        data: category?.data?.children,
                      });
                    }}
                  >
                    <div className="w-[90%] py-2 mx-auto flex items-center justify-between">
                      <h1 className="text-base font-medium uppercase">
                        {item?.name}
                      </h1>
                      <i className="fa-solid fa-chevron-right text-sm"></i>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    {isActive &&
                      category?.data?.length > 0 &&
                      category?.data?.map((subItem) => {
                        return subItem?.children ? (
                          <div className="w-full bg-[#eeeee0] ">
                            <Link
                              className="text-sm  font-medium uppercase"
                              href={`/kategorije/${subItem?.slug_path}`}
                              onClick={() => {
                                setOpen(false);
                                setCategory({ id: null, data: [] });
                              }}
                            >
                              <div className="pl-2 w-[90%] py-2 mx-auto flex items-center justify-between">
                                {subItem?.name}

                                <i className="fa-solid fa-chevron-right text-sm"></i>
                              </div>
                            </Link>
                            {subItem?.children?.length > 0 &&
                              subItem?.children?.map((subSubItem) => {
                                return (
                                  <Link
                                    href={`/kategorije/${subSubItem?.slug_path}`}
                                    className="text-[11px]"
                                    onClick={() => {
                                      setOpen(false);
                                      setCategory({ id: null, data: [] });
                                    }}
                                  >
                                    <div className="w-full bg-white py-2">
                                      <div className="pl-4 w-[90%] mx-auto">
                                        {subSubItem?.name}
                                      </div>
                                    </div>
                                  </Link>
                                );
                              })}
                          </div>
                        ) : (
                          <Link
                            className="text-sm  font-medium uppercase"
                            href={`/kategorije/${subItem?.slug_path}`}
                            onClick={() => {
                              setOpen(false);
                              setCategory({ id: null, data: [] });
                            }}
                          >
                            {" "}
                            <div className="flex bg-[#eeeee0] flex-col gap-1">
                              <div className="pl-2 w-[90%] mx-auto  py-2">
                                {subItem?.name}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                  </div>
                </>
              ) : (
                <Link
                  className="text-base  font-medium uppercase"
                  href={`/kategorije/${item?.slug_path}`}
                  onClick={() => {
                    setOpen(false);
                    setCategory({ id: null, data: [] });
                  }}
                >
                  {" "}
                  <div className="w-full py-2">
                    <div className="w-[90%] mx-auto">{item?.name}</div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="w-full mt-auto bg-croonus-4 py-2 grid grid-cols-2 divide-x">
            <div className="flex items-center justify-center gap-3 py-2 w-full">
              <i className="fa-solid text-white fa-phone text-lg"></i>
              <p className="uppercase font-normal text-xs text-white">
                Pozovite nas
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 py-2 w-full">
              <i className="fa-solid text-white fa-envelope text-lg"></i>
              <p className="uppercase font-normal text-xs text-white text-center">
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
      {open && (
        <div
          className="fixed top-0 left-0 bg-black bg-opacity-60 z-[190] w-screen h-screen"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
};

export default NavigationMobile;
