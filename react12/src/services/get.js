import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getAllData = async () => {
  const response = await axios.get(API_URL);
  const { statusText, data } = response;
  if (!statusText === "OK") {
    throw new Error(`Error! Response status: ${response.status}`);
  }

  return data;
};

export const getOneData = async (id) => {
  const response = await axios.get(API_URL + `/${id}`);
  const { statusText, data } = response;
  if (!statusText === "OK") {
    throw new Error(`Error! Response status: ${response.status}`);
  }

  return data;
};
