import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from '..';

export const useAllRaces = () =>
  useSelector((state: RootState) => state.common.races.options, shallowEqual);

export const useDetailedRace = () =>
  useSelector((state: RootState) => state.common.detailedRace.details, shallowEqual);

export const useAllSubRaces = () =>
  useSelector((state: RootState) => state.common.subRaces.options, shallowEqual);

export const useAllClasses = () =>
  useSelector((state: RootState) => state.common.classes.options, shallowEqual);

export const useDetailedClass = () =>
  useSelector((state: RootState) => state.common.detailedClass.details, shallowEqual);

export const useAllSubClasses = () =>
  useSelector((state: RootState) => state.common.subClasses.options, shallowEqual);

export const useAllBackgrounds = () =>
  useSelector((state: RootState) => state.common.backgrounds.details, shallowEqual);

export const useBackgroundParents = () =>
  useSelector((state: RootState) => state.common.backgrounds.details?.parents, shallowEqual);

export const useBackgroundGeneral = () =>
  useSelector((state: RootState) => state.common.backgrounds.details?.background, shallowEqual);
