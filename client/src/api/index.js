import axios from "axios";
const BASE_URL = "https://bookmyshow-deployment-1.onrender.com/"
//react application will un on 3000
export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`
    }
});