import axios from './axios'

export const registerJobRequest = job => axios.post(`/jobs`, job)