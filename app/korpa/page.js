import CheckoutPage from "@/components/CheckoutPage/CheckoutPage";
import { get } from "../api/api";
const paymentOptions = async () => {
  const paymentOptions = await get("/checkout/payment-options").then(
    (response) => response?.payload
  );
  return paymentOptions;
};
const deliveryOptions = async () => {
  const deliveryOptions = await get("/checkout/delivery-options").then(
    (response) => response?.payload
  );
  return deliveryOptions;
};
const Cart = async () => {
  const paymentoptions = await paymentOptions();
  const deliveryoptions = await deliveryOptions();
  return (
    <>
      <CheckoutPage
        paymentoptions={paymentoptions}
        deliveryoptions={deliveryoptions}
      />
    </>
  );
};

export default Cart;
