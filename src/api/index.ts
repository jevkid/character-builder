import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { APIRacesResponse, APIAllRacesResponse, APIAllClassesResponse, APIAllSubClassesResponse, APIAllSubRacesResponse, APIClassesResponse, APIAllAlignmentsResponse, APIAlignmentsResponse } from './types';
import { backgroundInfo } from './backgrounds';

export const ApiAxiosInstance: AxiosInstance = axios.create({
  baseURL: "https://www.dnd5eapi.co/api/",
  validateStatus: () => true,
});

export const BaseAxiosInstance: AxiosInstance = axios.create({
  baseURL: "https://www.dnd5eapi.co/",
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
    .then((success: AxiosResponse<APIAllRacesResponse>) => success)
    .catch((reason: AxiosResponse) => reason);
};

export const getRaceDetails = (index?: string) => {
  return ApiAxiosInstance.get(`races${index ? `/${index}` : ''}`)
    .then((success: AxiosResponse<APIRacesResponse>) => success)
    .catch((reason: AxiosResponse) => reason);
};

export const getAllSubRaces = (index: string) => {
  return ApiAxiosInstance.get(`subraces/${index}`)
    .then((success: AxiosResponse<APIAllSubRacesResponse>) => success)
    .catch((reason: AxiosResponse) => reason);
};

export const getAllClasses = () => {
  return ApiAxiosInstance.get('classes')
    .then((success: AxiosResponse<APIAllClassesResponse>) => success)
    .catch((reason: AxiosResponse) => reason);
};

export const getClassDetails = (index?: string) => {
  return ApiAxiosInstance.get(`classes${index ? `/${index}` : ''}`)
    .then((success: AxiosResponse<APIClassesResponse>) => success)
    .catch((reason: AxiosResponse) => reason);
};

export const getAllSubClasses = (index: string) => {
  return ApiAxiosInstance.get(`subclasses/${index}`)
    .then((success: AxiosResponse<APIAllSubClassesResponse>) => success)
    .catch((reason: AxiosResponse) => reason);
};

export const getAllAlignments = () => {
  return ApiAxiosInstance.get('alignments')
    .then((success: AxiosResponse<APIAllAlignmentsResponse>) => success)
    .catch((reason: AxiosResponse) => reason);
}

export const getAlignmentDetails = (index: string) => {
  return ApiAxiosInstance.get(`alignments/${index}`)
    .then((success: AxiosResponse<APIAlignmentsResponse>) => success)
    .catch((reason: AxiosResponse) => reason);
}

export const getAllBackgrounds = () => {
  return {
    data: backgroundInfo
  };
};
