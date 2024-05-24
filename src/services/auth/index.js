import jwtDecode from "jwt-decode";
import { AUTH_API_URL } from "../../constants/endpoints";
import { client } from "../client";

export const signin = async (body) => {
  try {
    const { data } = await client.post(AUTH_API_URL.login, { ...body });
    await tokenDecoder(data);
    return true;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const signup = async (body) => {
  try {
    const { data } = await client.post(AUTH_API_URL.signUp, { ...body });
    await tokenDecoder(data);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const googleDecode = (credentials) => {
  const decoded = jwtDecode(credentials);
  const userData = {
    email: decoded.email,
    password: decoded.sub,
    first_name: decoded.given_name,
    second_name: decoded.family_name,
    imageUrl: decoded.picture,
  };
  return userData;
};

export const googleAuth = async (body) => {
  try {
    const { data } = await client.post(AUTH_API_URL.authGoogle, { ...body });
    return data;
  } catch (error) {
    console.error("GoogleAuth Failed", error);
  }
};

export const tokenDecoder = async (data) => {
  localStorage.setItem("token", data.token);
  const decoded = jwtDecode(data.token);
  localStorage.setItem("id", decoded.id);
  return;
};
