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
    return response.data;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    throw error.response.data;
  }
};

export const postSignup = async (data) => {
  const config = {
    url: API.signup,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data,
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    throw error.response.data;
  }
};

export const patchCreatePassword = async (data) => {
  const config = {
    url: API.createPassword,
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data,
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    throw error.response.data;
  }
};

export const patchForgotPassword = async (data) => {
  const config = {
    url: API.passwordReset,
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data,
  };
  console.log(config);
  try {
    const response = await axios(config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    throw error.response.data;
  }
};
