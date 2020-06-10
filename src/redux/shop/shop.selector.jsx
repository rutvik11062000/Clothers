import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

const selectShopData = createSelector([selectShop], (shop) => shop.shop_data);

export default selectShopData;
