import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
});

// Month end-points
export const getMonths = (userEmail) => API.post(`/month/months`, userEmail);
export const createMonth = (date) => API.post('/month/', date);
export const updateMonth = (data) => API.post('/month/update', data);


// User end-points
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);