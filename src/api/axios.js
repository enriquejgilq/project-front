import axios from "axios";
import { useCommonFn } from './useCommonFn'

const { myCookieValue } = useCommonFn()


const instance = axios.create({
    // baseURL: 'http://localhost:8080/api',
    baseURL: "https://project-back-vqbb-dev.fl0.io/api",
    withCredentials: true,
    headers: {
        'Authorization': `Bearer ${myCookieValue}`,
        'Content-Type': 'application/json',
    },
});


export default instance;
