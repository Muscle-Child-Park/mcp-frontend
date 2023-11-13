/**
 * 애플리케이션의 '상태'를 관리하기 위한 Stroe 구성
 */

import {configureStore} from '@reduxjs/toolkit';
import RootReducer from './RooteReducer';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: RootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {headerTitle: headerTitleState, ...}
export type AppDispatch = typeof store.dispatch;
