import { createSelector } from "@reduxjs/toolkit";

const selectUsers = (state) => state.users.users;
const selectSearchParam = (state) => state.users.searchParam;

export const selectFilteredUsers = createSelector(
  [selectUsers, selectSearchParam],
  (users, searchParam) => {
    const filteredUsers = users.filter(
      (user) =>
        user.first_name.toLowerCase().includes(searchParam) ||
        user.card_number.toLowerCase().includes(searchParam),
    );

    return filteredUsers;
  },
);
