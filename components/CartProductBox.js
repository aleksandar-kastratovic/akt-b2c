import CartProductItem from "./CartProductItem";
import classes from "./CartProductBox.module.css";
const CartProductBox = ({ cartItems = [], refresh, setRefresh }) => {
  return (
    <div className={``}>
      <div className="grid grid-cols-2 gap-y-5">
        {cartItems.map((item) => (
          <CartProductItem
            item={item}
            key={item.cart.cart_item_id}
            refresh={refresh}
            setRefresh={setRefresh}
          />
        ))}
      </div>
    </div>
  );
};

export default CartProductBox;
