import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_ENDPOINTS } from "../../constants/endpoints";
import { client } from "../client";

export const getCardInfo = createAsyncThunk("card/getInfo", async () => {
  try {
    const { data } = await client.get(
      `${API_ENDPOINTS.getCard}${localStorage.getItem("id")}`,
      );
    return data;
  } catch (error) {
    console.log(error);
    // return error
  }
});
