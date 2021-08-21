import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { APIRacesResponse } from './types';

export const ApiAxiosInstance: AxiosInstance = axios.create({
  baseURL: "https://www.dnd5eapi.co/api/",
  validateStatus: () => true,
});

ApiAxiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.resolve(error);
  },
);

export const getAllRaces = () => {
  return ApiAxiosInstance.get('races')
    .then((success: AxiosResponse<APIRacesResponse>) => success)
    .catch((reason: AxiosResponse) => reason);
};

export const getAllClasses = () => {
  return ApiAxiosInstance.get('classes')
    .then((success: AxiosResponse) => success)
    .catch((reason: AxiosResponse) => reason);
};