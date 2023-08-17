import axios from './axios'

export const registerJobRequest = job => axios.post(`/jobs`, job)

export const getJobRequest = () => axios.get(`/jobs/`)

export const getJobDetailsRequest = id => axios.get(`/jobs/${id}`)

export const deleteJobRequest = id => axios.delete(`/jobs/${id}`)

export const updateJobRequest = (id, job) => axios.put(`/jobs/${id}`, job)

export const getPublicJobs = (id) => axios.get(`/alljobs/${id}`)

export const getProfile = (nickname) => axios.get(`/profileuser/${nickname}`)
