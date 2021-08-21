import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from '..';

export const useAllRaces = () =>
  useSelector((state: RootState) => state.common.races.options, shallowEqual);