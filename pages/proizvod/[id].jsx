import styles from '../../styles/ProductPage.module.scss';
import ProductSlider from '../../components/layout/ProductSlider';
import ProductDetailsSlider from '../../components/layout/ProductDetailsSlider';


const ProductPage = () => {
    return (
        <>      
            <div className={styles.productTop+' row'}>
                <div className={styles.productTopLeft+' col-6'}>
                <ProductDetailsSlider/>
                </div>
                <div className={styles.productTopLeft+' col-6'}>
                IME
                </div>
            </div>
            <ProductSlider title={'Možda će vas zanimati i sledeći proizvodi'}/>
        </>
    )
}

export default ProductPage;