import axios from "axios";

const api = axios.create({
    baseURL: '/api'
})

export const setAuth = (token) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export const clearAuth = () => {
    delete api.defaults.headers.common['Authorization'];
}

// Только токен:
const maybeToken = localStorage.getItem("jwt");
if (maybeToken) {
    setAuth(maybeToken);
}

export default api;