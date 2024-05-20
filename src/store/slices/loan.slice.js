import { createSlice } from "@reduxjs/toolkit";
import { getLoansThunk } from "../../services/loans";

// interface Loan   {
//         id: Number,
//         borrower_id: Number,
//         amount: Number,
//         amount_to_pay: Number,
//         interest_rate: Number,
//         term: Date,
//         monthly_payment: Number,
//         start_date: Date,
//         end_date: Date,
//         status: String,
//       },

const loansSlice = createSlice({
  name: "loans",
  initialState: {
    loan: null,
    accumulated: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLoansThunk.fulfilled, (state, action) => {
      state.loan = action.payload;
    });
  },
});

export const loansSliceActions = loansSlice.actions;
export default loansSlice;
