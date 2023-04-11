"use client";
import { get } from "@/app/api/api";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useCartContext } from "@/app/api/cartContext";
import Link from "next/link";
import Logo from "../../assets/logo.png";
import Image from "next/image";
import Wishlist from "../../assets/Icons/favorite.png";
import Cart from "../../assets/Icons/shopping-bag.png";
import Burger from "../../assets/Icons/burger.png";
import Search from "../../assets/Icons/search.png";
const NavigationDesktop = () => {
  const [categories, setCategories] = useState([]);
  const { push: navigate, asPath } = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [cart, , wishList] = useCartContext();
  const [wishListCount, setWishListCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [subCategory, setSubcategory] = useState();
  const [loading, setLoading] = useState(false);
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
  useEffect(() => {
    const fetchCategories = async () => {
      const data = await get("/categories/product/tree").then((response) =>
        setCategories(response?.payload)
      );
    };
    fetchCategories();
  }, []);
  const handleSearch = (event) => {
    setLoading(true);
    event.preventDefault();
    navigate(`/search?search=${searchTerm}`);
    setSearchTerm("");
  };
  return (
    <>
      <div className=" max-lg:hidden z-[100] lg:sticky lg:top-0">
        <div className="bg-croonus-1">
          <div className="w-[85%] flex items-center  justify-between mx-auto py-1">
            <span className="text-white text-sm">
              Call centar: 031 / 1234 432
            </span>
            <Link
              href="/moj-profil"
              className="text-white text-sm hover:underline"
            >
              Moj profil
            </Link>
          </div>
        </div>
        <div className="bg-white bg-opacity-90 backdrop-blur">
          <div className=" py-3 w-[85%] mx-auto  flex items-center justify-between">
            <div className="flex items-center gap-10">
              {open ? (
                <i
                  className="fa-solid fa-xmark text-4xl"
                  onClick={() => setOpen(false)}
                />
              ) : (
                <Image
                  src={Burger}
                  width={30}
                  height={30}
                  onClick={() => setOpen(!open)}
                />
              )}

              <Link href="/">
                {" "}
                <Image
                  src={Logo}
                  width={220}
                  height={220}
                  onClick={() => setOpen(false)}
                />
              </Link>
            </div>
            <div className="flex items-center gap-24 ">
              <form
                className="flex items-center gap-4 relative"
                onSubmit={handleSearch}
              >
                <input
                  type="text"
                  name="search"
                  placeholder="Unesite pojam za pretragu..."
                  value={searchTerm}
                  onChange={({ target }) => setSearchTerm(target.value)}
                  className="border-t-0 h-6 border-l-0 border-r-0 border-b bg-transparent text-black placeholder:text-black text-sm border-b-black focus:border-b-black w-60 focus:border-l-0 focus:border-t-0 focus:border-r-0 focus:ring-0 focus:outline-none placeholder:absolute placeholder:bottom-0 placeholder:left-2 "
                ></input>
                <Image
                  src={Search}
                  width={25}
                  height={25}
                  className="absolute -right-10 bottom-0"
                />
              </form>
              <div className="flex items-center gap-5">
                <div className="relative">
                  <Link href="/lista-zelja">
                    <Image src={Wishlist} width={35} height={35} />
                  </Link>
                  <span className="absolute text-sm -top-2 px-1.5 rounded-full -right-1 bg-yellow-200">
                    {wishListCount}
                  </span>
                </div>
                <div className="relative">
                  <Link href="/korpa">
                    <Image src={Cart} width={38} height={38} />
                  </Link>
                  <span className="absolute text-sm -top-2 px-1.5 rounded-full -right-1 bg-yellow-200">
                    {cartCount}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          open
            ? `translate-x-0 z-[99] flex h-screen w-screen transition-all duration-[600ms] fixed top-0 left-0 bg-white`
            : `-translate-x-full z-[99] flex h-screen w-screen transition-all duration-[600ms] fixed top-0 left-0 bg-white`
        }
      >
        <div className="w-[85%] h-[70%] my-auto mx-auto flex justify-start items-start">
          <div className="flex flex-col gap-3 2xl:max-h-[500px] 3xl:max-h-[656px] w-2/5 overflow-y-scroll">
            <div className="flex flex-col mt-10 ">
              {categories.map((item) => {
                return item?.children ? (
                  <span
                    key={item.id}
                    className="font-medium cursor-pointer uppercase px-3 text-2xl py-1 text-croonus-1 hover:bg-croonus-1 hover:text-white"
                    onClick={() => {
                      setSubcategory(item?.children);
                    }}
                  >
                    {item?.name}
                  </span>
                ) : (
                  <Link
                    href={`/kategorije/${item?.slug}`}
                    key={item?.id}
                    className="font-medium uppercase px-3 text-2xl py-1 text-croonus-1 hover:bg-croonus-1 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {item?.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-x-10 gap-y-10 2xl:gap-x-20 2xl:max-h-[500px] 3xl:max-h-[656px] self-start xl:ml-32 3xl:ml-20 overflow-y-scroll">
            {subCategory?.map((item) => (
              <div className="col-span-1 flex flex-col">
                <Link
                  href={`/kategorije/${item?.slug}`}
                  onClick={() => setOpen(false)}
                >
                  <h1 className="text-xl font-medium hover:underline">
                    {item?.name}
                  </h1>
                </Link>
                <div className="mt-5 pl-2 ">
                  {item?.children
                    ? item?.children?.map((child) => (
                        <Link
                          href={`/kategorije/${child?.slug}`}
                          key={child?.id}
                          onClick={() => setOpen(false)}
                        >
                          <div className="text-lg py-1 px-1 hover:bg-croonus-2">
                            <p className="">{child?.name}</p>
                          </div>
                        </Link>
                      ))
                    : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {loading ? (
        <div className="fixed top-0 left-0 bg-black bg-opacity-30 z-[2000] w-screen h-screen flex items-center justify-center">
          <div className="flex flex-col items-center justify-center bg-white rounded-lg p-20">
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

export default NavigationDesktop;
