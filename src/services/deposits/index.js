import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../client";
import { API_ENDPOINTS } from "../../constants/endpoints";
const id = localStorage.getItem("id");

export const getDepositsThunk = createAsyncThunk("get/deposits", async () => {
  const { data } = await client.get(`${API_ENDPOINTS.getUserDeposits}${id}`);
  return data;
});
