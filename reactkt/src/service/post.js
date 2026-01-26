import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const postData = async (dataToPost) => {
  const response = await axios.post(API_URL, dataToPost);
  const { statusText, data } = response;

  if (!statusText === "OK") {
    throw new Error(`Error! Response status: ${response.status}`);
  }
  return data;
};
