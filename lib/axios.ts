// import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // e.g. 'https://api.example.com'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   withCredentials: true, // optional: only if your API uses cookies
// });

// export default axiosInstance;

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

// This function injects token before request (see below)
export default axiosInstance;
