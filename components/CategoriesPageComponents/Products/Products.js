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
import { useRouter } from "next/navigation";
const Products = ({ products = [] }) => {
  const globalAddToWishlist = useGlobalAddToWishList();
  const globalAddToCart = useGlobalAddToCart();
  const router = useRouter();
  let items = null;
  if (products.length) {
    items = products?.map((item, index) => (
      <div
        key={item.id}
        className={` flex flex-col relative items-center keen-slider__slide number-slide${index}`}
      >
        <div className="max-md:h-[407px] max-lg:h-[429px] h-[350px] 3xl:h-[470px] relative flex justify-center hover">
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
          <div className="absolute bg-white py-[2.5px] bottom-5 w-[70%] flex justify-center items-center divide-x divide-black hovered">
            <div className="flex items-center justify-center w-full">
              <Image
                src={Wishlist}
                width={28}
                height={28}
                alt=""
                className="cursor-pointer hover:scale-110 transition-all duration-200"
                onClick={() => {
                  if (item?.product_type === "single") {
                    globalAddToWishlist(item?.basic_data?.id_product);
                    toast.success("Proizvod je dodat u listu želja!", {
                      position: "top-center",
                    });
                  } else {
                    router.push(`/proizvod/${item?.slug}`);
                  }
                }}
              />
            </div>
            <div className="flex items-center justify-center w-full">
              <Image
                src={Cart}
                width={32}
                height={32}
                alt=""
                className="cursor-pointer hover:scale-110 transition-all duration-200"
                onClick={() => {
                  if (item?.product_type === "single") {
                    globalAddToCart(item?.basic_data?.id_product, 1, false);
                    toast.success("Proizvod je dodat u korpu!", {
                      position: "top-center",
                    });
                  } else {
                    router.push(`/proizvod/${item?.slug}`);
                  }
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
        <div className=" self-start max-lg:w-[210px] w-2/3">
          <p
            className={`text-[0.875rem] self-start text-black font-normal py-1 ${
              item?.price?.discount?.active === true && "line-through"
            }`}
          >
            {item?.product_type === "variant" ? (
              <>
                {currencyFormat(item?.price?.min?.price?.original)} -{" "}
                {currencyFormat(item?.price?.max?.price?.original)}
              </>
            ) : (
              currencyFormat(item?.price?.price?.original)
            )}
          </p>
        </div>
        <div className=" bg-croonus-3  max-lg:w-[210px] self-start w-1/3">
          {item?.price?.discount?.active && (
            <p className="text-[1rem] self-start text-black font-normal py-2 pl-2">
              {currencyFormat(
                item?.price?.price?.original - item?.price?.discount?.amount
              )}
            </p>
          )}
        </div>
      </div>
    ));
  } else {
    items = (
      <>
        {[...Array(5)].map((_, index) => (
          <div key={index} className="col-span-1 flex flex-col gap-2">
            <div className="h-[470px] w-[375px] animate-pulse bg-croonus-2"></div>
            <div className="h-[15px] w-[375px] animate-pulse bg-croonus-2"></div>
          </div>
        ))}
      </>
    );
  }
  return <>{items}</>;
};

export default Products;
