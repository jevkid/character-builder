import { Race, SubRace, Class, SubClass, CommonModel, Background } from "../types";

export interface APICommonResponse {
  count: number;
  results: CommonModel[];
}
export interface APIAllRacesResponse {
  count: number;
  results: CommonModel[];
}

export interface APIAllSubRacesResponse {
  count: number;
  results: CommonModel[];
}

export interface APIAllClassesResponse {
  count: number;
  results: CommonModel[];
}

export interface APIAllSubClassesResponse {
  count: number;
  results: CommonModel[];
}

export interface APIAllBackgroundsResponse {
  count: number;
  results: CommonModel[];
}

export type APIRacesResponse = Race;

export type APISubRacesResponse = SubRace;

export type APIClassesResponse = Class;

export type APISubClassesResponse = SubClass;

export type APIBackgroundsResponse = Background;