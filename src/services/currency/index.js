import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../client";
import { API_ENDPOINTS } from "../../constants/endpoints";

const id = localStorage.getItem("id");

export const getCurrencyInfo = createAsyncThunk(
  "get/currencyInfo",
  async () => {
    const { data } = await client.get(API_ENDPOINTS.getCurrencyInfo);
    return data.reverse();
  },
);
export const getUserBalance = createAsyncThunk("get/userBalance", async () => {
  const { data } = await client.get(`${API_ENDPOINTS.getUserBalance}${id}`);
  return data;
});

export const buyCurrency = async (body) => {
  const { data } = await client.post(API_ENDPOINTS.buyCurrency, { ...body });
  return data;
};

export const sellCurrency = async (body) => {
  const { data } = await client.post(API_ENDPOINTS.sellCurrency, { ...body });
  return data;
};
