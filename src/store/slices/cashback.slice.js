import { createSlice } from "@reduxjs/toolkit";
import { getCashbackBalance } from "../../services/cashback";
import { calcCashbackRemain } from "../../utility";

const cashbackSlice = createSlice({
  name: "cashback",
  initialState: {
    balance: null,
    leftToCollect: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCashbackBalance.fulfilled, (state, action) => {
        state.balance = action.payload;
      state.leftToCollect = calcCashbackRemain(state.balance);
    });
  },
});

export const cashbackSliceActions = cashbackSlice.actions;

export default cashbackSlice;
