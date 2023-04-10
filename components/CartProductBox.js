import CartProductItem from "./CartProductItem";
import classes from "./CartProductBox.module.css";
const CartProductBox = ({ cartItems = [] }) => {
  return (
    <div className={``}>
      <div className="grid grid-cols-2 gap-y-5">
        {cartItems.map((item) => (
          <CartProductItem item={item} key={item.cart.cart_item_id} />
        ))}
      </div>
    </div>
  );
};

export default CartProductBox;
