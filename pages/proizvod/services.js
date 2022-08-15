import products from "../../data/products.json";

export const getProductByID = (id = 0) => {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      return products[id];
    }
  }
};
