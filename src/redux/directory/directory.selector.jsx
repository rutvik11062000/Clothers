import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;

export const selectDirtectorySelector = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
