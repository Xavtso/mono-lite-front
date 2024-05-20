import { createSelector } from "@reduxjs/toolkit";

const selectTransactions = (state) => state.transactions.transactions;

export const selectJarTransactions = createSelector(
  [selectTransactions],
  (transactions) => {
    const jarTransactions = transactions.filter(
      (transaction) => transaction.transaction_type === "PIG-BANK",
    );
    return jarTransactions;
  },
);
