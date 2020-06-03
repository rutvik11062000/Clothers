import CartActionTypes from "./cart.types";

export const toggleCarthidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

// export default toggleCarthidden;
