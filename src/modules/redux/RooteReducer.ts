/**
 * 애플리케이션에서 목적에 따라 리듀서를 분리하여 관리합니다.
 */

import {combineReducers} from 'redux';
import ReservationTypeSlice from './slice/ReservationTypeSlice';

const RootReducer = combineReducers({
  // 여기에 리듀서를 추가합니다.
  reservationStackType: ReservationTypeSlice,
});

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
