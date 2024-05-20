import { createSelector } from "@reduxjs/toolkit";

const selectTransactions = (state) => state.transactions.transactions;
const selectFilterValue = (state) => state.transactions.filterValue;

export const selectFilteredTransactions = createSelector(
  [selectTransactions, selectFilterValue],
  (transactions, filterValue) => {
    // console.log(transactions);
    if (filterValue && filterValue !== "Reset") {
      const filteredTransactions = transactions.filter(
        (transaction) => transaction.transaction_type === filterValue,
      );
      return filteredTransactions;
    }
    return transactions;
  },
);
