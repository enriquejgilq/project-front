import axios from './axios'

export const registerJobRequest = job => axios.post(`/jobs`, job, { headers: { 'Content-Type': 'multipart/form-data' } })

export const getJobRequest = () => axios.get(`/jobs/`)

export const getJobDetailsRequest = id => axios.get(`/jobs/${id}`)

export const deleteJobRequest = id => axios.delete(`/jobs/${id}`)

export const updateJobRequest = (id, job) => axios.put(`/jobs/${id}`, job)

export const getPublicJobs = (nickname) => axios.get(`/alljobs/${nickname}`)

export const getProfile = (nickname) => axios.get(`/profileuser/${nickname}`)

//crud about me 

export const getPublicAboutme = (nickname) => axios.get(`/aboutmepublic/${nickname}`)

export const registerAboutMe = aboutme => axios.post(`/aboutme`, aboutme, { headers: { 'Content-Type': 'multipart/form-data' } })
