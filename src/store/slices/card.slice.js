import { createSlice } from "@reduxjs/toolkit";
import { getCardInfo } from "../../services/card";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    card: {
      id: null,
      user_id: null,
      card_number: null,
      card_balance: null,
      owner_name: null,
      owner_surname: null,
      blocked: false,
      blockReason: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCardInfo.fulfilled, (state, action) => {
      state.card = action.payload;
    });
  },
});

export const cardSliceActions = cardSlice.actions;

export default cardSlice;
