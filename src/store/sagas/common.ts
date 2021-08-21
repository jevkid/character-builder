import { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';
import { getAllRaces } from '../../api';
import { APIRacesResponse } from '../../api/types';
import { commonActions } from '../slices/common';

export function* returnAllRaces() {
  const response: AxiosResponse<APIRacesResponse> = yield call(getAllRaces);
  yield put(commonActions.getAllRacesLoading());

  if (response.data.results) {
    yield put(commonActions.getAllRacesSuccess(response.data.results));
  } else {
    yield put(commonActions.getAllRacesFailure());
  }
}
