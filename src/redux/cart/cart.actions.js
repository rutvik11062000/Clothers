import CartActionTypes from "./cart.types";

export const toggleCarthidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});


export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_CARTITEM_FROM_CART,
  payload: item,
});


export const decreaseItemByOne = (item) => ({
  type: CartActionTypes.DECREASE_ITEM_BY_ONE,
  payload: item,
});
// export default toggleCarthidden;
