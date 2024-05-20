import { API_ENDPOINTS } from "../../constants/endpoints";
import { client } from "../client";

export const deleteUser = async ({ email, password }) => {
  try {
    const { data } = await client.post(API_ENDPOINTS.deleteUser, {
      email,
      password,
    });
    return data;
  } catch (error) {
    return error;
  }
};
