import ProductBox from '../../components/layout/ProductBox';
import styles from '../../styles/WishListPage.module.scss';


const WishListPage = () => {
    return (
        <div className={styles.container}>
             <h1>
                Lista želja
             </h1>
             <p>
                Ovo je neki tekst liste zelja koji predstavlja da je lista zelja stranica koja sadrzi listu zelja. Ovo je neki tekst liste zelja koji predstavlja da je lista zelja stranica koja sadrzi listu zelja.
             </p>
             <div className={styles.productsContainer+' row'}>
                <div className={styles.productColumn+' col-3'}>
                    <ProductBox remove={true}/>
                </div>
                <div className={styles.productColumn+' col-3'}>
                    <ProductBox remove={true}/>
                </div>
                <div className={styles.productColumn+' col-3'}>
                    <ProductBox remove={true}/>
                </div>
                <div className={styles.productColumn+' col-3'}>
                    <ProductBox remove={true}/>
                </div>
                <div className={styles.productColumn+' col-3'}>
                    <ProductBox remove={true}/>
                </div>
             </div>
        </div>
    )
}

export default WishListPage;