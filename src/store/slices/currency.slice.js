import { createSlice } from "@reduxjs/toolkit";
import { getCurrencyInfo, getUserBalance } from "../../services/currency";

const currencySlice = createSlice({
  name: "currency",
  initialState: {
    eur: {
      rateSell: null,
      rateBuy: null,
    },
    usd: {
      rateSell: null,
      rateBuy: null,
    },
      userBalance: {
        usd_balance:null,
        eur_balance:null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
      builder.addCase(getCurrencyInfo.fulfilled, (state, action) => {
        console.log(action.payload);
      [state.eur, state.usd] = action.payload;
    });
    builder.addCase(getUserBalance.fulfilled, (state, action) => {
      state.userBalance = action.payload;
    });
  },
});

export const currencySliceActions = currencySlice.actions;

export default currencySlice