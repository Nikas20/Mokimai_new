import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const putData = async (id, dataToPut) => {
  const response = await axios.put(API_URL + `/${id}`, dataToPut);

  const { statusText, data } = response;

  if (!statusText === "OK") {
    throw new Error(`Error! Response status: ${response.status}`);
  }
  return data;
};
