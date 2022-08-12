import axios, { AxiosInstance } from 'axios';
import { LOCALSTORAGE_TOKEN } from '../constants';
import { serverAddress } from './app-setting';

const headers = {
    "Content-Type": "application/json",
    Authorization: String(window.localStorage.getItem(LOCALSTORAGE_TOKEN)),
  };

export const axiosWithToken: AxiosInstance = axios.create({
  baseURL: serverAddress(), headers ,
});

