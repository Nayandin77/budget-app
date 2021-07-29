import axios from 'axios';

const API = axios.create({baseURL: '/api' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
});

// export const fetchMonthYear = (monthYear) => API.get(`/calender/$`)
export const fetchAmount = (id) => API.get(`/calender/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);