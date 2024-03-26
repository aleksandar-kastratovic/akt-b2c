"use client";
import { get, list } from "@/app/api/api";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import Cart from "../../assets/Icons/shopping-bag.png";
import { useCartContext } from "@/app/api/cartContext";
import Logo from "../../assets/logo.png";
import Wishlist from "../../assets/Icons/favorite.png";
import Link from "next/link";
import Search from "../../assets/Icons/search.png";
import User from "../../assets/Icons/user.png";
import { useRouter } from "next/navigation";
import Burger from "../../assets/Icons/burger.png";
import { convertHttpToHttps } from "@/helpers/convertHttpToHttps";
import { toast } from "react-toastify";
const NavigationMobile = () => {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [search, setSearch] = useState("");

  const [cart, , wishList] = useCartContext();
  const [wishListCount, setWishListCount] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [category, setCategory] = useState({ id: null, data: [] });
  const [activeSubcategory, setActiveSubcategory] = useState({
    id: null,
    data: [],
  });
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
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    const fetchSearchData = async () => {
      const data = await list("/products/search/list", { search }).then(
        (response) => {
          setSearchData(response?.payload?.items);
        }
      );
    };
    searchTerm?.length >= 3 && fetchSearchData();
  }, [search]);
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
    event.preventDefault();
    if (searchTerm?.length >= 3) {
      navigate(`/pretraga?query=${searchTerm}`);
      setSearchTerm("");
      setSearchOpen(false);
      setOpen(false);
      setSearch("");
    }
  };

  const getCartCount = useCallback(() => {
    get("/cart/badge-count")
      .then((response) => {
        setCartCount(response?.payload?.summary?.items_count ?? 0);
      })
      .catch((error) => console.warn(error));
  }, []);

  const getWishlistCount = useCallback(() => {
    get("/wishlist/badge-count")
      .then((response) => {
        setWishListCount(response?.payload?.summary?.items_count ?? 0);
      })
      .catch((error) => console.warn(error));
  }, []);

  useEffect(() => {
    getWishlistCount();
  }, [getWishlistCount, wishList]);

  useEffect(() => {
    getCartCount();
  }, [getCartCount, cart]);
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
              alt="burger-menu"
            />
          </div>
          <div className="pl-10 pb-2">
            <Link href="/">
              <Image src={Logo} width={150} height={150} />
            </Link>
          </div>
          <div className="flex items-center gap-5 relative">
            <Image
              src={Search}
              width={22}
              height={22}
              onClick={() => setSearchOpen(!searchOpen)}
              alt="search"
            />
            <Link href="/korpa">
              <Image src={Cart} width={35} height={35} alt="cart" />
            </Link>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-croonus-3 rounded-full px-1.5 text-sm">
                {cartCount}
              </span>
            )}
          </div>
        </div>
        <div
          className={
            searchOpen
              ? `h-full w-full flex items-center justify-start  absolute z-[61] bg-white shadow-black shadow-2xl transition-all duration-[550ms] translate-y-0`
              : `h-full w-full flex items-center justify-start  absolute z-[61] bg-white  transition-all duration-[550ms] -translate-y-[200%]`
          }
        >
          <form
            onSubmit={handleSearch}
            className="relative flex px-3 w-full items-center justify-between"
          >
            <div className="flex items-center justify-center gap-5 relative">
              <input
                type="text"
                placeholder="Pretraži proizvode"
                className="w-[300px] h-10 rounded-md border border-gray-300 focus:outline-none focus:border-croonus-2 focus:ring-0"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onInput={(e) => setSearch(e.target.value)}
              />
              {searchTerm?.length >= 1 && searchTerm?.length < 3 && (
                <div
                  className={`absolute top-[0.8rem] right-[2.25rem] text-xs text-red-500`}
                >
                  <span>Unesite najmanje 3 karaktera</span>
                </div>
              )}
              <i
                onClick={handleSearch}
                className="absolute right-2 cursor-pointer fa-solid fa-search text-gray-400"
              ></i>
            </div>
            <i
              className="fa-solid fa-xmark text-2xl cursor-pointer"
              onClick={() => {
                setSearchOpen(!searchOpen);
                setSearchTerm("");
                setSearch("");
              }}
            ></i>
          </form>
          {search.length >= 3 ? (
            <div className="absolute top-[3.5rem] w-full bg-white shadow-xl rounded-b-lg  ">
              <div className="flex flex-col gap-2 w-full relative">
                <div className="max-h-[400px] overflow-y-auto customscroll2">
                  {searchData?.length > 0
                    ? searchData.slice(0, 6).map((item) => (
                        <Link
                          key={item?.id}
                          href={`/${item?.categories[0]?.slug}/${item.slug}`}
                          className="h-[83px]"
                          onClick={() => {
                            setSearchTerm("");
                            setSearch("");
                            setSearchOpen(false);
                          }}
                        >
                          <div className="flex items-center justify-between h-[83px] p-2.5 hover:bg-croonus-2 cursor-pointer">
                            <div className="flex items-center p-1 gap-5 h-[83px]">
                              {item?.image[0] && (
                                <Image
                                  src={convertHttpToHttps(item?.image[0])}
                                  width={50}
                                  height={50}
                                  alt="Akt webshop"
                                  className="h-full"
                                />
                              )}

                              <p className="text-sm">{item.basic_data.name}</p>
                            </div>
                          </div>
                        </Link>
                      ))
                    : null}
                </div>
                {searchData?.length > 6 && (
                  <div
                    className="flex py-1.5 justify-center items-center sticky bottom-0 w-full bg-croonus-2 text-black hover:bg-opacity-90 cursor-pointer"
                    onClick={handleSearch}
                  >
                    {searchData?.length > 6 ? (
                      <span>
                        Prikaži sve rezultate ( još&nbsp;
                        {searchData.length - 6} )
                      </span>
                    ) : null}
                  </div>
                )}
              </div>
            </div>
          ) : null}
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

            <div className="flex items-center relative gap-5 mr-5">
            <Link href="/nalog">
              <Image src={User} width={35} height={35} />
              </Link>
              <Link href="/lista-zelja">
                {" "}
                <Image src={Wishlist} width={30} height={30} alt="favorite" />
              </Link>
             
              
              {wishListCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-croonus-3 rounded-full px-1.5 text-sm">
                  {wishListCount}
                </span>
              )}
            </div>
          </div>
          {/* <div className=" bg-[#f8f8fa] py-3">
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
          </div> */}
          {/*<form*/}
          {/*  className="w-[90%] mx-auto mt-10 relative"*/}
          {/*  onSubmit={handleSearch}*/}
          {/*>*/}
          {/*  <input*/}
          {/*    type="text"*/}
          {/*    className="w-full p-3 border placeholder:text-xs text-[16px] focus:outline-none placeholder:uppercase focus:ring-0 focus:border-black border-black"*/}
          {/*    placeholder="Pretražite kategoriju"*/}
          {/*    value={searchTerm}*/}
          {/*    onChange={(event) => setSearchTerm(event.target.value)}*/}
          {/*  />*/}
          {/*  <Image*/}
          {/*    src={Search}*/}
          {/*    width={18}*/}
          {/*    height={18}*/}
          {/*    className="absolute right-4 top-3"*/}
          {/*    onClick={handleSearch}*/}
          {/*    alt="search"*/}
          {/*  />*/}
          {/*</form>*/}
          <div className="pb-5 w-full flex flex-col gap-1 mx-auto mt-10 overflow-y-auto">
            {(categories ?? [])?.map((item) => {
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
                  <div className="flex flex-col mt-1 gap-2">
                    {isActive &&
                      category?.data?.length > 0 &&
                      category?.data?.map((item) => {
                        const isActiveSubCategory =
                          activeSubcategory?.id === item?.id;

                        return item?.children ? (
                          <div
                            className={
                              isActiveSubCategory
                                ? `bg-[#eeeee0] w-full`
                                : `w-full`
                            }
                          >
                            <div
                              className="w-[90%] py-2 mx-auto flex items-center justify-between pl-2"
                              onClick={() =>
                                setActiveSubcategory({
                                  id:
                                    activeSubcategory?.id === item?.id
                                      ? null
                                      : item?.id,
                                  data: item?.children,
                                })
                              }
                            >
                              <h1 className="text-sm font-medium">
                                {item?.name}
                              </h1>
                              <i className="fa-solid fa-chevron-right text-sm"></i>
                            </div>
                            {isActiveSubCategory &&
                              activeSubcategory.data?.length > 0 &&
                              activeSubcategory.data.map((item2) => {
                                return (
                                  <div className="w-full py-2 bg-white">
                                    <div className="w-[90%] mx-auto pl-4">
                                      <Link
                                        className="text-xs font-medium"
                                        href={`/${item2?.slug_path}`}
                                        onClick={() => {
                                          setOpen(false);
                                          setCategory({ id: null, data: [] });
                                        }}
                                      >
                                        {item2?.name}
                                      </Link>
                                    </div>
                                  </div>
                                );
                              })}
                          </div>
                        ) : (
                          <div className="w-full py-2">
                            <div className="w-[90%] mx-auto pl-2">
                              <Link
                                className="text-sm font-medium"
                                href={`/${item?.slug_path}`}
                                onClick={() => {
                                  setOpen(false);
                                  setCategory({ id: null, data: [] });
                                }}
                              >
                                {item?.name}
                              </Link>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </>
              ) : (
                <Link
                  className="text-base  font-medium uppercase"
                  href={`/${item?.slug_path}`}
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
            <Link href={`tel:+381313894222`}>
            <div className="flex items-center justify-center gap-3 py-2 w-full">
              <i className="fa-solid text-white fa-phone text-lg"></i>
              <p className="uppercase font-normal text-xs text-white">
                Pozovite nas
              </p>
            </div>
            </Link>
            <Link href={`mailto:prodaja@stefantekstil.rs`} className="text-black">
              <div className="flex items-center justify-center gap-3 py-2 w-full">
                <i className="fa-solid text-white fa-envelope text-lg"></i>
                <p className="uppercase font-normal text-xs text-white text-center">
                  Pišite nam
                </p>
              </div>
            </Link>
            </div>
        </div>
      </div>

      {(open || searchOpen) && (
        <div
          className="fixed top-0 left-0 bg-black bg-opacity-60 z-[190] w-screen h-screen"
          onClick={() => {
            setOpen(false);
            setSearchOpen(false);
          }}
        ></div>
      )}
    </>
  );
};

export default NavigationMobile;
