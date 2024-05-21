import { configureStore } from "@reduxjs/toolkit";
import transactionsSlice from "./slices/transactions.slice";
import cardSlice from "./slices/card.slice";
import jarSlice from "./slices/jar.slice";
import loansSlice from "./slices/loan.slice";
import depositsSlice from "./slices/deposit.slice";
import userSlice from "./slices/users.slice";
import cashbackSlice from "./slices/cashback.slice";
import currencySlice from "./slices/currency.slice";

const store = configureStore({
  reducer: {
    card: cardSlice.reducer,
    transactions: transactionsSlice.reducer,
    jar: jarSlice.reducer,
    loans: loansSlice.reducer,
    deposit: depositsSlice.reducer,
    users: userSlice.reducer,
    cashback: cashbackSlice.reducer,
    currency: currencySlice.reducer,
  },
});

export default store;
