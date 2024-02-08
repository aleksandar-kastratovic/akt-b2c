"use client";
import Image from "next/image";
import Image1 from "../../assets/Icons/check.png";
import Image2 from '../../assets/Icons/neuspesno.png'
import Link from "next/link";
import { useEffect } from "react";

const OrderSuccess = ({ order }) => {
  useEffect(() => {
    window?.dataLayer?.push({
      event: "transaction",
      ecommerce: {
        purchase: {
          actionField: {
            id: order?.order?.slug,
            tax: order?.order?.total_vat,
            revenue: order?.order?.total,
            shipping: order?.order?.total_delivery,
          },
          products: order?.items?.map((item) => {
            return {
              name: item?.basic_data?.name,
              id: item?.basic_data?.id_product,
              price: item?.price?.total_with_vat,
              brand: item?.basic_data?.brand_name,
              currency: item?.basic_data?.currency,
              category: item?.basic_data?.category_breadcrumbs,
              manufacturer: item?.basic_data?.manufacture_name,
              quantity: item?.price?.quantity,
            };
          }),
        },
      },
    });
  }, [order]);

  let conditions;
  if (order?.credit_card !== null && order) {
    if (order?.credit_card?.payment_status?.toLowerCase() === "approved") {
      conditions = (
        <div className="flex items-center justify-center py-10 text-center ">
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-croonus-1 p-6">
            <div>
              <Image src={Image1} alt="404" width={130} height={130} />
            </div>
            <span className="text-lg font-medium">
              Broj porudžbenice: {order?.order?.slug}
            </span>
            <span>
              Uspešno ste izvršili plaćanje, račun Vaše platne kartice je
              zadužen! SLEDI OBRADA PORUDŽBENICE NAKON ČEGA ĆETE DOBITI SVE
              POTREBNE INFORMACIJE PUTEM E-MAILA KOJIM STE SE REGISTROVALI.
            </span>
            <span>Podaci o transkciji:</span>
            <span className="text-lg font-medium">
              {" "}
              Autorizacioni kod:{" "}
              {order.credit_card.auth_code !== null
                ? order.credit_card.auth_code
                : "-"}{" "}
            </span>
            <span className="text-lg font-medium">
              {" "}
              Status transakcije:{" "}
              {order.credit_card.payment_status !== null
                ? order.credit_card.payment_status
                : "-"}{" "}
            </span>
            <span className="text-lg font-medium">
              {" "}
              Kod statusa transakcije:{" "}
              {order.credit_card.transaction_status_code !== null
                ? order.credit_card.transaction_status_code
                : "-"}{" "}
            </span>
            <span className="text-lg font-medium">
              {" "}
              Datum transakcije:{" "}
              {order.credit_card.transaction_date !== null
                ? order.credit_card.transaction_date
                : "-"}{" "}
            </span>
            <span className="text-lg font-medium">
              Statusni kod 3D transakcije:{" "}
              {order.credit_card.status_code_3D_transaction !== null
                ? order.credit_card.status_code_3D_transaction
                : "-"}
            </span>
            <p className="mt-2 text-sm">
              Za sve dodatne informacije možete nas kontaktirati putem call
              centra {process.env.TELEPHONE} ili putem emaila{" "}
              {process.env.EMAIL}
            </p>
          </div>
        </div>
      );
    } else {
      conditions = (
        <div className="flex items-center justify-center py-10 text-center ">
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-croonus-1 p-6">
            <div>
              <Image src={Image2} alt="404" width={130} height={130} />
            </div>

            <span className="text-lg font-medium">
              Plaćanje neuspešno, račun vaše platne kartice nije zadužen!
            </span>
            <span>
              Poštovani, Vaša kupovina je uspešno evidentirana ali plaćanje
              platnom karticom nije realizovano. Uskoro ćemo Vas kontaktirati
              radi realizacije Vaše kupovine.
            </span>

            <span className="text-lg font-medium">Podaci o transkciji:</span>
            <span className="text-lg font-medium">
              {" "}
              Autorizacioni kod:{" "}
              {order.credit_card.auth_code !== null
                ? order.credit_card.auth_code
                : "-"}{" "}
            </span>
            <span className="text-lg font-medium">
              {" "}
              Status transakcije:{" "}
              {order.credit_card.payment_status !== null
                ? order.credit_card.payment_status
                : "-"}{" "}
            </span>
            <span className="text-lg font-medium">
              {" "}
              Kod statusa transakcije:{" "}
              {order.credit_card.transaction_status_code !== null
                ? order.credit_card.transaction_status_code
                : "-"}{" "}
            </span>
            <span className="text-lg font-medium">
              {" "}
              Datum transakcije:{" "}
              {order.credit_card.transaction_date !== null
                ? order.credit_card.transaction_date
                : "-"}{" "}
            </span>
            <span className="text-lg font-medium">
              Statusni kod 3D transakcije:{" "}
              {order.credit_card.status_code_3D_transaction !== null
                ? order.credit_card.status_code_3D_transaction
                : "-"}
            </span>
            <p className="mt-2 text-sm">
              Za sve dodatne informacije možete nas kontaktirati putem call
              centra {process.env.TELEPHONE} ili putem emaila{" "}
              {process.env.EMAIL}
            </p>
          </div>
        </div>
      );
    }
  } else {
    conditions = (
      <div className="w-[95%] lg:w-[90%] mx-auto bg-croonus-5  mt-5 lg:mt-16 max-lg:text-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <div className="col-span-1 max-lg:p-6 lg:p-16">
            <h1 className="uppercase font-bold text-2xl">
              Vaša porudžbenica je uspešno kreirana!
            </h1>
            <h2 className="text-lg font-medium uppercase mt-2.5">
              Broj porudžbenice:{" "}
              <span className="lowercase">{order?.order?.slug}</span>
            </h2>
            <div className="mt-10">
              <p className=" text-base font-medium">
                Sledi obrada porudžbenice nakon čega ćete dobiiti sve potrebne
                informacije putem e-maila koji ste ostavili prilikom kreiranja
                porudžbenice.
              </p>
              <a href="/">
                <button className="mt-10  bg-croonus-1 border py-2 px-3 text-white uppercase hover:bg-opacity-80">
                  Početna strana
                </button>
              </a>
            </div>
          </div>
          <div className="col-span-1 max-sm:row-start-1 place-self-center p-5">
            <Image src={Image1} width={100} height={100} />
          </div>
        </div>
      </div>
    );
  }

  return <div className={["orderDataContainer"]}>{conditions}</div>;
};

export default OrderSuccess;
