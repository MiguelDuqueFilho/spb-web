import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://54.164.153.254/api',
  // baseURL: 'http://192.168.100.68/api',
});
