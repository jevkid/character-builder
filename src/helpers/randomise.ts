import { CommonModel } from "../types";

export const getRandomInt = (maxInt: number) => {
  return Math.floor(Math.random() * maxInt);
};

export const handleRandomise = (arr: Array<CommonModel>) => {
  const randomInt = getRandomInt(arr.length);
  return arr[randomInt];
};