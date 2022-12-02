import Link from 'next/link';
import styles from '../../styles/ProductBox.module.scss';
import stylesP from '../../styles/ProductPage.module.scss';
import { convertHttpToHttps } from '../../helpers/convertHttpToHttps';
import {
  useGlobalAddToWishList,
  useGlobalRemoveFromWishlist,
  useGlobalAddToCart,
} from '../../pages/api/globals';
import { openAlertBox } from '../../helpers/tostify';

const ProductBox = ({
  title = '',
  oldPrice = '',
  newPrice = '',
  img = '',
  id = 0,
  isDelete = false,
  inventory,
}) => {
  const addToWishList = useGlobalAddToWishList();
  const removeFromWishlist = useGlobalRemoveFromWishlist();
  const addToCart = useGlobalAddToCart();
  const isAvelabile = Number(inventory?.amount) > 0;

  return (
    <div className={styles.container}>
      <Link href={`/proizvod/${id}`}>
        <a className={styles.imageContainer}>
          <img src={convertHttpToHttps(img)} />
        </a>
      </Link>
      <span className={styles.name}>{title}</span>
      <span className={styles.oldPrice}>{oldPrice}</span>
      <span className={styles.newPrice}>{newPrice}</span>
      <div className={styles.buttonsContainer}>
        {isDelete ? (
          <button
            type="button"
            onClick={() => {
              removeFromWishlist(id);
              openAlertBox('Uspešno obrisan proizvod.', 'success');
            }}
          >
            obriši
          </button>
        ) : (
          <button type="button" onClick={() => addToWishList(id)}>
            <img src={'/images/icons/favorite.png'} alt="fav-heart" />
          </button>
        )}
        <button
          type="button"
          onClick={() => {
            isAvelabile;
            addToCart(id, 1);
          }}
          className={`${!isAvelabile ? '' : stylesP.disabled}`}
        >
          <img src={'/images/icons/shopping-bag.png'} alt="shopping-bag" />
        </button>
      </div>
    </div>
  );
};

export default ProductBox;
