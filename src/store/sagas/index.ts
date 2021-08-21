import { takeEvery } from 'redux-saga/effects';
import { commonActions } from '../slices/common';
import { returnAllRaces } from '../sagas/common';

export function* rootSaga() {
  yield takeEvery(commonActions.getAllRaces, returnAllRaces);
}