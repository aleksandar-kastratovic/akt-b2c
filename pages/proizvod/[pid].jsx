import styles from "../../styles/ProductPage.module.scss";
import ProductSlider from "../../components/layout/ProductSlider";
import ProductDetailsSlider from "../../components/layout/ProductDetailsSlider";
import PlusMinusInput from "../../components/UI/PlusMinusInput";
import CustomSelect3 from "../../components/UI/CustomSelect3";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

//data
import products from "../../data/products.json";

const ProductPage = () => {
  const [amount, setAmount] = useState(1);
  const [data, setData] = useState({});
  const router = useRouter();
  const { pid } = router.query;

  useEffect(() => {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === pid) {
        setData(products[pid]);
      }
    }
  }, [pid]);

  return (
    data !== undefined &&
    pid !== undefined && (
      <>
        <div className={styles.productTop + " row"}>
          <div className={styles.productTopLeft + " col-6"}>
            <ProductDetailsSlider images={data.images} />
          </div>
          <div className={styles.productTopLeft + " col-6"}>
            <h1 className={styles.name}>{data.title}</h1>
            <div className={styles.codeInfo}>
              <span>
                Šifra #: <span>{data.id}</span>
              </span>
              <span>
                Dostupno: <span>{data.available ? "Da" : "Ne"}</span>
              </span>
            </div>
            <div className={styles.priceContainer}>
              <span className={styles.oldPrice}>{data.oldPrice}</span>
              <span className={styles.newPrice}>{data.newPrice}</span>
            </div>
            <p className={styles.infoPara}>
              <span>Set sadrži:</span> {data.contains}
            </p>
            <p className={styles.infoPara}>
              <span>Sirovinski sastav:</span> {data.composition}
            </p>
            <div className={styles.setting}>
              <span>Boja: </span>
            </div>

            <div className={styles.setting}>
              <span>Veličina: </span>
              <CustomSelect3
                options={data.sizes}
                def={Array.isArray(data.sizes) ? data.sizes[0] : "Izaberite"}
              />
            </div>
            <h2 className={styles.finalPrice}>4.350 RSD</h2>
            <div className={styles.addBasketContainer}>
              <PlusMinusInput amount={amount} setCount={setAmount} />
              <button type="button" className={styles.addToBasket}>
                <img src={"/images/icons/shopping-bag.png"}></img>
                Dodaj u korpu
              </button>
              <button type="button" className={styles.bookmark}>
                <img src={"/images/icons/bookmark.png"} />
              </button>
            </div>
          </div>
        </div>
        <ProductSlider
          title={"Možda će vas zanimati i sledeći proizvodi"}
          products={[...products]}
        />
      </>
    )
  );
};

export default ProductPage;
