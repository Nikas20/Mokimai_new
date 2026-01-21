import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL

export const deliteDAta =async (id) => {
    const response = await axios.get(API_URL + "/" + id)
    const {title} = response.data

    const confirm = window.confirm(`Are you sure want delite ${title}`)
    if(!confirm) return;


    const deleteResponse = await axios.delete(API_URL + "/" + id)

    return deleteResponse.data
     
}