import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopData = createSelector([selectShop], (shop) => shop.collections);

// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5,
// };

export const selectCollection = (collectionParamUrl) =>
  createSelector(
    [selectShopData], 
    (collections) => collections[collectionParamUrl],
  );

export const shopSelectorForPreview = createSelector(
  [selectShopData],
  collections =>   Object.keys(collections).map(key => collections[key])
)

// export default selectShopData;
