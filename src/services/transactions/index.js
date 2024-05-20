import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_ENDPOINTS } from "../../constants/endpoints";
import { alphabeticalSort } from "../../utility";
import { client } from "../client";

const id = localStorage.getItem("id");

export const getTransactionsHistory = createAsyncThunk(
  "transactions/all",
  async () => {
    try {
      const { data } = await client.get(
        `${API_ENDPOINTS.getUserTransactions}${id}`,
      );
      data
        .filter((transaction) => transaction.transaction_type !== "PIG-BANK")
        .reverse();
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const makeTransaction = async (body) => {
  try {
    await client.post(API_ENDPOINTS.createTransaction, {
      user_id: +id,
      ...body,
    });
    return true;
  } catch (error) {
    return false;
  }
};

export const getAllUsers = createAsyncThunk("users/getAll", async () => {
  try {
    const { data } = await client.get(API_ENDPOINTS.allUsers);
    const sorted = alphabeticalSort(data);
    return sorted;
  } catch (error) {
    console.log(error);
  }
});
