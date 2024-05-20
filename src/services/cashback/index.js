import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../client";
import { API_ENDPOINTS } from "../../constants/endpoints";
const id = localStorage.getItem("id");

export const getCashbackBalance = createAsyncThunk(
  "cashback/getBalance",
  async () => {
    try {
      const { data } = await client.get(
        `${API_ENDPOINTS.getCashbackBalance}${id}`,
      );
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const withdrawCashback = async (amount) => {
  try {
    const { data } = await client.post(API_ENDPOINTS.withdrawCashback, {
      user_id: +id,
      amount: +amount,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
