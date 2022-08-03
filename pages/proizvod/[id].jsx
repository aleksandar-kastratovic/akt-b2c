import styles from "../../styles/ProductPage.module.scss";
import ProductSlider from "../../components/layout/ProductSlider";
import ProductDetailsSlider from "../../components/layout/ProductDetailsSlider";
import PlusMinusInput from "../../components/UI/PlusMinusInput";
import CustomSelect3 from "../../components/UI/CustomSelect3";
import { useState } from "react";
const ProductPage = () => {
  const [amount, setAmount] = useState(1);
  return (
    <>
      <div className={styles.productTop + " row"}>
        <div className={styles.productTopLeft + " col-6"}>
          <ProductDetailsSlider />
        </div>
        <div className={styles.productTopLeft + " col-6"}>
          <h1 className={styles.name}>
            Bebi posteljina Tom & Jerry - sa ogradicom
          </h1>
          <div className={styles.codeInfo}>
            <span>
              Šifra #: <span>536 žuta</span>
            </span>
            <span>
              Dostupno: <span>Da</span>
            </span>
          </div>
          <div className={styles.priceContainer}>
            <span className={styles.oldPrice}>3.450 RSD - 4.750 RSD</span>
            <span className={styles.newPrice}>-10% 3.200 RSD</span>
          </div>
          <p className={styles.infoPara}>
            <span>Set sadrži:</span> jorgan 80x100cm, jastučić 30x40cm, ogradicu
            iz tri dela (60x40cm - 2kom i 120x40cm - 1kom.), čaršaf 100x150,
            dekorativni jastuk 35x35.
          </p>
          <p className={styles.infoPara}>
            <span>Sirovinski sastav:</span> lice 100% pamuk, punilo 100%
            poliestar. Materijal poseduje Oeko-tex standard kojim se garantuje
            ekološka ispravost proizvoda.
          </p>
          <div className={styles.setting}>
            <span>Boja: </span>
          </div>

          <div className={styles.setting}>
            <span>Veličina: </span>
            <CustomSelect3
              options={["120x40 cm", "160x80 cm"]}
              def="Izaberite"
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
      <ProductSlider title={"Možda će vas zanimati i sledeći proizvodi"} />
    </>
  );
};

export default ProductPage;
