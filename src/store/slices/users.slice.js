import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "../../services/transactions";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    searchParam: "",
  },
  reducers: {
      setSearchParam(state, action) {
          state.searchParam = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const userSliceActions = userSlice.actions;
export default userSlice;
