import axios from 'axios';
import LocalStorageService from '../utils/LocalStorageServices';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
});

instance.interceptors.request.use(
  // TODO: Fix the below type Error
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (config) => {
    if (config.headers === undefined) {
      config.headers = {};
    }
    const token = LocalStorageService.getAccessToken();
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

const login = ({ email, password }) =>
  instance.post(`/auth/login`, { email, password }).catch((error) => {
    throw new Error(error);
  });

const register = ({ email, password }) =>
  instance.post(`/auth/register`, { email, password }).catch((error) => {
    throw new Error(error);
  });

const sms = (data) =>
  instance.post(`/sms`, data).catch((error) => {
    throw new Error(error);
  });

export { login, register, sms };
