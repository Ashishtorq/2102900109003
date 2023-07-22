// api.js
import axios from 'axios';

const baseURL = 'http://20.244.56.144:80/train';

const instance = axios.create({
  baseURL,
});


instance.defaults.headers.common['Authorization'] = 'Bearer FKDLjg';

export const getTrains = () => instance.get('/trains');
