import { FormInputs } from "../types";

export const CHARACTER_KEY = 'character_builder';

export const getCharacterFromLocalStorage = () => {
  try {
    const character = localStorage.getItem(CHARACTER_KEY);
    if (character === null) {
      return undefined;
    }
    return JSON.parse(character);
  } catch (e) {
    console.error('There was an error getting data from local storage: ', e);
    return undefined;
  }
};

export const setCharacterToLocalStorage = (character: FormInputs) => {
  try {
    const existingCharacter = getCharacterFromLocalStorage();
    if (existingCharacter && existingCharacter !== null) {
      if (existingCharacter.length && existingCharacter.length > 0) {
        let copiedArray = [...existingCharacter];
        copiedArray.push(character);
        localStorage.setItem(CHARACTER_KEY, JSON.stringify(copiedArray));
      } else {
        let characterArray = [];
        characterArray.push(existingCharacter);
        characterArray.push(character);
        localStorage.setItem(CHARACTER_KEY, JSON.stringify(characterArray));
      }
    } else {
      const characterAsString = JSON.stringify(character);
      localStorage.setItem(CHARACTER_KEY, characterAsString);
    }
    return character;
  } catch (e) {
    console.error('There was an error setting data to local storage: ', e);
    return undefined;
  }
};
