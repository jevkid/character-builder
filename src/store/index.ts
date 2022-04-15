import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { characterBuilderReducer } from './slices/characterBuilder';
import { glossaryReducer } from './slices/glossary';
import { commonReducer } from './slices/common';
import { rootSaga } from './sagas';

const rootReducer = combineReducers({
  characterBuilder: characterBuilderReducer,
    glossary: glossaryReducer,
    common: commonReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const makeStore = () => {
  const nextSagaMiddleware = createSagaMiddleware();
  const configuredStore = configureStore({
    reducer: rootReducer,
    middleware: [nextSagaMiddleware],
  });
  nextSagaMiddleware.run(rootSaga);
  return configuredStore;
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
