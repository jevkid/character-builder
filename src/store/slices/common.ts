import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';
import { APIAllRacesResponse, APIAllSubRacesResponse, APIAllClassesResponse, APIAllSubClassesResponse, APIAlignmentsResponse, APIAllAlignmentsResponse } from '../../api/types';
import { BackgroundDetails, Class, Race, Alignment } from '../../types';

export interface CommonState {
  races: {
    loading: boolean;
    error: boolean;
    options?: APIAllRacesResponse;
  },
  detailedRace: {
    loading: boolean;
    error: boolean;
    details?: Race;
  },
  subRaces: {
    loading: boolean;
    error: boolean;
    options?: APIAllSubRacesResponse;
  },
  classes: {
    loading: boolean;
    error: boolean;
    options?: APIAllClassesResponse;
  },
  detailedClass: {
    loading: boolean;
    error: boolean;
    details?: Class;
  }
  subClasses: {
    loading: boolean;
    error: boolean;
    options?: APIAllSubClassesResponse;
  },
  backgrounds: {
    loading: boolean;
    error: boolean;
    details?: BackgroundDetails;
  },
  alignments: {
    loading: boolean;
    error: boolean;
    options?: APIAllAlignmentsResponse;
  }
  detailedAlignment: {
    loading: boolean;
    error: boolean;
    details?: APIAlignmentsResponse;
  }
}

const initialState: CommonState = {
  races: {
    loading: false,
    error: false,
  },
  detailedRace: {
    loading: false,
    error: false,
  },
  subRaces: {
    loading: false,
    error: false,
  },
  classes: {
    loading: false,
    error: false,
  },
  detailedClass: {
    loading: false,
    error: false,
  },
  subClasses: {
    loading: false,
    error: false,
  },
  backgrounds: {
    loading: false,
    error: false,
  },
  alignments: {
    loading: false,
    error: false,
  },
  detailedAlignment: {
    loading: false,
    error: false,
  },
};

const SLICE_NAME = 'common';

const commonSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    getDetailedRaceLoading: (state) => {
      state.detailedRace.loading = true;
    },
    getDetailedRaceSuccess: (state, action: PayloadAction<Race>) => {
      state.detailedRace.loading = false;
      state.detailedRace.error = false;
      state.detailedRace.details = action.payload;
    },
    getDetailedRaceFailure: (state) => {
      state.detailedRace.loading = false;
      state.detailedRace.error = true;
    },
    getAllRacesLoading: (state) => {
      state.races.loading = true;
    },
    getAllRacesSuccess: (state, action: PayloadAction<APIAllRacesResponse>) => {
      state.races.loading = false;
      state.races.error = false;
      state.races.options = action.payload;
    },
    getAllRacesFailure: (state) => {
      state.races.loading = false;
      state.races.error = true;
    },
    getAllSubRacesLoading: (state) => {
      state.subRaces.loading = true;
    },
    getAllSubRacesSuccess: (state, action: PayloadAction<APIAllSubRacesResponse>) => {
      state.subRaces.loading = false;
      state.subRaces.error = false;
      state.subRaces.options = action.payload;
    },
    getAllSubRacesFailure: (state) => {
      state.subRaces.loading = false;
      state.subRaces.error = true;
    },
    getAllClassesLoading: (state) => {
      state.subRaces.loading = true;
    },
    getAllClassesSuccess: (state, action: PayloadAction<APIAllClassesResponse>) => {
      state.classes.loading = false;
      state.classes.error = false;
      state.classes.options = action.payload;
    },
    getAllClassesFailure: (state) => {
      state.classes.loading = false;
      state.classes.error = true;
    },
    getDetailedClassLoading: (state) => {
      state.detailedClass.loading = true;
    },
    getDetailedClassSuccess: (state, action: PayloadAction<Class>) => {
      state.detailedClass.loading = false;
      state.detailedClass.error = false;
      state.detailedClass.details = action.payload;
    },
    getDetailedClassFailure: (state) => {
      state.detailedClass.loading = false;
      state.detailedClass.error = true;
    },
    getAllSubClassesLoading: (state) => {
      state.subClasses.loading = true;
    },
    getAllSubClassesSuccess: (state, action: PayloadAction<APIAllSubClassesResponse>) => {
      state.subClasses.loading = false;
      state.subClasses.error = false;
      state.subClasses.options = action.payload;
    },
    getAllSubClassesFailure: (state) => {
      state.subClasses.loading = false;
      state.subClasses.error = true;
    },
    getAllBackgroundsLoading: (state) => {
      state.backgrounds.loading = true;
    },
    getAllBackgroundsSuccess: (state, action: PayloadAction<BackgroundDetails>) => {
      state.backgrounds.loading = false;
      state.backgrounds.error = false;
      state.backgrounds.details = action.payload;
    },
    getAllBackgroundsFailure: (state) => {
      state.backgrounds.loading = false;
      state.backgrounds.error = true;
    },
    getAllAlignmentsLoading: (state) => {
      state.alignments.loading = true;
    },
    getAllAlignmentsSuccess: (state, action: PayloadAction<APIAllAlignmentsResponse>) => {
      state.alignments.loading = false;
      state.alignments.error = false;
      state.alignments.options = action.payload;
    },
    getAllAlignmentsFailure: (state) => {
      state.alignments.loading = false;
      state.alignments.error = true;
    },
    getAlignmentDetailsLoading: (state) => {
      state.detailedAlignment.loading = true;
    },
    getAlignmentDetailsSuccess: (state, action: PayloadAction<Alignment>) => {
      state.detailedAlignment.loading = false;
      state.detailedAlignment.error = false;
      state.detailedAlignment.details = action.payload;
    },
    getAlignmentDetailsFailure: (state) => {
      state.detailedAlignment.loading = false;
      state.detailedAlignment.error = true;
    },
  },
});

export const { reducer: commonReducer } = commonSlice;

export const commonActions = {
  ...commonSlice.actions,

  getAllRaces: createAction(`${SLICE_NAME}/getAllRaces`),
  getRaceDetails: createAction(
    `${SLICE_NAME}/getRaceDetails`,
    (payload: { index: string }) => ({
      payload,
    }),
  ),
  getAllSubRaces: createAction(
    `${SLICE_NAME}/getAllSubRaces`,
    (payload: { index: string }) => ({
      payload,
    }),
  ),
  getAllClasses: createAction(`${SLICE_NAME}/getAllClasses`),
  getClassDetails: createAction(
    `${SLICE_NAME}/getClassDetails`,
    (payload: { index: string }) => ({
      payload,
    }),
  ),
  getAllSubClasses: createAction(
    `${SLICE_NAME}/getAllSubClasses`,
    (payload: { index: string }) => ({
      payload,
    })
  ),
  getAllBackgrounds: createAction(`${SLICE_NAME}/getAllBackgrounds`),
  getBackgroundDetails: createAction(
    `${SLICE_NAME}/getBackgroundDetails`,
    (payload: { index: string }) => ({
      payload,
    }),
  ),
  getAllAlignments: createAction(`${SLICE_NAME}/getAllAlignments`),
  getAlignmentDetails: createAction(
    `${SLICE_NAME}/getAlignmentDetails`,
    (payload: { index: string }) => ({
      payload,
    }),
  ),
};
