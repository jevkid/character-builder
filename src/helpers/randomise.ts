import { CommonModel } from "../types";

export const getRandomInt = (maxInt: number, minInt?: number) => {
  const min = minInt ? Math.ceil(minInt) : 0;
  const max = Math.floor(maxInt);
  return Math.floor(Math.random() * (max - min) + min);
};

export const handleRandomise = (arr: Array<CommonModel>) => {
  const randomInt = getRandomInt(arr.length);
  return arr[randomInt];
};
