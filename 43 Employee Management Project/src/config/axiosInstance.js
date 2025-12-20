import axios from 'axios'

const api = axios.create({
  baseURL: 'https://694413977dd335f4c35f35e4.mockapi.io/', 
  timeout: 5000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;