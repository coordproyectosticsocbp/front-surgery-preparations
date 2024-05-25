import axios from "axios";

export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_NODE_ENV === 'development' ? import.meta.env.VITE_BACKEND_SERVICE : import.meta.env.VITE_BACKEND_SERVICE_P,
    withCredentials: false,
})

apiClient.interceptors.response.use(
    (response) => {
        return response
    },
    function(error) {
        if (error.response) return Promise.reject(error)
    }
)