import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';
import { Race } from '../../types';

export interface CommonState {
  races: {
    loading: boolean;
    error: boolean;
    options: Race[];
    selected?: string;
  },
  subraces?: {
    loading: boolean;
    error: boolean;
    options: Race[];
    selected?: string;
  },
  classes: {
    loading: boolean;
    error: boolean;
    options: [];
    selected?: string;
  },
  subclasses?: {
    loading: boolean;
    error: boolean;
    options: Race[];
    selected?: string;
  },
  backgrounds: {
    loading: boolean;
    error: boolean;
    options: [];
    selected?: string;
  },
}

const initialState: CommonState = {
  races: {
    loading: false,
    error: false,
    options: [],
  },
  subraces: {
    loading: false,
    error: false,
    options: []
  },
  classes: {
    loading: false,
    error: false,
    options: [],
  },
  subclasses: {
    loading: false,
    error: false,
    options: []
  },
  backgrounds: {
    loading: false,
    error: false,
    options: []
  },
};

const SLICE_NAME = 'common';

const commonSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    getAllRacesLoading: (state) => {
      state.races.loading = true;
    },
    getAllRacesSuccess: (state, action: PayloadAction<Race[]>) => {
      state.races.loading = false;
      state.races.error = false;
      state.races.options = action.payload;
    },
    getAllRacesFailure: (state) => {
      state.races.loading = false;
      state.races.error = true;
    },
  },
});

export const { reducer: commonReducer } = commonSlice;

export const commonActions = {
  ...commonSlice.actions,

  getAllRaces: createAction(`${SLICE_NAME}/getAllRaces`),
};
