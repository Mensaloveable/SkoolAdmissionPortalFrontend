import axios from "../config/axios";
import * as API from "../config/endpoints";

export const postLogin = async (data) => {
  const config = {
    url: API.login,
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data,
  };
  try {
    const response = await axios(config);
    console.log(response.data);
    return response.data.data;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    throw error.response.data;
  }
};

export const postSignup = async (data) => {
  const congif = {
    url: API.signup,
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data,
  };
  try {
    const response = await axios(congif);
    console.log(response.data);
    return response.data.data;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    throw error.response.data;
  }
};
