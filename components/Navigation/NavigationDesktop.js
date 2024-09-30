"use client";
import { get, list, post } from "@/app/api/api";
import { useEffect, useState, useCallback, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useCartContext } from "@/app/api/cartContext";
import Link from "next/link";
import Image from "next/image";
import Wishlist from "../../assets/Icons/favorite.png";
import Cart from "../../assets/Icons/shopping-bag.png";
import Burger from "../../assets/Icons/burger.png";
import Search from "../../assets/Icons/search.png";
import { toast } from "react-toastify";
import useDebounce from "@/hooks/useDebounce";
import { currencyFormat } from "@/helpers/functions";
import {
  useCartBadge,
  useCategoryTree,
  useLandingPages,
  useSearch,
  useWishlistBadge,
} from "@/hooks/akt.hooks";
import { useContext } from "react";
import { userContext } from "@/_context/userContext";
import defaultimage from "@/public/placeholder.jpg";

const NavigationDesktop = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [background, setBackground] = useState("transparent");
  const [subCategory, setSubcategory] = useState(false);

  let category = false;
  if (pathname === "/") {
    category = false;
  } else {
    category = true;
  }

  const { data: categories } = useCategoryTree();
  const { data: landingPagesList } = useLandingPages();
  const { data: cartCount } = useCartBadge();
  const { data: wishListCount } = useWishlistBadge();

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
      pathname?.includes("/kategorija" || "") &&
        setVisible(false) &&
        setOpen(false);
      setSubcategory(false);
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

  useEffect(() => {
    if (pathname?.includes("/korpa/")) {
      router?.refresh();
    }
  }, [pathname]);

  useEffect(() => {
    const handleMouseOutsideOfBrowserViewport = (event) => {
      if (event.clientY <= 0) {
        setOpen(false);
        setSubcategory(false);
      }
    };

    window.addEventListener("mousemove", handleMouseOutsideOfBrowserViewport);
    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseOutsideOfBrowserViewport,
      );
    };
  }, []);

  useEffect(() => {
    if (pathname?.includes("/kategorija" || "")) {
      setOpen(false);
      setVisible(false);
      setSubcategory(false);
    }
  }, [pathname]);

  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(false);

  const debouncedSearch = useDebounce(searchTerm, 500);

  const { data, isFetching } = useSearch({
    searchTerm: debouncedSearch,
    isSearchPage: false,
  });

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

  const { isLoggedIn, setIsLoggedIn } = useContext(userContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [errors, setErrors] = useState([]);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const logoutHandler = () => {
    post("/customers/profile/logout")
      .then((response) => {
        if (response?.code === 200) {
          setIsLoggedIn(false);
          const deviceToken = Cookies.get("device_token");
          Cookies.set("customer_token", deviceToken, { expires: 365 });
          router.push("/login");
          sessionStorage.removeItem("loggedIn");
        } else {
          setErrors("Greška.");
        }
        if (response?.code === 500 || response?.code === 400) {
          setErrors(
            "Došlo je do nepoznate greške pri obrađivanju Vašeg zahteva.",
          );
        }
      })
      .catch((error) => console.warn(error));
  };

  return (
    <>
      <div className="fixed-menu-container sticky top-0 z-[100]">
        <div className="max-lg:hidden z-[100] lg:sticky lg:top-0">
          <div className="bg-croonus-1">
            <div className="w-[85%] flex items-center  justify-between mx-auto py-1">
              <Link href={`tel:0313894222`} className="text-white text-sm">
                Call centar: 031 / 3894 - 222
              </Link>
              <div className="flex gap-4 items-center">
                {isLoggedIn ? (
                  <>
                    <p className="text-white ml-[2rem] text-sm">
                      Dobrodošli na profil!
                    </p>
                    <div
                      className="bg-croonus-2 px-[0.8rem] ml-[1rem] transition-all ease cursor-pointer relative"
                      onClick={toggleDropdown}
                    >
                      Moj profil
                      {isDropdownOpen && (
                        <div className="dropdownProfil absolute z-[200] right-0 top-[2rem]">
                          <ul>
                            <li className="border-b border-[#f0f0f0] px-[2.2rem] py-[0.4rem] bg-croonus-2 hover:bg-croonus-1 hover:text-white w-max border-b border-croonus-1">
                              <a href="/customer-profil">Vidi profil</a>
                            </li>
                            <li className="px-[2.2rem] py-[0.4rem] bg-croonus-2  hover:bg-croonus-1 hover:text-white">
                              <button onClick={logoutHandler}>Odjava</button>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <Link
                    href="/login"
                    className="text-white text-sm hover:underline"
                  >
                    Moj profil
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="bg-white bg-opacity-90 backdrop-blur">
            <div className=" py-3 w-[85%] mx-auto  flex items-center justify-between">
              <div className="flex items-center gap-10">
                {open ? (
                  <i
                    className="fa-solid fa-xmark text-4xl"
                    onClick={() => {
                      setOpen(false);
                      setSubcategory(false);
                    }}
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
                    src={`/logo.png`}
                    width={220}
                    height={220}
                    priority
                    onClick={() => {
                      setOpen(false);
                      setSubcategory(false);
                    }}
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="flex items-center gap-5 relative ">
                <form
                  onSubmit={(e) => handleSearch(e)}
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
                      if (event.target.value.length >= 3) {
                        setLoading(true);
                      }
                    }}
                    value={searchTerm}
                  />
                  {searchTerm?.length < 3 && searchTerm?.length >= 1 && (
                    <span
                      className={`absolute text-sm top-1 right-2 text-red-500`}
                    >
                      Unesite najmanje 3 karaktera
                    </span>
                  )}

                  <div
                    ref={searchRef}
                    className={`${
                      searchTerm?.length >= 3
                        ? `absolute flex flex-col h-[420px] hidescrollbar overflow-y-auto bg-white top-[30px] right-0 w-full border rounded-b-lg`
                        : `hidden`
                    } `}
                  >
                    {searchData?.items?.length > 0 &&
                      searchTerm?.length > 0 && (
                        <div className="w-[95%] mx-auto mt-5">
                          <p className="text-[1rem] font-normal">
                            Rezultati pretrage
                          </p>
                          <div className="flex flex-col gap-5 mt-3 pb-5">
                            {searchData?.items?.slice(0, 6)?.map((item) => {
                              return (
                                <Link
                                  href={`/${item?.link?.link_path}`}
                                  onClick={(e) => {
                                    setSearchData([]);
                                    setSearchTerm("");
                                  }}
                                >
                                  <div className="flex flex-row items-center gap-5">
                                    {item?.image[0] ? (
                                      <div className=" relative">
                                        <Image
                                          src={item?.image[0]}
                                          alt="AKT"
                                          width={60}
                                          height={60}
                                          className={`object-cover rounded-full h-[60px]`}
                                        />
                                      </div>
                                    ) : (
                                      <div className=" relative">
                                        <Image
                                          src={defaultimage}
                                          alt="AKT"
                                          width={60}
                                          height={60}
                                          className={`object-cover rounded-full h-[60px]`}
                                        />
                                      </div>
                                    )}
                                    <div className="flex flex-col gap-1">
                                      <p className="text-[0.9rem] font-normal">
                                        {item?.basic_data?.name}
                                      </p>
                                      <p className="text-[0.9rem] w-fit font-bold text-center">
                                        {currencyFormat(
                                          item?.price?.price?.discount ??
                                            item?.price?.price?.original,
                                        )}
                                      </p>
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
                  alt="AKT"
                  onClick={handleSearch}
                  className={
                    background === "white"
                      ? "cursor-pointer "
                      : "cursor-pointer"
                  }
                />
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <Link href="/lista-zelja">
                      <Image
                        src={Wishlist}
                        width={35}
                        height={35}
                        alt="favorite"
                      />
                    </Link>
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
                  {(categories ?? [])?.map((item) => {
                    return item?.children ? (
                      <Link
                        key={item.id}
                        href={`/${item?.link?.link_path}`}
                        className="font-medium cursor-pointer uppercase px-3 text-2xl py-1 text-croonus-1 hover:bg-croonus-1 hover:text-white "
                        onClick={() => setOpen(false)}
                        onMouseEnter={() => {
                          item?.children
                            ? setSubcategory(item?.children)
                            : setSubcategory([]);
                        }}
                      >
                        {item?.name}
                      </Link>
                    ) : (
                      <Link
                        href={`/${item?.link?.link_path}`}
                        onMouseEnter={() => {
                          item?.children
                            ? setSubcategory(item?.children)
                            : setSubcategory([]);
                        }}
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
            {subCategory?.length > 0 ? (
              <>
                {subCategory?.some(
                  (item) => item?.children && item?.children.length > 0,
                ) ? (
                  <div className="grid grid-cols-2 xl:grid-cols-3 3xl:grid-cols-3 gap-x-10 gap-y-[18px] 2xl:gap-x-20 2xl:max-h-[500px] 3xl:max-h-[680px] self-start xl:pl-[22px] 3xl:pl-[30px] hidescroll overflow-y-scroll h-[100%] my-auto transition ease-in-out delay-150 bg-white md:w-[700px] md:max-w-[700px] xl:w-[870px] xl:max-w-[870px]">
                    {subCategory?.map((item) => (
                      <div className="col-span-1 flex flex-col" key={item.id}>
                        <Link
                          href={`/${item?.link?.link_path}`}
                          onClick={() => {
                            setOpen(false);
                            setSubcategory([]);
                          }}
                        >
                          <p className="text-xl font-light hover:underline">
                            {item?.name}
                          </p>
                        </Link>
                        <div className="mt-5 pl-2 ">
                          {item?.children
                            ? item?.children?.map((child) => (
                                <Link
                                  href={`/${child?.link?.link_path}`}
                                  key={child?.id}
                                  onClick={() => {
                                    setOpen(false);
                                    setSubcategory([]);
                                  }}
                                >
                                  <div className="text-sm font-light py-1 px-1 hover:bg-croonus-2 whitespace-nowrap w-max">
                                    <p className="">{child?.name}</p>
                                  </div>
                                </Link>
                              ))
                            : null}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 xl:grid-cols-3 3xl:grid-cols-3 gap-x-10  gap-y-[18px] 2xl:gap-x-20 self-start xl:pl-[22px] 3xl:pl-[30px] hidescroll overflow-y-scroll transition ease-in-out delay-150  md:w-[700px] md:max-w-[700px] xl:w-[870px] xl:max-w-[870px] ">
                    {subCategory?.map((item) => (
                      <div
                        className="col-span-1 flex flex-col h-fit"
                        key={item.id}
                      >
                        <Link
                          href={`/${item?.link?.link_path}`}
                          onClick={() => {
                            setOpen(false);
                            setSubcategory([]);
                          }}
                        >
                          <p className="text-xl font-light hover:underline">
                            {item?.name}
                          </p>
                        </Link>
                        <div className="mt-2 pl-2 ">
                          {item?.children
                            ? item?.children?.map((child) => (
                                <Link
                                  href={`/${child?.link?.link_path}`}
                                  key={child?.id}
                                  onClick={() => {
                                    setOpen(false);
                                    setSubcategory([]);
                                  }}
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
                )}
              </>
            ) : null}
          </div>
          <div className="fixed bottom-0 bg-croonus-1 text-white w-full py-1">
            <div className="px-1 mx-auto flex">
              {landingPagesList?.items?.map((item, index) => {
                return (
                  <div key={index}>
                    <Link
                      href={`/promo/${item?.slug}`}
                      key={item?.id}
                      className="font-medium uppercase px-3 text-xl py-1"
                      onClick={() => {
                        setOpen(false);
                        setSubcategory([]);
                      }}
                    >
                      {item?.name}
                    </Link>
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
