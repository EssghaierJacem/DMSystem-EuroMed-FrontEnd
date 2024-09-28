import axios from 'axios';

// // Function to retrieve CSRF token from cookie
// const getCsrfToken = () => {
//     const match = document.cookie.match(new RegExp('(^| )XSRF-TOKEN=([^;]+)'));
//     return match ? match[2] : null;
// };

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api', 
    withCredentials: true, // Ensures that cookies are sent with requests
});


export default axiosInstance;
