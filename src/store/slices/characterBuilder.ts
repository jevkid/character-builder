import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

// set selected race
// set selected subrace
// set selected class
// set selected subclass
// set ability scores { each individual one }
// set selected background
// save form


export interface CharacterBuilderState {
  selectedRace: {
    selected?: string;
    pending?: boolean;
    success?: boolean;
    failure?: boolean;
  };
  selectedSubrace: {
    selected?: string;
    pending?: boolean;
    success?: boolean;
    failure?: boolean;
  };
  selectedClass: {
    selected?: string;
    pending?: boolean;
    success?: boolean;
    failure?: boolean;
  };
  selectedSubclass: {
    selected?: string;
    pending?: boolean;
    success?: boolean;
    failure?: boolean;
  };
}

const initialState: CharacterBuilderState = {
  selectedRace: {},
  selectedSubrace: {},
  selectedClass: {},
  selectedSubclass: {},
};

const SLICE_NAME = 'characterBuilder';

const characterBuilderSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    setSelectedRaceToStatePending: (state) => {
      state.selectedRace.pending = true;
      state.selectedRace.success = false;
      state.selectedRace.failure = false;
    },
    setSelectedRaceToStateSuccess: (state, action: PayloadAction<string>) => {
      state.selectedRace.selected = action.payload;
      state.selectedRace.pending = false;
      state.selectedRace.success = true;
      state.selectedRace.failure = false;
    },
    setSelectedRaceToStateFailure: (state) => {
      state.selectedRace.pending = false;
      state.selectedRace.success = false;
      state.selectedRace.failure = true;
    },
    setSelectedSubraceToStatePending: (state) => {
      state.selectedSubrace.pending = true;
      state.selectedSubrace.success = false;
      state.selectedSubrace.failure = false;
    },
    setSelectedSubraceToStateSuccess: (state, action: PayloadAction<string>) => {
      state.selectedSubrace.selected = action.payload;
      state.selectedSubrace.pending = false;
      state.selectedSubrace.success = true;
      state.selectedSubrace.failure = false;
    },
    setSelectedSubraceToStateFailure: (state) => {
      state.selectedSubrace.pending = false;
      state.selectedSubrace.success = false;
      state.selectedSubrace.failure = true;
    },
    setSelectedClassToStatePending: (state) => {
      state.selectedClass.pending = true;
      state.selectedClass.success = false;
      state.selectedClass.failure = false;
    },
    setSelectedClassToStateSuccess: (state, action: PayloadAction<string>) => {
      state.selectedClass.selected = action.payload;
      state.selectedClass.pending = false;
      state.selectedClass.success = true;
      state.selectedClass.failure = false;
    },
    setSelectedClassToStateFailure: (state) => {
      state.selectedClass.pending = false;
      state.selectedClass.success = false;
      state.selectedClass.failure = true;
    },
    setSelectedSubclassToStatePending: (state) => {
      state.selectedSubclass.pending = true;
      state.selectedSubclass.success = false;
      state.selectedSubclass.failure = false;
    },
    setSelectedSubclassToStateSuccess: (state, action: PayloadAction<string>) => {
      state.selectedSubclass.selected = action.payload;
      state.selectedSubclass.pending = false;
      state.selectedSubclass.success = true;
      state.selectedSubclass.failure = false;
    },
    setSelectedSubclassToStateFailure: (state) => {
      state.selectedSubclass.pending = false;
      state.selectedSubclass.success = false;
      state.selectedSubclass.failure = true;
    },
  },
});

export const { reducer: characterBuilderReducer } = characterBuilderSlice;

export const characterBuilderActions = {
  ...characterBuilderSlice.actions,

  setSelectedRaceToState: createAction(
    `${SLICE_NAME}/setSelectedRaceToState`,
    (payload: { race: string }) => ({
      payload,
    }),
  ),
  setSelectedSubraceToState: createAction(
    `${SLICE_NAME}/setSelectedSubraceToState`,
    (payload: { subrace: string }) => ({
      payload,
    }),
  ),
  setSelectedClassToState: createAction(
    `${SLICE_NAME}/setSelectedClassToState`,
    (payload: { class: string }) => ({
      payload,
    }),
  ),
  setSelectedSubclassToState: createAction(
    `${SLICE_NAME}/setSelectedSubclassToState`,
    (payload: { subclass: string }) => ({
      payload,
    }),
  ),
};
