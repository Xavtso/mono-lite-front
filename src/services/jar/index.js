import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_ENDPOINTS } from "../../constants/endpoints";
import { alphabeticalSort } from "../../utility";
import { client } from "../client";
const id = localStorage.getItem("id");

export const getUserJars = createAsyncThunk("jars/getUserJars", async () => {
  try {
    const { data } = await client.get(`${API_ENDPOINTS.getUserJars}${id}`);
    const sortedJars = alphabeticalSort(data);
    return sortedJars;
  } catch (error) {
    console.log(error);
  }
});

export const createJar = async ({ title, amount }) => {
  try {
    const { data } = await client.post(API_ENDPOINTS.createJar, {
      vault_title: title,
      target_sum: amount,
      user_id: id,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const doJarDeposit = async (jarId, amount) => {
  try {
    const { data } = await client.post(API_ENDPOINTS.depositToJar, {
      vault_id: jarId,
      user_id: +id,
      amount: +amount,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const doJarWithdraw = async (jarId, amount) => {
  try {
    const { data } = await client.post(API_ENDPOINTS.withdrawFromJar, {
      vault_id: jarId,
      user_id: +id,
      amount: +amount,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const doBreakJar = async (jarId) => {
  try {
    const { data } = await client.post(API_ENDPOINTS.breakJar, {
      vault_id: jarId,
      user_id: +id,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const changeJarCredentials = async (jarId, amount, title ) => {
  try {
    const { data } = await client.post(API_ENDPOINTS.changeJarCredentials, {
      user_id: id,
      vault_id: jarId,
      vault_title: title,
      target_sum: +amount,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
