import Link from "next/link";
import MainContainer from "../../components/layout/MainContainer";
import CustomSelect from "../../components/UI/CustomSelect";
import CustomSelect2 from "../../components/UI/CustomSelect2";
import styles from "../../styles/CategoryPage.module.scss";
import ProductBox from "../../components/layout/ProductBox";

//data
import products from "../../data/products.json";
const CategoryPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.bannerContainer}>
          <div className={styles.img}>
            <img src="/images/products/akt-categorypage.jpg" />
          </div>
          <h2 className={styles.subheading}>
            Nova kolekcija bademantila <span>(34 proizvoda)</span>
          </h2>
          <p className={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className={styles.filtersContainer + " row"}>
          <div className={styles.filterColumns + " col-2"}>
            <input type="checkbox" id="aaa" />
            <label htmlFor={"aaa"}>Akcijski proizvodi</label>
          </div>
          <div className={styles.filterColumns + " col-2"}>
            <CustomSelect options={["1", "2"]} def="BOJA" />
          </div>
          <div className={styles.filterColumns + " col-2"}>
            <CustomSelect options={["1", "2"]} def="VELIČINA" />
          </div>
          <div className={styles.filterColumns + " col-2"}>
            <CustomSelect options={["1", "2"]} def="KOLEKCIJA" />
          </div>
          <div className={styles.filterColumns + " col-2"}>
            <CustomSelect options={["1", "2"]} def="MATERIJAL" />
          </div>
          <div className={styles.filterColumns + " col-2"}>
            <button type="button">Još filtera</button>
          </div>
        </div>
        <div className={styles.sortingContainer}>
          <button type="button" className="col-2">
            Poništi filtere <span>X</span>
          </button>
          <div className={styles.sortSelect}>
            <label>Sortiraj po</label>
            <CustomSelect2 def="Izaberi" options={["Rastuće", "Opadajuće"]} />
          </div>
        </div>
        <div className={styles.productsContainer + " row"}>
          {products.map((product) => {
            return (
              <div className={styles.productColumn + " col-3"} key={product.id}>
                <ProductBox
                  title={product.title}
                  oldPrice={product.oldPrice}
                  newPrice={product.newPrice}
                  img={product.image}
                  id={product.id}
                />
              </div>
            );
          })}
        </div>
        <button type="button" className={styles.loadMore}>
          Učitaj još proizvoda...
        </button>
      </div>
    </>
  );
};
export default CategoryPage;
