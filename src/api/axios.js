import axios from "axios";

const getCookie = name => {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
};

const myCookieValue = getCookie('token');

const instance = axios.create({
    baseURL: "https://project-back-vqbb-dev.fl0.io/api",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

if (myCookieValue !== null) {
    instance.defaults.headers.common["Cookie"] = `token=${myCookieValue}`;
    console.log('Cookie value1:', myCookieValue);
} else {
    console.log('Cookie not found');
}

export default instance;
