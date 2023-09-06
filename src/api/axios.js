import axios from "axios";

const instance = axios.create({
    baseURL: "https://project-back-vqbb-dev.fl0.io/api",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});



export default instance;
