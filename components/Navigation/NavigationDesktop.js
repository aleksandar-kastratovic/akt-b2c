"use client";
import { get, list } from "@/app/api/api";
import { useEffect, useState, useCallback, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useCartContext } from "@/app/api/cartContext";
import Link from "next/link";
import Logo from "../../assets/logo.png";
import Image from "next/image";
import Wishlist from "../../assets/Icons/favorite.png";
import Cart from "../../assets/Icons/shopping-bag.png";
import Burger from "../../assets/Icons/burger.png";
import Search from "../../assets/Icons/search.png";
import { toast } from "react-toastify";
import useDebounce from "@/hooks/useDebounce";
import { currencyFormat } from "@/helpers/functions";


const NavigationDesktop = () => {
  const pathname = usePathname();

  const [categories, setCategories] = useState([]);
  const [landingPagesList, setLandingPagesList] = useState([]);
  const { push: navigate, asPath } = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [cart, , wishList] = useCartContext();
  const [wishListCount, setWishListCount] = useState(0);
  const [background, setBackground] = useState("transparent");
  const [subCategory, setSubcategory] = useState();

  let category = false;
  if (pathname === "/") {
    category = false;
  } else {
    category = true;
  }

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

  useEffect(() => {
    const getLandingPages = async () => {
      const data = await list(`/landing-pages/list`).then((response) =>
        setLandingPagesList(response?.payload)
      );
    };
    getLandingPages();
  }, []);

  useEffect(() => {
    if (category) {
      setBackground("white");
    }

    function handleScroll() {
      if (category) {
        setBackground("white");
      } else {
        if (window.scrollY > 0 && !category) {
          setBackground("white");
        } else {
          setBackground("transparent");
        }
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [category, background]);


 const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm?.length >= 3) {
      router.push(`/pretraga?query=${searchTerm}`);
      setSearchTerm("");
    }
  };
  const [isActive, setIsActive] = useState(1);
  const [activeCategory, setActiveCategory] = useState();
  const [height, setHeight] = useState(0);


  useEffect(() => {
    if (pathname?.includes("/korpa/")) {
      getCartCount();
      router?.refresh();
    }
  }, [pathname]);

  useEffect(() => {
    const category = categories.filter((category) => category?.id === isActive);
    setIsActive(category[0]?.id);
  }, [isActive]);

  useEffect(() => {
    const slider = document.getElementById("slider");
    const sliderHeight = slider?.offsetHeight;
    setHeight(sliderHeight);
  });
  const [open, setOpen] = useState(false);
  const [isActiveSubcategory, setIsActiveSubcategory] = useState({
    id: undefined,
    slug: undefined,
  });
  const [activeSubSubCategory, setActiveSubSubCategory] = useState();
 

  useEffect(() => {
    if (category) {
      setBackground("white");
    }

    function handleScroll() {
      if (category) {
        setBackground("white");
      } else {
        if (window.scrollY > 0 && !category) {
          setBackground("white");
        } else {
          setBackground("transparent");
        }
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [category, background]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setVisible((scrollY === 0 && pathname === "/") || (open && scrollY > 0));
      pathname?.includes("/kategorija" || "/proizvod") &&
        setVisible(false) &&
        setOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open, pathname]);

  useEffect(() => {
    setVisible(true);
  }, [open]);

  useEffect(() => {
    if (categories) {
      setIsActive(categories[0]?.id);
      setActiveCategory(categories[0]);
    }
  }, [categories]);
  const router = useRouter();
  useEffect(() => {
    if (pathname?.includes("/korpa/")) {
      getCartCount();
      router?.refresh();
    }
  }, [pathname]);

  useEffect(() => {
    const handleMouseOutsideOfBrowserViewport = (event) => {
      if (event.clientY <= 0) {
        setOpen(false);
      }
    };

    window.addEventListener("mousemove", handleMouseOutsideOfBrowserViewport);
    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseOutsideOfBrowserViewport
      );
    };
  }, []);

  useEffect(() => {
    if (pathname?.includes("/kategorija" || "/proizvod")) {
      setOpen(false);
      setVisible(false);
    }
  }, [pathname]);

  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(false);

  const debouncedSearch = useDebounce(searchTerm, 500);


  useEffect(() => {
    if (searchTerm?.length > 0) {
      const getData = async (debouncedSearch) => {
        await list(`/products/search/list`, {
          search: debouncedSearch,
        }).then((response) => {
          setSearchData(response?.payload);
          setLoading(false);
         
        });
      };
      getData(debouncedSearch);
    }
  }, [debouncedSearch]);


  const searchRef = useRef(null);
  const searchImgRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        !searchImgRef.current.contains(event.target)
      ) {
        setSearchTerm("");
        setSearchData([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef]);
  
  console.log("konz", searchData)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        !searchImgRef.current.contains(event.target)
      ) {
        setSearchTerm("");
        setSearchData([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef]);


  return (
    <>
      <div className="fixed-menu-container">
        <div className=" max-lg:hidden z-[100] lg:sticky lg:top-0">
          <div className="bg-croonus-1">
            <div className="w-[85%] flex items-center  justify-between mx-auto py-1">
              <a href={`tel:0313894222`} className="text-white text-sm">
                Call centar: 031 / 3894 - 222
              </a>
              <a href="/nalog" className="text-white text-sm hover:underline">
                Moj profil
              </a>
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

                <a href="/">
                  {" "}
                  <Image
                    src={Logo}
                    width={220}
                    height={220}
                    onClick={() => setOpen(false)}
                    alt="logo"
                  />
                </a>
              </div>
              <div className="flex items-center gap-5 relative ">
                <form
                 
                  onSubmit={handleSearch}
                  className={`${
                    searchTerm?.length > 0 ? `w-[25rem]` : `w-60`
                } transition-all duration-500 relative`}

                >
                                <input
                    type="text"
                    placeholder="Unesite pojam za pretragu"
                    className={`bg-transparent border-l-0 w-full border-t-0 border-r-0 border-b ${
                        background === "white"
                            ? "border-b-black text-black"
                            : "border-b-black focus:border-b-black"
                    }  focus:ring-0 placeholder:text-sm text-sm p-0 focus:border-b-black  focus:outline-none`}
                    onInput={(event) => {
                      setSearchTerm(event.target.value);
                      setLoading(true);
                    }}
                    value={searchTerm}
                />
                  {searchTerm?.length < 3 && searchTerm?.length >= 1 && (
                    <span className={`absolute text-sm top-1 right-2 text-red-500`}>
                        Unesite bar 3 karaktera
                    </span>
                )}

                <div
                    ref={searchRef}
                    className={`${
                    searchTerm?.length > 0
                      ? `absolute flex flex-col h-[420px] hidescrollbar overflow-y-auto bg-white top-[30px] right-0 w-full border rounded-b-lg`
                      : `hidden`
                  } `}
                >
                {searchData?.items?.length > 0 && searchTerm?.length > 0 && (
                    <div className="w-[95%] mx-auto mt-5">
                      <h1 className="text-[1rem] font-normal">
                        Rezultati pretrage
                      </h1>
                      <div className="flex flex-col gap-5 mt-3 pb-5">
                        {searchData?.items?.slice(0, 6)?.map((item) => {
                          
                          return (
                            <Link
                              href={`/proizvod/${item?.slug_path}`}
                              onClick={(e) => {
                                setSearchData([]);
                                setSearchTerm("");
                              }}
                            >
                             <div className="flex flex-row items-center gap-5">
                                <div className="w-[60px] h-[60px] relative">
                                  <Image
                                    src={item?.image[0]}
                                    alt={``}
                                    fill
                                    className={`object-cover rounded-full`}
                                  />
                                </div>
                                <div className="flex flex-col gap-1">
                                  <h1 className="text-[0.9rem] font-normal">
                                    {item?.basic_data?.name}
                                  </h1>
                                  <h1 className="text-[0.9rem] w-fit bg-[#f8ce5d] px-2 font-bold text-center">
                                    {currencyFormat(
                                      item?.price?.price?.discount ??
                                        item?.price?.price?.original
                                    )}
                                  </h1>
                                </div>
                              </div>
                              </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  {loading && (
                    <div className={`w-[95%] mx-auto text-center mt-5`}>
                      <i
                        className={`fas fa-spinner fa-spin text-xl text-black`}
                      ></i>
                    </div>
                  )}
                  {!loading && (
                    <div
                      className={`sticky bottom-0 w-full bg-croonus-2 py-2 mt-auto text-center hover:bg-opacity-80`}
                    >
                                            <button
                        onClick={() => {
                          handleSearch();
                          setSearchData([]);
                        }}
                        className={` w-full h-full font-light text-center`}
                      >
                        Prikaži sve rezultate (
                        {searchData?.pagination?.total_items > 10
                          ? `još ${searchData?.pagination?.total_items - 10}`
                          : `Pretraži`}
                        )
                      </button>
                    </div>
                  )}
                </div>

           
                </form>
                <Image
                  ref={searchImgRef}
                  src={Search}
                  width={26}
                  height={26}
                  alt=""
                  onClick={handleSearch}
                  className={
                    background === "white"
                        ? "cursor-pointer "
                        : "cursor-pointer"
                  }
              />
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <a href="/lista-zelja">
                      <Image
                        src={Wishlist}
                        width={35}
                        height={35}
                        alt="favorite"
                      />
                    </a>
                    <span className="absolute text-sm -top-2 px-1.5 rounded-full -right-1 bg-yellow-200">
                      {wishListCount}
                    </span>
                  </div>
                  <div className="relative">
                    <a href="/korpa">
                      <Image src={Cart} width={38} height={38} alt="cart" />
                    </a>
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
              ? `translate-x-0 z-[99] flex h-screen w-fit transition-all duration-[600ms] fixed top-0 left-0 bg-white`
              : `-translate-x-full z-[99] flex h-screen w-screen lg:w-[76%] 2xl:w-[64%] transition-all duration-[600ms] fixed top-0 left-0 bg-white`
          }
        >
          <div className="w-full h-[70%] my-auto mx-auto flex justify-start items-start">
            <div className="flex flex-col gap-3 2xl:max-h-[500px] 3xl:max-h-[680px] min-w-max overflow-y-scroll hidescroll  h-full">
              <div className="flex flex-col">
                <div className="flex flex-col mt-10 border-r-4 border-[#f9f9f9] pr-4">
                  {categories.map((item) => {
                    return item?.children ? (
                      <a
                        key={item.id}
                        href={`/kategorije/${item?.slug_path}`}
                        className="font-medium cursor-pointer uppercase px-3 text-2xl py-1 text-croonus-1 hover:bg-croonus-1 hover:text-white "
                        onClick={() => setOpen(false)}
                        onMouseEnter={() => {
                          setTimeout(() => {
                            setSubcategory(item?.children);
                          }, 200);
                        }}
                      >
                        {item?.name}
                      </a>
                    ) : (
                      <a
                        href={`/kategorije/${item?.slug_path}`}
                        key={item?.id}
                        className="font-medium uppercase px-3 text-2xl py-1 text-croonus-1 hover:bg-croonus-1 hover:text-white"
                        onClick={() => setOpen(false)}
                      >
                        {item?.name}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            {subCategory ? (
              <>
               {subCategory?.some(
              (item) => item?.children && item?.children.length > 0
            ) ? (
              <div className="grid grid-cols-2 xl:grid-cols-3 3xl:grid-cols-3 gap-x-10 gap-y-[18px] 2xl:gap-x-20 2xl:max-h-[500px] 3xl:max-h-[680px] self-start xl:pl-[22px] 3xl:pl-[30px] hidescroll overflow-y-scroll h-[100%] my-auto transition ease-in-out delay-150 bg-white md:w-[700px] md:max-w-[700px] xl:w-[870px] xl:max-w-[870px]">
                {subCategory?.map((item) => (
                  <div className="col-span-1 flex flex-col" key={item.id}>
                    <a
                      href={`/kategorije/${item?.slug_path}`}
                      onClick={() => setOpen(false)}
                    >
                      <h1 className="text-xl font-light hover:underline">
                        {item?.name}
                      </h1>
                    </a>
                    <div className="mt-5 pl-2 ">
                      {item?.children
                        ? item?.children?.map((child) => (
                            <a
                              href={`/kategorije/${child?.slug_path}`}
                              key={child?.id}
                              onClick={() => setOpen(false)}
                            >
                              <div className="text-sm font-light py-1 px-1 hover:bg-croonus-2 whitespace-nowrap w-max">
                                <p className="">{child?.name}</p>
                              </div>
                            </a>
                          ))
                        : null}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 xl:grid-cols-3 3xl:grid-cols-3 gap-x-10  gap-y-[2rem] 2xl:gap-x-20 self-start xl:pl-[22px] 3xl:pl-[30px] hidescroll overflow-y-scroll transition ease-in-out delay-150  md:w-[700px] md:max-w-[700px] xl:w-[870px] xl:max-w-[870px] ">
                {subCategory?.map((item) => (
                  <div className="col-span-1 flex flex-col h-fit" key={item.id}>
                    <a
                      href={`/kategorije/${item?.slug_path}`}
                      onClick={() => setOpen(false)}
                    >
                      <h1 className="text-xl font-light hover:underline">
                        {item?.name}
                      </h1>
                    </a>
                    <div className="mt-2 pl-2 ">
                      {item?.children
                        ? item?.children?.map((child) => (
                            <a
                              href={`/kategorije/${child?.slug_path}`}
                              key={child?.id}
                              onClick={() => setOpen(false)}
                            >
                              <div className="text-sm font-light py-1 px-1 hover:bg-croonus-2">
                                <p className="">{child?.name}</p>
                              </div>
                            </a>
                          ))
                        : null}
                    </div>
                  </div>
                ))}
              </div>
            )}</>
            ) : null}
           
          </div>
          <div className="fixed bottom-0 bg-croonus-1 text-white w-full py-1">
            <div className="px-1 mx-auto flex">
              {landingPagesList?.items?.map((item, index) => {
                return (
                  <div key={index}>
                    <a
                      href={`/promo/${item?.slug}`}
                      key={item?.id}
                      className="font-medium uppercase px-3 text-xl py-1"
                      onClick={() => setOpen(false)}
                    >
                      {item?.name}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationDesktop;
