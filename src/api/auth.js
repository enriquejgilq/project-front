import axios from './axios'


export const registerRequest = user => axios.post(`/register`, user)

export const loginRequest = user => axios.post(`/login`, user)

//export const verifyToken = token => axios.get(`/verifyToken`, { token: token })
export const verifyRequest = (token) => {

    return axios.get("/verifyToken", {
        headers: {
            "Content-Type": "application/json",
            token: `${token.token}`,
        },
    });
};