import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://51.255.106.17:8080/api', 
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;