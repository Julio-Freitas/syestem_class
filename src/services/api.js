import axios from 'axios';

import { API_URL } from './config.json';
// import { getToken } from './getToken';

const api = axios.create({ baseURL: API_URL });

// api.interceptors.request.use(
//     async (config) => {
//         const token = getToken();

//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

export default api;
