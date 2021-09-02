import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from '..';

export const useGetCharacterData = () =>
  useSelector((state: RootState) => state.characterBuilder.character.data, shallowEqual);
