import CheckoutPage from "@/components/CheckoutPage/CheckoutPage";
import {get} from "../api/api";

const paymentOptions = async () => {
  return await get("/checkout/payment-options").then(
      (response) => response?.payload
  );
};
const deliveryOptions = async () => {
  return await get("/checkout/delivery-options").then(
      (response) => response?.payload
  );
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

export const revalidate = 30;
