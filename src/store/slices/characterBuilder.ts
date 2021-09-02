import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormInputs } from '../../types';

export interface CharacterBuilderState {
  character: {
    savePending?: boolean;
    saveSuccess?: boolean;
    saveFailure?: boolean;
    getPending?: boolean;
    getSuccess?: boolean;
    getFailure?: boolean;
    data?: FormInputs;
  };
}

const initialState: CharacterBuilderState = {
  character: {},
};

const SLICE_NAME = 'characterBuilder';

const characterBuilderSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    saveCharacterPending: (state) => {
      state.character.savePending = true;
      state.character.saveSuccess = false;
      state.character.saveFailure = false;
    },
    saveCharacterSuccess: (state, action: PayloadAction<FormInputs>) => {
      state.character.savePending = false;
      state.character.saveSuccess = true;
      state.character.saveFailure = false;
      state.character.data = action.payload;
    },
    saveCharacterFailure: (state) => {
      state.character.savePending = false;
      state.character.saveSuccess = false;
      state.character.saveFailure = true;
    },
    getCharacterPending: (state) => {
      state.character.getPending = true;
      state.character.getSuccess = false;
      state.character.getFailure = false;
    },
    getCharacterSuccess: (state, action: PayloadAction<FormInputs>) => {
      state.character.getPending = false;
      state.character.getSuccess = true;
      state.character.getFailure = false;
      state.character.data = action.payload;
    },
    getCharacterFailure: (state) => {
      state.character.getPending = false;
      state.character.getSuccess = false;
      state.character.getFailure = true;
    },
  },
});

export const { reducer: characterBuilderReducer } = characterBuilderSlice;

export const characterBuilderActions = {
  ...characterBuilderSlice.actions,

  saveCharacter: createAction(
    `${SLICE_NAME}/saveCharacter`,
    (payload: { character: FormInputs }) => ({
      payload,
    }),
  ),
  getCharacter: createAction(
    `${SLICE_NAME}/getCharacter`,
  ),
};
