"use client";
import { get } from "@/app/api/api";
import { useEffect, useState, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useCartContext } from "@/app/api/cartContext";
import Link from "next/link";
import Logo from "../../assets/logo.png";
import Image from "next/image";
import Wishlist from "../../assets/Icons/favorite.png";
import Cart from "../../assets/Icons/shopping-bag.png";
import Burger from "../../assets/Icons/burger.png";
import Search from "../../assets/Icons/search.png";
const NavigationDesktop = () => {
  const pathname = usePathname();
  const router = useRouter();
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
    event.preventDefault();
    navigate(`/pretraga?query=${searchTerm}`);
    setSearchTerm("");
  };

  useEffect(() => {
    if (pathname?.includes("/korpa/")) {
      getCartCount();
      router?.refresh();
    }
  }, [pathname]);

  return (
    <>
      <div className=" max-lg:hidden z-[100] lg:sticky lg:top-0">
        <div className="bg-croonus-1">
          <div className="w-[85%] flex items-center  justify-between mx-auto py-1">
            <a href={`tel:0313894222`} className="text-white text-sm">
              Call centar: 031 / 3894 - 222
            </a>
            <Link
              href="/nalog"
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
                  alt="burger-menu"
                />
              )}

              <Link href="/">
                {" "}
                <Image
                  src={Logo}
                  width={220}
                  height={220}
                  onClick={() => setOpen(false)}
                  alt="logo"
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
                  className="border-t-0 h-6 border-l-0 border-r-0 border-b bg-transparent text-black placeholder:text-black text-sm border-b-black focus:border-b-black w-60 focus:border-l-0 focus:border-t-0 focus:border-r-0 focus:ring-0 focus:outline-none placeholder:absolute placeholder:bottom-0 placeholder:left-2 font-light"
                ></input>
                <Image
                  src={Search}
                  width={25}
                  height={25}
                  className="absolute -right-10 bottom-0 cursor-pointer"
                  onClick={handleSearch}
                  alt="search"
                />
              </form>
              <div className="flex items-center gap-5">
                <div className="relative">
                  <Link href="/lista-zelja">
                    <Image src={Wishlist} width={35} height={35} alt="favorite"/>
                  </Link>
                  <span className="absolute text-sm -top-2 px-1.5 rounded-full -right-1 bg-yellow-200">
                    {wishListCount}
                  </span>
                </div>
                <div className="relative">
                  <Link href="/korpa">
                    <Image src={Cart} width={38} height={38} alt="cart"/>
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
          <div className="flex flex-col gap-3 2xl:max-h-[500px] 3xl:max-h-[680px] w-1/5 overflow-y-auto">
            <div className="flex flex-col mt-10 ">
              {/*<div>*/}
              {/*  <a href="/novo">*/}
              {/*    <h1 className="font-medium cursor-pointer uppercase px-3 text-2xl py-1 text-croonus-1 hover:bg-croonus-1 hover:text-white">*/}
              {/*      Novo*/}
              {/*    </h1>*/}
              {/*  </a>*/}
              {/*  <a href="/novo">*/}
              {/*    <h1 className="font-medium cursor-pointer uppercase px-3 text-2xl py-1 text-croonus-1 hover:bg-croonus-1 hover:text-white">*/}
              {/*      Akcija*/}
              {/*    </h1>*/}
              {/*  </a>*/}
              {/*</div>*/}
              <div className="flex flex-col mt-10">
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
                      href={`/kategorije/${item?.slug_path}`}
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
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-x-10 gap-y-10 2xl:gap-x-20 2xl:max-h-[500px] 3xl:max-h-[680px] self-start xl:ml-32 3xl:ml-20 hidescroll overflow-y-auto">
            {subCategory?.map((item) => (
              <div className="col-span-1 flex flex-col" key={item.id}>
                <Link
                  href={`/kategorije/${item?.slug_path}`}
                  onClick={() => setOpen(false)}
                >
                  <h1 className="text-xl font-light hover:underline">
                    {item?.name}
                  </h1>
                </Link>
                <div className="mt-5 pl-2 ">
                  {item?.children
                    ? item?.children?.map((child) => (
                        <Link
                          href={`/kategorije/${child?.slug_path}`}
                          key={child?.id}
                          onClick={() => setOpen(false)}
                        >
                          <div className="text-sm font-light py-1 px-1 hover:bg-croonus-2">
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
    </>
  );
};

export default NavigationDesktop;
