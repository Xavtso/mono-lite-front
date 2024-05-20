import { createSlice } from "@reduxjs/toolkit";
import { getTransactionsHistory } from "../../services/transactions";

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: {
    transactions: [
      {
        transaction_id: null,
        sender_card_id: null,
        sender_full_name: null,
        receiver_card_id: null,
        receiver_card_number: null,
        receiver_full_name: null,
        transaction_description: null,
        transaction_amount: null,
        transaction_type: null,
        transaction_date: null,
        transaction_status: null,
      },
    ],
    filterValue: null,
  },
  reducers: {
    setFilterValue(state, action) {
      state.filterValue = action.payload;
      console.log(state.filterValue);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTransactionsHistory.fulfilled, (state, action) => {
      state.transactions = action.payload.reverse();
    });
  },
});

export const transactionsSliceActions = transactionsSlice.actions;

export default transactionsSlice;
