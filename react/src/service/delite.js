import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL

export const deliteData =async (id) => {
    const response = await axios.get(API_URL + `/${id}`)
    const {name} = response.data

    const confirm = window.confirm(`Are you sure want delite ${name}`)
    if(!confirm) return;


    const deleteResponse = await axios.delete(API_URL + `/${id}`)

    return deleteResponse.data
     
}