import axios from './axios'


export const registerRequest = user => axios.post(`/register`, user)

export const loginRequest = user => axios.post(`/login`, user)

//export const verifyToken = token => axios.get(`/verifyToken`, { token: token })
export const verifyRequest = (token) => {
    return axios.get('/verify', {
        headers: {
            'Authorization': `Bearer ${token.token}`,
            'Content-Type': 'application/json',
        },
    });
};