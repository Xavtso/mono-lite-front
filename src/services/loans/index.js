import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../client";
import { API_ENDPOINTS } from "../../constants/endpoints";
const id = localStorage.getItem("id");

export const getLoansThunk = createAsyncThunk("get/loans", async () => {
  const { data } = await client.get(`${API_ENDPOINTS.getLoanById}${id}`);
  console.log(data);
  return data;
});

export const createLoan = async (body) => {
  const { data } = await client.post(API_ENDPOINTS.createLoan, { ...body });
  return data;
};

export const payLoanPart = async (body) => {
  const { data } = await client.post(API_ENDPOINTS.payLoanPart, { ...body });
  return data;
};
export const payLoanFull = async (body) => {
  const { data } = await client.post(API_ENDPOINTS.payLoanFull, { ...body });
  return data;
};
