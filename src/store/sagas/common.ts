import { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';
import { getAllRaces, getAllSubRaces, getAllClasses, getAllSubClasses, getRaceDetails, getClassDetails, getAllBackgrounds, getAllAlignments, getAlignmentDetails } from '../../api';
import { APIAllRacesResponse, APIAllSubRacesResponse, APIAllClassesResponse, APIAllSubClassesResponse, APIRacesResponse, APIClassesResponse, APIAlignmentsResponse, APIAllAlignmentsResponse } from '../../api/types';
import { commonActions } from '../slices/common';

export function* returnAllRaces() {
  const response: AxiosResponse<APIAllRacesResponse> = yield call(getAllRaces);
  yield put(commonActions.getAllRacesLoading());

  if (response.data) {
    yield put(commonActions.getAllRacesSuccess(response.data));
  } else {
    yield put(commonActions.getAllRacesFailure());
  }
}

export function* returnRaceDetails(action: ReturnType<typeof commonActions.getRaceDetails>) {
  const response: AxiosResponse<APIRacesResponse> = yield call(getRaceDetails, action.payload.index);
  yield put(commonActions.getDetailedRaceLoading());

  if (response.data) {
    yield put(commonActions.getDetailedRaceSuccess(response.data));
  } else {
    yield put(commonActions.getDetailedRaceFailure());
  }
}

export function* returnAllSubRaces(action: ReturnType<typeof commonActions.getAllSubRaces>) {
  const response: AxiosResponse<APIAllSubRacesResponse> = yield call(getAllSubRaces, action.payload.index);
  yield put(commonActions.getAllSubRacesLoading());

  if (response.data.results) {
    yield put(commonActions.getAllSubRacesSuccess(response.data));
  } else {
    yield put(commonActions.getAllSubRacesFailure());
  }
}

export function* returnAllClasses() {
  const response: AxiosResponse<APIAllClassesResponse> = yield call(getAllClasses);
  yield put(commonActions.getAllClassesLoading());

  if (response.data) {
    yield put(commonActions.getAllClassesSuccess(response.data));
  } else {
    yield put(commonActions.getAllClassesFailure());
  }
}


export function* returnClassDetails(action: ReturnType<typeof commonActions.getClassDetails>) {
  const response: AxiosResponse<APIClassesResponse> = yield call(getClassDetails, action.payload.index);
  yield put(commonActions.getDetailedClassLoading());

  if (response.data) {
    yield put(commonActions.getDetailedClassSuccess(response.data));
  } else {
    yield put(commonActions.getDetailedClassFailure());
  }
}

export function* returnAllSubClasses(action: ReturnType<typeof commonActions.getAllSubClasses>) {
  const response: AxiosResponse<APIAllSubClassesResponse> = yield call(getAllSubClasses, action.payload.index);
  yield put(commonActions.getAllSubClassesLoading());

  if (response.data.results) {
    yield put(commonActions.getAllSubClassesSuccess(response.data));
  } else {
    yield put(commonActions.getAllSubClassesFailure());
  }
}

export function* returnAllBackgrounds() {
  const response = getAllBackgrounds();
  yield put(commonActions.getAllBackgroundsLoading());

  if (response.data) {
    yield put(commonActions.getAllBackgroundsSuccess(response.data));
  } else {
    yield put(commonActions.getAllBackgroundsFailure());
  }
}

export function* returnAllAlignments() {
  const response: AxiosResponse<APIAllAlignmentsResponse> = yield call(getAllAlignments);
  yield put(commonActions.getAllAlignmentsLoading());

  if (response.data) {
    yield put(commonActions.getAllAlignmentsSuccess(response.data));
  } else {
    yield put(commonActions.getAllAlignmentsFailure());
  }
}

export function* returnAlignmentDetails(action: ReturnType<typeof commonActions.getAlignmentDetails>) {
  const response: AxiosResponse<APIAlignmentsResponse> = yield call(getAlignmentDetails, action.payload.index);
  yield put(commonActions.getAlignmentDetailsLoading());

  if (response.data) {
    yield put(commonActions.getAlignmentDetailsSuccess(response.data));
  } else {
    yield put(commonActions.getAlignmentDetailsFailure());
  }
}