import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL

export const upadateData = async (id, dataToUpdate) => {
    const response = await axios.patch(API_URL + id, dataToUpdate)

    const {statusText, data} = response

    if (!statusText === "OK") {
        throw new Error(`Error Response status: ${response.status}`);
        
    }
    return data;
}