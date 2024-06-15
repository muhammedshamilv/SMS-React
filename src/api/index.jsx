import axios from 'axios';
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
});

const login = ({ email, password }) =>
  instance.post(`/auth/login/`, { email, password }).catch((error) => {
    throw new Error(error);
  });

const register = ({ email, password }) =>
  instance.post(`/auth/register/`, { email, password }).catch((error) => {
    throw new Error(error);
  });

export { login, register };
