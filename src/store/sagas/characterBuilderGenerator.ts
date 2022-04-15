import { put } from 'redux-saga/effects';
import { characterBuilderActions } from '../slices/characterBuilder';
import { setCharacterToLocalStorage, getCharacterFromLocalStorage } from '../../helpers/localStorage';


export function* getCharacterFromStorage() {
  yield put(characterBuilderActions.getCharacterPending());
  const character = getCharacterFromLocalStorage();
  if (character) {
    yield put(characterBuilderActions.getCharacterSuccess(character));
  } else {
    yield put(characterBuilderActions.getCharacterFailure());
  }
}

export function* setCharacterToStorage(action: ReturnType<typeof characterBuilderActions.saveCharacter>) {
  yield put(characterBuilderActions.saveCharacterPending());
  const character = setCharacterToLocalStorage(action.payload.character);
  if (character) {
    action.payload.resolve();
    yield put(characterBuilderActions.saveCharacterSuccess(character));
  } else {
    action.payload.reject();
    yield put(characterBuilderActions.saveCharacterFailure());
  }
}