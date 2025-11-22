import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://691ee09ebb52a1db22bf8355.mockapi.io',
    responseType: 'json',
    timeout: 1000
})

export {axiosInstance}