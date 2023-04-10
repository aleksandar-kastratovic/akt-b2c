import Image from "next/image";
import Link from "next/link";
import Image1 from "../assets/Icons/404.png";
const page404 = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="border rounded-2xl flex items-center justify-center flex-col p-10">
        <Image src={Image1} alt="404" width={150} height={150} />
        <h1 className="text-xl font-bold mt-4">
          Izvinjavamo se, stranica koju tražite trenutno ne postoji.
        </h1>
        <p className="mt-3 text-lg font-medium">
          Molimo proverite link koji ste uneli.
        </p>
        <Link href={"/"}>
          <button className="border text-center px-4 py-2 bg-croonus-5 text-black hover:bg-opacity-80 mt-5">
            Vrati se na početnu stranu
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page404;
