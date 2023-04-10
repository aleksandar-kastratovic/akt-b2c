import Link from "next/link";
import Image from "next/image";
import classes from "./ProductsItem.module.css";
import Wishlist from "../../../assets/Icons/favorite.png";
import { useGlobalAddToWishList } from "../../../app/api/globals";
import { currencyFormat } from "../../../helpers/functions";
import { useGlobalAddToCart } from "../../../app/api/globals";
import { convertHttpToHttps } from "@/helpers/convertHttpToHttps";
import Cart from "../../../assets/Icons/shopping-bag.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Products = ({ products = [] }) => {
  const globalAddToWishlist = useGlobalAddToWishList();
  const globalAddToCart = useGlobalAddToCart();
  let items = null;
  if (products.length) {
    items = products?.map((item, index) => (
      <div
        key={item.id}
        className={` flex flex-col relative items-center keen-slider__slide number-slide${index}`}
      >
        <ToastContainer />
        <div className="max-lg:h-[429px] h-[350px] 3xl:h-[470px] relative flex justify-center hover">
          <Link href={`/proizvod/${item?.slug}`}>
            {item?.image[0]?.toString() ? (
              <Image
                src={convertHttpToHttps(item?.image[0]?.toString())}
                width={500}
                height={500}
                className="h-full object-cover"
              />
            ) : null}
          </Link>
          <div className="absolute bg-white bottom-5 w-[60%] flex justify-center items-center divide-x-2 hovered">
            <div className="pr-10">
              <Image
                src={Wishlist}
                width={35}
                height={35}
                alt=""
                className="cursor-pointer"
                onClick={() => {
                  globalAddToWishlist(item?.basic_data?.id_product);
                  toast.success("Proizvod je dodat u listu želja!", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                }}
              />
            </div>
            <div className="pl-10">
              <Image
                src={Cart}
                width={35}
                height={35}
                alt=""
                className="cursor-pointer"
                onClick={() => {
                  globalAddToCart(item?.basic_data?.id_product, 1, false);
                  toast.success("Proizvod je dodat u korpu!", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                }}
              />
            </div>
          </div>
        </div>
        <p className="text-black self-start font-sm text-lg mt-2 uppercase">
          <Link
            className="font-normal text-sm clamp"
            href={`/proizvod/${item?.slug}`}
          >
            {item?.basic_data?.name}
          </Link>
        </p>
        <div className=" self-start w-1/3">
          <p className="text-sm self-start text-black font-normal py-1 line-through">
            {currencyFormat(item?.price?.price?.original)}
          </p>
        </div>
        <div className=" bg-croonus-3 self-start w-1/3">
          <p className="text-sm self-start text-black font-normal py-2 pl-2">
            {currencyFormat(item?.price?.price?.original)}
          </p>
        </div>
      </div>
    ));
  } else {
    items = (
      <>
        {[...Array(5)].map((_, index) => (
          <div key={index} className="col-span-1 flex flex-col gap-2">
            <div className="h-[350px] w-[252px] animate-pulse bg-croonus-2"></div>
            <div className="h-[15px] w-[252px] animate-pulse bg-croonus-2"></div>
          </div>
        ))}
      </>
    );
  }
  return <>{items}</>;
};

export default Products;
