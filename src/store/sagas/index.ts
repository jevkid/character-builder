import { takeEvery } from 'redux-saga/effects';
import { commonActions } from '../slices/common';
import { returnAllRaces, returnAllClasses, returnAllSubClasses, returnAllSubRaces, returnRaceDetails, returnClassDetails, returnAllBackgrounds } from '../sagas/common';

export function* rootSaga() {
  yield takeEvery(commonActions.getAllRaces, returnAllRaces);
  yield takeEvery(commonActions.getRaceDetails, returnRaceDetails);
  yield takeEvery(commonActions.getClassDetails, returnClassDetails);
  yield takeEvery(commonActions.getAllSubRaces, returnAllSubRaces);
  yield takeEvery(commonActions.getAllClasses, returnAllClasses);
  yield takeEvery(commonActions.getAllSubClasses, returnAllSubClasses);
  yield takeEvery(commonActions.getAllBackgrounds, returnAllBackgrounds);
}