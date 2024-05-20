import jwtDecode from "jwt-decode";
import { AUTH_API_URL } from "../../constants/endpoints";
import { client } from "../client";

export const signin = async (body) => {
  try {
    const { data } = await client.post(AUTH_API_URL.login, { ...body });
    localStorage.setItem("token", data.token);
    const decoded = jwtDecode(data.token);
    localStorage.setItem("id", decoded.id);
    return true;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const signup = async (body) => {
  try {
    const { data } = await client.post(AUTH_API_URL.signUp, { ...body });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const googleDecode = async (credentials) => {
  const decoded = jwtDecode(credentials);
  const userData = {
    email: decoded.email,
    password: decoded.sub,
    firstName: decoded.given_name,
    secondName: decoded.family_name,
    imageUrl: decoded.picture,
  };
  return userData;
};
