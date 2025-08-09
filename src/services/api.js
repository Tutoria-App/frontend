import axios from 'axios';

const API = axios.create({
    baseURL: 'https://tutoria-backend-cmtd.onrender.com/api', // match your backend port
    withCredentials: true
});

export default API;
