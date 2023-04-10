import {
  useGlobalRemoveFromWishlist,
  useGlobalAddToCart,
} from "@/app/api/globals";
import Link from "next/link";
import Image from "next/image";
import { currencyFormat } from "@/helpers/functions";
import { convertHttpToHttps } from "@/helpers/convertHttpToHttps";
import Cart from "../../assets/Icons/shopping-bag.png";
const Wishlistproducts = ({ items, product }) => {
  const removeFromWishList = useGlobalRemoveFromWishlist();
  const globalAddToCart = useGlobalAddToCart();
  return (
    <div
      key={product.id}
      className={` flex flex-col relative products-center keen-slider__slide`}
    >
      <div className="max-lg:h-[429px] h-[350px] 3xl:h-[470px] relative flex justify-center hover">
        <Link href={`/proizvod/${product?.slug}`}>
          <Image
            src={convertHttpToHttps(product?.image[0]?.toString())}
            width={500}
            height={500}
            className="h-full object-cover"
          />
        </Link>
        <div className="absolute bg-white bottom-5 w-[60%] flex justify-center items-center divide-x-2 hovered">
          <div className="w-full flex items-center justify-center">
            <i
              className="fa-solid fa-xmark text-2xl cursor-pointer"
              onClick={() => removeFromWishList(items)}
            ></i>
          </div>
          <div className="w-full flex items-center justify-center">
            <Image
              src={Cart}
              width={35}
              height={35}
              alt=""
              className="cursor-pointer"
              onClick={() =>
                globalAddToCart(product?.basic_data?.id_product, 1, false)
              }
            />
          </div>
        </div>
      </div>
      <p className="text-black self-start font-sm text-lg mt-2 uppercase">
        <Link
          className="font-normal text-[1rem]"
          href={`/proizvod/${product?.slug}`}
        >
          {product?.basic_data?.name}
        </Link>
      </p>
      <div className=" self-start w-1/3">
        <p className="text-[0.875rem] self-start text-black font-normal py-1 line-through">
          {currencyFormat(product?.price?.price?.original)}
        </p>
      </div>
      <div className=" bg-croonus-3 self-start px-3.5">
        <p className="text-[1rem] self-start text-black font-normal py-2 pl-2">
          {currencyFormat(product?.price?.price?.original)}
        </p>
      </div>
    </div>
  );
};

export default Wishlistproducts;
