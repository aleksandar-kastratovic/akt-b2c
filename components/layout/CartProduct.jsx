import styled from 'styled-components';
import classes from '../../styles/CartPage.module.scss';
import { convertHttpToHttps } from '../../helpers/convertHttpToHttps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useGlobalRemoveFromCart } from '../../pages/api/globals';
import { openAlertBox } from '../../helpers/tostify';

const Container = styled.div`
  display: flex;
  align-items: center;
  & > img {
    height: 100px;
  }
  margin-bottom: 1.5rem;
`;
const Info = styled.div`
  padding: 0 5rem;
  @media (max-width: 575.98px) {
    padding: 0 1rem;
  }
`;

const Name = styled.h1`
  font-size: 1rem;
`;

const Detail = styled.span`
  display: block;
  font-size: 0.875rem;
`;

const CartProduct = ({ product, deleteProduct }) => {
  const { basic_data, price, image, id } = product;
  const removeFromCart = useGlobalRemoveFromCart();

  return (
    <div className={classes['product-box'] + '  col-12'}>
      <Container>
        <img src={convertHttpToHttps(image[0])} />
        <Info>
          <Name>{basic_data.name}</Name>
          <Detail>Šifra: {basic_data.barcode}</Detail>
          <Detail>Količina: {price.cost.quantity}</Detail>
          <Detail>Veličina 34</Detail>
          <Detail>
            Ukupan iznos: {price.cost.total - price.per_item.discount.amount}{' '}
            RSD sa PDV
          </Detail>
        </Info>
        <FontAwesomeIcon
          className={classes['delete']}
          icon={faXmark}
          onClick={() => {
            removeFromCart(id);
            deleteProduct(id);
            openAlertBox('Uspešno obrisan proizvod.', 'success');
          }}
        ></FontAwesomeIcon>
      </Container>
    </div>
  );
};

export default CartProduct;
