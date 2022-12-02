import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState(0);
  const [breadcrumbsPaths, setbreadcrumbsPaths] = useState('')

  const mutateCart = () => {
    let x = Math.random() * 10;
    do {
      x = Math.random() * 10;
    } while (x === cart);
    setCart(x);
  };

  const mutateBreadcrumbs = (value) => {
    setbreadcrumbsPaths(value)
  }


  const [wishList, setWishlist] = useState(0);
  const mutateWishList = () => {
    let x = Math.random() * 10;
    do {
      x = Math.random() * 10;
    } while (x === cart);
    setWishlist(x);
  };

  return (
    <CartContext.Provider value={[cart, mutateCart, wishList, mutateWishList, breadcrumbsPaths, mutateBreadcrumbs]}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}
