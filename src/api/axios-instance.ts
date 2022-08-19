import axios, { AxiosInstance } from 'axios';
import { LOCALSTORAGE_TOKEN } from '../constants';
import { serverAddress } from './app-setting';

const token = window.localStorage.getItem(LOCALSTORAGE_TOKEN)
const headers = {
    "Content-Type": "application/json",
    Authorization: token?String(window.localStorage.getItem(LOCALSTORAGE_TOKEN)):'',
  };

export const axiosWithToken: AxiosInstance = axios.create({
  baseURL: serverAddress(), headers ,
});

// API 호출 시 사용할 인스턴스 https://pollen-port-115.notion.site/2-2-1-7b37f443b8c948b3ab442c5ba0e685a4
export const axiosLoginApi = axios.create({ baseURL: serverAddress(), headers });
axiosLoginApi.interceptors.response.use(
	(res) => {
		if (res.data.token) {
			localStorage.setItem(LOCALSTORAGE_TOKEN, res.data.token);
		}
	  return res;
	},
	(error) => {
	  return Promise.reject(error);
	}
);

