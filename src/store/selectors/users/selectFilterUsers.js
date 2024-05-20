import { createSelector } from "@reduxjs/toolkit";

const selectUsers = (state) => state.users.users;
const selectSearchParam = (state) => state.users.searchParam;

export const selectFilteredUsers = createSelector(
  [selectUsers, selectSearchParam],
  (users, searchParam) => {
    return users.includes(searchParam);
  },
);
