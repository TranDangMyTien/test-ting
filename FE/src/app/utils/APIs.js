import axios from 'axios';
const BASE_URL = "http://localhost:8081/";

export const endpoints = {
    'kols' : '/kols',
};
const APIs = axios.create({
    baseURL: BASE_URL
  });
export default APIs;
