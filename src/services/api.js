import axios from 'axios';

const API = axios.create({
  baseURL: 'https://job-backend-render-2.onrender.com',
});

// Add JWT token to every request if available
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
