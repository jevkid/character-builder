import { takeEvery } from 'redux-saga/effects';
import { commonActions } from '../slices/common';
import { characterBuilderActions } from '../slices/characterBuilder';
import { returnAllRaces, returnAllClasses, returnAllSubClasses, returnAllSubRaces, returnRaceDetails, returnClassDetails, returnAllBackgrounds, returnAllAlignments, returnAlignmentDetails } from '../sagas/common';
import { setCharacterToStorage, getCharacterFromStorage } from '../sagas/characterBuilderGenerator';

export function* rootSaga() {
  yield takeEvery(commonActions.getAllRaces, returnAllRaces);
  yield takeEvery(commonActions.getRaceDetails, returnRaceDetails);
  yield takeEvery(commonActions.getClassDetails, returnClassDetails);
  yield takeEvery(commonActions.getAllSubRaces, returnAllSubRaces);
  yield takeEvery(commonActions.getAllClasses, returnAllClasses);
  yield takeEvery(commonActions.getAllSubClasses, returnAllSubClasses);
  yield takeEvery(commonActions.getAllBackgrounds, returnAllBackgrounds);
  yield takeEvery(commonActions.getAllAlignments, returnAllAlignments);
  yield takeEvery(commonActions.getAlignmentDetails, returnAlignmentDetails);
  yield takeEvery(characterBuilderActions.saveCharacter, setCharacterToStorage);
  yield takeEvery(characterBuilderActions.getCharacter, getCharacterFromStorage);
}