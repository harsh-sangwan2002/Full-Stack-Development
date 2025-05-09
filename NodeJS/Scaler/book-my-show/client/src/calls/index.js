import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api/users',
    headers: {
        'Content-Type': 'application/json'
    }
})