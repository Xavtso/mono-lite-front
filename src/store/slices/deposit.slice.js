import { createSlice } from "@reduxjs/toolkit";
import { getDepositsThunk } from "../../services/deposits";

const depositsSlice = createSlice({
  name: "deposits",
  initialState: {
    deposits: [
      {
        id: null,
        user_id: null,
        amount: null,
        interest_rate: null,
        term: null,
        monthly_payment: null,
        start_date: null,
        end_date: null,
        status: null,
      },
    ],
    currVault: null,
    accumulated: 0,
  },
  reducers: {
    setCurrentVault(state, action) {
      state.currVault = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDepositsThunk.fulfilled, (state, action) => {
      state.deposits = action.payload;
      state.accumulated = state.deposits
        ?.reduce((acc, val) => acc + val.amount, 0)
        ?.toFixed(2);
    });
  },
});

export const depositsSliceActions = depositsSlice.actions;
export default depositsSlice;
