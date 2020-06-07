import { createSelector } from "reselect";

const selectState = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectState],
  (user) => user.currentUser
);
