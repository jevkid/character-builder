import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from '..';

export const useGetCharacterData = () =>
  useSelector((state: RootState) => state.characterBuilder.character.data, shallowEqual);

export const useCharacterSavingPending = () =>
  useSelector((state: RootState) => state.characterBuilder.character.savePending, shallowEqual);

export const useCharacterSavingSuccess = () =>
  useSelector((state: RootState) => state.characterBuilder.character.saveSuccess, shallowEqual);