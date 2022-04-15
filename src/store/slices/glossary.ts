import { createAction, createSlice } from '@reduxjs/toolkit';

export interface GlossaryState {
  loading: boolean;
}

const initialState: GlossaryState = {
  loading: true
};

const SLICE_NAME = 'glossary';

const glossarySlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    getGlossarySuccess: (state) => {
      state.loading = false;
    },
  },
});

export const { reducer: glossaryReducer } = glossarySlice;

export const glossaryActions = {
  ...glossarySlice.actions,

  getGlossary: createAction(
    `${SLICE_NAME}/getGlossary`,
    (payload: { character: any }) => ({
      payload,
    }),
  ),
};
